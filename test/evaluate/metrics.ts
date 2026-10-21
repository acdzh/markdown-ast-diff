import type { Node, Parent } from 'unist';
import { visit } from 'unist-util-visit';
import { DiffType, DiffNodeType } from '../../src/types/base';
import { isLeafNode, extractText } from './extractText';
import { reconstructNew } from './reconstruct';
import { renderAstToMarkdown } from '../utils/renderAstToMarkdown';
import { markdownToAst } from '../utils/transform';
import { transformAstWithDiffDataToAstWithDiffNode } from '../../src/utils/transform';
import { similarity } from '../../src/lib/strings';

const INS_NODE_TYPES = new Set<string>([DiffNodeType.Ins, DiffNodeType.InlineIns]);
const DEL_NODE_TYPES = new Set<string>([DiffNodeType.Del, DiffNodeType.InlineDel]);
const INLINE_DIFF_NODE_TYPES = new Set<string>([DiffNodeType.InlineIns, DiffNodeType.InlineDel]);

export interface CaseMetrics {
  correctness: number;
  matchRate: number;
  fragmentation: number;
  granularityHitRate: number;
  perfMs: number;
  score: number;
}

function normalizeMarkdown(md: string): string {
  return md.replace(/\r\n/g, '\n').trim();
}

export function measureCorrectness(
  diffAst: Node,
  _oldMarkdown: string,
  newMarkdown: string,
): number {
  try {
    const reconstructedNewAst = reconstructNew(diffAst);
    const expectedNewAst = markdownToAst(newMarkdown);

    const reconstructedNewMd = normalizeMarkdown(renderAstToMarkdown(reconstructedNewAst));
    const expectedNewMd = normalizeMarkdown(renderAstToMarkdown(expectedNewAst));

    return reconstructedNewMd === expectedNewMd ? 1 : 0;
  } catch {
    return 0;
  }
}

export function measureMatchRate(diffAst: Node): number {
  let matched = 0;
  let total = 0;

  visit(diffAst, (node: Node) => {
    if (!isLeafNode(node)) {
      return;
    }
    total++;
    if (!node.data?.diff) {
      matched++;
    }
  });

  if (total === 0) {
    return 1;
  }
  return matched / total;
}

function collectLeafDiffStates(node: Node): Array<string | null> {
  const states: Array<string | null> = [];

  function walk(n: Node): void {
    if (isLeafNode(n)) {
      states.push((n.data?.diff as string) ?? null);
      return;
    }
    if (n.children) {
      for (const child of n.children) {
        walk(child);
      }
    }
  }

  walk(node);
  return states;
}

export function measureFragmentation(diffAst: Node): number {
  const states = collectLeafDiffStates(diffAst);
  if (states.length <= 1) {
    return 0;
  }

  let switches = 0;
  for (let i = 1; i < states.length; i++) {
    if (states[i] !== states[i - 1]) {
      switches++;
    }
  }

  return switches / (states.length - 1);
}

function hasInlineDiffChildren(node: Node): boolean {
  let found = false;
  visit(node, (n: Node) => {
    if (INLINE_DIFF_NODE_TYPES.has(n.type)) {
      found = true;
      return false;
    }
  });
  return found;
}

export function measureGranularity(diffAst: Node): number {
  const diffNodeAst = JSON.parse(JSON.stringify(diffAst));
  transformAstWithDiffDataToAstWithDiffNode(diffNodeAst);

  let totalPairs = 0;
  let missCount = 0;

  function scanChildren(parent: Node): void {
    if (!parent.children) {
      return;
    }

    const children: Node[] = parent.children;
    for (let i = 0; i < children.length - 1; i++) {
      const curr = children[i];
      const next = children[i + 1];

      if (DEL_NODE_TYPES.has(curr.type) && INS_NODE_TYPES.has(next.type)) {
        totalPairs++;

        const delText = extractText(curr);
        const insText = extractText(next);

        if (delText.length === 0 && insText.length === 0) {
          continue;
        }

        const sim = similarity(delText, insText);

        if (sim > 0.4) {
          const currHasInline = hasInlineDiffChildren(curr);
          const nextHasInline = hasInlineDiffChildren(next);
          if (!currHasInline && !nextHasInline) {
            missCount++;
          }
        }
      }
    }

    for (const child of children) {
      if (!DEL_NODE_TYPES.has(child.type) && !INS_NODE_TYPES.has(child.type)) {
        scanChildren(child);
      }
    }
  }

  scanChildren(diffNodeAst);

  if (totalPairs === 0) {
    return 1;
  }
  return 1 - missCount / totalPairs;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function computeScore(metrics: Omit<CaseMetrics, 'score'>): number {
  const perfScore = clamp((1000 - metrics.perfMs) / 950, 0, 1);
  return metrics.correctness * (
    0.25 * metrics.matchRate
    + 0.25 * (1 - metrics.fragmentation)
    + 0.35 * metrics.granularityHitRate
    + 0.15 * perfScore
  );
}
