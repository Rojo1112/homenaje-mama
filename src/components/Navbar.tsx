import React, { useState, useEffect } from 'react';
import { Heart, Compass, Image as ImageIcon, Mail, BookOpen, Music } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-crema-100/90 backdrop-blur-md shadow-sm border-b border-crema-300/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="p-1.5 rounded-full bg-terracota/10 text-terracota group-hover:scale-110 group-hover:bg-terracota group-hover:text-white transition-all duration-200">
            <Heart className="w-4 h-4 fill-current" />
          </span>
          <span className="font-display font-semibold text-lg text-tierra-900 tracking-tight">
            Para Mamá <span className="text-terracota font-serif italic text-base">Lidy</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-tierra-700">
          <a href="#historia" className="flex items-center gap-1.5 hover:text-terracota transition-colors">
            <Compass className="w-4 h-4 text-oliva" /> Historia
          </a>
          <a href="#galeria" className="flex items-center gap-1.5 hover:text-terracota transition-colors">
            <ImageIcon className="w-4 h-4 text-miel-dark" /> Recuerdos
          </a>
          <a href="#coral-geologia" className="flex items-center gap-1.5 hover:text-terracota transition-colors">
            <Music className="w-4 h-4 text-terracota" /> Coral UIS & Geología
          </a>
          <a href="#cartas" className="flex items-center gap-1.5 hover:text-terracota transition-colors">
            <Mail className="w-4 h-4 text-terracota-dark" /> Cartas
          </a>
          <a href="#sabiduria" className="flex items-center gap-1.5 hover:text-terracota transition-colors">
            <BookOpen className="w-4 h-4 text-oliva" /> Sabiduría
          </a>
          <a
            href="#abrazo"
            className="px-3.5 py-1.5 rounded-full bg-terracota text-white hover:bg-terracota-dark text-xs font-semibold uppercase tracking-wider shadow-sm transition-all hover:shadow"
          >
            Tu Abrazo
          </a>
        </nav>
      </div>
    </header>
  );
};
