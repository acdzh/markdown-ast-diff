import { PriorityQueue } from '@datastructures-js/priority-queue';
import type { Node } from 'unist';

/*
 * Enqueue "n" into a priority queue "pq".
 * Priority is given to weights; and if weights are equal, then
 * proximity to the parse root given by a pre-order identity.
 * FIXME: use a priority heap.
 * Return zero on failure, non-zero on success.
 */
export function createNodePriorityQueue() {
  const queue = new PriorityQueue<Node>((a: Node, b: Node): number => {
    const xNodeA = a._xNode;
    const xNodeB = b._xNode;

    const weightA = xNodeA?.weight || 0;
    const weightB = xNodeB?.weight || 0;

    if (weightA !== weightB) {
      return weightB - weightA;
    }

    return a._id! - b._id!;
  });

  return queue;
}
