import { diffChars } from 'diff';
import { u } from 'unist-builder';
import { DiffType, type Node } from '../type';
import { findMatches } from './match';
import { cloneNodeWithDiff, isNodeEqual } from './node';

/**
 * 比较两个Markdown AST并生成差异结果
 * @param {Object} sourceAst - 旧版本的AST
 * @param {Object} targetAst - 新版本的AST
 * @param {Object} options - 配置选项
 * @returns {Object} 包含差异信息的AST
 */
export function diffMarkdownAst(sourceAst: Node, targetAst: Node): Node {
  // 创建一个新的AST作为结果
  const diffAst: Node & { children: Node[] } = {
    type: 'root',
    children: []
  };
  
  // 获取旧AST和新AST的子节点
  const sourceNodes = sourceAst.children || [];
  const targetNodes = targetAst.children || [];
  
  // 使用最长公共子序列算法找出匹配的节点
  const matches = findMatches(sourceNodes, targetNodes, (source, target) => source.type === target.type);
  
  // 处理每个节点的差异
  let sourceIndex = 0;
  let targetIndex = 0;
  
  while (sourceIndex < sourceNodes.length || targetIndex < targetNodes.length) {
    const match = matches.find(m => m.sourceIndex === sourceIndex && m.targetIndex === targetIndex);
    
    if (match) {
      // 节点类型相同，需要进一步比较内容
      const sourceNode = sourceNodes[sourceIndex];
      const targetNode = targetNodes[targetIndex];
      
      const diffNodes = compareNode(sourceNode, targetNode);
      diffAst.children.push(...diffNodes);
      
      sourceIndex++;
      targetIndex++;
    } else {
      // 检查是否有节点被删除
      const nextMatch = matches.find(m => m.sourceIndex > sourceIndex);
      if (nextMatch && nextMatch.targetIndex === targetIndex) {
        // 旧节点被删除
        for (let i = sourceIndex; i < nextMatch.sourceIndex; i++) {
          const removedNode = cloneNodeWithDiff(sourceNodes[i], DiffType.Del);
          diffAst.children.push(removedNode);
        }
        sourceIndex = nextMatch.sourceIndex;
        continue;
      }
      
      // 检查是否有节点被添加
      const nextOldMatch = matches.find(m => m.targetIndex > targetIndex);
      if (nextOldMatch && nextOldMatch.sourceIndex === sourceIndex) {
        // 新节点被添加
        for (let i = targetIndex; i < nextOldMatch.targetIndex; i++) {
          const addedNode = cloneNodeWithDiff(targetNodes[i], DiffType.Ins);
          diffAst.children.push(addedNode);
        }
        targetIndex = nextOldMatch.targetIndex;
        continue;
      }
      
      // 节点被替换（删除旧节点，添加新节点）
      if (sourceIndex < sourceNodes.length) {
        const removedNode = cloneNodeWithDiff(sourceNodes[sourceIndex], DiffType.Del);
        diffAst.children.push(removedNode);
        sourceIndex++;
      }
      
      if (targetIndex < targetNodes.length) {
        const addedNode = cloneNodeWithDiff(targetNodes[targetIndex], DiffType.Ins);
        diffAst.children.push(addedNode);
        targetIndex++;
      }
    }
  }
  
  return diffAst;
}

/**
 * 比较两个相同类型的节点
 * @param {Object} sourceNode - 旧节点
 * @param {Object} targetNode - 新节点
 * @returns {Array} 包含差异信息的节点数组
 */
export function compareNode(sourceNode: Node, targetNode: Node): Node[] {
  // 如果节点类型不同，直接返回删除和添加
  if (sourceNode.type !== targetNode.type) {
    return [
      cloneNodeWithDiff(sourceNode, DiffType.Del),
      cloneNodeWithDiff(targetNode, DiffType.Ins)
    ];
  }
  
  // 根据节点类型进行不同的比较
  switch (sourceNode.type) {
    case 'thematicBreak':
      return [sourceNode]
    case 'blockquote':
    case 'list':
      // 递归比较子节点
      return [compareContainerNode(sourceNode, targetNode)];
      
    case 'heading':
    case 'paragraph':
      // 转换为文本进行比较
      return [compareContainerNode(sourceNode, targetNode)];
    
    // 对特定类型的节点进行字符级别的diff
    case 'text':
    case 'strong':
    case 'emphasis':
    case 'delete':
      return compareCharByChar(sourceNode, targetNode);
      
    case 'table':
    case 'code':
    case 'html':
    case 'listItem':
    case 'definition':
      return compareRawNode(sourceNode, targetNode)
      
    default:
      return compareRawNode(sourceNode, targetNode);
  }
}

