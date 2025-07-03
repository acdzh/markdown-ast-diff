import React from 'react';
import * as diffLib from 'diff';

interface TextDiffViewerProps {
  diffResult: diffLib.Change[];
}

const TextDiffViewer: React.FC<TextDiffViewerProps> = ({ diffResult }) => {
  return (
    <div className="markdown-container">
      <h2>文本差异</h2>
      <pre className="markdown-content diff-content">
        {diffResult.map((part, index) => {
          const color = part.added ? 'green' : part.removed ? 'red' : 'grey';
          return (
            <span key={index} style={{ color }}>
              {part.value}
            </span>
          );
        })}
      </pre>
    </div>
  );
};

export default TextDiffViewer;