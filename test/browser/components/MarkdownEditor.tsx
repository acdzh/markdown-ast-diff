import React, { ChangeEvent } from 'react';
import AstButtons from './AstButtons';
import { markdownToAst } from '../../utils/transform';

interface MarkdownEditorProps {
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ title, value, onChange }) => {
  return (
    <div className="markdown-container">
      <div className="markdown-header">
        <h2>{title}</h2>
        <AstButtons markdownText={value} astJson={markdownToAst(value)} />
      </div>
      <textarea 
        className="markdown-content" 
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MarkdownEditor;
