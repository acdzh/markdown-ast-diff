import React from 'react';

interface AstButtonsProps {
  markdownText?: string;
  astJson?: any;
}

const AstButtons: React.FC<AstButtonsProps> = ({ markdownText, astJson }) => {
  // 复制markdown文本
  const handleCopyMarkdown = () => {
    if (!markdownText) return;
    
    // 复制markdown文本到剪贴板
    navigator.clipboard.writeText(markdownText)
      .then(() => {
        // 显示提示信息
        alert('Markdown 文本已复制到剪贴板');
      })
      .catch(err => {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制文本');
      });
  };

  // 复制AST JSON
  const handleCopyAstJson = () => {
    if (!astJson) return;
    
    // 将AST对象转换为JSON字符串
    const jsonString = JSON.stringify(astJson, null, 2);
    
    // 复制JSON字符串到剪贴板
    navigator.clipboard.writeText(jsonString)
      .then(() => {
        // 显示提示信息
        alert('AST JSON 已复制到剪贴板');
      })
      .catch(err => {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制JSON');
      });
  };

  return (
    <div>
      <div className="markdown-actions">
        {markdownText && (
          <button 
            className="action-button" 
            onClick={handleCopyMarkdown}
            title="复制 Markdown 文本"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        )}
        {astJson && (
          <button 
            className="action-button" 
            onClick={handleCopyAstJson}
            title="复制 AST JSON"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              <path d="M13 13h5"></path>
              <path d="M13 17h5"></path>
              <path d="M13 15h3"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default AstButtons;
