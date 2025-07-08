import type { Node } from 'unist';
import { diffWords, diffChars } from 'diff';
import type { Parent, Text } from 'mdast';
import { DiffType, IdBox, NodeType } from '../types/base';

const TEXT_LENGTH_THRESHOLD = 100;

/*
 * Return zero on failure (memory), non-zero on success.
 */
export function nodeLcs(nOld: Text, nNew: Text, n: Node, idBox: IdBox) {
  const changes = nOld.value.length <= TEXT_LENGTH_THRESHOLD || nNew.value.length <= TEXT_LENGTH_THRESHOLD
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
