'use client';

import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

const categories = ['Toate', 'Nunți', 'Saloane', 'Decor', 'Locație'];

type GalleryItem = {
  id:       number;
  src:      string;
  alt:      string;
  category: string;
  aspect:   'landscape' | 'portrait' | 'square';
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/images/galerie/salon-crystal-interior.webp',
    alt: 'Interior Salon Crystal — scaune elegante aurii și aranjamente florale premium',
    category: 'Saloane',
    aspect: 'landscape',
  },
  {
    id: 2,
    src: '/images/galerie/nunta-cuplu-parc.webp',
    alt: 'Cuplu de miri în parcul Măgura Events sub copaci colorați toamna',
    category: 'Nunți',
    aspect: 'landscape',
  },
  {
    id: 3,
    src: '/images/galerie/nunta-masa-verde.webp',
    alt: 'Aranjament masă nuntă — decor verde și auriu, meniu personalizat E&A',
    category: 'Nunți',
    aspect: 'portrait',
  },
  {
    id: 4,
    src: '/images/galerie/decor-arc-floral.webp',
    alt: 'Arc floral cu trandafiri albi și vedere panoramică la lac — Măgura Events',
    category: 'Decor',
    aspect: 'portrait',
  },
  {
    id: 5,
    src: '/images/galerie/nunta-mireasa.webp',
    alt: 'Mireasă în rochie albă cu paiete în Salon Crystal, decor floral alb',
    category: 'Nunți',
    aspect: 'portrait',
  },
  {
    id: 6,
    src: '/images/galerie/nunta-cuplu-gradina.webp',
    alt: 'Miri ținându-se de mână sub pergola albă din grădina Măgura Events',
    category: 'Nunți',
    aspect: 'landscape',
  },
  {
    id: 7,
    src: '/images/galerie/decor-cristale.webp',
    alt: 'Perdea de cristale decorative în grădina Măgura Events',
    category: 'Decor',
    aspect: 'portrait',
  },
  {
    id: 8,
    src: '/images/galerie/decor-photobooth.webp',
    alt: 'Photobooth tematic "Once upon a time" cu vedere la lac',
    category: 'Decor',
    aspect: 'landscape',
  },
  {
    id: 9,
    src: '/images/galerie/salon-royal-masa.webp',
    alt: 'Salon Royal — aranjament masă rotundă cu farfurii aurii și decor verde',
    category: 'Saloane',
    aspect: 'landscape',
  },
  {
    id: 10,
    src: '/images/galerie/detaliu-masa-premium.webp',
    alt: 'Detaliu masă premium — farfurii aurii, pahare de cristal și flori albe',
    category: 'Saloane',
    aspect: 'square',
  },
  {
    id: 11,
    src: '/images/galerie/salon-crystal-nunta.webp',
    alt: 'Salon Crystal complet amenajat pentru nuntă — vedere panoramică',
    category: 'Saloane',
    aspect: 'landscape',
  },
  {
    id: 12,
    src: '/images/galerie/locatie-lac-lebede.webp',
    alt: 'Lacul Măgura Events cu lebede albe — natură pitorească',
    category: 'Locație',
    aspect: 'portrait',
  },
];

function GalleryImage({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
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
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading="lazy"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-noir-900/55 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
        <ZoomIn size={28} className="text-gold-600" />
      </div>

      {/* Category tag */}
      <div className="absolute top-3 left-3 text-[0.55rem] font-sans tracking-widest uppercase px-2 py-1 bg-noir-900/80 text-gold-600/90">
        {item.category}
      </div>

      {/* Caption on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-noir-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <p className="font-sans text-xs text-cream-300 line-clamp-2">{item.alt}</p>
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
  const prevImage = useCallback(() => setLightboxIndex((i) => i !== null ? (i - 1 + displayItems.length) % displayItems.length : null), [displayItems.length]);
  const nextImage = useCallback(() => setLightboxIndex((i) => i !== null ? (i + 1) % displayItems.length : null), [displayItems.length]);

  return (
    <section
      className={`${preview ? 'section-padding' : 'pt-36 pb-20'} relative`}
      style={{ background: '#080808' }}
    >
      <div className="container-luxury">
        {preview ? (
          <AnimatedSection className="text-center mb-12">
            <p className="label-gold mb-4">✦ Galerie foto ✦</p>
            <h2 className="heading-lg text-cream-200 mb-4">
              Momente{' '}
              <span className="text-gold-gradient italic">imortalizate</span>
            </h2>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-xl mx-auto mt-6" style={{ lineHeight: 1.8 }}>
              Fiecare imagine spune o poveste — a unui cuplu fericit, a unui salon transformat în magie, a unui moment unic.
            </p>
          </AnimatedSection>
        ) : (
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
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3" layout>
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
                <GalleryImage item={item} onClick={() => openLightbox(i)} />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir-950/97 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-cream-400 hover:text-gold-600 transition-colors z-10"
              aria-label="Închide"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-cream-400 hover:text-gold-600 transition-colors z-10 p-2"
              aria-label="Anterior"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{    opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full mx-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ maxHeight: '80vh', aspectRatio: '4/3' }}>
                <Image
                  src={displayItems[lightboxIndex]?.src ?? ''}
                  alt={displayItems[lightboxIndex]?.alt ?? ''}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  quality={90}
                />
              </div>
              <p className="text-center font-sans text-xs text-cream-500 mt-4 px-4">
                {displayItems[lightboxIndex]?.alt}
              </p>
              <p className="text-center font-sans text-[0.6rem] text-cream-700 mt-1">
                {lightboxIndex + 1} / {displayItems.length}
              </p>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-cream-400 hover:text-gold-600 transition-colors z-10 p-2"
              aria-label="Următor"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