/**
 * 比较容器类型节点（如blockquote、list）
 * @param {Object} sourceNode - 旧节点
 * @param {Object} targetNode - 新节点
 * @returns {Object} 包含差异信息的节点
 */
function compareContainerNode(sourceNode: Node, targetNode: Node): Node {
  // 递归比较子节点
  if (sourceNode.children && targetNode.children) {
    const childDiffAST = diffMarkdownAst(
      u('root', sourceNode.children ),
      u('root', targetNode.children)
    );
    return { ...targetNode, children: childDiffAST.children };
  }
  
  return targetNode;
}

/**
 * 比较两个节点的所有属性是否完全相同（忽略position属性）
 * @param {Object} sourceNode - 旧节点
 * @param {Object} targetNode - 新节点
 * @returns {Array} 包含差异信息的节点数组
 */
function compareRawNode(sourceNode: Node, targetNode: Node): Node[] {
  // 复制 old 和 new 递归判断所有属性是否完全一样，除了 position
  
  // 比较两个节点是否相同
  if (isNodeEqual(sourceNode, targetNode, ['position'])) {
    return [targetNode]; // 没有变化
  } else {
    return [
      cloneNodeWithDiff(sourceNode, DiffType.Del),
      cloneNodeWithDiff(targetNode, DiffType.Ins)
    ];
  }
}



/**
 * 对文本、加粗、斜体、粗斜体和删除线节点进行字符级别的diff
 * @param {Object} sourceNode - 旧节点
 * @param {Object} targetNode - 新节点
 * @returns {Array} 包含差异信息的节点数组
 */
function compareCharByChar(sourceNode: Node, targetNode: Node) {
  // 如果节点完全相同，直接返回新节点
  if (JSON.stringify(sourceNode) === JSON.stringify(targetNode)) {
    return [targetNode];
  }
  
  // 如果节点类型不同，直接返回删除和添加
  if (sourceNode.type !== targetNode.type) {
    return [
      cloneNodeWithDiff(sourceNode, DiffType.Del),
      cloneNodeWithDiff(targetNode, DiffType.Ins)
    ];
  }
  
  // 处理文本节点
  if (sourceNode.type === 'text') {
    const oldText = sourceNode.value || '';
    const newText = targetNode.value || '';
    
    // 如果文本完全相同，直接返回新节点
    if (oldText === newText) {
      return [targetNode];
    }
    
    // 使用字符级别的diff算法比较
    const charDiff = diffChars(oldText, newText);
    
    // 创建结果节点数组
    const resultNodes: Node[] = [];
    
    // 处理每个差异部分
    for (const part of charDiff) {
      if (part.added) {
        resultNodes.push(
          u('text', { value: part.value, data: { diff: DiffType.Ins } })
        );
      } else if (part.removed) {
        resultNodes.push(
          u('text', { value: part.value, data: { diff: DiffType.Del } })
        );
      } else {
        resultNodes.push(u('text', part.value));
      }
    }
    
    return resultNodes;
  }
  
  // 处理格式化节点（strong、emphasis、delete）
  if (['strong', 'emphasis', 'delete'].includes(sourceNode.type)) {
    // 获取两个节点的子节点
    const oldChildren = sourceNode.children || [];
    const newChildren = targetNode.children || [];
    
    // 如果两个节点都只有一个文本子节点，进行字符级别的比较
    if (oldChildren.length === 1 && newChildren.length === 1 && 
        oldChildren[0].type === 'text' && newChildren[0].type === 'text') {
      const oldText = oldChildren[0].value || '';
      const newText = newChildren[0].value || '';
      
      // 如果文本完全相同，直接返回新节点
      if (oldText === newText) {
        return [targetNode];
      }
      
      // 使用字符级别的diff算法比较
      const charDiff = diffChars(oldText, newText);
      
      // 创建结果节点数组
      const resultNodes: Node[] = [];
      
      // 处理每个差异部分
      for (const part of charDiff) {
        if (part.added) {
          // 创建添加的格式化节点
          const addedNode = u(sourceNode.type, [u('text', { value: part.value, data: { diff: DiffType.Ins } })]);
          resultNodes.push(addedNode);
        } else if (part.removed) {
          // 创建删除的格式化节点
          const removedNode = u(sourceNode.type, [u('text', { value: part.value, data: { diff: DiffType.Del } })]);
          resultNodes.push(removedNode);
        } else {
          // 创建不变的格式化节点
          const unchangedNode = u(sourceNode.type, [u('text', part.value)])
          resultNodes.push(unchangedNode);
        }
      }
      
      return resultNodes;
    }
  }
  
  // 对于其他情况，直接返回删除和添加
  return [
    cloneNodeWithDiff(sourceNode, DiffType.Del),
    cloneNodeWithDiff(targetNode, DiffType.Ins)
  ];
}
