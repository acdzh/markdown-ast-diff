import fs from 'fs';
import path from 'path';

import { testcases } from './testcases';

import { diffMarkdown } from '../utils/diff';
import { removePositionProperty } from '../utils/removePositionProperty';
import { renderAstToMarkdown } from '../utils/renderAstToMarkdown';
import { renderAstToHtml } from '../utils/renderAstToHtml';


function ensureDirExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

console.log('测试开始...');

testcases.forEach(({ name, oldMarkdown, newMarkdown }) => {
  console.log(`比较文件: ${name}`);

  const outputDir = path.join(__dirname, 'output', name);
  ensureDirExists(outputDir);

  console.log(`\t输出目录: ${outputDir}`);

  fs.writeFileSync(path.join(outputDir, 'old.md'), oldMarkdown);
  fs.writeFileSync(path.join(outputDir, 'new.md'), newMarkdown);

  const diffAst = diffMarkdown(oldMarkdown, newMarkdown);
  const diffAstWithDiffNode = diffMarkdown(oldMarkdown, newMarkdown, { enableDiffNode: true });

  fs.writeFileSync(path.join(outputDir, 'ast.json'), JSON.stringify(diffAst, null, 2));
  fs.writeFileSync(path.join(outputDir, 'ast-with-diff-node.json'), JSON.stringify(diffAstWithDiffNode, null, 2));

  const diffAstWithoutPosition = removePositionProperty(JSON.parse(JSON.stringify(diffAst)));
  const diffAstWithDiffNodeWithoutPosition = removePositionProperty(JSON.parse(JSON.stringify(diffAstWithDiffNode)));

  fs.writeFileSync(path.join(outputDir, 'ast(no-position).json'), JSON.stringify(diffAstWithoutPosition, null, 2));
  fs.writeFileSync(path.join(outputDir, 'ast-with-diff-node(no-position).json'), JSON.stringify(diffAstWithDiffNodeWithoutPosition, null, 2));

  const md = renderAstToMarkdown(diffAstWithDiffNodeWithoutPosition);
  fs.writeFileSync(path.join(outputDir, 'diff.md'), md);

  const html = renderAstToHtml(diffAstWithDiffNode);
  fs.writeFileSync(path.join(outputDir, 'diff.html'), html);
})
