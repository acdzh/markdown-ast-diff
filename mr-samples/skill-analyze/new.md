---
name: "trae-e2e-testing-analyze"
description: "拉取执行 session 的 trace，按判定文档判定每个 case 是否符合预期，并提取效率指标"
---

从执行阶段收集的 session ID 中拉取 trace，做两件事，结果一起返回给 LOOP：

1. **判定**：按 [如何判定 E2E 验收是否执行符合预期](https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe) 逐个判定 case，结果为 `PASS` / `FAIL` / `INVALID_TASK` / `ENV_BLOCKED`。**成功率以判定结果为准**：成功率 = PASS / (PASS + FAIL)，INVALID_TASK 和 ENV_BLOCKED 不计入分母。execute 自报的 `status` 只作参考，不能顶替判定结果
2. **效率指标**：用评测仓库的 `scripts/analyze.py` 计算

**指标口径以脚本为准，禁止临时手写提取逻辑，评测运行中也不要改脚本**，否则各组之间的数字不能对比。发现脚本有 bug 或缺口时，写进问题清单，由本地开发时修复（修复时跑 `tests/test_analyze.py`）。

拉取和分析 trace 的基础用法参考：https://bytedance.larkoffice.com/wiki/N22fwXmeAi5FNRkJb90cFMa6nRh

## 输入

由 LOOP 注入：execute 阶段的完整输出（results 列表，每项含 group_label、suite、case_index、case_name、run_index、session_id、branch、status、completed_steps、failed_step、skipped_steps、reason）。`branch` 只透传给 report 生成分支链接，不参与 trace 分析。

## 执行流程

**步骤 1**：准备工作区

创建分支 `eval/analyze/<YYYYMMDD>/<HHmmss>/$CHAT_SESSION_ID`（`$CHAT_SESSION_ID` 取自环境变量）并切换过去。

把 LOOP 注入的 execute 输出原样写入 `artifacts/analyze/execute_results.json`。

**步骤 2**：拉取 trace、提取指标、导出判定输入

```bash
python3 scripts/analyze.py \
  --input artifacts/analyze/execute_results.json \
  --output artifacts/analyze/metrics.json \
  --judge-dir artifacts/analyze/judge \
  --trace-dir traces \
  --refresh
```

**trace 同步延迟**（重要，不要手动反复试拉）：

- 刚结束的 session，trace 最终会同步到 boe 和 cn 两个站点，但有延迟，通常半小时以上；短时间内可能完全查不到，也可能只查到元数据、messages 为空。
- 脚本默认会自动重试：每 5 分钟一轮，每轮**显式用 `--site` 依次查 boe、cn、sg 三个站点**（trae-pa 不带 `--site` 时只自动探测 cn/sg，会漏掉 boe），任一站点先拿到 messages 就算成功，总等待上限 2 小时。stderr 会持续打印等待进度，保持会话不要中断。
- 到上限仍拉不到时该 case 记 `analyze_error`，其他 case 继续，不影响整体。
- 正常情况不要加 `--site`：三个站点都会查。只有已知 trace 只在某个站点时才用 `--site` 限定。
- 等待参数可用 `--pull-interval <秒>`、`--pull-timeout <分钟>` 调整，但正式评测保持默认。

- 每个 case 会在 `artifacts/analyze/judge/` 下生成两个文件：
  - `<group>__<suite>__case_<N>__run_<R>.transcript.md`：判定用的精简轨迹，包括用户消息（含 Skill 和执行约束）、执行区间内每轮的模型回复、工具命令和截断后的工具结果、区间外的命令（用于判断环境问题），以及脚本观测到的操作方式
  - 同名的 `.verdict.json`：待填写的判定模板。重跑时已有的判定不会被覆盖

- 依赖 `trae-pa`（即 `@byted/trae-prompt-analyzer-cache`），脚本内部逐个执行 `trae-pa pull --session <id> --output traces --refresh`（带重试和站点回退）
- trace 原始数据落在 `traces/`（已在 `.gitignore`，单个 session 可达 GB 级，**不要提交**）
- 单个 session 拉取（等待 2 小时后仍失败）或解析失败不会中断，该 case 会带 `analyze_error` 字段；脚本退出码为 1 表示至少有一个失败
- 有 `analyze_error` 时区分原因：等待超时多为 trace 长期未落库（保留错误交给 report 说明）；认证/网络问题先修 `trae-pa auth` 或网络，再重跑脚本。

