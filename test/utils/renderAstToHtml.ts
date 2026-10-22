import type { Node } from 'unist';
import { toHast } from 'mdast-util-to-hast';
import { toHtml } from 'hast-util-to-html';
import { visit } from 'unist-util-visit';
import type { Element, ElementContent } from 'hast';
import { createHighlighter, type Highlighter } from 'shiki';
import * as diffLib from 'diff';

const MARKDOWN_CSS = `
/* table */
table { border-collapse: collapse; width: auto; margin: 1em 0; }
th, td { border: 1px solid #d0d7de; padding: 6px 13px; }
th { background: #f6f8fa; font-weight: 600; }
tr:nth-child(2n) { background: #f6f8fa; }

/* code */
code { padding: 0.2em 0.4em; font-size: 85%; background: #f6f8fa; border-radius: 6px; font-family: 'SF Mono', 'Fira Code', Menlo, monospace; }
pre { padding: 16px; overflow: auto; font-size: 85%; line-height: 1.45; background: #f6f8fa; border-radius: 6px; margin: 1em 0; }
pre code { padding: 0; background: none; border-radius: 0; font-size: inherit; }

/* blockquote */
blockquote { padding: 0 1em; color: #656d76; border-left: 0.25em solid #d0d7de; margin: 1em 0; }

/* hr */
hr { height: 0.25em; padding: 0; margin: 24px 0; background-color: #d0d7de; border: 0; }

/* headings */
h1, h2, h3, h4, h5, h6 { margin-top: 24px; margin-bottom: 16px; font-weight: 600; line-height: 1.25; }
h1 { font-size: 2em; padding-bottom: 0.3em; border-bottom: 1px solid #d0d7de; }
h2 { font-size: 1.5em; padding-bottom: 0.3em; border-bottom: 1px solid #d0d7de; }
h3 { font-size: 1.25em; }

/* list */
ul, ol { padding-left: 2em; margin: 0.5em 0; }
li + li { margin-top: 0.25em; }

/* image */
img { max-width: 100%; }

/* code diff */
.code-diff { border-radius: 6px; overflow: hidden; margin: 1em 0; font-size: 13px; border: 1px solid #d0d7de; }
.code-diff pre { margin: 0; padding: 0; border-radius: 0; border: none; background: #fff; }
.code-diff .shiki { background: #fff !important; }
.code-diff .diff-line { display: flex; line-height: 1.45; }
.code-diff .diff-line-gutter { width: 40px; min-width: 40px; text-align: right; padding: 0 8px 0 0; color: #8b949e; font-size: 12px; user-select: none; flex-shrink: 0; }
.code-diff .diff-line-sign { width: 20px; min-width: 20px; text-align: center; user-select: none; flex-shrink: 0; }
.code-diff .diff-line-content { flex: 1; padding-right: 12px; white-space: pre; overflow-x: auto; }
.code-diff .diff-line.del { background: #ffebe9; }
.code-diff .diff-line.del .diff-line-gutter { background: #ffd7d5; color: #82071e; }
.code-diff .diff-line.del .diff-line-sign { color: #82071e; }
.code-diff .diff-line.ins { background: #e6ffec; }
.code-diff .diff-line.ins .diff-line-gutter { background: #ccffd8; color: #116329; }
.code-diff .diff-line.ins .diff-line-sign { color: #116329; }
.code-diff .diff-line.ctx { background: #fff; }
.code-diff .diff-line.ctx .diff-line-gutter { color: #8b949e; }
.code-diff .diff-header { padding: 8px 12px; background: #f6f8fa; border-bottom: 1px solid #d0d7de; font-size: 12px; color: #656d76; font-family: 'SF Mono', 'Fira Code', Menlo, monospace; }
`;

