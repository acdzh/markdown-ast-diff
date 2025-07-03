import type { Node } from '../../src/type';
import { isInlineElement } from './node';

/**
 * 将AST渲染为HTML文本
 * @param {Object} ast - Markdown AST
 * @param {Object} options - 渲染选项
 * @returns {string} 渲染后的HTML文本
 */
export function renderAstToHtml(ast: Node) {
  // 克隆AST以避免修改原始对象
  const renderAst = JSON.parse(JSON.stringify(ast));
  
  // 递归处理所有节点
  processNode(renderAst);
  
  // 将处理后的AST转换为HTML文本
  const htmlContent = astToHtml(renderAst);
  
  // 添加样式
  const htmlWithStyles = addStyles(htmlContent);
  
  return htmlWithStyles;
}

/**
 * 递归处理节点，为HTML渲染做准备
 * @param {Object} node - AST节点
 */
function processNode(node) {
  // 处理当前节点
  prepareNodeForHtml(node);

  // 递归处理子节点
  if (node.children && node.children.length > 0) {
    for (const child of node.children) {
      processNode(child);
    }
  }
}

/**
 * 为节点准备HTML渲染所需的属性
 * @param {Object} node - AST节点
 */
function prepareNodeForHtml(node) {
  // 这里可以添加一些HTML特定的处理逻辑
  // 例如添加class、id或其他HTML属性
  if (!node.data) node.data = {};
  if (!node.data.hProperties) node.data.hProperties = {};
  
  // 处理 data.diff 属性
  if (node.data && node.data.diff) {
    // 将 diff 信息添加到 data-diff 属性
    node.data.hProperties['data-diff'] = node.data.diff;
  }
  
  // 根据节点类型添加特定的HTML属性
  switch (node.type) {
    case 'ins':
    case 'del':
      if (node?.children?.some(child => !isInlineElement(child))) {
        node.data.hProperties.class = 'diff-block';
      } else {
        node.data.hProperties.class = 'diff-inline';
      }
      break;
    case 'heading':
      node.data.hProperties.class = `heading-${node.depth}`;
      break;
    case 'list':
      node.data.hProperties.class = node.ordered ? 'ordered-list' : 'unordered-list';
      let index = 1;
      node.children.forEach(child => {
        if (child.type === 'listItem') {
          if (!child.data) child.data = {};
          if (!child.data.hProperties) child.data.hProperties = {};
          child.data.hProperties.value = index;
          if (child.data.diff !== 'del') {
            index++;
          }
        }
      })
      break;
    case 'listItem':
      node.data.hProperties.class = 'list-item';
      // 为 listItem 添加 diff 相关的类，以便特殊处理样式
      if (node.data && node.data.diff) {
        node.data.hProperties.class += ` list-item-${node.data.diff}`;
      }
      break;
    case 'paragraph':
      node.data.hProperties.class = 'paragraph';
      break;
    case 'text':
      // 为文本节点添加默认的 class
      node.data.hProperties.class = 'text';
      break;
    case 'strong':
      node.data.hProperties.class = 'strong';
      break;
    case 'emphasis':
      node.data.hProperties.class = 'emphasis';
      break;
    case 'delete':
      node.data.hProperties.class = 'delete';
      break;
    case 'code':
      node.data.hProperties.class = 'code';
      if (node.lang) {
        node.data.hProperties['data-language'] = node.lang;
      }
      break;
    case 'link':
      node.data.hProperties.href = node.url;
      node.data.hProperties.title = node.title;
      break;
    case 'image':
      node.data.hProperties.src = node.url;
      node.data.hProperties.alt = node.alt;
      node.data.hProperties.title = node.title;
      break;
    case 'table':
      node.data.hProperties.class = 'markdown-table';
      break;
    case 'tableRow':
      node.data.hProperties.class = 'table-row';
      break;
    case 'tableCell':
      node.data.hProperties.class = 'table-cell';
      // 处理表头单元格
      if (node.isHeader) {
        node.data.hProperties.class += ' table-header-cell';
      }
      // 处理对齐方式
      if (node.align) {
        node.data.hProperties.class += ` align-${node.align}`;
      }
      break;
  }
}

