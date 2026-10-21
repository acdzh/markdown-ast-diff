import type { Heading, Root, Text } from 'mdast';
import type { Node } from 'unist';
import { NodeType, IdBox, Options } from '../types/base';
import { CONSTANTS } from './constants';

interface Section {
  headingNode?: Node;
  headingText: string;
  nodes: Node[];
}

function getHeadingText(node: Node): string | null {
  if (node.type !== NodeType.Heading) {
    return null;
  }
  let text = '';
  if (node.children) {
    for (const child of node.children) {
      if (child.type === NodeType.Text) {
        text += (child as Text).value;
      } else if (child.children) {
        for (const grandchild of child.children) {
          if (grandchild.type === NodeType.Text) {
            text += (grandchild as Text).value;
          }
        }
      }
    }
  }
  return text;
}

export function splitSections(root: Root): Section[] {
  const sections: Section[] = [];
  let current: Section = { headingText: '', nodes: [] };

  for (const child of root.children) {
    const headingText = getHeadingText(child as Node);
    if (headingText !== null) {
      if (current.nodes.length > 0 || current.headingNode) {
        sections.push(current);
      }
      current = {
        headingNode: child as Node,
        headingText,
        nodes: [child as Node],
      };
    } else {
      current.nodes.push(child as Node);
    }
  }

  if (current.nodes.length > 0 || current.headingNode) {
    sections.push(current);
  }

  return sections;
}

interface SectionPair {
  old: Section;
  new: Section;
}

export function matchSections(oldSections: Section[], newSections: Section[]): SectionPair[] | null {
  const pairs: SectionPair[] = [];
  const matchedOld = new Set<number>();
  const matchedNew = new Set<number>();

  let oldSearchStart = 0;
  for (let j = 0; j < newSections.length; j++) {
    if (!newSections[j].headingNode) {
      continue;
    }
    for (let i = oldSearchStart; i < oldSections.length; i++) {
      if (matchedOld.has(i)) {
        continue;
      }
      if (oldSections[i].headingText === newSections[j].headingText && oldSections[i].headingNode) {
        pairs.push({ old: oldSections[i], new: newSections[j] });
        matchedOld.add(i);
        matchedNew.add(j);
        oldSearchStart = i + 1;
        break;
      }
    }
  }

  const anchorPairs: Array<[number, number]> = [];
  for (const pair of pairs) {
    const oi = oldSections.indexOf(pair.old);
    const ni = newSections.indexOf(pair.new);
    anchorPairs.push([oi, ni]);
  }

  anchorPairs.sort((a, b) => a[0] - b[0]);

  const extendedAnchors: Array<[number, number]> = [[-1, -1], ...anchorPairs, [oldSections.length, newSections.length]];
  for (let k = 0; k < extendedAnchors.length - 1; k++) {
    const [prevOi, prevNi] = extendedAnchors[k];
    const [nextOi, nextNi] = extendedAnchors[k + 1];

    const oldGapStart = prevOi + 1;
    const oldGapEnd = nextOi;
    const newGapStart = prevNi + 1;
    const newGapEnd = nextNi;

    const unmatchedOldInGap: number[] = [];
    for (let i = oldGapStart; i < oldGapEnd; i++) {
      if (!matchedOld.has(i) && oldSections[i].headingNode) {
        unmatchedOldInGap.push(i);
      }
    }

    const unmatchedNewInGap: number[] = [];
    for (let j = newGapStart; j < newGapEnd; j++) {
      if (!matchedNew.has(j) && newSections[j].headingNode) {
        unmatchedNewInGap.push(j);
      }
    }

    if (unmatchedOldInGap.length === 1 && unmatchedNewInGap.length === 1) {
      const oi = unmatchedOldInGap[0];
      const ni = unmatchedNewInGap[0];
      pairs.push({ old: oldSections[oi], new: newSections[ni] });
      matchedOld.add(oi);
      matchedNew.add(ni);
    }
  }

  const minSections = Math.min(oldSections.length, newSections.length);
  if (pairs.length < minSections / CONSTANTS.SECTION_COVERAGE_DIVISOR) {
    return null;
  }

  return pairs;
}

function countHeadings(root: Root): number {
  let count = 0;
  for (const child of root.children) {
    if ((child as Node).type === NodeType.Heading) {
      count++;
    }
  }
  return count;
}

export function canUseSectionAwareDiff(nOld: Root, nNew: Root): boolean {
  return (
    countHeadings(nOld) >= CONSTANTS.MIN_SECTION_COUNT &&
    countHeadings(nNew) >= CONSTANTS.MIN_SECTION_COUNT
  );
}

export function sectionAwareDiff(
  nOld: Root,
  nNew: Root,
  diffFn: (old: Root, new_: Root, options?: Options) => Root,
  options?: Options,
): Root | null {
  const oldSections = splitSections(nOld);
  const newSections = splitSections(nNew);

  const pairs = matchSections(oldSections, newSections);
  if (!pairs) {
    return null;
  }

  const matchedOldSections = new Set(pairs.map(p => p.old));
  const matchedNewSections = new Set(pairs.map(p => p.new));

  const resultChildren: Node[] = [];

  const pairMap = new Map<Section, Section>();
  for (const pair of pairs) {
    pairMap.set(pair.new, pair.old);
  }

  for (const newSection of newSections) {
    const oldSection = pairMap.get(newSection);
    if (oldSection) {
      const sectionOldRoot: Root = { type: 'root', children: oldSection.nodes as Root['children'] };
      const sectionNewRoot: Root = { type: 'root', children: newSection.nodes as Root['children'] };
      const sectionResult = diffFn(sectionOldRoot, sectionNewRoot, options);
      resultChildren.push(...(sectionResult.children as Node[]));
    } else {
      for (const node of newSection.nodes) {
        if (!node.data) {
          node.data = {};
        }
        node.data.diff = 'ins' as any;
        resultChildren.push(node);
      }
    }
  }

  for (const oldSection of oldSections) {
    if (!matchedOldSections.has(oldSection)) {
      for (const node of oldSection.nodes) {
        if (!node.data) {
          node.data = {};
        }
        node.data.diff = 'del' as any;
        resultChildren.push(node);
      }
    }
  }

  return {
    type: 'root',
    children: resultChildren as Root['children'],
  };
}
