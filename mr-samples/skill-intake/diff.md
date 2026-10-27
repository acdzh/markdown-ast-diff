{++++
---
name: "trae-e2e-testing-intake"
description: "解析用户的自然语言评测需求，读取评测集、套用默认值与操作方式模板，产出并与用户确认评测计划"
---
++++}

{++++
在 LOOP 的编排会话内执行（不另起 session）。开始时评测仓库已拉取，评测集定义在仓库 `cases/` 下。
++++}

{++++
## 流程
++++}

{++++
1. 读取 `cases/` 下可用的评测集。
2. 从用户描述中提取分组、评测集、版本、环境等信息；**用户没说的字段一律用下方「默认值」，不要逐项询问**。
3. 分组名命中「操作方式背景知识」里已知叫法时，直接套用对应模板的 `prompt_injection`，不要追问含义；能结合上下文读懂的自定义分组要求，直接按用户描述整理进 `prompt_injection`，同样不追问。
4. 只有以下情况才问用户，而且一次问完：
   * 分组完全无法确定（比如只说了“跑一下评测”，没说比什么、要几组）
   * 用户给的分组名或要求语义上完全无法解读（无意义字符，提炼不出任何操作约束）
   * 用户提到的评测集在 `cases/` 下不存在
5. 用户完全没提操作方式约束的组，`prompt_injection` 留空，按默认执行。
6. 不检查 case 是否可用（case 内容目前是占位，后续统一处理）。
7. 生成评测计划后，用一张简表展示（评测集、case 数、各组条件、重复次数、基准组、总 session 数），其中用了默认值的字段标「默认」，**等用户确认后再返回计划给 LOOP**。用户要改就按修改后的计划重新展示一次。
   * 例外：用户的原始需求里已经明确说了「直接运行」「直接跑」「不用确认」之类的话，展示计划后直接返回，不再等确认。
   * 确认环节只确认这张计划表，不要借机追问默认值以外的细节。
8. 读取 `cases/<suite>.json` 展开 group × suite × case × run 执行列表（`execution_order`）。
++++}

{++++
## 默认值
++++}

{++++
| 字段                 | 默认值                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------- |
| 评测集                | `agent_window`，全部 case                                                              |
| `repeat`           | 1                                                                                   |
| `baseline_group`   | 用户描述中第一个出现的组                                                                        |
| `trae_version`     | `latest`（转成 `--shell-version latest`，即官方最新稳定版），各组一致。用户给了 `trae_download_url` 时以链接为准 |
| `tde_version`      | `latest`，各组一致                                                                       |
| `env`              | `linux`                                                                             |
| `prompt_injection` | 命中已知叫法时套用对应模板；否则直接整理用户描述；用户没提就留空                                                    |
++++}

{++++
用户只给了某一组的版本时，其他组沿用同一版本，保证组间只有被比较的变量不同。
++++}

{++++
## 操作方式背景知识
++++}

{++++
用于识别用户的自然语言简称，不是分组的封闭选项。用户可以用任何方式描述自己的分组和操作方式要求，不局限于下表。下表只是两种最常见操作方式的已知叫法和约束模板，用户提到其中任一叫法时直接套用对应的 `label` 和 `prompt_injection`，不要再追问含义：
++++}

{++++
| 操作方式        | 用户可能的叫法                                 | `label`       | `prompt_injection`                                                                                                                             |
| ----------- | --------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop Use | CU、CUA、computer use、computer-use 等      | `desktop-use` | 所有 UI 操作只能使用 Desktop Use（截图 + 坐标点击），严禁使用 Browser Use（BU / CDP，包括 cdp 协议、tde ui、tde cdp 等 tde 交互命令）。Desktop Use 无法完成的步骤记为跳过                     |
| Browser Use | BU、CDP、tde ui、tde cdp、tde interaction 等 | `browser-use` | UI 操作优先使用 Browser Use（BU / CDP，tde ui / tde cdp 等 tde 交互命令），只有 Browser Use 做不到时（如文件选择器）才降级到 Desktop Use（CU）；统一要求的录屏步骤按 execute skill 规定执行，不在此限 |
++++}

{++++
* 用户用上表之外的自定义叫法描述操作方式时，能从描述里读懂约束的，直接整理成该组的 `prompt_injection`，`label` 按用户给的名字归一（小写、连字符）；只有输入确实无法解读（无意义字符）时才在确认环节顺带问一次，读得懂就不追问。用户什么都没要求时，`prompt_injection` 留空、沿用默认，不强行套模板。
* 用户在已知操作方式之外附加约束（比如「每一步操作后都要截图」）时，把附加约束追加到该组 `prompt_injection` 后面。
* 录屏是 execute skill 的固定步骤，所有组都需要录屏，不要把录屏要求写进 `prompt_injection`，也不要在计划里按组开关录屏。
++++}

{++++
## 示例
++++}

{++++
* 用户说「CU vs BU 跑一下 smoke」：直接得到评测集 `smoke` 全部 case；两组 `desktop-use`、`browser-use`，各自套用模板；`repeat` 1；基准组 `desktop-use`；版本都用默认。展示计划表，用户确认后返回，中间不问其他问题。
* 用户说「CU vs BU 跑一下 smoke，直接运行」：同上，展示计划表后直接返回。
++++}

{++++
## 输出示例
++++}

{++++
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
      "prompt_injection": "每一步操作后都要截图留证",
      "trae_download_url": "https://tosv.byted.org/obj/...",
      "tde_version": "0.32.2-alpha.20261018164319",
      "env": "linux"
    },
    {
      "label": "group-b",
      "prompt_injection": "每个点击后等待 2 秒再继续，禁止跳过",
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
++++}

{++++
字段说明：
++++}

{++++
* `suites`：评测集列表，所有 group 共用，保证可对比
  * `suites[].name`：评测集名称，对应 `cases/<name>.json`。用户未指定时默认 `agent_window`
  * `suites[].cases`：该评测集要执行的 case_index 列表。用户未指定时默认全部
* `repeat`：每个 case 在每组中重复执行的次数，默认 1。大于 1 时报告给出中位数和波动范围
* `baseline_group`：对比基准组的 label，默认第一组
* `groups[].label`：分组标签，只能用小写字母、数字和连字符。命中已知叫法时用模板的 label，自定义分组按用户给的名字归一
* `groups[].prompt_injection`：注入到执行 session 的额外约束，保留用户原始语义（可选）
* `groups[].trae_version`：Trae 客户端版本（可选）
* `groups[].trae_download_url`：Trae 客户端下载链接（可选，优先于 trae_version）
* `groups[].tde_version`：tde 工具版本（可选）
* `groups[].env`：执行环境，默认 `linux`，可选 `windows`、`mac`。会转成 tde `--platform` 参数，tde 要求它与执行主机一致
* `execution_order`：展开后的执行列表，execute 阶段按此顺序逐条调度。按 run → case → group 的顺序交错排列（同一个 case 的各组相邻），避免某个时间段的环境波动只影响某一组
++++}

{++++
`groups[]` 中除 `label` 外的字段均可省略。
++++}
