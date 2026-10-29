# markdown-ast-diff Usage Guide

English | [简体中文](./usage.zh-CN.md)

An AST-based Markdown diff library. It parses two Markdown documents into abstract syntax trees, uses the BULD algorithm to precisely identify inserted, deleted and modified nodes, embeds diff annotations into the AST, and finally produces an AST carrying complete diff information.

## Installation

```bash
npm install markdown-ast-diff
```

The core library has no external parser dependency — parsing Markdown is up to the caller (unified + remark-parse + remark-gfm + remark-frontmatter is recommended). The library only takes two mdast ASTs and returns the diff result.

## Quick Start

### Option 1: Call diffMarkdownAst directly

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
// diffAst is an mdast Root whose nodes carry annotations such as data.diff / data.diffUnchanged
```

### Option 2: The unified plugin remarkMarkdownDiff

Join the two documents into one string with a separator and feed it to a unified pipeline:

```typescript
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { remarkMarkdownDiff, REMARK_DIFF_SEPARATOR } from 'markdown-ast-diff';

const markdown = `
# Old Title

Old content

${REMARK_DIFF_SEPARATOR}

# New Title

New content
`;

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMarkdownDiff, { enableDiffNode: true });

const result = processor.runSync(processor.parse(markdown));
```

`REMARK_DIFF_SEPARATOR` is the magic string `{{remark_mark_down_diff_separator}}`. The plugin finds the paragraph node containing this string in the AST and uses it as the boundary to split the children into the old document and the new document.

## API Reference

### diffMarkdownAst

```typescript
function diffMarkdownAst(nOld?: Root, nNew?: Root, options?: Options): Root
```

The core diff function.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `nOld` | `Root \| undefined` | mdast Root node of the old document. If empty, all new nodes are marked as ins |
| `nNew` | `Root \| undefined` | mdast Root node of the new document. If empty, all old nodes are marked as del |
| `options` | `Options` | Optional configuration |

**Returns:** An mdast `Root` node with diff annotations.

**Edge cases:**

- Both sides empty → returns `{ type: 'root', children: [] }`
- Only nNew → all top-level children are marked `data.diff = 'ins'`
- Only nOld → all top-level children are marked `data.diff = 'del'`

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

| Field | Default | Description |
|-------|---------|-------------|
| `enableDiffNode` | `false` | When `true`, automatically calls `transformAstWithDiffDataToAstWithDiffNode` to convert `data.diff` attribute annotations into ins/del wrapper nodes |
| `contextLines` | `false` | Context collapsing. `false` disables collapsing; a number N keeps N lines of context around changes and collapses the rest into `collapse` nodes |
| `changedLineRanges` | `undefined` | Externally provided line-level change ranges (e.g. from git diff) for windowed diff — precise diff runs only on changed regions, while unchanged regions are marked unchanged directly. `from` holds the changed line ranges of the old document and `to` those of the new document; each is an array of `[startLine, endLine]` |

### transformAstWithDiffDataToAstWithDiffNode

```typescript
function transformAstWithDiffDataToAstWithDiffNode(ast: Node): Node
```

Converts the `data.diff` attribute representation into the wrapper-node representation:

- Block nodes (paragraph, heading, list, etc.) → wrapped in an outer `ins` or `del` node
- Inline nodes (text, strong, emphasis, etc.) → wrapped in an outer `inlineIns` or `inlineDel` node
- `listItem` is the exception — it is not wrapped, and the diff information always stays on `data.diff`

**Use case:** when the renderer needs to distinguish diff annotations by node type rather than by data attributes.

### transformAstWithDiffNodeToAstWithDiffData

```typescript
function transformAstWithDiffNodeToAstWithDiffData(ast: Node): Node
```

The inverse of the function above: restores ins/del/inlineIns/inlineDel wrapper nodes back into `data.diff` attributes.

## Diff Result Data Structure

Nodes in the diffed AST carry diff information through fields on `node.data`:

### data.diff

```typescript
type: 'ins' | 'del'
```

Marks whether a node was inserted (`ins`) or deleted (`del`). This is the core annotation of the diff result.

**Propagation rule:** when a container node (e.g. paragraph, list) is marked `ins` or `del`, all of its descendants belong to that change — there is no need to check `data.diff` on each child.

### data.diffUnchanged

```typescript
type: boolean
```

Set to `true` when a matched node pair has identical content (no child changes at all). Used for:
- Determining "change centers" during context collapsing
- Letting the renderer collapse or dim unchanged regions as needed

### data.diffOldContent

```typescript
type: string
```

Used only by Code nodes. When two code blocks are matched but their contents differ:
- `node.value` keeps the new version of the code
- `data.diffOldContent` stores the old version of the code (the raw text before URL encoding)

The renderer should run its own line-level diff between `data.diffOldContent` and `node.value` for display.

**Exception:** Mermaid code blocks (`lang === 'mermaid'`) do not use this mechanism and go straight to a whole-block del+ins — rendering a Mermaid diagram depends heavily on the complete source, so a partial diff is not readable.

### data.diffProperties

```typescript
type: Record<string, { old: unknown; new: unknown }>
```

Records the before and after values when properties of a matched node pair change. Currently covers:

| Node type | Property | Meaning |
|-----------|----------|---------|
| `list` | `ordered` | Ordered list ↔ unordered list |
| `listItem` | `checked` | Checked state change of a task list item |

Example:

```json
{
  "diffProperties": {
    "checked": { "old": false, "new": true }
  }
}
```

### collapse node

When `contextLines` is enabled, regions that are unchanged and far from change centers are collapsed into `collapse` nodes:

```typescript
{
  type: 'collapse',
  data: { hName: 'collapse' },
  children: [/* original collapsed nodes */]
}
```

The renderer can render `collapse` nodes as expandable/collapsible placeholders.

## Algorithm

```
diffMarkdownAst(nOld, nNew, options)
  │
  ├── changedLineRanges provided?
  │     ├── YES → windowed diff (only process changed regions, mark the rest unchanged)
  │     └── NO  → full-document diff
  │
  ├── Full-document diff:
  │     ├── Section partitioning (when there are ≥ 3 headings, split by heading and diff each section independently)
  │     └── Single-region diff (BULD algorithm):
  │           1. Signature computation — compute a SHA1 signature for each node from type + properties + subtree content
  │           2. Priority-queue matching — dequeue by weight (log of node size) from largest to smallest
  │              Same signature → candidate match → matchDown (subtree propagation) + matchUp (ancestor propagation)
  │           3. Similarity-based second pass — handle node pairs with different signatures but highly similar text
  │           4. Dedicated code block matching — pair unmatched code blocks of the same language by text similarity
  │           5. Optimization — top-down + bottom-up passes to improve match quality
  │           6. Merge — walk matched pairs to produce the diff AST
  │              ├── Matched nodes → recurse into children or inline diff
  │              ├── Unmatched old nodes → marked del
  │              └── Unmatched new nodes → marked ins
  │
  └── Context collapsing (when contextLines is enabled)
