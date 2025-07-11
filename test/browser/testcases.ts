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
  }
];