**步骤 3**：逐个判定

先完整读一遍判定文档：https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe

然后对每个 case，读它的 `transcript.md`，按文档的判定流程（Step 1 提取验收意图和执行约束 → Step 2 检查环境 → Step 3 按 C0→C8 顺序逐条检查，命中即停）给出判定，写回同名的 `verdict.json`：

```json
{
  "case_key": "cu__agent_window__case_1__run_1",
  "session_id": "6a8694bc5f9e19624242ac32",
  "judge_doc": "https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe",
  "verdict": "FAIL",
  "rules_hit": ["C5"],
  "failed_points": [{"point": "步骤 7：确认 AI 能读取附件", "rules": ["C5"], "evidence": "call 42 读取 test.txt 源文件推断内容，未通过 UI 观察回复"}],
  "reason": "附件验收点改走读文件推断，不符合 Desktop Use 组只能用 UI 操作的约束（C5）"
}
```

- `verdict`：只能是 `PASS` / `FAIL` / `INVALID_TASK` / `ENV_BLOCKED`
- `rules_hit`：命中的规则编号（C0~C8）。`INVALID_TASK` 必须含 C0，`ENV_BLOCKED` 必须含 C1，`PASS` 留空
- `failed_points`：仅 `FAIL` 时必填，列出每个未通过的验收点、命中的规则和 trace 证据（写 call 编号）
- `reason`：一句话说明理由

判定要点：
- 验收点来自 transcript 里的 case 步骤和验收标准，执行约束来自用户消息里的 `prompt_injection` 和 Skill
- 不采信 transcript 头部的「execute 自报结果」（C2），只看轨迹证据
- transcript 头部的「观测到的操作方式」是脚本统计出来的，可以作为 C5 的线索，但最终以轨迹内容为准
- 工具结果在 transcript 里有截断。截断影响判断时，到 `traces/trae-session-<id>/` 目录下查看完整内容。每个 call 标题里写着 `message M / call K`：工具参数用 `trae-pa show --message M --call K --view tools --full`；完整的工具结果在下一条 call 的 prompt 末尾，用 `trae-pa show --message M --call K+1 --view prompt --full | tail -n 200`（prompt 很大，不要整份输出）
- 正式评测的单个 case 一般在几万 token 以内。如果 transcript 太大（比如缺少起止标记，退化为整个 session），先用 `grep -n "^### call\|^## 用户消息"` 看结构，再按需分段读，不要整份读进上下文
- case 很多时可以并行判定，但每个判定者都必须先读判定文档

全部判完后合并结果：

```bash
python3 scripts/analyze.py --merge-verdicts artifacts/analyze/judge --metrics artifacts/analyze/metrics.json
```

脚本会校验每个 verdict.json（取值是否合法、必填字段是否齐全），把判定合并进 `metrics.json` 并重算成功率。退出码非 0 时，按 stderr 提示修正对应的 verdict.json 后重跑，直到所有已分析的 case 都有合法判定。

**步骤 4**：检查结果

逐项检查 `metrics.json`：
- 每个 case 的 `window.warnings`：缺少起止标记时脚本会退化为统计整个 session，指标会混入环境准备，需在输出里标注
- 每个 case 的 `metrics.tool_results.unknown`：占比明显偏高（如超过 10%）说明结果块对齐失败，需要排查
- 每个 group 的 `totals.judge.unjudged_count` 应为 0（`analyze_error` 的 case 没有 trace，不需要判定）
- 判定与自报不一致的 case（例如自报 passed、判定 FAIL），在问题清单里逐条列出
- `error_attributions.unknown` 中的高频错误：如果是明确的新类别，写进问题清单，后续补到脚本的关键字表里

**步骤 5**：提交存档

```bash
git add -f artifacts/analyze/
git commit -m "eval(analyze): <评测集> <分组列表>"
git push origin HEAD
```

