import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-crema-200/80 border-t border-crema-300/80 py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <button
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          className="p-3 rounded-full bg-white shadow-sm hover:shadow text-tierra-700 hover:text-terracota border border-crema-300 transition-all hover:-translate-y-1"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <div>
          <p className="font-serif text-2xl font-bold text-tierra-900 mb-2">
            Lidy Osorio Carreño
          </p>
          <p className="text-xs sm:text-sm text-tierra-700 max-w-md mx-auto leading-relaxed">
            Dedicado con amor eterno por Juan Carlos Niño Osorio y toda tu familia. Siempre juntos en cada sendero y en cada canción.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-tierra-700/80 font-medium">
          <span>Hecho con amor para Mamá</span>
          <Heart className="w-3.5 h-3.5 text-terracota fill-current" />
          <span>Bucaramanga, Santander</span>
        </div>
      </div>
    </footer>
  );
};
