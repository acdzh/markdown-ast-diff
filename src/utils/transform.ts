import type { Node } from 'unist';
import { visit } from 'unist-util-visit';
import { DiffNodeType, DiffType } from '../types/base';
import { isInlineElement, replaceChildNode } from './node';

type NodeWithAlign = Node & { align?: unknown[] };

/** 从 cell 中取出纯文本（用于比较与展示） */
function cellPlainText(cell: Node): string {
  let text = '';
  const walk = (node: Node): void => {
    const value = (node as unknown as { value?: unknown }).value;
    if (typeof value === 'string') {
      text += value;
    }
    (node.children as Node[] | undefined)?.forEach(walk);
  };
  walk(cell);
  return text;
}

/**
 * 修正表格行内因 diff 产生的多余单元格，并按变化幅度选择展示方式。
 *
 * 背景
 * ----
 * 表格是**固定网格**：每行 cell 数必须等于列数，否则多余的 cell 会被丢弃，
 * 表现为表格错位。而 diff 在单元格级别会产生「删除格 + 新增格」两个节点，例如：
 *
 *   old: 1 2 3 4 5     new: 1 a 2 3 5
 *   diff => 1, [ins]a, 2, 3, [del]4, 5     —— 6 个 cell，但只有 5 列
 *
 * 处理策略（按「该行有多少格发生了变化」分流）
 * ------------------------------------------
 * 1. 变化格数 <= 总格数的一半 → 逐格合并：
 *    把成对的 del/ins 合进同一个 cell，内部生成 inlineDel + inlineIns。
 *    典型场景：只改了一两格内容，能精确看到「旧值 → 新值」。
 *
 * 2. 变化格数 > 一半 → 整行标记：
 *    该行标 del（旧行完整保留）+ 标 ins（新行完整保留）。
 *    典型场景：行内插入/删除项导致后续全部位移，
 *    此时逐格合并会把「插入」误表达成「替换」，语义不准；
 *    整行标记既准确又不破坏列数。
 */
function normalizeTableRows(ast: Node): void {
  visit(ast, 'table', (table: Node) => {
    const columnCount = ((table as NodeWithAlign).align as unknown[] | undefined)?.length ?? 0;
    if (columnCount === 0) {
      return true;
    }

    const rows = (table.children as Node[] | undefined) ?? [];
    const result: Node[] = [];

    for (const row of rows) {
      const cells = (row.children as Node[] | undefined) ?? [];
      const diffOf = (c: Node | undefined): string | undefined =>
        (c?.data as { diff?: string } | undefined)?.diff;

      const hasDiff = cells.some((c) => diffOf(c) === DiffType.Ins || diffOf(c) === DiffType.Del);
      /// 已经对齐且无 diff 标记 → 原样保留
      if (cells.length <= columnCount && !hasDiff) {
        result.push(row);
        continue;
      }
      /// 已对齐但有 diff（如整行删除、纯删除一格）→ 直接保留标记
      if (cells.length <= columnCount) {
        /// 该行存在「一侧有另一侧没有」的格，说明是行的插入/删除，
        /// 若仅有 del 或仅有 ins，保留原标记即可（对齐不受影响）
        const onlyDel = cells.some((c) => diffOf(c) === DiffType.Del) &&
          !cells.some((c) => diffOf(c) === DiffType.Ins);
        const onlyIns = cells.some((c) => diffOf(c) === DiffType.Ins) &&
          !cells.some((c) => diffOf(c) === DiffType.Del);
        if (onlyDel || onlyIns) {
          result.push(row);
          continue;
        }
      }

      /// 判断 del/ins 是否都「成对相邻」——即纯粹的格内替换
      let allPaired = true;
      for (let i = 0; i < cells.length; i += 1) {
        const d = diffOf(cells[i]);
        if (d === DiffType.Del) {
          if (diffOf(cells[i + 1]) !== DiffType.Ins) {
            allPaired = false;
            break;
          }
        } else if (d === DiffType.Ins) {
          if (diffOf(cells[i - 1]) !== DiffType.Del) {
            allPaired = false;
            break;
          }
        }
      }

      if (allPaired) {
        /// 纯替换：逐格合并成 inline，列数不变且能看到新旧值
        const merged = mergeRowCells(cells, columnCount);
        result.push(merged ? ({ ...row, children: merged, data: {} } as Node) : row);
        continue;
      }

      /// 存在孤立的新增/删除 → 行内发生了插入或删除，后续格子整体位移。
      /// 逐格合并会把「插入」误表达成「替换」，因此改用整行标记。
      const delCells: Node[] = [];
      const insCells: Node[] = [];
      for (const c of cells) {
        const d = diffOf(c);
        if (d === DiffType.Del) {
          delCells.push({ ...c, data: {} } as Node);
        } else if (d === DiffType.Ins) {
          insCells.push({ ...c, data: {} } as Node);
        } else {
          /// 未变的格子在两侧各留一份，使新旧两行都完整
          delCells.push({ ...c, data: {} } as Node);
          insCells.push({ ...c, data: {} } as Node);
        }
      }

      /// 整行 del + 整行 ins；长度不匹配时退回逐格合并以保证列数
      if (delCells.length === columnCount && insCells.length === columnCount) {
        result.push({ ...row, children: delCells, data: { diff: DiffType.Del } } as Node);
        result.push({ ...row, children: insCells, data: { diff: DiffType.Ins } } as Node);
      } else {
        const merged = mergeRowCells(cells, columnCount);
        result.push(merged ? ({ ...row, children: merged, data: {} } as Node) : row);
      }
    }

    table.children = result;
    return true;
  });
}

