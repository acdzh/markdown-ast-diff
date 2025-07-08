import React from 'react';

interface HtmlPreviewProps {
  htmlContent: string;
}

const HtmlPreview: React.FC<HtmlPreviewProps> = ({ htmlContent }) => {
  // 创建一个Blob URL用于iframe
  const getHtmlBlobUrl = (): string => {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    return URL.createObjectURL(blob);
  };

  return (
    <div className="markdown-container">
      <h2>AST Diff HTML</h2>
      <iframe 
        className="html-preview" 
        src={getHtmlBlobUrl()} 
        title="HTML Diff Preview"
      ></iframe>
    </div>
  );
};

export default HtmlPreview;
