
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LessonContent from './components/LessonContent';
import CodeEditor from './components/CodeEditor';
import LivePreview from './components/LivePreview';
import Footer from './components/Footer';
import { lessons } from './data/lessons';

const App: React.FC = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');

  useEffect(() => {
    const currentLesson = lessons[currentLessonIndex];
    setHtmlCode(currentLesson.example_html);
    setCssCode(currentLesson.example_css);
  }, [currentLessonIndex]);

  const handlePrevLesson = () => {
    setCurrentLessonIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextLesson = () => {
    setCurrentLessonIndex((prevIndex) => Math.min(lessons.length - 1, prevIndex + 1));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        {/* Left Pane: Lesson Content */}
        <div className="bg-slate-900 overflow-y-auto" style={{maxHeight: 'calc(100vh - 140px)'}}>
          <LessonContent lesson={lessons[currentLessonIndex]} />
        </div>

        {/* Right Pane: Editor & Preview */}
        <div className="bg-slate-800/50 p-4 grid grid-rows-2 gap-4" style={{maxHeight: 'calc(100vh - 72px)'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            <CodeEditor code={htmlCode} setCode={setHtmlCode} language="HTML" />
            <CodeEditor code={cssCode} setCode={setCssCode} language="CSS" />
          </div>
          <LivePreview htmlCode={htmlCode} cssCode={cssCode} />
        </div>
      </main>
      <Footer
        currentLessonIndex={currentLessonIndex}
        totalLessons={lessons.length}
        onPrev={handlePrevLesson}
        onNext={handleNextLesson}
      />
    </div>
  );
};

export default App;
