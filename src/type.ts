import type { Node as BaseNode } from 'unist';

export interface Node extends BaseNode<{
  diff?: DiffType;
}> {
  children?: Node[];
  value?: string;
}

export enum DiffType {
  Ins = 'ins',
  Del = 'del',
}