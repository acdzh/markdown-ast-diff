/**
 * 生成 golden 原子用例。
 *
 *   npx tsx test/testcases/golden.build.ts
 *
 * golden 用例的唯一来源是本文件：每个用例一个最小 old/new + 期望断言。
 * 修改用例请改这里再重新生成，不要直接编辑生成的 old.md / new.md / case.json。
 * 脚本会先清空 test/testcases/golden/ 再写入。
 *
 * 编写约定：
 * - 一个用例只测一个能力点，文档尽量 ≤ 15 行，变化点之外的内容足够区分上下文即可
 * - capability 形如 `<大类>.<能力>`，大类用于报告汇总
 * - expect 只写“正确的 diff 一定满足”的断言，不写依赖具体实现细节的断言
 * - 已知算法缺陷用 knownIssue 记录（记为 XFAIL），修好后会报 XPASS 提醒移除
 */
import fs from 'fs';
import path from 'path';
import type { CaseSpec } from '../evaluate/expect';

interface GoldenCase extends CaseSpec {
  name: string;
  capability: string;
  description: string;
  old: string;
  new: string;
}

const md = (strings: TemplateStringsArray, ...values: unknown[]): string => {
  const raw = strings.reduce((acc, s, i) => acc + s + (i < values.length ? String(values[i]) : ''), '');
  const lines = raw.replace(/^\n/, '').split('\n');
  const indent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^ */)![0].length));
  return `${lines.map(l => l.slice(indent)).join('\n').replace(/\s+$/, '')}\n`;
};

