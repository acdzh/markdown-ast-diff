import assert from 'assert';
import { Root } from 'mdast';
import type { Node } from 'unist';
import { XMap } from '../lib/XMap';
import { XNode } from '../lib/XNode';
import { DiffType, IdBox, NodeType } from '../types/base';
import { isOpaque } from '../utils/node';
import { candidate } from './candidate';
import { matchDown, matchUp } from './match';
import { nodeMerge } from './merge';
import { nodeOptimiseBottomUp, nodeOptimiseTopDown } from './optimise';
import { prepareHeading } from './prepares/heading';
import { prepareListItem } from './prepares/listItem';
import { prepareMeta } from './prepares/meta';
import { createNodePriorityQueue } from './queue';
import { assignSigns } from './sign';

function diff(nOld: Root, nNew: Root): Root {
  const cleanups = [
    prepareHeading(nOld, nNew),
    prepareListItem(nOld, nNew),
    prepareMeta(nOld, nNew),
  ];

  const cleanupPrepares = (comp: Root) => {
    cleanups.reverse().forEach(cleanup => cleanup(comp));
  };

  let xOld: XNode | undefined, xNew: XNode | undefined;

  const xOldMap = new XMap();
  const xNewMap = new XMap();

  /*
   * First, assign signatures and weights.
   * See "Phase 2", sec 5.2.
   */
  assignSigns(null, xOldMap, nOld, false);
  assignSigns(null, xNewMap, nNew, false);

  /* Prime the priority queue with the root. */
  const queue = createNodePriorityQueue();
  queue.enqueue(nNew);

  /*
   * Match-make while we have nodes in the priority queue.
   * This is guaranteed to be finite.
   * See "Phase 3", sec 5.2.
   */
  while (queue.size() > 0) {
    const node = queue.dequeue();
    if (!node) {
      break;
    }

    xNew = node._xNode;
    if (!xNew) {
      continue;
    }

    assert(!xNew.match);
    assert(!xNew.optMatch);
    assert(xNew.opt === 0);

    /*
     * Look for candidates: if we have a matching signature,
     * test for optimality.
     * Highest optimality gets to be matched.
     * See "Phase 3", sec. 5.2.
     */
    for (let i = 0; i < xOldMap.nodes.length; i++) {
      xOld = xOldMap.getXNode(i);
      if (!xOld?.node) {
        continue;
      }
      if (xOld?.match) {
        continue;
      }
      if (xOld.sign !== xNew.sign) {
        continue;
      }

      assert(!xOld.match);
      candidate(xOld, xOldMap, xNew, xNewMap);
    }

    /*
     * No match: enqueue children ("Phase 3" cont.).
     * Ignore opaque nodes.
     */

    if (!xNew.optMatch) {
      if (isOpaque(node)) {
        continue;
      }
      node.children?.forEach((child) => queue.enqueue(child));
      continue;
    }

    /*
     * Match found and is optimal.
     * Now use the bottom-up and top-down (doesn't matter
     * which order) algorithms.
     * See "Phase 3", sec. 5.2.
     */
    assert(!xNew.match);
    const optMatchNode = xNew.optMatch as Node;
    const xOldOptMatch = optMatchNode._xNode!;
    assert(!xOldOptMatch.match);
    matchDown(xOldOptMatch, xOldMap, xNew, xNewMap);
    matchUp(xOldOptMatch, xOldMap, xNew, xNewMap);
  }

  /*
   * If our trees are *totally* different, we may end up in the
   * situation where our root nodes are never matched.  This will
   * violate an invariant in node_merge() where the entry nodes
   * are assumed to be matched.
   */
  assert(nNew._xNode);
  if (!nNew._xNode.match) {
    assert(nOld.type === NodeType.Root);
    assert(nNew.type === NodeType.Root);
    xOld = nOld._xNode;
    xNew = nNew._xNode;
    assert(xOld);
    assert(xNew);
    assert(!xOld.match);
    xNew.match = xOld.node;
    xOld.match = xNew.node;
  }

  /*
   * All nodes have been processed.
   * Now we need to optimise, so run a "Phase 4", sec. 5.2.
   * Our optimisation is nothing like the paper's.
   */
  nodeOptimiseTopDown(nNew);
  nodeOptimiseBottomUp(nNew, xOldMap, xNewMap);

  /*
   * The tree is optimal.
   * Now we need to compute the delta and merge the trees.
   * See "Phase 5", sec. 5.2.
   */
  const idBox: IdBox = { value: 0 };
  const comp = nodeMerge(nOld, xOldMap, nNew, xNewMap, idBox) as Root;

  assert(comp.type === NodeType.Root);

  cleanupPrepares(comp);

  return comp;
}

export function diffMarkdownAst(nOld?: Root, nNew?: Root): Root {
  if (!nOld && !nNew) {
    return {
      type: 'root',
      children: [],
    };
  }

  if (!nOld && nNew) {
    nNew.children?.forEach((child) => {
      if (!child.data) {
        child.data = {};
      }
      child.data.diff = DiffType.Ins;
    });
    return nNew;
  }

  if (nOld && !nNew) {
    nOld.children?.forEach((child) => {
      if (!child.data) {
        child.data = {};
      }
      child.data.diff = DiffType.Del;
    });
    return nOld;
  }

  return diff(nOld as Root, nNew as Root);
}
