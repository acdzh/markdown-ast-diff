import { CONSTANTS } from './constants';

export function shouldFallbackToWholeBlock(
  oldNodeCount: number,
  newNodeCount: number,
): boolean {
  return oldNodeCount * newNodeCount > CONSTANTS.LCS_MAX_PRODUCT;
}
