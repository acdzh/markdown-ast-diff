import type { Node } from 'unist';
import DiffMatchPatch from 'diff-match-patch';
import { diffArrays } from 'diff';
import { flatten, countHunks, type Token, type TokenState } from './flatten';

/**
 * 评测指标。
 *
 * 所有指标都基于 flatten() 产出的 token 流（diff 状态已从容器继承到叶子）。
 *
 * - newCorrect / oldCorrect：硬指标。diff 流去掉 del 必须等于新文档，去掉 ins 必须等于
 *   旧文档。后者能抓住”节点匹配了但没标出变化”造成的信息丢失（例如链接 url 改了、
 *   代码语言改了、文字被加粗了，但输出里看不到来）。
 * - efficiency：变更精简度。参考 diff（token 级 LCS + 语义清理）的变更 token 数 /
 *   算法标注的变更 token 数。整块替换、错配都会把分母撑大。
 * - cohesion：变更聚合度。参考 diff 的 hunk 数 / 算法 hunk 数。结果越碎越低。
 *   当 efficiency >= 1 时（算法标注的变更不超过参考），cohesion 的惩罚会减弱：
 *   精细化 diff 在结构化场景（表格、列表）下天然产生更多 hunk，此时碎片化
 *   不代表质量退化。
 * - changeRatio：信息项，算法标注为变更的 token 占比。
 *
 * score = correct × (0.6 × efficiency + 0.4 × adjustedCohesion)
 * 性能单独报告，不参与 score（与机器相关，且现有用例都远低于预算）。
 */

export interface StreamStats {
  total: number;
  eq: number;
  ins: number;
  del: number;
  hunks: number;
}

export interface CaseMetrics {
  newCorrect: boolean;
  /** 旧侧内容完整（允许顺序不同） */
  oldCorrect: boolean;
  /** 旧侧顺序也完全一致；false 表示删除内容被放到了错误的位置 */
  oldOrdered: boolean;
  correct: boolean;
  efficiency: number;
  cohesion: number;
  changeRatio: number;
  algo: StreamStats;
  reference: StreamStats;
  perfMs: number;
  score: number;
}

function keysEqual(a: Token[], b: Token[]): boolean {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i].key !== b[i].key) {
      return false;
    }
  }
  return true;
}

function countKeys(tokens: Token[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const t of tokens) {
    m.set(t.key, (m.get(t.key) ?? 0) + 1);
  }
  return m;
}

function multisetEqual(a: Token[], b: Token[]): boolean {
  if (a.length !== b.length) {
    return false;
  }
  const ca = countKeys(a);
  const cb = countKeys(b);
  for (const [k, v] of ca) {
    if (cb.get(k) !== v) {
      return false;
    }
  }
  return true;
}

/**
 * 多重集差异摘要：missing = 应该有但没有，extra = 不该有但出现了。
 */
function multisetDiff(actual: Token[], expected: Token[], limit = 8): string {
  const ca = countKeys(actual);
  const ce = countKeys(expected);
  const missing: string[] = [];
  const extra: string[] = [];
  for (const [k, v] of ce) {
    const d = v - (ca.get(k) ?? 0);
    if (d > 0) {
      missing.push(`${k.split('|').pop()}×${d}`);
    }
  }
  for (const [k, v] of ca) {
    const d = v - (ce.get(k) ?? 0);
    if (d > 0) {
      extra.push(`${k.split('|').pop()}×${d}`);
    }
  }
  return `missing [${missing.slice(0, limit).join(' ')}${missing.length > limit ? ' …' : ''}] ` +
    `extra [${extra.slice(0, limit).join(' ')}${extra.length > limit ? ' …' : ''}]`;
}

/**
 * 第一处不一致的位置，便于定位 correctness 失败。
 */
export function firstMismatch(actual: Token[], expected: Token[]): string | null {
  const len = Math.max(actual.length, expected.length);
  for (let i = 0; i < len; i++) {
    if (actual[i]?.key !== expected[i]?.key) {
      const ctx = (arr: Token[]) => arr.slice(Math.max(0, i - 3), i + 4).map(t => t.text).join(' ');
      return `@${i}: got "${actual[i]?.key ?? '<end>'}" expected "${expected[i]?.key ?? '<end>'}" | got: ${ctx(actual)} | expected: ${ctx(expected)}`;
    }
  }
  return null;
}

function stats(tokens: Token[]): StreamStats {
  let eq = 0;
  let ins = 0;
  let del = 0;
  for (const t of tokens) {
    if (t.state === 'eq') {
      eq++;
    } else if (t.state === 'ins') {
      ins++;
    } else {
      del++;
    }
  }
  return { total: tokens.length, eq, ins, del, hunks: countHunks(tokens) };
}

const PRIVATE_USE_START = 0xe000;
const BMP_SAFE_RANGES: Array<[number, number]> = [
  [0x0100, 0xd7ff],
  [PRIVATE_USE_START, 0xfffd],
];

