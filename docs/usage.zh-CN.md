# markdown-ast-diff 使用文档

[English](./usage.md) | 简体中文

基于 AST 的 Markdown 差异比较库。将两份 Markdown 文档分别解析为抽象语法树，通过 BULD 算法精准识别新增、删除和修改的节点，在 AST 中嵌入差异标注，最终产出一棵带有完整 diff 信息的 AST。

## 安装

```bash
npm install markdown-ast-diff
```

核心库零外部 parser 依赖——解析 Markdown 由调用方自行完成（推荐 unified + remark-parse + remark-gfm + remark-frontmatter），库只负责接收两棵 mdast AST 并返回 diff 结果。

## 快速开始

### 方式一：直接调用 diffMarkdownAst

```typescript
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import { diffMarkdownAst } from 'markdown-ast-diff';
import type { Root } from 'mdast';

function parse(md: string): Root {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkFrontmatter)
    .parse(md) as Root;
}

const oldAst = parse('# 标题\n\n旧内容');
const newAst = parse('# 标题\n\n新内容');

const diffAst = diffMarkdownAst(oldAst, newAst);
// diffAst 是一棵 mdast Root，节点上带有 data.diff / data.diffUnchanged 等标注
```

### 方式二：unified 插件 remarkMarkdownDiff

将两个文档用分隔符拼接成一个字符串，交给 unified 管道处理：

```typescript
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { remarkMarkdownDiff, REMARK_DIFF_SEPARATOR } from 'markdown-ast-diff';

const markdown = `
# 旧标题

旧内容

${REMARK_DIFF_SEPARATOR}

# 新标题

新内容
`;

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMarkdownDiff, { enableDiffNode: true });

const result = processor.runSync(processor.parse(markdown));
```

`REMARK_DIFF_SEPARATOR` 是魔法字符串 `{{remark_mark_down_diff_separator}}`，插件在 AST 中找到包含此字符串的段落节点，以它为分界线将 children 拆成旧文档和新文档。

## API 参考

### diffMarkdownAst

```typescript
function diffMarkdownAst(nOld?: Root, nNew?: Root, options?: Options): Root
```

核心 diff 函数。

**参数：**

| 参数 | 类型 | 说明 |
|------|------|------|
| `nOld` | `Root \| undefined` | 旧文档的 mdast Root 节点。为空时所有新节点标为 ins |
| `nNew` | `Root \| undefined` | 新文档的 mdast Root 节点。为空时所有旧节点标为 del |
| `options` | `Options` | 可选配置 |

**返回值：** 带差异标注的 mdast `Root` 节点。

**边界情况：**

- 两侧均为空 → 返回 `{ type: 'root', children: [] }`
- 仅有 nNew → 所有顶层 children 标为 `data.diff = 'ins'`
- 仅有 nOld → 所有顶层 children 标为 `data.diff = 'del'`

### Options

```typescript
interface Options {
  enableDiffNode?: boolean;
  contextLines?: number | false;
  changedLineRanges?: {
    from: [number, number][];
    to: [number, number][];
  };
}
```

| 字段 | 默认值 | 说明 |
|------|--------|------|
| `enableDiffNode` | `false` | 为 `true` 时自动调用 `transformAstWithDiffDataToAstWithDiffNode`，将 `data.diff` 属性标注转换为 ins/del 包裹节点 |
| `contextLines` | `false` | 上下文折叠。`false` 不折叠；数字 N 表示保留变更周围 N 行上下文，其余折叠为 `collapse` 节点 |
| `changedLineRanges` | `undefined` | 外部提供的行级变更范围（如来自 git diff），用于窗口化 diff——只对变更区域执行精确 diff，未变区域直接标为 unchanged。`from` 是旧文档的变更行范围，`to` 是新文档的变更行范围，每个范围是 `[startLine, endLine]` 的数组 |

### transformAstWithDiffDataToAstWithDiffNode

```typescript
function transformAstWithDiffDataToAstWithDiffNode(ast: Node): Node
```

