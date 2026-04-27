import React, { useState } from 'react';
import CodePreviewModal from './CodePreviewModal';

const CopyButton = ({ jsxCode, htmlCode, cssCode, jsCode, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const codeSnippets = {
    jsx: jsxCode,
    html: htmlCode,
    css: cssCode,
    js: jsCode
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`p-2 bg-white/80 backdrop-blur border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-white text-indigo-600 transition-all duration-200 active:scale-95 group z-30 ${className}`}
        title="View & Copy Code"
      >
        <svg
          className="w-5 h-5 group-hover:rotate-12 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>

      <CodePreviewModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        codeSnippets={codeSnippets}
      />
    </>
  );
};

export default CopyButton;
