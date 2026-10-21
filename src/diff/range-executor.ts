import type { Root } from 'mdast';
import type { Node } from 'unist';
import { DiffType, Options } from '../types/base';
import { planRangeDiffWindows } from './range-planner';

export function diffNodesByChangedRanges(
  oldRoot: Root,
  newRoot: Root,
  changedLineRanges: { from: [number, number][]; to: [number, number][] },
  diffFn: (old: Root, new_: Root, options?: Options) => Root,
  options?: Options,
): Root | null {
  const oldChildren = oldRoot.children as Node[];
  const newChildren = newRoot.children as Node[];

  const plan = planRangeDiffWindows(
    oldChildren,
    newChildren,
    changedLineRanges.from,
    changedLineRanges.to,
  );

  if (plan.kind === 'full') {
    return null;
  }

  if (plan.kind === 'skip') {
    const resultChildren: Node[] = [];
    for (const child of newChildren) {
      if (!child.data) {
        child.data = {};
      }
      child.data.diffUnchanged = true;
      resultChildren.push(child);
    }
    return {
      type: 'root',
      children: resultChildren as Root['children'],
    };
  }

  const resultChildren: Node[] = [];

  for (const window of plan.windows) {
    for (let i = 0; i < window.newStart; i++) {
      const child = newChildren[i];
      if (!child.data) {
        child.data = {};
      }
      child.data.diffUnchanged = true;
      resultChildren.push(child);
    }

    const windowOldRoot: Root = {
      type: 'root',
      children: oldChildren.slice(window.oldStart, window.oldEnd + 1) as Root['children'],
    };
    const windowNewRoot: Root = {
      type: 'root',
      children: newChildren.slice(window.newStart, window.newEnd + 1) as Root['children'],
    };

    const optionsWithoutRanges = { ...options };
    delete optionsWithoutRanges.changedLineRanges;
    const windowResult = diffFn(windowOldRoot, windowNewRoot, optionsWithoutRanges);
    resultChildren.push(...(windowResult.children as Node[]));

    for (let i = window.newEnd + 1; i < newChildren.length; i++) {
      const child = newChildren[i];
      if (!child.data) {
        child.data = {};
      }
      child.data.diffUnchanged = true;
      resultChildren.push(child);
    }
  }

  return {
    type: 'root',
    children: resultChildren as Root['children'],
  };
}