将 `data.diff` 属性表示法转换为包裹节点表示法：

- 块级节点（paragraph、heading、list 等）→ 外层包裹 `ins` 或 `del` 节点
- 行内节点（text、strong、emphasis 等）→ 外层包裹 `inlineIns` 或 `inlineDel` 节点
- `listItem` 例外——不包裹，diff 信息始终保留在 `data.diff` 上

**使用场景：** 当渲染端需要用节点类型而非 data 属性来区分 diff 标注时。

### transformAstWithDiffNodeToAstWithDiffData

```typescript
function transformAstWithDiffNodeToAstWithDiffData(ast: Node): Node
```

上述函数的反向操作：将 ins/del/inlineIns/inlineDel 包裹节点还原为 `data.diff` 属性。

## diff 结果的数据结构

diff 后的 AST 节点通过 `node.data` 上的字段携带差异信息：

### data.diff

```typescript
type: 'ins' | 'del'
```

标记节点是新增（`ins`）还是删除（`del`）。这是 diff 结果的核心标注。

**传播规则：** 当一个容器节点（如 paragraph、list）被标为 `ins` 或 `del` 时，其所有后代节点都隶属于该变更——不需要逐个子节点检查 `data.diff`。

### data.diffUnchanged

```typescript
type: boolean
```

当匹配的节点对内容完全相同（没有任何子节点变化）时标为 `true`。用于：
- 上下文折叠判断哪些是"变更中心"
- 渲染端按需折叠或灰显未变化区域

### data.diffOldContent

```typescript
type: string
```

仅 Code 节点使用。当两个代码块被匹配但内容不同时：
- `node.value` 保持新版本代码
- `data.diffOldContent` 存放旧版本代码（URL 编码前的原始文本）

渲染端应自行对 `data.diffOldContent` 和 `node.value` 做行级 diff 展示。

**例外：** Mermaid 代码块（`lang === 'mermaid'`）不使用此机制，直接走整块 del+ins——因为 Mermaid 图的渲染强依赖整体源码，局部 diff 没有可读性。

### data.diffProperties

```typescript
type: Record<string, { old: unknown; new: unknown }>
```

当匹配节点对的属性发生变化时记录变更前后的值。目前覆盖：

| 节点类型 | 属性 | 含义 |
|---------|------|------|
| `list` | `ordered` | 有序列表 ↔ 无序列表 |
| `listItem` | `checked` | 任务列表的勾选状态变化 |

示例：

```json
{
  "diffProperties": {
    "checked": { "old": false, "new": true }
  }
}
```

### collapse 节点

当 `contextLines` 配置启用时，未变化且远离变更中心的区域会被折叠为 `collapse` 节点：

```typescript
{
  type: 'collapse',
  data: { hName: 'collapse' },
  children: [/* 被折叠的原始节点 */]
}
```

渲染端可将 `collapse` 节点渲染为可展开/折叠的占位符。

## 算法流程

```
diffMarkdownAst(nOld, nNew, options)
  │
  ├── changedLineRanges 存在？
  │     ├── YES → 窗口化 diff（只处理变更区域，其余标 unchanged）
  │     └── NO  → 全文 diff
  │
  ├── 全文 diff：
  │     ├── 章节分区（标题数 ≥ 3 时按 heading 切分，各章节独立 diff）
  │     └── 单区 diff（BULD 算法）：
  │           1. 签名计算 — 每个节点基于类型+属性+子树内容计算 SHA1 签名
  │           2. 优先队列匹配 — 按权重（节点大小的对数）从大到小出队
  │              签名相同 → candidate 匹配 → matchDown（子树传播）+ matchUp（祖先传播）
  │           3. 相似度二次匹配 — 处理签名不同但文本高度相似的节点对
  │           4. code block 专用匹配 — 同语言的未匹配代码块按文本相似度配对
  │           5. 优化 — 自顶向下 + 自底向上调整匹配质量
  │           6. 合并 — 遍历匹配对生成 diff AST
  │              ├── 匹配节点 → 递归子节点或 inline diff
  │              ├── 未匹配旧节点 → 标为 del
  │              └── 未匹配新节点 → 标为 ins
  │
  └── 上下文折叠（contextLines 启用时）
```

