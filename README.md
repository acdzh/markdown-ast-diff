# Markdown AST Diff

[![Build and Deploy](https://github.com/acdzh/markdown-ast-diff/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/acdzh/markdown-ast-diff/actions/workflows/build-and-deploy.yml)

一个基于AST的Markdown差异比较工具，能够精确识别两个Markdown文档之间的差异，并生成可视化的差异结果。

使用 BULD 算法进行 diff，原理来自 [lowdown](https://kristaps.bsd.lv/lowdown/diff.html);

## 特性

- 基于AST（抽象语法树）进行Markdown文档比较
- 支持多种Markdown元素的差异比较：
  - 标题、段落、引用块
  - 列表（有序和无序）
  - 代码块和内联代码
  - 表格
  - 行内格式（粗体、斜体、删除线等）
- 细粒度的文本差异处理，精确标记行内格式变化
- 提供差异信息的JSON格式AST
- 生成可视化的Markdown差异结果
- 支持作为Remark插件使用

## 安装

```bash
npm install markdown-ast-diff
# 或
yarn add markdown-ast-diff
# 或
pnpm add markdown-ast-diff
```

## 使用方法

### 作为模块使用

```javascript
import { diffMarkdownAst } from 'markdown-ast-diff';

// 假设你已经有了两个Markdown AST对象
const oldAst = /* ... */;
const newAst = /* ... */;

// 生成差异AST
const diffAst = diffMarkdownAst(oldAst, newAst);

// 现在你可以使用diffAst来渲染差异结果
```

### 作为Remark插件使用

```javascript
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { remarkMarkdownDiff, REMARK_DIFF_SEPARATOR } from 'markdown-ast-diff';

// 创建包含旧内容和新内容的Markdown字符串，使用分隔符分隔
const markdown = `
# 旧文档标题

这是旧内容。

${REMARK_DIFF_SEPARATOR}

# 新文档标题

这是新内容。
`;

// 使用remarkMarkdownDiff插件处理
const processor = unified()
  .use(remarkParse)
  .use(remarkMarkdownDiff, { enableDiffNode: true }) // 启用差异节点
  .use(remarkStringify);

// 处理Markdown并获取结果
const result = processor.processSync(markdown);
console.log(result.toString());
```

## AST 结构

差异AST使用了扩展的unist节点结构，主要通过以下两种方式表示差异：

### 1. 使用data.diff属性

节点通过`data.diff`属性标记差异类型：

```javascript
{
  "type": "text",
  "value": "示例内容",
  "data": {
    "diff": "ins" // 或 "del"
  }
}
```

### 2. 使用特殊节点类型

差异也可以通过特殊的节点类型表示：

```javascript
{
  "type": "ins", // 或 "del"
  "children": [
    {
      "type": "text",
      "value": "示例内容"
    }
  ]
}
```

需要注意的是，两种格式下，listItem 都不会被 ins / del 节点包裹，diff 信息永远在 data.diff 上。

## 开发

```bash
# 安装依赖
pnpm install

# 运行测试（输出 AST JSON / diff HTML 到 test/node/output/）
pnpm test

# 启动浏览器测试环境
pnpm dev

# 运行评测（golden / scenario / corpus 用例：双向还原检查 + 质量评分）
pnpm run evaluate

# 压力用例（2k/8k 行文档、30k 字符段落、300 个重复段落）
pnpm run evaluate:stress

# 查看单个用例的 diff 流和参考 diff
pnpm run evaluate:inspect -- golden/table/cell-edit --reference

# 从真实 git 仓库采集 Markdown 修改作为语料
npx tsx test/collect-from-git.ts --repo /path/to/repo --limit 50

# 存 baseline 并对比
pnpm run evaluate -- --save before
pnpm run evaluate -- --save after
pnpm run evaluate -- --compare before after

# 构建
pnpm build

# 构建预览版本
pnpm build:preview
```

## 评测系统

评测分三层：

- **golden**：一个用例只测一个能力点的最小用例（94 个），带显式断言，是主要门禁；
- **scenario**：22 个贴近真实文档的综合修改，看大改动下的整体表现；
- **corpus / stress**：从真实仓库采集的修改（当前为 Vue 官方文档 30 例，已随仓库入库，clone 即可跑），以及程序化生成的压力用例。

指标基于“继承容器 diff 状态”的 token 流：

| 列 | 含义 |
|---|---|
| Corr | 双向还原：✓ 新/旧内容都完整且顺序一致；✓~ 内容完整但删除位置不同；✗o 旧内容丢失；✗n 新内容有问题 |
| Eff | 精简度 = 参考 diff 变更量 / 算法标注变更量；整块替换、错配会拉低 |
| Coh | 聚合度 = 参考 diff 片段数 / 算法片段数；结果越碎越低 |
| Chg% | 被标注为变更的 token 占比 |
| Hunk(ref) | 算法变更片段数，括号内为参考值 |
| PerfMs | diff 耗时中位数，P95 在汇总行 |
| Score | correct × (0.6×Eff + 0.4×Coh) |

用例状态：**PASS** 断言全过；**FAIL** 有断言失败；**XFAIL** 命中已记录的 knownIssue；
**XPASS** 已知问题不再复现（应删掉 knownIssue）。CI 用 `pnpm run evaluate -- --check` 做门禁，
出现 FAIL / XPASS / 未记录的正确性失败时退出码为 1。指标原理、断言写法和已知问题清单见
docs/evaluate-spec.md。

## 在线预览

测试用例和结果可以在分支 [output-preview](https://github.com/acdzh/markdown-ast-diff/tree/output-preview) 查看。

也可以通过 GitHub Pages 访问在线预览版本：

https://acdzh.github.io/markdown-ast-diff/


## 许可证

MIT