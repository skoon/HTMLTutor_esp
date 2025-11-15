
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-sm border-b border-slate-700 p-4 sticky top-0 z-10">
      <h1 className="text-xl md:text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
        Aprende a Crear tu Página Web con HTML y CSS
      </h1>
    </header>
  );
};

export default Header;
