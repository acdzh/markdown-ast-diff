import type { ListItem, Paragraph, Root } from 'mdast';
import { visit } from 'unist-util-visit';

export function prepareListItem(oldTree: Root, newTree: Root) {
  for (let tree of [oldTree, newTree]) {
    visit(tree, 'listItem', (node: ListItem) => {
      if (node.children && node.children.length === 1 && node.children[0].type === 'paragraph' && node.children[0].children) {
        if (!node.data) {
          node.data = {};
        }
        node.data.backupParagraph = node.children[0];
        node.children = (node.children[0] as Paragraph).children as unknown as ListItem['children'];
      }
    });
  }

  return (compTree: Root) => {
    visit(compTree, 'listItem', (node: ListItem) => {
      if (node.data?.backupParagraph) {
        node.children = [{
          ...(node.data.backupParagraph as Paragraph),
          children: node.children,
        }] as ListItem['children'];
        delete node.data.backupParagraph;
      }
    });
  } 
}