只提交 `artifacts/analyze/`（含 judge 目录下的 transcript 和 verdict），不要用 `git add -f .`，避免把 `traces/` 提交进去。

**步骤 6**：输出

直接返回 `metrics.json` 的完整内容给 LOOP，并附上步骤 4 发现的问题清单和本 session 的存档分支完整名（`branch`，即步骤 1 创建并已 push 的 `eval/analyze/...`），供 report 阶段生成中间分支链接。不做对比分析，不生成报告。

## 输出结构

```json
{
  "schema_version": 1,
  "judge_doc": "https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe",
  "groups": {
    "<group_label>": {
      "totals": {
        "case_count": 6, "analyzed_count": 6,
        "judge": {"judge_doc": "https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe",
                  "judged_count": 6, "unjudged_count": 0,
                  "verdict_counts": {"PASS": 4, "FAIL": 1, "INVALID_TASK": 0, "ENV_BLOCKED": 1},
                  "success_rate": 80.0, "rules_hit_counts": {"C5": 1, "C1": 1}},
        "self_reported": {"status_counts": {"passed": 5, "failed": 1}, "passed_rate": 83.33},
        "llm_calls": 0, "tool_calls": 0, "tool_rounds": 0, "llm_errors": 0,
        "tokens": {"input": 0, "output": 0, "total": 0, "cache_read": 0, "cache_creation": 0, "reasoning": 0, "cache_hit_rate": 0},
        "time_s": {"wall_clock": 0, "marker_wall_clock": 0, "llm": 0, "tool": 0,
                   "tool_by_category": {"Desktop Use": 0, "Browser Use": 0, "Shell": 0, "多类混合": 0}},
        "slowest_tool_rounds": [{"case_index": 1, "run_index": 1, "session_id": "", "round": 12, "log_id": "",
                                 "category": "Browser Use", "tool_time_s": 63.0, "ops": ["tde ui wait"],
                                 "commands": ["tde ui wait --text Done --run run-1"]}],
        "llm_latency_s": {"count": 0, "total": 0, "avg": 0, "P25": 0, "P50": 0, "P75": 0, "P90": 0, "P95": 0, "P99": 0, "max": 0},
        "first_token_latency_s": {"...": "同上"},
        "tool_category_counts": {}, "tool_name_counts": {}, "desktop_use_op_counts": {}, "tde_op_counts": {},
        "models": {}, "finish_reasons": {},
        "tool_results": {"total": 0, "success": 0, "failed": 0, "background": 0, "unknown": 0, "success_rate": 0,
                         "by_category": {"Desktop Use": {"total": 0, "success": 0, "failed": 0, "unknown": 0, "failure_rate": 0}}},
        "error_attributions": {"sdk": {}, "ai_usage": {}, "environment": {}, "unknown": {}},
        "top_errors": [{"key": "ELEMENT_NOT_FOUND", "attribution": "ai_usage", "label": "element_not_found", "count": 0, "tools": {}, "sample": ""}],
        "per_case": {"<suite>#<case_index>": {"case_name": "", "runs": 1, "self_reported_passed": 1, "verdicts": {"PASS": 1},
                     "median": {"wall_clock_s": 0, "llm_s": 0, "tool_s": 0, "llm_calls": 0, "tool_calls": 0, "tokens_total": 0},
                     "wall_clock_range_s": [0, 0]}}
      },
      "cases": [
        {
          "group_label": "", "suite": "", "case_index": 1, "case_name": "", "run_index": 1,
          "session_id": "", "status": "passed", "completed_steps": 0, "total_steps": 0,
          "failed_step": null, "skipped_steps": [], "reason": null,
          "trace_url": "https://trae-prompt-dashboard.gf.bytedance.net/conversation/<session_id>",
          "window": {"start_marker_found": true, "end_marker_found": true, "first_call": 0, "last_call": 0,
                     "session_call_count": 0, "marker_ts_start": 0, "marker_ts_end": 0, "warnings": []},
          "judge": {"verdict": "PASS", "rules_hit": [], "failed_points": [], "reason": "",
                    "judge_doc": "https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe"},
          "metrics": {"...": "与 totals 同名字段含义相同，另有 ui_mode_observed"},
          "latency_samples_s": {"llm": [], "first_token": []},
          "rounds": [{"round": 1, "log_id": "", "model": "", "ops": ["Desktop Use.click", "tde ui snapshot"],
                      "category": "多类混合", "tool_count": 2, "failed_tools": 0,
                      "llm_latency_s": 0, "tool_time_s": 0, "duration_s": 0}],
          "analyze_error": "仅失败时出现"
        }
      ]
    }
  }
}
```