const DIFF_CSS = `
ins { background-color: #e6ffec; text-decoration: none; border-radius: 2px; padding: 0 2px; }
del { background-color: #ffebe9; text-decoration: line-through; border-radius: 2px; padding: 0 2px; }
ins.diff-block, del.diff-block { display: block; padding-left: 10px; border-left: 3px solid; }
ins.diff-block { border-left-color: #2cbe4e; }
del.diff-block { border-left-color: #cb2431; }
ins > hr, ins > pre { background-color: #e6ffec; }
del > hr, del > pre { background-color: #ffebe9; }
ins > table, del > table { border-collapse: collapse; }
ins > table th, ins > table td { background-color: #e6ffec; }
del > table th, del > table td { background-color: #ffebe9; }
li[data-diff="ins"] { background-color: #e6ffec; border-radius: 2px; }
li[data-diff="del"] { background-color: #ffebe9; border-radius: 2px; text-decoration: line-through; }
`;

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light'],
      langs: [
        'javascript', 'typescript', 'python', 'java', 'c', 'cpp', 'csharp',
        'go', 'rust', 'ruby', 'php', 'swift', 'kotlin', 'scala',
        'html', 'css', 'scss', 'json', 'yaml', 'toml', 'xml',
        'bash', 'shell', 'sql', 'graphql', 'markdown',
        'jsx', 'tsx', 'vue', 'svelte',
        'diff', 'lua', 'perl', 'r', 'dart', 'zig',
      ],
    });
  }
  return highlighterPromise;
}

interface DiffLine {
  type: 'del' | 'ins' | 'ctx';
  oldNum?: number;
  newNum?: number;
  content: string;
}

function computeLineDiff(oldCode: string, newCode: string): DiffLine[] {
  const changes = diffLib.diffLines(oldCode, newCode);
  const lines: DiffLine[] = [];
  let oldNum = 1;
  let newNum = 1;

  for (const change of changes) {
    const lineTexts = change.value.replace(/\n$/, '').split('\n');
    for (const text of lineTexts) {
      if (change.removed) {
        lines.push({ type: 'del', oldNum: oldNum++, content: text });
      } else if (change.added) {
        lines.push({ type: 'ins', newNum: newNum++, content: text });
      } else {
        lines.push({ type: 'ctx', oldNum: oldNum++, newNum: newNum++, content: text });
      }
    }
  }

  return lines;
}

