import type { Node } from '../type';
import { visit } from 'unist-util-visit';
import { DiffNodeType, DiffType } from '../type';
import { isInlineElement, replaceChildNode } from './node';
import { u } from 'unist-builder';

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

/**
 * 将平铺结构的 heading 转换为嵌套的 section 结构
 * 
 * 示例：
 * 原始结构：
 * ```
 * root
 *   ├── heading1
 *   ├── paragraph
 *   ├── heading2
 *   ├── paragraph
 *   └── heading1
 * ```
 * 
 * 转换后：
 * ```
 * root
 *   ├── section (depth: 1)
 *   │   ├── heading1
 *   │   ├── paragraph
 *   │   └── section (depth: 2)
 *   │       ├── heading2
 *   │       └── paragraph
 *   └── section (depth: 1)
 *       └── heading1
 * ```
 */
function transformAstFlatToNestedByHeading(ast: Node): Node {
  visit(ast, ['root', 'blockquote', 'listItem'], (node) => {
    if (!node.children || node.children.length === 0) {
      return true;
    }
  
    const children = node.children;
  
    for(let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (child.type === 'heading') {
  
        // 从这个 heading 往后查找应该包含哪些后续节点
        let j = 0;
        const makeSectionFromHeading = () => {
          // 先处理当前 heading 节点，再往后查找
          const subChild = children[i + j];
          const subDepth = subChild.depth || 1;
  
          const section = u('section', { depth: subDepth, children: [subChild] });
  
          // 开始往后查找
          for (j = j + 1; i + j < children.length; j++) {
            const nextChild = children[i + j];
            // 如果在后面找到了 heading 元素，需要特殊处理。
            // 我们只能处理比当前 heading 登记的层级低的 heading 元素，
            // 否则我们无法处理，只能回退，在更外层的下一次循环中处理。
            if (nextChild.type === 'heading') {
              const nextDepth = nextChild.depth || 1;
              if (nextDepth > subDepth) { // 等级更低的 heading，递归处理成 section
                section.children?.push(makeSectionFromHeading());
              } else {
                j -= 1; // 回退
                break;
              }
            } else {
              section.children?.push(nextChild);
            }
          }
          
          return section;
        }
  
        const section = makeSectionFromHeading();
        replaceChildNode(node, child, section, j + 1);
      }
    }

    return true;
  })


  return ast;
}

/**
 * 将嵌套的 section 结构转换回平铺结构
 * 
 * 示例：
 * 原始结构：
 * ```
 * root
 *   ├── section (depth: 1)
 *   │   ├── heading1
 *   │   ├── paragraph
 *   │   └── section (depth: 2)
 *   │       ├── heading2
 *   │       └── paragraph
 *   └── section (depth: 1)
 *       └── heading1
 * ```
 * 
 * 转换后：
 * ```
 * root
 *   ├── heading1
 *   ├── paragraph
 *   ├── heading2
 *   ├── paragraph
 *   └── heading1
 * ```
 */
function transformNestedToFlat(ast: Node): Node {
  visit(ast, 'section', (node: Node, _, parent: Node) => {
    if (node.type !== 'section') {
      return true;
    }
    if (node.children) {
      replaceChildNode(parent, node, node.children.map(child => {
        if (node.data?.diff){
          if (!child.data) {
            child.data = {}
          };
          child.data.diff = node.data.diff;
        };
        return child;
      }));
    }
    return true;
  });

  return ast;
}

// 预处理成中间格式的 ast
export function preprocessAstForCustomOperation(ast: Node) {
  transformAstFlatToNestedByHeading(ast);
  return ast;
}

// 恢复成正常的 ast
export const restoreAstFromCustomOperation = (ast: Node) => {
  transformNestedToFlat(ast);
  return ast;
}