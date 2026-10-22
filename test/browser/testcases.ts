import type { Testcase } from './types';

/**
 * 浏览器演示用例：用 Vite 的 import.meta.glob 自动收集 test/testcases 下所有用例，
 * 不再维护手工清单。name 形如 golden/inline/word-replace-en、scenario/tables。
 */
const oldFiles = import.meta.glob('../testcases/**/old.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const newFiles = import.meta.glob('../testcases/**/new.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const PREFIX = '../testcases/';

export const testcases: Testcase[] = Object.keys(oldFiles)
  .map((oldPath) => {
    const dir = oldPath.slice(0, -'/old.md'.length);
    const newPath = `${dir}/new.md`;
    if (!(newPath in newFiles)) {
      return null;
    }
    return {
      name: dir.slice(PREFIX.length),
      oldMarkdown: oldFiles[oldPath],
      newMarkdown: newFiles[newPath],
    };
  })
  .filter((c): c is Testcase => c !== null)
  .sort((a, b) => a.name.localeCompare(b.name));

/**
 * 按目录分组（golden/inline、scenario ...），用于下拉框的 optgroup。
 */
export function groupTestcases(cases: Testcase[]): Array<{ group: string; cases: Testcase[] }> {
  const groups = new Map<string, Testcase[]>();
  for (const c of cases) {
    const parts = c.name.split('/');
    const group = parts.length > 2 ? parts.slice(0, -1).join('/') : parts[0];
    if (!groups.has(group)) {
      groups.set(group, []);
    }
    groups.get(group)!.push(c);
  }
  return [...groups.entries()].map(([group, items]) => ({ group, cases: items }));
}
