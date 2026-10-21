import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

const LEAF_TYPES = new Set([
  'text', 'code', 'inlineCode', 'image', 'break', 'thematicBreak', 'html',
]);

export function isLeafNode(node: Node): boolean {
  return LEAF_TYPES.has(node.type);
}

export function extractText(node: Node): string {
  const parts: string[] = [];
  visit(node, (n: Node) => {
    if (typeof (n as any).value === 'string') {
      parts.push((n as any).value);
    }
  });
  return parts.join('');
}
