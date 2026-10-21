import DiffMatchPatch from 'diff-match-patch';
import type { Node } from 'unist';
import type { Parent, Text } from 'mdast';
import { DiffType, IdBox, NodeType } from '../types/base';
import { CONSTANTS } from './constants';
import { nodeCloneTree } from './clone';
import {
  tokenizeInlineChildren,
  buildTokenTable,
  encodeTokens,
  decodeTokens,
  trimSharedTokenEdges,
  createPlaceholderMap,
  PlaceholderMap,
} from './inline-tokenizer';

export interface InlineDiffResult {
  nodes: Node[];
  shouldFallback: boolean;
}

const dmp = new DiffMatchPatch();

function tokensToNodes(
  tokens: string[],
  diff: DiffType | undefined,
  pmap: PlaceholderMap,
  parentNode: Node,
  idBox: IdBox,
): Node[] {
  const result: Node[] = [];
  let textBuf = '';

  function flushText() {
    if (textBuf) {
      idBox.value += 1;
      const textNode: Text = {
        _id: idBox.value,
        type: NodeType.Text,
        value: textBuf,
        data: {},
        _parent: parentNode as Parent,
      };
      if (diff) {
        textNode.data!.diff = diff;
      }
      result.push(textNode);
      textBuf = '';
    }
  }

  for (const token of tokens) {
    const originalNode = pmap.placeholderToNode.get(token);
    if (originalNode) {
      flushText();
      const cloned = nodeCloneTree(originalNode, idBox);
      cloned._parent = parentNode as Parent;
      if (diff) {
        if (!cloned.data) {
          cloned.data = {};
        }
        cloned.data.diff = diff;
      }
      result.push(cloned);
    } else {
      textBuf += token;
    }
  }
  flushText();

  return result;
}

function checkEdgeEqualFallback(
  parts: [number, string][],
  oldTokenCount: number,
  newTokenCount: number,
  table: { codeToToken: Map<string, string> },
): boolean {
  const equalParts = parts.filter(([op]) => op === 0);
  if (equalParts.length !== 1) {
    return false;
  }

  const equalIdx = parts.indexOf(equalParts[0]);
  if (equalIdx !== 0 && equalIdx !== parts.length - 1) {
    return false;
  }

  let equalTokens = 0;
  for (const ch of equalParts[0][1]) {
    if (table.codeToToken.has(ch)) {
      equalTokens++;
    }
  }

  const minCount = Math.min(oldTokenCount, newTokenCount);
  return (
    equalTokens <= CONSTANTS.INLINE_EDGE_EQUAL_TOKEN_THRESHOLD &&
    equalTokens / minCount <= CONSTANTS.INLINE_EDGE_EQUAL_RATIO_THRESHOLD
  );
}

function checkWholeReplacementFallback(
  parts: [number, string][],
  oldTokenCount: number,
  newTokenCount: number,
  table: { codeToToken: Map<string, string> },
): boolean {
  const minCount = Math.min(oldTokenCount, newTokenCount);
  if (minCount < CONSTANTS.INLINE_WHOLE_REPLACEMENT_MIN_TOKEN_COUNT) {
    return false;
  }

  let equalTokens = 0;
  for (const [op, text] of parts) {
    if (op === 0) {
      for (const ch of text) {
        if (table.codeToToken.has(ch)) {
          equalTokens++;
        }
      }
    }
  }

  if (equalTokens === 0) {
    return false;
  }

  return equalTokens / minCount <= CONSTANTS.INLINE_WHOLE_REPLACEMENT_EQUAL_RATIO_THRESHOLD;
}

