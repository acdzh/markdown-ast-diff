import type { Node } from 'unist';
import assert from '../lib/assert';
import { XMap } from '../lib/XMap';
import { matchEq } from './match';
import { isOpaque } from '../utils/node';

function hasChildren(node: Node): node is (Node & { children: Node[] }) {
  return Boolean(node.children) && node.children!.length > 0;
}

/*
 * Optimise from top down.
 * This works by selecting matching non-terminal nodes, both adjacent
 * (i.e., children of the same adjacent nodes), and seeing if their
 * immediate siblings may be matched by label.
 * This works well when looking at pure-paragraph changes.
 * 
 * n: Node
 * x?: xNode of ?
 * match?: match of ?
 * ?Child: child of ?.children
 * ?Next: the next of current child of ?.children
 * 
 */
export function nodeOptimiseTopDown(n: Node) {
  if (isOpaque(n) || !hasChildren(n)) {
    return;
  }

  const xn = n._xNode;
  assert(xn);

  const match = xn.match;
  if (!match) {
    return;
  }

  const xMatch = match._xNode;
  assert(xMatch);

  for (let nChild of n.children!) {
    if (isOpaque(nChild) || !hasChildren(nChild)) {
      continue;
    }

    assert(nChild._xNode);

    const mChild = nChild._xNode.match;
    if (!mChild) {
      continue;
    }
    if (mChild?._parent?._id !== match._id) {
      continue;
    }

    assert(mChild._xNode);

    /*
     * Do we have a non-terminal sibling after us without a
     * match?
     */

    const nNext = nChild._next;
    if (!nNext) {
      continue;
    }
    if (isOpaque(nNext) || !hasChildren(nNext)) {
      continue;
    }

    const xnNext = nNext._xNode;
    assert(xnNext);
    if (xnNext.match) {
      continue;
    }

    const mNext = mChild._next;
    if (!mNext) {
      continue;
    }
    if (isOpaque(mNext) || !hasChildren(mNext)) {
      continue;
    }

    const xmNext = mNext._xNode;
    assert(xmNext);
    if (xmNext.match) {
      continue;
    }

    if (!matchEq(nNext, mNext)) continue;

    xnNext.match = mNext;
    xmNext.match = nNext;
  }

  for (let nChild of n.children) {
    nodeOptimiseTopDown(nChild);
  }
}

/*
 * Optimise bottom-up over all un-matched nodes: examine all the
 * children of the un-matched nodes and see which of their matches, if
 * found, are under a root that's the same node as we are.
 * This lets us compute the largest fraction of un-matched nodes'
 * children that are in the same tree.
 * If that fraction is >50%, then we consider that the subtrees are
 * matched.
 */
export function nodeOptimiseBottomUp(n: Node, oldMap: XMap, newMap: XMap) {
  let maxN: Node | undefined;
  let matchedWeight = 0;
  let totalWeight = 0;

  assert(n._xNode);

  /* Ignore opaque nodes. */

  if (isOpaque(n) || !hasChildren(n)) {
    return;
  }

  /* Do a depth-first pre-order search. */

  for (let nn of n.children) {
    assert(nn._xNode);
    totalWeight += nn._xNode?.weight || 0;
    nodeOptimiseBottomUp(nn, oldMap, newMap);
  }

  /*
   * We're now at a non-leaf node.
   * If we're already matched, then move on.
   */

  if (n._xNode.match) {
    return;
  }

  for (let nn of n.children) {
    assert(nn._xNode);
    if (!nn._xNode.match) {
      continue;
    }
    const on = nn._xNode.match._parent;
    if (!on) {
      continue;
    }
    if (on === maxN) {
      continue;
    }
    if (!matchEq(n, on)) {
      continue;
    }

    /*
     * We've now established "on" as the parent of the
     * matched node, and that "on" is equivalent.
     * See what fraction of on's children are matched to our
     * children.
     * FIXME: this will harmlessly (except in time) look at
     * the same parent multiple times.
     */

    let weight = 0;
    for (let nnn of n.children) {
      assert(nnn._xNode);
      if (!nnn._xNode.match) {
        continue;
      }
      if (on !== nnn._xNode.match._parent) {
        continue;
      }
      weight += nnn._xNode.weight;
    }

    /* Is this the highest fraction? */

    if (weight > matchedWeight) {
      matchedWeight = weight;
      maxN = on;
    }
  }

  /* See if we found any similar sub-trees. */

  if (!maxN) {
    return;
  }

  /*
   * Our magic breakpoint is 50%.
   * If the matched sub-tree has a greater than 50% match by
   * weight, then set us as a match!
   */

  assert(maxN._xNode);
  if (matchedWeight / totalWeight >= 0.5) {
    n._xNode.match = maxN;
    maxN._xNode.match = n;
  }
}
