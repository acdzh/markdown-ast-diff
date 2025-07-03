/**
 * 表示两个数组中匹配元素的位置和数据
 */
export interface Match<T> {
  sourceIndex: number;
  targetIndex: number;
  sourceItem: T;
  targetItem: T;
}

/**
 * 找出两个数组之间的匹配元素
 * @param {T[]} sourceArray - 源数组
 * @param {T[]} targetArray - 目标数组
 * @param {Function} compareFunction - 比较函数，用于判断两个元素是否相等
 * @returns {Match<T>[]} 匹配结果数组
 */
export function findMatches<T>(
  sourceArray: T[], 
  targetArray: T[], 
  compareFunction?: (source: T, target: T) => boolean
): Match<T>[] {
  const isEqual = compareFunction || ((source: T, target: T) => source === target);

  const matches: Match<T>[] = [];
  // 记录已匹配的目标索引，用Set提高查询效率
  const matchedTargetIndices = new Set<number>();
  
  for (let sourceIndex = 0; sourceIndex < sourceArray.length; sourceIndex++) {
    const sourceItem = sourceArray[sourceIndex];
    
    for (let targetIndex = 0; targetIndex < targetArray.length; targetIndex++) {
      // 跳过已匹配的目标元素
      if (matchedTargetIndices.has(targetIndex)) continue;
      
      const targetItem = targetArray[targetIndex];
      
      // 检查是否相同
      if (isEqual(sourceItem, targetItem)) {
        matches.push({
          sourceIndex,
          targetIndex,
          sourceItem,
          targetItem,
        });
        matchedTargetIndices.add(targetIndex);
        break;
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
