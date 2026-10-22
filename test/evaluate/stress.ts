import type { LoadedCase } from '../utils/cases';

/**
 * 压力用例：程序化生成，不落盘。用于覆盖性能保护分支和规模退化。
 * 生成过程使用固定种子，保证每次运行内容一致。
 */

function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const WORDS = (
  'diff match node tree parse render token stream merge index weight sign hash queue ' +
  'section heading paragraph list item table cell code block quote link image break ' +
  'alpha beta gamma delta epsilon zeta theta kappa lambda sigma omega'
).split(' ');

const HAN = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处理府研质';

function sentence(rand: () => number, han: boolean, words: number): string {
  const parts: string[] = [];
  for (let i = 0; i < words; i++) {
    if (han) {
      const len = 2 + Math.floor(rand() * 3);
      let w = '';
      for (let j = 0; j < len; j++) {
        w += HAN[Math.floor(rand() * HAN.length)];
      }
      parts.push(w);
    } else {
      parts.push(WORDS[Math.floor(rand() * WORDS.length)]);
    }
  }
  return han ? `${parts.join('')}。` : `${parts.join(' ')}.`;
}

interface Block {
  text: string;
}

function generateDoc(rand: () => number, sections: number): Block[] {
  const blocks: Block[] = [];
  for (let s = 0; s < sections; s++) {
    const han = s % 2 === 0;
    blocks.push({ text: `## Section ${s + 1}` });
    const paras = 3 + Math.floor(rand() * 3);
    for (let p = 0; p < paras; p++) {
      blocks.push({ text: [sentence(rand, han, 12), sentence(rand, han, 10)].join(' ') });
    }
    if (s % 3 === 0) {
      const items: string[] = [];
      for (let i = 0; i < 5; i++) {
        items.push(`- ${sentence(rand, han, 6)}`);
      }
      blocks.push({ text: items.join('\n') });
    }
    if (s % 4 === 1) {
      const rows = ['| key | value | note |', '| --- | --- | --- |'];
      for (let r = 0; r < 6; r++) {
        rows.push(`| k${s}-${r} | ${Math.floor(rand() * 1000)} | ${sentence(rand, false, 3)} |`);
      }
      blocks.push({ text: rows.join('\n') });
    }
    if (s % 5 === 2) {
      const lines: string[] = [];
      for (let l = 0; l < 12; l++) {
        lines.push(`const v${l} = compute(${Math.floor(rand() * 100)}, "${WORDS[l % WORDS.length]}");`);
      }
      blocks.push({ text: ['```ts', ...lines, '```'].join('\n') });
    }
  }
  return blocks;
}

function render(blocks: Block[]): string {
  return `${blocks.map(b => b.text).join('\n\n')}\n`;
}

/**
 * 在文档中稀疏地做小修改：改词、删段、插段。
 */
function sparseEdit(rand: () => number, blocks: Block[], edits: number): Block[] {
  const out = blocks.map(b => ({ ...b }));
  for (let i = 0; i < edits; i++) {
    const idx = Math.floor(rand() * out.length);
    const target = out[idx];
    if (!target || target.text.startsWith('#') || target.text.startsWith('```') || target.text.startsWith('|')) {
      continue;
    }
    const kind = i % 3;
    if (kind === 0) {
      target.text = target.text.replace(/\b(\w+)\b/, 'EDITED');
      if (!target.text.includes('EDITED')) {
        target.text = `修改${target.text}`;
      }
    } else if (kind === 1) {
      out.splice(idx, 1);
    } else {
      out.splice(idx, 0, { text: `Inserted paragraph number ${i} with fresh content.` });
    }
  }
  return out;
}

function makeSparseCase(id: string, seed: number, sections: number, edits: number, budget: number, description: string): LoadedCase {
  const rand = mulberry32(seed);
  const blocks = generateDoc(rand, sections);
  const edited = sparseEdit(rand, blocks, edits);
  return {
    id,
    layer: 'stress',
    oldMarkdown: render(blocks),
    newMarkdown: render(edited),
    spec: {
      description,
      capability: 'perf.sparse',
      perfBudgetMs: budget,
      expect: { minEfficiency: 0.3 },
    },
  };
}

function makeLongParagraphCase(): LoadedCase {
  const rand = mulberry32(7);
  const parts: string[] = [];
  while (parts.join(' ').length < 30_000) {
    parts.push(sentence(rand, false, 15));
  }
  const oldText = parts.join(' ');
  const mid = Math.floor(parts.length / 2);
  const edited = [...parts];
  edited[mid] = 'This single sentence in the middle was rewritten.';
  return {
    id: 'stress/long-paragraph-30k',
    layer: 'stress',
    oldMarkdown: `# Long\n\n${oldText}\n`,
    newMarkdown: `# Long\n\n${edited.join(' ')}\n`,
    spec: {
      description: '单个 30k 字符段落中间改一句，触发长文本性能保护分支',
      capability: 'perf.long-text',
      perfBudgetMs: 2000,
      knownIssue: '中间那句重写被静默丢弃：整段标为 diffUnchanged，输出只有新文本（oldCorrect=false）',
    },
  };
}

function makeRepeatedBlocksCase(): LoadedCase {
  const para = 'Repeated boilerplate paragraph that appears many times in the document.';
  const oldBlocks: string[] = [];
  for (let i = 0; i < 300; i++) {
    oldBlocks.push(para);
  }
  const newBlocks = [...oldBlocks];
  newBlocks.splice(150, 0, 'A unique paragraph inserted in the middle.');
  newBlocks.splice(20, 1);
  return {
    id: 'stress/repeated-300',
    layer: 'stress',
    oldMarkdown: `${oldBlocks.join('\n\n')}\n`,
    newMarkdown: `${newBlocks.join('\n\n')}\n`,
    spec: {
      description: '300 个完全相同的段落，删 1 插 1：考察大量同签名候选时的复杂度和结果',
      capability: 'perf.repeated',
      perfBudgetMs: 2000,
      // 插入段落里的 "in the" 与样板段落共词，被匹配为 eq，插入内容拆成两段 ins 是合理结果
      expect: { ins: ['Auniqueparagraphinserted'], maxChangedTokens: 15 },
    },
  };
}

export function stressCases(): LoadedCase[] {
  return [
    makeSparseCase('stress/sparse-2k-lines', 1, 120, 12, 500, '约 2000 行文档，12 处稀疏修改'),
    makeSparseCase('stress/sparse-8k-lines', 2, 480, 30, 3000, '约 8000 行文档，30 处稀疏修改'),
    makeLongParagraphCase(),
    makeRepeatedBlocksCase(),
  ];
}
