import type { Data as UnistData, Node as UnistNode } from 'unist';
import type { Node as MdastNode } from 'mdast';
import type { XNode } from '../lib/XNode';
import type { DiffType } from './base';

import 'unist';
declare module 'unist' {
  export interface Data extends UnistData {
    diff?: DiffType;
    headingDiffToken?: boolean;
    backupParagraph?: MdastNode;
  }

  export interface Node extends UnistNode<Data> {
    _id?: number;
    _parent?: Parent;
    _before?: Node;
    _next?: Node;
    _xNode?: XNode;
    children?: Node[];
  }
}
