import type { Node } from 'unist';
import { u } from 'unist-builder';
import { visit } from 'unist-util-visit';
import { DiffNodeType, DiffType } from '../types/base';
import { isInlineElement, replaceChildNode } from './node';

function diffTypeToDiffNodeType(diffType: DiffType, isInline?: boolean): DiffNodeType {
  if (isInline) {
    switch (diffType) {
      case DiffType.Ins:
        return DiffNodeType.InlineIns;
      case DiffType.Del:
        return DiffNodeType.InlineDel;
    }
  } else {
    switch (diffType) {
      case DiffType.Ins:
        return DiffNodeType.Ins;
      case DiffType.Del:
        return DiffNodeType.Del;
    }
  }
}

function diffNodeTypeToDiffType(diffNodeType: DiffNodeType): DiffType {
  switch (diffNodeType) {
    case DiffNodeType.Ins:
    case DiffNodeType.InlineIns:
      return DiffType.Ins;
    case DiffNodeType.Del:
    case DiffNodeType.InlineDel:
      return DiffType.Del;
  }
}

/**
 * 
 * 将带有 data.diff 属性的节点转换为 ins(inlineIns) 或 del(inlineDel) 包裹的普通节点
 * （listItem 不会被处理）
 * 
 * 示例：
 * 原始节点：
 * ```json
 * {
 *   "type": "text",
 *   "value": "子步骤 2",
 *   "data": {
 *     "diff": "remove"
 *   }
 * }
 * ```
 * 
 * 转换后：
 * ```json
 * {
 *   "type": "del",
 *   "children": [
 *     {
 *       "type": "text",
 *       "value": "子步骤 2"
 *     }
 *   ]
 * }
 * ```
 */
export function transformAstWithDiffDataToAstWithDiffNode(ast: Node): Node {
  visit(ast,  (node: Node, _?: number, parent?: Node) => {
      if (node.type === 'listItem'|| node.type === DiffType.Ins || node.type === DiffType.Del) {
        return true;
      }

      if (!node.data?.diff) {
        return true;
      }

      const diff = node.data.diff as DiffType;
      delete node.data.diff;

      const isInline = isInlineElement(node);
      replaceChildNode(parent, node, u(diffTypeToDiffNodeType(diff, isInline), [node]))

      return true;
  });
  return ast;
}

/**
 * 
 * 将 ins 或 del 包裹的普通节点转换为 data.diff 属性的普通节点
 * 
 * 示例：
 * 原始节点：
 * ```json
 *  {
 *   "type": "del",
 *   "children": [
 *     {
 *       "type": "text",
 *       "value": "子步骤 2"
 *     }
 *   ]
 * }
 * ```
 * 
 * 转换后：
 * ```json
 * {
 *   "type": "text",
 *   "value": "子步骤 2",
 *   "data": {
 *     "diff": "remove"
 *   }
 * }
 * ```
 */
export function transformAstWithDiffNodeToAstWithDiffData(ast: Node): Node {
  visit(ast, [DiffNodeType.Ins, DiffNodeType.Del, DiffNodeType.InlineIns, DiffNodeType.InlineDel], (node: Node, _?: number, parent?: Node) => {
    if (!node.children) {
      return true;
    }
    const diff = diffNodeTypeToDiffType(node.type as DiffNodeType);
    node['children'].forEach((child: Node) => {
      if (child.type !== DiffType.Del && child.type === DiffType.Ins) {
        if (!child.data) {
          child.data = {};
        }
        child.data.diff = diff;
      }
    });
    replaceChildNode(parent, node, node['children']);
    return true;
  });
  return ast;
}
