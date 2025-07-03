import type { Node } from '../../src/type';

/**
 * 递归移除节点及其子节点中的position属性
 * @param {Object} node - 原始节点
 * @returns {Object} 移除position属性后的节点
 */
export function removePositionProperty(node: Node): Node {
  if (!node || typeof node !== 'object') {
    return node;
  }
  
  // 删除position属性
  if ('position' in node) {
    delete node.position;
  }
  
  // 递归处理所有属性
  for (const key in node) {
    if (Object.prototype.hasOwnProperty.call(node, key)) {
      if (Array.isArray(node[key])) {
        // 如果是数组，递归处理每个元素
        node[key] = node[key].map(item => removePositionProperty(item));
      } else if (typeof node[key] === 'object' && node[key] !== null) {
        // 如果是对象，递归处理
        node[key] = removePositionProperty(node[key]);
      }
    }
  }
  
  return node;
}
