import React from 'react';

/**
 * GeologicalBackground: Decoraciones de fondo geológicas de alto rendimiento para el homenaje a Lidy Osorio Carreño.
 * 
 * Incluye:
 * 1. Curvas de nivel topográficas sutiles (Topographic Contours) con cotas de altitud (UIS Bucaramanga).
 * 2. Brújula geológica Brunton con dial de azimut invertido, clinómetro y coordenadas de la Escuela de Geología UIS.
 * 3. Estratos rocosos y pliegues anticlinales/sinclinales con simbología estructural de rumbo y buzamiento.
 * 4. Geometría cristalina discreta (cuarzo bipiramidal y calcita romboédrica).
 * 
 * Rendimiento & Accesibilidad:
 * - pointer-events: none y select: none (no bloquea clics, selección ni scroll).
 * - aria-hidden="true" (ignorado por lectores de pantalla / WCAG AA).
 * - Opacidades calibradas entre 3.5% y 7% para preservar máxima legibilidad en texto crema/tierra.
 * - Renderizado vectorial puro SVG acelerado por GPU sin JS overhead ni repaint continuo.
 */

// 1. Curvas de Nivel Topográficas (Topographic Contour Lines)
const TopographicContours: React.FC = () => {
  return (
    <svg
      className="absolute -top-12 -right-16 w-[650px] sm:w-[850px] lg:w-[1050px] h-auto opacity-[0.06] text-oliva pointer-events-none"
      viewBox="0 0 900 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      vectorEffect="non-scaling-stroke"
    >
      <defs>
        <linearGradient id="topo-fade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <g stroke="url(#topo-fade)" strokeWidth="1.2" strokeLinecap="round">
        {/* Curva 850m */}
        <path d="M 920 60 C 760 80, 680 160, 540 180 C 420 200, 360 280, 260 320 C 180 350, 110 330, -20 380" />
        
        {/* Curva 900m */}
        <path d="M 920 110 C 780 130, 710 200, 580 220 C 470 240, 400 320, 310 360 C 230 390, 170 370, -20 420" />
        
        {/* Curva 950m */}
        <path d="M 920 160 C 800 180, 730 240, 620 260 C 510 280, 440 360, 360 400 C 280 430, 220 410, -20 460" />
        
        {/* Curva 1000m (Curva Maestra / Índice - Más marcada) */}
        <path
          d="M 920 210 C 820 230, 760 290, 660 310 C 550 330, 490 400, 410 440 C 330 470, 270 450, -20 500"
          strokeWidth="2"
          strokeDasharray="800"
        />
        <text x="590" y="305" fill="currentColor" fontSize="10" fontFamily="monospace" letterSpacing="2" className="opacity-70 font-semibold">
          1000m
        </text>

        {/* Curva 1018m - Cota exacta de la UIS Bucaramanga */}
        <path
          d="M 920 235 C 830 250, 775 305, 680 325 C 575 345, 510 415, 435 455 C 355 485, 295 465, -20 515"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        <text x="690" y="338" fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="1" className="opacity-80 font-bold">
          UIS · 1018m
        </text>

        {/* Curva 1050m */}
        <path d="M 920 260 C 840 275, 790 325, 700 345 C 600 365, 535 435, 460 475 C 380 505, 320 485, -20 535" />

        {/* Curva 1100m */}
        <path d="M 920 310 C 860 320, 815 365, 740 385 C 645 405, 580 470, 510 510 C 430 540, 370 520, -20 570" />

        {/* Curva 1150m */}
        <path d="M 920 360 C 880 365, 840 405, 780 425 C 690 445, 625 505, 560 545 C 480 575, 420 555, -20 605" />

        {/* Curva 1200m (Curva Maestra) */}
        <path
          d="M 920 410 C 890 415, 860 450, 815 470 C 730 490, 670 545, 610 585 C 530 615, 470 595, -20 645"
          strokeWidth="2"
        />
        <text x="735" y="485" fill="currentColor" fontSize="10" fontFamily="monospace" letterSpacing="2" className="opacity-70 font-semibold">
          1200m
        </text>

        {/* Cumbres cerradas / Colinas topográficas */}
        <ellipse cx="780" cy="190" rx="45" ry="25" transform="rotate(-15 780 190)" strokeWidth="1" />
        <ellipse cx="780" cy="190" rx="25" ry="14" transform="rotate(-15 780 190)" strokeWidth="1.4" />
        <circle cx="780" cy="190" r="2.5" fill="currentColor" />
        <text x="792" y="193" fill="currentColor" fontSize="8" fontFamily="monospace" letterSpacing="1">
          ▲ 1248m
        </text>
      </g>
    </svg>
  );
};

// 2. Brújula Geológica Brunton (Brunton Geological Transit Compass)
const BruntonCompass: React.FC = () => {
  return (
    <div className="absolute top-[28%] right-[2%] lg:right-[4%] w-64 sm:w-80 lg:w-96 aspect-square opacity-[0.055] text-terracota pointer-events-none select-none">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        vectorEffect="non-scaling-stroke"
      >
        <g stroke="currentColor" strokeWidth="1.2">
          {/* Anillos exteriores de la caja Brunton */}
          <circle cx="200" cy="200" r="185" strokeWidth="1.5" strokeDasharray="6 3" />
          <circle cx="200" cy="200" r="172" strokeWidth="2" />
          <circle cx="200" cy="200" r="158" strokeWidth="1" />

          {/* Graduación de Azimut de 360° (marcas cada 30° y 10°) */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = i * 10;
            const isMajor = angle % 30 === 0;
            const r1 = 158;
            const r2 = isMajor ? 142 : 149;
            const rad = (angle * Math.PI) / 180;
            const x1 = 200 + r1 * Math.sin(rad);
            const y1 = 200 - r1 * Math.cos(rad);
            const x2 = 200 + r2 * Math.sin(rad);
            const y2 = 200 - r2 * Math.cos(rad);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth={isMajor ? 1.6 : 0.8}
              />
            );
          })}

          {/* Puntos Cardinales tipo Brunton (Norte arriba, Sur abajo; E y W invertidos para lectura directa de rumbo geológico) */}
          <text x="200" y="132" fill="currentColor" fontSize="16" fontFamily="serif" fontWeight="bold" textAnchor="middle">
            N
          </text>
          <text x="200" y="280" fill="currentColor" fontSize="15" fontFamily="serif" fontWeight="bold" textAnchor="middle">
            S
          </text>
          <text x="125" y="205" fill="currentColor" fontSize="15" fontFamily="serif" fontWeight="bold" textAnchor="middle">
            E
          </text>
          <text x="275" y="205" fill="currentColor" fontSize="15" fontFamily="serif" fontWeight="bold" textAnchor="middle">
            W
          </text>

          {/* Escala interna del Clinómetro para buzamiento (-90° a 0° a +90°) */}
          <path d="M 130 200 A 70 70 0 0 0 270 200" strokeWidth="1.2" strokeDasharray="3 2" />
          <text x="200" y="235" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
            CLINÓMETRO 0°
          </text>

          {/* Ejes de mira y retícula en cruz */}
          <line x1="200" y1="28" x2="200" y2="372" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="28" y1="200" x2="372" y2="200" strokeWidth="0.8" strokeDasharray="4 4" />

          {/* Aguja magnética geológica orientada según rumbo estructural (N 35° E) */}
          <g transform="rotate(35 200 200)">
            {/* Punta Norte de la aguja */}
            <polygon points="200,65 206,190 194,190" fill="currentColor" opacity="0.75" />
            {/* Punta Sur de la aguja */}
            <polygon points="200,335 206,210 194,210" stroke="currentColor" fill="none" strokeWidth="1.2" />
            <circle cx="200" cy="200" r="7" fill="currentColor" />
            <circle cx="200" cy="200" r="3" fill="#FAF7F2" />
          </g>

          {/* Nivel de burbuja circular (bull's-eye level) */}
          <circle cx="160" cy="165" r="16" strokeWidth="1" />
          <circle cx="160" cy="165" r="5" strokeWidth="0.8" />
        </g>

        {/* Inscripción Geológica y Coordenadas UIS */}
        <text x="200" y="325" fill="currentColor" fontSize="8" fontFamily="monospace" letterSpacing="1.5" textAnchor="middle" className="font-semibold">
          UIS · BUCARAMANGA
        </text>
        <text x="200" y="340" fill="currentColor" fontSize="7.5" fontFamily="monospace" letterSpacing="1" textAnchor="middle">
          7°08'28"N · 73°07'14"W
        </text>
        <text x="200" y="354" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="0.8" textAnchor="middle" opacity="0.8">
          RUMBO N35°E · BUZ 28°SE
        </text>
      </svg>
    </div>
  );
};

