import { diffChars } from 'diff';
import type { Text } from 'mdast';
import type { Node } from 'unist';
import { XMap } from '../lib/XMap';
import { XNode } from '../lib/XNode';
import { NodeType } from '../types/base';
import { CONSTANTS } from './constants';
import { computeCharFreqUpperBound } from './lcs';
import { matchDown, matchUp } from './match';

function extractNodeText(node: Node): string {
  if (node.type === NodeType.Text) {
    return (node as Text).value;
  }
  let text = '';
  if ((node as any).value) {
    text += (node as any).value;
  }
  if (node.children) {
    for (const child of node.children) {
      text += extractNodeText(child);
    }
  }
  return text;
}

export function computeTextSimilarity(t1: string, t2: string): number {
  if (t1 === t2) {
    return 1;
  }
  if (t1.length === 0 || t2.length === 0) {
    return 0;
  }

  const maxLen = Math.max(t1.length, t2.length);
  if (maxLen > CONSTANTS.TEXT_DIFFCHARS_MAX_LEN) {
    return computeCharFreqUpperBound(t1, t2);
  }

  const changes = diffChars(t1, t2);
  let shared = 0;
  for (const change of changes) {
    if (!change.added && !change.removed) {
      shared += change.value.length;
    }
  }
  return shared / maxLen;
}

export function applyShortTextPenalty(similarity: number, minLen: number): number {
  if (similarity === 1.0) {
    return similarity;
  }
  if (minLen >= CONSTANTS.SHORT_TEXT_MIN_LEN) {
    return similarity;
  }
  if (similarity < CONSTANTS.SHORT_TEXT_MIN_SIM) {
    return 0;
  }
  return similarity * CONSTANTS.SHORT_TEXT_PENALTY_RATIO;
}

export function similarityMatchPass(xOldMap: XMap, xNewMap: XMap): void {
  const unmatchedNew: XNode[] = [];
  for (let i = 0; i <= xNewMap.maxId; i++) {
    const xn = xNewMap.getXNode(i);
    if (!xn || !xn.node || xn.match) {
      continue;
    }
    if (xn.weight < CONSTANTS.SIMILARITY_PASS_MIN_WEIGHT) {
      continue;
    }
    if (!xn.node.children || xn.node.children.length === 0) {
      continue;
    }
    unmatchedNew.push(xn);
  }

  unmatchedNew.sort((a, b) => b.weight - a.weight);

  for (const xNew of unmatchedNew) {
    if (xNew.match) {
      continue;
    }

    const newText = extractNodeText(xNew.node!);
    const newPosRatio = xNew.node!._id! / Math.max(1, xNewMap.maxId);
    let bestScore = 0;
    let bestXOld: XNode | undefined;

    for (let i = 0; i <= xOldMap.maxId; i++) {
      const xOld = xOldMap.getXNode(i);
      if (!xOld || !xOld.node || xOld.match) {
        continue;
      }
      if (xOld.node.type !== xNew.node!.type) {
        continue;
      }

      const oldText = extractNodeText(xOld.node);
      let sim = computeTextSimilarity(oldText, newText);
      sim = applyShortTextPenalty(sim, Math.min(oldText.length, newText.length));

      if (sim === 0) {
        continue;
      }

      let score = sim + CONSTANTS.SAME_TYPE_BONUS;

      const oldPosRatio = xOld.node._id! / Math.max(1, xOldMap.maxId);
      const posDiff = Math.abs(oldPosRatio - newPosRatio);
      if (posDiff < CONSTANTS.MAX_POS_DIFF) {
        score += (CONSTANTS.MAX_POS_DIFF - posDiff) * (CONSTANTS.MAX_POS_BONUS / CONSTANTS.MAX_POS_DIFF);
      }

      if (score > bestScore) {
        bestScore = score;
        bestXOld = xOld;
      }
    }

    if (bestXOld && bestScore >= CONSTANTS.FALLBACK_LCS_THRESHOLD) {
      matchDown(bestXOld, xOldMap, xNew, xNewMap);
      matchUp(bestXOld, xOldMap, xNew, xNewMap);
    }
  }
}
