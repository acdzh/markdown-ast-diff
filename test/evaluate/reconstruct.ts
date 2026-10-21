import type { Node, Parent } from 'unist';
import { DiffType, DiffNodeType } from '../../src/types/base';

const DIFF_NODE_TYPES = new Set<string>([
  DiffNodeType.Ins, DiffNodeType.Del, DiffNodeType.InlineIns, DiffNodeType.InlineDel,
]);

const INS_TYPES = new Set<string>([DiffNodeType.Ins, DiffNodeType.InlineIns]);
const DEL_TYPES = new Set<string>([DiffNodeType.Del, DiffNodeType.InlineDel]);

function cloneDeep(node: Node): Node {
  return JSON.parse(JSON.stringify(node));
}

function stripInternalProps(node: Node): void {
  delete node._id;
  delete node._parent;
  delete node._before;
  delete node._next;
  delete node._xNode;
  if (node.children) {
    for (const child of node.children) {
      stripInternalProps(child);
    }
  }
}

/**
 * 从 diff AST 还原新文档：删 del 节点，剥离 ins 包裹
 */
export function reconstructNew(diffAst: Node): Node {
  const root = cloneDeep(diffAst);
  stripInternalProps(root);
  removeAndUnwrap(root, DEL_TYPES, INS_TYPES, DiffType.Del);
  return root;
}

/**
 * 从 diff AST 还原旧文档：删 ins 节点，剥离 del 包裹
 */
export function reconstructOld(diffAst: Node): Node {
  const root = cloneDeep(diffAst);
  stripInternalProps(root);
  removeAndUnwrap(root, INS_TYPES, DEL_TYPES, DiffType.Ins);
  return root;
}

function removeAndUnwrap(
  node: Node,
  typesToRemove: Set<string>,
  typesToUnwrap: Set<string>,
  diffToRemove: DiffType,
): void {
  if (!node.children) {
    return;
  }

  const parent = node as Parent;
  const newChildren: Node[] = [];

  for (const child of parent.children) {
    if (child.data?.diff === diffToRemove) {
      continue;
    }

    if (DIFF_NODE_TYPES.has(child.type)) {
      if (typesToRemove.has(child.type)) {
        continue;
      }
      if (typesToUnwrap.has(child.type) && child.children) {
        for (const grandchild of child.children) {
          removeAndUnwrap(grandchild, typesToRemove, typesToUnwrap, diffToRemove);
          newChildren.push(grandchild);
        }
        continue;
      }
    }

    removeAndUnwrap(child, typesToRemove, typesToUnwrap, diffToRemove);

    if (child.data?.diff) {
      delete child.data.diff;
      if (Object.keys(child.data).length === 0) {
        delete (child as any).data;
      }
    }

    newChildren.push(child);
  }

  parent.children = newChildren;
}
