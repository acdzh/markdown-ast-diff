import { loadCases } from '../utils/cases';

/**
 * 预览输出用例：自动发现 test/testcases 下所有用例（golden / scenario / corpus）。
 * 不再维护手工清单。
 */
export const testcases = loadCases().map(c => ({
  name: c.id,
  oldMarkdown: c.oldMarkdown,
  newMarkdown: c.newMarkdown,
}));
