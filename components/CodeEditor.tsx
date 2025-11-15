
import React from 'react';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  language: 'HTML' | 'CSS';
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode, language }) => {
  const languageColor = language === 'HTML' ? 'text-orange-400' : 'text-blue-400';

  return (
    <div className="flex flex-col h-full bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
      <div className="bg-slate-900 text-white py-2 px-4 font-mono text-sm flex justify-between items-center">
        <span>Editor</span>
        <span className={languageColor}>{language}</span>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-full p-4 bg-transparent text-slate-200 font-mono text-sm resize-none focus:outline-none"
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
      />
    </div>
  );
};

export default CodeEditor;
