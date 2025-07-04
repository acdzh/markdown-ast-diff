import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { Node }from '../../src/type'; 
import { visit } from "unist-util-visit";
import remarkGfm from 'remark-gfm'

/**
 * 将AST转换回Markdown文本
 * @param {Node} ast - Markdown AST
 * @returns {string} 转换后的Markdown文本
 */
export function renderAstToMarkdown(_ast: Node): string {
  const ast = JSON.parse(JSON.stringify(_ast));
  const processor = unified()
    .use(remarkGfm)
    .use(() => (tree: Node) => {
      visit(tree, 'listItem', (node: Node) => {
        if (node?.data?.diff) {
          const marker = node?.data?.diff === 'ins' ? '{++listItem++}' : '{--listItem--}'
          if (!node.children) {
            node.children = [];
          }
          const firstChild = node.children[0];
          if (firstChild?.type === 'paragraph') {
            if (firstChild.children) {
              firstChild.children.unshift({
                type: 'text',
                value: marker
              })
            }
          } else {
            node.children.unshift({
              type: 'paragraph',
              children: [{
                type: 'text',
                value: marker
              }]
            })
          }
        }
      });
      return tree;
    })
    .use(remarkStringify, {
      handlers: {
        ins: (node: Node, _: any, context: any, info: any) => {
          const content = (node.children || [])
            .map(child => context.handle(child, node, context, info))
            .join('');
          return `{++++\n${content}\n++++}`;
        },
        del: (node: Node, _, context: any, info: any) => {
          const content = (node.children || [])
            .map(child => context.handle(child, node, context, info))
            .join('');
          return `{----\n${content}\n----}`;
        },
        inlineIns: (node: Node, _, context: any, info: any) => {
          const content = (node.children || [])
            .map(child => context.handle(child, node, context, info))
            .join('');
          return `{++++${content}++++}`;
        },
        inlineDel: (node: Node, _, context: any, info: any) => {
          const content = (node.children || [])
            .map(child => context.handle(child, node, context, info))
            .join('');
          return `{----${content}----}`;
        },
      }
    });
  return processor.stringify(
    processor.runSync(ast)
  );
}
