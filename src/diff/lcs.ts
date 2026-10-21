import type { Node } from 'unist';
import { diffWords, diffChars } from 'diff';
import type { Parent, Text } from 'mdast';
import { DiffType, IdBox, NodeType } from '../types/base';
import { CONSTANTS } from './constants';

export function computeCharFreqUpperBound(t1: string, t2: string): number {
  const freq1 = new Map<string, number>();
  for (const ch of t1) {
    freq1.set(ch, (freq1.get(ch) || 0) + 1);
  }
  let shared = 0;
  for (const ch of t2) {
    const count = freq1.get(ch);
    if (count && count > 0) {
      shared++;
      freq1.set(ch, count - 1);
    }
  }
  return shared / Math.max(t1.length, t2.length);
}

/*
 * Return zero on failure (memory), non-zero on success.
 */
export function nodeLcs(nOld: Text, nNew: Text, n: Node, idBox: IdBox) {
  const maxLen = Math.max(nOld.value.length, nNew.value.length);

  if (maxLen > CONSTANTS.TEXT_FREQ_MAX_LEN) {
    idBox.value += 1;
    const delNode: Text = {
      _id: idBox.value,
      type: NodeType.Text,
      value: nOld.value,
      data: { diff: DiffType.Del },
      _parent: n as Parent,
    };
    idBox.value += 1;
    const insNode: Text = {
      _id: idBox.value,
      type: NodeType.Text,
      value: nNew.value,
      data: { diff: DiffType.Ins },
      _parent: n as Parent,
    };
    if (!n.children) {
      n.children = [];
    }
    n.children.push(delNode, insNode);
    return;
  }

  const changes = maxLen <= 100
    ? diffChars(nOld.value, nNew.value)
    : diffWords(nOld.value, nNew.value);

  for (const change of changes) {
    idBox.value += 1;
    const nn: Text = {
      _id: idBox.value,
      type: NodeType.Text,
      value: change.value,
      data: {},
      _parent: n as Parent,
    };
    if (change.added) {
      nn.data!.diff = DiffType.Ins;
    } else if (change.removed) {
      nn.data!.diff = DiffType.Del;
    }
    if (!n.children) {
      n.children = [];
    }
    n.children.push(nn);
  }
}
