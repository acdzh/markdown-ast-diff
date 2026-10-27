# Trae Desktop E2E 评测

评测 agent 在不同条件下（不同操作方式、tde 版本、Trae 版本、模型等）操作 Trae 客户端完成验收任务的**效率和成功率**。

分组由用户按自然语言提出，不限于任何固定集合。下面两种是最常见的操作方式及其常见叫法，作为背景知识用于识别用户简称（用户也可以定义自己的操作方式，说清楚含义即可）：

- **Desktop Use**：截图 + 坐标点击操作 UI。常见叫法：CU、CUA、computer use、computer-use 等
- **Browser Use**：tde ui / tde cdp 等交互命令操作。常见叫法：BU、CDP、tde ui、tde cdp、tde interaction 等

analyze 输出的工具分类指标统一用 Desktop Use / Browser Use 这两个名字；其他操作方式按实际工具归类。

成功率按 [如何判定 E2E 验收是否执行符合预期](https://bytedance.larkoffice.com/wiki/OH17wmVYGiBXKXkPtn0ca28cnQe) 判定：PASS / FAIL / INVALID_TASK / ENV_BLOCKED，成功率 = PASS / (PASS + FAIL)。

不是功能测试，而是工具效率评测：同一组 case，比较不同操作方式完成任务所需的耗时、调用次数、Token 和工具可靠性。

## 目录

```
cases/                     评测集，每个文件一个 suite（case 内容目前是占位）
  agent_window.json
  smoke.json
assets/                    case 执行用到的附件（步骤里用 {assets_dir} 引用）
loop/trae-e2e-testing/     LOOP 编排定义：intake → execute → analyze → report
skills/
  trae-e2e-testing-intake/    解析评测需求，套用默认值与操作方式模板，产出评测计划
  trae-e2e-testing-execute/   执行单个 case，输出结构化结果
  trae-e2e-testing-analyze/   调用 scripts/analyze.py 提取指标
  trae-e2e-testing-report/    把指标整理成飞书对比报告
scripts/analyze.py         trace → 指标 + 判定输入导出 / 判定结果合并（唯一的指标口径来源）
tests/test_analyze.py      analyze.py 的回归测试
artifacts/                 各阶段存档产物（在 eval/* 分支上提交，main 上没有）
traces/                    trae-pa 拉取的原始 trace（gitignore，不提交）
```

## case 格式

```json
{
  "case_name": "plugin_lifecycle",
  "case_index": 1,
  "description": "插件全生命周期 + 产物预览分享",
  "steps": ["打开 Agent Window 窗口", "进入插件市场", "..."],
  "acceptance": "插件已卸载，卸载前产物预览正常加载且分享成功"
}
```

- 每个 case 独立执行（一个 session、一个 Trae 实例），不依赖其他 case
- 步骤写目标（做什么），不写具体操作（怎么做）
- 步骤里要有可观察的验收点

## 指标分析

```bash
# 分析 execute 阶段的结果，同时导出判定输入
# trace 刚结束时有同步延迟，脚本会自动重试等待（默认每 5 分钟一轮、上限 2 小时），
# 每轮显式把 boe、cn、sg 三个站点都查一遍，哪个先同步好用哪个（trae-pa 默认探测不含 boe）
python3 scripts/analyze.py --input execute_results.json --output metrics.json \
    --judge-dir artifacts/analyze/judge --refresh
# 只有确定 trace 只在某个站点时才需要 --site

# 填好 artifacts/analyze/judge/*.verdict.json 后，合并判定结果
python3 scripts/analyze.py --merge-verdicts artifacts/analyze/judge --metrics metrics.json

# 调试单个 session
python3 scripts/analyze.py --session <session_id> --output /tmp/metrics.json

# 测试（本地开发改了 analyze.py 时跑，评测运行时不跑）
python3 -m unittest discover -s tests
```

依赖：Python 3.9+（只用标准库），`trae-pa`（`@byted/trae-prompt-analyzer-cache`）。

只统计 `===E2E_CASE_EXEC_START===` 和 `===E2E_CASE_EXEC_END===` 两个标记之间的 LLM call。输出字段和指标口径见 `skills/trae-e2e-testing-analyze/SKILL.md`。

要修改指标口径（工具分类、错误归因关键字、成功判定），只改 `scripts/analyze.py`，同时补测试，不要在 skill 里临时写提取逻辑，否则不同批次的数据无法对比。

## 存档

execute / analyze / report 每个阶段的 session 各自建分支 `eval/<阶段>/<YYYYMMDD>/<HHmmss>/<session_id>`，只提交 `artifacts/<阶段>/` 下的轻量产物（录屏、截图、日志、结果 JSON、metrics JSON）。这些分支仅用于回溯，阶段之间通过 LOOP 传递数据。

execute 阶段每个 case 执行前后都需要录屏（录屏在起始/结束标记之外，不计入执行时间），录屏文件随该 session 的 `eval/execute/...` 分支一起提交；各 session 的分支名和 analyze、report 阶段的分支一起汇总，列在最终报告开头，分支链接格式：

```
https://code.byted.org/ide/trae-e2e-testing/tree/<分支名>
```
