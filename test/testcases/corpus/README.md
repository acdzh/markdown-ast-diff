# corpus：真实仓库采集语料

这里的用例不是手写的，而是用 `test/collect-from-git.ts` 从真实项目的 git 历史中原样采集的
Markdown 修改，用来验证 diff 算法在真实文档上的表现（结构、规模、写法都不是人造用例能覆盖的）。

每个子目录是一个来源仓库，目录下每个用例包含：

- `old.md` / `new.md`：该次提交前后的文件原文（不做任何修改）
- `case.json`：来源信息（仓库、commit、文件路径）与人工标注（如 `knownIssue`）

## vue-docs/

来源：[vuejs/docs](https://github.com/vuejs/docs)，Vue 官方文档，MIT License。

采集方式（2025 年以来 `src/` 下的文档修改，过滤掉近似重写和超大文件后取前 30 个）：

```bash
npx tsx test/collect-from-git.ts \
  --repo /path/to/cloned/vuejs/docs --name vue-docs \
  --path src --since 2025-01-01 --limit 30
```

人工标注单独维护在 `vue-docs.annotations.json`：重新运行采集会覆盖用例目录，但会自动把
这份标注合并进新的 `case.json`，不会丢失。

注意：上面的命令只是记录“这些用例当时是怎么采集的”，**复现评测不需要重新采集或联网**，
直接跑仓库里的快照即可：

```bash
npm run evaluate -- --case corpus
```

## 添加新的来源

```bash
npx tsx test/collect-from-git.ts --repo /path/to/repo --name <名称> --limit 50
```

采集前请确认来源仓库的许可证允许再分发其文档内容；私有用例不要提交。
