---
name: trae-e2e-testing
description: Trae Desktop 验收工具效率评测。仅限手动触发，禁止自动调用。
---

# Trae E2E 评测 Loop

评测 agent 在不同条件下操作 Trae 客户端完成验收任务的效率和成功率。仅限用户手动触发，禁止自动调用。评测集定义和各阶段 skill 都在评测仓库 `git@code.byted.org:ide/trae-e2e-testing.git`，每个阶段开始时默认拉取该仓库。

## 流程

```text
intake    — 解析用户需求，产出评测计划
  → execute   — 逐个执行 case，收集 session ID 和结果
  → analyze   — 拉取 trace，判定每个 case 是否符合预期，提取效率指标
  → report    — 整理数据，产出飞书对比报告
  → end
```

## 存档约定

execute、analyze、report 阶段的 session 各自创建分支存档中间产物，仅用于回溯，不用于阶段间数据传递。

分支命名：`eval/<阶段>/<YYYYMMDD>/<HHmmss>/$CHAT_SESSION_ID`

- `<阶段>`：`execute`、`analyze`、`report`
- `$CHAT_SESSION_ID`：环境变量，每个 session 的唯一标识

各阶段的中间产物写到评测仓库的 `artifacts/<阶段>/` 下，提交时用 `git add -f artifacts/<阶段>/`。trace 原始数据（`traces/`，单个 session 可达 GB 级）不进仓库。

## Loop 步骤

#### Step: intake

- **作用**：解析用户需求，产出评测计划。
- **输入**：用户的自然语言描述
- **调度说明**：
  - 先拉取评测仓库（各阶段开始时都默认拉取），随后在当前编排会话内调用仓库的 `skills/trae-e2e-testing-intake` skill 完成需求解析：读取 `cases/`、套用默认值与操作方式模板、与用户确认计划。默认值、叫法归一、追问/不追问、计划表确认与「直接运行」等规则都在该 skill 中，这里不重复。
  - skill 返回确认后的评测计划 JSON（含 `groups` 与展开好的 `execution_order`）。计划未确认前不进入 execute。
- **输出示例**：评测计划 JSON，结构见 `skills/trae-e2e-testing-intake/SKILL.md`
- **转移**：用户确认评测计划后进入 `execute`；用户已要求直接运行时，skill 展示计划后直接返回，随即进入。

#### Step: execute

- **作用**：按 `execution_order` 逐条启动 session 执行 case。
- **调度说明**：
  - 每条 `execution_order` 项启动一个 session，传入对应的 group 信息、suite、case_index、run_index。
  - session 调用评测仓库 `skills/trae-e2e-testing-execute` skill，细节见 skill 定义。
  - session 输出的结构化结果原样收集；session 异常退出、没有输出结构化结果时，记 `status: "error"` 和 `reason`，`session_id` 能拿到就填上，继续下一个。
  - 每个 case 执行前后都需要录屏（录屏操作在执行标记区间外，不计入执行时间），录屏文件随该 session 的 `eval/execute/...` 分支提交存档；报告不展示录屏，需要回溯时自己进分支查看。结果里的 `branch` 是该分支完整名，连同其他结果原样收集，汇总成中间分支清单传给报告。
  - 最大并发数 2。
- **输入**：intake 的完整输出
- **输出示例**：

```json
{
  "results": [
    {
      "group_label": "group-a",
      "suite": "agent_window",
      "case_index": 1,
      "case_name": "plugin_lifecycle",
      "run_index": 1,
      "session_id": "6a8694bc5f9e19624242ac32",
      "branch": "eval/execute/20261021/214839/6a8694bc5f9e19624242ac32",
      "status": "passed",
      "total_steps": 10,
      "completed_steps": 10,
      "failed_step": null,
      "skipped_steps": [],
      "reason": null
    },
    {
      "group_label": "group-a",
      "suite": "agent_window",
      "case_index": 2,
      "case_name": "template_gallery",
      "run_index": 1,
      "session_id": "6a8697135f9e19624242ac81",
      "branch": "eval/execute/20261021/220512/6a8697135f9e19624242ac81",
      "status": "failed",
      "total_steps": 7,
      "completed_steps": 4,
      "failed_step": 5,
      "skipped_steps": [],
      "reason": "步骤 5 等待 10 分钟后产物仍未生成"
    }
  ]
}
```