/**
 * 把一行的 del/ins 序列压缩到 columnCount 个 cell 内。
 *
 * 成对的 del+ins 合进同一格，内部生成 inlineDel + inlineIns；
 * 纯 del（真的少了一列）或纯 ins（真的多了一列）保留原样。
 * 返回 null 表示压缩后仍超出列数，交由调用方兜底。
 */
function mergeRowCells(cells: Node[], columnCount: number): Node[] | null {
  const diffOf = (c: Node): string | undefined =>
    (c.data as { diff?: string } | undefined)?.diff;

  const result: Node[] = [];
  let i = 0;

  while (i < cells.length) {
    const current = cells[i];

    if (diffOf(current) === DiffType.Del) {
      const dels: Node[] = [];
      while (i < cells.length && diffOf(cells[i]) === DiffType.Del) {
        dels.push(cells[i]);
        i += 1;
      }
      const inss: Node[] = [];
      while (i < cells.length && diffOf(cells[i]) === DiffType.Ins) {
        inss.push(cells[i]);
        i += 1;
      }

      if (inss.length === 0) {
        result.push(...dels);
        continue;
      }

      const pairCount = Math.max(dels.length, inss.length);
      for (let p = 0; p < pairCount; p += 1) {
        const delCell = dels[p];
        const insCell = inss[p];
        if (delCell && insCell) {
          result.push({
            ...insCell,
            data: {},
            children: [
              { type: 'inlineDel', children: (delCell.children ?? []) as Node[] } as Node,
              { type: 'inlineIns', children: (insCell.children ?? []) as Node[] } as Node,
            ],
          } as Node);
        } else if (insCell) {
          result.push(insCell);
        } else if (delCell) {
          result.push(delCell);
        }
      }
      continue;
    }

    if (diffOf(current) === DiffType.Ins) {
      /// 单独的 ins（前无 del）：与下一个未变格合并，避免多出一列
      const next = cells[i + 1];
      if (next && diffOf(next) === undefined && cellPlainText(next) === '') {
        result.push(current);
        i += 1;
        continue;
      }
      result.push(current);
      i += 1;
      continue;
    }

    result.push(current);
    i += 1;
  }

  return result.length <= columnCount ? result : null;
}

/**
 * 把 `table` 节点的 `align` 下发给其下的 `tableRow`。
 *
 * 背景：mdast 的 table 只把列对齐信息放在 `table.align` 上，row / cell 上并没有。
 * milkdown 的 gfm schema 解析 `tableRow` 时会读取 `node.align[i]`（见
 * `@milkdown/preset-gfm` 的 table/schema.ts），而它的 table runner 会为每行手动
 * 注入 align。若该行内部结构被包裹过（例如旧实现用 ins/del 包裹），注入逻辑不会
 * 穿透包裹节点，内层 `tableRow.align` 为 undefined，于是 `align[i]` 抛
 * "Cannot read properties of undefined (reading '0')"。
 *
 * 因此转换完成后统一补一次 align 兜底。
 */
function propagateTableAlign(ast: Node): void {
  visit(ast, 'table', (node: Node) => {
    const align = (node as NodeWithAlign).align;
    if (!Array.isArray(align)) {
      return true;
    }

    const patchRow = (candidate: Node): void => {
      if (candidate.type === 'tableRow' && !(candidate as NodeWithAlign).align) {
        (candidate as NodeWithAlign).align = align;
      }
      (candidate.children as Node[] | undefined)?.forEach(patchRow);
    };

    (node.children as Node[] | undefined)?.forEach(patchRow);
    return true;
  });
}

