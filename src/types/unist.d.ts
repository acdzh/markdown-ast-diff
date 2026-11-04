import type { Data as UnistData, Node as UnistNode } from 'unist';
import type { Node as MdastNode } from 'mdast';
import type { XNode } from '../lib/XNode';
import type { DiffType } from './base';
import type { CodeLineDiff } from '../diff/code-lines';

import 'unist';
declare module 'unist' {
  export interface Data extends UnistData {
    diff?: DiffType;
    diffUnchanged?: boolean;
    diffOldContent?: string;
    /** 代码块的行级差异，由 diffCodeLines 产出，供渲染层做行装饰 */
    diffLines?: CodeLineDiff[];
    hName?: string;
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
