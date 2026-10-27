import React, { useState, useEffect, useCallback, useRef, ChangeEvent } from 'react';
import { testcases, groupTestcases } from './testcases';
import { Testcase } from './types';
import * as diffLib from 'diff';
import './App.css';

import { diffMarkdownAst, transformAstWithDiffDataToAstWithDiffNode } from '../../src/index';
import { renderAstToMarkdown } from '../utils/renderAstToMarkdown';
import { renderAstToHtml } from '../utils/renderAstToHtml';
import { markdownToAst } from '../utils/transform';

type ResultTab = 'text-diff' | 'ast-markdown' | 'html-preview' | 'ast-json';

function CopyButton({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(getText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [getText]);

  return (
    <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function App(): JSX.Element {
  const [selectedTestcase, setSelectedTestcase] = useState<string>(
    testcases.find(tc => tc.name === 'scenario/formatting')?.name ?? testcases[0]?.name ?? '',
  );
  const [oldMarkdown, setOldMarkdown] = useState<string>('');
  const [newMarkdown, setNewMarkdown] = useState<string>('');
  const [diffResult, setDiffResult] = useState<diffLib.Change[]>([]);
  const [diffMarkdownText, setDiffMarkdownText] = useState<string>('');
  const [diffHtmlContent, setDiffHtmlContent] = useState<string>('');
  const [diffAst, setDiffAst] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<ResultTab>('html-preview');
  const [editorHeight, setEditorHeight] = useState<number>(50);
  const draggingRef = useRef(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current || !mainRef.current) {
        return;
      }
      const rect = mainRef.current.getBoundingClientRect();
      const pct = ((e.clientY - rect.top) / rect.height) * 100;
      setEditorHeight(Math.min(Math.max(pct, 15), 85));
    };
    const handleMouseUp = () => {
      if (draggingRef.current) {
        draggingRef.current = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    draggingRef.current = true;
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const updateDiff = useCallback((oldText: string, newText: string): void => {
    const diff = diffLib.diffWords(oldText, newText);
    setDiffResult(diff);

    const ast = transformAstWithDiffDataToAstWithDiffNode(diffMarkdownAst(
      markdownToAst(oldText),
      markdownToAst(newText),
    ));
    setDiffAst(ast);
    setDiffMarkdownText(renderAstToMarkdown(ast));
    renderAstToHtml(ast).then(setDiffHtmlContent);
  }, []);

  useEffect(() => {
    const testcase = testcases.find((tc: Testcase) => tc.name === selectedTestcase);
    if (testcase) {
      setOldMarkdown(testcase.oldMarkdown);
      setNewMarkdown(testcase.newMarkdown);
      updateDiff(testcase.oldMarkdown, testcase.newMarkdown);
    }
  }, [selectedTestcase, updateDiff]);

  const handleOldChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setOldMarkdown(val);
    updateDiff(val, newMarkdown);
  }, [newMarkdown, updateDiff]);

  const handleNewChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNewMarkdown(val);
    updateDiff(oldMarkdown, val);
  }, [oldMarkdown, updateDiff]);

  const renderResultContent = () => {
    switch (activeTab) {
      case 'text-diff':
        return (
          <div className="diff-text-view">
            {diffResult.map((part, i) => (
              <span key={i} className={part.added ? 'added' : part.removed ? 'removed' : ''}>
                {part.value}
              </span>
            ))}
          </div>
        );

      case 'ast-markdown':
        return (
          <div className="ast-diff-view">
            <AstDiffContent text={diffMarkdownText} />
          </div>
        );

      case 'html-preview': {
        return <iframe className="html-preview-frame" srcDoc={diffHtmlContent} title="HTML Diff Preview" sandbox="allow-same-origin" />;
      }

      case 'ast-json':
        return (
          <pre className="json-view">{JSON.stringify(diffAst, null, 2)}</pre>
        );
    }
  };

  const getResultCopyText = useCallback((): string => {
    switch (activeTab) {
      case 'text-diff':
        return diffResult.map(p => p.value).join('');
      case 'ast-markdown':
        return diffMarkdownText;
      case 'html-preview':
        return diffHtmlContent;
      case 'ast-json':
        return JSON.stringify(diffAst, null, 2);
    }
  }, [activeTab, diffResult, diffMarkdownText, diffHtmlContent, diffAst]);

  return (
    <div className="app">
      <div className="toolbar">
        <span className="toolbar-title">Markdown AST Diff</span>
        <select
          className="testcase-select"
          value={selectedTestcase}
          onChange={(e) => setSelectedTestcase(e.target.value)}
        >
          {groupTestcases(testcases).map(({ group, cases }) => (
            <optgroup key={group} label={group}>
              {cases.map((tc: Testcase) => (
                <option key={tc.name} value={tc.name}>
                  {tc.name.slice(group.length + 1) || tc.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="main" ref={mainRef}>
        <div className="editor-row" style={{ height: `${editorHeight}%` }}>
          <div className="editor-pane">
            <div className="pane-header">
              <span className="pane-label">Old</span>
              <CopyButton getText={() => oldMarkdown} />
            </div>
            <textarea
              className="editor-textarea"
              value={oldMarkdown}
              onChange={handleOldChange}
              placeholder="Paste old markdown here..."
            />
          </div>
          <div className="editor-pane">
            <div className="pane-header">
              <span className="pane-label">New</span>
              <CopyButton getText={() => newMarkdown} />
            </div>
            <textarea
              className="editor-textarea"
              value={newMarkdown}
              onChange={handleNewChange}
              placeholder="Paste new markdown here..."
            />
          </div>
        </div>

        <div className="resize-handle" onMouseDown={handleResizeStart} />

        <div className="result-row" style={{ height: `calc(${100 - editorHeight}% - 5px)` }}>
          <div className="result-tabs">
            {([
              ['html-preview', 'HTML Preview'],
              ['ast-markdown', 'AST Markdown'],
              ['text-diff', 'Text Diff'],
              ['ast-json', 'AST JSON'],
            ] as [ResultTab, string][]).map(([key, label]) => (
              <button
                key={key}
                className={`result-tab ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
            <div style={{ flex: 1 }} />
            <CopyButton getText={getResultCopyText} />
          </div>
          <div className="result-content">
            {renderResultContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

function AstDiffContent({ text }: { text: string }) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  const decoded = textarea.value;

  const segments: JSX.Element[] = [];
  let cursor = 0;

  const allMatches = [
    ...decoded.matchAll(/\{\+\+\+\+(.*?)\+\+\+\+\}/gs),
    ...decoded.matchAll(/\{----(.*?)----\}/gs),
    ...decoded.matchAll(/\{\+\+listItem\+\+\}/g),
    ...decoded.matchAll(/\{--listItem--\}/g),
  ].sort((a, b) => a.index! - b.index!);

  if (allMatches.length === 0) {
    return <>{decoded}</>;
  }

  allMatches.forEach((match, i) => {
    const idx = match.index!;
    const full = match[0];

    if (idx > cursor) {
      segments.push(<span key={`t${i}`}>{decoded.substring(cursor, idx)}</span>);
    }

    let cls = '';
    if (full === '{++listItem++}') {
      cls = 'list-ins-mark';
    } else if (full === '{--listItem--}') {
      cls = 'list-del-mark';
    } else if (full.startsWith('{++++')) {
      cls = 'ins-mark';
    } else if (full.startsWith('{----')) {
      cls = 'del-mark';
    }

    segments.push(<span key={`m${i}`} className={cls}>{full}</span>);
    cursor = idx + full.length;
  });

  if (cursor < decoded.length) {
    segments.push(<span key="last">{decoded.substring(cursor)}</span>);
  }

  return <>{segments}</>;
}

export default App;
