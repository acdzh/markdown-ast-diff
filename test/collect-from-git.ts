/**
 * 从 git 仓库采集真实的 Markdown 修改，生成 corpus 层用例。
 *
 *   npx tsx test/collect-from-git.ts --repo /path/to/repo [--limit 50] [--name docs-site]
 *                                    [--max-bytes 200000] [--min-changed-lines 1] [--max-changed-ratio 0.5]
 *                                    [--since 2024-01-01] [--path docs/]
 *
 * 输出到 test/testcases/corpus/<name>/<short-sha>-<file-slug>/{old.md,new.md,case.json}。
 * <name> 默认取仓库目录名。同一 <name> 目录会被整体覆盖，便于重复采集。
 *
 * 人工标注（knownIssue）保存在 test/testcases/corpus/<name>.annotations.json：
 *   { "<short-sha>-<file-slug>": { "knownIssue": "...", "expect": {...} } }
 * 重新采集时会自动合并进 case.json，不会被覆盖。
 *
 * 过滤规则（目的是得到“真实、可读、有代表性”的小修改）：
 * - 只取修改（M），不取新增/删除/重命名（那些只能整块 ins/del，没有评测价值）
 * - 跳过 merge commit
 * - 跳过任一侧超过 --max-bytes 的文件
 * - 跳过行级变更比例超过 --max-changed-ratio 的修改（近似重写）
 * - 跳过只有空白变化的修改
 * - 同一文件只保留最近一次修改，避免语料被单个热点文件占满
 *
 * corpus 层不写断言，只检查还原正确性并统计分数分布；它也默认被 .gitignore 忽略，
 * 因为采集来源可能是私有仓库。确认可以公开后再手动 `git add -f`。
 */
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

interface Options {
  repo: string;
  name: string;
  limit: number;
  maxBytes: number;
  minChangedLines: number;
  maxChangedRatio: number;
  since?: string;
  pathFilter?: string;
}

function parseArgs(argv: string[]): Options {
  const get = (flag: string): string | undefined => {
    const i = argv.indexOf(flag);
    return i >= 0 ? argv[i + 1] : undefined;
  };
  const repo = get('--repo');
  if (!repo) {
    console.error('Usage: npx tsx test/collect-from-git.ts --repo <path> [--limit N] [--name NAME]');
    process.exit(1);
  }
  const resolved = path.resolve(repo);
  return {
    repo: resolved,
    name: (get('--name') ?? path.basename(resolved)).replace(/[^\w.-]+/g, '-'),
    limit: Number(get('--limit') ?? 50),
    maxBytes: Number(get('--max-bytes') ?? 200_000),
    minChangedLines: Number(get('--min-changed-lines') ?? 1),
    maxChangedRatio: Number(get('--max-changed-ratio') ?? 0.5),
    since: get('--since'),
    pathFilter: get('--path'),
  };
}

function git(repo: string, args: string[]): string {
  // 用 execFileSync 传参数组，不经过 shell，避免路径/文件名中的特殊字符被解释
  return execFileSync('git', ['-C', repo, ...args], {
    encoding: 'utf-8',
    maxBuffer: 256 * 1024 * 1024,
  });
}

function tryShow(repo: string, rev: string, file: string): string | null {
  try {
    return git(repo, ['show', `${rev}:${file}`]);
  } catch {
    return null;
  }
}

interface Candidate {
  sha: string;
  date: string;
  subject: string;
  file: string;
}

function listCandidates(opts: Options): Candidate[] {
  const args = [
    'log', '--no-merges', '--diff-filter=M', '--name-only',
    '--format=%x00%H%x1f%ad%x1f%s', '--date=short',
  ];
  if (opts.since) {
    args.push(`--since=${opts.since}`);
  }
  // 只按目录限定范围，.md 后缀在下面过滤（git pathspec 的 glob 语义在不同版本间不一致）
  args.push('--', opts.pathFilter ?? '.');

  const out = git(opts.repo, args);
  const seenFiles = new Set<string>();
  const result: Candidate[] = [];
  for (const chunk of out.split('\0')) {
    const lines = chunk.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) {
      continue;
    }
    const [sha, date, subject] = lines[0].split('\x1f');
    for (const file of lines.slice(1)) {
      if (!file.toLowerCase().endsWith('.md') || seenFiles.has(file)) {
        continue;
      }
      seenFiles.add(file);
      result.push({ sha, date, subject: subject ?? '', file });
    }
  }
  return result;
}

