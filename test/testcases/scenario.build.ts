/**
 * 生成 scenario 层的 case.json。
 *
 *   npx tsx test/testcases/scenario.build.ts
 *
 * scenario 用例是贴近真实文档的综合修改，old.md / new.md 直接维护在目录里；
 * 这里只维护它们的元数据：如实描述“改了什么”，以及经核实的已知问题。
 * scenario 不写细粒度断言（那是 golden 的职责），只要求还原正确，分数用于看趋势。
 */
import fs from 'fs';
import path from 'path';
import type { CaseSpec } from '../evaluate/expect';

const CHECKBOX = '任务列表 checked 变化被静默丢弃（见 golden/list/task-toggle）';
const DEFINITION = '链接/图片引用定义的 url/title 变化被静默丢弃（见 golden/reference/definition-url-change）';
const MULTI_EDIT = '同一句多处修改、后面还跟着不变的句子时，整段被标为 unchanged，修改丢失（见 golden/inline/multi-edit-one-sentence-cjk）';
const DEEP_CHILD = '给最深层列表项新增子列表时原列表项文字丢失（见 golden/list/deep-item-add-child）';

const SPECS: Record<string, CaseSpec> = {
  cjk_inline: {
    capability: 'inline',
    description: '约 60 行的中文影评，在三个段落里各替换 2 个字（奇妙→神奇、温暖→治愈、深刻→隽永）',
    knownIssue: `第一处修改（奇妙→神奇）丢失：${MULTI_EDIT}`,
  },
  code: {
    capability: 'code',
    description: 'JS / Python / HTML 三个代码块同时重写：加参数校验、改调用参数、HTML 加 header/main/footer；标题加“（更新版）”',
  },
  code_line_edit: {
    capability: 'code',
    description: '长代码块里的局部修改：重命名变量 result→output、改一个阈值、插两行注释和一个字段',
  },
  complex: {
    capability: 'mixed',
    description: '覆盖几乎所有语法的大杂烩：标题/列表/任务/代码换语言/表格加列/引用加层/链接图片/公式/脚注/HTML 同时修改，并新增章节',
  },
  extreme_long: {
    capability: 'mixed',
    description: '超长段落、超长列表、超长代码块（JS→TS 重写）、12 列宽表格加两列、深层引用，各处都有改动',
  },
  formatting: {
    capability: 'inline',
    description: '行内格式（粗体/斜体/删除线/行内代码）增改、引用加层、删掉两个短段落和一个三级标题、新增章节',
  },
  heading_rename: {
    capability: 'heading',
    description: '约 80 行的菜谱，改一个二级标题（烹饪步骤→下厨指南），并在一个长句里把“热水”改成“开水”（两处）',
    knownIssue: `“热水→开水”的修改丢失：${MULTI_EDIT}`,
  },
  headings: {
    capability: 'heading',
    description: '六级标题各自改写，一个四级标题和它下方的段落交换顺序',
  },
  large_doc: {
    capability: 'perf',
    description: '约 500 行文档只改 3 处：标题版本号、一个段落里的两个数字、一个列表项里插入一句',
    knownIssue: `段落里两个数字的修改（1700→1800、37→39）丢失：${MULTI_EDIT}`,
  },
  links: {
    capability: 'inline',
    description: '链接文字/url/title、引用式链接与定义、图片 alt/url 同时修改，并新增链接和段落',
    knownIssue: DEFINITION,
  },
  lists: {
    capability: 'list',
    description: '无序/有序/任务列表的增删改：插入项、子列表插项、改项、勾选状态变化',
    knownIssue: CHECKBOX,
  },
  mixed_content: {
    capability: 'mixed',
    description: '列表/引用/表格互相嵌套，各层都有改动；表格加列加行、代码块换语言、HTML 块改动，新增“极端混合”章节',
    knownIssue: '“表格中的列表”和“多层嵌套列表”两节在单独 diff 时同样丢失旧内容（表格单元格内 HTML、嵌套代码块 lang），尚未最小化',
  },
  move_section: {
    capability: 'heading',
    description: '三个城市章节中，第一个和第三个交换位置；章节内容大部分不变',
  },
  nested_structures: {
    capability: 'list',
    description: '十层嵌套列表、混合列表、任务列表、六层嵌套引用、嵌套表格、嵌套 HTML 各处小改并新增子项',
    knownIssue: `${DEEP_CHILD}；${CHECKBOX}；嵌套表格/列表中的 HTML 也有丢失，尚未最小化`,
  },
  paragraph_word_edit: {
    capability: 'inline',
    description: '约 100 行的观察笔记，只在一句里改了两处（两罐→三罐、清水→羊奶）',
    knownIssue: `两处修改全部丢失，输出与新文档完全相同：${MULTI_EDIT}`,
  },
  similar_paragraphs: {
    capability: 'block',
    description: '两个结构几乎一样的章节（读书会/观影会），只改其中一个章节里的一个词',
  },
  simple: {
    capability: 'mixed',
    description: '最小综合示例：段落扩写、列表项替换、代码块换语言并改值、删除一个公式块',
  },
  special_characters: {
    capability: 'inline',
    description: '各类特殊字符、Unicode、HTML 实体、emoji 的增删改，并新增多语种章节和零宽字符',
  },
  table_cell_edit: {
    capability: 'table',
    description: '表格里改 3 个单元格的数字，其余不变',
  },
  table_row_add_del: {
    capability: 'table',
    description: '表格删 1 行、改 1 个单元格、插 2 行',
  },
  tables: {
    capability: 'table',
    description: '三张表同时改：加列、插行、改单元格、整行数字更新',
  },
  whitespace: {
    capability: 'block',
    description: '空格/空行/制表符/缩进的各种变化，部分会改变 AST（列表缩进、代码块），部分不会（多余空行）',
  },
};

function main(): void {
  const root = path.join(__dirname, 'scenario');
  const dirs = fs.readdirSync(root).filter(d => fs.existsSync(path.join(root, d, 'old.md')));
  const missing = dirs.filter(d => !SPECS[d]);
  const stale = Object.keys(SPECS).filter(k => !dirs.includes(k));
  if (missing.length || stale.length) {
    throw new Error(`scenario specs out of sync. missing: [${missing.join(', ')}] stale: [${stale.join(', ')}]`);
  }
  for (const d of dirs) {
    fs.writeFileSync(path.join(root, d, 'case.json'), `${JSON.stringify(SPECS[d], null, 2)}\n`);
  }
  console.log(`Wrote ${dirs.length} scenario case.json files`);
}

main();
