import React, { useRef } from 'react';
import ClipboardJS from 'clipboard';
import "./CodeBox.css"

const CodeBox = ({ code }) => {
  const codeRef = useRef(null);

  const copyToClipboard = () => {
    const clipboard = new ClipboardJS('.copy-button', {
      text: () => code,
    });

    clipboard.on('success', (e) => {
      e.clearSelection();
      alert('Code copied to clipboard!');
    });

    clipboard.on('error', (e) => {
      console.error('Copy to clipboard failed:', e);
    });

    clipboard.onClick({ delegateTarget: codeRef.current });
  };

  return (
    <div className="code-snippet">
      <pre ref={codeRef}>
        <code>{code}</code>
      </pre>
      <button className="copy-button" onClick={copyToClipboard}>
        Copy to Clipboard
      </button>
    </div>
  );
};

export default CodeBox;
