
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../constants';

interface FooterProps {
  currentLessonIndex: number;
  totalLessons: number;
  onPrev: () => void;
  onNext: () => void;
}

const Footer: React.FC<FooterProps> = ({ currentLessonIndex, totalLessons, onPrev, onNext }) => {
  const isFirstLesson = currentLessonIndex === 0;
  const isLastLesson = currentLessonIndex === totalLessons - 1;

  return (
    <footer className="bg-slate-900/70 backdrop-blur-sm border-t border-slate-700 p-4 sticky bottom-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={onPrev}
          disabled={isFirstLesson}
          className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
        >
          <ArrowLeftIcon />
          Anterior
        </button>
        <div className="text-sm text-slate-400">
          Lección {currentLessonIndex + 1} de {totalLessons}
        </div>
        <button
          onClick={onNext}
          disabled={isLastLesson}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-500 transition-colors"
        >
          Siguiente
          <ArrowRightIcon />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
