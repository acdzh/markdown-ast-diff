import type { Node } from 'unist';
import { diffArrays } from 'diff';

/**
 * 评测用 token 流。
 *
 * 把 diff AST（或普通 mdast）按文档顺序展开，每个单元带上「继承后的」diff 状态：
 * 容器节点（heading / paragraph / list / listItem ...）上的 `data.diff` 会传播给所有后代，
 * 因此“整块新增的段落”里的文字也会被计为 ins。
 *
 * 展开分两步：
 * 1. 先展开为「单元」：文本按字符展开（带语义上下文 ctx、所属块 block、状态 state），
 *    代码行 / HTML 行 / 图片 / 勾选框 / 表格对齐等作为原子单元。
 * 2. 再分别按旧侧（去掉 ins）和新侧（去掉 del）切词。同一块内、同一 ctx 的相邻字符
 *    拼起来再切词，所以 "第4" + "2→3" + "版" 这种跨节点的切分不会影响 token 边界。
 *    两侧覆盖完全相同单元且全为 eq 的 token 记为 eq，否则旧侧记 del、新侧记 ins。
 *
 * 每个 token 的 key 含语义上下文（标题级别、加粗、链接 url、列表类型、表头/表体等）。
 * 同样的文字从普通变成加粗，key 会变化；如果算法匹配了节点却没有标注这种变化，
 * 还原校验就会失败。
 *
 * 空白不产生 token；代码块 / HTML / frontmatter 按行产生 token（行内缩进有意义）。
 */

export type TokenState = 'eq' | 'ins' | 'del';

export interface Token {
  text: string;
  key: string;
  state: TokenState;
}

interface CharUnit {
  kind: 'char';
  ch: string;
  ctx: string;
  block: number;
  state: TokenState;
}

interface AtomUnit {
  kind: 'atom';
  text: string;
  key: string;
  state: TokenState;
}

type Unit = CharUnit | AtomUnit;

const MARK_NODE_STATES: Record<string, TokenState> = {
  ins: 'ins',
  inlineIns: 'ins',
  del: 'del',
  inlineDel: 'del',
};

const CJK = '\\p{Script=Han}\\p{Script=Hiragana}\\p{Script=Katakana}';
const TEXT_TOKEN_REGEX = new RegExp(
  `[${CJK}]|(?:(?![${CJK}])[\\p{L}\\p{N}\\p{M}_])+|\\S`,
  'gu',
);

/**
 * 文本切词：CJK 逐字，其他文字按「字母数字串」成词，其余非空白字符逐个成词。
 */
export function tokenizeText(value: string): string[] {
  return value.match(TEXT_TOKEN_REGEX) ?? [];
}

function splitLines(value: string): string[] {
  return value.replace(/\r\n?/g, '\n').split('\n');
}

function sub(ctx: string, seg: string): string {
  return ctx ? `${ctx}/${seg}` : seg;
}

function nodeState(node: Node, inherited: TokenState): TokenState {
  const own = node.data?.diff as string | undefined;
  if (own === 'ins' || own === 'del') {
    return own;
  }
  return MARK_NODE_STATES[node.type] ?? inherited;
}