// 3. Estratos Rocosos y Pliegues Geológicos (Geological Strata & Structural Folds)
const GeologicalStrata: React.FC = () => {
  return (
    <div className="absolute top-[52%] -left-12 lg:-left-6 w-[500px] sm:w-[650px] lg:w-[800px] h-auto opacity-[0.05] text-tierra-700 pointer-events-none select-none">
      <svg
        viewBox="0 0 700 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        vectorEffect="non-scaling-stroke"
      >
        <g stroke="currentColor" strokeLinecap="round">
          {/* Pliegue Anticlinal y Sinclinal de estratos sedimentarios */}
          {/* Capa 1: Arenisca / Sandstone */}
          <path
            d="M -30 180 C 120 180, 220 80, 360 80 C 500 80, 580 220, 720 220"
            strokeWidth="2"
          />
          <path
            d="M -30 205 C 120 205, 220 105, 360 105 C 500 105, 580 245, 720 245"
            strokeWidth="1.2"
            strokeDasharray="2 4"
          />

          {/* Capa 2: Lutita / Caliza marina (Formación Rosa Blanca) */}
          <path
            d="M -30 230 C 120 230, 220 130, 360 130 C 500 130, 580 270, 720 270"
            strokeWidth="1.8"
          />
          <path
            d="M -30 255 C 120 255, 220 155, 360 155 C 500 155, 580 295, 720 295"
            strokeWidth="1"
            strokeDasharray="6 3"
          />

          {/* Capa 3: Estrato basal de cuarcita y conglomerado */}
          <path
            d="M -30 280 C 120 280, 220 180, 360 180 C 500 180, 580 320, 720 320"
            strokeWidth="2.2"
          />
          <path
            d="M -30 305 C 120 305, 220 205, 360 205 C 500 205, 580 345, 720 345"
            strokeWidth="1.2"
          />
          <path
            d="M -30 330 C 120 330, 220 230, 360 230 C 500 230, 580 370, 720 370"
            strokeWidth="1.5"
            strokeDasharray="1 3"
          />

          {/* Símbolos geológicos estructurales de rumbo y buzamiento */}
          {/* Símbolo 1 en flanco anticlinal */}
          <g transform="translate(230, 115) rotate(25)">
            <line x1="-14" y1="0" x2="14" y2="0" strokeWidth="2" />
            <line x1="0" y1="0" x2="0" y2="10" strokeWidth="2" />
            <text x="4" y="9" fill="currentColor" fontSize="8" fontFamily="monospace">
              26°
            </text>
          </g>

          {/* Símbolo 2 en flanco sinclinal */}
          <g transform="translate(480, 160) rotate(-22)">
            <line x1="-14" y1="0" x2="14" y2="0" strokeWidth="2" />
            <line x1="0" y1="0" x2="0" y2="10" strokeWidth="2" />
            <text x="4" y="9" fill="currentColor" fontSize="8" fontFamily="monospace">
              31°
            </text>
          </g>

          {/* Identificadores sutiles de formación geológica de Santander */}
          <text x="80" y="270" fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="1" className="font-medium">
            Fm. Rosa Blanca · Estratos Caláreos
          </text>
          <text x="370" y="70" fill="currentColor" fontSize="8.5" fontFamily="monospace" letterSpacing="1" className="font-medium">
            Eje Anticlinal · N35°E
          </text>
        </g>
      </svg>
    </div>
  );
};

