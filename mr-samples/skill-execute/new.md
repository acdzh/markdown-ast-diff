---
name: "trae-e2e-testing-execute"
description: "在 Trae 客户端中执行单个评测 case，收集结果和 session ID"
---

执行单个评测 case。LOOP 的 execute 阶段为每个 group × case × run 启动一个 session 调用本 skill。

## 输入

由 LOOP 注入：
- `group`：当前分组信息（label、prompt_injection、trae_version/trae_download_url、tde_version、env）
- `suite`：评测集名称
- `case_index`：要执行的 case 编号
- `run_index`：第几次重复执行（从 1 开始，未提供时为 1）

## 操作方式与约束

- 本组允许用什么操作方式，由 LOOP 注入的 `group.prompt_injection` 决定（用户叫法的识别、归一和约束模板都在 LOOP 完成，这里直接按注入的约束执行，不再维护叫法对照）。约束限定单一操作方式时全程遵守；该方式无法完成的步骤按约束记为跳过（见步骤 6）。
- `prompt_injection` 为空或没有涉及操作方式时，自行选择合适的方式完成 case；出现自定义操作方式时同样按 `prompt_injection` 的语义执行。
- 录屏不按操作方式区分：步骤 4 / 步骤 8 统一使用 Desktop Use（computer-use）的录屏能力，所有组都需要录屏，这是存档动作而非 UI 操作，analyze 不会把它判成违规（详见步骤 4）。
- analyze 阶段会从 trace 统计实际使用的操作方式（`ui_mode_observed`），用于核对是否遵守了约束。

## 执行流程

**步骤 1**：准备工作区

在评测仓库中创建分支 `eval/execute/<YYYYMMDD>/<HHmmss>/$CHAT_SESSION_ID` 并切换过去。`$CHAT_SESSION_ID` 取自环境变量。执行过程中产生的文件（截图、录屏、日志、临时脚本等）都写在仓库下的 `artifacts/execute/<group_label>/<suite>/case_<N>_run_<R>/` 目录。

**步骤 2**：安装并启动 Trae

```bash
npm exec --yes --registry=https://bnpm.byted.org --package="@byted-solo/trae-desktop-e2e@<tde_version>" -- tde +run --ide --ai-agent --account sso --json
```

- `<tde_version>` 取分组的 `tde_version`，未指定时用 `latest`
- 分组提供了 `trae_download_url` 时加 `--shell-url "<url>"`
- 分组提供了 `trae_version`（无 url）时加 `--shell-version "<version>"`；两者都没有时加 `--shell-version latest`（官方最新稳定版。`+run` 默认面向源码构建，不指定安装包来源时可能因缺少 `--repo` 失败）
- 两者互斥，`trae_download_url` 优先
- 分组 `env` 指定了平台时加 `--platform <linux|macos|windows>`（`mac` 对应 `macos`）。tde 会校验它与当前主机一致，不一致直接报错，此时按启动失败处理
- `--account sso` 必须保留
- 从 `--json` 输出中取 `runId`，后续所有 `tde ui` / `tde cdp` 命令都带 `--run <runId>`

后续调用 tde 都使用与启动时相同的版本（同样用 `npm exec --package="@byted-solo/trae-desktop-e2e@<tde_version>" -- tde ...`），不要假设 PATH 里有 `tde`。

启动失败时不进入 case 执行：跳过步骤 4~8，直接按步骤 9 输出 `status: "error"`，`reason` 写明启动失败原因。

**步骤 3**：读取 case 定义

从评测仓库 `cases/<suite>.json` 读取指定 case_index 的步骤和验收标准。步骤中的 `{assets_dir}` 替换为评测仓库 `assets/` 目录的绝对路径。

**步骤 4**：开始录屏

