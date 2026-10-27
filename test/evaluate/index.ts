import fs from 'fs';
import path from 'path';
import { performance } from 'perf_hooks';
import type { Node } from 'unist';
import { markdownToAst } from '../utils/transform';
import { loadCases, filterCases, type LoadedCase } from '../utils/cases';
import { diffMarkdownAst } from '../../src/diff';
import { measure, type CaseMetrics } from './metrics';
import { checkExpect, caseStatus, type AssertionResult, type CaseStatus } from './expect';
import { stressCases } from './stress';

/**
 * 评测入口。
 *
 *   npm run evaluate                         # golden + scenario + corpus
 *   npm run evaluate -- --stress             # 额外跑压力用例
 *   npm run evaluate -- --case golden/table  # 按 id / 前缀 / 子串过滤，可多次
 *   npm run evaluate -- --verbose            # 打印失败断言与诊断
 *   npm run evaluate -- --save before        # 存档到 test/evaluate/output/before.json
 *   npm run evaluate -- --compare before after
 *   npm run evaluate -- --check              # 有 FAIL / XPASS / 正确性失败时退出码 1（CI 用）
 */

interface CaseReport {
  id: string;
  layer: string;
  capability: string;
  description?: string;
  status: CaseStatus;
  knownIssue?: string;
  metrics: CaseMetrics;
  failedAssertions: AssertionResult[];
  diagnostics: string[];
}

interface LayerSummary {
  cases: number;
  correctRate: number;
  pass: number;
  fail: number;
  xfail: number;
  xpass: number;
  avgEfficiency: number;
  avgCohesion: number;
  avgScore: number;
  p95PerfMs: number;
}

interface Report {
  timestamp: string;
  tag: string;
  layers: Record<string, LayerSummary>;
  capabilities: Record<string, { cases: number; pass: number; avgScore: number }>;
  cases: CaseReport[];
}

const OUTPUT_DIR = path.join(__dirname, 'output');

interface Options {
  cases?: string[];
  save?: string;
  compare?: [string, string];
  stress: boolean;
  verbose: boolean;
  check: boolean;
  allowKnownFailure?: string[];
}

function parseArgs(argv: string[]): Options {
  const opts: Options = { stress: false, verbose: false, check: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--case' && argv[i + 1]) {
      (opts.cases ??= []).push(argv[++i]);
    } else if (a === '--save' && argv[i + 1]) {
      opts.save = argv[++i];
    } else if (a === '--compare' && argv[i + 1] && argv[i + 2]) {
      opts.compare = [argv[++i], argv[++i]];
    } else if (a === '--stress') {
      opts.stress = true;
    } else if (a === '--verbose' || a === '-v') {
      opts.verbose = true;
    } else if (a === '--check') {
      opts.check = true;
    } else if (a === '--allow-known-failure' && argv[i + 1]) {
      (opts.allowKnownFailure ??= []).push(argv[++i]);
    }
  }
  return opts;
}

function runDiff(oldMd: string, newMd: string): { diffAst: Node; perfMs: number } {
  const times: number[] = [];
  let diffAst: Node | undefined;
  for (let i = 0; i < 3; i++) {
    const oldAst = markdownToAst(oldMd);
    const newAst = markdownToAst(newMd);
    const start = performance.now();
    diffAst = diffMarkdownAst(oldAst, newAst) as Node;
    times.push(performance.now() - start);
  }
  times.sort((a, b) => a - b);
  return { diffAst: diffAst!, perfMs: Math.round(times[1] * 100) / 100 };
}

