import React, { useState, useRef } from 'react';
import { PHOTOS, PhotoItem } from '../data/content';
import { Eye, X, Calendar, Tag } from 'lucide-react';

export const PolaroidGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openLightbox = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const closeLightbox = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
    setSelectedPhoto(null);
  };

  // Close on backdrop click (Modern Web Guidance light dismiss)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeLightbox();
    }
  };

  const filteredPhotos = activeFilter === 'todos'
    ? PHOTOS
    : PHOTOS.filter(p => p.category === activeFilter);

  return (
    <section id="galeria" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-terracota tracking-widest uppercase mb-2 block">
          Álbum de Recuerdos
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-tierra-900 tracking-tight">
          Nuestra Galería Polaroid
        </h2>
        <div className="w-16 h-1 bg-terracota mx-auto my-4 rounded-full"></div>
        <p className="text-tierra-700 text-sm sm:text-base">
          Haz clic en cualquier fotografía para verla en detalle y leer la dedicatoria.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: 'todos', label: 'Todos los Momentos' },
            { id: 'infancia', label: 'Infancia' },
            { id: 'familia', label: 'Familia' },
            { id: 'geologia', label: 'Geología & Tierra' },
            { id: 'aventura', label: 'Aventuras' },
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeFilter === filter.id
                  ? 'bg-terracota text-white shadow-sm'
                  : 'bg-white text-tierra-700 hover:bg-crema-200 border border-crema-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(photo)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(photo);
              }
            }}
            aria-label={`Ver fotografía: ${photo.title}`}
            className={`polaroid-card cursor-pointer bg-white p-4 pb-6 rounded-md shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 ${photo.rotation} flex flex-col justify-between`}
          >
            {/* Polaroid frame tape pin decoration */}
            <div className="w-12 h-3.5 bg-miel/30 -mt-2 mx-auto mb-2 rounded-sm shadow-inner opacity-80"></div>

            {/* Photo container */}
            <div className="relative aspect-[4/3] bg-crema-200 overflow-hidden rounded-sm group mb-4">
              <img
                src={`./imagenes/${photo.filename}`}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-tierra-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2.5 rounded-full bg-white/90 text-terracota shadow-md">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
            </div>

            {/* Caption & handwriting note */}
            <div className="text-center px-1">
              <h3 className="font-serif font-bold text-lg text-tierra-900 leading-snug">
                {photo.title}
              </h3>
              <p className="font-handwriting text-terracota-dark text-lg font-bold mt-1">
                {photo.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Accessible Modal (<dialog>) compliant with Modern Web Guidance */}
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        aria-labelledby={selectedPhoto ? `lightbox-title-${selectedPhoto.id}` : undefined}
        className="p-0 rounded-2xl max-w-3xl w-[92vw] shadow-2xl bg-white text-tierra-900 border border-crema-300 m-auto"
      >
        {selectedPhoto && (
          <div className="flex flex-col md:flex-row overflow-hidden">
            {/* Big photo */}
            <div className="md:w-3/5 bg-tierra-900 flex items-center justify-center max-h-[70vh]">
              <img
                src={`./imagenes/${selectedPhoto.filename}`}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            {/* Content side */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between bg-crema-50">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-terracota uppercase tracking-wider">
                    <Tag className="w-3.5 h-3.5" /> {selectedPhoto.category}
                  </span>

                  <button
                    onClick={closeLightbox}
                    aria-label="Cerrar modal"
                    className="p-1.5 rounded-full text-tierra-700 hover:text-terracota hover:bg-crema-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3
                  id={`lightbox-title-${selectedPhoto.id}`}
                  className="font-serif text-2xl font-bold text-tierra-900 mb-2 leading-tight"
                >
                  {selectedPhoto.title}
                </h3>

                <p className="inline-flex items-center gap-1.5 text-xs text-oliva font-medium mb-4">
                  <Calendar className="w-3.5 h-3.5" /> {selectedPhoto.date}
                </p>

                <p className="text-sm text-tierra-700 leading-relaxed font-sans font-normal border-t border-crema-200 pt-3">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-crema-200/80 flex items-center justify-between">
                <span className="font-handwriting text-terracota-dark font-bold text-lg">
                  Siempre en el corazón
                </span>

                <button
                  onClick={closeLightbox}
                  className="px-4 py-1.5 rounded-full bg-tierra-900 hover:bg-terracota text-white text-xs font-semibold transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};