正式执行前开始录屏，录制 Trae 窗口（窗口录制不可用时录整个桌面）。录屏统一使用 Desktop Use（computer-use）的录屏能力，与本组 `prompt_injection` 限定的操作方式无关：它是存档动作而不是 UI 操作，所有组都需要录屏，analyze 不会把它判成操作方式违规。录屏文件统一放到产物目录 `artifacts/execute/<group_label>/<suite>/case_<N>_run_<R>/`，命名为 `recording.mp4`（工具默认的其他格式也可）；需要分段时按 `recording_1.mp4`、`recording_2.mp4` 顺序命名，全部保留。

时序要求（重要）：**必须先开始录屏，再打步骤 5 的起始标记；先打步骤 7 的结束标记，再停止录屏**。录屏的开始和停止都在两个标记之外，analyze 只统计标记之间的 LLM call，录屏操作不会计入执行时间。

**步骤 5**：打起始标记

录屏开始后，环境准备完毕、正式开始执行 case 步骤之前，单独用一次 Shell 调用打标记（不要和其他命令合并）：

```bash
echo "===E2E_CASE_EXEC_START=== case_index=<N> run_index=<R> timestamp=$(date +%s)"
```

**步骤 6**：执行 case

按 case 步骤逐步执行，遵守 `prompt_injection` 的约束（如有）。

单步放弃规则（满足任一即判定该步失败）：
- 同一步骤换不同方式尝试 3 次仍未完成
- 同一步骤耗时超过 10 分钟（需要等待 Trae 内 AI 生成产物的步骤放宽到 20 分钟）

某步失败后立即停止，不再执行后续步骤。

**步骤 7**：打结束标记

无论成功还是失败，执行完毕后立即单独用一次 Shell 调用打标记：

```bash
echo "===E2E_CASE_EXEC_END=== case_index=<N> run_index=<R> timestamp=$(date +%s)"
```

**步骤 8**：停止录屏

打完结束标记后立即停止录屏，确认视频文件已保存到产物目录。录屏失败不要重跑 case，也不影响结果 JSON：在产物目录留一个 `recording-note.txt` 写明失败原因即可（报告不消费录屏信息，录屏仅随分支存档）。

**步骤 9**：判定结果

根据 case 的验收标准判定最终结果，以结构化格式输出：

```json
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
}
```

字段说明：
- `session_id`：从环境变量 `$CHAT_SESSION_ID` 获取
- `branch`：本 session 的存档分支完整名（步骤 1 创建的 `eval/execute/...`），供 report 阶段生成分支链接
- `status`：
  - `passed`：全部步骤完成且满足验收标准
  - `failed`：某一步失败，或步骤都做完但不满足验收标准
  - `blocked`：因操作方式限制（如 Desktop Use 不支持）跳过了步骤，导致无法完成验收（不含统一要求的录屏步骤）
  - `error`：case 还没开始就失败了（Trae 启动失败、账号分配失败等环境问题）
- `completed_steps`：实际完成的步骤数
- `failed_step`：失败步骤编号（从 1 开始），没有失败时为 `null`
- `skipped_steps`：因操作方式限制跳过的步骤编号列表
- `reason`：非 passed 时用一句话写明原因（哪一步、看到了什么现象），passed 时为 `null`

**步骤 10**：提交存档

只存档轻量产物（录屏、截图、日志、结果 JSON），不要提交 trace 原始数据或安装包。提交前确认录屏文件在 `artifacts/execute/` 下、会随本次提交进入分支：

```bash
git add -f artifacts/execute/
git commit -m "eval(execute): <group_label> <suite> case <N> run <R>"
git push origin HEAD
```

这些产物仅用于回溯，不用于后续分析。

Trae 实例不需要清理，保留现场便于排查，实例由环境统一释放。

## 约束

1. **不中断执行**：遇到不确定的情况自行判断，继续推进。
2. **不要浪费时间**：拿到明确结果后及时结束。
3. **只执行一遍**：不管结果如何，严禁重跑。需要重复执行时，由 LOOP 通过 `run_index` 调度新的 session。
4. **禁止进入任何 Loop**。
