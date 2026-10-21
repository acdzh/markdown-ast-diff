import fs from 'fs';
import path from 'path';
import { performance } from 'perf_hooks';
import { markdownToAst } from '../utils/transform';
import { diffMarkdownAst } from '../../src/diff';
import {
  measureCorrectness,
  measureMatchRate,
  measureFragmentation,
  measureGranularity,
  computeScore,
  type CaseMetrics,
} from './metrics';

interface CaseResult {
  name: string;
  metrics: CaseMetrics;
}

interface Report {
  timestamp: string;
  tag: string;
  summary: {
    totalCases: number;
    correctnessRate: number;
    avgMatchRate: number;
    avgFragmentation: number;
    avgGranularity: number;
    avgPerfMs: number;
    avgScore: number;
  };
  cases: Array<{ name: string } & CaseMetrics>;
}

const TESTCASES_DIR = path.join(__dirname, '..', 'testcases');
const OUTPUT_DIR = path.join(__dirname, 'output');

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function discoverCases(filter?: string[]): Array<{ name: string; oldMd: string; newMd: string }> {
  const dirs = fs.readdirSync(TESTCASES_DIR).filter((d) => {
    const full = path.join(TESTCASES_DIR, d);
    if (!fs.statSync(full).isDirectory()) {
      return false;
    }
    const hasOld = fs.existsSync(path.join(full, 'old.md'));
    const hasNew = fs.existsSync(path.join(full, 'new.md'));
    return hasOld && hasNew;
  });

  const cases = dirs
    .filter((d) => !filter || filter.includes(d))
    .map((d) => ({
      name: d,
      oldMd: fs.readFileSync(path.join(TESTCASES_DIR, d, 'old.md'), 'utf-8'),
      newMd: fs.readFileSync(path.join(TESTCASES_DIR, d, 'new.md'), 'utf-8'),
    }));

  return cases;
}

function runCase(name: string, oldMd: string, newMd: string): CaseMetrics {
  const times: number[] = [];
  let diffAst: any;

  for (let i = 0; i < 3; i++) {
    const oldAst = markdownToAst(oldMd);
    const newAst = markdownToAst(newMd);
    const start = performance.now();
    diffAst = diffMarkdownAst(oldAst, newAst);
    const end = performance.now();
    times.push(end - start);
  }

  times.sort((a, b) => a - b);
  const perfMs = Math.round(times[1] * 100) / 100;

  const correctness = measureCorrectness(diffAst, oldMd, newMd);
  const matchRate = measureMatchRate(diffAst);
  const fragmentation = measureFragmentation(diffAst);
  const granularityHitRate = measureGranularity(diffAst);

  const partial = { correctness, matchRate, fragmentation, granularityHitRate, perfMs };
  const score = Math.round(computeScore(partial) * 1000) / 1000;

  return {
    ...partial,
    matchRate: Math.round(matchRate * 1000) / 1000,
    fragmentation: Math.round(fragmentation * 1000) / 1000,
    granularityHitRate: Math.round(granularityHitRate * 1000) / 1000,
    score,
  };
}

function printTable(results: CaseResult[]): void {
  const nameWidth = Math.max(20, ...results.map((r) => r.name.length)) + 2;

  const header = [
    'Case'.padEnd(nameWidth),
    'Corr',
    'Match%',
    ' Frag',
    'Granularity',
    'PerfMs',
    'Score',
  ].join(' | ');

  const separator = header.replace(/[^|]/g, '-').replace(/\|/g, '+');

  console.log(separator);
  console.log(header);
  console.log(separator);

  for (const r of results) {
    const m = r.metrics;
    const row = [
      r.name.padEnd(nameWidth),
      m.correctness === 1 ? '  ✓ ' : '  ✗ ',
      m.matchRate.toFixed(2).padStart(6),
      m.fragmentation.toFixed(2).padStart(5),
      m.granularityHitRate.toFixed(2).padStart(11),
      String(m.perfMs).padStart(6),
      m.score.toFixed(3).padStart(5),
    ].join(' | ');
    console.log(row);
  }

  console.log(separator);

  const total = results.length;
  const correctCount = results.filter((r) => r.metrics.correctness === 1).length;
  const avg = (fn: (r: CaseResult) => number) =>
    Math.round((results.reduce((s, r) => s + fn(r), 0) / total) * 1000) / 1000;

  const summaryRow = [
    `AVERAGE (${total})`.padEnd(nameWidth),
    `${Math.round((correctCount / total) * 100)}%`.padStart(4),
    avg((r) => r.metrics.matchRate).toFixed(2).padStart(6),
    avg((r) => r.metrics.fragmentation).toFixed(2).padStart(5),
    avg((r) => r.metrics.granularityHitRate).toFixed(2).padStart(11),
    avg((r) => r.metrics.perfMs).toFixed(0).padStart(6),
    avg((r) => r.metrics.score).toFixed(3).padStart(5),
  ].join(' | ');

  console.log(summaryRow);
  console.log(separator);
}

