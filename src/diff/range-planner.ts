import type { Node } from 'unist';

const nodeLineRangeCache = new WeakMap<Node, [number, number] | null>();

export function getNodeLineRange(node: Node): [number, number] | null {
  const cached = nodeLineRangeCache.get(node);
  if (cached !== undefined) {
    return cached;
  }
  if (!node.position) {
    nodeLineRangeCache.set(node, null);
    return null;
  }
  const range: [number, number] = [node.position.start.line, node.position.end.line];
  nodeLineRangeCache.set(node, range);
  return range;
}

export function normalizeRanges(ranges: [number, number][]): [number, number][] {
  if (ranges.length === 0) {
    return [];
  }
  const valid = ranges.filter(([s, e]) => s <= e && s > 0);
  if (valid.length === 0) {
    return [];
  }
  valid.sort((a, b) => a[0] - b[0]);

  const result: [number, number][] = [valid[0]];
  for (let i = 1; i < valid.length; i++) {
    const last = result[result.length - 1];
    if (valid[i][0] <= last[1] + 1) {
      last[1] = Math.max(last[1], valid[i][1]);
    } else {
      result.push(valid[i]);
    }
  }
  return result;
}

export type DiffPlan =
  | { kind: 'skip' }
  | { kind: 'full' }
  | { kind: 'windowed'; windows: DiffWindow[] };

export interface DiffWindow {
  oldStart: number;
  oldEnd: number;
  newStart: number;
  newEnd: number;
}

function rangesOverlapNode(ranges: [number, number][], nodeRange: [number, number]): boolean {
  for (const [s, e] of ranges) {
    if (s <= nodeRange[1] && e >= nodeRange[0]) {
      return true;
    }
  }
  return false;
}

export function planRangeDiffWindows(
  oldNodes: Node[],
  newNodes: Node[],
  fromRanges: [number, number][],
  toRanges: [number, number][],
): DiffPlan {
  const normFrom = normalizeRanges(fromRanges);
  const normTo = normalizeRanges(toRanges);

  if (normFrom.length === 0 && normTo.length === 0) {
    return { kind: 'skip' };
  }

  const anyOldHasPosition = oldNodes.some(n => getNodeLineRange(n) !== null);
  const anyNewHasPosition = newNodes.some(n => getNodeLineRange(n) !== null);
  if (!anyOldHasPosition || !anyNewHasPosition) {
    return { kind: 'full' };
  }

  const oldDirty: number[] = [];
  for (let i = 0; i < oldNodes.length; i++) {
    const range = getNodeLineRange(oldNodes[i]);
    if (range && rangesOverlapNode(normFrom, range)) {
      oldDirty.push(i);
    }
  }

  const newDirty: number[] = [];
  for (let i = 0; i < newNodes.length; i++) {
    const range = getNodeLineRange(newNodes[i]);
    if (range && rangesOverlapNode(normTo, range)) {
      newDirty.push(i);
    }
  }

  if (oldDirty.length === 0 && newDirty.length === 0) {
    return { kind: 'skip' };
  }

  if (oldDirty.length === 0 || newDirty.length === 0) {
    return { kind: 'full' };
  }

  const windows: DiffWindow[] = [];

  const oldStart = oldDirty[0];
  const oldEnd = oldDirty[oldDirty.length - 1];
  const newStart = newDirty[0];
  const newEnd = newDirty[newDirty.length - 1];

  windows.push({ oldStart, oldEnd, newStart, newEnd });

  return { kind: 'windowed', windows };
}
