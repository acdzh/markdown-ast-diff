import type { Root } from 'mdast';
import type { Node, Parent } from 'unist';
import { visit } from 'unist-util-visit';
import { buildBidirectionalLinks } from '../bidirectional';

export function prepareMeta(oldTree: Root, newTree: Root) {
  for (let tree of [oldTree, newTree]) {
    let index = 0;
    visit(tree, (node: Node, _, parent?: Parent) => {
      node._parent = parent;
      node._id = index;
      index += 1;
      if (!node.data) {
        node.data = {};
      }
      if (node.children) {
        buildBidirectionalLinks(node as Parent);
      }
    });
  }

  return (compTree: Root) => {
    visit(compTree, (node) => {
      delete node._parent;
      delete node._xNode;
      delete node._id;
      delete node._before;
      delete node._next;
    });
  }
}
