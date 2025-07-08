import React from 'react';
import { Testcase } from '../types';

interface TestcaseSelectorProps {
  testcases: Testcase[];
  selectedTestcase: string;
  onTestcaseChange: (testcaseName: string) => void;
}

const TestcaseSelector: React.FC<TestcaseSelectorProps> = ({
  testcases,
  selectedTestcase,
  onTestcaseChange
}) => {
  return (
    <div className="controls">
      <label>选择测试用例：</label>
      <div className="testcase-buttons">
        {testcases.map((tc: Testcase) => (
          <button
            key={tc.name}
            className={`testcase-button ${selectedTestcase === tc.name ? 'selected' : ''}`}
            onClick={() => onTestcaseChange(tc.name)}
          >
            {tc.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestcaseSelector;
