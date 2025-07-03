import type { Node } from '../type';
import { visit } from 'unist-util-visit';
import { DiffType } from '../type';
import { replaceChildNode } from './node';
import { u } from 'unist-builder';



/**
 * 
 * 将带有 data.diff 属性的节点转换为 ins 或 del 包裹的普通节点
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
      replaceChildNode(parent, node, u(diff, [node]))

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
  visit(ast, [DiffType.Ins, DiffType.Del], (node: Node, _?: number, parent?: Node) => {
    if (!node.children) {
      return true;
    }
    node['children'].forEach((child: Node) => {
      if (child.type !== DiffType.Del && child.type === DiffType.Ins) {
        if (!child.data) {
          child.data = {};
        }
        child.data.diff = node.type as DiffType;
      }
    });
    replaceChildNode(parent, node, node['children']);
    return true;
  });
  return ast;
}

