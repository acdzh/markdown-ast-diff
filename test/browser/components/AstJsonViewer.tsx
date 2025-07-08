import React from 'react';
import AstButtons from './AstButtons';

interface AstJsonViewerProps {
  astJson: any;
}

const AstJsonViewer: React.FC<AstJsonViewerProps> = ({ astJson }) => {
  return (
    <div className="markdown-container">
      <div className="markdown-header">
        <h2>AST JSON</h2>
        <AstButtons astJson={astJson} />
      </div>
      <pre className="ast-json-content">
        {JSON.stringify(astJson, null, 2)}
      </pre>
    </div>
  );
};

export default AstJsonViewer;