function evaluateCase(c: LoadedCase): CaseReport {
  let diffAst: Node;
  let perfMs: number;
  try {
    ({ diffAst, perfMs } = runDiff(c.oldMarkdown, c.newMarkdown));
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const empty = { total: 0, eq: 0, ins: 0, del: 0, hunks: 0 };
    return {
      id: c.id,
      layer: c.layer,
      capability: c.spec.capability ?? c.layer,
      description: c.spec.description,
      status: c.spec.knownIssue ? 'xfail' : 'fail',
      knownIssue: c.spec.knownIssue,
      metrics: {
        newCorrect: false, oldCorrect: false, oldOrdered: false, correct: false,
        efficiency: 0, cohesion: 0, changeRatio: 0,
        algo: empty, reference: empty, perfMs: 0, score: 0,
      },
      failedAssertions: [{ name: 'no-throw', ok: false, detail: message }],
      diagnostics: [`diff threw: ${message}`],
    };
  }

  const { metrics, diffTokens, diagnostics } = measure({
    diffAst,
    oldAst: markdownToAst(c.oldMarkdown),
    newAst: markdownToAst(c.newMarkdown),
    perfMs,
  });
  const assertions = checkExpect(c.spec, diffTokens, metrics);

  return {
    id: c.id,
    layer: c.layer,
    capability: c.spec.capability ?? c.layer,
    description: c.spec.description,
    status: caseStatus(c.spec, assertions),
    knownIssue: c.spec.knownIssue,
    metrics,
    failedAssertions: assertions.filter(a => !a.ok),
    diagnostics,
  };
}

function round(n: number, digits = 3): number {
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}

function avg(values: number[]): number {
  return values.length === 0 ? 0 : values.reduce((s, v) => s + v, 0) / values.length;
}

function p95(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.ceil(sorted.length * 0.95) - 1)];
}

function summarize(cases: CaseReport[]): LayerSummary {
  return {
    cases: cases.length,
    correctRate: round(cases.filter(c => c.metrics.correct).length / Math.max(1, cases.length)),
    pass: cases.filter(c => c.status === 'pass').length,
    fail: cases.filter(c => c.status === 'fail').length,
    xfail: cases.filter(c => c.status === 'xfail').length,
    xpass: cases.filter(c => c.status === 'xpass').length,
    avgEfficiency: round(avg(cases.map(c => c.metrics.efficiency))),
    avgCohesion: round(avg(cases.map(c => c.metrics.cohesion))),
    avgScore: round(avg(cases.map(c => c.status === 'xfail' ? 0 : c.metrics.score))),
    p95PerfMs: round(p95(cases.map(c => c.metrics.perfMs)), 2),
  };
}

function buildReport(cases: CaseReport[], tag: string): Report {
  const layers: Report['layers'] = {};
  for (const layer of [...new Set(cases.map(c => c.layer))]) {
    layers[layer] = summarize(cases.filter(c => c.layer === layer));
  }
  const capabilities: Report['capabilities'] = {};
  for (const c of cases.filter(x => x.layer === 'golden')) {
    const group = c.capability.split('.')[0];
    const entry = (capabilities[group] ??= { cases: 0, pass: 0, avgScore: 0 });
    entry.cases++;
    if (c.status === 'pass' || c.status === 'xpass') {
      entry.pass++;
    }
    entry.avgScore += c.status === 'xfail' ? 0 : c.metrics.score;
  }
  for (const entry of Object.values(capabilities)) {
    entry.avgScore = round(entry.avgScore / entry.cases);
  }
  return { timestamp: new Date().toISOString(), tag, layers, capabilities, cases };
}

const STATUS_LABEL: Record<CaseStatus, string> = {
  pass: 'PASS ',
  fail: 'FAIL ',
  xfail: 'XFAIL',
  xpass: 'XPASS',
};

function pad(s: string, w: number): string {
  // 中文字符按双宽计算，保证表格对齐
  let width = 0;
  for (const ch of s) {
    width += /[\u1100-\uffff]/.test(ch) ? 2 : 1;
  }
  return s + ' '.repeat(Math.max(0, w - width));
}