function extractShikiLineTokens(highlighter: Highlighter, code: string, lang: string): string[][] {
  const lines = code.split('\n');
  return lines.map(line => {
    if (!line) {
      return [''];
    }
    try {
      const html = highlighter.codeToHtml(line, { lang, theme: 'github-light' });
      const match = html.match(/<code[^>]*>([\s\S]*?)<\/code>/);
      if (match) {
        const inner = match[1].replace(/<span class="line">([\s\S]*?)<\/span>/, '$1');
        return [inner];
      }
    } catch {
      // lang not loaded, fall back to plain text
    }
    return [escapeHtml(line)];
  });
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function renderCodeDiffHtml(oldCode: string, newCode: string, lang: string): Promise<string> {
  const highlighter = await getHighlighter();

  if (lang && !highlighter.getLoadedLanguages().includes(lang as any)) {
    try {
      await highlighter.loadLanguage(lang as any);
    } catch {
      // unknown lang
    }
  }
  const effectiveLang = highlighter.getLoadedLanguages().includes(lang as any) ? lang : 'text';

  const diffLines = computeLineDiff(oldCode, newCode);
  const oldLines = oldCode.split('\n');
  const newLines = newCode.split('\n');

  const oldTokens = extractShikiLineTokens(highlighter, oldCode, effectiveLang);
  const newTokens = extractShikiLineTokens(highlighter, newCode, effectiveLang);

  const oldLineIndex = new Map<number, number>();
  const newLineIndex = new Map<number, number>();
  oldLines.forEach((_, i) => oldLineIndex.set(i + 1, i));
  newLines.forEach((_, i) => newLineIndex.set(i + 1, i));

  let html = `<div class="code-diff">`;
  if (lang) {
    html += `<div class="diff-header">${escapeHtml(lang)}</div>`;
  }

  for (const line of diffLines) {
    const cls = line.type;
    const leftNum = line.oldNum ?? '';
    const rightNum = line.newNum ?? '';
    const sign = line.type === 'del' ? '-' : line.type === 'ins' ? '+' : ' ';

    let highlighted: string;
    if (line.type === 'del' && line.oldNum != null) {
      const idx = oldLineIndex.get(line.oldNum);
      highlighted = idx != null && oldTokens[idx] ? oldTokens[idx].join('') : escapeHtml(line.content);
    } else if ((line.type === 'ins' || line.type === 'ctx') && line.newNum != null) {
      const idx = newLineIndex.get(line.newNum);
      highlighted = idx != null && newTokens[idx] ? newTokens[idx].join('') : escapeHtml(line.content);
    } else {
      highlighted = escapeHtml(line.content);
    }

    html += `<div class="diff-line ${cls}">`;
    html += `<span class="diff-line-gutter">${leftNum}</span>`;
    html += `<span class="diff-line-gutter">${rightNum}</span>`;
    html += `<span class="diff-line-sign">${sign}</span>`;
    html += `<span class="diff-line-content">${highlighted || ' '}</span>`;
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

function diffHandler(tagName: string, className: string) {
  return (state: any, node: any): Element => {
    const children = state.all(node) as ElementContent[];
    return {
      type: 'element',
      tagName,
      properties: { className: [className] },
      children,
    };
  };
}

function propagateDiffToHProperties(ast: Node): void {
  visit(ast, (node: Node) => {
    if (node.data?.diff) {
      if (!node.data.hProperties) {
        node.data.hProperties = {};
      }
      (node.data.hProperties as Record<string, unknown>)['data-diff'] = node.data.diff;
    }
  });
}

function mergeAdjacentCodeDiffPairs(ast: Node): void {
  if (!ast.children) {
    return;
  }
  for (const child of ast.children) {
    mergeAdjacentCodeDiffPairs(child);
  }

  const children = ast.children as Node[];
  const merged: Node[] = [];
  let i = 0;
  while (i < children.length) {
    const cur = children[i];
    const next = children[i + 1];

    if (
      cur?.type === 'del' &&
      next?.type === 'ins' &&
      cur.children?.length === 1 &&
      next.children?.length === 1 &&
      cur.children[0].type === 'code' &&
      next.children[0].type === 'code'
    ) {
      const oldCode = cur.children[0];
      const newCode = next.children[0];
      if (!newCode.data) {
        newCode.data = {};
      }
      newCode.data.diffOldContent = (oldCode as any).value;
      merged.push(newCode);
      i += 2;
      continue;
    }

    merged.push(cur);
    i++;
  }
  ast.children = merged;
}

interface CodePlaceholder {
  placeholder: string;
  lang: string;
  value: string;
  oldContent?: string;
}

async function renderCodeHighlightHtml(code: string, lang: string): Promise<string> {
  const highlighter = await getHighlighter();
  if (lang && !highlighter.getLoadedLanguages().includes(lang as any)) {
    try {
      await highlighter.loadLanguage(lang as any);
    } catch {
      // unknown lang
    }
  }
  const effectiveLang = highlighter.getLoadedLanguages().includes(lang as any) ? lang : 'text';
  return highlighter.codeToHtml(code, { lang: effectiveLang, theme: 'github-light' });
}

export async function renderAstToHtml(ast: Node): Promise<string> {
  const cloned = JSON.parse(JSON.stringify(ast));
  mergeAdjacentCodeDiffPairs(cloned);
  propagateDiffToHProperties(cloned);

  const codePlaceholders: CodePlaceholder[] = [];
  let placeholderIdx = 0;

  visit(cloned, 'code', (node: Node) => {
    const placeholder = `__CODE_BLOCK_${placeholderIdx++}__`;
    const entry: CodePlaceholder = {
      placeholder,
      lang: (node as any).lang || '',
      value: (node as any).value as string,
    };
    if (node.data?.diffOldContent) {
      entry.oldContent = node.data.diffOldContent as string;
      delete node.data.diffOldContent;
    }
    codePlaceholders.push(entry);
    (node as any).value = placeholder;
  });

  const hast = toHast(cloned, {
    allowDangerousHtml: true,
    handlers: {
      ins: diffHandler('ins', 'diff-block'),
      del: diffHandler('del', 'diff-block'),
      inlineIns: diffHandler('ins', 'diff-inline'),
      inlineDel: diffHandler('del', 'diff-inline'),
    } as any,
  });

  if (!hast) {
    return '';
  }

  let html = toHtml(hast, { allowDangerousHtml: true });

  for (const cp of codePlaceholders) {
    let replacement: string;
    if (cp.oldContent != null) {
      replacement = await renderCodeDiffHtml(cp.oldContent, cp.value, cp.lang);
    } else {
      replacement = await renderCodeHighlightHtml(cp.value, cp.lang);
    }
    const escaped = escapeHtml(cp.placeholder);
    const prePattern = new RegExp(`<pre><code[^>]*>${escaped}</code></pre>`);
    if (prePattern.test(html)) {
      html = html.replace(prePattern, replacement);
    } else {
      html = html.replace(escaped, replacement);
    }
  }

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${MARKDOWN_CSS}${DIFF_CSS}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:16px;font-size:14px;line-height:1.6;color:#1a1a1a;}</style></head><body>${html}</body></html>`;
}
