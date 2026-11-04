/**
 * 代码块的行级 diff。
 *
 * 背景
 * ----
 * `codeBlockMatchPass` 会把同语言、相似度达标的新旧代码块直接配对，配对后
 * `code.value` 被新内容原地覆盖，不产生任何 diff 标记 —— 也就是说代码块
 * 在渲染层完全看不出改动过。
 *
 * 这里在配对阶段补一份行级差异，写到 `node.data.diffLines`，由渲染层
 * （如 VS Code CodeEditorWidget 的行装饰）消费。
 *
 * 采用行级而非字符级：
 * - 代码以行为语义单位，行内字符级 diff 噪音大、可读性差；
 * - 编辑器行装饰天然按行工作，行级结果可以直接映射到 Range。
 */
import DiffMatchPatch from 'diff-match-patch';

import { DiffType } from '../types/base';

/** 单行的 diff 类型：unchanged 表示未变，ins / del 表示该行新增或删除 */
export type CodeLineDiffType = DiffType | 'unchanged';

export interface CodeLineDiff {
    /** 该行在新内容中的行号（1-based）；纯删除行为 null */
    lineNumber: number | null;
    /** 该行在旧内容中的行号（1-based）；纯新增行为 null */
    oldLineNumber: number | null;
    type: CodeLineDiffType;
    /** 行内容，不含换行符 */
    text: string;
}

const dmp = new DiffMatchPatch();

/**
 * 逐行比较新旧代码，返回带行号的行级差异列表。
 *
 * 输出顺序按新内容的行序排列，纯删除的行紧跟在其被删除位置的上一行之后，
 * 便于渲染层按顺序构造装饰区间。
 */
export function diffCodeLines(oldCode: string, newCode: string): CodeLineDiff[] {
    const oldLines = splitLines(oldCode);
    const newLines = splitLines(newCode);
    const result: CodeLineDiff[] = [];

    // diff_linesToChars_ 把行映射成字符，交给 dmp 做字符级比较，
    // 再还原成行，避免逐行 LCS 的手写成本。
    // 注意它返回的是 { chars1, chars2, lineArray } 对象，不是数组。
    const { chars1, chars2, lineArray } = dmp.diff_linesToChars_(oldCode, newCode);
    const diffs = dmp.diff_main(chars1, chars2, false);
    dmp.diff_charsToLines_(diffs, lineArray);

    let oldCursor = 0;
    let newCursor = 0;

    for (const [op, text] of diffs as Array<[number, string]>) {
        const lines = splitLines(text);

        switch (op) {
            case DiffMatchPatch.DIFF_EQUAL: {
                for (const line of lines) {
                    result.push({
                        lineNumber: newCursor + 1,
                        oldLineNumber: oldCursor + 1,
                        type: 'unchanged',
                        text: line,
                    });
                    oldCursor += 1;
                    newCursor += 1;
                }
                break;
            }
            case DiffMatchPatch.DIFF_DELETE: {
                for (const line of lines) {
                    result.push({
                        lineNumber: null,
                        oldLineNumber: oldCursor + 1,
                        type: DiffType.Del,
                        text: line,
                    });
                    oldCursor += 1;
                }
                break;
            }
            case DiffMatchPatch.DIFF_INSERT: {
                for (const line of lines) {
                    result.push({
                        lineNumber: newCursor + 1,
                        oldLineNumber: null,
                        type: DiffType.Ins,
                        text: line,
                    });
                    newCursor += 1;
                }
                break;
            }
            default:
                break;
        }
    }

    // 行数兜底 + 按新内容行序重排。
    // dmp 会把连续的删除/新增聚成块（先 del 后 ins），但对渲染而言
    // 需要「先看到删除行、紧接着新增行」并与新行号对齐，否则行号会跳。
    return reconcileLineNumbers(result, oldLines.length, newLines.length);
}

/** 按 \n 切分，保留空行；不做 trim，避免破坏缩进语义 */
function splitLines(text: string): string[] {
    if (text === '') {
        return [];
    }
    const normalized = text.endsWith('\n') ? text.slice(0, -1) : text;
    return normalized.split('\n');
}

/**
 * 校正行号，确保落在有效范围内。
 *
 * diff 结果在边界情况（如文件末尾换行差异）下可能多产生一行，
 * 这里按实际行数收敛，避免渲染层拿到越界行号。
 */
function reconcileLineNumbers(
    diffs: CodeLineDiff[],
    oldLineCount: number,
    newLineCount: number,
): CodeLineDiff[] {
    return diffs.filter((d) => {
        if (d.type === DiffType.Del) {
            return d.oldLineNumber !== null && d.oldLineNumber <= oldLineCount;
        }
        return d.lineNumber !== null && d.lineNumber <= newLineCount;
    });
}

/** 判断一组行级 diff 中是否存在变更 */
export function hasLineChanges(diffs: CodeLineDiff[]): boolean {
    return diffs.some((d) => d.type !== 'unchanged');
}