function printCases(cases: CaseReport[], verbose: boolean): void {
  if (cases.length === 0) {
    return;
  }
  const idWidth = Math.max(24, ...cases.map(c => c.id.length)) + 2;
  const header = `${pad('Case', idWidth)} Status Corr  Eff   Coh   Chg%  Hunk(ref) PerfMs  Score`;
  console.log(header);
  console.log('-'.repeat(header.length));
  for (const c of cases) {
    const m = c.metrics;
    const corr = !m.correct
      ? (m.newCorrect ? ' ✗o ' : m.oldCorrect ? ' ✗n ' : ' ✗  ')
      : (m.oldOrdered ? ' ✓  ' : ' ✓~ ');
    const hunks = `${m.algo.hunks}(${m.reference.hunks})`.padStart(9);
    console.log(
      `${pad(c.id, idWidth)} ${STATUS_LABEL[c.status]}  ${corr} ${m.efficiency.toFixed(2)}  ${m.cohesion.toFixed(2)}  ` +
      `${(m.changeRatio * 100).toFixed(0).padStart(3)}%  ${hunks} ${String(m.perfMs).padStart(6)}  ${m.score.toFixed(3)}`,
    );
    const showDetails = verbose || c.status === 'fail' || c.status === 'xpass';
    if (showDetails) {
      if (c.status === 'xpass') {
        console.log(`    ↳ 已知问题已不再复现，请移除 knownIssue：${c.knownIssue}`);
      }
      for (const a of c.failedAssertions) {
        console.log(`    ✗ ${a.name}${a.detail ? `  (${a.detail})` : ''}`);
      }
      if (verbose) {
        if (c.status === 'xfail') {
          console.log(`    ↳ known issue: ${c.knownIssue}`);
        }
        for (const d of c.diagnostics) {
          console.log(`    · ${d.slice(0, 300)}`);
        }
      }
    }
  }
}

function printSummary(report: Report): void {
  console.log('\n== Layers ==');
  console.log('Layer      Cases  Correct  Pass  Fail  XFail  XPass  AvgEff  AvgCoh  AvgScore  P95ms');
  for (const [layer, s] of Object.entries(report.layers)) {
    console.log(
      `${layer.padEnd(10)} ${String(s.cases).padStart(5)}  ${(s.correctRate * 100).toFixed(0).padStart(6)}%  ` +
      `${String(s.pass).padStart(4)}  ${String(s.fail).padStart(4)}  ${String(s.xfail).padStart(5)}  ${String(s.xpass).padStart(5)}  ` +
      `${s.avgEfficiency.toFixed(3).padStart(6)}  ${s.avgCohesion.toFixed(3).padStart(6)}  ${s.avgScore.toFixed(3).padStart(8)}  ${String(s.p95PerfMs).padStart(5)}`,
    );
  }
  const caps = Object.entries(report.capabilities);
  if (caps.length > 0) {
    console.log('\n== Golden capabilities ==');
    console.log('Capability   Pass/Cases  AvgScore');
    for (const [cap, s] of caps.sort((a, b) => a[0].localeCompare(b[0]))) {
      console.log(`${cap.padEnd(12)} ${`${s.pass}/${s.cases}`.padStart(10)}  ${s.avgScore.toFixed(3).padStart(8)}`);
    }
  }
}

function trendArrow(delta: number): string {
  if (delta > 0.1) {
    return '↑↑';
  }
  if (delta > 0.02) {
    return '↑';
  }
  if (delta < -0.1) {
    return '↓↓';
  }
  if (delta < -0.02) {
    return '↓';
  }
  return '→';
}

