import type { Node as BaseNode } from 'unist';

export interface Node extends BaseNode<{
  diff?: DiffType;
}> {
  children?: Node[];
  value?: string;
  depth?: number;
}

export enum DiffType {
  Ins = 'ins',
  Del = 'del',
}

export enum DiffNodeType {
  Ins = 'ins',
  Del = 'del',
  InlineIns = 'inlineIns',
  InlineDel = 'inlineDel',
}