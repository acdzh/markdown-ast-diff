import type { Node } from 'unist';
import { toHast } from 'mdast-util-to-hast';
import { toHtml } from 'hast-util-to-html';
import { visit } from 'unist-util-visit';
import type { Element, ElementContent } from 'hast';

const DIFF_CSS = `
ins { background-color: #e6ffec; text-decoration: none; border-radius: 2px; padding: 0 2px; }
del { background-color: #ffebe9; text-decoration: line-through; border-radius: 2px; padding: 0 2px; }
ins.diff-block, del.diff-block { display: block; padding-left: 10px; border-left: 3px solid; }
ins.diff-block { border-left-color: #2cbe4e; }
del.diff-block { border-left-color: #cb2431; }
ins > hr, ins > pre { background-color: #e6ffec; }
del > hr, del > pre { background-color: #ffebe9; }
li[data-diff="ins"] { background-color: #e6ffec; border-radius: 2px; }
li[data-diff="del"] { background-color: #ffebe9; border-radius: 2px; text-decoration: line-through; }
`;

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

export function renderAstToHtml(ast: Node): string {
  const cloned = JSON.parse(JSON.stringify(ast));
  propagateDiffToHProperties(cloned);

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

  const html = toHtml(hast, { allowDangerousHtml: true });
  return `<html><head><style>${DIFF_CSS}</style></head><body>${html}</body></html>`;
}
