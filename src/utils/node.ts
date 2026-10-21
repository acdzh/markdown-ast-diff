import type { Node } from 'unist';
import { NodeType } from '../types/base';

const INLINE_TYPES: ReadonlySet<string> = new Set([
  'break',
  'delete',
  'emphasis',
  'footnote',
  'footnoteReference',
  'image',
  'imageReference',
  'inlineCode',
  'link',
  'linkReference',
  'strong',
  'text',
  'inlineMath',
]);

export function isInlineElement(node: Node): boolean {
  return INLINE_TYPES.has(node.type);
}

/*
 * If this returns non-zero, the node should be considered opaque and
 * we will not do any difference processing within it. It will still be
 * marked with weight and signature from child nodes and interior data.
 */
export function isOpaque(node: Node): boolean {
  return node.type === NodeType.Table || node.type === NodeType.YAML || node.type === NodeType.TOML;
}

/**
 * Replace a specified node in the node tree
 * @param parent Parent node
 * @param node Node to be replaced
 * @param newNode Replacement node or array of nodes
 * @param deleteCount Number of nodes to delete
 * @returns void
 */

export function replaceChildNode(parent?: Node, node?: Node, newNode?: Node | Node[], deleteCount = 1): void {
  // Parameter validation check
  if (!parent || !node || !newNode || !parent.children) {
    return;
  }
  
  // Find the position of the node in the parent's children array
  const index = parent.children.indexOf(node);
  if (index === -1) {
    return;
  }
  
  // Replace the node
  if (Array.isArray(newNode)) {
    parent.children.splice(index, deleteCount, ...newNode);
  } else {
    parent.children.splice(index, deleteCount, newNode);
  }
}