### 行内 diff

当匹配的两个容器节点（如 paragraph）的 children 全部是行内节点（text、emphasis、strong、inlineCode、link、image 等）时，触发行内语义 diff：

1. 将富文本节点（emphasis、link 等）抽象为占位符 token
2. 纯文本按词级分词（CJK 按字，英文按单词+标点）
3. 共享前后缀裁剪
4. 中间段用 diff-match-patch 做 token 级比较 + 语义清理
5. 碎片检测：当 diff 结果过碎时回退为整块替换
6. 长段落优先按句切段，再在句段内部做 inline diff

### 章节分区

当文档包含 3 个以上 heading 时自动启用：

1. 按 heading 将文档切分为 section
2. 同名 section 贪心配对（保持顺序）
3. 相邻 gap 中只有一对未匹配 section 时补配（heading rename）
4. 配对的 section 各自独立执行 diff
5. 未配对的旧 section 标 del，未配对的新 section 标 ins

## 渲染 diff 结果

### 转 HTML

```typescript
import { toHast } from 'mdast-util-to-hast';
import { toHtml } from 'hast-util-to-html';

const diffAst = diffMarkdownAst(oldAst, newAst);
const hast = toHast(diffAst, { allowDangerousHtml: true });
const html = toHtml(hast, { allowDangerousHtml: true });
```

渲染端需要自行处理：
- `data.diff === 'ins'` → 绿色背景 / `<ins>` 标签
- `data.diff === 'del'` → 红色背景 / `<del>` 标签
- `data.diffOldContent` → 代码块内行级 diff（如用 Shiki diff 渲染）
- `data.diffProperties` → 属性变化提示
- `collapse` 节点 → 可展开/折叠的占位符

### 转 Markdown

```typescript
import { unified } from 'unified';
import remarkStringify from 'remark-stringify';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';

const processor = unified()
  .use(remarkGfm)
  .use(remarkFrontmatter)
  .use(remarkStringify);

const md = processor.stringify(diffAst);
```

注意：标准 remark-stringify 不认识 ins/del/inlineIns/inlineDel/collapse 等自定义节点类型，需要注册自定义 handler 或使用 `data.diff` 属性模式（不开启 `enableDiffNode`）。

### React 渲染

参考 `test/browser/App.tsx` 中的实现——使用 `mdast-util-to-hast` + 自定义 hast-to-react 渲染器，根据 `data.diff` 属性选择性添加 CSS 类名。

## 开发指南

### 环境要求

- Node.js >= 18
- npm 或 pnpm

### 命令速查

```bash
# 开发
npm run dev          # 启动浏览器交互预览（Vite，端口 3000）
npm run build        # 构建库（CJS + ESM + .d.ts → dist/）

# 测试
npm test             # 运行所有测试用例
npm run evaluate     # 运行评测（golden + scenario + corpus）
npm run evaluate -- --verbose              # 详细模式
npm run evaluate -- --case golden/table    # 过滤用例
npm run evaluate -- --check                # CI 门禁模式
npm run evaluate:stress                    # 包含压力用例

# 评测存档与对比
npm run evaluate -- --save before          # 存档当前结果
npm run evaluate -- --save after
npm run evaluate -- --compare before after # 对比两份存档

# 查看单个用例的 diff token 流
npm run evaluate:inspect -- golden/inline/word-replace-en
npm run evaluate:inspect -- scenario/links --reference

# 用例管理
npm run golden:gen    # 重新生成 golden 用例
npm run scenario:gen  # 重新生成 scenario 用例元数据

# 语料采集
npm run collect:git -- --repo /path/to/repo --name vue-docs

# 代码质量
npm run lint         # ESLint 检查
npm run lint:fix     # ESLint 自动修复
```

### 添加测试用例

在 `test/testcases/` 下创建目录，放入 `old.md`、`new.md`、`case.json`：