```

### Inline diff

When all children of two matched container nodes (e.g. paragraph) are inline nodes (text, emphasis, strong, inlineCode, link, image, etc.), a semantic inline diff is triggered:

1. Abstract rich-text nodes (emphasis, link, etc.) into placeholder tokens
2. Tokenize plain text at word level (CJK per character, English per word + punctuation)
3. Trim the shared prefix and suffix
4. Compare the middle segment token-by-token with diff-match-patch + semantic cleanup
5. Fragmentation detection: fall back to a whole-block replacement when the diff result is too fragmented
6. Long paragraphs are first split into sentences, then inline diff runs within each sentence segment

### Section partitioning

Enabled automatically when the document contains 3 or more headings:

1. Split the document into sections by heading
2. Greedily pair sections with the same heading (preserving order)
3. When an adjacent gap contains exactly one unmatched pair of sections, pair them (heading rename)
4. Each paired section is diffed independently
5. Unpaired old sections are marked del, unpaired new sections are marked ins

## Rendering Diff Results

### To HTML

```typescript
import { toHast } from 'mdast-util-to-hast';
import { toHtml } from 'hast-util-to-html';

const diffAst = diffMarkdownAst(oldAst, newAst);
const hast = toHast(diffAst, { allowDangerousHtml: true });
const html = toHtml(hast, { allowDangerousHtml: true });
```

The renderer needs to handle on its own:
- `data.diff === 'ins'` → green background / `<ins>` tag
- `data.diff === 'del'` → red background / `<del>` tag
- `data.diffOldContent` → line-level diff inside code blocks (e.g. rendered with Shiki diff)
- `data.diffProperties` → property change hints
- `collapse` nodes → expandable/collapsible placeholders

### To Markdown

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

Note: the standard remark-stringify does not recognize custom node types such as ins/del/inlineIns/inlineDel/collapse. You need to register custom handlers or use the `data.diff` attribute mode (without enabling `enableDiffNode`).

### React rendering

See the implementation in `test/browser/App.tsx` — it uses `mdast-util-to-hast` + a custom hast-to-react renderer that selectively adds CSS class names based on the `data.diff` attribute.

## Development Guide

### Requirements

- Node.js >= 18
- npm or pnpm

### Command cheat sheet

```bash
# Development
npm run dev          # Start the interactive browser preview (Vite, port 3000)
npm run build        # Build the library (CJS + ESM + .d.ts → dist/)

