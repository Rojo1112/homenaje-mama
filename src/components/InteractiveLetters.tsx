import React, { useState } from 'react';
import { LETTERS, LetterItem } from '../data/content';
import { Mail, MailOpen, HeartHandshake, ShieldCheck, Smile, Music, Sparkles } from 'lucide-react';

export const InteractiveLetters: React.FC = () => {
  const [openLetterId, setOpenLetterId] = useState<string | null>(null);

  const toggleLetter = (id: string) => {
    setOpenLetterId(prev => (prev === id ? null : id));
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-terracota" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-oliva" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-miel-dark" />;
      case 'Music':
        return <Music className="w-5 h-5 text-terracota-dark" />;
      default:
        return <Sparkles className="w-5 h-5 text-terracota" />;
    }
  };

  return (
    <section id="cartas" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-terracota tracking-widest uppercase mb-2 block">
          Cartas Interactivas
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-tierra-900 tracking-tight">
          Sobres para Cada Ocasión
        </h2>
        <div className="w-16 h-1 bg-terracota mx-auto my-4 rounded-full"></div>
        <p className="text-tierra-700 text-sm sm:text-base">
          Toca cualquier sobre para abrir una carta pensada con amor para diferentes momentos de tu día.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LETTERS.map((letter: LetterItem) => {
          const isOpen = openLetterId === letter.id;

          return (
            <div
              key={letter.id}
              className={`rounded-2xl transition-all duration-300 border ${
                isOpen
                  ? 'bg-white shadow-letter border-terracota/40 ring-1 ring-terracota/20'
                  : 'bg-white/80 hover:bg-white shadow-sm border-crema-300 hover:border-terracota/30'
              }`}
            >
              {/* Envelope header (Clickable) */}
              <button
                onClick={() => toggleLetter(letter.id)}
                aria-expanded={isOpen}
                className="w-full text-left p-6 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      isOpen ? 'bg-terracota/15' : 'bg-crema-200'
                    }`}
                  >
                    {isOpen ? (
                      <MailOpen className="w-6 h-6 text-terracota" />
                    ) : (
                      <Mail className="w-6 h-6 text-tierra-700" />
                    )}
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracota-dark uppercase tracking-wider mb-1">
                      {getIcon(letter.iconName)}
                      {letter.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-tierra-900">
                      {letter.title}
                    </h3>
                  </div>
                </div>

                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-colors ${
                    isOpen
                      ? 'bg-terracota text-white'
                      : 'bg-crema-200 text-tierra-800'
                  }`}
                >
                  {isOpen ? 'Cerrar' : 'Abrir'}
                </span>
              </button>

              {/* Letter content dropdown */}
              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-crema-200/70 animate-fade-in">
                  <div className="bg-crema-100/60 p-5 rounded-xl border border-crema-300/50">
                    <p className="text-sm sm:text-base text-tierra-800 leading-relaxed font-sans mb-4 whitespace-pre-line">
                      {letter.content}
                    </p>
                    <div className="text-right">
                      <span className="font-handwriting text-xl text-terracota font-bold">
                        Con amor incondicional ❤️
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
