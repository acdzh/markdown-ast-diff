import fs from 'fs';
import path from 'path';

// 使用 fs 读取文件内容
const readMarkdownFile = (relativePath: string): string => {
  const filePath = path.join(__dirname, '../testcases', relativePath);
  return fs.readFileSync(filePath, 'utf-8');
};

// 读取所有测试用例文件
const defaultOldMarkdown_simple = readMarkdownFile('./simple/old.md');
const defaultNewMarkdown_simple = readMarkdownFile('./simple/new.md');
const defaultOldMarkdown_headings = readMarkdownFile('./headings/old.md');
const defaultNewMarkdown_headings = readMarkdownFile('./headings/new.md');
const defaultOldMarkdown_lists = readMarkdownFile('./lists/old.md');
const defaultNewMarkdown_lists = readMarkdownFile('./lists/new.md');
const defaultOldMarkdown_code = readMarkdownFile('./code/old.md');
const defaultNewMarkdown_code = readMarkdownFile('./code/new.md');
const defaultOldMarkdown_tables = readMarkdownFile('./tables/old.md');
const defaultNewMarkdown_tables = readMarkdownFile('./tables/new.md');
const defaultOldMarkdown_links = readMarkdownFile('./links/old.md');
const defaultNewMarkdown_links = readMarkdownFile('./links/new.md');
const defaultOldMarkdown_formatting = readMarkdownFile('./formatting/old.md');
const defaultNewMarkdown_formatting = readMarkdownFile('./formatting/new.md');
const defaultOldMarkdown_complex = readMarkdownFile('./complex/old.md');
const defaultNewMarkdown_complex = readMarkdownFile('./complex/new.md');
const defaultOldMarkdown_extreme_long = readMarkdownFile('./extreme_long/old.md');
const defaultNewMarkdown_extreme_long = readMarkdownFile('./extreme_long/new.md');
const defaultOldMarkdown_nested_structures = readMarkdownFile('./nested_structures/old.md');
const defaultNewMarkdown_nested_structures = readMarkdownFile('./nested_structures/new.md');
const defaultOldMarkdown_special_characters = readMarkdownFile('./special_characters/old.md');
const defaultNewMarkdown_special_characters = readMarkdownFile('./special_characters/new.md');
const defaultOldMarkdown_whitespace = readMarkdownFile('./whitespace/old.md');
const defaultNewMarkdown_whitespace = readMarkdownFile('./whitespace/new.md');
const defaultOldMarkdown_mixed_content = readMarkdownFile('./mixed_content/old.md');
const defaultNewMarkdown_mixed_content = readMarkdownFile('./mixed_content/new.md');
const defaultOldMarkdown_paragraph_word_edit = readMarkdownFile('./paragraph_word_edit/old.md');
const defaultNewMarkdown_paragraph_word_edit = readMarkdownFile('./paragraph_word_edit/new.md');
const defaultOldMarkdown_table_cell_edit = readMarkdownFile('./table_cell_edit/old.md');
const defaultNewMarkdown_table_cell_edit = readMarkdownFile('./table_cell_edit/new.md');
const defaultOldMarkdown_table_row_add_del = readMarkdownFile('./table_row_add_del/old.md');
const defaultNewMarkdown_table_row_add_del = readMarkdownFile('./table_row_add_del/new.md');
const defaultOldMarkdown_code_line_edit = readMarkdownFile('./code_line_edit/old.md');
const defaultNewMarkdown_code_line_edit = readMarkdownFile('./code_line_edit/new.md');
const defaultOldMarkdown_heading_rename = readMarkdownFile('./heading_rename/old.md');
const defaultNewMarkdown_heading_rename = readMarkdownFile('./heading_rename/new.md');
const defaultOldMarkdown_move_section = readMarkdownFile('./move_section/old.md');
const defaultNewMarkdown_move_section = readMarkdownFile('./move_section/new.md');
const defaultOldMarkdown_similar_paragraphs = readMarkdownFile('./similar_paragraphs/old.md');
const defaultNewMarkdown_similar_paragraphs = readMarkdownFile('./similar_paragraphs/new.md');
const defaultOldMarkdown_large_doc = readMarkdownFile('./large_doc/old.md');
const defaultNewMarkdown_large_doc = readMarkdownFile('./large_doc/new.md');
const defaultOldMarkdown_cjk_inline = readMarkdownFile('./cjk_inline/old.md');
const defaultNewMarkdown_cjk_inline = readMarkdownFile('./cjk_inline/new.md');
const defaultOldMarkdown_identity = readMarkdownFile('./identity/old.md');
const defaultNewMarkdown_identity = readMarkdownFile('./identity/new.md');
const defaultOldMarkdown_empty_to_content = readMarkdownFile('./empty_to_content/old.md');
const defaultNewMarkdown_empty_to_content = readMarkdownFile('./empty_to_content/new.md');
const defaultOldMarkdown_content_to_empty = readMarkdownFile('./content_to_empty/old.md');
const defaultNewMarkdown_content_to_empty = readMarkdownFile('./content_to_empty/new.md');

