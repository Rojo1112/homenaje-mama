export interface PhotoItem {
  id: string;
  filename: string;
  title: string;
  date: string;
  category: 'infancia' | 'familia' | 'aventura' | 'geologia';
  description: string;
  rotation: string;
}

export interface LetterItem {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  iconName: string;
}

export interface QuoteItem {
  quote: string;
  context: string;
}

export const PHOTOS: PhotoItem[] = [
  {
    id: 'infancia-1',
    filename: 'foto-infancia.jpg',
    title: 'Mi Primer Refugio',
    date: 'Los primeros años',
    category: 'infancia',
    description: 'En tus brazos siempre encontré la mayor seguridad del mundo. Tu abrazo ha sido mi hogar desde el primer día.',
    rotation: '-rotate-2'
  },
  {
    id: 'comunion-2',
    filename: 'foto-comunion.jpg',
    title: 'Celebraciones que Unen',
    date: 'Etapas de vida',
    category: 'familia',
    description: 'Toda la familia reunida con esa sonrisa protectora tuya que ilumina cada paso que dimos y seguimos dando.',
    rotation: 'rotate-1'
  },
  {
    id: 'navidad-3',
    filename: 'foto-navidad.jpg',
    title: 'La Magia de la Navidad',
    date: 'Diciembre en el hogar',
    category: 'familia',
    description: 'El árbol de Navidad y las luces nunca brillaron más que tus ojos y la calidez con la que llenas la casa en cada fiesta.',
    rotation: '-rotate-1'
  },
  {
    id: 'playa-4',
    filename: 'foto-playa.jpg',
    title: 'Aguas Claras y Risas Libres',
    date: 'Aventuras en el mar',
    category: 'aventura',
    description: 'Sumergidos en la felicidad del agua cristalina con los brazos arriba celebrando la vida a tu lado.',
    rotation: 'rotate-2'
  },
  {
    id: 'noche-5',
    filename: 'foto-noche-elegante.jpg',
    title: 'Orgullo de Madre',
    date: 'Noches especiales',
    category: 'familia',
    description: 'Verte brillar y compartir noches donde el mayor lujo siempre fue tenerte cerca, guiándonos con tu ternura.',
    rotation: '-rotate-2'
  },
  {
    id: 'geologia-6',
    filename: 'foto-geologia-canon.jpg',
    title: 'Geóloga del Corazón',
    date: 'En su elemento natural',
    category: 'geologia',
    description: 'Entre cañones de roca milenaria y senderos verdes con bastones en mano: tu amor por la tierra, la ciencia y la naturaleza en su máxima expresión.',
    rotation: 'rotate-1'
  },
  {
    id: 'paramo-7',
    filename: 'foto-paramo-trekking.jpg',
    title: 'Conquistando Cumbres Juntos',
    date: 'En lo alto del páramo',
    category: 'aventura',
    description: 'El viento fresco andino, las piedras de las alturas y la alegría de llegar lejos como familia, siempre contigo al frente.',
    rotation: '-rotate-1'
  },
  {
    id: 'paleontologia-8',
    filename: 'foto-paleontologia.jpg',
    title: 'Descifrando la Historia del Mundo',
    date: 'Villa de Leyva',
    category: 'geologia',
    description: 'Rodeados de fósiles y ciencia geológica. Compartiendo tu pasión y el asombro por los secretos que guardan las rocas.',
    rotation: 'rotate-2'
  },
  {
    id: 'granja-9',
    filename: 'foto-granja.jpg',
    title: 'Ternura y Alegría Simple',
    date: 'Días de campo',
    category: 'aventura',
    description: 'Esa espontaneidad y cariño hacia los animales y las cosas sencillas que hacen de cada día ordinario un recuerdo inolvidable.',
    rotation: '-rotate-2'
  }
];

export const LETTERS: LetterItem[] = [
  {
    id: 'carta-1',
    title: 'Ábrela cuando me extrañes',
    subtitle: 'Para los días de distancia',
    iconName: 'HeartHandshake',
    content: `Mamá hermosa, cuando sientas que la distancia o el ajetreo diario nos separa, recuerda que no hay un solo día en que no lleve tus consejos y tu amor en el corazón. Todo lo que he aprendido de perseverancia, honestidad y cariño nació de verte luchar y sonreír cada día. Respira profundo, cierra los ojos y siente este abrazo que siempre está contigo.`
  },
  {
    id: 'carta-2',
    title: 'Ábrela cuando necesites recordar lo fuerte que eres',
    subtitle: 'Firmeza de roca, ternura de madre',
    iconName: 'ShieldCheck',
    content: `Eres geóloga de profesión y de vida: has sabido resistir cualquier presión, convertir las piedras del camino en cimientos sólidos y enseñarnos que las montañas más altas se conquistan paso a paso. Tu fortaleza no solo es admirable, es la brújula que mantiene firme a nuestra familia. Eres una mujer extraordinaria.`
  },
  {
    id: 'carta-3',
    title: 'Ábrela para sonreír un rato',
    subtitle: 'La alegría de nuestras ocurrencias',
    iconName: 'Smile',
    content: `¿Recuerdas las caminatas donde nos cansábamos y tú seguías con energía inagotable? ¿O las fotos improvisadas donde alguien terminaba haciendo caras graciosas? La vida a tu lado nunca ha sido aburrida; tiene esa chispa santandereana única de risa espontánea y cariño sincero. ¡Gracias por hacer de cada recuerdo una fiesta familiar!`
  },
  {
    id: 'carta-4',
    title: 'Ábrela cuando escuches a la Coral UIS',
    subtitle: 'La melodía de tu alma',
    iconName: 'Music',
    content: `Cada vez que suena una canción coral o un compás tradicional colombiano, pienso en tu voz en la Coral Universitaria UIS. Esa disciplina para encontrar la armonía perfecta entre tantas notas es exactamente lo que haces en nuestra familia: unes nuestras vidas con amor, paciencia y una melodía que nunca deja de reconfortarnos.`
  }
];

export const QUOTES: QuoteItem[] = [
  {
    quote: "La tierra tiene millones de años guardando historias en sus estratos; pero en un solo abrazo de mamá, cabe la eternidad.",
    context: "Homenaje a su pasión geológica y maternal"
  },
  {
    quote: "Como en un coro polifónico, cada uno de nosotros tiene su tono propio, pero fue mamá quien nos enseñó a cantar en perfecta armonía.",
    context: "Su huella inolvidable en la Coral UIS"
  },
  {
    quote: "No importa cuán empinado sea el páramo o difícil el sendero: con mamá adelante, siempre sabemos que llegaremos a la cumbre.",
    context: "Aventuras y caminatas familiares"
  },
  {
    quote: "Las piedras más resistentes se forjan en lo profundo; el amor más puro se forja en el corazón de una madre.",
    context: "Dedicado a Lidy Osorio Carreño"
  }
];
