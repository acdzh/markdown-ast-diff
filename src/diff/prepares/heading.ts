import { Heading, Root, Text } from 'mdast';
import type { Parent } from 'unist';
import { visit } from 'unist-util-visit';
import { random, similarity } from '../../lib/strings';
import { NodeType } from '../../types/base';
import { replaceChildNode } from '../../utils/node';

function isHeadingOk(h: Heading): boolean {
  if (!h.children || h.children.length !== 1) {
    return false;
  }
  const t = h.children[0];
  if (t.type !== NodeType.Text) {
    return false;
  }
  if (!t.value) {
    return false;
  }
  return true;
}

export function prepareHeading(oldTree: Root, newTree: Root) {
  let oldHeadings: Array<[Heading, string]> = [];
  let newHeadings: Array<[Heading, string]> = [];

  const oldHeadingTextSet = new Set<string>();
  const newHeadingTextSet = new Set<string>();
  
  visit(oldTree, 'heading', (h: Heading) => {
    if (isHeadingOk(h)) {
      oldHeadingTextSet.add((h.children[0] as any).value);
      oldHeadings.push([h, (h.children[0] as any).value]);
    }
  });

  visit(newTree, 'heading', (h: Heading) => {
    if (isHeadingOk(h)) {
      newHeadingTextSet.add((h.children[0] as any).value);
      newHeadings.push([h, (h.children[0] as any).value]);
    }
  });
  
  oldHeadings = oldHeadings.filter(([_, str]) => !newHeadingTextSet.has(str));
  newHeadings = newHeadings.filter(([_, str]) => !oldHeadingTextSet.has(str));
  
  const similarityMatrix: number[][] = [];
  for (let i = 0; i < oldHeadings.length; i++) {
    similarityMatrix[i] = [];
    for (let j = 0; j < newHeadings.length; j++) {
      similarityMatrix[i][j] = similarity(oldHeadings[i][1], newHeadings[j][1]);
    }
  }

  type Match = {oldIndex: number, newIndex: number, similarity: number };
  const matches: Match[] = [];

  const usedOld = new Set<number>();
  const usedNew = new Set<number>();

  const allPairs: Match[] = [];

  for (let i = 0; i < oldHeadings.length; i++) {
    for (let j = 0; j < newHeadings.length; j++) {
      if (similarityMatrix[i][j] > 0.5) {
        allPairs.push({oldIndex: i, newIndex: j, similarity: similarityMatrix[i][j]});
      }
    }
  }

  allPairs.sort((a, b) => b.similarity - a.similarity);

  for (const pair of allPairs) {
    if (!usedOld.has(pair.oldIndex) && !usedNew.has(pair.newIndex)) {
      matches.push(pair);
      usedOld.add(pair.oldIndex);
      usedNew.add(pair.newIndex);
    }
  }


  matches.forEach(match => {
    const oldHeading = oldHeadings[match.oldIndex][0];
    const newHeading = newHeadings[match.newIndex][0];

    const token = random(16);

    const oldText: Text = {
      type: NodeType.Text,
      value: token,
      data: {
        headingDiffToken: true,
      }
    };

    const newText: Text = {
      type: NodeType.Text,
      value: token,
      data: {
        headingDiffToken: true,
      }
    };

    oldHeading.children.push(oldText);
    newHeading.children.push(newText);
  });

  return (compTree: Root) => {
    visit(compTree, NodeType.Text, (t: Text, _, parent: Parent) => {
      if (t.data?.headingDiffToken) {
        replaceChildNode(parent, t, []);
      }
    })
  }
}