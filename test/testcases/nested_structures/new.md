# 嵌套结构测试（更新版）

## 1. 深度嵌套列表

### 1.1 无序列表嵌套

- 第一级列表项（已修改）
  - 第二级列表项
    - 第三级列表项（已修改）
      - 第四级列表项
        - 第五级列表项
          - 第六级列表项（已修改）
            - 第七级列表项
              - 第八级列表项
                - 第九级列表项
                  - 第十级列表项
                    - 新增的第十一级列表项
- 另一个第一级列表项
  - 第二级列表项 A
    - 第三级列表项 A
    - 新增的第三级列表项
  - 第二级列表项 B
    - 第三级列表项 B
      - 第四级列表项 B
      - 新增的第四级列表项
- 新增的第一级列表项
  - 新增的第二级列表项

### 1.2 有序列表嵌套

1. 第一级有序列表（已修改）
   1. 第二级有序列表
      1. 第三级有序列表
         1. 第四级有序列表
            1. 第五级有序列表
            2. 新增的第五级有序列表
2. 另一个第一级有序列表
   1. 第二级有序列表 A
      1. 第三级有序列表 A
   2. 第二级有序列表 B
      1. 第三级有序列表 B
      2. 新增的第三级有序列表
3. 新增的第一级有序列表
   1. 新增的第二级有序列表

### 1.3 混合列表嵌套

1. 第一级有序列表
   - 第二级无序列表（已修改）
     1. 第三级有序列表
        - 第四级无序列表
          1. 第五级有序列表
          2. 新增的第五级有序列表
   - 新增的第二级无序列表
2. 另一个第一级有序列表
   - 第二级无序列表 A
     - 第三级无序列表 A
       1. 第四级有序列表 A
       2. 新增的第四级有序列表
   - 第二级无序列表 B
     1. 第三级有序列表 B
     2. 新增的第三级有序列表
3. 新增的第一级有序列表
   - 新增的第二级无序列表

### 1.4 任务列表嵌套

- [ ] 未完成任务
  - [ ] 子任务 1
    - [x] 子任务 1.1（已完成）
      - [ ] 子任务 1.1.1
      - [x] 新增的子任务（已完成）
  - [ ] 子任务 2
- [x] 已完成任务
  - [x] 已完成子任务 1
    - [x] 未完成子任务 1.1（现已完成）
    - [ ] 新增的子任务
  - [ ] 未完成子任务 2
- [ ] 新增的未完成任务
  - [ ] 新增的子任务

## 2. 深度嵌套引用

> 第一级引用（已修改）
> 
> > 第二级引用
> > 
> > > 第三级引用（已修改）
> > > 
> > > > 第四级引用
> > > > 
> > > > > 第五级引用（已修改）
> > > > > 
> > > > > > 第六级引用
> > > > > > 
> > > > > > > 新增的第七级引用

> 另一个第一级引用
> 
> > 第二级引用 A（已修改）
> > 
> > > 第三级引用 A
> > > 
> > > 新增的第三级引用
> 
> > 第二级引用 B
> > 
> > > 第三级引用 B（已修改）

> 新增的第一级引用
> 
> > 新增的第二级引用

## 3. 嵌套代码块

````markdown
# 代码块中的 Markdown（已修改）

## 子标题

```javascript
// 代码块中的代码块（已修改）
function nestedExample() {
  console.log('这是嵌套在 Markdown 代码块中的 JavaScript 代码块');
  // 新增的注释
  return '新增的返回值';
}
```

- 列表项 1
- 列表项 2（已修改）
  - 嵌套列表项
  - 新增的嵌套列表项

```python
# 新增的 Python 代码块
def nested_function():
    print("这是新增的 Python 代码块")
    return "新增的返回值"
```
````

## 4. 嵌套表格

| 外部表格 | 描述 | 新增列 |
| --- | --- | --- |
| 行 1 | 普通内容 | 新值 1 |
| 行 2 | <table><tr><th>嵌套表格</th><th>值</th><th>新增列</th></tr><tr><td>嵌套行 1</td><td>100</td><td>新值 A</td></tr><tr><td>嵌套行 2</td><td>200</td><td>新值 B</td></tr><tr><td>新增嵌套行</td><td>300</td><td>新值 C</td></tr></table> | 新值 2 |
| 行 3 | 普通内容（已修改） | 新值 3 |
| 新增行 | 新增内容 | 新值 4 |

## 5. 混合嵌套结构

1. 第一级有序列表（已修改）
   > 嵌套在列表中的引用（已修改）
   > 
   > ```javascript
   > // 嵌套在引用中的代码块（已修改）
   > function nestedInQuote() {
   >   console.log("新增的日志");
   >   return '这是嵌套在引用中的代码（已修改）';
   > }
   > ```
   > 
   > 新增的引用内容
   
   - 嵌套的无序列表
     1. 再次嵌套的有序列表（已修改）
        - [x] 嵌套的任务列表（已完成）
          - [ ] 深度嵌套的任务
          - [x] 新增的深度嵌套任务（已完成）
     2. 新增的嵌套有序列表
   - 新增的嵌套无序列表

2. 第二级有序列表
   <table>
   <tr><th>嵌套在列表中的表格</th><th>值</th><th>新增列</th></tr>
   <tr><td>数据 1</td><td>300</td><td>新值 X</td></tr>
   <tr><td>数据 2</td><td>400</td><td>新值 Y</td></tr>
   <tr><td>新增数据</td><td>500</td><td>新值 Z</td></tr>
   </table>

3. 新增的有序列表
   > 新增的嵌套引用
   > 
   > - 新增的嵌套列表

## 6. 嵌套 HTML 结构

<div style="border: 1px solid #ccc; padding: 10px;">
  <h3>HTML 中的标题（已修改）</h3>
  <p>一些文本内容（已修改）</p>
  <div style="background-color: #f0f0f0; padding: 10px;">
    <h4>嵌套 div 中的标题</h4>
    <ul>
      <li>列表项 1（已修改）</li>
      <li>列表项 2
        <ol>
          <li>嵌套的有序列表项 1</li>
          <li>嵌套的有序列表项 2（已修改）</li>
          <li>新增的嵌套有序列表项</li>
        </ol>
      </li>
      <li>新增的列表项</li>
    </ul>
    <div style="border: 1px dashed #999; padding: 5px;">
      <p>更深层次的嵌套 div（已修改）</p>
      <blockquote>
        <p>嵌套在 HTML 中的引用（已修改）</p>
        <pre><code>// 嵌套在引用中的代码（已修改）
function deeplyNested() {
  console.log("新增的日志");
  return '这是深度嵌套的代码（已修改）';
}</code></pre>
      </blockquote>
      <p>新增的段落</p>
    </div>
    <div style="border: 1px dotted #666; margin-top: 10px; padding: 5px;">
      <p>新增的嵌套 div</p>
    </div>
  </div>
</div>

## 7. 总结

这个文档包含了各种深度嵌套的结构，用于测试 Markdown 差异比较工具处理复杂嵌套内容的能力。文档已经过更新，包含了多处修改、添加和删除内容，以测试差异比较功能的效果。

## 8. 新增章节

这是一个新增的章节，包含嵌套结构：

> 新章节中的引用
> 
> - 引用中的列表
>   - 嵌套列表
>     ```javascript
>     // 嵌套在列表中的代码
>     function newSectionNested() {
>       return '新章节中的嵌套代码';
>     }
>     ```