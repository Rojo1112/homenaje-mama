import React from 'react';
import { Music2, Mountain, Award, ExternalLink, Sparkles, Heart } from 'lucide-react';

export const CoralUISSection: React.FC = () => {
  return (
    <section id="coral-geologia" className="py-20 px-4 bg-white/70 border-y border-crema-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-terracota tracking-widest uppercase mb-2 block">
            Alma Santandereana & Pasión
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-tierra-900 tracking-tight">
            La Firmeza de la Roca y la Armonía de la Voz
          </h2>
          <div className="w-16 h-1 bg-terracota mx-auto my-4 rounded-full"></div>
          <p className="text-tierra-700 text-sm sm:text-base leading-relaxed">
            Pocas personas combinan de manera tan poética la exactitud y profundidad de la tierra con la belleza infinita del canto coral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Geología UIS */}
          <div className="bg-crema-50 rounded-3xl p-8 border border-crema-200/80 shadow-sm flex flex-col justify-between hover:border-oliva/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-oliva/15 text-oliva flex items-center justify-center mb-6">
                <Mountain className="w-6 h-6" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-oliva/10 text-oliva-dark text-xs font-semibold uppercase tracking-wider mb-3">
                Escuela de Geología UIS
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-tierra-900 mb-4">
                La Ciencia y el Amor por la Tierra
              </h3>

              <p className="text-tierra-700 text-sm sm:text-base leading-relaxed mb-4">
                Como geóloga de la prestigiosa <strong>Universidad Industrial de Santander</strong>, has dedicado tu vida a comprender los secretos más profundos del suelo colombiano, los estratos rocosos y la historia que guardan las montañas.
              </p>

              <p className="text-tierra-700 text-sm leading-relaxed mb-6">
                Esa misma paciencia milenaria con la que se forman los minerales es la paciencia con la que siempre nos has educado: sólida como el granito frente a las dificultades, pero cálida y generosa como la tierra fértil.
              </p>
            </div>

            <div className="border-t border-crema-200 pt-4 flex items-center gap-3 text-xs text-oliva-dark font-medium">
              <Award className="w-4 h-4 text-oliva" />
              <span>Orgullo UIS: Magíster y Geóloga Destacada</span>
            </div>
          </div>

          {/* Card 2: Coral UIS */}
          <div className="bg-crema-50 rounded-3xl p-8 border border-crema-200/80 shadow-sm flex flex-col justify-between hover:border-terracota/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-terracota/15 text-terracota flex items-center justify-center mb-6">
                <Music2 className="w-6 h-6" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-terracota/10 text-terracota-dark text-xs font-semibold uppercase tracking-wider mb-3">
                Coral Universitaria UIS
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-tierra-900 mb-4">
                La Voz que Llena el Alma
              </h3>

              <p className="text-tierra-700 text-sm sm:text-base leading-relaxed mb-4">
                Haber pertenecido a la legendaria <strong>Coral UIS</strong> —fundada en 1962 y galardonada en toda Colombia y el mundo— representa tu sensibilidad artística, tu oído fino y tu amor por el folclor santandereano y latinoamericano.
              </p>

              <p className="text-tierra-700 text-sm leading-relaxed mb-6">
                Canciones emblemáticas como <em>"Te quiero"</em> (de Benedetti y Favero) cantadas en polifonía coral por la UIS resuenan como el himno de lo que sentimos por ti: amor sincero, admiración eterna y agradecimiento.
              </p>
            </div>

            <div className="border-t border-crema-200 pt-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs text-terracota font-medium">
                <Sparkles className="w-4 h-4" /> Polifonía y corazón santandereano
              </span>

              <a
                href="https://www.youtube.com/results?search_query=Coral+Universitaria+UIS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracota hover:text-terracota-dark underline underline-offset-4"
              >
                Escuchar Coral UIS <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Highlight quote banner */}
        <div className="mt-12 bg-gradient-to-r from-terracota/10 via-miel/15 to-oliva/10 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto border border-crema-300">
          <Heart className="w-6 h-6 text-terracota mx-auto mb-3 fill-current" />
          <p className="font-serif italic text-lg sm:text-2xl text-tierra-900 leading-snug">
            "La geología te enseñó a entender la firmeza del mundo; la Coral UIS te regaló la música; y tu corazón de madre nos dio el hogar más feliz."
          </p>
          <span className="font-handwriting text-terracota-dark text-xl font-bold block mt-3">
            — Con todo nuestro amor, Juan Carlos y tu familia
          </span>
        </div>
      </div>
    </section>
  );
};