// export const testcases = [
//   {
//     name: 'complex',
//     oldMarkdown: defaultOldMarkdown_complex,
//     newMarkdown: defaultNewMarkdown_complex,
//   },
// ];

export const testcases = [
  {
    name: 'simple',
    oldMarkdown: defaultOldMarkdown_simple,
    newMarkdown: defaultNewMarkdown_simple,
  },
  {
    name: 'headings',
    oldMarkdown: defaultOldMarkdown_headings,
    newMarkdown: defaultNewMarkdown_headings,
  },
  {
    name: 'lists',
    oldMarkdown: defaultOldMarkdown_lists,
    newMarkdown: defaultNewMarkdown_lists,
  },
  {
    name: 'code',
    oldMarkdown: defaultOldMarkdown_code,
    newMarkdown: defaultNewMarkdown_code,
  },
  {
    name: 'tables',
    oldMarkdown: defaultOldMarkdown_tables,
    newMarkdown: defaultNewMarkdown_tables,
  },
  {
    name: 'links',
    oldMarkdown: defaultOldMarkdown_links,
    newMarkdown: defaultNewMarkdown_links,
  },
  {
    name: 'formatting',
    oldMarkdown: defaultOldMarkdown_formatting,
    newMarkdown: defaultNewMarkdown_formatting,
  },
  {
    name: 'complex',
    oldMarkdown: defaultOldMarkdown_complex,
    newMarkdown: defaultNewMarkdown_complex,
  },
  {
    name: 'extreme_long',
    oldMarkdown: defaultOldMarkdown_extreme_long,
    newMarkdown: defaultNewMarkdown_extreme_long,
  },
  {
    name: 'nested_structures',
    oldMarkdown: defaultOldMarkdown_nested_structures,
    newMarkdown: defaultNewMarkdown_nested_structures,
  },
  {
    name: 'special_characters',
    oldMarkdown: defaultOldMarkdown_special_characters,
    newMarkdown: defaultNewMarkdown_special_characters,
  },
  {
    name: 'whitespace',
    oldMarkdown: defaultOldMarkdown_whitespace,
    newMarkdown: defaultNewMarkdown_whitespace,
  },
  {
    name: 'mixed_content',
    oldMarkdown: defaultOldMarkdown_mixed_content,
    newMarkdown: defaultNewMarkdown_mixed_content,
  },
  {
    name: 'paragraph_word_edit',
    oldMarkdown: defaultOldMarkdown_paragraph_word_edit,
    newMarkdown: defaultNewMarkdown_paragraph_word_edit,
  },
  {
    name: 'table_cell_edit',
    oldMarkdown: defaultOldMarkdown_table_cell_edit,
    newMarkdown: defaultNewMarkdown_table_cell_edit,
  },
  {
    name: 'table_row_add_del',
    oldMarkdown: defaultOldMarkdown_table_row_add_del,
    newMarkdown: defaultNewMarkdown_table_row_add_del,
  },
  {
    name: 'code_line_edit',
    oldMarkdown: defaultOldMarkdown_code_line_edit,
    newMarkdown: defaultNewMarkdown_code_line_edit,
  },
  {
    name: 'heading_rename',
    oldMarkdown: defaultOldMarkdown_heading_rename,
    newMarkdown: defaultNewMarkdown_heading_rename,
  },
  {
    name: 'move_section',
    oldMarkdown: defaultOldMarkdown_move_section,
    newMarkdown: defaultNewMarkdown_move_section,
  },
  {
    name: 'similar_paragraphs',
    oldMarkdown: defaultOldMarkdown_similar_paragraphs,
    newMarkdown: defaultNewMarkdown_similar_paragraphs,
  },
  {
    name: 'large_doc',
    oldMarkdown: defaultOldMarkdown_large_doc,
    newMarkdown: defaultNewMarkdown_large_doc,
  },
  {
    name: 'cjk_inline',
    oldMarkdown: defaultOldMarkdown_cjk_inline,
    newMarkdown: defaultNewMarkdown_cjk_inline,
  },
  {
    name: 'identity',
    oldMarkdown: defaultOldMarkdown_identity,
    newMarkdown: defaultNewMarkdown_identity,
  },
  {
    name: 'empty_to_content',
    oldMarkdown: defaultOldMarkdown_empty_to_content,
    newMarkdown: defaultNewMarkdown_empty_to_content,
  },
  {
    name: 'content_to_empty',
    oldMarkdown: defaultOldMarkdown_content_to_empty,
    newMarkdown: defaultNewMarkdown_content_to_empty,
  }
];
