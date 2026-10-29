# Markdown AST Diff

[![Build and Deploy](https://github.com/acdzh/markdown-ast-diff/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/acdzh/markdown-ast-diff/actions/workflows/build-and-deploy.yml)

English | [简体中文](./README.zh-CN.md)

An AST-based Markdown diff library. It parses two Markdown documents into abstract syntax trees, uses the [BULD algorithm](https://kristaps.bsd.lv/lowdown/diff.html) to precisely identify inserted, deleted and modified nodes, and produces an AST annotated with complete diff information.

[Live Demo](https://acdzh.github.io/markdown-ast-diff/) · [Documentation](./docs/usage.md)

## Installation

```bash
npm install markdown-ast-diff
```

## Quick Start

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

const oldAst = parse('# Title\n\nOld content');
const newAst = parse('# Title\n\nNew content');

const diffAst = diffMarkdownAst(oldAst, newAst);
```

In the resulting AST, each node carries diff information in its `data` field:

```javascript
// Inserted node
{ type: 'text', value: 'New content', data: { diff: 'ins' } }

// Deleted node
{ type: 'text', value: 'Old content', data: { diff: 'del' } }

// Unchanged node
{ type: 'heading', data: { diffUnchanged: true }, children: [...] }

// Code block content changed (old content in diffOldContent, new content in value)
{ type: 'code', value: 'new code', data: { diffOldContent: 'old code' } }
```

It can also be used as a unified/remark plugin:

```typescript
import { remarkMarkdownDiff, REMARK_DIFF_SEPARATOR } from 'markdown-ast-diff';

const markdown = `Old content\n\n${REMARK_DIFF_SEPARATOR}\n\nNew content`;

const result = unified()
  .use(remarkParse)
  .use(remarkMarkdownDiff, { enableDiffNode: true })
  .runSync(unified().use(remarkParse).parse(markdown), { value: markdown });
```

## Options

```typescript
diffMarkdownAst(oldAst, newAst, {
  enableDiffNode: true,       // Convert data.diff attributes into ins/del wrapper nodes
  contextLines: 3,            // Collapse unchanged regions, keeping 3 lines of context around changes
  changedLineRanges: {        // Externally provided line-level change ranges (e.g. from git diff)
    from: [[10, 15]],         // Changed lines in the old document
    to: [[10, 18]],           // Changed lines in the new document
  },
});
```

## Development

```bash
npm run dev          # Interactive browser preview
npm test             # Run tests
npm run evaluate     # Run evaluation (golden + scenario + corpus)
npm run build        # Build (CJS + ESM + .d.ts)
```

See [docs/usage.md](./docs/usage.md) for the full API reference, algorithm overview, evaluation system and development guide.

## License

MIT