/**
 * 将AST转换为HTML文本
 * @param {Object} ast - 处理后的AST
 * @returns {string} HTML文本
 */
function astToHtml(ast) {
  let html = '';
  
  // 处理根节点
  if (ast.type === 'root') {
    html = '<div class="markdown-content">';
    for (const child of ast.children) {
      html += nodeToHtml(child);
    }
    html += '</div>';
  } else {
    html = nodeToHtml(ast);
  }
  
  return html;
}

/**
 * 添加样式到HTML
 * @param {string} html - HTML内容
 * @returns {string} 添加了样式的HTML
 */
function addStyles(html) {
  const styles = `
    <style>
      /* 基本样式 */
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
      }
      
      /* 标题样式 */
      h1, h2, h3, h4, h5, h6 {
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        font-weight: 600;
        line-height: 1.25;
      }
      h1 { font-size: 2em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
      h2 { font-size: 1.5em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
      h3 { font-size: 1.25em; }
      h4 { font-size: 1em; }
      h5 { font-size: 0.875em; }
      h6 { font-size: 0.85em; color: #6a737d; }
      
      /* 段落样式 */
      p {
        margin-top: 0;
        margin-bottom: 16px;
      }
      
      /* 链接样式 */
      a {
        color: #0366d6;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      
      /* 列表样式 */
      ul, ol {
        padding-left: 2em;
        margin-top: 0;
        margin-bottom: 16px;
      }
      li {
        margin-bottom: 0.25em;
      }
      
      /* 代码样式 */
      code {
        font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27, 31, 35, 0.05);
        border-radius: 3px;
      }
      pre {
        font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 3px;
        margin-top: 0;
        margin-bottom: 16px;
      }
      pre code {
        padding: 0;
        margin: 0;
        background-color: transparent;
        border: 0;
      }
      
      /* 引用样式 */
      blockquote {
        padding: 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
        margin: 0 0 16px 0;
      }
      
      /* 表格样式 */
      table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 0;
        margin-bottom: 16px;
        display: block;
        overflow-x: auto;
      }
      table th, table td {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
      }
      table tr {
        background-color: #fff;
        border-top: 1px solid #c6cbd1;
      }
      table tr:nth-child(2n) {
        background-color: #f6f8fa;
      }
      table th {
        font-weight: 600;
        background-color: #f6f8fa;
      }
      .align-left {
        text-align: left;
      }
      .align-center {
        text-align: center;
      }
      .align-right {
        text-align: right;
      }
      
      /* 水平线样式 */
      hr {
        height: 0.25em;
        padding: 0;
        margin: 24px 0;
        background-color: #e1e4e8;
        border: 0;
      }
      
      /* 差异标记样式 */
      ins {
        background-color: #e6ffec;
        color: #24292e;
        text-decoration: none;
        border-radius: 2px;
        padding: 0 2px;
      }
      
      del {
        background-color: #ffebe9;
        color: #24292e;
        text-decoration: line-through;
        border-radius: 2px;
        padding: 0 2px;
      }

      ins.diff-block, del.diff-block {
        display: block;
        padding-left: 10px;
        border-left-width: 3px;
        border-left-style: solid;
      }
      
      ins.diff-block {
        border-left-color: #2cbe4e;
      }
      
      del.diff-block {
        border-left-color: #cb2431;
      }

      ins > hr, ins > pre.code {
        background-color: #e6ffec;
      }

      del > hr, del > pre.code {
        background-color: #ffebe9;
      }
      
      /* 列表项差异样式 */
      li.list-item-ins, li[data-diff="ins"] {
        background-color: #e6ffec;
        border-radius: 2px;
      }
      
      li.list-item-del, li[data-diff="del"] {
        background-color: #ffebe9;
        border-radius: 2px;
        text-decoration: line-through;
      }
    </style>
  `;
  
  // 在 <head> 标签中添加样式，如果没有 <head> 标签则在文档开头添加
  if (html.includes('<head>')) {
    return html.replace('<head>', `<head>${styles}`);
  } else if (html.includes('<html>')) {
    return html.replace('<html>', `<html><head>${styles}</head>`);
  } else {
    return `<html><head>${styles}</head><body>${html}</body></html>`;
  }
}

