import type { Text } from 'mdast';
import type { Node } from 'unist';
import { u } from 'unist-builder';
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

    const comp = diffMarkdownAst(
      // @ts-expect-error node type
      u('root', tree.children.slice(0, separatorIndex)),
      u('root', tree.children.slice(separatorIndex + 1)),
    );

    if (options.enableDiffNode) {
      transformAstWithDiffDataToAstWithDiffNode(comp);
    }

    return comp;
  };
}
