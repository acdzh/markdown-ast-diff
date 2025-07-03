import { Node } from '../../src/type';
import { diffMarkdownAst } from "../../src/utils/diff";
import { transformAstWithDiffDataToAstWithDiffNode } from "../../src/utils/transform";
import { markdownToAst } from "./transform";

/**
 * 比较两个Markdown文件并生成差异结果
 * @param {string} oldFilePath - 旧文件路径
 * @param {string} newFilePath - 新文件路径
 * @param {Object} options - 配置选项
 * @returns {Object} 包含差异AST和渲染后的Markdown
 */
export function diffMarkdown(sourceMarkdown: string, targetMarkdown: string, options: { enableDiffNode?: boolean } = { }): Node {
  const sourceAst = markdownToAst(sourceMarkdown);
  const targetAst = markdownToAst(targetMarkdown);

  const diffAst = diffMarkdownAst(sourceAst, targetAst);

  if (options.enableDiffNode) {
    transformAstWithDiffDataToAstWithDiffNode(diffAst);
  }

  return diffAst;
}