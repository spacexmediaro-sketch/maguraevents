'use client';

import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

const categories = ['Toate', 'Nunți', 'Botezuri', 'Majorate', 'Corporate', 'Saloane', 'Meniuri'];

type GalleryItem = {
  id:       number;
  category: string;
  alt:      string;
  aspect:   'landscape' | 'portrait' | 'square';
  color:    string;
};

const galleryItems: GalleryItem[] = [
  { id: 1,  category: 'Nunți',     alt: 'Salon Crystal decorat pentru nuntă cu lumânări și flori',        aspect: 'landscape', color: '#1a1308' },
  { id: 2,  category: 'Nunți',     alt: 'Masa principală a mirilor cu aranjament floral premium',          aspect: 'portrait',  color: '#160e04' },
  { id: 3,  category: 'Botezuri',  alt: 'Decor botez elegant cu albastru și auriu',                       aspect: 'landscape', color: '#0d1520' },
  { id: 4,  category: 'Saloane',   alt: 'Salon Royal pregătit pentru un eveniment de seară',              aspect: 'landscape', color: '#1a1506' },
  { id: 5,  category: 'Meniuri',   alt: 'Platou aperitive premium cu prezentare elegantă',                aspect: 'square',    color: '#1a1008' },
  { id: 6,  category: 'Majorate',  alt: 'Pistă de dans iluminată spectaculos',                            aspect: 'landscape', color: '#0e0e1a' },
  { id: 7,  category: 'Corporate', alt: 'Sala de conferințe configurată profesional',                     aspect: 'landscape', color: '#0e1418' },
  { id: 8,  category: 'Nunți',     alt: 'Tort nupțial etajat decorat cu flori naturale',                  aspect: 'portrait',  color: '#1a1206' },
  { id: 9,  category: 'Saloane',   alt: 'Detaliu masă — tacâmuri premium și pahare de cristal',           aspect: 'square',    color: '#141008' },
  { id: 10, category: 'Botezuri',  alt: 'Aranjament masă botez cu tort personalizat',                     aspect: 'landscape', color: '#0d1520' },
  { id: 11, category: 'Majorate',  alt: 'Decor photobooth majorat cu baloane și lumini',                  aspect: 'portrait',  color: '#16041a' },
  { id: 12, category: 'Meniuri',   alt: 'Bufet cald cu preparate diverse pentru nuntă',                   aspect: 'landscape', color: '#1a0e04' },
];

function PlaceholderImage({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const aspectClass = {
    landscape: 'aspect-[4/3]',
    portrait:  'aspect-[3/4]',
    square:    'aspect-square',
  }[item.aspect];

  return (
    <button
      onClick={onClick}
      className={`relative ${aspectClass} w-full overflow-hidden group focus:outline-none focus:ring-2 focus:ring-gold-600`}
      aria-label={`Vizualizează: ${item.alt}`}
    >
      {/* Placeholder background */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 50% 100%, rgba(201,168,76,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 30% 30%, rgba(212,175,55,0.08) 0%, transparent 50%),
            ${item.color}
          `,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #C9A84C, #C9A84C 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #C9A84C, #C9A84C 1px, transparent 1px, transparent 40px)',
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-noir-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
        <ZoomIn size={28} className="text-gold-600" />
      </div>

      {/* Category tag */}
      <div className="absolute top-3 left-3 text-[0.55rem] font-sans tracking-widest uppercase px-2 py-1 bg-noir-900/80 text-gold-600/80">
        {item.category}
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-noir-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <p className="font-sans text-xs text-cream-400 text-balance">{item.alt}</p>
      </div>

      {/* Placeholder text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <p className="font-serif text-xs text-cream-500 text-center px-4">Adaugă imagine reală</p>
      </div>
    </button>
  );
}

export default function Gallery({ preview = false }: { preview?: boolean }) {
  const [activeCategory, setActiveCategory] = useState('Toate');
  const [lightboxIndex,  setLightboxIndex]  = useState<number | null>(null);

  const filtered = activeCategory === 'Toate'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const displayItems = preview ? filtered.slice(0, 6) : filtered;

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => i !== null ? (i - 1 + displayItems.length) % displayItems.length : null);
  }, [displayItems.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => i !== null ? (i + 1) % displayItems.length : null);
  }, [displayItems.length]);

  return (
    <section className={`${preview ? 'section-padding' : 'pt-36 pb-20'} relative`} style={{ background: '#080808' }}>
      <div className="container-luxury">
        {preview && (
          <AnimatedSection className="text-center mb-12">
            <p className="label-gold mb-4">✦ Galerie foto ✦</p>
            <h2 className="heading-lg text-cream-200 mb-4">
              Momente{' '}
              <span className="text-gold-gradient italic">imortalizate</span>
            </h2>
            <span className="gold-line" />
          </AnimatedSection>
        )}

        {!preview && (
          <AnimatedSection className="text-center mb-12">
            <p className="label-gold mb-2">✦ Galerie foto ✦</p>
            <h1 className="heading-lg text-cream-200 mb-4">
              Momentele noastre de{' '}
              <span className="text-gold-gradient italic">excepție</span>
            </h1>
            <span className="gold-line" />
          </AnimatedSection>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[0.65rem] font-sans font-medium tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-gold-600 text-gold-600 bg-gold-600/5'
                  : 'border-gold-600/20 text-cream-500 hover:border-gold-600/40 hover:text-cream-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3"
          layout
        >
          <AnimatePresence>
            {displayItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{    opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <PlaceholderImage item={item} onClick={() => openLightbox(i)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {preview && (
          <AnimatedSection className="text-center mt-12">
            <Link href="/galerie" className="btn-outline-gold">
              <span>Vezi Galeria Completă</span>
            </Link>
          </AnimatedSection>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir-950/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-cream-400 hover:text-gold-600 transition-colors z-10"
              aria-label="Închide"
            >
              <X size={28} />
            </button>

            {/* Nav prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-cream-400 hover:text-gold-600 transition-colors z-10 p-2"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{    opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] w-full mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full aspect-[4/3] rounded-sm"
                style={{
                  background: `
                    radial-gradient(ellipse 80% 80% at 50% 100%, rgba(201,168,76,0.2) 0%, transparent 60%),
                    ${displayItems[lightboxIndex]?.color ?? '#141414'}
                  `,
                }}
              />
              <p className="text-center font-sans text-xs text-cream-500 mt-3">
                {displayItems[lightboxIndex]?.alt}
              </p>
              <p className="text-center font-sans text-[0.6rem] text-cream-700 mt-1">
                {lightboxIndex + 1} / {displayItems.length}
              </p>
            </motion.div>

            {/* Nav next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-cream-400 hover:text-gold-600 transition-colors z-10 p-2"
              aria-label="Imaginea următoare"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
