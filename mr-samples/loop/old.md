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
  - 先拉取评测仓库，读取 `cases/` 下可用的评测集。
  - 从用户描述中提取分组、评测集、版本、环境等信息；**用户没说的字段一律用下方「默认值」，不要逐项询问**。
  - 分组名能对上「操作方式预设」时，直接套用预设的 `prompt_injection`，不要问操作方式的含义。
  - 只有以下情况才问用户，而且一次问完：
    - 分组完全无法确定（比如只说了"跑一下评测"，没说比什么）
    - 用户提到的分组名对不上任何预设，又没有说明含义
    - 用户提到的评测集在 `cases/` 里不存在
  - 不检查 case 是否可用（case 内容目前是占位，后续统一处理）。
  - 生成评测计划后，用一张简表展示（评测集、case 数、各组条件、重复次数、基准组、总 session 数），其中用了默认值的字段标「默认」，**等用户确认后再进入 execute**。用户要改就按修改后的计划重新展示一次。
  - 例外：用户的原始需求里已经明确说了「直接运行」「直接跑」「不用确认」之类的话，展示计划后直接进入 execute，不再等确认。
  - 确认环节只确认这张计划表，不要借机追问默认值以外的细节。
  - 读取 `cases/<suite>.json` 展开 group × suite × case × run 执行列表。

**默认值**：

| 字段 | 默认值 |
|---|---|
| 评测集 | `agent_window`，全部 case |
| `repeat` | 1 |
| `baseline_group` | 用户描述中第一个出现的组 |
| `trae_version` | `latest`（转成 `--shell-version latest`，即官方最新稳定版），各组一致。用户给了 `trae_download_url` 时以链接为准 |
| `tde_version` | `latest`，各组一致 |
| `env` | `linux` |
| `prompt_injection` | 套用操作方式预设；没有预设时为空 |

用户只给了某一组的版本时，其他组沿用同一版本，保证组间只有被比较的变量不同。

**操作方式预设**（分组名不区分大小写）：

| 分组名 | 别名 | `label` | `prompt_injection` |
|---|---|---|---|
| CU | Computer Use | `cu` | 所有 UI 操作只能使用 CU（Computer Use，截图 + 坐标点击），严禁使用 CDP（包括 cdp 协议、tde ui、tde cdp 命令）。CU 无法完成的步骤记为跳过 |
| CDP | BU、Browser Use、tde | `cdp` | UI 操作优先使用 tde ui / tde cdp，只有 tde 做不到时（如文件选择器、录屏）才降级到 CU |

用户在预设之外附加了约束（比如"CU 组不录屏"）时，把附加约束追加到预设后面。

示例：
- 用户说「CU vs BU 跑一下 smoke」：直接得到评测集 `smoke` 全部 case；两组 `cu`、`cdp`，各自套用预设；`repeat` 1；基准组 `cu`；版本都用默认。展示计划表，用户确认后开始执行，中间不问其他问题。
- 用户说「CU vs BU 跑一下 smoke，直接运行」：同上，展示计划表后直接开始执行。

- **输出**：

```json
{
  "suites": [
    {
      "name": "agent_window",
      "cases": [1, 2, 3, 4, 5, 6]
    }
  ],
  "repeat": 1,
  "baseline_group": "group-a",
  "groups": [
    {
      "label": "group-a",
      "prompt_injection": "严禁录屏",
      "trae_download_url": "https://tosv.byted.org/obj/...",
      "tde_version": "0.32.2-alpha.20261018164319",
      "env": "linux"
    },
    {
      "label": "group-b",
      "prompt_injection": "每个 case 必须录屏，禁止跳过",
      "trae_version": "2.3.88136",
      "env": "linux"
    }
  ],
  "execution_order": [
    { "group_label": "group-a", "suite": "agent_window", "case_index": 1, "case_name": "plugin_lifecycle", "run_index": 1 },
    { "group_label": "group-b", "suite": "agent_window", "case_index": 1, "case_name": "plugin_lifecycle", "run_index": 1 },
    { "group_label": "group-a", "suite": "agent_window", "case_index": 2, "case_name": "template_gallery", "run_index": 1 },
    { "group_label": "group-b", "suite": "agent_window", "case_index": 2, "case_name": "template_gallery", "run_index": 1 }
  ]
}
```

字段说明：
  - `suites`：评测集列表，所有 group 共用，保证可对比
    - `suites[].name`：评测集名称，对应 `cases/<name>.json`。用户未指定时默认 `agent_window`
    - `suites[].cases`：该评测集要执行的 case_index 列表。用户未指定时默认全部
  - `repeat`：每个 case 在每组中重复执行的次数，默认 1。大于 1 时报告给出中位数和波动范围
  - `baseline_group`：对比基准组的 label，默认第一组
  - `groups[].label`：分组标签，只能用小写字母、数字和连字符。命中预设时使用预设的 label
  - `groups[].prompt_injection`：注入到执行 session 的额外约束，保留用户原始语义（可选）
  - `groups[].trae_version`：Trae 客户端版本（可选）
  - `groups[].trae_download_url`：Trae 客户端下载链接（可选，优先于 trae_version）
  - `groups[].tde_version`：tde 工具版本（可选）
  - `groups[].env`：执行环境，默认 `linux`，可选 `windows`、`mac`。会转成 tde `--platform` 参数，tde 要求它与执行主机一致
  - `execution_order`：展开后的执行列表，execute 阶段按此顺序逐条调度。按 run → case → group 的顺序交错排列（同一个 case 的各组相邻），避免某个时间段的环境波动只影响某一组

`groups[]` 中除 `label` 外的字段均可省略。

- **转移**：用户确认评测计划后进入 `execute`；用户已要求直接运行时，展示计划后直接进入。

#### Step: execute

- **作用**：按 `execution_order` 逐条启动 session 执行 case。
- **调度说明**：
  - 每条 `execution_order` 项启动一个 session，传入对应的 group 信息、suite、case_index、run_index。
  - session 调用评测仓库 `skills/trae-e2e-testing-execute` skill，细节见 skill 定义。
  - session 输出的结构化结果原样收集；session 异常退出、没有输出结构化结果时，记 `status: "error"` 和 `reason`，`session_id` 能拿到就填上，继续下一个。
  - 最大并发数 2。
- **输入**：intake 的完整输出
- **输出**：

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
- **输入**：execute 的完整输出（results 列表，含每个 case 的 session_id）
- **输出**：

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
        "time_s": { "wall_clock": 1080.5, "llm": 410.0, "tool": 650.2, "tool_by_category": { "CU": 520.1, "Shell": 130.1 } },
        "slowest_tool_rounds": [ "..." ],
        "llm_latency_s": { "avg": 4.5, "P50": 3.9, "P90": 7.8, "P99": 15.2 },
        "tool_category_counts": { "CU": 180, "tde ui": 0, "Shell": 50 },
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
          "rounds": [ { "round": 1, "ops": ["CU.get_app_state"], "duration_s": 6.2 } ]
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
- **调度说明**：调用评测仓库 `skills/trae-e2e-testing-report` skill，传入 analyze 的输出（含问题清单）和评测计划。细节见 skill 定义。
- **输入**：analyze 的完整输出 + intake 的评测计划
- **输出**：飞书文档 URL
- **转移**：报告可回读后进入 `end`。

## 完成标准

- 所有 execution_order 项执行完毕（无论成功或失败）。
- 所有有 trace 的 case 都已按判定文档判定，trace 指标已提取。
- 飞书报告已生成并可回读。
