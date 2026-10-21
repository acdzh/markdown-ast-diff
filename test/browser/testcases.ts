import defaultOldMarkdown_simple from '../testcases/simple/old.md?raw';
import defaultNewMarkdown_simple from '../testcases/simple/new.md?raw';
import defaultOldMarkdown_headings from '../testcases/headings/old.md?raw';
import defaultNewMarkdown_headings from '../testcases/headings/new.md?raw';
import defaultOldMarkdown_lists from '../testcases/lists/old.md?raw';
import defaultNewMarkdown_lists from '../testcases/lists/new.md?raw';
import defaultOldMarkdown_code from '../testcases/code/old.md?raw';
import defaultNewMarkdown_code from '../testcases/code/new.md?raw';
import defaultOldMarkdown_tables from '../testcases/tables/old.md?raw';
import defaultNewMarkdown_tables from '../testcases/tables/new.md?raw';
import defaultOldMarkdown_links from '../testcases/links/old.md?raw';
import defaultNewMarkdown_links from '../testcases/links/new.md?raw';
import defaultOldMarkdown_formatting from '../testcases/formatting/old.md?raw';
import defaultNewMarkdown_formatting from '../testcases/formatting/new.md?raw';
import defaultOldMarkdown_complex from '../testcases/complex/old.md?raw';
import defaultNewMarkdown_complex from '../testcases/complex/new.md?raw';
import defaultOldMarkdown_extreme_long from '../testcases/extreme_long/old.md?raw';
import defaultNewMarkdown_extreme_long from '../testcases/extreme_long/new.md?raw';
import defaultOldMarkdown_nested_structures from '../testcases/nested_structures/old.md?raw';
import defaultNewMarkdown_nested_structures from '../testcases/nested_structures/new.md?raw';
import defaultOldMarkdown_special_characters from '../testcases/special_characters/old.md?raw';
import defaultNewMarkdown_special_characters from '../testcases/special_characters/new.md?raw';
import defaultOldMarkdown_whitespace from '../testcases/whitespace/old.md?raw';
import defaultNewMarkdown_whitespace from '../testcases/whitespace/new.md?raw';
import defaultOldMarkdown_mixed_content from '../testcases/mixed_content/old.md?raw';
import defaultNewMarkdown_mixed_content from '../testcases/mixed_content/new.md?raw';
import defaultOldMarkdown_paragraph_word_edit from '../testcases/paragraph_word_edit/old.md?raw';
import defaultNewMarkdown_paragraph_word_edit from '../testcases/paragraph_word_edit/new.md?raw';
import defaultOldMarkdown_table_cell_edit from '../testcases/table_cell_edit/old.md?raw';
import defaultNewMarkdown_table_cell_edit from '../testcases/table_cell_edit/new.md?raw';
import defaultOldMarkdown_table_row_add_del from '../testcases/table_row_add_del/old.md?raw';
import defaultNewMarkdown_table_row_add_del from '../testcases/table_row_add_del/new.md?raw';
import defaultOldMarkdown_code_line_edit from '../testcases/code_line_edit/old.md?raw';
import defaultNewMarkdown_code_line_edit from '../testcases/code_line_edit/new.md?raw';
import defaultOldMarkdown_heading_rename from '../testcases/heading_rename/old.md?raw';
import defaultNewMarkdown_heading_rename from '../testcases/heading_rename/new.md?raw';
import defaultOldMarkdown_move_section from '../testcases/move_section/old.md?raw';
import defaultNewMarkdown_move_section from '../testcases/move_section/new.md?raw';
import defaultOldMarkdown_similar_paragraphs from '../testcases/similar_paragraphs/old.md?raw';
import defaultNewMarkdown_similar_paragraphs from '../testcases/similar_paragraphs/new.md?raw';
import defaultOldMarkdown_large_doc from '../testcases/large_doc/old.md?raw';
import defaultNewMarkdown_large_doc from '../testcases/large_doc/new.md?raw';
import defaultOldMarkdown_cjk_inline from '../testcases/cjk_inline/old.md?raw';
import defaultNewMarkdown_cjk_inline from '../testcases/cjk_inline/new.md?raw';
import defaultOldMarkdown_identity from '../testcases/identity/old.md?raw';
import defaultNewMarkdown_identity from '../testcases/identity/new.md?raw';
import defaultOldMarkdown_empty_to_content from '../testcases/empty_to_content/old.md?raw';
import defaultNewMarkdown_empty_to_content from '../testcases/empty_to_content/new.md?raw';
import defaultOldMarkdown_content_to_empty from '../testcases/content_to_empty/old.md?raw';
import defaultNewMarkdown_content_to_empty from '../testcases/content_to_empty/new.md?raw';


import { Testcase } from './types';

export const testcases: Testcase[] = [
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
