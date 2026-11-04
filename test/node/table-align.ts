/**
 * 回归测试：表格行经过 ins/del 包裹后，align 不能丢失。
 *
 * 背景
 * ----
 * mdast 的 table 只把列对齐信息放在 `table.align` 上，row / cell 上没有。
 * milkdown 的 gfm schema 解析 `tableRow` 时会读 `node.align[i]`
 * （见 @milkdown/preset-gfm 的 table/schema.ts），它的 table runner 会为每行
 * 手动注入 align。但某行被 ins / del 包裹后，注入不会穿透包裹节点，
 * 内层 `tableRow.align` 变成 undefined，于是 `align[i]` 抛
 * "Cannot read properties of undefined (reading '0')"，整个文档解析失败。
 *
 * 该用例锁定修复结果：任何 `tableRow` 都必须带 align，无论是否在 ins/del 里。
 *
 * 运行：npx tsx test/node/table-align.ts
 */
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

import { diffMarkdownAst } from '../../src/diff';
import { transformAstWithDiffDataToAstWithDiffNode } from '../../src/utils/transform';

type AnyNode = {
  type: string;
  align?: unknown;
  children?: AnyNode[];
  data?: { diff?: string };
};

const parseMd = (md: string): AnyNode => {
  const tree = unified().use(remarkParse).use(remarkGfm).parse(md);
  return JSON.parse(JSON.stringify(tree)) as AnyNode;
};

/** 收集所有缺 align 的 tableRow（含 ins/del 内部的） */
const findRowsWithoutAlign = (node: AnyNode, acc: string[] = []): string[] => {
  if (node.type === 'tableRow' && !node.align) {
    acc.push('tableRow(no align)');
  }
  node.children?.forEach((child) => findRowsWithoutAlign(child, acc));
  return acc;
};

const CASES: Array<{ name: string; oldMd: string; newMd: string }> = [
  {
    name: '改单元格（无对齐）',
    oldMd: '| A | B |\n| --- | --- |\n| 1 | 2 |',
    newMd: '| A | B |\n| --- | --- |\n| 1 | 3 |',
  },
  {
    name: '改单元格（带对齐）',
    oldMd: '| A | B |\n| :-- | --: |\n| 1 | 2 |',
    newMd: '| A | B |\n| :-- | --: |\n| 1 | 3 |',
  },
  {
    name: '新增行',
    oldMd: '| A | B |\n| --- | --- |\n| 1 | 2 |',
    newMd: '| A | B |\n| --- | --- |\n| 1 | 2 |\n| 4 | 5 |',
  },
  {
    name: '新增行（带对齐）',
    oldMd: '| A | B |\n| :-- | --: |\n| 1 | 2 |',
    newMd: '| A | B |\n| :-- | --: |\n| 1 | 2 |\n| 4 | 5 |',
  },
  {
    name: '删行 + 改单元格',
    oldMd: '| A | B |\n| --- | --- |\n| 1 | 2 |\n| 3 | 4 |',
    newMd: '| A | B |\n| --- | --- |\n| 1 | 9 |',
  },
  {
    name: '加列',
    oldMd: '| A | B |\n| --- | --- |\n| 1 | 2 |',
    newMd: '| A | B | C |\n| --- | --- | --- |\n| 1 | 2 | 3 |',
  },
];

const main = () => {
  let failed = 0;

  for (const { name, oldMd, newMd } of CASES) {
    const oldAst = parseMd(oldMd);
    const newAst = parseMd(newMd);

    const diffAst = diffMarkdownAst(oldAst as never, newAst as never);
    const withDiffNode = transformAstWithDiffDataToAstWithDiffNode(diffAst as never) as AnyNode;

    const missing = findRowsWithoutAlign(withDiffNode);

    if (missing.length > 0) {
      failed += 1;
      console.error(`FAIL  ${name}  缺失 align 的 tableRow: ${missing.length}`);
      /// 打印结构方便定位
      const dump = (n: AnyNode, ind = ''): void => {
        const extra = n.type === 'tableRow' ? ` align=${JSON.stringify(n.align)}` : '';
        console.error(`${ind}${n.type}${extra}`);
        n.children?.forEach((c) => dump(c, `${ind}  `));
      };
      withDiffNode.children?.forEach((c) => dump(c, '    '));
    } else {
      console.log(`PASS  ${name}`);
    }
  }

  console.log('');
  if (failed > 0) {
    console.error(`${failed}/${CASES.length} 个用例失败`);
    process.exit(1);
  }
  console.log(`${CASES.length}/${CASES.length} 个用例通过`);
};

main();
