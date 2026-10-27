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

## 操作方式参考

如果分组的 `prompt_injection` 中包含操作方式相关的约束，以下是常见方式的说明：

- **CU（Computer Use）**：通过截屏 + 坐标点击操作 UI。使用 CU 时严禁使用 CDP（包括 cdp 协议、tde ui、tde cdp 命令）。CU 无法完成的步骤记为跳过（见步骤 7）。
- **CDP**（也叫 BU / Browser Use）：优先使用 tde ui / tde cdp 操作，只有 tde 做不到时（如文件选择器、录屏）才降级到 CU。

操作方式不限于这两种，以 `prompt_injection` 的实际内容为准。如果 `prompt_injection` 为空或未涉及操作方式，自行选择合适的方式。

analyze 阶段会从 trace 统计实际使用的操作方式（`ui_mode_observed`），用于核对是否遵守了约束。

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

启动失败时不进入 case 执行：跳过步骤 4~6，直接按步骤 7 输出 `status: "error"`，`reason` 写明启动失败原因。

**步骤 3**：读取 case 定义

从评测仓库 `cases/<suite>.json` 读取指定 case_index 的步骤和验收标准。步骤中的 `{assets_dir}` 替换为评测仓库 `assets/` 目录的绝对路径。

**步骤 4**：打起始标记

环境准备完毕，正式开始执行 case 步骤之前，单独用一次 Shell 调用打标记（不要和其他命令合并）：

```bash
echo "===E2E_CASE_EXEC_START=== case_index=<N> run_index=<R> timestamp=$(date +%s)"
```

**步骤 5**：执行 case

按 case 步骤逐步执行，遵守 `prompt_injection` 的约束（如有）。

单步放弃规则（满足任一即判定该步失败）：
- 同一步骤换不同方式尝试 3 次仍未完成
- 同一步骤耗时超过 10 分钟（需要等待 Trae 内 AI 生成产物的步骤放宽到 20 分钟）

某步失败后立即停止，不再执行后续步骤。

**步骤 6**：打结束标记

无论成功还是失败，执行完毕后立即单独用一次 Shell 调用打标记：

```bash
echo "===E2E_CASE_EXEC_END=== case_index=<N> run_index=<R> timestamp=$(date +%s)"
```

**步骤 7**：判定结果

根据 case 的验收标准判定最终结果，以结构化格式输出：

```json
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
}
```

字段说明：
- `session_id`：从环境变量 `$CHAT_SESSION_ID` 获取
- `status`：
  - `passed`：全部步骤完成且满足验收标准
  - `failed`：某一步失败，或步骤都做完但不满足验收标准
  - `blocked`：因操作方式限制（如 CU 不支持）跳过了步骤，导致无法完成验收
  - `error`：case 还没开始就失败了（Trae 启动失败、账号分配失败等环境问题）
- `completed_steps`：实际完成的步骤数
- `failed_step`：失败步骤编号（从 1 开始），没有失败时为 `null`
- `skipped_steps`：因操作方式限制跳过的步骤编号列表
- `reason`：非 passed 时用一句话写明原因（哪一步、看到了什么现象），passed 时为 `null`

**步骤 8**：提交存档

只存档轻量产物（截图、录屏、日志、结果 JSON），不要提交 trace 原始数据或安装包：

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
