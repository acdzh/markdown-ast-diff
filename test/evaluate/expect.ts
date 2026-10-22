import type { Token } from './flatten';
import { toRuns } from './flatten';
import type { CaseMetrics } from './metrics';

/**
 * 用例期望（case.json 的 expect 字段）。所有字段可选，按需组合。
 *
 * 文本片段匹配规则：去掉所有空白后，片段必须完整落在某一个同状态的连续片段中。
 * 例如 "ins": ["三罐"] 表示输出里存在一段连续的新增内容，其中包含“三罐”。
 */
export interface CaseExpect {
  /** 两侧内容一致：不允许出现任何 ins/del */
  identical?: boolean;
  /** 必须出现在新增片段中的文本 */
  ins?: string[];
  /** 必须出现在删除片段中的文本 */
  del?: string[];
  /** 必须保持未变（匹配）的文本 */
  kept?: string[];
  /** 不允许出现在任何新增片段中的文本 */
  notIns?: string[];
  /** 不允许出现在任何删除片段中的文本 */
  notDel?: string[];
  /** 标注为变更（ins+del）的 token 数上限 */
  maxChangedTokens?: number;
  /** 变更片段数上限 */
  maxHunks?: number;
  /** efficiency 下限 */
  minEfficiency?: number;
}

export interface CaseSpec {
  /** 这个用例在测什么，一句话 */
  description?: string;
  /** 能力点，形如 "inline.word"、"table.row-add"，第一段为大类 */
  capability?: string;
  tags?: string[];
  expect?: CaseExpect;
  /** 已知问题：断言失败记为 XFAIL，不计入失败；若意外通过记为 XPASS */
  knownIssue?: string;
  /** 性能预算（毫秒），超出记为断言失败 */
  perfBudgetMs?: number;
  /** corpus 用例的来源信息（collect-from-git 写入） */
  source?: { repo: string; commit: string; file: string; changedLines?: number };
}

export interface AssertionResult {
  name: string;
  ok: boolean;
  detail?: string;
}

function normalize(s: string): string {
  return s.replace(/\s+/g, '');
}

export function checkExpect(
  spec: CaseSpec,
  tokens: Token[],
  metrics: CaseMetrics,
): AssertionResult[] {
  const results: AssertionResult[] = [];
  const runs = toRuns(tokens);
  const runTexts = (state: 'eq' | 'ins' | 'del') => runs.filter(r => r.state === state).map(r => normalize(r.text));
  const insRuns = runTexts('ins');
  const delRuns = runTexts('del');
  const eqRuns = runTexts('eq');
  const changed = metrics.algo.ins + metrics.algo.del;

  results.push({
    name: 'correct',
    ok: metrics.correct,
    detail: metrics.correct ? undefined : `newCorrect=${metrics.newCorrect} oldCorrect=${metrics.oldCorrect}`,
  });

  const expect = spec.expect ?? {};

  if (expect.identical) {
    results.push({
      name: 'identical',
      ok: changed === 0,
      detail: changed === 0 ? undefined : `${changed} tokens marked as changed`,
    });
  }

  const containsCheck = (label: string, fragments: string[] | undefined, pool: string[], shouldContain: boolean) => {
    for (const raw of fragments ?? []) {
      const frag = normalize(raw);
      const hit = pool.some(text => text.includes(frag));
      const ok = shouldContain ? hit : !hit;
      results.push({
        name: `${label}:${raw}`,
        ok,
        detail: ok ? undefined : shouldContain ? 'not found in any such run' : 'unexpectedly found',
      });
    }
  };

  containsCheck('ins', expect.ins, insRuns, true);
  containsCheck('del', expect.del, delRuns, true);
  containsCheck('kept', expect.kept, eqRuns, true);
  containsCheck('notIns', expect.notIns, insRuns, false);
  containsCheck('notDel', expect.notDel, delRuns, false);

  if (expect.maxChangedTokens !== undefined) {
    results.push({
      name: `maxChangedTokens≤${expect.maxChangedTokens}`,
      ok: changed <= expect.maxChangedTokens,
      detail: `actual ${changed} (reference ${metrics.reference.ins + metrics.reference.del})`,
    });
  }
  if (expect.maxHunks !== undefined) {
    results.push({
      name: `maxHunks≤${expect.maxHunks}`,
      ok: metrics.algo.hunks <= expect.maxHunks,
      detail: `actual ${metrics.algo.hunks} (reference ${metrics.reference.hunks})`,
    });
  }
  if (expect.minEfficiency !== undefined) {
    results.push({
      name: `minEfficiency≥${expect.minEfficiency}`,
      ok: metrics.efficiency >= expect.minEfficiency,
      detail: `actual ${metrics.efficiency.toFixed(3)}`,
    });
  }
  if (spec.perfBudgetMs !== undefined) {
    results.push({
      name: `perf≤${spec.perfBudgetMs}ms`,
      ok: metrics.perfMs <= spec.perfBudgetMs,
      detail: `actual ${metrics.perfMs}ms`,
    });
  }

  return results;
}

export type CaseStatus = 'pass' | 'fail' | 'xfail' | 'xpass';

export function caseStatus(spec: CaseSpec, assertions: AssertionResult[]): CaseStatus {
  const allOk = assertions.every(a => a.ok);
  if (spec.knownIssue) {
    return allOk ? 'xpass' : 'xfail';
  }
  return allOk ? 'pass' : 'fail';
}
