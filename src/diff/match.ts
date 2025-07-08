import type { Heading, Link, ListItem } from 'mdast';
import type { Node } from 'unist';
import { XMap } from '../lib/XMap';
import { XNode } from '../lib/XNode';
import assert from '../lib/assert';
import { NodeType } from '../types/base';
import { isOpaque } from '../utils/node';

/*
 * Do the two internal nodes equal each other?
 * This depends upon the node type.
 * By default, all similarly-labelled (typed) nodes are equal.
 */
export function matchEq(n1: Node, n2: Node): boolean {
  if (n1.type !== n2.type) return false;

  switch (n1.type) {
    case NodeType.Link:
      if ((n1 as Link).url !== (n2 as Link).url) {
        return false;
      }
      if ((n1 as Link).title !== (n2 as Link).title) {
        return false;
      }
      break;
    case NodeType.Heading:
      if ((n1 as Heading).depth !== (n2 as Heading).depth) {
        return false;
      }
      break;
    case NodeType.ListItem:
      if ((n1 as ListItem).checked !== (n2 as ListItem).checked) {
        return false;
      }
      if ((n1 as ListItem).spread !== (n2 as ListItem).spread) {
        return false;
      }
      break;
    default:
      // console.warn(`[markdown-ast-diff] matchEq: unhandled node type ${n1.type}`);
      break;
  }

  return true;
}

/*
 * Return non-zero if this node is the only child.
 */
function matchSingleton(n: Node): boolean {
  if (!n._parent) {
    return true;
  }

  return n._parent.children.length === 1;
}

/*
 * Algorithm to "propagate up" according to "Phase 3" of sec. 5.2.
 * This also uses the heuristic described in "Tuning" for how many
 * levels to search upward.
 * I augment this by making singleton children pass upward.
 * FIXME: right now, this doesn't clobber existing upward matches.  Is
 * that correct behaviour?
 */
export function matchUp(
  xOld: XNode,
  xOldMap: XMap,
  xNew: XNode,
  xNewMap: XMap
) {
  /* Height: log(n) * W/W_0 or at least 1. */
  const depth = Math.max(
    1,
    Math.ceil(Math.log(xNewMap.maxNodes) * xNew.weight / xNewMap.maxWeight),
  );

  let i = 0;
  while (i < depth) {
    const oldParent = xOld.node?._parent;
    const newParent = xNew.node?._parent;

    if (!oldParent || !newParent) {
      break;
    }

    /* Are the "labels" the same? */
    if (!matchEq(oldParent, newParent)) {
      break;
    }

    assert(oldParent._xNode && newParent._xNode);
    xOld = oldParent._xNode;
    xNew = newParent._xNode;

    if (xOld.match || xNew.match) {
      break;
    }
    xOld.match = xNew.node;
    xNew.match = xOld.node;

    i += 1;
  }

  if (i !== depth) {
    return;
  }

  /*
   * Pass up singletons.
   * This is an extension of the algorithm.
   */

  while (true) {
    assert(xOld.node && xNew.node);

    const oldParent = xOld.node?._parent;
    const newParent = xNew.node?._parent;

    if (!oldParent || !newParent) {
      break;
    }

    if (!matchSingleton(xNew.node) || !matchSingleton(xOld.node)) {
      break;
    }
    if (!matchEq(oldParent, newParent)) {
      break;
    }

    assert(oldParent._xNode && newParent._xNode);
    xOld = oldParent._xNode;
    xNew = newParent._xNode;

    if (xOld.match || xNew.match) {
      break;
    }
    xOld.match = xNew.node;
    xNew.match = xOld.node;
  }
}

/*
 * Algorithm that "propagates down" according to "Phase 3" of sec. 5.2.
 * This (recursively) makes sure that a matched tree has all of the
 * subtree nodes also matched.
 */
export function matchDown(
  xOld: XNode,
  xOldMap: XMap,
  xNew: XNode,
  xNewMap: XMap
) {
  let nOld: Node | undefined, nNew: Node | undefined;

  /*
   * If we're matching into a component that has already been
   * matched, we're in the subtree proper (the subtree root is
   * checked that it's not already matched) and the fact that this
   * is within a match indicates we're more the "larger" of the
   * matches, so unset its match status.
   */

  if (xOld.match) {
    assert(xOld.match._xNode);
    assert(xOld.node === xOld.match._xNode.match);
    xOld.match._xNode.match = undefined;
    xOld.match = undefined;
  }

  assert(!xNew.match);
  assert(!xOld.match);

  xNew.match = xOld.node;
  xOld.match = xNew.node;

  assert(xNew.node);
  assert(xOld.node);
  if (isOpaque(xNew.node)) {
    assert(isOpaque(xOld.node));
    return;
  }

  nOld = xOld.node.children?.[0];
  nNew = xNew.node.children?.[0];

  while (nNew) {
    assert(nOld);
    assert(nOld._xNode);
    assert(nNew._xNode);
    matchDown(
      nOld._xNode,
      xOldMap,
      nNew._xNode,
      xNewMap
    );
    nOld = nOld._next;
    nNew = nNew._next;
  }

  assert(!nOld);
}