`status` 取值：`passed` / `failed` / `blocked`（因操作方式限制跳过步骤）/ `error`（环境问题，case 未开始）。

- **转移**：全部执行完毕后进入 `analyze`。

#### Step: analyze

- **作用**：拉取 trace 数据，判定每个 case 是否符合预期，提取效率指标。
- **调度说明**：调用评测仓库 `skills/trae-e2e-testing-analyze` skill，传入 execute 的输出。细节见 skill 定义。
  - 判定标准：https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe。结果为 PASS / FAIL / INVALID_TASK / ENV_BLOCKED，成功率 = PASS / (PASS + FAIL)，以判定为准，不用 execute 自报的 `status`
  - 指标由 `scripts/analyze.py` 统一计算
  - analyze session 只有一个，其返回中附带 `branch`（本 session 存档分支 `eval/analyze/...` 的完整名），LOOP 收集后连同 execute 各 session 的 `branch` 一起作为中间分支清单传给 report
- **输入**：execute 的完整输出（results 列表，含每个 case 的 session_id、branch）
- **输出示例**：

```json
{
  "schema_version": 1,
  "groups": {
    "group-a": {
      "totals": {
        "case_count": 6,
        "judge": { "verdict_counts": { "PASS": 4, "FAIL": 1, "INVALID_TASK": 0, "ENV_BLOCKED": 1 }, "success_rate": 80.0 },
        "self_reported": { "status_counts": { "passed": 5, "failed": 1 } },
        "llm_calls": 90,
        "tool_calls": 250,
        "tokens": { "total": 750000, "cache_hit_rate": 92.1 },
        "time_s": { "wall_clock": 1080.5, "llm": 410.0, "tool": 650.2, "tool_by_category": { "Desktop Use": 520.1, "Shell": 130.1 } },
        "slowest_tool_rounds": [ "..." ],
        "llm_latency_s": { "avg": 4.5, "P50": 3.9, "P90": 7.8, "P99": 15.2 },
        "tool_category_counts": { "Desktop Use": 180, "Browser Use": 0, "Shell": 50 },
        "tool_results": { "success": 238, "failed": 10, "success_rate": 95.97 },
        "error_attributions": { "sdk": { "screenshot_context_missing": 2 }, "ai_usage": { "element_not_found": 6 } },
        "top_errors": [ "..." ],
        "per_case": { "agent_window#1": { "runs": 1, "passed": 1, "median": { "wall_clock_s": 180.5 } } }
      },
      "cases": [
        {
          "case_index": 1,
          "run_index": 1,
          "session_id": "6a8694bc5f9e19624242ac32",
          "status": "passed",
          "judge": { "verdict": "PASS", "rules_hit": [], "reason": "..." },
          "trace_url": "https://trae-prompt-dashboard.gf.bytedance.net/conversation/6a8694bc5f9e19624242ac32",
          "window": { "start_marker_found": true, "end_marker_found": true, "warnings": [] },
          "metrics": { "...": "与 totals 同名字段，另有 ui_mode_observed" },
          "rounds": [ { "round": 1, "ops": ["Desktop Use.get_app_state"], "duration_s": 6.2 } ]
        }
      ]
    },
    "group-b": { "...": "同上" }
  }
}
```

以上是节选，完整字段和口径见 `skills/trae-e2e-testing-analyze/SKILL.md`。analyze 同时返回数据质量问题清单（缺少标记、结果未知占比高、操作方式违规、拉取失败）。

- **转移**：完成后进入 `report`。

#### Step: report

- **作用**：将原始数据整理成飞书对比报告。
- **调度说明**：调用评测仓库 `skills/trae-e2e-testing-report` skill，传入 analyze 的输出（含问题清单）、评测计划和中间分支清单（execute 每个 session 的 `branch` + analyze session 的 `branch`）。细节见 skill 定义。
- **输入**：analyze 的完整输出 + intake 的评测计划 + 中间分支清单
- **输出**：飞书文档 URL（报告内包含全部中间分支链接，包括本 report 阶段的 `eval/report/...` 分支）
- **转移**：报告可回读后进入 `end`。

## 完成标准

- 所有 execution_order 项执行完毕（无论成功或失败）。
- 所有有 trace 的 case 都已按判定文档判定，trace 指标已提取。
- 飞书报告已生成并可回读。