function codeForIndex(index: number): string | null {
  let rest = index;
  for (const [start, end] of BMP_SAFE_RANGES) {
    const size = end - start + 1;
    if (rest < size) {
      return String.fromCharCode(start + rest);
    }
    rest -= size;
  }
  return null;
}

/**
 * 参考 diff：token 级最小编辑 + 语义清理（合并被零散公共字符切碎的变更），
 * 近似“人类可读的理想 diff”。超出编码空间时退化为纯 LCS。
 */
export function referenceStates(oldTokens: Token[], newTokens: Token[]): TokenState[] {
  const keyToCode = new Map<string, string>();
  const encode = (tokens: Token[]): string | null => {
    let s = '';
    for (const t of tokens) {
      let code = keyToCode.get(t.key);
      if (code === undefined) {
        const next = codeForIndex(keyToCode.size);
        if (next === null) {
          return null;
        }
        code = next;
        keyToCode.set(t.key, code);
      }
      s += code;
    }
    return s;
  };

  const a = encode(oldTokens);
  const b = encode(newTokens);
  const states: TokenState[] = [];

  if (a === null || b === null) {
    const parts = diffArrays(oldTokens.map(t => t.key), newTokens.map(t => t.key));
    for (const p of parts) {
      const st: TokenState = p.added ? 'ins' : p.removed ? 'del' : 'eq';
      for (let i = 0; i < p.value.length; i++) {
        states.push(st);
      }
    }
    return states;
  }

  const dmp = new DiffMatchPatch();
  dmp.Diff_Timeout = 0;
  const diffs = dmp.diff_main(a, b, false);
  dmp.diff_cleanupSemantic(diffs);
  for (const [op, text] of diffs) {
    const st: TokenState = op === 1 ? 'ins' : op === -1 ? 'del' : 'eq';
    for (let i = 0; i < text.length; i++) {
      states.push(st);
    }
  }
  return states;
}

function referenceStats(oldTokens: Token[], newTokens: Token[]): StreamStats {
  const states = referenceStates(oldTokens, newTokens);
  return stats(states.map(state => ({ text: '', key: '', state })));
}

function ratio(reference: number, actual: number): number {
  if (actual === 0) {
    return reference === 0 ? 1 : 0;
  }
  return Math.min(1, reference / actual);
}

export function computeScore(m: Pick<CaseMetrics, 'correct' | 'efficiency' | 'cohesion'>): number {
  if (!m.correct) {
    return 0;
  }
  return 0.6 * m.efficiency + 0.4 * m.cohesion;
}

export interface MeasureInput {
  diffAst: Node;
  oldAst: Node;
  newAst: Node;
  perfMs: number;
}

export interface MeasureOutput {
  metrics: CaseMetrics;
  diffTokens: Token[];
  diagnostics: string[];
}

export function measure({ diffAst, oldAst, newAst, perfMs }: MeasureInput): MeasureOutput {
  const diffTokens = flatten(diffAst);
  const oldTokens = flatten(oldAst);
  const newTokens = flatten(newAst);
  const diagnostics: string[] = [];

  const asNew = diffTokens.filter(t => t.state !== 'del');
  const asOld = diffTokens.filter(t => t.state !== 'ins');
  const newCorrect = keysEqual(asNew, newTokens);
  const oldOrdered = keysEqual(asOld, oldTokens);
  // 旧侧内容完整性：允许顺序不同（删除节点被放在了别处），但不允许丢失或凭空多出内容
  const oldCorrect = oldOrdered || multisetEqual(asOld, oldTokens);
  if (!newCorrect) {
    diagnostics.push(`new reconstruction mismatch ${firstMismatch(asNew, newTokens)}`);
  }
  if (!oldCorrect) {
    diagnostics.push(`old content lost/added: ${multisetDiff(asOld, oldTokens)}`);
  } else if (!oldOrdered) {
    diagnostics.push(`old order differs (deleted content placed out of order) ${firstMismatch(asOld, oldTokens)}`);
  }

  const algo = stats(diffTokens);
  const reference = referenceStats(oldTokens, newTokens);

  const efficiency = ratio(reference.ins + reference.del, algo.ins + algo.del);
  const rawCohesion = ratio(reference.hunks, algo.hunks);
  const cohesion = efficiency >= 1.0 ? Math.sqrt(rawCohesion) : rawCohesion;
  const changeRatio = algo.total === 0 ? 0 : (algo.ins + algo.del) / algo.total;
  const correct = newCorrect && oldCorrect;

  const metrics: CaseMetrics = {
    newCorrect,
    oldCorrect,
    oldOrdered,
    correct,
    efficiency,
    cohesion,
    changeRatio,
    algo,
    reference,
    perfMs,
    score: computeScore({ correct, efficiency, cohesion }),
  };

  return { metrics, diffTokens, diagnostics };
}
