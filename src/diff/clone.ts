import type { Node, Parent } from 'unist';
import { buildBidirectionalLinks } from "./bidirectional";
import { IdBox } from '../types/base';

/*
 * Clone a single node and all of its "attributes".
 * That is, its type and "leaf node" data.
 * Assign the identifier as given.
 * Note that some attributes, such as the table column array, aren't
 * copied.
 * We'll re-create those later.
 */
export function nodeClone(v: Node, id: number): Node {
  const n: Node = {
    ...v,
    data: {
      ...v.data,
    },
    _id: id,
    type: v.type,
    position: v.position,
  };

  delete n._parent;
  delete n._before;
  delete n._next;

  return n;
}

/*
 * Take the sub-tree "v" and clone it and all of the nodes beneath it,
 * returning the cloned node.
 * This starts using identifiers at "id".
 */
export function nodeCloneTree(v: Node, idBox: IdBox): Node {
  idBox.value += 1;
  const n = nodeClone(v, idBox.value);

  if (v.children) {
    n.children = [];
    v.children.forEach((vv) => {
      const nn = nodeCloneTree(vv, idBox);
      nn._parent = n as Parent;
      n.children?.push(nn);
    });
    buildBidirectionalLinks(n as Parent);
  }

  return n;
}
