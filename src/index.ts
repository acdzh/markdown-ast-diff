export { diffMarkdownAst } from './diff';
export {
  REMARK_DIFF_SEPARATOR, remarkMarkdownDiff
} from './remarkMarkdownDiff';

export { transformAstWithDiffDataToAstWithDiffNode, transformAstWithDiffNodeToAstWithDiffData } from './utils/transform';

export { DiffType, DiffNodeType, NodeType } from './types/base';
export type { Options, IdBox } from './types/base';
