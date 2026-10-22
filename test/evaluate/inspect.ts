import { markdownToAst } from '../utils/transform';
import { loadCases, filterCases } from '../utils/cases';
import { diffMarkdownAst } from '../../src/diff';
import { flatten, type Token } from './flatten';
import { measure, referenceStates } from './metrics';
import { stressCases } from './stress';

/**
 * 查看单个用例的 diff token 流，定位指标/断言失败原因。
 *
 *   npm run evaluate:inspect -- golden/inline/word-replace
 *   npm run evaluate:inspect -- scenario/links --reference   # 同时打印参考 diff
 *
 * 输出约定：未变内容原样打印，新增为 {+...+}，删除为 [-...-]。
 */

function render(tokens: Token[]): string {
  let out = '';
  let current: string | null = null;
  const close = () => {
    if (current === 'ins') {
      out += '+}';
    } else if (current === 'del') {
      out += '-]';
    }
  };
  for (const t of tokens) {
    if (t.state !== current) {
      close();
      if (t.state === 'ins') {
        out += '{+';
      } else if (t.state === 'del') {
        out += '[-';
      }
      current = t.state;
    }
    out += t.text;
  }
  close();
  return out;
}

function main(): void {
  const args = process.argv.slice(2);
  const showReference = args.includes('--reference');
  const patterns = args.filter(a => !a.startsWith('--'));
  if (patterns.length === 0) {
    console.error('Usage: npm run evaluate:inspect -- <case-id> [--reference]');
    process.exit(1);
  }
  const cases = filterCases(loadCases().concat(stressCases()), patterns);
  if (cases.length === 0) {
    console.error(`No case matches ${patterns.join(', ')}`);
    process.exit(1);
  }
  for (const c of cases) {
    const oldAst = markdownToAst(c.oldMarkdown);
    const newAst = markdownToAst(c.newMarkdown);
    const diffAst = diffMarkdownAst(markdownToAst(c.oldMarkdown), markdownToAst(c.newMarkdown));
    const { metrics, diffTokens, diagnostics } = measure({ diffAst, oldAst, newAst, perfMs: 0 });

    console.log(`\n=== ${c.id} ===`);
    if (c.spec.description) {
      console.log(c.spec.description);
    }
    console.log(
      `correct=${metrics.correct} (new=${metrics.newCorrect} old=${metrics.oldCorrect}) ` +
      `eff=${metrics.efficiency.toFixed(3)} coh=${metrics.cohesion.toFixed(3)} ` +
      `changed=${metrics.algo.ins + metrics.algo.del} ref=${metrics.reference.ins + metrics.reference.del} ` +
      `hunks=${metrics.algo.hunks} ref=${metrics.reference.hunks}`,
    );
    for (const d of diagnostics) {
      console.log(`! ${d}`);
    }
    console.log('\n-- algorithm --');
    console.log(render(diffTokens));
    if (showReference) {
      const oldTokens = flatten(oldAst);
      const newTokens = flatten(newAst);
      const states = referenceStates(oldTokens, newTokens);
      // 参考 diff 的状态序列与 old/new token 交错：del 取自旧侧，eq/ins 取自新侧
      const merged: Token[] = [];
      let oi = 0;
      let ni = 0;
      for (const s of states) {
        if (s === 'del') {
          merged.push({ ...oldTokens[oi++], state: 'del' });
        } else if (s === 'ins') {
          merged.push({ ...newTokens[ni++], state: 'ins' });
        } else {
          oi++;
          merged.push({ ...newTokens[ni++], state: 'eq' });
        }
      }
      console.log('\n-- reference --');
      console.log(render(merged));
    }
  }
}

main();
