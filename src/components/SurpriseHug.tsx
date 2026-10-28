import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

export const SurpriseHug: React.FC = () => {
  const [hugCount, setHugCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const sendHug = () => {
    setHugCount(prev => prev + 1);
    setShowMessage(true);

    // Warm confetti explosion
    const count = 120;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#D97757', '#E8B4B8', '#D4A373', '#6B705C', '#F4EFEA', '#B85D3F']
    };

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.6),
      spread: 60,
      startVelocity: 45,
    });

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.4),
      spread: 100,
      decay: 0.91,
      scalar: 1.2
    });
  };

  return (
    <section id="abrazo" className="py-24 px-4 bg-gradient-to-b from-crema-100 via-crema-200/50 to-crema-100">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-terracota/10 text-terracota flex items-center justify-center mx-auto mb-6">
          <Heart className="w-8 h-8 fill-current animate-pulse text-terracota" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-tierra-900 tracking-tight mb-4">
          Un Abrazo Virtual para Ti
        </h2>

        <p className="text-tierra-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
          Cuando las palabras no alcanzan, este botón te envía todo nuestro amor en forma de destellos, pétalos y un abrazo apretado al corazón.
        </p>

        <button
          onClick={sendHug}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-terracota hover:bg-terracota-dark text-white font-bold text-base sm:text-lg shadow-xl shadow-terracota/30 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>¡Presiona para recibir tu abrazo!</span>
          <Heart className="w-5 h-5 fill-current" />
        </button>

        {hugCount > 0 && (
          <div className="mt-8 animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 border border-crema-300 text-xs font-semibold text-terracota-dark uppercase tracking-widest shadow-sm">
              Abrazos enviados hoy: <strong className="text-sm font-bold text-terracota">{hugCount}</strong>
            </span>
          </div>
        )}

        {showMessage && (
          <div className="mt-8 p-6 sm:p-8 bg-white rounded-3xl shadow-lg border border-crema-300/80 max-w-xl mx-auto animate-fade-in">
            <p className="font-serif text-lg sm:text-xl text-tierra-900 leading-relaxed italic mb-3">
              "Mamá, gracias por ser nuestro mayor orgullo, por tu paciencia eterna y por llenar nuestra vida con la música de tu cariño. ¡Te amamos con toda el alma!"
            </p>
            <span className="font-handwriting text-2xl text-terracota font-bold">
              — Juan Carlos Niño Osorio & Familia ❤️
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