function diffTypeToDiffNodeType(diffType: DiffType, isInline?: boolean): DiffNodeType {
  if (isInline) {
    switch (diffType) {
      case DiffType.Ins:
        return DiffNodeType.InlineIns;
      case DiffType.Del:
        return DiffNodeType.InlineDel;
    }
  } else {
    switch (diffType) {
      case DiffType.Ins:
        return DiffNodeType.Ins;
      case DiffType.Del:
        return DiffNodeType.Del;
    }
  }
}

function diffNodeTypeToDiffType(diffNodeType: DiffNodeType): DiffType {
  switch (diffNodeType) {
    case DiffNodeType.Ins:
    case DiffNodeType.InlineIns:
      return DiffType.Ins;
    case DiffNodeType.Del:
    case DiffNodeType.InlineDel:
      return DiffType.Del;
  }
}

/**
 * 
 * 将带有 data.diff 属性的节点转换为 ins(inlineIns) 或 del(inlineDel) 包裹的普通节点
 * （listItem 不会被处理）
 * 
 * 示例：
 * 原始节点：
 * ```json
 * {
 *   "type": "text",
 *   "value": "子步骤 2",
 *   "data": {
 *     "diff": "remove"
 *   }
 * }
 * ```
 * 
 * 转换后：
 * ```json
 * {
 *   "type": "del",
 *   "children": [
 *     {
 *       "type": "text",
 *       "value": "子步骤 2"
 *     }
 *   ]
 * }
 * ```
 */
/**
 * 表格内部的节点不能用 ins / del 包裹。
 *
 * 原因：mdast 的 table schema 是严格结构化的 ——
 *   table      content: 'table_header_row table_row+'
 *   tableRow   content: '(table_cell)*'
 * 一旦把 `ins` / `del` 插进 `tableRow` 或 `table` 之间，就违反了 content 约束。
 * milkdown / remark 在构造节点时会直接失败，或者把多余的 ins 当成一个额外单元格，
 * 表现为「表格凭空多出一列、单元格整体错位」。
 *
 * 因此表格内的 diff 改用 `data.diff` 标记，由渲染层（如 milkdown 的表格 schema）
 * 自行决定样式，不再改变 AST 结构。
 */
const TABLE_STRUCTURAL_TYPES: ReadonlySet<string> = new Set(['table', 'tableRow', 'tableCell']);

export function transformAstWithDiffDataToAstWithDiffNode(ast: Node): Node {
  visit(ast,  (node: Node, _?: number, parent?: Node) => {
    if (node.type === 'listItem'|| node.type === DiffType.Ins || node.type === DiffType.Del) {
      return true;
    }

    if (!node.data?.diff) {
      return true;
    }

    const diff = node.data.diff as DiffType;

    // 表格结构节点保持原类型，只打 data.diff 标记，避免破坏 content 约束
    if (TABLE_STRUCTURAL_TYPES.has(node.type)) {
      node.data.diff = diff;
      return true;
    }

    delete node.data.diff;

    const isInline = isInlineElement(node);
    replaceChildNode(parent, node, { type: diffTypeToDiffNodeType(diff, isInline), children: [node] } as Node);

    return true;
  });

  // 表格行的 cell 数量对齐到列数，避免因 del 占位导致错列
  normalizeTableRows(ast);

  // 包裹后再补一次表格行对齐信息，避免 tableRow.align 丢失
  propagateTableAlign(ast);

  return ast;
}

/**
 * 
 * 将 ins 或 del 包裹的普通节点转换为 data.diff 属性的普通节点
 * 
 * 示例：
 * 原始节点：
 * ```json
 *  {
 *   "type": "del",
 *   "children": [
 *     {
 *       "type": "text",
 *       "value": "子步骤 2"
 *     }
 *   ]
 * }
 * ```
 * 
 * 转换后：
 * ```json
 * {
 *   "type": "text",
 *   "value": "子步骤 2",
 *   "data": {
 *     "diff": "remove"
 *   }
 * }
 * ```
 */
export function transformAstWithDiffNodeToAstWithDiffData(ast: Node): Node {
  visit(ast, [DiffNodeType.Ins, DiffNodeType.Del, DiffNodeType.InlineIns, DiffNodeType.InlineDel], (node: Node, _?: number, parent?: Node) => {
    if (!node.children) {
      return true;
    }
    const diff = diffNodeTypeToDiffType(node.type as DiffNodeType);
    node['children'].forEach((child: Node) => {
      if (child.type !== DiffType.Del && child.type !== DiffType.Ins) {
        if (!child.data) {
          child.data = {};
        }
        child.data.diff = diff;
      }
    });
    replaceChildNode(parent, node, node['children']);
    return true;
  });
  return ast;
}
