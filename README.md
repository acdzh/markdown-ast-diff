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

# 运行测试
pnpm test

# 启动浏览器测试环境
pnpm dev

# 构建
pnpm build

# 构建预览版本
pnpm build:preview
```

## 在线预览

测试用例和结果可以在分支 [output-preview](https://github.com/acdzh/markdown-ast-diff/tree/output-preview) 查看。

也可以通过 GitHub Pages 访问在线预览版本：

https://acdzh.github.io/markdown-ast-diff/


## 许可证

MIT