```
test/testcases/golden/inline/my-new-case/
  old.md        # 旧文档
  new.md        # 新文档
  case.json     # 元数据和断言
```

`case.json` 格式：

```json
{
  "description": "一句话描述变化",
  "capability": "inline.text",
  "expect": {
    "ins": ["新增的文本"],
    "del": ["删除的文本"],
    "kept": ["不应变化的文本"],
    "notDel": ["不应被删除的文本"],
    "notIns": ["不应被新增的文本"],
    "maxChangedTokens": 5,
    "maxHunks": 2,
    "minEfficiency": 0.8,
    "identical": false
  }
}
```

断言字段全部可选。如果是已知问题，加 `"knownIssue": "问题描述"` 字段，该用例断言失败时标为 XFAIL 而非 FAIL。

用例按层级组织：

| 层级 | 目录 | 用途 |
|------|------|------|
| golden | `golden/<类别>/<名称>/` | 原子用例，每个测一个能力点 |
| scenario | `scenario/<名称>/` | 综合场景，贴近真实文档 |
| corpus | `corpus/<仓库>/<sha-slug>/` | 从真实 git 仓库采集 |
| mr-samples | `mr-samples/<名称>/` | 来自实际 MR 的对比样本 |

### 评测指标

| 指标 | 公式 | 含义 |
|------|------|------|
| correctness | `newCorrect && oldCorrect` | 去掉 del 等于新文档 + 去掉 ins 等于旧文档 |
| efficiency | `min(1, refChanged / algoChanged)` | 算法标注的变更量 vs 参考 diff（越接近 1 越好） |
| cohesion | `min(1, refHunks / algoHunks)` | 变更片段数（越少越好）。efficiency≥1 时取 sqrt 减弱惩罚 |
| score | `correct × (0.6 × efficiency + 0.4 × cohesion)` | 综合分 |

XFAIL 的 case 在平均分计算时按 0 分计入。

### 浏览器预览

```bash
npm run dev
```

打开 http://localhost:3000，左侧编辑 Old/New Markdown，右侧实时查看：

- **HTML Preview** — diff 渲染效果（表格、代码块带语法高亮）
- **AST Markdown** — diff AST 序列化为带标记的 Markdown
- **Text Diff** — 纯文本级 diffWords 对比
- **AST JSON** — 完整的 diff AST JSON 结构

顶部下拉框可切换测试用例。新增 `test/testcases/<name>/old.md` + `new.md` 后会自动出现在列表中。

在线版本：https://acdzh.github.io/markdown-ast-diff/

### 构建与发布

```bash
npm run build
```

产物输出到 `dist/`：

| 文件 | 格式 | 用途 |
|------|------|------|
| `dist/index.js` | CommonJS | Node.js require() |
| `dist/index.mjs` | ESM | import 语法 |
| `dist/index.d.ts` | TypeScript 声明 | CJS 类型 |
| `dist/index.d.mts` | TypeScript 声明 | ESM 类型 |

生产构建会自动剥离所有 `assert()` 调用。

## 已知限制

| 场景 | 表现 | 原因 |
|------|------|------|
| HTML block 内部编辑 | 整块 del+ins | HTML block 在 AST 中是 opaque 叶子节点 |
| YAML frontmatter 新增字段 | 整块 del+ins | yaml 节点是 opaque，不做内部 diff |
| inlineCode value 变化 | 整块 del+ins | inlineCode 是叶子节点 |
| link 仅 URL/title 变化 | 整块 del+ins | link 属性变化无法递归到子文本 |
| 给文字套 HTML 标签 | 文本重复标为 ins+del | 节点边界变化导致文本拆分 |
| listItem 获得子级列表 | 整块 del+ins | 结构变化导致无法递归匹配 |
| 表格 align 变化（列数不变） | 整块 del+ins | align 是表格属性非子节点内容 |
| section 移动 | del+ins 重复 | 无 move 语义，重排 = 全删+全增 |
| 表格内嵌套 HTML | 可能丢失旧内容 | 深层嵌套匹配的已知 bug |
