import type { Code, Root } from 'mdast';
import type { Node, Parent } from 'unist';
import { NodeType } from '../types/base';
import { CONSTANTS } from './constants';

function isModifiedNode(node: Node): boolean {
  if (node.data?.diff) {
    return true;
  }
  if (node.data?.diffOldContent) {
    return true;
  }
  if (node.data?.diffUnchanged) {
    return false;
  }
  if (node.children) {
    for (const child of node.children) {
      if (isModifiedNode(child)) {
        return true;
      }
    }
  }
  return false;
}

function getNodeWeight(node: Node): number {
  if (node.type === NodeType.Text) {
    return 0;
  }
  if (node.type === NodeType.List && node.children) {
    if (node.children.length >= CONSTANTS.LARGE_LIST_CHILD_THRESHOLD) {
      return Math.min(node.children.length, CONSTANTS.LARGE_LIST_WEIGHT_CAP);
    }
  }
  if (node.type === NodeType.Paragraph && node.children) {
    if (node.children.length >= CONSTANTS.LARGE_PARAGRAPH_CHILD_THRESHOLD) {
      return Math.min(node.children.length, CONSTANTS.LARGE_PARAGRAPH_WEIGHT_CAP);
    }
  }
  if (node.type === NodeType.Code) {
    const lines = ((node as Code).value || '').split('\n').length;
    if (lines >= CONSTANTS.VERY_LARGE_CODE_LINE_THRESHOLD) {
      return 4;
    }
    if (lines >= CONSTANTS.LARGE_CODE_LINE_THRESHOLD) {
      return 3;
    }
    if (lines >= CONSTANTS.MEDIUM_CODE_LINE_THRESHOLD) {
      return 2;
    }
  }
  if (node.children && node.children.length > 0) {
    return 2;
  }
  return CONSTANTS.DEFAULT_NODE_WEIGHT;
}

function getModifiedIndices(children: Node[]): number[] {
  const indices: number[] = [];
  for (let i = 0; i < children.length; i++) {
    if (isModifiedNode(children[i])) {
      indices.push(i);
    }
  }
  return indices;
}

export function applyContextFolding(root: Root, contextLines: number): Root {
  const children = root.children as Node[];
  if (children.length === 0) {
    return root;
  }

  const modifiedIndices = getModifiedIndices(children);
  if (modifiedIndices.length === 0) {
    const collapseNode: Node = {
      type: NodeType.Collapse,
      data: { hName: 'collapse' },
      children: [...children],
    };
    return {
      type: 'root',
      children: [collapseNode as any],
    };
  }

  const keepSet = new Set<number>();

  for (const midx of modifiedIndices) {
    keepSet.add(midx);

    let weightBefore = 0;
    for (let i = midx - 1; i >= 0; i--) {
      const w = getNodeWeight(children[i]);
      if (weightBefore + w > contextLines) {
        break;
      }
      weightBefore += w;
      keepSet.add(i);
    }

    let weightAfter = 0;
    for (let i = midx + 1; i < children.length; i++) {
      const w = getNodeWeight(children[i]);
      if (weightAfter + w > contextLines) {
        break;
      }
      weightAfter += w;
      keepSet.add(i);
    }
  }

  const resultChildren: Node[] = [];
  let foldBuffer: Node[] = [];
  let isLeading = true;

  function flushFold() {
    if (foldBuffer.length === 0) {
      return;
    }
    if (foldBuffer.length >= CONSTANTS.MIN_FOLDABLE_BLOCKS || isLeading) {
      const collapseNode: Node = {
        type: NodeType.Collapse,
        data: { hName: 'collapse' },
        children: [...foldBuffer],
      };
      resultChildren.push(collapseNode);
    } else {
      resultChildren.push(...foldBuffer);
    }
    foldBuffer = [];
  }

  for (let i = 0; i < children.length; i++) {
    if (keepSet.has(i)) {
      flushFold();
      isLeading = false;
      resultChildren.push(children[i]);
    } else {
      foldBuffer.push(children[i]);
    }
  }

  flushFold();

  return {
    type: 'root',
    children: resultChildren as Root['children'],
  };
}