# Testing
npm test             # Run all test cases
npm run evaluate     # Run evaluation (golden + scenario + corpus)
npm run evaluate -- --verbose              # Verbose mode
npm run evaluate -- --case golden/table    # Filter cases
npm run evaluate -- --check                # CI gate mode
npm run evaluate:stress                    # Include stress cases

# Saving and comparing evaluation results
npm run evaluate -- --save before          # Save current results
npm run evaluate -- --save after
npm run evaluate -- --compare before after # Compare two saved results

# Inspect the diff token stream of a single case
npm run evaluate:inspect -- golden/inline/word-replace-en
npm run evaluate:inspect -- scenario/links --reference

# Case management
npm run golden:gen    # Regenerate golden cases
npm run scenario:gen  # Regenerate scenario case metadata

# Corpus collection
npm run collect:git -- --repo /path/to/repo --name vue-docs

# Code quality
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
```

### Adding test cases

Create a directory under `test/testcases/` containing `old.md`, `new.md` and `case.json`:

```
test/testcases/golden/inline/my-new-case/
  old.md        # Old document
  new.md        # New document
  case.json     # Metadata and assertions
```

`case.json` format:

```json
{
  "description": "One-sentence description of the change",
  "capability": "inline.text",
  "expect": {
    "ins": ["inserted text"],
    "del": ["deleted text"],
    "kept": ["text that should not change"],
    "notDel": ["text that should not be deleted"],
    "notIns": ["text that should not be inserted"],
    "maxChangedTokens": 5,
    "maxHunks": 2,
    "minEfficiency": 0.8,
    "identical": false
  }
}
```

All assertion fields are optional. For a known issue, add a `"knownIssue": "description"` field; when the case's assertions fail it is reported as XFAIL instead of FAIL.

Cases are organized in tiers:

| Tier | Directory | Purpose |
|------|-----------|---------|
| golden | `golden/<category>/<name>/` | Atomic cases, each testing one capability |
| scenario | `scenario/<name>/` | Composite scenarios close to real documents |
| corpus | `corpus/<repo>/<sha-slug>/` | Collected from real git repositories |
| mr-samples | `mr-samples/<name>/` | Comparison samples from real MRs |

### Evaluation metrics

| Metric | Formula | Meaning |
|--------|---------|---------|
| correctness | `newCorrect && oldCorrect` | Removing del yields the new document + removing ins yields the old document |
| efficiency | `min(1, refChanged / algoChanged)` | Amount of change marked by the algorithm vs. the reference diff (closer to 1 is better) |
| cohesion | `min(1, refHunks / algoHunks)` | Number of change hunks (fewer is better). When efficiency ≥ 1, sqrt is applied to soften the penalty |
| score | `correct × (0.6 × efficiency + 0.4 × cohesion)` | Overall score |

XFAIL cases count as 0 when computing the average score.

### Browser preview

```bash
npm run dev
```

Open http://localhost:3000, edit the Old/New Markdown on the left, and see live on the right:

- **HTML Preview** — rendered diff (tables, code blocks with syntax highlighting)
- **AST Markdown** — diff AST serialized as annotated Markdown
- **Text Diff** — plain-text diffWords comparison
- **AST JSON** — full diff AST JSON structure

The dropdown at the top switches between test cases. New `test/testcases/<name>/old.md` + `new.md` pairs appear in the list automatically.

Online version: https://acdzh.github.io/markdown-ast-diff/

### Build and release

```bash
npm run build
```

Artifacts are output to `dist/`:

| File | Format | Purpose |
|------|--------|---------|
| `dist/index.js` | CommonJS | Node.js require() |
| `dist/index.mjs` | ESM | import syntax |
| `dist/index.d.ts` | TypeScript declarations | CJS types |
| `dist/index.d.mts` | TypeScript declarations | ESM types |

Production builds automatically strip all `assert()` calls.

## Known Limitations

| Scenario | Behavior | Reason |
|----------|----------|--------|
| Edits inside an HTML block | Whole-block del+ins | HTML blocks are opaque leaf nodes in the AST |
| Adding fields to YAML frontmatter | Whole-block del+ins | yaml nodes are opaque; no internal diff |
| inlineCode value change | Whole-block del+ins | inlineCode is a leaf node |
| link with only URL/title changed | Whole-block del+ins | link property changes cannot recurse into child text |
| Wrapping text in HTML tags | Text marked as both ins+del | Node boundary changes split the text |
| listItem gains a nested list | Whole-block del+ins | Structural change prevents recursive matching |
| Table align change (same column count) | Whole-block del+ins | align is a table property, not child content |
| Moving a section | Duplicated del+ins | No move semantics; reordering = delete all + insert all |
| Nested HTML inside tables | Old content may be lost | Known bug in deep nested matching |
