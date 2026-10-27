import type { Node } from 'unist';
import type { Text } from 'mdast';
import { DiffType, IdBox, NodeType } from '../types/base';
import { CONSTANTS } from './constants';
import { nodeCloneTree } from './clone';
import { diffInlineChildren, InlineDiffResult } from './inline-diff';

const SENTENCE_BOUNDARY = /[.!?。！？](?:\s+|$)/;

interface Segment {
  nodes: Node[];
  text: string;
}

function extractText(nodes: Node[]): string {
  let text = '';
  for (const node of nodes) {
    if (node.type === NodeType.Text) {
      text += (node as Text).value;
    } else if (node.type === NodeType.Break) {
      text += '\n';
    } else if (node.children) {
      text += extractText(node.children);
    }
  }
  return text;
}

function hasSentenceBoundary(nodes: Node[]): boolean {
  for (const node of nodes) {
    if (node.type === NodeType.Break) {
      return true;
    }
    if (node.type === NodeType.Text && SENTENCE_BOUNDARY.test((node as Text).value)) {
      return true;
    }
  }
  return false;
}

function splitIntoSegments(children: Node[]): Segment[] {
  const segments: Segment[] = [];
  let current: Node[] = [];

  for (const child of children) {
    current.push(child);
    if (child.type === NodeType.Break) {
      segments.push({ nodes: [...current], text: extractText(current) });
      current = [];
    } else if (child.type === NodeType.Text) {
      const value = (child as Text).value;
      if (SENTENCE_BOUNDARY.test(value)) {
        segments.push({ nodes: [...current], text: extractText(current) });
        current = [];
      }
    }
  }

  if (current.length > 0) {
    segments.push({ nodes: current, text: extractText(current) });
  }

  return segments;
}

function computeSimpleSimilarity(a: string, b: string): number {
  if (a === b) {
    return 1;
  }
  if (a.length === 0 || b.length === 0) {
    return 0;
  }
  const maxLen = Math.max(a.length, b.length);
  let shared = 0;
  const freq = new Map<string, number>();
  for (const ch of a) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  for (const ch of b) {
    const count = freq.get(ch);
    if (count && count > 0) {
      shared++;
      freq.set(ch, count - 1);
    }
  }
  return shared / maxLen;
}

function lcsMatchSegments(
  oldSegments: Segment[],
  newSegments: Segment[],
): Array<[number, number]> {
  const m = oldSegments.length;
  const n = newSegments.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  const sim: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sim[i][j] = computeSimpleSimilarity(oldSegments[i].text, newSegments[j].text);
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (sim[i][j] >= CONSTANTS.FALLBACK_LCS_THRESHOLD) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  const pairs: Array<[number, number]> = [];
  let i = 0, j = 0;
  while (i < m && j < n) {
    if (sim[i][j] >= CONSTANTS.FALLBACK_LCS_THRESHOLD) {
      pairs.push([i, j]);
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i++;
    } else {
      j++;
    }
  }

  return pairs;
}

export { hasSentenceBoundary };

function cloneNodeWithDiff(node: Node, diff: DiffType, idBox: IdBox): Node {
  const cloned = nodeCloneTree(node, idBox);
  if (!cloned.data) {
    cloned.data = {};
  }
  cloned.data.diff = diff;
  return cloned;
}

export function diffSentenceSegments(
  oldChildren: Node[],
  newChildren: Node[],
  idBox: IdBox,
  parentNode: Node,
): InlineDiffResult {
  const oldSegments = splitIntoSegments(oldChildren);
  const newSegments = splitIntoSegments(newChildren);

  if (oldSegments.length <= 1 && newSegments.length <= 1) {
    return { nodes: [], shouldFallback: true };
  }

  const pairs = lcsMatchSegments(oldSegments, newSegments);
  if (pairs.length === 0) {
    return { nodes: [], shouldFallback: true };
  }

  const resultNodes: Node[] = [];
  let oldIdx = 0;
  let newIdx = 0;

  for (const [oi, ni] of pairs) {
    while (oldIdx < oi) {
      for (const node of oldSegments[oldIdx].nodes) {
        resultNodes.push(cloneNodeWithDiff(node, DiffType.Del, idBox));
      }
      oldIdx++;
    }

    while (newIdx < ni) {
      for (const node of newSegments[newIdx].nodes) {
        resultNodes.push(cloneNodeWithDiff(node, DiffType.Ins, idBox));
      }
      newIdx++;
    }

    const subResult = diffInlineChildren(
      oldSegments[oi].nodes,
      newSegments[ni].nodes,
      idBox,
      parentNode,
    );

    if (!subResult.shouldFallback) {
      const similarity = computeSimpleSimilarity(oldSegments[oi].text, newSegments[ni].text);
      let diffGroups = 0;
      let inDiff = false;
      for (const node of subResult.nodes) {
        if (node.data?.diff) {
          if (!inDiff) {
            diffGroups++;
            inDiff = true;
          }
        } else {
          inDiff = false;
        }
      }

      if (
        diffGroups > CONSTANTS.SEGMENT_DIFF_GROUP_THRESHOLD &&
        similarity < CONSTANTS.SEGMENT_FALLBACK_SIMILARITY
      ) {
        return { nodes: [], shouldFallback: true };
      }

      resultNodes.push(...subResult.nodes);
    } else {
      return { nodes: [], shouldFallback: true };
    }

    oldIdx = oi + 1;
    newIdx = ni + 1;
  }

  while (oldIdx < oldSegments.length) {
    for (const node of oldSegments[oldIdx].nodes) {
      resultNodes.push(cloneNodeWithDiff(node, DiffType.Del, idBox));
    }
    oldIdx++;
  }

  while (newIdx < newSegments.length) {
    for (const node of newSegments[newIdx].nodes) {
      resultNodes.push(cloneNodeWithDiff(node, DiffType.Ins, idBox));
    }
    newIdx++;
  }

  return { nodes: resultNodes, shouldFallback: false };
}
