import type { Text } from 'mdast';
import type { Node, Parent } from 'unist';
import { XMap } from '../lib/XMap';
import { XNode } from '../lib/XNode';
import assert from '../lib/assert';
import { DiffType, IdBox, NodeType } from '../types/base';
import { isOpaque } from '../utils/node';
import { nodeClone, nodeCloneTree } from './clone';
import { nodeLcs } from './lcs';

/*
 * Merge the new tree "nNew" with the old "nOld" using a depth-first
 * algorithm.
 * The produced tree will show the new tree with deleted nodes from the
 * old and inserted ones.
 * It will also show moved nodes by delete/add pairs.
 * This uses "Phase 5" semantics, but implements the merge algorithm
 * without notes from the paper.
 */
export function nodeMerge(_nOld: Node, xOldMap: XMap, _nNew: Node, xNewMap: XMap, idBox: IdBox /* max id in new tree */) {
  let xOld: XNode | undefined, xNew: XNode | undefined;
  let n: Parent, nn: Node;

  /*
   * Invariant: the current nodes are matched.
   * Start by putting that node into the current output.
   */

  assert(_nNew && _nOld);
  assert(_nNew._xNode);
  assert(_nOld._xNode);
  xNew = _nNew._xNode;
  xOld = _nOld._xNode;
  assert(xOld.match);
  assert(xNew.match);
  assert(xNew.match === xOld.node);

  n = nodeClone(_nNew, idBox.value) as Parent;
  n.children = [];

  /* Now walk through the children on both sides. */

  let nOld = _nOld.children?.[0];
  let nNew = _nNew.children?.[0];

  while (nNew) {
    /*
     * Begin by flushing out all of the nodes that have been
     * deleted from the old tree at this level.
     * According to the paper, deleted nodes have no match.
     * These will leave us with old nodes that are in the
     * new tree (not necessarily at this level, though).
     */

    while (nOld) {
      xOld = nOld._xNode;
      assert(xOld);
      if (xOld.match || nOld.type === NodeType.Text) {
        break;
      }
      nn = nodeCloneTree(nOld, idBox);
      nn._parent = n;
      nn.data!.diff = DiffType.Del;
      n.children.push(nn);
      nOld = nOld._next;
    }

    /*
     * Now flush inserted nodes.
     * According to the paper, these have no match.
     * This leaves us with nodes that are matched somewhere
     * (not necessarily at this level) with the old.
     */

    while (nNew) {
      xNew = nNew._xNode;
      assert(xNew);
      if (xNew.match || nNew.type === NodeType.Text) {
        break;
      }
      nn = nodeCloneTree(nNew, idBox);
      nn._parent = n;
      nn.data!.diff = DiffType.Ins;
      n.children.push(nn);
      nNew = nNew._next;
    }

    /*
     * If both nodes are text nodes, then we want to run the
     * LCS algorithm on them.
     * This is an extension of the BULD algorithm.
     */
    assert(xOld && xNew);
    if (
      nOld &&
      nNew &&
      nOld.type == NodeType.Text &&
      !xOld.match &&
      nNew.type == NodeType.Text &&
      !xNew.match
    ) {
      nodeLcs(nOld as Text, nNew as Text, n, idBox);
      nOld = nOld._next;
      nNew = nNew._next;
    }

    while (nOld) {
      xOld = nOld._xNode;
      assert(xOld);
      if (xOld.match) {
        break;
      }
      nn = nodeCloneTree(nOld, idBox);
      nn._parent = n;
      (nn.data!.diff = DiffType.Del), n.children.push(nn);
      nOld = nOld._next;
    }

    while (nNew) {
      xNew = nNew._xNode;
      assert(xNew);
      if (xNew.match) {
        break;
      }
      nn = nodeCloneTree(nNew, idBox);
      nn._parent = n;
      (nn.data!.diff = DiffType.Ins), n.children.push(nn);
      nNew = nNew._next;
    }

    /* Nothing more to do at this level? */

    if (!nNew) {
      break;
    }

    /*
     * Now we take the current new node and see if it's a
     * match with a node in the current level.
     * If it is, then we can flush out old nodes (moved,
     * which we call deleted and re-inserted) until we get
     * to the matching one.
     * Then we'll be in lock-step with the old tree.
     */

    xNew = nNew._xNode;
    assert(xNew);
    assert(xNew.match);

    /* Scan ahead to find a matching old. */

    let nnOld = nOld;
    while (nnOld) {
      xOld = nnOld._xNode;
      assert(xOld);
      if (xNew.node === xOld.match) {
        break;
      }
      nnOld = nnOld._next;
    }

    /*
     * We did not find a match.
     * This means that the new node has been moved from
     * somewhere else in the tree.
     */

    if (!nnOld) {
      nn = nodeCloneTree(nNew, idBox);
      nn._parent = n;
      (nn.data!.diff = DiffType.Ins), n.children.push(nn);
      nNew = nNew._next;
      continue;
    }

    /* Match found: flush old nodes til the match. */

    while (nOld) {
      xOld = nOld._xNode;
      assert(xOld);
      if (xNew.node === xOld.match) {
        break;
      }
      nn = nodeCloneTree(nOld, idBox);
      nn._parent = n;
      (nn.data!.diff = DiffType.Del), n.children.push(nn);
      nOld = nOld._next;
    }

    assert(nOld);

    /*
     * Now we're in lock-step.
     * Do the recursive step between the matched pair.
     * Then continue on to the next nodes.
     */

    if (isOpaque(nNew)) {
      assert(isOpaque(nOld));
      nn = nodeCloneTree(nNew, idBox);
      nn._parent = n;
      n.children.push(nn);
    } else {
      assert(!isOpaque(nOld));
      nn = nodeMerge(nOld, xOldMap, nNew, xNewMap, idBox);
      nn._parent = n;
      n.children.push(nn);
    }

    nOld = nOld._next;
    nNew = nNew._next;
  }

  /* Flush remaining old nodes. */

  while (nOld) {
    nn = nodeCloneTree(nOld, idBox);
    nn._parent = n;
    (nn.data!.diff = DiffType.Del), n.children.push(nn);
    nOld = nOld._next;
  }

  return n;
}
