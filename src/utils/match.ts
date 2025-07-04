import type { Node } from '../type';

/**
 * 表示两个数组中匹配元素的位置和数据
 */
export interface Match {
  sourceIndex: number;
  targetIndex: number;
  sourceItem: Node;
  targetItem: Node;
}

/**
 * 找出两个数组之间的匹配元素
 * @param {Node[]} sourceArray - 源数组
 * @param {Node[]} targetArray - 目标数组
 * @returns {Match[]} 匹配结果数组
 */
export function findMatchNodes<T>(
  sourceArray: Node[], 
  targetArray: Node[], 
): Match[] {
  // TODO 升级成相似度算法
  const isEqual = (source: Node, target: Node) => {
    if (source.type !== target.type) {
      return false;
    }
    if (source.type === 'heading' || source.type === 'section' ) {
      if(source.depth !== target.depth) {
        return false;
      }
    }
    return true;
  };

  const matches: Match[] = [];
  // 记录已匹配的目标索引，用Set提高查询效率
  const matchedTargetIndices = new Set<number>();
  
  let sourceIndex = 0;
  let targetIndex = 0;
  
  // 使用双指针方法，两个数组各遍历一次
  while (sourceIndex < sourceArray.length && targetIndex < targetArray.length) {
    const sourceItem = sourceArray[sourceIndex];
    const targetItem = targetArray[targetIndex];
    
    // 如果当前目标元素已匹配，移动目标指针
    if (matchedTargetIndices.has(targetIndex)) {
      targetIndex++;
      continue;
    }
    
    // 检查是否相同
    if (isEqual(sourceItem, targetItem)) {
      matches.push({
        sourceIndex,
        targetIndex,
        sourceItem,
        targetItem,
      });
      matchedTargetIndices.add(targetIndex);
      sourceIndex++;
      targetIndex++;
    } else {
      // 不匹配时移动目标指针
      targetIndex++;
      
      // 如果已经检查完所有目标元素，移动源指针并重置目标指针
      if (targetIndex >= targetArray.length) {
        sourceIndex++;
        targetIndex = 0;
      }
    }
  }

  // 按源索引优先，目标索引次之排序
  matches.sort((matchA, matchB) => {
    // 首先按源索引排序
    if (matchA.sourceIndex !== matchB.sourceIndex) return matchA.sourceIndex - matchB.sourceIndex;
    // 源索引相同时按目标索引排序
    return matchA.targetIndex - matchB.targetIndex;
  });
  
  return matches;
}