function checkSharedEdgeFallback(
  parts: [number, string][],
  sharedEdgeTokens: number,
  oldTokenCount: number,
  newTokenCount: number,
  table: { codeToToken: Map<string, string> },
): boolean {
  const minCount = Math.min(oldTokenCount, newTokenCount);
  if (minCount < CONSTANTS.INLINE_WHOLE_REPLACEMENT_MIN_TOKEN_COUNT) {
    return false;
  }
  if (sharedEdgeTokens === 0) {
    return false;
  }

  let middleEqualTokens = 0;
  for (const [op, text] of parts) {
    if (op === 0) {
      for (const ch of text) {
        if (table.codeToToken.has(ch)) {
          middleEqualTokens++;
        }
      }
    }
  }

  if (middleEqualTokens > 0) {
    return false;
  }

  return (
    sharedEdgeTokens <= CONSTANTS.INLINE_SHARED_EDGE_TOKEN_THRESHOLD &&
    sharedEdgeTokens / minCount <= CONSTANTS.INLINE_EDGE_EQUAL_RATIO_THRESHOLD
  );
}

export function diffInlineChildren(
  oldChildren: Node[],
  newChildren: Node[],
  idBox: IdBox,
  parentNode: Node,
): InlineDiffResult {
  const pmap = createPlaceholderMap();
  const oldTokens = tokenizeInlineChildren(oldChildren, pmap);
  const newTokens = tokenizeInlineChildren(newChildren, pmap);

  if (
    Math.max(oldTokens.length, newTokens.length) > CONSTANTS.INLINE_DMP_TOKEN_LIMIT
  ) {
    return { nodes: [], shouldFallback: true };
  }

  const oldText = oldTokens.join('');
  const newText = newTokens.join('');
  if (oldText === newText) {
    return {
      nodes: tokensToNodes(newTokens, undefined, pmap, parentNode, idBox),
      shouldFallback: false,
    };
  }

  const { sharedPrefix, sharedSuffix, oldMiddle, newMiddle } = trimSharedTokenEdges(
    oldTokens,
    newTokens,
  );

  if (oldMiddle.length === 0 && newMiddle.length === 0) {
    return {
      nodes: tokensToNodes(newTokens, undefined, pmap, parentNode, idBox),
      shouldFallback: false,
    };
  }

  const table = buildTokenTable(oldMiddle, newMiddle);
  const oldEncoded = encodeTokens(oldMiddle, table);
  const newEncoded = encodeTokens(newMiddle, table);

  const rawParts = dmp.diff_main(oldEncoded, newEncoded, false);
  dmp.diff_cleanupSemantic(rawParts);

  const sharedEdgeTokens = sharedPrefix.length + sharedSuffix.length;

  if (checkEdgeEqualFallback(rawParts, oldTokens.length, newTokens.length, table)) {
    return { nodes: [], shouldFallback: true };
  }
  if (checkWholeReplacementFallback(rawParts, oldTokens.length, newTokens.length, table)) {
    return { nodes: [], shouldFallback: true };
  }
  if (checkSharedEdgeFallback(rawParts, sharedEdgeTokens, oldTokens.length, newTokens.length, table)) {
    return { nodes: [], shouldFallback: true };
  }

  const resultNodes: Node[] = [];

  if (sharedPrefix.length > 0) {
    resultNodes.push(...tokensToNodes(sharedPrefix, undefined, pmap, parentNode, idBox));
  }

  for (const [op, text] of rawParts) {
    const tokens = decodeTokens(text, table);
    if (op === 0) {
      resultNodes.push(...tokensToNodes(tokens, undefined, pmap, parentNode, idBox));
    } else if (op === -1) {
      resultNodes.push(...tokensToNodes(tokens, DiffType.Del, pmap, parentNode, idBox));
    } else if (op === 1) {
      resultNodes.push(...tokensToNodes(tokens, DiffType.Ins, pmap, parentNode, idBox));
    }
  }

  if (sharedSuffix.length > 0) {
    resultNodes.push(...tokensToNodes(sharedSuffix, undefined, pmap, parentNode, idBox));
  }

  return { nodes: resultNodes, shouldFallback: false };
}
