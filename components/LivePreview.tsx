
import React, { useMemo } from 'react';

interface LivePreviewProps {
  htmlCode: string;
  cssCode: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ htmlCode, cssCode }) => {
  const srcDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
      </html>
    `;
  }, [htmlCode, cssCode]);

  return (
    <div className="flex flex-col h-full bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
      <div className="bg-slate-900 text-white py-2 px-4 font-mono text-sm">
        Vista Previa (Live Preview)
      </div>
      <iframe
        srcDoc={srcDoc}
        title="Live Preview"
        sandbox="allow-scripts"
        className="w-full h-full bg-white"
      />
    </div>
  );
};

export default LivePreview;
