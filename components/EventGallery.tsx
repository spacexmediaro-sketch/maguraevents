'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export type EventPhoto = { src: string; alt: string };

export default function EventGallery({ photos }: { photos: EventPhoto[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev  = useCallback(() => setLightbox((i) => i !== null ? (i - 1 + photos.length) % photos.length : null), [photos.length]);
  const next  = useCallback(() => setLightbox((i) => i !== null ? (i + 1) % photos.length : null), [photos.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, prev, next, close]);

  return (
    <section className="section-padding" style={{ background: '#FAFAF7' }}>
      <div className="container-luxury">
        <AnimatedSection className="text-center mb-10">
          <p className="label-gold mb-3">✦ Galerie foto ✦</p>
          <span className="gold-line" />
        </AnimatedSection>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-1.5">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="break-inside-avoid mb-1.5 w-full overflow-hidden group relative block focus:outline-none focus:ring-2 focus:ring-gold-600"
              aria-label={`Vizualizează: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 block"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-noir-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn size={24} className="text-gold-600" />
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={close}
          >
            <button onClick={close} className="absolute top-5 right-5 text-cream-400 hover:text-gold-600 transition-colors z-10" aria-label="Închide">
              <X size={26} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 md:left-7 text-cream-400 hover:text-gold-600 transition-colors z-10 p-2" aria-label="Anterior">
              <ChevronLeft size={34} />
            </button>

            <div
              className="relative max-w-4xl w-full mx-16 md:mx-24"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[82vh] object-contain"
                sizes="90vw"
                quality={90}
              />
              <p className="text-center font-sans text-xs text-cream-500 mt-3 px-4">{photos[lightbox].alt}</p>
              <p className="text-center font-sans text-[0.6rem] text-cream-700 mt-1">{lightbox + 1} / {photos.length}</p>
            </div>

            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 md:right-7 text-cream-400 hover:text-gold-600 transition-colors z-10 p-2" aria-label="Următor">
              <ChevronRight size={34} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
