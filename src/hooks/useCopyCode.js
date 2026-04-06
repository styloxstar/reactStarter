import { useState } from 'react';

export const useCopyCode = () => {
  const [activeTab, setActiveTab] = useState('jsx'); // jsx, html, css
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };

  return {
    activeTab,
    setActiveTab,
    isCopied,
    copyToClipboard
  };
};