/**
 * 将单个节点转换为HTML
 * @param {Object} node - AST节点
 * @returns {string} 节点的HTML表示
 */
function nodeToHtml(node) {
  if (!node) return '';
  
  const props = node.data?.hProperties || {};
  const propsStr = Object.entries(props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
  
  let html = '';
  
  switch (node.type) {
    case 'ins': 
      html = `<ins ${propsStr}>${childrenToHtml(node)}</ins>`;
      break;
    case 'del':
      html = `<del ${propsStr}>${childrenToHtml(node)}</del>`;
      break;
    case 'heading':
      html = `<h${node.depth} ${propsStr}>${childrenToHtml(node)}</h${node.depth}>`;
      break;
    case 'paragraph':
      html = `<p ${propsStr}>${childrenToHtml(node)}</p>`;
      break;
    case 'text':
      // 将文本节点渲染为 span 元素，以便应用样式
      html = `<span ${propsStr}>${escapeHtml(node.value)}</span>`;
      break;
    case 'strong':
      html = `<strong ${propsStr}>${childrenToHtml(node)}</strong>`;
      break;
    case 'emphasis':
      html = `<em ${propsStr}>${childrenToHtml(node)}</em>`;
      break;
    case 'delete':
      html = `<del ${propsStr}>${childrenToHtml(node)}</del>`;
      break;
    case 'link':
      html = `<a ${propsStr}>${childrenToHtml(node)}</a>`;
      break;
    case 'image':
      html = `<img ${propsStr} />`;
      break;
    case 'list':
      const listTag = node.ordered ? 'ol' : 'ul';
      html = `<${listTag} ${propsStr}>${childrenToHtml(node)}</${listTag}>`;
      break;
    case 'listItem':
      html = `<li ${propsStr}>${childrenToHtml(node)}</li>`;
      break;
    case 'code':
      if (node.lang) {
        html = `<pre ${propsStr}><code>${escapeHtml(node.value)}</code></pre>`;
      } else {
        html = `<code ${propsStr}>${escapeHtml(node.value)}</code>`;
      }
      break;
    case 'inlineCode':
      html = `<code ${propsStr}>${escapeHtml(node.value)}</code>`;
      break;
    case 'blockquote':
      html = `<blockquote ${propsStr}>${childrenToHtml(node)}</blockquote>`;
      break;
    case 'thematicBreak':
      html = `<hr ${propsStr} />`;
      break;
    case 'html':
      // 原始HTML直接传递
      html = `<div ${propsStr}>${node.value}</div>`
      break;
    // 表格相关节点处理
    case 'table':
      html = `<table ${propsStr}>${childrenToHtml(node)}</table>`;
      break;
    case 'tableRow':
      html = `<tr ${propsStr}>${childrenToHtml(node)}</tr>`;
      break;
    case 'tableCell':
      // 根据是否为表头选择使用 th 或 td
      const cellTag = node.isHeader ? 'th' : 'td';
      html = `<${cellTag} ${propsStr}>${childrenToHtml(node)}</${cellTag}>`;
      break;
    default:
      // 对于未知类型，尝试处理子节点
      html = childrenToHtml(node);
  }
  
  return html;
}

/**
 * 处理节点的所有子节点
 * @param {Object} node - 包含子节点的AST节点
 * @returns {string} 所有子节点的HTML表示
 */
function childrenToHtml(node) {
  if (!node.children || node.children.length === 0) return '';
  
  return node.children.map(child => nodeToHtml(child)).join('');
}

/**
 * 转义HTML特殊字符
 * @param {string} text - 需要转义的文本
 * @returns {string} 转义后的文本
 */
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