const CASES: GoldenCase[] = [
  // ───────────────────────── edge ─────────────────────────
  {
    name: 'identity',
    capability: 'edge.identity',
    description: '两个完全相同的文档，不应产生任何变更',
    old: md`
      # 仓鼠饲养指南

      养仓鼠需要耐心，以下是新手必读的要点。

      - 笼子至少 60cm × 40cm
      - 跑轮直径不小于 21cm

      \`\`\`text
      早上 8:00 主粮 5g
      \`\`\`

      | 项目 | 频率 |
      | --- | --- |
      | 换垫料 | 每周 |
    `,
    new: md`
      # 仓鼠饲养指南

      养仓鼠需要耐心，以下是新手必读的要点。

      - 笼子至少 60cm × 40cm
      - 跑轮直径不小于 21cm

      \`\`\`text
      早上 8:00 主粮 5g
      \`\`\`

      | 项目 | 频率 |
      | --- | --- |
      | 换垫料 | 每周 |
    `,
    expect: { identical: true },
  },
  {
    name: 'empty-to-content',
    capability: 'edge.empty',
    description: '空文档变为有内容：全部内容都应是新增',
    old: '',
    new: md`
      # 办公室生存指南

      茶水间是办公室的情报中心。

      - 最后一杯咖啡意味着要洗咖啡壶
    `,
    expect: { ins: ['办公室生存指南', '茶水间是办公室的情报中心', '最后一杯咖啡意味着要洗咖啡壶'], notDel: ['办公室'] },
  },
  {
    name: 'content-to-empty',
    capability: 'edge.empty',
    description: '有内容的文档清空：全部内容都应是删除',
    old: md`
      # 雨天好心情

      下雨天窝在沙发上听雨声。

      1. 穿上雨靴踩水坑
    `,
    new: '',
    expect: { del: ['雨天好心情', '下雨天窝在沙发上听雨声', '穿上雨靴踩水坑'], notIns: ['雨天'] },
  },
  {
    name: 'trailing-newline-only',
    capability: 'edge.whitespace',
    description: '仅文件末尾换行数不同，渲染结果一致，不应有变更',
    old: '# 标题\n\n段落内容。',
    new: '# 标题\n\n段落内容。\n\n\n',
    expect: { identical: true },
  },
  {
    name: 'frontmatter-field-edit',
    capability: 'edge.frontmatter',
    description: 'frontmatter 中改一个字段值，正文必须完整保留',
    old: md`
      ---
      title: 旧标题
      ---

      # 正文

      正文内容不受影响。
    `,
    new: md`
      ---
      title: 新标题
      ---

      # 正文

      正文内容不受影响。
    `,
    expect: { kept: ['正文', '正文内容不受影响'] },
  },
  {
    name: 'frontmatter-field-add',
    capability: 'edge.frontmatter',
    description: 'frontmatter 中新增一个字段，正文必须完整保留',
    old: md`
      ---
      title: 文档
      ---

      正文段落。
    `,
    new: md`
      ---
      title: 文档
      draft: true
      ---

      正文段落。
    `,
    expect: { kept: ['文档', '正文段落'] },
    knownIssue: '解析器不支持 YAML frontmatter：新增字段会连带重标相邻的伪标题块；该用例只保证正文不丢，接入 frontmatter 解析后应收紧断言',
  },
  {
    name: 'list-marker-tab-vs-space',
    capability: 'list.syntax',
    description: '列表标记后用制表符或两个空格缩进，渲染一致',
    old: '-\t第一项',
    new: '-  第一项',
    expect: { identical: true },
  },
  {
    name: 'ordered-paren-vs-dot',
    capability: 'list.syntax',
    description: '有序列表标记 1) 写成 1.，渲染一致',
    old: md`
      1) 第一步
      2) 第二步
    `,
    new: md`
      1. 第一步
      2. 第二步
    `,
    expect: { identical: true },
  },
  {
    name: 'task-marker-case',
    capability: 'list.syntax',
    description: '任务勾选 [x] 与 [X] 等价',
    old: md`
      - [x] 完成项
    `,
    new: md`
      - [X] 完成项
    `,
    expect: { identical: true },
  },
  {
    name: 'task-needs-space',
    capability: 'list.task',
    description: '- [x] 后少空格就不是任务列表：勾选状态语义改变，必须可见',
    old: md`
      - [x]完成项
    `,
    new: md`
      - [x] 完成项
    `,
    expect: { del: ['[x]完成项'], ins: ['完成项'], maxChangedTokens: 4 },
    knownIssue: '旧侧普通列表文字“[x]完成项”只标出了“[x]”部分，整个文本项没有完整进 del（oldCorrect=false）',
  },
  {
    name: 'setext-underline-length',
    capability: 'heading.syntax',
    description: 'Setext 下划线长度不同，仍是同一标题',
    old: md`
      标题
      -

      正文。
    `,
    new: md`
      标题
      ---

      正文。
    `,
    expect: { identical: true },
  },
  {
    name: 'thematic-break-style',
    capability: 'block.syntax',
    description: '分隔线 *** 与 ___ 等价',
    old: md`
      上文。

      ***

      下文。
    `,
    new: md`
      上文。

      ___

      下文。
    `,
    expect: { identical: true },
  },
  {
    name: 'heading-closing-sequence',
    capability: 'heading.syntax',
    description: 'ATX 标题末尾的闭合 # 序列可省略',
    old: md`
      # 标题 #

      正文。
    `,
    new: md`
      # 标题

      正文。
    `,
    expect: { identical: true },
  },
  {
    name: 'autolink-angle-brackets',
    capability: 'inline.syntax',
    description: '裸链接写成自动链接 <url>，渲染结果相同',
    old: md`
      访问 https://example.com 继续。
    `,
    new: md`
      访问 <https://example.com> 继续。
    `,
    expect: { identical: true },
  },
  {
    name: 'hard-break-escape-vs-spaces',
    capability: 'inline.syntax',
    description: '行尾反斜杠硬换行与行尾两空格硬换行等价',
    old: '第一行\\\n第二行',
    new: '第一行  \n第二行',
    expect: { identical: true },
  },
  {
    name: 'fence-tilde-length',
    capability: 'code.syntax',
    description: '~~~ 围栏长度不同仍是同一个代码块',
    old: '~~~\ncode\n~~~',
    new: '~~~~\ncode\n~~~~',
    expect: { identical: true },
  },
  {
    name: 'code-trailing-blank-line',
    capability: 'code.whitespace',
    description: '代码块末尾多出一个空行：属于代码内容，变化必须可见',
    old: '```\nline\n```',
    new: '```\nline\n\n```',
    expect: { ins: ['line'], maxHunks: 1 },
  },
  {
    name: 'crlf-vs-lf',
    capability: 'edge.whitespace',
    description: 'CRLF 与 LF 换行风格不同，内容一致',
    old: '# 标题\r\n\r\n第一段。\r\n\r\n- 列表项\r\n',
    new: '# 标题\n\n第一段。\n\n- 列表项\n',
    expect: { identical: true },
  },

  // ───────────────────────── inline ─────────────────────────
  {
    name: 'word-replace-en',
    capability: 'inline.word',
    description: '英文段落中替换一个单词，应只标出该词',
    old: md`
      # Notes

      The quick brown fox jumps over the lazy dog near the river bank.

      Nothing else changes in this paragraph at all.
    `,
    new: md`
      # Notes

      The quick red fox jumps over the lazy dog near the river bank.

      Nothing else changes in this paragraph at all.
    `,
    expect: { del: ['brown'], ins: ['red'], kept: ['jumpsoverthelazydog', 'Nothingelsechanges'], maxChangedTokens: 2, maxHunks: 1 },
  },
  {
    name: 'word-replace-cjk',
    capability: 'inline.word',
    description: '中文段落中替换两个字，应只标出这两个字',
    old: md`
      《千与千寻》通过千寻在神隐世界的奇妙冒险，讲述了一个关于成长与勇气的故事。

      那些光怪陆离的神灵和妖怪，构建出一个既陌生又迷人的异世界。
    `,
    new: md`
      《千与千寻》通过千寻在神隐世界的奇幻旅程，讲述了一个关于成长与勇气的故事。

      那些光怪陆离的神灵和妖怪，构建出一个既陌生又迷人的异世界。
    `,
    expect: { del: ['妙冒险'], ins: ['幻旅程'], kept: ['讲述了一个关于成长与勇气的故事', '光怪陆离'], maxChangedTokens: 8, maxHunks: 1 },
  },
  {
    name: 'number-change',
    capability: 'inline.word',
    description: '只改段落里的数字',
    old: md`
      银河系包含大约 4000 亿颗恒星，其中有人居住的星球约 1700 万颗。
    `,
    new: md`
      银河系包含大约 4000 亿颗恒星，其中有人居住的星球约 1800 万颗。
    `,
    expect: { del: ['1700'], ins: ['1800'], kept: ['4000亿颗恒星'], maxChangedTokens: 2, maxHunks: 1 },
  },
  {
    name: 'multi-edit-one-sentence-cjk',
    capability: 'inline.word',
    description: '同一句中文里两处独立修改，后面还有一句不变的话',
    old: md`
      周二傍晚放了两罐猫粮和一碟清水。大胖橘第一个冲过来，吃相极其豪放。
    `,
    new: md`
      周二傍晚放了三罐猫粮和一碟羊奶。大胖橘第一个冲过来，吃相极其豪放。
    `,
    expect: { del: ['两', '清水'], ins: ['三', '羊奶'], kept: ['大胖橘第一个冲过来'], maxChangedTokens: 6 },
    knownIssue: '同一句内多处修改且后面还有不变的句子时，整段被标为 diffUnchanged，修改被静默丢弃（oldCorrect=false）；最小复现：“放了两罐猫粮和清水。后面还有一句很长的话。”',
  },
  {
    name: 'sentence-insert',
    capability: 'inline.sentence',
    description: '段落末尾追加一句话',
    old: md`
      物业的保安大叔对流浪猫睁一只眼闭一只眼。这群猫在小区里待了至少三年。
    `,
    new: md`
      物业的保安大叔对流浪猫睁一只眼闭一只眼。这群猫在小区里待了至少三年。偶尔他还会从食堂带剩饭出来。
    `,
    expect: { ins: ['偶尔他还会从食堂带剩饭出来'], kept: ['这群猫在小区里待了至少三年'], notDel: ['保安'], maxHunks: 1 },
  },
  {
    name: 'sentence-delete',
    capability: 'inline.sentence',
    description: '删除段落中间的一句话',
    old: md`
      Our cat sleeps all day. She wakes up only for dinner. At night she runs around the house.
    `,
    new: md`
      Our cat sleeps all day. At night she runs around the house.
    `,
    expect: { del: ['Shewakesuponlyfordinner'], kept: ['Ourcatsleepsallday', 'Atnightsherunsaroundthehouse'], notIns: ['cat'], maxHunks: 1 },
  },
  {
    name: 'paragraph-rewrite',
    capability: 'inline.rewrite',
    description: '整段几乎完全重写，前后段落不变，不应影响其他段落',
    old: md`
      第一段保持不变，用来提供上下文。

      油屋这个场景的设定简直是神来之笔，既是服务众神的澡堂，又是微缩的社会模型。

      最后一段同样保持不变。
    `,
    new: md`
      第一段保持不变，用来提供上下文。

      建筑的垂直结构直接映射了内部的权力秩序，每穿过一层楼就等于穿越一个阶层。

      最后一段同样保持不变。
    `,
    expect: { kept: ['第一段保持不变', '最后一段同样保持不变'], del: ['神来之笔'], ins: ['垂直结构'], notDel: ['第一段', '最后一段'] },
    knownIssue: '整段重写时旧段落内容被静默丢弃：输出只有新段落且标为 diffUnchanged，看不到任何删除（oldCorrect=false）',
  },
  {
    name: 'make-bold',
    capability: 'inline.format',
    description: '把一个词改为加粗，文字不变',
    old: md`
      这是一段包含重点的说明文字。
    `,
    new: md`
      这是一段包含**重点**的说明文字。
    `,
    expect: { del: ['重点'], ins: ['重点'], kept: ['这是一段包含', '的说明文字'], maxChangedTokens: 4 },
  },
  {
    name: 'remove-emphasis',
    capability: 'inline.format',
    description: '去掉斜体，文字不变',
    old: md`
      Please *read the manual* before you start.
    `,
    new: md`
      Please read the manual before you start.
    `,
    expect: { del: ['readthemanual'], ins: ['readthemanual'], kept: ['Please', 'beforeyoustart'], maxChangedTokens: 6 },
  },
  {
    name: 'bold-boundary-shift',
    capability: 'inline.format',
    description: '加粗范围扩大一个词',
    old: md`
      This feature is **very important** for users.
    `,
    new: md`
      This feature is **very important for** users.
    `,
    expect: { kept: ['Thisfeatureis', 'users'], maxChangedTokens: 6 },
  },
  {
    name: 'inline-code-edit',
    capability: 'inline.code',
    description: '修改行内代码的内容',
    old: md`
      调用 \`fetchUser(id)\` 获取用户信息。
    `,
    new: md`
      调用 \`fetchUser(id, options)\` 获取用户信息。
    `,
    expect: { ins: ['options'], kept: ['调用', '获取用户信息'], maxChangedTokens: 6 },
    knownIssue: 'inlineCode 作为原子节点整体替换，不做内部 diff',
  },
  {
    name: 'link-text-change',
    capability: 'inline.link',
    description: '只改链接文字，url 不变',
    old: md`
      详见[官方文档](https://example.com/docs)中的说明。
    `,
    new: md`
      详见[开发者文档](https://example.com/docs)中的说明。
    `,
    expect: { del: ['官方'], ins: ['开发者'], kept: ['详见', '中的说明'], maxChangedTokens: 8 },
    knownIssue: 'link 子树作为行内占位符整体比较，文字局部修改时整个链接替换',
  },
  {
    name: 'link-url-change',
    capability: 'inline.link',
    description: '只改链接 url，文字不变：变化必须可见',
    old: md`
      详见[官方文档](https://example.com/docs)中的说明。
    `,
    new: md`
      详见[官方文档](https://example.org/docs/v2)中的说明。
    `,
    expect: { del: ['官方文档'], ins: ['官方文档'], kept: ['详见', '中的说明'], maxChangedTokens: 8 },
  },
  {
    name: 'link-title-change',
    capability: 'inline.link',
    description: '只改链接 title，文字和 url 不变：变化必须可见',
    old: md`
      访问[示例网站](https://example.com "旧标题")了解更多。
    `,
    new: md`
      访问[示例网站](https://example.com "新标题")了解更多。
    `,
    expect: { del: ['示例网站'], ins: ['示例网站'], kept: ['访问', '了解更多'], maxChangedTokens: 8 },
  },
  {
    name: 'image-alt-change',
    capability: 'inline.image',
    description: '只改图片 alt',
    old: md`
      ![旧的说明文字](https://example.com/cat.png)
    `,
    new: md`
      ![新的说明文字](https://example.com/cat.png)
    `,
    expect: { del: ['旧'], ins: ['新'], maxChangedTokens: 12 },
  },
  {
    name: 'image-url-change',
    capability: 'inline.image',
    description: '只改图片地址，alt 不变：变化必须可见',
    old: md`
      看看这张图：![橘猫](https://example.com/cat-v1.png)
    `,
    new: md`
      看看这张图：![橘猫](https://example.com/cat-v2.png)
    `,
    expect: { del: ['橘猫'], ins: ['橘猫'], kept: ['看看这张图'] },
  },
  {
    name: 'inline-html-tag-wrap',
    capability: 'inline.html',
    description: '给段落中的一个数字套上 <b> 标签：数字本身应保留，标签为新增',
    old: md`
      价格 100 元，含税。
    `,
    new: md`
      价格 <b>100</b> 元，含税。
    `,
    expect: { ins: ['<b>', '</b>'], kept: ['100', '价格', '元，含税'] },
    knownIssue: '给文字套上行内 HTML 标签时，标签后的文字被整段标为 ins 且没有 del，“100 元，含税”等旧内容丢失（oldCorrect=false）',
  },
  {
    name: 'inline-html-attr-edit',
    capability: 'inline.html',
    description: '只改行内 a 标签的 href 属性',
    old: md`
      点击 <a href="https://a.com/x">链接</a> 继续阅读。
    `,
    new: md`
      点击 <a href="https://b.com/y">链接</a> 继续阅读。
    `,
    expect: { del: ['https://a.com/x'], ins: ['https://b.com/y'], kept: ['链接', '继续阅读'] },
  },
  {
    name: 'inline-br-style',
    capability: 'inline.html',
    description: '<br> 写成 <br/>：标签文本不同应标出，周围文字保持不变',
    old: md`
      第一行<br>第二行
    `,
    new: md`
      第一行<br/>第二行
    `,
    expect: { del: ['<br>'], ins: ['<br/>'], kept: ['第一行', '第二行'], maxChangedTokens: 2 },
  },
  {
    name: 'hard-break-add',
    capability: 'inline.break',
    description: '在段落中加入硬换行（行尾两个空格）',
    old: md`
      第一行文字
      第二行文字
    `,
    new: '第一行文字  \n第二行文字\n',
    expect: { kept: ['第一行文字', '第二行文字'], maxChangedTokens: 1 },
  },
  {
    name: 'cjk-punctuation-width',
    capability: 'inline.word',
    description: '只把半角标点改成全角',
    old: md`
      你好,世界!今天天气不错.
    `,
    new: md`
      你好，世界！今天天气不错。
    `,
    expect: { kept: ['你好', '世界', '今天天气不错'], maxChangedTokens: 6 },
  },

  // ───────────────────────── heading ─────────────────────────
  {
    name: 'heading-text-edit',
    capability: 'heading.text',
    description: '标题文字改动，正文不变',
    old: md`
      # 家庭菜谱

      ## 烹饪步骤

      锅里不放油，直接把五花肉冷锅下去煸炒。
    `,
    new: md`
      # 家庭菜谱

      ## 下厨指南

      锅里不放油，直接把五花肉冷锅下去煸炒。
    `,
    expect: { del: ['烹饪步骤'], ins: ['下厨指南'], kept: ['家庭菜谱', '锅里不放油'], maxChangedTokens: 8, maxHunks: 1 },
  },
  {
    name: 'heading-level-change',
    capability: 'heading.level',
    description: '标题级别从 ## 变为 ###，文字不变：变化必须可见',
    old: md`
      # 文档

      ## 安装

      运行 npm install 即可。
    `,
    new: md`
      # 文档

      ### 安装

      运行 npm install 即可。
    `,
    expect: { del: ['安装'], ins: ['安装'], kept: ['文档', '运行npminstall即可'], maxChangedTokens: 4 },
    knownIssue: '标题级别变化被静默丢弃：输出为新 depth 的 heading 且无任何 diff 标记（oldCorrect=false）',
  },
  {
    name: 'setext-vs-atx',
    capability: 'heading.syntax',
    description: 'Setext 标题改写为 ATX 标题，语义相同',
    old: md`
      文档标题
      ========

      正文内容。
    `,
    new: md`
      # 文档标题

      正文内容。
    `,
    expect: { identical: true },
  },
  {
    name: 'setext-h2-vs-atx-h2',
    capability: 'heading.syntax',
    description: 'Setext 二级标题（-----）改写为 ATX 二级标题（##），语义相同',
    old: md`
      安装
      ----

      正文内容。
    `,
    new: md`
      ## 安装

      正文内容。
    `,
    expect: { identical: true },
  },
  {
    name: 'paragraph-to-heading',
    capability: 'heading.level',
    description: '一个普通段落升级为二级标题，文字不变：变化必须可见',
    old: md`
      安装说明

      先运行 npm install。
    `,
    new: md`
      ## 安装说明

      先运行 npm install。
    `,
    expect: { kept: ['先运行npminstall'], del: ['安装说明'], ins: ['安装说明'] },
  },
  {
    name: 'section-insert',
    capability: 'heading.section',
    description: '在两个章节之间插入一个新章节',
    old: md`
      # 旅行攻略

      ## 成都

      先吃一顿火锅，再去人民公园喝盖碗茶。

      ## 厦门

      鼓浪屿的小巷子才是精华所在。
    `,
    new: md`
      # 旅行攻略

      ## 成都

      先吃一顿火锅，再去人民公园喝盖碗茶。

      ## 大理

      租一辆小电驴，沿着洱海环湖骑行。

      ## 厦门

      鼓浪屿的小巷子才是精华所在。
    `,
    expect: { ins: ['大理', '租一辆小电驴'], kept: ['先吃一顿火锅', '鼓浪屿的小巷子'], notDel: ['成都', '厦门'], maxHunks: 1 },
  },
  {
    name: 'section-delete',
    capability: 'heading.section',
    description: '删除中间整个章节',
    old: md`
      # 旅行攻略

      ## 成都

      先吃一顿火锅。

      ## 大理

      沿着洱海环湖骑行。

      ## 厦门

      逛逛鼓浪屿。
    `,
    new: md`
      # 旅行攻略

      ## 成都

      先吃一顿火锅。

      ## 厦门

      逛逛鼓浪屿。
    `,
    expect: { del: ['大理', '沿着洱海环湖骑行'], kept: ['先吃一顿火锅', '逛逛鼓浪屿'], notIns: ['大理'], maxHunks: 1 },
  },
  {
    name: 'section-swap',
    capability: 'heading.move',
    description: '两个章节交换位置，内容不变：变更量不应超过一个章节',
    old: md`
      # 旅行攻略

      ## 成都

      来成都第一件事是钻进苍蝇馆子吃一顿正宗的红油火锅。

      吃饱了沿着宽窄巷子溜达一圈消消食。

      ## 厦门

      鼓浪屿的小巷子才是精华所在，别跟着旅游团走主干道。

      环岛路骑行是厦门的另一张名片。
    `,
    new: md`
      # 旅行攻略

      ## 厦门

      鼓浪屿的小巷子才是精华所在，别跟着旅游团走主干道。

      环岛路骑行是厦门的另一张名片。

      ## 成都

      来成都第一件事是钻进苍蝇馆子吃一顿正宗的红油火锅。

      吃饱了沿着宽窄巷子溜达一圈消消食。
    `,
    expect: { kept: ['旅行攻略'], maxHunks: 2, minEfficiency: 0.8 },
  },
  {
    name: 'duplicate-heading-names',
    capability: 'heading.section',
    description: '多个章节的子标题同名，只改第二个章节下的正文，不应错配到第一个章节',
    old: md`
      # 产品 A

      ## 安装

      下载 A 的安装包并双击运行。

      # 产品 B

      ## 安装

      使用包管理器安装 B。
    `,
    new: md`
      # 产品 A

      ## 安装

      下载 A 的安装包并双击运行。

      # 产品 B

      ## 安装

      使用 Homebrew 安装 B。
    `,
    expect: { del: ['包管理器'], ins: ['Homebrew'], kept: ['下载A的安装包并双击运行'], notDel: ['下载'], maxHunks: 1 },
  },

  // ───────────────────────── list ─────────────────────────
  {
    name: 'item-insert',
    capability: 'list.item',
    description: '列表中间插入一项',
    old: md`
      - 选择合适的笼子
      - 准备木屑垫料
      - 购买静音跑轮
    `,
    new: md`
      - 选择合适的笼子
      - 准备木屑垫料
      - 备好陶瓷食盆和滚珠水壶
      - 购买静音跑轮
    `,
    expect: { ins: ['备好陶瓷食盆和滚珠水壶'], kept: ['选择合适的笼子', '准备木屑垫料', '购买静音跑轮'], notDel: ['笼子', '跑轮'], maxHunks: 1 },
  },
  {
    name: 'item-delete',
    capability: 'list.item',
    description: '删除列表中间一项',
    old: md`
      - 选择合适的笼子
      - 准备木屑垫料
      - 购买静音跑轮
    `,
    new: md`
      - 选择合适的笼子
      - 购买静音跑轮
    `,
    expect: { del: ['准备木屑垫料'], kept: ['选择合适的笼子', '购买静音跑轮'], notIns: ['笼子'], maxHunks: 1 },
  },
  {
    name: 'item-edit',
    capability: 'list.item',
    description: '修改列表项中的一个词',
    old: md`
      - 笼子至少 60cm × 40cm
      - 跑轮直径不小于 21cm
      - 室温保持在 20-26°C
    `,
    new: md`
      - 笼子至少 60cm × 40cm
      - 跑轮直径不小于 25cm
      - 室温保持在 20-26°C
    `,
    expect: { del: ['21'], ins: ['25'], kept: ['跑轮直径不小于', '笼子至少'], maxChangedTokens: 2, maxHunks: 1 },
  },
  {
    name: 'item-reorder',
    capability: 'list.move',
    description: '交换两个列表项的顺序',
    old: md`
      - 第一项：准备食材
      - 第二项：切菜备料
      - 第三项：开火烹饪
    `,
    new: md`
      - 第二项：切菜备料
      - 第一项：准备食材
      - 第三项：开火烹饪
    `,
    expect: { kept: ['第三项：开火烹饪'], maxHunks: 2, minEfficiency: 0.5 },
  },
  {
    name: 'nested-item-insert',
    capability: 'list.nested',
    description: '在二级列表中插入一项',
    old: md`
      - 主要功能
        - 子功能 1
        - 子功能 2
      - 次要功能
    `,
    new: md`
      - 主要功能
        - 子功能 1
        - 新增子功能
        - 子功能 2
      - 次要功能
    `,
    expect: { ins: ['新增子功能'], kept: ['主要功能', '子功能1', '子功能2', '次要功能'], maxHunks: 1 },
  },
  {
    name: 'deep-item-add-child',
    capability: 'list.nested',
    description: '给三级列表项新增一个子项，原有的三级列表项文字不应丢失',
    old: md`
      - 一级
        - 二级
          - 三级
    `,
    new: md`
      - 一级
        - 二级
          - 三级
            - 新增四级
    `,
    expect: { ins: ['新增四级'], kept: ['一级', '二级', '三级'], notDel: ['一级'], maxChangedTokens: 4, maxHunks: 1 },
    knownIssue: '给最深层列表项新增子列表时，原列表项文字被标为 ins 且没有对应的 del，旧内容丢失（oldCorrect=false）；最小复现：“- a / - b / - c”下给 c 加子项 d',
  },
  {
    name: 'task-toggle',
    capability: 'list.task',
    description: '任务列表勾选状态变化，文字不变：变化必须可见',
    old: md`
      - [ ] 写周报
      - [x] 提交代码
    `,
    new: md`
      - [x] 写周报
      - [x] 提交代码
    `,
    expect: { kept: ['写周报', '提交代码'], maxChangedTokens: 2 },
    knownIssue: '列表项 checked 变化被静默丢弃：输出为新勾选状态且无任何 diff 标记（oldCorrect=false）',
  },
  {
    name: 'marker-style',
    capability: 'list.syntax',
    description: '列表标记从 - 改为 *，语义相同',
    old: md`
      - 苹果
      - 香蕉
    `,
    new: md`
      * 苹果
      * 香蕉
    `,
    expect: { identical: true },
  },
  {
    name: 'ordered-renumber',
    capability: 'list.syntax',
    description: '有序列表编号写法从 1. 2. 3. 改为 1. 1. 1.，渲染一致',
    old: md`
      1. 第一步
      2. 第二步
      3. 第三步
    `,
    new: md`
      1. 第一步
      1. 第二步
      1. 第三步
    `,
    expect: { identical: true },
  },
  {
    name: 'ordered-insert-renumber',
    capability: 'list.item',
    description: '有序列表中间插入一步，后续编号随之变化，只有新增那一项是变更',
    old: md`
      1. 预热烤箱
      2. 搅拌面糊
      3. 放入烘烤
    `,
    new: md`
      1. 预热烤箱
      2. 准备模具
      3. 搅拌面糊
      4. 放入烘烤
    `,
    expect: { ins: ['准备模具'], kept: ['预热烤箱', '搅拌面糊', '放入烘烤'], maxHunks: 1 },
  },
  {
    name: 'ordered-to-unordered',
    capability: 'list.type',
    description: '有序列表改成无序列表，文字不变：变化必须可见',
    old: md`
      1. 苹果
      2. 香蕉
    `,
    new: md`
      - 苹果
      - 香蕉
    `,
    expect: { del: ['苹果香蕉'], ins: ['苹果香蕉'] },
    knownIssue: '列表 ordered 变化被静默丢弃：输出为新类型的 list 且标为 diffUnchanged（oldCorrect=false）',
  },
  {
    name: 'identical-items',
    capability: 'list.ambiguous',
    description: '多个完全相同的列表项，删掉其中一个：变更量应为一项',
    old: md`
      - 待定
      - 待定
      - 待定
      - 已确认
    `,
    new: md`
      - 待定
      - 待定
      - 已确认
    `,
    expect: { del: ['待定'], kept: ['已确认'], notIns: ['待定'], maxChangedTokens: 2, maxHunks: 1 },
  },

  // ───────────────────────── table ─────────────────────────
  {
    name: 'cell-edit',
    capability: 'table.cell',
    description: '修改表格中一个单元格的数字',
    old: md`
      | 饮品 | 杯数 | 单价 |
      | --- | ---: | ---: |
      | 杨枝甘露 | 823 | 18 |
      | 生椰拿铁 | 912 | 15 |
      | 多肉葡萄 | 534 | 19 |
    `,
    new: md`
      | 饮品 | 杯数 | 单价 |
      | --- | ---: | ---: |
      | 杨枝甘露 | 823 | 18 |
      | 生椰拿铁 | 958 | 15 |
      | 多肉葡萄 | 534 | 19 |
    `,
    expect: { del: ['912'], ins: ['958'], kept: ['生椰拿铁', '多肉葡萄'], maxChangedTokens: 2, maxHunks: 1 },
  },
  {
    name: 'cell-text-edit',
    capability: 'table.cell',
    description: '修改单元格里的中文文字',
    old: md`
      | 装备 | 负责人 | 备注 |
      | --- | --- | --- |
      | 卡式炉 | 阿伟 | 带两罐气罐 |
      | 帐篷 | 老张 | 记得还 |
    `,
    new: md`
      | 装备 | 负责人 | 备注 |
      | --- | --- | --- |
      | 卡式炉 | 阿伟 | 带三罐气罐 |
      | 帐篷 | 老张 | 记得还 |
    `,
    expect: { del: ['两'], ins: ['三'], kept: ['罐气罐', '卡式炉'], maxChangedTokens: 2, maxHunks: 1 },
  },
  {
    name: 'row-insert',
    capability: 'table.row',
    description: '表格中间插入一行',
    old: md`
      | 装备 | 数量 |
      | --- | --- |
      | 帐篷 | 1 |
      | 睡袋 | 3 |
    `,
    new: md`
      | 装备 | 数量 |
      | --- | --- |
      | 帐篷 | 1 |
      | 天幕 | 1 |
      | 睡袋 | 3 |
    `,
    expect: { ins: ['天幕1'], kept: ['帐篷', '睡袋'], notDel: ['帐篷', '睡袋'], maxChangedTokens: 3, maxHunks: 1 },
  },
  {
    name: 'row-delete',
    capability: 'table.row',
    description: '删除表格中间一行',
    old: md`
      | 装备 | 数量 |
      | --- | --- |
      | 帐篷 | 1 |
      | 保温箱 | 1 |
      | 睡袋 | 3 |
    `,
    new: md`
      | 装备 | 数量 |
      | --- | --- |
      | 帐篷 | 1 |
      | 睡袋 | 3 |
    `,
    expect: { del: ['保温箱'], kept: ['帐篷', '睡袋'], notIns: ['帐篷', '睡袋'], maxChangedTokens: 4, maxHunks: 1 },
  },
  {
    name: 'row-reorder',
    capability: 'table.row',
    description: '交换两行顺序',
    old: md`
      | 名次 | 选手 |
      | --- | --- |
      | A | 张三 |
      | B | 李四 |
      | C | 王五 |
    `,
    new: md`
      | 名次 | 选手 |
      | --- | --- |
      | B | 李四 |
      | A | 张三 |
      | C | 王五 |
    `,
    expect: { kept: ['C王五'], maxHunks: 2 },
  },
  {
    name: 'column-add',
    capability: 'table.column',
    description: '表格末尾新增一列',
    old: md`
      | 姓名 | 年龄 |
      | --- | --- |
      | 张三 | 25 |
      | 李四 | 30 |
    `,
    new: md`
      | 姓名 | 年龄 | 部门 |
      | --- | --- | --- |
      | 张三 | 25 | 研发 |
      | 李四 | 30 | 设计 |
    `,
    expect: { ins: ['部门', '研发', '设计'], kept: ['张三', '李四'], notDel: ['张三', '李四'] },
  },
  {
    name: 'alignment-change',
    capability: 'table.align',
    description: '只改列对齐方式：变化必须可见',
    old: md`
      | 项目 | 金额 |
      | --- | --- |
      | 收入 | 100 |
    `,
    new: md`
      | 项目 | 金额 |
      | :--- | ---: |
      | 收入 | 100 |
    `,
    expect: { kept: ['收入'] },
    knownIssue: '表格 align 变化被静默丢弃：输出为新对齐方式的 table 且无任何 diff 标记（oldCorrect=false）',
  },
  {
    name: 'cell-padding-only',
    capability: 'table.syntax',
    description: '只改单元格两侧的空格和分隔线长度，语义相同',
    old: md`
      |姓名|年龄|
      |---|---|
      |张三|25|
    `,
    new: md`
      | 姓名   | 年龄 |
      | ------ | ---- |
      | 张三   | 25   |
    `,
    expect: { identical: true },
  },

  // ───────────────────────── code ─────────────────────────
  {
    name: 'line-edit',
    capability: 'code.line',
    description: '代码块中修改一行，其余行应保持不变',
    old: md`
      \`\`\`javascript
      function calc(items) {
        const result = [];
        for (const item of items) {
          result.push(item * 2);
        }
        return result;
      }
      \`\`\`
    `,
    new: md`
      \`\`\`javascript
      function calc(items) {
        const result = [];
        for (const item of items) {
          result.push(item * 3);
        }
        return result;
      }
      \`\`\`
    `,
    expect: { del: ['result.push(item*2);'], ins: ['result.push(item*3);'], kept: ['functioncalc(items){', 'returnresult;'], maxChangedTokens: 2, maxHunks: 1 },
    knownIssue: '代码块签名只取 value 前 100 字符：改动落在前 100 字符内时新旧代码块无法配对，退化为整块替换（未生成 diffOldContent）',
  },
  {
    name: 'line-insert',
    capability: 'code.line',
    description: '代码块中间插入两行',
    old: md`
      \`\`\`python
      def calculate_sum(a, b):
          return a + b
      \`\`\`
    `,
    new: md`
      \`\`\`python
      def calculate_sum(a, b):
          if not isinstance(a, int):
              raise TypeError("a must be int")
          return a + b
      \`\`\`
    `,
    expect: { ins: ['ifnotisinstance(a,int):', 'raiseTypeError'], kept: ['defcalculate_sum(a,b):', 'returna+b'], notDel: ['return'], maxHunks: 1 },
    knownIssue: '代码块签名只取 value 前 100 字符：改动落在前 100 字符内时新旧代码块无法配对，退化为整块替换（未生成 diffOldContent）',
  },
  {
    name: 'first-line-change',
    capability: 'code.line',
    description: '只改代码块第一行，代码块仍应被匹配而不是整块替换',
    old: md`
      \`\`\`ts
      import { a } from './a';
      const x = a(1);
      const y = a(2);
      const z = a(3);
      export { x, y, z };
      \`\`\`
    `,
    new: md`
      \`\`\`ts
      import { a, b } from './a';
      const x = a(1);
      const y = a(2);
      const z = a(3);
      export { x, y, z };
      \`\`\`
    `,
    expect: { kept: ['constx=a(1);', 'export{x,y,z};'], maxChangedTokens: 2, maxHunks: 1 },
    knownIssue: '代码块签名只取 value 前 100 字符：改动落在前 100 字符内时新旧代码块无法配对，退化为整块替换（未生成 diffOldContent）',
  },
  {
    name: 'lang-change',
    capability: 'code.lang',
    description: '只改代码块语言标识：变化必须可见',
    old: md`
      \`\`\`ts
      const a = 1;
      \`\`\`
    `,
    new: md`
      \`\`\`js
      const a = 1;
      \`\`\`
    `,
    expect: { del: ['lang:ts'], ins: ['lang:js'] },
  },
  {
    name: 'indent-change',
    capability: 'code.whitespace',
    description: '代码缩进从 2 空格改为 4 空格：代码里的空白有语义，变化必须可见',
    old: '```yaml\nserver:\n  port: 80\n  host: localhost\n```\n',
    new: '```yaml\nserver:\n    port: 80\n    host: localhost\n```\n',
    expect: { kept: ['server:'], maxChangedTokens: 4 },
    knownIssue: '代码块签名只取 value 前 100 字符：改动落在前 100 字符内时新旧代码块无法配对，退化为整块替换（未生成 diffOldContent）',
  },
  {
    name: 'fence-style',
    capability: 'code.syntax',
    description: '代码围栏从 ``` 改为 ~~~，语义相同',
    old: '```bash\nnpm install\n```\n',
    new: '~~~bash\nnpm install\n~~~\n',
    expect: { identical: true },
  },
  {
    name: 'mermaid-edit',
    capability: 'code.mermaid',
    description: 'mermaid 代码块按约定整块替换，但新旧内容都必须完整出现',
    old: md`
      \`\`\`mermaid
      graph TD
        A --> B
      \`\`\`
    `,
    new: md`
      \`\`\`mermaid
      graph TD
        A --> C
      \`\`\`
    `,
    expect: { del: ['A-->B'], ins: ['A-->C'] },
  },

  // ───────────────────────── block ─────────────────────────
  {
    name: 'paragraph-insert',
    capability: 'block.insert',
    description: '两段之间插入新段落',
    old: md`
      第一段：流浪猫住在花坛旁边。

      第三段：入秋之后猫们开始扎堆取暖。
    `,
    new: md`
      第一段：流浪猫住在花坛旁边。

      第二段：领头的是一只橘白相间的大胖橘。

      第三段：入秋之后猫们开始扎堆取暖。
    `,
    expect: { ins: ['第二段：领头的是一只橘白相间的大胖橘'], kept: ['第一段', '第三段'], notDel: ['第一段', '第三段'], maxHunks: 1 },
  },
  {
    name: 'paragraph-delete',
    capability: 'block.delete',
    description: '删除中间一段',
    old: md`
      第一段：流浪猫住在花坛旁边。

      第二段：领头的是一只橘白相间的大胖橘。

      第三段：入秋之后猫们开始扎堆取暖。
    `,
    new: md`
      第一段：流浪猫住在花坛旁边。

      第三段：入秋之后猫们开始扎堆取暖。
    `,
    expect: { del: ['第二段：领头的是一只橘白相间的大胖橘'], kept: ['第一段', '第三段'], notIns: ['第一段', '第三段'], maxHunks: 1 },
  },
  {
    name: 'paragraph-move',
    capability: 'block.move',
    description: '把第一段移到最后，内容不变',
    old: md`
      Alpha paragraph talks about the beginning of the story.

      Beta paragraph describes the middle part in detail.

      Gamma paragraph wraps everything up nicely.
    `,
    new: md`
      Beta paragraph describes the middle part in detail.

      Gamma paragraph wraps everything up nicely.

      Alpha paragraph talks about the beginning of the story.
    `,
    expect: { kept: ['Betaparagraph', 'Gammaparagraph'], maxHunks: 2, minEfficiency: 0.9 },
  },
  {
    name: 'similar-paragraphs',
    capability: 'block.ambiguous',
    description: '两段结构几乎相同的段落，只改第二段的一个词，不应错配到第一段',
    old: md`
      ## 周三读书会

      每位参与者都有十分钟的个人分享时间，之后进入自由讨论环节。

      ## 周六观影会

      每位参与者都有十分钟的个人分享时间，之后进入自由讨论环节。
    `,
    new: md`
      ## 周三读书会

      每位参与者都有十分钟的个人分享时间，之后进入自由讨论环节。

      ## 周六观影会

      每位参与者都有十五分钟的个人分享时间，之后进入自由讨论环节。
    `,
    expect: { ins: ['五'], kept: ['周三读书会每位参与者都有十分钟'], notDel: ['十分钟'], maxChangedTokens: 1, maxHunks: 1 },
  },
  {
    name: 'repeated-paragraph-insert',
    capability: 'block.ambiguous',
    description: '在重复出现的样板段落之间插入一段，变更应只有插入的那一段',
    old: md`
      注意：本节内容仅供参考。

      第一节正文。

      注意：本节内容仅供参考。

      第二节正文。
    `,
    new: md`
      注意：本节内容仅供参考。

      第一节正文。

      注意：本节内容仅供参考。

      补充说明：第二节有更新。

      第二节正文。
    `,
    expect: { ins: ['补充说明：第二节有更新'], kept: ['第一节正文', '第二节正文'], notDel: ['注意'], maxHunks: 1 },
  },
  {
    name: 'blockquote-edit',
    capability: 'block.quote',
    description: '引用块内改一个词',
    old: md`
      > 雨总会停的，但你在雨天培养出的从容，会一直跟着你。
    `,
    new: md`
      > 雨总会停的，但你在雨天培养出的浪漫，会一直跟着你。
    `,
    expect: { del: ['从容'], ins: ['浪漫'], kept: ['雨总会停的'], maxChangedTokens: 4, maxHunks: 1 },
  },
  {
    name: 'wrap-in-blockquote',
    capability: 'block.quote',
    description: '把一段普通文字包进引用块：变化必须可见',
    old: md`
      上一段。

      这句话后来被改成了引用。
    `,
    new: md`
      上一段。

      > 这句话后来被改成了引用。
    `,
    expect: { kept: ['上一段'], del: ['这句话后来被改成了引用'], ins: ['这句话后来被改成了引用'] },
  },
  {
    name: 'thematic-break-insert',
    capability: 'block.insert',
    description: '两段之间插入分隔线',
    old: md`
      上半部分。

      下半部分。
    `,
    new: md`
      上半部分。

      ---

      下半部分。
    `,
    expect: { ins: ['---'], kept: ['上半部分', '下半部分'], maxChangedTokens: 1 },
  },
  {
    name: 'html-block-edit',
    capability: 'block.html',
    description: 'HTML 块中修改一行',
    old: md`
      <div class="note">
        <p>旧的提示内容</p>
      </div>
    `,
    new: md`
      <div class="note">
        <p>新的提示内容</p>
      </div>
    `,
    expect: { kept: ['<divclass="note">'], maxChangedTokens: 2 },
    knownIssue: 'html 节点为叶子，内容有改动时整块替换，不做行级 diff',
  },
  {
    name: 'html-comment-add',
    capability: 'block.html',
    description: '段落前新增一条 HTML 注释，正文不变',
    old: md`
      可见段落。
    `,
    new: md`
      <!-- 备注：这段需要复核 -->

      可见段落。
    `,
    expect: { ins: ['<!--备注：这段需要复核-->'], kept: ['可见段落'], maxHunks: 1 },
  },
  {
    name: 'html-comment-edit',
    capability: 'block.html',
    description: '只改 HTML 注释内容',
    old: md`
      <!-- old note -->

      可见段落。
    `,
    new: md`
      <!-- new note -->

      可见段落。
    `,
    expect: { del: ['oldnote'], ins: ['newnote'], kept: ['可见段落'], maxHunks: 1 },
  },
  {
    name: 'nested-quote-list-edit',
    capability: 'block.nested',
    description: '引用块里的列表中改一项',
    old: md`
      > 引用中的列表：
      >
      > - 第一项
      > - 第二项
      > - 第三项
    `,
    new: md`
      > 引用中的列表：
      >
      > - 第一项
      > - 第二项（已更新）
      > - 第三项
    `,
    expect: { ins: ['（已更新）'], kept: ['引用中的列表', '第一项', '第三项'], maxChangedTokens: 5, maxHunks: 1 },
  },
  {
    name: 'code-in-list-edit',
    capability: 'block.nested',
    description: '列表项里的代码块修改一行',
    old: md`
      - 安装依赖：
        \`\`\`bash
        npm install
        npm run build
        \`\`\`
      - 启动服务
    `,
    new: md`
      - 安装依赖：
        \`\`\`bash
        npm ci
        npm run build
        \`\`\`
      - 启动服务
    `,
    expect: { del: ['npminstall'], ins: ['npmci'], kept: ['安装依赖', 'npmrunbuild', '启动服务'], maxChangedTokens: 2, maxHunks: 1 },
    knownIssue: '代码块签名只取 value 前 100 字符：改动落在前 100 字符内时新旧代码块无法配对，退化为整块替换（未生成 diffOldContent）',
  },

  // ───────────────────────── reference ─────────────────────────
  {
    name: 'definition-url-change',
    capability: 'reference.definition',
    description: '只改链接引用定义的 url 和 title：变化必须可见',
    old: md`
      这是一个[参考链接][1]。

      [1]: https://example.com/ref "参考"
    `,
    new: md`
      这是一个[参考链接][1]。

      [1]: https://example.org/ref "更新的参考"
    `,
    expect: { kept: ['这是一个参考链接'], maxChangedTokens: 2 },
    knownIssue: 'definition 的 url/title 变化被静默丢弃：输出为新定义且标为 diffUnchanged（oldCorrect=false）',
  },
  {
    name: 'collapsed-ref-url-change',
    capability: 'reference.definition',
    description: '折叠式引用 [文字][] 的定义 url 变化：变化必须可见',
    old: md`
      这是一个[示例链接][]。

      [示例链接]: https://example.com/old
    `,
    new: md`
      这是一个[示例链接][]。

      [示例链接]: https://example.com/new
    `,
    expect: { kept: ['示例链接'], maxChangedTokens: 2 },
    knownIssue: '折叠式引用 [文字][] 的 definition url 变化被静默丢弃：节点标为 diffUnchanged（oldCorrect=false），与 full 式引用（已有 definition-url-change 覆盖）同根',
  },
  {
    name: 'shortcut-ref-url-change',
    capability: 'reference.definition',
    description: '简写式引用 [文字] 的定义 url 变化：变化必须可见',
    old: md`
      见 [示例链接] 了解更多。

      [示例链接]: https://example.com/old
    `,
    new: md`
      见 [示例链接] 了解更多。

      [示例链接]: https://example.com/new
    `,
    expect: { kept: ['示例链接'], maxChangedTokens: 2 },
    knownIssue: '简写式引用 [文字] 的 definition url 变化被静默丢弃（oldCorrect=false）',
  },
  {
    name: 'footnote-add',
    capability: 'reference.footnote',
    description: '新增一个脚注引用和定义',
    old: md`
      这里有一个脚注[^1]。

      [^1]: 这是脚注内容。
    `,
    new: md`
      这里有一个脚注[^1]和一个新脚注[^2]。

      [^1]: 这是脚注内容。

      [^2]: 这是新增的脚注。
    `,
    expect: { ins: ['和一个新脚注', '这是新增的脚注'], kept: ['这是脚注内容'] },
  },
  {
    name: 'reference-id-rename',
    capability: 'reference.refid',
    description: '只改引用式链接的标识（和对应定义的标识），正文文字不变',
    old: md`
      这是一个[参考链接][ref]。

      [ref]: https://example.com/ref
    `,
    new: md`
      这是一个[参考链接][ref2]。

      [ref2]: https://example.com/ref
    `,
    expect: { kept: ['参考链接'], maxChangedTokens: 6 },
    knownIssue: '引用标识变化只标出了 linkReference，definition 节点匹配后不比较 identifier，旧定义内容丢失（oldCorrect=false）',
  },
  {
    name: 'footnote-id-rename',
    capability: 'reference.footnote',
    description: '只改脚注标识，正文文字和脚注内容不变',
    old: md`
      正文引用了脚注[^note]。

      [^note]: 脚注说明。
    `,
    new: md`
      正文引用了脚注[^note2]。

      [^note2]: 脚注说明。
    `,
    expect: { kept: ['正文引用了脚注', '脚注说明'], maxChangedTokens: 6 },
    knownIssue: '脚注重编号时引用处标出了，但 footnoteDefinition 按 identifier 匹配不上，旧脚注定义内容丢失（oldCorrect=false）',
  },
  {
    name: 'footnote-content-edit',
    capability: 'reference.footnote',
    description: '只改脚注定义的内容',
    old: md`
      正文引用了脚注[^note]。

      [^note]: 脚注的原始说明。
    `,
    new: md`
      正文引用了脚注[^note]。

      [^note]: 脚注的最新说明。
    `,
    expect: { del: ['原始'], ins: ['最新'], kept: ['正文引用了脚注'], maxChangedTokens: 4, maxHunks: 1 },
  },
];

function main(): void {
  const root = path.join(__dirname, 'golden');
  const names = new Set<string>();
  for (const c of CASES) {
    const id = `${c.capability.split('.')[0]}/${c.name}`;
    if (names.has(id)) {
      throw new Error(`duplicate golden case ${id}`);
    }
    names.add(id);
  }

  fs.rmSync(root, { recursive: true, force: true });
  for (const c of CASES) {
    const dir = path.join(root, c.capability.split('.')[0], c.name);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'old.md'), c.old);
    fs.writeFileSync(path.join(dir, 'new.md'), c.new);
    const spec: CaseSpec = {
      description: c.description,
      capability: c.capability,
      ...(c.tags ? { tags: c.tags } : {}),
      ...(c.expect ? { expect: c.expect } : {}),
      ...(c.knownIssue ? { knownIssue: c.knownIssue } : {}),
      ...(c.perfBudgetMs ? { perfBudgetMs: c.perfBudgetMs } : {}),
    };
    fs.writeFileSync(path.join(dir, 'case.json'), `${JSON.stringify(spec, null, 2)}\n`);
  }
  console.log(`Generated ${CASES.length} golden cases in ${path.relative(process.cwd(), root)}`);
}

main();
