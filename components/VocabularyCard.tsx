
import React from 'react';
import type { VocabularyItem } from '../types';

interface VocabularyCardProps {
  item: VocabularyItem;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({ item }) => {
  return (
    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 transition-all hover:border-cyan-500 hover:bg-slate-800">
      <div className="flex justify-between items-baseline">
        <h4 className="font-bold text-cyan-400">{item.es}</h4>
        <p className="text-sm text-slate-400 font-mono">{item.en}</p>
      </div>
      <p className="mt-2 text-slate-300 text-sm">{item.description_es}</p>
    </div>
  );
};

export default VocabularyCard;
