import React from 'react';
import { QUOTES } from '../data/content';
import { Quote, Sparkles } from 'lucide-react';

export const WisdomQuotes: React.FC = () => {
  return (
    <section id="sabiduria" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-terracota tracking-widest uppercase mb-2 block">
          Pensamientos & Sabiduría
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-tierra-900 tracking-tight">
          Las Lecciones de Mamá
        </h2>
        <div className="w-16 h-1 bg-terracota mx-auto my-4 rounded-full"></div>
        <p className="text-tierra-700 text-sm sm:text-base">
          Frases y principios que reflejan tu esencia: el amor por la tierra, la música del corazón y la unión inquebrantable de la familia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {QUOTES.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-crema-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="mb-6">
              <Quote className="w-10 h-10 text-miel/40 mb-4 fill-current rotate-180" />
              <p className="font-serif text-lg sm:text-xl text-tierra-900 leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-crema-200 pt-4 text-xs">
              <span className="inline-flex items-center gap-1.5 text-oliva-dark font-medium">
                <Sparkles className="w-3.5 h-3.5 text-terracota" />
                {item.context}
              </span>
              <span className="font-handwriting text-lg text-terracota font-bold">
                Para Lidy
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
