import type { DiffType, Node } from '../type';

/**
 * 替换节点树中的指定节点
 * @param parent 父节点
 * @param node 要替换的节点
 * @param newNode 替换后的节点或节点数组
 * @returns void
 */

export function replaceChildNode(parent?: Node, node?: Node, newNode?: Node | Node[]): void {
  // 参数有效性检查
  if (!parent || !node || !newNode || !parent.children) {
    return;
  }
  
  // 查找节点在父节点子节点数组中的位置
  const index = parent.children.indexOf(node);
  if (index === -1) {
    return;
  }
  
  // 替换节点
  if (Array.isArray(newNode)) {
    // 使用展开操作符将节点数组插入到原位置
    parent.children.splice(index, 1, ...newNode);
  } else {
    // 直接替换单个节点
    parent.children[index] = newNode;
  }
}

/**
 * 比较两个节点是否相等，可以指定忽略的属性
 * @param sourceNode 源节点
 * @param targetNode 目标节点
 * @param ignoreKeys 要忽略的属性名数组
 * @returns 如果节点相等返回 true，否则返回 false
 */
export function isNodeEqual(sourceNode: any, targetNode: any, ignoreKeys: string[] = []): boolean {
  // 快速相等性检查：引用相同
  if (sourceNode === targetNode) {
    return true;
  }
  
  // 类型检查：确保两个参数都是非空对象
  if (!sourceNode || !targetNode || typeof sourceNode !== 'object' || typeof targetNode !== 'object') {
    return false;
  }
  
  // 获取过滤后的属性键列表
  const sourceKeys = Object.keys(sourceNode).filter(key => !ignoreKeys.includes(key));
  const targetKeys = Object.keys(targetNode).filter(key => !ignoreKeys.includes(key));
  
  // 属性数量检查
  if (sourceKeys.length !== targetKeys.length) {
    return false;
  }
  
  // 检查所有属性值是否相等
  return sourceKeys.every(key => {
    // 检查目标节点是否有该属性
    if (!Object.prototype.hasOwnProperty.call(targetNode, key)) {
      return false;
    }
    
    const sourceValue = sourceNode[key];
    const targetValue = targetNode[key];
    
    // 如果两个值都是对象，则递归比较
    if (sourceValue && targetValue && 
        typeof sourceValue === 'object' && 
        typeof targetValue === 'object') {
      return isNodeEqual(sourceValue, targetValue, ignoreKeys);
    }
    
    // 否则直接比较值
    return sourceValue === targetValue;
  });
}

/**
 * 浅克隆节点并添加差异信息
 * @param {Object} node - 原始节点
 * @param {string} diff - 差异类型（DiffType.Ins或DiffType.Del）
 * @returns {Object} 克隆后的节点
 */
export function cloneNodeWithDiff(node: Node, diff: DiffType): Node {
  if (node.data) {
    return { ...node, data: { ...node.data, diff } }
  } else {
    return { ...node, data: { diff } }
  }
}