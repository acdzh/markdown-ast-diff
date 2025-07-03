import React from 'react';
import AstButtons from './AstButtons';

interface AstDiffViewerProps {
  diffMarkdownText: string;
}

const AstDiffViewer: React.FC<AstDiffViewerProps> = ({ diffMarkdownText }) => {
  // 处理整个文本，而不是按行分割
  // 首先解码HTML实体
  const decodeHtmlEntities = (text: string): string => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  };
  
  const renderDiffContent = () => {
    const text = decodeHtmlEntities(diffMarkdownText);
    let segments = [];
    let currentIndex = 0;
    
    // 查找所有的添加和删除标记
    const addedMatches = [...text.matchAll(/\{\+\+\+\+(.*?)\+\+\+\+\}/gs)];
    const removedMatches = [...text.matchAll(/\{----(.*?)----\}/gs)];
    
    // 查找特殊的列表项标记
    const addedListItemMatches = [...text.matchAll(/\{\+\+listItem\+\+\}/g)];
    const removedListItemMatches = [...text.matchAll(/\{--listItem--\}/g)];
    
    // 合并所有匹配并按位置排序
    const allMatches = [
      ...addedMatches, 
      ...removedMatches, 
      ...addedListItemMatches, 
      ...removedListItemMatches
    ].sort((a, b) => a.index - b.index);
    
    // 如果没有找到任何匹配，直接返回整个文本
    if (allMatches.length === 0) {
      return text;
    }
    
    // 处理每个匹配
    allMatches.forEach((match, index) => {
      const matchText = match[0];
      const matchIndex = match.index;
      
      // 添加匹配前的文本
      if (matchIndex > currentIndex) {
        segments.push(
          <span key={`text-${index}-before`}>
            {text.substring(currentIndex, matchIndex)}
          </span>
        );
      }
      
      // 添加匹配的文本，根据类型设置样式
      if (matchText === '{++listItem++}') {
        segments.push(
          <span key={`match-${index}`} className="list-item-added">
            {matchText}
          </span>
        );
      } else if (matchText === '{--listItem--}') {
        segments.push(
          <span key={`match-${index}`} className="list-item-removed">
            {matchText}
          </span>
        );
      } else if (matchText.startsWith('{++++')) {
        segments.push(
          <span key={`match-${index}`} className="diff-added-inline">
            {matchText}
          </span>
        );
      } else if (matchText.startsWith('{----')) {
        segments.push(
          <span key={`match-${index}`} className="diff-removed-inline">
            {matchText}
          </span>
        );
      }
      
      currentIndex = matchIndex + matchText.length;
    });
    
    // 添加最后一个匹配后的文本
    if (currentIndex < text.length) {
      segments.push(
        <span key="text-last">
          {text.substring(currentIndex)}
        </span>
      );
    }
    
    return segments;
  };

  return (
    <div className="markdown-container">
      <div className="markdown-header">
        <h2>AST Diff Markdown</h2>
        <AstButtons markdownText={diffMarkdownText} />
      </div>
      <pre className="markdown-content ast-diff-content">
        {renderDiffContent()}
      </pre>
    </div>
  );
};

export default AstDiffViewer;