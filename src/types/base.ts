export enum DiffType {
  Ins = 'ins',
  Del = 'del',
}

export enum DiffNodeType {
  Ins = 'ins',
  Del = 'del',
  InlineIns = 'inlineIns',
  InlineDel = 'inlineDel',
}

export enum NodeType {
  // 基本节点类型
  Root = 'root',
  Blockquote = 'blockquote',
  Break = 'break',
  Code = 'code',
  Definition = 'definition',
  Emphasis = 'emphasis',
  Heading = 'heading',
  Html = 'html',
  Image = 'image',
  ImageReference = 'imageReference',
  InlineCode = 'inlineCode',
  Link = 'link',
  LinkReference = 'linkReference',
  List = 'list',
  ListItem = 'listItem',
  Paragraph = 'paragraph',
  Strong = 'strong',
  Text = 'text',
  ThematicBreak = 'thematicBreak',
  
  // GFM 扩展节点类型
  Delete = 'delete',
  FootnoteDefinition = 'footnoteDefinition',
  FootnoteReference = 'footnoteReference',
  Table = 'table',
  TableRow = 'tableRow',
  TableCell = 'tableCell',
  
  // Directive 扩展节点类型
  ContainerDirective = 'containerDirective',
  LeafDirective = 'leafDirective',
  TextDirective = 'textDirective',
  
  // Frontmatter 扩展节点类型
  YAML = 'yaml',
  TOML = 'toml',
  
  // MDX 扩展节点类型
  MDXJSEsm = 'mdxjsEsm',
  MDXJSExpression = 'mdxJsExpression',
  MDXFlowExpression = 'mdxFlowExpression',
  MDXTextExpression = 'mdxTextExpression'
}


/**
 * Box for id values, allowing subfunctions to modify the value
 */
export interface IdBox {
  value: number;
}

export interface Options {
  enableDiffNode?: boolean;
}
