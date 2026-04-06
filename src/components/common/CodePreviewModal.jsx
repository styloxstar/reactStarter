import React from 'react';
import { createPortal } from 'react-dom';
import { useCopyCode } from '../../hooks/useCopyCode';

const CodePreviewModal = ({ isOpen, onClose, codeSnippets }) => {
  const { activeTab, setActiveTab, isCopied, copyToClipboard } = useCopyCode();

  if (!isOpen) return null;

  const currentCode = codeSnippets[activeTab] || '';

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
          <div className="flex gap-4">
            {['jsx', 'html', 'css'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab === 'jsx' ? 'React + Tailwind' : tab === 'html' ? 'HTML' : 'Vanilla CSS'}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => copyToClipboard(currentCode)}
              className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                isCopied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-100'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {isCopied ? 'Copied!' : 'Copy Code'}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-[#0d1117] p-8">
          <pre className="text-gray-300 text-left text-justify font-mono text-sm leading-7">
            <code>{currentCode}</code>
          </pre>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CodePreviewModal;
