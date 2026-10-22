# corpus：真实仓库采集语料

这里的用例不是手写的，而是用 `test/collect-from-git.ts` 从真实项目的 git 历史中原样采集的
Markdown 修改，用来验证 diff 算法在真实文档上的表现（结构、规模、写法都不是人造用例能覆盖的）。

采集时按"改动足够大、结构足够复杂"过滤，避免收录只改一两个字、对评测没有区分度的零碎修改
（具体阈值见采集命令）。当前入库语料都要求变更行占比 ≥ 8% 且至少几十行规模，
旧的一批 1–6 行小修已在审计后删除。每个用例目录包含：

- `old.md` / `new.md`：该次提交前后的文件原文（不做任何修改）
- `case.json`：来源信息（仓库、commit、文件、变更行占比、结构种类数）与人工标注（如 `knownIssue`）

## 来源

| 子目录 | 仓库 | 许可证 | 内容 |
| --- | --- | --- | --- |
| `vue-docs/` | [vuejs/docs](https://github.com/vuejs/docs) | MIT | 5 例，均为成段/成节的大改（含 1 例跨文件移动 XFAIL）；只改一两行的小修已剔除 |
| `react/` | [reactjs/react.dev](https://github.com/reactjs/react.dev) | CC-BY-4.0（文档） | 5 例，大改/重写章节（190–450 行） |
| `vite/` | [vitejs/vite](https://github.com/vitejs/vite) `docs/` | MIT | 1 例，290 行文档的整节新增 |

## 复现评测

用例快照已入库，**不需要联网或重新采集**：

```bash
npm run evaluate -- --case corpus
```

人工标注维护在 `<repo>.annotations.json`（当前只有 vue-docs 的跨文件移动一例）：
重新运行采集会覆盖用例目录，但会自动把标注合并进新的 `case.json`，不会丢失。

## 重新采集 / 添加新来源

```bash
# 改动较大（变更行占比 ≥10%）、结构较复杂（至少含 2 种结构：标题/表格/代码/列表/引用）
npx tsx test/collect-from-git.ts \
  --repo /path/to/repo --name <名称> --path <文档目录> --since 2024-01-01 \
  --limit 14 --min-lines 60 --min-changed-lines 15 \
  --min-changed-ratio 0.1 --max-changed-ratio 0.7 \
  --require-structures 2 --ext .md,.mdx
```

主要过滤参数：

- `--min-changed-ratio` / `--max-changed-ratio`：变更行占比区间（过滤零碎小修和近似重写）
- `--min-lines` / `--min-changed-lines`：文档长度与改动行数下限
- `--require-structures`：新版本至少含几种结构标记
- `--ext`：接受的扩展名（react/tailwind 这类用 `.md,.mdx`）

采集前请确认来源仓库的许可证允许再分发其文档内容；私有用例不要提交。
