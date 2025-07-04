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
  }
]