import React from 'react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  location: string;
  iconBg: string;
}

const EVENTS: TimelineEvent[] = [
  {
    year: 'Primeros Pasos',
    title: 'El Primer Refugio',
    tagline: 'Tus brazos, mi hogar',
    description: 'Desde pequeño, tu mirada protectora y ese abrazo firme y dulce fueron la mayor certeza de que todo siempre estaría bien. Cada paso que he dado comenzó en tu regazo.',
    image: './imagenes/foto-infancia.jpg',
    location: 'Bucaramanga, Santander',
    iconBg: 'bg-terracota'
  },
  {
    year: 'Creciendo Juntos',
    title: 'Celebraciones que Dejan Huella',
    tagline: 'La familia en comunión',
    description: 'Reunidos con orgullo en cada ceremonia y fecha especial. Tú siempre presente, cuidando cada detalle con paciencia infinita y una sonrisa llena de luz.',
    image: './imagenes/foto-comunion.jpg',
    location: 'En Familia',
    iconBg: 'bg-oliva'
  },
  {
    year: 'La Tradición',
    title: 'Navidades Inolvidables',
    tagline: 'El calor de la casa',
    description: 'Las luces del árbol nunca compitieron con el brillo de tu alegría reunida con nosotros. Cada diciembre a tu lado es una lección de amor, gratitud y unión.',
    image: './imagenes/foto-navidad.jpg',
    location: 'El Hogar',
    iconBg: 'bg-miel-dark'
  },
  {
    year: 'Aventura & Horizonte',
    title: 'Risas en Aguas Claras',
    tagline: 'Celebrando la libertad del mar',
    description: 'Sumergidos en aguas cristalinas con los brazos al cielo. Esos momentos donde reímos sin prisa son los tesoros que guardo en lo más hondo de mi memoria.',
    image: './imagenes/foto-playa.jpg',
    location: 'Mar Caribe',
    iconBg: 'bg-terracota-dark'
  },
  {
    year: 'Vocación & Ciencia',
    title: 'Geóloga de Montaña y Cañón',
    tagline: 'Firmeza, sabiduría y pasión',
    description: 'En tu elemento natural: bastones de trekking, botas de montaña y el respeto absoluto por la tierra. Tu disciplina como geóloga nos inspira a amar la naturaleza y el conocimiento.',
    image: './imagenes/foto-geologia-canon.jpg',
    location: 'Cañones y Senderos de Colombia',
    iconBg: 'bg-oliva-dark'
  },
  {
    year: 'Cumbre Compartida',
    title: 'En la Inmensidad del Páramo',
    tagline: 'Caminando juntos en las alturas',
    description: 'El viento helado andino, las rocas y los frailejones. Nos enseñaste que no hay pendiente imposible cuando se camina con fe, fortaleza y en familia.',
    image: './imagenes/foto-paramo-trekking.jpg',
    location: 'Páramos de Santander',
    iconBg: 'bg-terracota'
  },
  {
    year: 'Ciencia & Asombro',
    title: 'Descifrando el Pasado en Villa de Leyva',
    tagline: 'Fósiles y aprendizaje',
    description: 'Compartiendo contigo el asombro por los fósiles milenarios y la historia geológica de Colombia. Escucharte explicar el origen de la tierra siempre ha sido un privilegio.',
    image: './imagenes/foto-paleontologia.jpg',
    location: 'Museo Paleontológico, Boyacá',
    iconBg: 'bg-miel-dark'
  },
  {
    year: 'Siempre Presente',
    title: 'Orgullo de Madre',
    tagline: 'Ver los frutos de tu entrega',
    description: 'Crecimos, maduramos y seguimos descubriendo el mundo, pero saber que contamos con tu bendición y tu apoyo incondicional es lo que nos da alas para volar.',
    image: './imagenes/foto-noche-elegante.jpg',
    location: 'Noches de Gala y Amor Familiar',
    iconBg: 'bg-terracota-deep'
  }
];

export const Timeline: React.FC = () => {
  return (
    <section id="historia" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-terracota tracking-widest uppercase mb-2 block">
          Línea del Tiempo
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-tierra-900 tracking-tight">
          El Sendero de Tus Huellas
        </h2>
        <div className="w-16 h-1 bg-terracota mx-auto my-4 rounded-full"></div>
        <p className="text-tierra-700 text-sm sm:text-base">
          Momentos imborrables que han forjado nuestra historia, guiados por tu ternura y tu fortaleza inquebrantable.
        </p>
      </div>

      <div className="relative border-l-2 border-crema-300 ml-4 md:ml-1/2 md:-translate-x-0.5 space-y-12">
        {EVENTS.map((event, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot marker */}
              <div
                className={`absolute -left-[1.35rem] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full ${event.iconBg} border-4 border-crema-100 flex items-center justify-center shadow-md z-10`}
              >
                <Sparkles className="w-2.5 h-2.5 text-white" />
              </div>

              {/* Content card */}
              <div className="w-full md:w-[46%] pl-4 md:pl-0">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-crema-200/80 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between gap-2 text-xs text-tierra-700 mb-2 font-medium">
                    <span className="inline-flex items-center gap-1 text-terracota font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" /> {event.year}
                    </span>
                    <span className="inline-flex items-center gap-1 text-oliva">
                      <MapPin className="w-3.5 h-3.5" /> {event.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-tierra-900 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-handwriting text-terracota-dark font-bold text-base mb-3">
                    "{event.tagline}"
                  </p>

                  <p className="text-tierra-700 text-xs sm:text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Photo inside card */}
                  <div className="overflow-hidden rounded-xl border border-crema-200 aspect-[16/10] bg-crema-200">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
