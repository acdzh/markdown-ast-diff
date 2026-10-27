import type { Text, Root } from 'mdast';
import type { Node } from 'unist';
import { diffMarkdownAst } from './diff';
import { Options } from './types/base';
import { transformAstWithDiffDataToAstWithDiffNode } from './utils/transform';


export const REMARK_DIFF_SEPARATOR = '{{remark_mark_down_diff_separator}}';

export function remarkMarkdownDiff(options: Options = { }) {
  return (tree: Node) => {
    if (tree.type !== 'root' || !tree.children || tree.children.length === 0) {
      return tree;
    }

    const separatorIndex = tree.children.findIndex(
      (child: Node) =>
        child.type === 'paragraph' &&
        child.children &&
        child.children.length === 1 &&
        child!.children![0]!.type === 'text' &&
        (child!.children![0]! as Text).value === REMARK_DIFF_SEPARATOR
    );

    if (separatorIndex === -1) {
      return tree;
    }

    try {
      const oldRoot: Root = { type: 'root', children: tree.children.slice(0, separatorIndex) as Root['children'] };
      const newRoot: Root = { type: 'root', children: tree.children.slice(separatorIndex + 1) as Root['children'] };
      const comp = diffMarkdownAst(oldRoot, newRoot, options);

      if (options.enableDiffNode) {
        transformAstWithDiffDataToAstWithDiffNode(comp);
      }

      return comp;
    } catch (error) {
      console.error(error);
      return { type: 'root', children: tree.children.slice(separatorIndex + 1) } as Root;
    }
  };
}