## 指标口径

**成功率**：只来自判定结果，见上文。`self_reported` 是 execute 自报的产品验收结论（产品有没有 bug），和「agent 有没有按要求完成验收」不是一回事，不能混用。

**执行区间**：只统计起止标记之间的 LLM call。区间从打起始标记那次 call 的下一条开始，到打结束标记的 call 为止（含）。标记之外的 call（环境准备、安装 Trae、存档）不计入。

**时间**（单位为秒）：

| 字段 | 含义 |
|---|---|
| `wall_clock` | 区间首个 call 的 logId 时间 → 末个 call 的 logId 时间 + latency（logId 精度为秒） |
| `marker_wall_clock` | 结束标记 timestamp − 起始标记 timestamp（agent 的 `date +%s` 打印值），用于交叉核对 |
| `llm` | 区间内 LLM latency 之和 |
| `tool` | 每轮工具耗时之和，单轮工具耗时 = 下一个 call 开始时间 − (本 call 开始时间 + latency) |
| `tool_by_category` | 按轮次的工具类别汇总 `tool`。一轮内各工具的耗时拆不开（可能并行），所以整轮记到它唯一的类别，含多个类别时记「多类混合」 |

`slowest_tool_rounds`：工具耗时最长的 10 轮，附原始命令摘要（`commands`），组级取全组前 10。

**不统计「等待耗时」或「纯操作耗时」。** 等待不只出现在 `sleep` / `tde ui wait`，还会出现在操作命令自带的等待参数里（比如点击后等某段文本出现）、Shell 轮询循环里，Desktop Use 则是靠反复截图等。只按命令名识别必然漏判，而且两种操作方式漏判的程度不同，算出来的组间对比会有系统性偏差。耗时去向请看 `tool_by_category` 和 `slowest_tool_rounds` 里的具体命令。

**工具分类**（`tool_category_counts`）：

| 分类 | 判定 |
|---|---|
| Desktop Use | `mcp_mcp_config_ext_computer-use_*` 直调，或 Exec 代码里调用 computer-use MCP |
| Browser Use | Shell 命令中含 `tde ui <sub>` / `tde cdp <sub>`（含 `npm exec ... -- tde`、`"$TDE"` 等写法） |
| tde 管理 | Shell 命令中只有 tde 的非交互子命令（`+run`、`cleanup`、`status`、`--help` 等） |
| Shell / Exec / view_image / apply_patch / 其他 | 按工具名 |

`desktop_use_op_counts` 是 Desktop Use 子操作（get_app_state、click、type_text…），`tde_op_counts` 是 tde 子命令（ui snapshot、ui click…）。

**工具结果**：结果在下一个 call 的 prompt 尾部，按 `tool:` 块与 toolcalls 顺序一一对应；块数对不上时记 `unknown`，不猜。

| 工具 | 成功 | 失败 |
|---|---|---|
| Shell | `shell_exit_code=0` | exit code 非 0 / status 为 failed、timeout（`running_in_background` 记 background） |
| Desktop Use MCP | `The MCP server responded with:` | `command error:` 开头 |
| Exec | `Script completed` 且无 `isError: true` | `Script failed` / `TypeError` 等，或结果含 `command error:` |
| view_image | `Image loaded` | 其他 |

**错误归因**：先用错误摘要（tde 错误码、输出末尾几行）按 sdk → ai_usage → environment 顺序匹配关键字，摘要匹配不上时再匹配完整输出。关键字表在脚本顶部的 `SDK_KEYWORDS` / `AI_USAGE_KEYWORDS` / `ENV_KEYWORDS`。
