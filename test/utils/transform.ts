import { unified } from 'unified';

import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { Root } from 'mdast';

/**
 * 将Markdown文本解析为AST
 * @param {string} markdownText - Markdown文本内容
 * @returns {Root} 解析后的AST
 */
export function markdownToAst(markdownText: string): Root {
  const processor = unified().use(remarkParse).use(remarkGfm);
  return processor.parse(markdownText) as Root;
}