function changedLineStats(oldText: string, newText: string): { changed: number; total: number } {
  // 粗略的行级统计：只用于过滤，不需要最优对齐
  const oldLines = oldText.split('\n');
  const newLines = newText.split('\n');
  const oldCount = new Map<string, number>();
  for (const l of oldLines) {
    oldCount.set(l, (oldCount.get(l) ?? 0) + 1);
  }
  let common = 0;
  for (const l of newLines) {
    const c = oldCount.get(l);
    if (c) {
      common++;
      oldCount.set(l, c - 1);
    }
  }
  const changed = (oldLines.length - common) + (newLines.length - common);
  return { changed, total: Math.max(oldLines.length, newLines.length) };
}

function slug(file: string): string {
  return file.replace(/\.md$/i, '').replace(/[^\w\u4e00-\u9fff-]+/g, '_').slice(-60);
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(path.join(opts.repo, '.git')) && !fs.existsSync(path.join(opts.repo, 'HEAD'))) {
    console.error(`Not a git repository: ${opts.repo}`);
    process.exit(1);
  }

  const outRoot = path.resolve(__dirname, 'testcases', 'corpus', opts.name);
  // 先读出人工标注，再清空输出目录
  const annotationsPath = path.join(path.dirname(outRoot), `${opts.name}.annotations.json`);
  const annotations: Record<string, { knownIssue?: string; expect?: unknown }> = fs.existsSync(annotationsPath)
    ? JSON.parse(fs.readFileSync(annotationsPath, 'utf-8'))
    : {};
  fs.rmSync(outRoot, { recursive: true, force: true });

  const candidates = listCandidates(opts);
  const skipped: Record<string, number> = {};
  const skip = (reason: string) => {
    skipped[reason] = (skipped[reason] ?? 0) + 1;
  };
  let written = 0;

  for (const c of candidates) {
    if (written >= opts.limit) {
      break;
    }
    const newText = tryShow(opts.repo, c.sha, c.file);
    const oldText = tryShow(opts.repo, `${c.sha}^`, c.file);
    if (newText === null || oldText === null) {
      skip('unreadable');
      continue;
    }
    if (oldText.length > opts.maxBytes || newText.length > opts.maxBytes) {
      skip('too large');
      continue;
    }
    if (oldText.replace(/\s+/g, '') === newText.replace(/\s+/g, '')) {
      skip('whitespace only');
      continue;
    }
    const { changed, total } = changedLineStats(oldText, newText);
    if (changed < opts.minChangedLines) {
      skip('too small');
      continue;
    }
    if (total > 0 && changed / (2 * total) > opts.maxChangedRatio) {
      skip('near rewrite');
      continue;
    }

    const caseId = `${c.sha.slice(0, 8)}-${slug(c.file)}`;
    const dir = path.join(outRoot, caseId);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'old.md'), oldText);
    fs.writeFileSync(path.join(dir, 'new.md'), newText);
    fs.writeFileSync(path.join(dir, 'case.json'), `${JSON.stringify({
      description: `${c.date} ${c.subject}`.slice(0, 200),
      capability: 'corpus',
      source: { repo: opts.name, commit: c.sha, file: c.file, changedLines: changed },
      ...(annotations[caseId] ?? {}),
    }, null, 2)}\n`);
    written++;
  }

  console.log(`Scanned ${candidates.length} candidate file changes, wrote ${written} cases to ${path.relative(process.cwd(), outRoot)}`);
  if (Object.keys(skipped).length > 0) {
    console.log(`Skipped: ${Object.entries(skipped).map(([k, v]) => `${k}=${v}`).join(', ')}`);
  }
}

main();
