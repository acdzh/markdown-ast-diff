---
name: "trae-e2e-testing-report"
description: "将分析阶段的原始指标数据整理成飞书对比报告"
---

接收 analyze 阶段输出的原始数据，整理成飞书文档评测报告，返回报告 URL 给 LOOP。

## 准备工作区

创建分支 `eval/report/<YYYYMMDD>/<HHmmss>/$CHAT_SESSION_ID`（`$CHAT_SESSION_ID` 取自环境变量）并切换过去。中间产物（metrics 副本、报告 markdown 草稿等）写到仓库下的 `artifacts/report/`。

## 输入

由 LOOP 注入：
- analyze 阶段的完整结构化输出（`metrics.json`，结构见 `skills/trae-e2e-testing-analyze/SKILL.md`）以及 analyze 报告的问题清单
- 评测计划信息（group 列表、`baseline_group`、评测集、case 列表、`repeat`）
- 中间分支清单：execute 每个 session 的存档分支（`results[].branch`，按 group / suite / case / run 对应）、analyze session 的存档分支（`branch`）

## 数据规则

- 报告里的每个数字都必须来自 `metrics.json` 或由其中字段计算得出，禁止估算或补数。百分比变化、占比、合计用脚本计算，不要心算
- 字段缺失（如 case 带 `analyze_error`）时，表格中填写「—」，并在该节下方注明原因
- 时间统一保留 1 位小数，单位为秒（超过 120 秒时同时给出分钟）；比例保留 2 位小数
- 下文的 `T` 指 `groups.<label>.totals`，`C` 指 `groups.<label>.cases[i]`
- **成功率只用判定结果**（`T.judge.success_rate`，判定标准：https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe）。成功率 = PASS / (PASS + FAIL)，INVALID_TASK 和 ENV_BLOCKED 不计入分母。execute 自报的 `status` 是「产品验收结论」（产品有没有 bug），只在明细里作为参考列，不能当成功率
- 有 case 未判定（`T.judge.unjudged_count > 0`）时，在总览表下注明，并说明成功率只基于已判定的 case

## 报告结构

### 中间产物分支

报告开头放这一节，列出本次评测全部存档分支，便于回溯。分支链接统一指向 Codebase：

```
https://code.byted.org/ide/trae-e2e-testing/tree/<分支名>
```

