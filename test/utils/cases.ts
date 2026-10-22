import fs from 'fs';
import path from 'path';
import type { CaseSpec } from '../evaluate/expect';

/**
 * 用例目录结构：
 *
 * test/testcases/
 *   golden/<capability>/<case>/   原子黄金用例：old.md + new.md + case.json（带断言）
 *   scenario/<case>/              综合场景用例：贴近真实文档的多处修改，case.json 只描述
 *   corpus/<repo>/<case>/         git 采集的真实语料（collect-from-git 生成，可选）
 *
 * 任何包含 old.md 和 new.md 的目录都是一个用例，id 为相对 test/testcases 的路径。
 */

export const TESTCASES_DIR = path.resolve(__dirname, '..', 'testcases');

export interface LoadedCase {
  id: string;
  layer: string;
  oldMarkdown: string;
  newMarkdown: string;
  spec: CaseSpec;
}

function walk(dir: string, found: string[]): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const hasOld = entries.some(e => e.isFile() && e.name === 'old.md');
  const hasNew = entries.some(e => e.isFile() && e.name === 'new.md');
  if (hasOld && hasNew) {
    found.push(dir);
    return;
  }
  for (const e of entries) {
    if (e.isDirectory() && !e.name.startsWith('.')) {
      walk(path.join(dir, e.name), found);
    }
  }
}

export function loadCases(root: string = TESTCASES_DIR): LoadedCase[] {
  const dirs: string[] = [];
  if (fs.existsSync(root)) {
    walk(root, dirs);
  }
  return dirs
    .map((dir) => {
      const id = path.relative(root, dir).split(path.sep).join('/');
      const specPath = path.join(dir, 'case.json');
      const spec: CaseSpec = fs.existsSync(specPath)
        ? JSON.parse(fs.readFileSync(specPath, 'utf-8'))
        : {};
      return {
        id,
        layer: id.split('/')[0],
        oldMarkdown: fs.readFileSync(path.join(dir, 'old.md'), 'utf-8'),
        newMarkdown: fs.readFileSync(path.join(dir, 'new.md'), 'utf-8'),
        spec,
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * 过滤：支持精确 id、前缀（golden/table）或包含匹配。
 */
export function filterCases(cases: LoadedCase[], patterns?: string[]): LoadedCase[] {
  if (!patterns || patterns.length === 0) {
    return cases;
  }
  return cases.filter(c => patterns.some(p => c.id === p || c.id.startsWith(`${p}/`) || c.id.includes(p)));
}