function collectUnits(root: Node): Unit[] {
  const units: Unit[] = [];
  let block = 0;

  const atom = (text: string, key: string, state: TokenState) => {
    units.push({ kind: 'atom', text, key, state });
  };

  const chars = (value: string, ctx: string, state: TokenState) => {
    for (const ch of value) {
      units.push({ kind: 'char', ch, ctx, block, state });
    }
  };

  const lines = (values: string[], ctx: string, state: TokenState) => {
    for (const line of values) {
      const trimmedEnd = line.replace(/\s+$/, '');
      if (!trimmedEnd.trim()) {
        continue;
      }
      atom(trimmedEnd.trim(), `${ctx}|${trimmedEnd}`, state);
    }
  };

  const children = (node: Node, state: TokenState, ctx: string) => {
    for (const child of node.children ?? []) {
      walk(child, state, ctx);
    }
  };

  /** 块级容器：前后切断字符拼接 */
  const blockChildren = (node: Node, state: TokenState, ctx: string) => {
    block++;
    children(node, state, ctx);
    block++;
  };

  const walk = (node: Node, inherited: TokenState, ctx: string): void => {
    const state = nodeState(node, inherited);
    const n = node as any;

    if (MARK_NODE_STATES[node.type]) {
      children(node, state, ctx);
      return;
    }

    switch (node.type) {
      case 'text':
        chars(n.value ?? '', ctx, state);
        return;
      case 'inlineCode':
        chars(n.value ?? '', sub(ctx, 'code'), state);
        return;
      case 'inlineMath':
        chars(n.value ?? '', sub(ctx, 'math'), state);
        return;
      case 'math':
        block++;
        lines(splitLines(n.value ?? ''), sub(ctx, 'math'), state);
        block++;
        return;
      case 'code': {
        block++;
        const codeCtx = sub(ctx, 'pre');
        if (n.lang) {
          atom(`lang:${n.lang}`, `${codeCtx}|lang:${n.lang}`, state);
        }
        const newLines = splitLines(n.value ?? '');
        const oldContent = n.data?.diffOldContent;
        if (state === 'eq' && typeof oldContent === 'string') {
          // 库对匹配代码块的约定：节点内容是新版本，旧版本放在 data.diffOldContent，
          // 由渲染端做行级 diff。评测按同样的约定展开。
          for (const part of diffArrays(splitLines(oldContent), newLines)) {
            lines(part.value, codeCtx, part.added ? 'ins' : part.removed ? 'del' : 'eq');
          }
        } else {
          lines(newLines, codeCtx, state);
        }
        block++;
        return;
      }
      case 'html':
        block++;
        lines(splitLines(n.value ?? ''), sub(ctx, 'html'), state);
        block++;
        return;
      case 'yaml':
      case 'toml':
        block++;
        lines(splitLines(n.value ?? ''), sub(ctx, node.type), state);
        block++;
        return;
      case 'image':
      case 'imageReference': {
        const target = node.type === 'image' ? `${n.url}|${n.title ?? ''}` : `ref:${n.identifier}`;
        const imgCtx = sub(ctx, `img(${target})`);
        if (tokenizeText(n.alt ?? '').length === 0) {
          atom('[img]', `${imgCtx}|[img]`, state);
        } else {
          block++;
          chars(n.alt, imgCtx, state);
          block++;
        }
        return;
      }
      case 'break':
        atom('↵', `${ctx}|↵`, state);
        return;
      case 'thematicBreak':
        atom('---', `${ctx}|---`, state);
        return;
      case 'footnoteReference':
        atom(`[^${n.identifier}]`, `${ctx}|[^${n.identifier}]`, state);
        return;
      case 'definition':
        atom(`[${n.identifier}]:${n.url}`, `${ctx}|def:${n.identifier}=${n.url}|${n.title ?? ''}`, state);
        return;
      case 'footnoteDefinition':
        atom(`[^${n.identifier}]:`, `${ctx}|fndef:${n.identifier}`, state);
        blockChildren(node, state, sub(ctx, 'fn'));
        return;
      case 'heading':
        blockChildren(node, state, sub(ctx, `h${n.depth}`));
        return;
      case 'blockquote':
        blockChildren(node, state, sub(ctx, 'quote'));
        return;
      case 'list':
        blockChildren(node, state, sub(ctx, n.ordered ? 'ol' : 'ul'));
        return;
      case 'listItem': {
        const itemCtx = sub(ctx, 'li');
        if (n.checked === true || n.checked === false) {
          const box = n.checked ? '[x]' : '[ ]';
          atom(box, `${itemCtx}|${box}`, state);
        }
        blockChildren(node, state, itemCtx);
        return;
      }
      case 'table': {
        // 只有显式对齐（:--- / :---: / ---:）才产生 token；默认对齐不可见，
        // 增删列由单元格本身体现，不需要再通过对齐数组重复计数。
        const explicit = (n.align ?? [])
          .map((a: string | null, i: number) => (a ? `${i}:${a}` : null))
          .filter(Boolean)
          .join(',');
        if (explicit) {
          atom(`align(${explicit})`, `${ctx}|align(${explicit})`, state);
        }
        block++;
        (node.children ?? []).forEach((row, i) => {
          walk(row, state, sub(ctx, i === 0 ? 'th' : 'td'));
        });
        block++;
        return;
      }
      case 'tableRow':
      case 'tableCell':
      case 'paragraph':
        blockChildren(node, state, ctx);
        return;
      case 'emphasis':
        children(node, state, sub(ctx, 'em'));
        return;
      case 'strong':
        children(node, state, sub(ctx, 'strong'));
        return;
      case 'delete':
        children(node, state, sub(ctx, 's'));
        return;
      case 'link':
        children(node, state, sub(ctx, `a(${n.url}|${n.title ?? ''})`));
        return;
      case 'linkReference':
        children(node, state, sub(ctx, `aref(${n.identifier})`));
        return;
      default:
        if (node.children) {
          blockChildren(node, state, ctx);
        }
    }
  };

  walk(root, 'eq', '');
  return units;
}

