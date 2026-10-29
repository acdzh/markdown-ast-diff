# Markdown AST Diff

[![Build and Deploy](https://github.com/acdzh/markdown-ast-diff/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/acdzh/markdown-ast-diff/actions/workflows/build-and-deploy.yml)

基于 AST 的 Markdown 差异比较库。将两份 Markdown 文档解析为抽象语法树，通过 [BULD 算法](https://kristaps.bsd.lv/lowdown/diff.html) 精准识别新增、删除和修改的节点，产出一棵带有完整 diff 信息的 AST。

[在线预览](https://acdzh.github.io/markdown-ast-diff/) · [详细文档](./docs/usage.md)

## 安装

```bash
npm install markdown-ast-diff
```

## 快速开始

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
```

结果 AST 中，每个节点通过 `data` 字段携带差异信息：

```javascript
// 新增节点
{ type: 'text', value: '新内容', data: { diff: 'ins' } }

// 删除节点
{ type: 'text', value: '旧内容', data: { diff: 'del' } }

// 未变节点
{ type: 'heading', data: { diffUnchanged: true }, children: [...] }

// 代码块内容变化（旧内容在 diffOldContent，新内容在 value）
{ type: 'code', value: '新代码', data: { diffOldContent: '旧代码' } }
```

也可以作为 unified/remark 插件使用：

```typescript
import { remarkMarkdownDiff, REMARK_DIFF_SEPARATOR } from 'markdown-ast-diff';

const markdown = `旧内容\n\n${REMARK_DIFF_SEPARATOR}\n\n新内容`;

const result = unified()
  .use(remarkParse)
  .use(remarkMarkdownDiff, { enableDiffNode: true })
  .runSync(unified().use(remarkParse).parse(markdown), { value: markdown });
```

## 配置项

```typescript
diffMarkdownAst(oldAst, newAst, {
  enableDiffNode: true,       // 将 data.diff 属性转为 ins/del 包裹节点
  contextLines: 3,            // 折叠未变区域，保留变更周围 3 行上下文
  changedLineRanges: {        // 外部提供的行级变更范围（如来自 git diff）
    from: [[10, 15]],         // 旧文档变更行
    to: [[10, 18]],           // 新文档变更行
  },
});
```

## 开发

```bash
npm run dev          # 浏览器交互预览
npm test             # 运行测试
npm run evaluate     # 运行评测（golden + scenario + corpus）
npm run build        # 构建（CJS + ESM + .d.ts）
```

完整的 API 参考、算法流程、评测系统、开发指南见 [docs/usage.md](./docs/usage.md)。

## 许可证

MIT
