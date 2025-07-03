import type { Node } from '../../src/type';

// 按照 mdast 规范的行内元素（PhrasingContent）类型列表
export function isInlineElement(node: Node) {
  // mdast 规范和 GFM 扩展中定义的所有行内元素类型 (PhrasingContent)
  const inlineTypes = [
    'break',
    'delete',  // GFM 扩展
    'emphasis',
    'footnote',  // GFM 扩展
    'footnoteReference',  // GFM 扩展
    'image',
    'imageReference',
    'inlineCode',
    'link',
    'linkReference',
    'strong',
    'text',
    'inlineMath',  // 数学公式扩展
  ];
  return inlineTypes.includes(node.type);
}