interface SideToken {
  text: string;
  key: string;
  /** 覆盖的单元下标（升序） */
  indices: number[];
  allEq: boolean;
}

function tokenizeSide(units: Unit[], exclude: TokenState): SideToken[] {
  const tokens: SideToken[] = [];
  let i = 0;
  while (i < units.length) {
    const u = units[i];
    if (u.state === exclude) {
      i++;
      continue;
    }
    if (u.kind === 'atom') {
      tokens.push({ text: u.text, key: u.key, indices: [i], allEq: u.state === 'eq' });
      i++;
      continue;
    }
    // 收集同块同 ctx 的连续字符（跳过本侧不可见的单元）
    const run: Array<{ ch: string; index: number }> = [];
    const { ctx, block } = u;
    let j = i;
    while (j < units.length) {
      const v = units[j];
      if (v.state === exclude) {
        j++;
        continue;
      }
      if (v.kind !== 'char' || v.ctx !== ctx || v.block !== block) {
        break;
      }
      run.push({ ch: v.ch, index: j });
      j++;
    }
    // 按码点切词并映射回单元下标
    const str = run.map(r => r.ch).join('');
    const offsetToRun: number[] = [];
    run.forEach((r, k) => {
      for (let c = 0; c < r.ch.length; c++) {
        offsetToRun.push(k);
      }
    });
    for (const m of str.matchAll(TEXT_TOKEN_REGEX)) {
      const start = m.index ?? 0;
      const end = start + m[0].length;
      const first = offsetToRun[start];
      const last = offsetToRun[end - 1];
      const indices: number[] = [];
      let allEq = true;
      for (let k = first; k <= last; k++) {
        indices.push(run[k].index);
        if (units[run[k].index].state !== 'eq') {
          allEq = false;
        }
      }
      tokens.push({ text: m[0], key: `${ctx}|${m[0]}`, indices, allEq });
    }
    i = j;
  }
  return tokens;
}

export function flatten(root: Node | undefined | null): Token[] {
  if (!root) {
    return [];
  }
  const units = collectUnits(root);
  const oldSide = tokenizeSide(units, 'ins');
  const newSide = tokenizeSide(units, 'del');

  const sig = (t: SideToken) => t.indices.join(',');
  const oldEqSigs = new Set(oldSide.filter(t => t.allEq).map(sig));
  const pairedSigs = new Set(newSide.filter(t => t.allEq && oldEqSigs.has(sig(t))).map(sig));

  const entries: Array<{ pos: number; order: number; token: Token }> = [];
  for (const t of oldSide) {
    const eq = pairedSigs.has(sig(t));
    entries.push({ pos: t.indices[0], order: eq ? 0 : 0, token: { text: t.text, key: t.key, state: eq ? 'eq' : 'del' } });
  }
  for (const t of newSide) {
    if (pairedSigs.has(sig(t))) {
      continue;
    }
    entries.push({ pos: t.indices[0], order: 1, token: { text: t.text, key: t.key, state: 'ins' } });
  }
  entries.sort((a, b) => a.pos - b.pos || a.order - b.order);
  return entries.map(e => e.token);
}

export interface Run {
  state: TokenState;
  text: string;
  size: number;
}

/**
 * 把 token 流压成同状态的连续片段，用于断言。
 * text 为片段内 token 文本直接拼接（不含空白）。
 */
export function toRuns(tokens: Token[]): Run[] {
  const runs: Run[] = [];
  for (const t of tokens) {
    const last = runs[runs.length - 1];
    if (last && last.state === t.state) {
      last.text += t.text;
      last.size++;
    } else {
      runs.push({ state: t.state, text: t.text, size: 1 });
    }
  }
  return runs;
}

/**
 * 变更片段（hunk）数：连续的非 eq token（ins/del 混合）算一个 hunk。
 */
export function countHunks(tokens: Token[]): number {
  let hunks = 0;
  let inHunk = false;
  for (const t of tokens) {
    if (t.state !== 'eq') {
      if (!inHunk) {
        hunks++;
        inHunk = true;
      }
    } else {
      inHunk = false;
    }
  }
  return hunks;
}
