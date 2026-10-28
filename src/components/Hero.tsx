import React from 'react';
import { Heart, Sparkles, ChevronDown, Mountain, Music2, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Decorative warm aura blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-terracota/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-miel/15 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-oliva/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracota/10 border border-terracota/20 text-terracota-dark text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-terracota" />
          Homenaje con Amor Eterno
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-tierra-900 tracking-tight leading-[1.15] mb-6">
          Para Ti, Mamá <br />
          <span className="font-display italic font-medium text-terracota block mt-2 text-3xl sm:text-5xl md:text-6xl">
            Lidy Osorio Carreño
          </span>
        </h1>

        {/* Poetic Subtitle */}
        <p className="max-w-2xl text-base sm:text-xl text-tierra-700 leading-relaxed font-sans font-normal mb-8">
          La firmeza sabia de quien descifra los secretos de la tierra y las rocas, la armonía y sensibilidad de la voz en la 
          <strong className="text-terracota-dark font-semibold"> Coral UIS</strong>, y el amor incondicional que nos abraza cada día.
        </p>

        {/* Highlights badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs sm:text-sm text-tierra-800">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 shadow-sm border border-crema-300">
            <Mountain className="w-4 h-4 text-oliva" /> Geóloga de Alma y Ciencia
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 shadow-sm border border-crema-300">
            <Music2 className="w-4 h-4 text-terracota" /> Voz en la Coral UIS Santander
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 shadow-sm border border-crema-300">
            <Shield className="w-4 h-4 text-miel-dark" /> El Faro de Nuestra Familia
          </span>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#historia"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-terracota hover:bg-terracota-dark text-white font-semibold text-sm sm:text-base shadow-lg shadow-terracota/25 transition-all duration-300 hover:scale-105"
          >
            <Heart className="w-4 h-4 fill-current text-white group-hover:scale-125 transition-transform" />
            Descubrir Nuestros Momentos
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#cartas"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-crema-50 text-tierra-800 font-semibold text-sm sm:text-base border border-crema-300 shadow-sm transition-all hover:border-terracota"
          >
            Leer Cartas Especiales
          </a>
        </div>
      </div>
    </section>
  );
};
