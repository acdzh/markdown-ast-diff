import { unified } from 'unified';
import { Node } from '../../src/type';

import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';

/**
 * 将Markdown文本解析为AST
 * @param {string} markdownText - Markdown文本内容
 * @returns {Node} 解析后的AST
 */
export function markdownToAst(markdownText: string): Node {
  const processor = unified().use(remarkParse).use(remarkGfm)
  return processor.parse(markdownText);
}