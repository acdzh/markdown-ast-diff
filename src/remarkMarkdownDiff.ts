import type { Node } from './type'  ;
import { diffMarkdownAst } from './utils/diff';
import { u } from 'unist-builder';
import { transformAstWithDiffDataToAstWithDiffNode } from './utils/transform';


export const REMARK_DIFF_SEPARATOR = '{{remark_mark_down_diff_separator}}';

export function remarkMarkdownDiff(options: { enableDiffNode?: boolean } = { }) {
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
        child!.children![0]!.value === REMARK_DIFF_SEPARATOR
    );

    if (separatorIndex === -1) {
      return tree;
    }

    const diffAst = diffMarkdownAst(
      u('root', tree.children.slice(0, separatorIndex)),
      u('root', tree.children.slice(separatorIndex + 1))
    );

    if (options.enableDiffNode) {
      transformAstWithDiffDataToAstWithDiffNode(diffAst);
    }

    return diffAst;
  }
}