import React, { useState, useEffect, ChangeEvent } from 'react';
import { testcases } from './testcases';
import { Testcase } from './types';
import * as diffLib from 'diff';
import './App.css';

// 导入diff相关函数
import { diffMarkdownAst, transformAstWithDiffDataToAstWithDiffNode } from '../../src/index';
import { renderAstToMarkdown } from '../utils/renderAstToMarkdown';
import { renderAstToHtml } from '../utils/renderAstToHtml';

// 导入子组件
import TestcaseSelector from './components/TestcaseSelector';
import MarkdownEditor from './components/MarkdownEditor';
import TextDiffViewer from './components/TextDiffViewer';
import AstDiffViewer from './components/AstDiffViewer';
import HtmlPreview from './components/HtmlPreview';
import AstJsonViewer from './components/AstJsonViewer';
import { markdownToAst } from '../utils/transform';

function App(): JSX.Element {
  const [selectedTestcase, setSelectedTestcase] = useState<string>('formatting');
  const [oldMarkdown, setOldMarkdown] = useState<string>('');
  const [newMarkdown, setNewMarkdown] = useState<string>('');
  const [diffResult, setDiffResult] = useState<diffLib.Change[]>([]);
  const [diffMarkdownText, setDiffMarkdownText] = useState<string>('');
  const [diffHtmlContent, setDiffHtmlContent] = useState<string>('');
  const [diffAst, setDiffAst] = useState<any>(null);

  useEffect(() => {
    // 根据选择的测试用例加载对应的Markdown内容
    const testcase = testcases.find((tc: Testcase) => tc.name === selectedTestcase);
    if (testcase) {
      setOldMarkdown(testcase.oldMarkdown);
      setNewMarkdown(testcase.newMarkdown);
      
      // 计算差异
      updateDiff(testcase.oldMarkdown, testcase.newMarkdown);
    }
  }, [selectedTestcase]);

  const updateDiff = (oldText: string, newText: string): void => {
    const diff = diffLib.diffWords(oldText, newText);
    setDiffResult(diff);

    // 更新AST差异
    const diffAst = transformAstWithDiffDataToAstWithDiffNode(diffMarkdownAst(
      markdownToAst(oldText),
      markdownToAst(newText),
    ));
    const diffMarkdownText = renderAstToMarkdown(diffAst);
    const diffHtml = renderAstToHtml(diffAst);
    
    setDiffAst(diffAst);
    setDiffMarkdownText(diffMarkdownText);
    setDiffHtmlContent(diffHtml);
  };

  const handleTestcaseChange = (testcaseName: string): void => {
    setSelectedTestcase(testcaseName);
  };

  const handleOldMarkdownChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = e.target.value;
    setOldMarkdown(newValue);
    updateDiff(newValue, newMarkdown);
  };

  const handleNewMarkdownChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = e.target.value;
    setNewMarkdown(newValue);
    updateDiff(oldMarkdown, newValue);
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1 className="app-title">Markdown Diff Viewer</h1>
      </header>
      
      <div className="app-description">
        <p>比较并可视化展示Markdown文档的差异，支持AST级别的精确对比</p>
      </div>
      
      <TestcaseSelector 
        testcases={testcases}
        selectedTestcase={selectedTestcase}
        onTestcaseChange={handleTestcaseChange}
      />

      <div className="grid-layout row-1">
        <MarkdownEditor 
          title="原始Markdown"
          value={oldMarkdown}
          onChange={handleOldMarkdownChange}
        />
        
        <TextDiffViewer diffResult={diffResult} />
        
        <MarkdownEditor 
          title="新Markdown"
          value={newMarkdown}
          onChange={handleNewMarkdownChange}
        />
      </div>

      <div className="grid-layout row-2">
        <AstDiffViewer diffMarkdownText={diffMarkdownText} />
        
        <HtmlPreview htmlContent={diffHtmlContent} />
      </div>

      <div className="grid-layout row-3">
        <AstJsonViewer astJson={diffAst} />
      </div>
      
      <div className="external-links">
        <a href="https://astexplorer.net/" target="_blank" rel="noopener noreferrer">
          <span className="link-icon">🔍</span> AST Explorer
        </a>
        <a href="https://jsonhero.io" target="_blank" rel="noopener noreferrer">
          <span className="link-icon">🦸</span> JSONHero
        </a>
      </div>
      
      <footer className="app-footer">
        <p>Markdown Diff Viewer - 高效比较Markdown文档差异的工具</p>
      </footer>
    </div>
  );
}

export default App;