链接文本就是分支名，格式示例：[eval/report/20261021/214839/6ad7e1742ee7895c08f68de2](https://code.byted.org/ide/trae-e2e-testing/tree/eval/report/20261021/214839/6ad7e1742ee7895c08f68de2)

按阶段分组：

- **execute**：每个 group × case × run 的 session 一行（分支名 + 链接），同一 case 的各组排在一起；分支名缺失（session 异常退出）时写「未生成」。报告只列分支链接，不展示录屏等中间文件；需要看录屏时自行进入对应分支的 `artifacts/execute/` 目录查找
- **analyze**：analyze session 的分支（一个链接）
- **report**：本次 report session 自己的分支（准备工作区创建并 push 的 `eval/report/...`，链接同样写入报告）

### 测试内容

- 评测集说明
- 各组执行条件（label、prompt_injection、trae 版本、tde 版本、环境）
- 基准组（`baseline_group`），重复执行次数（`repeat`）
- 各组 Session ID 列表（带 trace 链接：`C.trace_url`）
- 判定标准：直接放链接 https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe，并写一句「成功率 = PASS / (PASS + FAIL)，INVALID_TASK 和 ENV_BLOCKED 不计入分母」
- 数据质量说明：analyze 报告的问题（缺少标记、unknown 占比高、未判定、判定与自报不一致、analyze_error），没有问题时写「无」

### 执行结果总览

对比各组的汇总指标：

| 指标 | 来源字段 | 组 A | 组 B | B vs A |
|---|---|---|---|---|
| 成功率（判定） | `T.judge.success_rate` | | | |
| PASS / FAIL / INVALID_TASK / ENV_BLOCKED | `T.judge.verdict_counts` | | | |
| 产品验收通过数 / 总数（自报，仅参考） | `T.self_reported.status_counts.passed` / `T.case_count` | | | |
| 端到端耗时 | `T.time_s.wall_clock` | | | |
| 总 LLM 延迟 | `T.time_s.llm` | | | |
| 总工具耗时 | `T.time_s.tool` | | | |
| 平均 LLM 延迟 | `T.llm_latency_s.avg` | | | |
| 总 LLM 调用次数 | `T.llm_calls` | | | |
| 工具调用轮次 | `T.tool_rounds` | | | |
| 总工具调用次数 | `T.tool_calls` | | | |
| 工具成功率 | `T.tool_results.success_rate` | | | |
| 总 Token | `T.tokens.total` | | | |

「来源字段」列只用于说明，写入飞书报告时去掉。

端到端耗时 ≈ LLM 延迟 + 工具耗时。工具耗时里包含等待 Trae 内 AI 生成产物的时间，这部分无法从 trace 中可靠地剥离（等待可能藏在命令的等待参数、轮询或反复截图里），所以**不要**自行估算或扣除「等待时间」。需要解释耗时差异时，引用「耗时去向」一节的具体命令。

### Case 明细

每个 Case 在各组中的对比：

| Case | 任务 | 组 A Session ID | 组 A 判定 | 组 A 自报结论 | 组 A 完成步骤 | 组 A 工具调用轮次 | 组 A 耗时 | 组 B ... |
|---|---|---|---|---|---|---|---|

- Session ID 带 trace 链接（`C.trace_url`）
- 判定取 `C.judge.verdict`；非 PASS 时附命中规则 `C.judge.rules_hit`（如「FAIL（C5）」）
- 自报结论取 `C.status`（passed / failed / blocked / error），仅作参考
- 完成步骤 = `C.completed_steps` / `C.total_steps`；有 `C.skipped_steps` 时注明跳过的步骤
- 工具调用轮次 = `C.metrics.tool_rounds`
- 耗时 = `C.metrics.time_s.wall_clock`（括号内为 LLM `C.metrics.time_s.llm` / 工具 `C.metrics.time_s.tool`）
- 判定非 PASS 的 case，在表下逐条列出 `C.judge.reason` 和 `C.judge.failed_points`（验收点、命中规则、证据）
- 判定与自报不一致的 case（如自报 passed、判定 FAIL），单独列出，并附上双方理由（`C.judge.reason`、`C.reason`）

**重复执行（`repeat > 1`）时**：每个 case 每组只占一行，数据取 `T.per_case["<suite>#<case_index>"]`：判定写成「PASS 次数/运行次数」（取 `verdicts`），自报写成「通过次数/运行次数」（取 `self_reported_passed`），耗时写成「中位数（最小~最大）」，LLM / 工具耗时和调用次数写中位数。每次运行的 Session ID 都放进该格，用链接列出。

### 逐 Case 调用 Trace 明细

对每个 Case，展示各组的具体工具调用链。格式：

```
## Case N：{任务名称}

### 组 A

- Session ID：`xxx`（trace 链接）

| 轮次 | 操作类型 | 工具调用链 | 耗时 |
|---|---|---|---|
| 1 | 观察 | Desktop Use.get_app_state → tde ui snapshot | 8.0s |
| 2 | 点击 | Desktop Use.click | 4.5s |
| 3 | 等待 | tde ui wait | 63.0s |
| **合计** | **3 轮，聚合 4 个工具调用** | | **75.5s** |

### 组 B

（同上格式）
```

数据来自 `C.rounds`：每轮对应一次带工具调用的 LLM call，工具调用链 = `ops` 用 ` → ` 连接，耗时 = `duration_s`（LLM 延迟 + 工具耗时）。`failed_tools > 0` 的轮次在操作类型后标「（失败）」。操作类型根据 ops 归纳（观察、点击、输入、等待、导航、检查、启动等），只作阅读辅助，不参与任何统计。

轮次超过 60 时只展开前 20 轮、失败轮次及其前后各 1 轮、最后 10 轮，其余合并为一行「…… 省略 N 轮，共 X 秒」。重复执行时只展开 `run_index=1` 的那次。

### Trace 分析

- **工具调用分布对比表**：`T.tool_category_counts`（Desktop Use / Browser Use / tde 管理 / Shell / Exec / view_image / apply_patch / 其他），各组的计数及占比
- **Desktop Use 子操作细分对比表**：`T.desktop_use_op_counts`（get_app_state / click / press_key / type_text / scroll 等）
- **tde 子命令细分对比表**：`T.tde_op_counts`（ui snapshot / ui click / ui wait 等）
- **操作方式合规**：各 case 的 `C.metrics.ui_mode_observed`，与组的操作方式约束对照，列出违规 case
- **LLM 延迟分布**：`T.llm_latency_s` 的 P25 / P50 / P75 / P90 / P95 / P99 / max
- **首 token 延迟分布**：`T.first_token_latency_s`，同上分位
- **耗时去向**：
  - `T.time_s.tool_by_category`：工具耗时按类别分布（各组的秒数及占比）
  - `T.slowest_tool_rounds`：最耗时的 10 轮工具调用表（Case、类别、耗时、命令摘要 `commands`）。按命令内容说明耗时来自哪里（比如等待产物生成、安装、操作本身慢），但只做定性描述，不汇总成「等待耗时」
- **Token 消耗模式**：`T.tokens` 的 input / output / cache_read / reasoning，各组计数，以及 `cache_hit_rate`
- **模型**：`T.models`

### 工具执行情况

**总览表**：

| 指标 | 来源字段 | 组 A | 组 B |
|---|---|---|---|
| 工具执行总次数 | `T.tool_results.total` | | |
| 成功次数 | `T.tool_results.success` | | |
| 失败次数 | `T.tool_results.failed` | | |
| 结果未知 | `T.tool_results.unknown` + `background` | | |
| 成功率 | `T.tool_results.success_rate`（分母不含未知） | | |

**分工具成功率**：

| 工具 | 组 A (总/失败/失败率) | 组 B (总/失败/失败率) |
|---|---|---|

数据来自 `T.tool_results.by_category`。

**错误归因分布**：

| 归因类别 | 组 A | 组 B | 典型错误 |
|---|---|---|---|
| SDK 问题 | N (X%) | | screenshot_context_missing, ELEMENT_NOT_SUPPORTED |
| AI 使用方式 | N (X%) | | unknown option, ELEMENT_NOT_FOUND |
| 环境问题 | N (X%) | | timeout, auth_failure |
| 未归类 | N (X%) | | |

数据来自 `T.error_attributions`，每个类别下是 label → 次数；占比的分母为该组失败总数。

**高频错误明细**（top N）：

| 错误 | 归因 | 次数 | 影响工具 | 错误信息摘要 |
|---|---|---|---|---|

数据来自 `T.top_errors`（key / attribution / count / tools / sample），取前 10 条。

### 关键发现与结论

用具体数据支撑结论，给出定量对比：

- **效率对比**：效率只在判定为 PASS 的 case 之间比较才有意义。如果两组 PASS 的 case 集合不同，额外给出「两组都 PASS 的 case」的耗时对比。哪组更快/更省 token，具体差多少（如"组 B 比组 A 端到端耗时减少 35.2%，其中 LLM 延迟减少 X%、工具耗时减少 Y%"）。只有一次运行时注明「单次样本，存在随机波动」
- **质量对比**：判定成功率差异；按 `T.judge.rules_hit_counts` 归纳 FAIL 的主要原因（例如 C5 执行方式违规、C3 操作没到达目标、C7 结论缺证据）；自报与判定不一致的情况
- **工具可靠性**：哪类工具失败率最高，SDK 改进方向
- **工具调用模式差异**：各组的操作策略有什么不同（如轮次数、每轮聚合的操作数）

## 组间对比规则

- 基准组取评测计划的 `baseline_group`，未指定时取 `groups` 中的第一组
- **两组**：最后一列为 `<实验组> vs <基准组>` 百分比变化
- **三组以上**：每个非基准组各加一列 `vs 基准组`
- **只有一组**：不做对比，保持所有分析维度
- **计算**：`(实验值 - 基准值) / 基准值 × 100%`

## 多评测集处理

多评测集时按 suite 分节展示，每个 suite 独立的 Case 明细和调用 Trace 明细。汇总指标跨 suite 合并。

## 提交存档

为保证报告里写入的 report 分支链接在回读时已可点开，分两次提交：

1. **创建飞书文档前**：先把已有中间产物（metrics 副本、报告 markdown 草稿）提交并 push，确定本 session 的 `eval/report/...` 分支链接并写入报告「中间产物分支」一节：

```bash
git add -f artifacts/report/
git commit -m "eval(report): <报告标题>（草稿）"
git push origin HEAD
```

2. **飞书文档创建并回读确认后**：把最终草稿再补一次提交（无更新可跳过）：

```bash
git add -f artifacts/report/
git commit -m "eval(report): <报告标题>（定稿）" && git push origin HEAD
```

仅存档，不用于后续流程。

## 输出

报告以飞书文档形式创建，作为 https://bytedance.larkoffice.com/wiki/BoD2waW0riK5gBknXhPcxFVLnCh 的子文档。

创建后回读文档，确认各节内容、表格、链接都已正确写入，特别是开头「中间产物分支」一节里 execute（每个 session）、analyze、report 三类分支链接齐全且可点开（分支名缺失的项按上文写「未生成」），再返回飞书文档 URL 给 LOOP。

报告标题格式：`[日期] Trae E2E 评测报告 - <评测集> (共 N 个 case, M 组对比)`

只有一组时：`[日期] Trae E2E 评测报告 - <评测集> (共 N 个 case)`