function buildReport(results: CaseResult[], tag: string): Report {
  const total = results.length;
  const correctCount = results.filter((r) => r.metrics.correctness === 1).length;
  const avg = (fn: (r: CaseResult) => number) =>
    Math.round((results.reduce((s, r) => s + fn(r), 0) / total) * 1000) / 1000;

  return {
    timestamp: new Date().toISOString(),
    tag,
    summary: {
      totalCases: total,
      correctnessRate: Math.round((correctCount / total) * 1000) / 1000,
      avgMatchRate: avg((r) => r.metrics.matchRate),
      avgFragmentation: avg((r) => r.metrics.fragmentation),
      avgGranularity: avg((r) => r.metrics.granularityHitRate),
      avgPerfMs: avg((r) => r.metrics.perfMs),
      avgScore: avg((r) => r.metrics.score),
    },
    cases: results.map((r) => ({ name: r.name, ...r.metrics })),
  };
}

function printComparison(before: Report, after: Report): void {
  const nameWidth = Math.max(20, ...after.cases.map((c) => c.name.length)) + 2;

  const header = ['Case'.padEnd(nameWidth), 'before → after  ', 'Δ Score   ', 'Trend'].join(' | ');
  const separator = header.replace(/[^|]/g, '-').replace(/\|/g, '+');

  console.log(separator);
  console.log(header);
  console.log(separator);

  const beforeMap = new Map(before.cases.map((c) => [c.name, c]));

  const rows = after.cases.map((ac) => {
    const bc = beforeMap.get(ac.name);
    const bScore = bc?.score ?? 0;
    const delta = ac.score - bScore;
    let trend = '→';
    if (delta > 0.1) {
      trend = '↑↑';
    } else if (delta > 0.02) {
      trend = '↑';
    } else if (delta < -0.1) {
      trend = '↓↓';
    } else if (delta < -0.02) {
      trend = '↓';
    }
    return { name: ac.name, bScore, aScore: ac.score, delta, trend };
  });

  rows.sort((a, b) => b.delta - a.delta);

  for (const row of rows) {
    console.log([
      row.name.padEnd(nameWidth),
      `${row.bScore.toFixed(2)} → ${row.aScore.toFixed(2)}`.padStart(18),
      (row.delta >= 0 ? '+' : '') + row.delta.toFixed(3).padStart(8),
      `  ${row.trend}`,
    ].join(' | '));
  }

  console.log(separator);

  const avgBefore = before.summary.avgScore;
  const avgAfter = after.summary.avgScore;
  const avgDelta = avgAfter - avgBefore;
  console.log([
    'AVERAGE'.padEnd(nameWidth),
    `${avgBefore.toFixed(2)} → ${avgAfter.toFixed(2)}`.padStart(18),
    (avgDelta >= 0 ? '+' : '') + avgDelta.toFixed(3).padStart(8),
    `  ${avgDelta > 0.02 ? '↑' : avgDelta < -0.02 ? '↓' : '→'}`,
  ].join(' | '));
  console.log(separator);
}

function parseArgs(): { cases?: string[]; save?: string; compare?: [string, string] } {
  const args = process.argv.slice(2);
  const result: { cases?: string[]; save?: string; compare?: [string, string] } = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--case' && args[i + 1]) {
      if (!result.cases) {
        result.cases = [];
      }
      result.cases.push(args[++i]);
    } else if (args[i] === '--save' && args[i + 1]) {
      result.save = args[++i];
    } else if (args[i] === '--compare' && args[i + 1] && args[i + 2]) {
      result.compare = [args[++i], args[++i]];
    }
  }

  return result;
}

function main(): void {
  const opts = parseArgs();

  if (opts.compare) {
    ensureDir(OUTPUT_DIR);
    const [beforeTag, afterTag] = opts.compare;
    const beforePath = path.join(OUTPUT_DIR, `${beforeTag}.json`);
    const afterPath = path.join(OUTPUT_DIR, `${afterTag}.json`);

    if (!fs.existsSync(beforePath)) {
      console.error(`Report not found: ${beforePath}`);
      process.exit(1);
    }
    if (!fs.existsSync(afterPath)) {
      console.error(`Report not found: ${afterPath}`);
      process.exit(1);
    }

    const before: Report = JSON.parse(fs.readFileSync(beforePath, 'utf-8'));
    const after: Report = JSON.parse(fs.readFileSync(afterPath, 'utf-8'));
    printComparison(before, after);
    return;
  }

  const cases = discoverCases(opts.cases);
  if (cases.length === 0) {
    console.error('No test cases found.');
    process.exit(1);
  }

  console.log(`Running ${cases.length} test cases...\n`);

  const results: CaseResult[] = [];
  for (const c of cases) {
    process.stdout.write(`  ${c.name}...`);
    const metrics = runCase(c.name, c.oldMd, c.newMd);
    results.push({ name: c.name, metrics });
    console.log(` done (${metrics.perfMs}ms, score=${metrics.score})`);
  }

  console.log('');
  printTable(results);

  const tag = opts.save ?? 'latest';
  const report = buildReport(results, tag);

  ensureDir(OUTPUT_DIR);
  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${tag}.json`),
    JSON.stringify(report, null, 2),
  );
  console.log(`\nReport saved to test/evaluate/output/${tag}.json`);
}

main();