// 4. Cristales y Geometría Mineral (Mineral Crystals & Crystallography)
const MineralCrystals: React.FC = () => {
  return (
    <>
      {/* Cristal de Cuarzo Bipiramidal (Esquina Inferior Izquierda) */}
      <div className="absolute bottom-[8%] left-[3%] w-44 sm:w-56 h-auto opacity-[0.045] text-miel-dark pointer-events-none select-none">
        <svg
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          vectorEffect="non-scaling-stroke"
        >
          <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
            {/* Prisma hexagonal de cuarzo */}
            {/* Vértice superior de la pirámide */}
            <line x1="100" y1="15" x2="50" y2="65" />
            <line x1="100" y1="15" x2="100" y2="60" />
            <line x1="100" y1="15" x2="150" y2="65" />
            <line x1="100" y1="15" x2="130" y2="78" strokeDasharray="3 3" />
            <line x1="100" y1="15" x2="70" y2="78" strokeDasharray="3 3" />

            {/* Aristas del cuerpo prismático */}
            <polygon points="50,65 100,60 150,65 130,78 70,78" fill="none" strokeWidth="1" />
            <line x1="50" y1="65" x2="50" y2="185" />
            <line x1="100" y1="60" x2="100" y2="180" />
            <line x1="150" y1="65" x2="150" y2="185" />
            <line x1="130" y1="78" x2="130" y2="198" strokeDasharray="3 3" />
            <line x1="70" y1="78" x2="70" y2="198" strokeDasharray="3 3" />

            {/* Vértice inferior de la pirámide */}
            <polygon points="50,185 100,180 150,185 130,198 70,198" fill="none" strokeWidth="1" />
            <line x1="100" y1="225" x2="50" y2="185" />
            <line x1="100" y1="225" x2="100" y2="180" />
            <line x1="100" y1="225" x2="150" y2="185" />
            <line x1="100" y1="225" x2="130" y2="198" strokeDasharray="3 3" />
            <line x1="100" y1="225" x2="70" y2="198" strokeDasharray="3 3" />
          </g>
          <text x="100" y="238" fill="currentColor" fontSize="7.5" fontFamily="monospace" letterSpacing="1" textAnchor="middle">
            SiO₂ · CUARZO CRISTALINO
          </text>
        </svg>
      </div>

      {/* Romboedro de Calcita / Cristaloquímica (Esquina Inferior Derecha) */}
      <div className="absolute bottom-[14%] right-[3%] w-36 sm:w-48 h-auto opacity-[0.045] text-terracota pointer-events-none select-none">
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          vectorEffect="non-scaling-stroke"
        >
          <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
            {/* Romboedro cleavage 10-11 */}
            <polygon points="80,15 140,45 80,75 20,45" fill="none" />
            <polygon points="80,85 140,115 80,145 20,115" fill="none" />
            <line x1="20" y1="45" x2="20" y2="115" />
            <line x1="140" y1="45" x2="140" y2="115" />
            <line x1="80" y1="75" x2="80" y2="145" />
            <line x1="80" y1="15" x2="80" y2="85" strokeDasharray="3 3" />
          </g>
          <text x="80" y="156" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="1" textAnchor="middle">
            CaCO₃ · CALCITA
          </text>
        </svg>
      </div>
    </>
  );
};

// Componente principal GeologicalBackground exportado
export const GeologicalBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none w-full h-full"
      aria-hidden="true"
    >
      {/* 1. Curvas de nivel topográficas en la zona superior y media */}
      <TopographicContours />

      {/* 2. Brújula geológica Brunton con dial de azimut y coordenadas UIS */}
      <BruntonCompass />

      {/* 3. Estratos plegados (anticlinal/sinclinal) y simbología estructural */}
      <GeologicalStrata />

      {/* 4. Cristales minerales (Cuarzo y Calcita) */}
      <MineralCrystals />

      {/* 5. Trama sutil de cuadrícula geodésica UTM (Geodetic Grid Ticks) */}
      <div className="absolute inset-0 bg-[radial-gradient(#6B705C_0.65px,transparent_0.65px)] [background-size:48px_48px] opacity-[0.035]" />
    </div>
  );
};

export default GeologicalBackground;