function printComparison(before: Report, after: Report): void {
  const beforeMap = new Map(before.cases.map(c => [c.id, c]));
  const afterMap = new Map(after.cases.map(c => [c.id, c]));
  const ids = [...new Set([...beforeMap.keys(), ...afterMap.keys()])];

  const rows = ids.map((id) => {
    const b = beforeMap.get(id);
    const a = afterMap.get(id);
    const bs = b?.metrics.score ?? 0;
    const as = a?.metrics.score ?? 0;
    return {
      id,
      b,
      a,
      delta: as - bs,
      statusChange: `${b ? b.status : '-'}→${a ? a.status : '-'}`,
    };
  }).sort((x, y) => x.delta - y.delta);

  const idWidth = Math.max(24, ...ids.map(id => id.length)) + 2;
  console.log(`${pad('Case', idWidth)} before → after   Δ        Status`);
  for (const r of rows) {
    const changed = r.b?.status !== r.a?.status;
    if (Math.abs(r.delta) < 0.0005 && !changed) {
      continue;
    }
    console.log(
      `${pad(r.id, idWidth)} ${(r.b?.metrics.score ?? 0).toFixed(3)} → ${(r.a?.metrics.score ?? 0).toFixed(3)}  ` +
      `${(r.delta >= 0 ? '+' : '') + r.delta.toFixed(3)} ${trendArrow(r.delta).padEnd(2)}  ${changed ? r.statusChange : ''}`,
    );
  }
  const unchanged = rows.filter(r => Math.abs(r.delta) < 0.0005 && r.b?.status === r.a?.status).length;
  console.log(`(${unchanged} cases unchanged)`);

  console.log('\nLayer      AvgScore before → after   Pass before → after');
  for (const layer of [...new Set([...Object.keys(before.layers), ...Object.keys(after.layers)])]) {
    const b = before.layers[layer];
    const a = after.layers[layer];
    console.log(
      `${layer.padEnd(10)} ${(b?.avgScore ?? 0).toFixed(3)} → ${(a?.avgScore ?? 0).toFixed(3)}            ` +
      `${b?.pass ?? 0}/${b?.cases ?? 0} → ${a?.pass ?? 0}/${a?.cases ?? 0}`,
    );
  }
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2));

  if (opts.compare) {
    const [bt, at] = opts.compare;
    const read = (tag: string): Report => {
      const p = path.join(OUTPUT_DIR, `${tag}.json`);
      if (!fs.existsSync(p)) {
        console.error(`Report not found: ${p}`);
        process.exit(1);
      }
      const report = JSON.parse(fs.readFileSync(p, 'utf-8')) as Report;
      if (!report.layers || !Array.isArray(report.cases) || report.cases.some(c => !c.id)) {
        console.error(`Report ${p} was produced by an older evaluator format; re-run with --save ${tag}.`);
        process.exit(1);
      }
      return report;
    };
    printComparison(read(bt), read(at));
    return;
  }

  let cases = loadCases();
  if (opts.stress) {
    cases = cases.concat(stressCases());
  }
  cases = filterCases(cases, opts.cases);
  if (cases.length === 0) {
    console.error('No test cases found.');
    process.exit(1);
  }

  const reports = cases.map(evaluateCase);
  const layerOrder = ['golden', 'scenario', 'corpus', 'stress'];
  const layers = [...new Set(reports.map(r => r.layer))].sort(
    (a, b) => (layerOrder.indexOf(a) + 100) % 100 - (layerOrder.indexOf(b) + 100) % 100,
  );
  for (const layer of layers) {
    console.log(`\n== ${layer} ==`);
    printCases(reports.filter(r => r.layer === layer), opts.verbose);
  }

  const report = buildReport(reports, opts.save ?? 'latest');
  printSummary(report);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const out = path.join(OUTPUT_DIR, `${report.tag}.json`);
  fs.writeFileSync(out, JSON.stringify(report, null, 2));
  console.log(`\nReport saved to ${path.relative(process.cwd(), out)}`);

  if (opts.check) {
    const allowed = new Set(opts.allowKnownFailure ?? []);
    const blocking = reports.filter(
      r => (r.status === 'fail' || r.status === 'xpass' || (!r.metrics.correct && !r.knownIssue))
        && !allowed.has(r.id),
    );
    const unrecognized = [...allowed].filter(id => !reports.some(r => r.id === id));
    if (unrecognized.length > 0) {
      console.error(`\n--allow-known-failure id not found: ${unrecognized.join(', ')}`);
      process.exit(1);
    }
    if (blocking.length > 0) {
      console.error(`\n${blocking.length} blocking case(s): ${blocking.map(r => r.id).join(', ')}`);
      process.exit(1);
    }
  }
}

main();
