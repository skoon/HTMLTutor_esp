
import React from 'react';
import type { Lesson } from '../types';
import VocabularyCard from './VocabularyCard';

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-100">{lesson.title_es}</h2>
        <p className="text-lg text-slate-400 font-mono">{lesson.title_en}</p>
      </div>
      <p className="text-slate-300 leading-relaxed">{lesson.content_es}</p>
      
      <div>
        <h3 className="text-xl font-semibold mb-3 text-cyan-400 border-b-2 border-slate-700 pb-2">
          Vocabulario Clave (Key Vocabulary)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {lesson.vocabulary.map((item) => (
            <VocabularyCard key={item.en} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
