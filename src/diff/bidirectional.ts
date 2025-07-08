import type { Parent } from 'unist';

export function buildBidirectionalLinks(n: Parent) {
  if (!n.children) {
    return;
  }
  const length = n.children.length;

  n.children.forEach((child, index) => {
    if (index > 0) {
      child._before = n.children[index - 1];
    }
    if (index < length - 1) {
      child._next = n.children[index + 1];
    }
  });
}
