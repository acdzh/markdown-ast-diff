import fs from 'fs';
import path from 'path';

import { testcases } from './testcases';

import { removePositionProperty } from '../utils/removePositionProperty';
import { renderAstToMarkdown } from '../utils/renderAstToMarkdown';
import { renderAstToHtml } from '../utils/renderAstToHtml';
import { markdownToAst } from '../utils/transform';

import { diffMarkdownAst } from '../../src/diff';
import { transformAstWithDiffDataToAstWithDiffNode } from '../../src/utils/transform';

function ensureDirExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function main() {
  console.log('测试开始...');

  // 输出目录随用例结构生成，先清空，避免已删除/改名的用例残留在预览产物里
  fs.rmSync(path.join(__dirname, 'output'), { recursive: true, force: true });

  for (const { name, oldMarkdown, newMarkdown } of testcases) {
    console.log(`比较文件: ${name}`);

    const outputDir = path.join(__dirname, 'output', name);
    ensureDirExists(outputDir);

    console.log(`\t输出目录: ${outputDir}`);

    const oldAst = markdownToAst(oldMarkdown);
    const newAst = markdownToAst(newMarkdown);

    fs.writeFileSync(path.join(outputDir, 'old.md'), oldMarkdown);
    fs.writeFileSync(path.join(outputDir, 'new.md'), newMarkdown);

    fs.writeFileSync(
      path.join(outputDir, 'old.html'),
      await renderAstToHtml(markdownToAst(oldMarkdown))
    );
    fs.writeFileSync(
      path.join(outputDir, 'new.html'),
      await renderAstToHtml(markdownToAst(newMarkdown))
    );

    const diffAst = diffMarkdownAst(oldAst, newAst);
    const diffAstWithDiffNode = transformAstWithDiffDataToAstWithDiffNode(diffAst);

    fs.writeFileSync(
      path.join(outputDir, 'ast.json'),
      JSON.stringify(diffAst, null, 2)
    );
    fs.writeFileSync(
      path.join(outputDir, 'ast-with-diff-node.json'),
      JSON.stringify(diffAstWithDiffNode, null, 2)
    );

    const diffAstWithoutPosition = removePositionProperty(
      JSON.parse(JSON.stringify(diffAst))
    );
    const diffAstWithDiffNodeWithoutPosition = removePositionProperty(
      JSON.parse(JSON.stringify(diffAstWithDiffNode))
    );

    fs.writeFileSync(
      path.join(outputDir, 'ast(no-position).json'),
      JSON.stringify(diffAstWithoutPosition, null, 2)
    );
    fs.writeFileSync(
      path.join(outputDir, 'ast-with-diff-node(no-position).json'),
      JSON.stringify(diffAstWithDiffNodeWithoutPosition, null, 2)
    );

    const md = renderAstToMarkdown(diffAstWithDiffNodeWithoutPosition);
    fs.writeFileSync(path.join(outputDir, 'diff.md'), md);

    const html = await renderAstToHtml(diffAstWithDiffNode);
    fs.writeFileSync(path.join(outputDir, 'diff.html'), html);

    // cp.execSync(`/Users/admin/Downloads/lowdown/lowdown-diff ${path.join(outputDir, 'old.md')} ${path.join(outputDir, 'new.md')} -o ${path.join(outputDir, 'lowdown-diff.html')}`)
  }
}

main();
