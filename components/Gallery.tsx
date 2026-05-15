'use client';

import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

const categories = ['Toate', 'Nunți', 'Saloane', 'Botezuri', 'Locație', 'Decor', 'Zile de Naștere'];

type GalleryItem = {
  id:       number;
  src:      string;
  alt:      string;
  category: string;
  aspect:   'landscape' | 'portrait' | 'square';
};

const galleryItems: GalleryItem[] = [
  // ── SALOANE ─────────────────────────────────────────────────────────────
  {
    id: 1,
    src: '/images/galerie/salon-crystal-interior.webp',
    alt: 'Interior Salon Crystal Măgura Events Giurgiu — scaune elegante aurii și aranjamente florale premium nunți',
    category: 'Saloane', aspect: 'landscape',
  },
  {
    id: 2,
    src: '/images/galerie/salon-royal-masa.webp',
    alt: 'Salon Royal Măgura Events — masă rotundă cu farfurii aurii și decor verde premium nuntă Giurgiu',
    category: 'Saloane', aspect: 'landscape',
  },
  {
    id: 3,
    src: '/images/galerie/salon-crystal-nunta.webp',
    alt: 'Salon Crystal complet amenajat pentru nuntă — vedere panoramică interior Măgura Events',
    category: 'Saloane', aspect: 'landscape',
  },
  {
    id: 4,
    src: '/images/saloane/salon-nunti-masa-aurie-farfurii-argintii-centru-floral-giurgiu.webp',
    alt: 'Salon nunți Giurgiu — masă aurie cu farfurii argintii și centru floral albastru-auriu Măgura Events',
    category: 'Saloane', aspect: 'landscape',
  },
  {
    id: 5,
    src: '/images/saloane/salon-crystal-masa-rotunda-scaune-crem-aranjament-floral-iarna.webp',
    alt: 'Salon Crystal Măgura Events Giurgiu — masă rotundă cu scaune crem și aranjament floral iarnă',
    category: 'Saloane', aspect: 'landscape',
  },
  {
    id: 6,
    src: '/images/saloane/salon-nunti-masa-rotunda-centru-floral-albastru-auriu-giurgiu.webp',
    alt: 'Salon nunți Giurgiu — centru masă floral albastru-auriu pe masă rotundă oglindă premium',
    category: 'Saloane', aspect: 'landscape',
  },
  {
    id: 7,
    src: '/images/saloane/salon-nunta-panoramic-interior-scaune-albe-candelabru-covor.webp',
    alt: 'Interior salon nuntă panoramic Măgura Events Giurgiu — scaune albe, candelabru și covor decorativ',
    category: 'Saloane', aspect: 'landscape',
  },
  {
    id: 8,
    src: '/images/saloane/salon-crystal-masa-rotunda-aranjament-floral-alb-inalt-vaza-aurie.webp',
    alt: 'Salon Crystal Giurgiu — masă rotundă cu aranjament floral alb înalt în vază aurie, vedere grădină',
    category: 'Saloane', aspect: 'portrait',
  },
  {
    id: 9,
    src: '/images/saloane/salon-crystal-masa-nunta-scaune-albe-decor-negru-vedere-lac.webp',
    alt: 'Salon Crystal nunți Giurgiu — masă cu scaune albe și decor negru-alb, vedere panoramică lac',
    category: 'Saloane', aspect: 'portrait',
  },
  {
    id: 10,
    src: '/images/saloane/salon-nunta-centru-masa-vaza-aurie-inalta-flori-albe-boho.webp',
    alt: 'Salon nuntă Măgura Events — centru masă cu vază aurie înaltă și aranjament floral boho alb',
    category: 'Saloane', aspect: 'portrait',
  },
  {
    id: 11,
    src: '/images/hero/hero-detaliu-masa.webp',
    alt: 'Detaliu masă premium Măgura Events — farfurii aurii, pahare cristal și aranjament floral nuntă Giurgiu',
    category: 'Saloane', aspect: 'square',
  },
  {
    id: 12,
    src: '/images/galerie/detaliu-masa-premium.webp',
    alt: 'Detaliu masă premium nuntă Giurgiu — farfurii aurii, pahare de cristal și flori albe Măgura Events',
    category: 'Saloane', aspect: 'square',
  },

  // ── NUNȚI ───────────────────────────────────────────────────────────────
  {
    id: 13,
    src: '/images/galerie/nunta-cuplu-parc.webp',
    alt: 'Cuplu de miri în parcul Măgura Events Giurgiu — toamnă cu frunze colorate lângă lac',
    category: 'Nunți', aspect: 'landscape',
  },
  {
    id: 14,
    src: '/images/galerie/nunta-masa-verde.webp',
    alt: 'Aranjament masă nuntă Giurgiu — decor verde și auriu cu meniu personalizat E&A Măgura Events',
    category: 'Nunți', aspect: 'portrait',
  },
  {
    id: 15,
    src: '/images/nunti/mireasa-salon.webp',
    alt: 'Mireasă în rochie albă cu paiete în Salon Crystal Măgura Events Giurgiu — decor floral alb',
    category: 'Nunți', aspect: 'portrait',
  },
  {
    id: 16,
    src: '/images/galerie/nunta-cuplu-gradina.webp',
    alt: 'Miri ținându-se de mână sub pergola albă din grădina Măgura Events Giurgiu',
    category: 'Nunți', aspect: 'landscape',
  },
  {
    id: 17,
    src: '/images/nunti/nunta-decor-wedding-post-memories-corner-vedere-lac-giurgiu.webp',
    alt: 'Decor nuntă Giurgiu — Wedding Post și Memories Corner cu vedere spectaculoasă la lac Măgura Events',
    category: 'Nunți', aspect: 'portrait',
  },
  {
    id: 18,
    src: '/images/nunti/masa-nunta-farfurii-aurii-meniu-decor-somon-verde-magura-events.webp',
    alt: 'Masă nuntă Măgura Events Giurgiu — farfurii aurii cu card meniu, decor somon și verde elegant',
    category: 'Nunți', aspect: 'portrait',
  },
  {
    id: 19,
    src: '/images/nunti/nunta-cununie-civila-miri-semnat-acte-gradina-pergola-giurgiu.webp',
    alt: 'Nuntă Giurgiu — cununia civilă a mirilor în grădina cu pergolă albă Măgura Events',
    category: 'Nunți', aspect: 'portrait',
  },
  {
    id: 20,
    src: '/images/nunti/detaliu-masa-nunta-farfurie-neagra-servet-roz-meniu-personalizat.webp',
    alt: 'Detaliu masă nuntă premium Giurgiu — farfurie neagră cu șervețel roz și meniu circular personalizat',
    category: 'Nunți', aspect: 'portrait',
  },
  {
    id: 21,
    src: '/images/nunti/detaliu-masa-nunta-card-bun-venit-pahare-cristal-trandafir-alb.webp',
    alt: 'Detaliu masă nuntă Măgura Events — card "Bine ați venit", pahare cristal și trandafir alb',
    category: 'Nunți', aspect: 'landscape',
  },
  {
    id: 22,
    src: '/images/nunti/masa-mirilor-mr-mrs-arc-floral-alb-verde-vedere-lac-giurgiu.webp',
    alt: 'Masa mirilor Mr & Mrs cu arc floral alb-verde și vedere panoramică la lac — nuntă Giurgiu',
    category: 'Nunți', aspect: 'landscape',
  },
  {
    id: 23,
    src: '/images/nunti/masa-nunta-trandafiri-albi-panza-alba-vedere-lac-salon-crystal.webp',
    alt: 'Masă nuntă Salon Crystal Giurgiu — trandafiri albi, pânzeturi albe și vedere la lac Măgura Events',
    category: 'Nunți', aspect: 'landscape',
  },
  {
    id: 24,
    src: '/images/nunti/masa-nunta-orhidee-farfurii-roz-aurii-vedere-gradina-vara.webp',
    alt: 'Masă nuntă Măgura Events — orhidee albe, farfurii roz-aurii și vedere la grădina verde',
    category: 'Nunți', aspect: 'portrait',
  },
  {
    id: 25,
    src: '/images/nunti/masa-nunta-orhidee-albe-farfurii-premium-vedere-gradina-salon.webp',
    alt: 'Masă nuntă salon Giurgiu — orhidee albe, farfurii premium aurii și număr masă elegant',
    category: 'Nunți', aspect: 'landscape',
  },
  {
    id: 26,
    src: '/images/nunti/aranjament-masa-miri-floral-alb-orhidee-salon-nunta-giurgiu.webp',
    alt: 'Aranjament masă miri nuntă Giurgiu — flori albe, orhidee și decor premium Măgura Events',
    category: 'Nunți', aspect: 'portrait',
  },
  {
    id: 27,
    src: '/images/nunti/nunta-cuplu-toamna-copac-gradina-lac-magura-events-giurgiu.webp',
    alt: 'Cuplu miri toamna sub copacul cu frunze roșii în grădina Măgura Events Giurgiu, lângă lac',
    category: 'Nunți', aspect: 'landscape',
  },
  {
    id: 28,
    src: '/images/nunti/decor-nunta-flori-suspendate-tavan-masa-festiva-roz-salon.webp',
    alt: 'Decor nuntă extravagant Măgura Events — flori suspendate din tavan și masă festivă roz',
    category: 'Nunți', aspect: 'landscape',
  },

  // ── BOTEZURI ────────────────────────────────────────────────────────────
  {
    id: 29,
    src: '/images/galerie/decor-arc-floral.webp',
    alt: 'Arc floral cu trandafiri albi și vedere panoramică la lac — botez sau nuntă Măgura Events Giurgiu',
    category: 'Botezuri', aspect: 'portrait',
  },
  {
    id: 30,
    src: '/images/botezuri/decor-botez-baietel-ursulet-baloane-monstera-exterior-pergola-giurgiu.webp',
    alt: 'Decor botez băiețel Giurgiu — ursulet teddy bear, baloane și frunze monstera la pergola exterior',
    category: 'Botezuri', aspect: 'portrait',
  },
  {
    id: 31,
    src: '/images/botezuri/decor-botez-fetita-roz-ursulet-neon-baloane-interior-salon-giurgiu.webp',
    alt: 'Decor botez fetița Giurgiu — interior salon Măgura Events cu ursulet, neon personalizat și baloane roz',
    category: 'Botezuri', aspect: 'portrait',
  },

  // ── LOCAȚIE ─────────────────────────────────────────────────────────────
  {
    id: 32,
    src: '/images/locatie/exterior-noapte-copaci-luminati-fairy-lights-gradina-magura-events-giurgiu.webp',
    alt: 'Exterior Măgura Events noaptea Giurgiu — copaci luminați cu fairy lights și pergolă iluminată',
    category: 'Locație', aspect: 'portrait',
  },
  {
    id: 33,
    src: '/images/locatie/exterior-salon-events-pergola-copaci-verzi-vara-magura-giurgiu.webp',
    alt: 'Exterior salon evenimente Măgura Events Giurgiu — pergolă albă cu copaci verzi și bar cocktail',
    category: 'Locație', aspect: 'landscape',
  },
  {
    id: 34,
    src: '/images/locatie/exterior-salon-panoramic-gradina-lac-magura-events-buturugeni-giurgiu.webp',
    alt: 'Vedere panoramică exterior Măgura Events Buturugeni Giurgiu — grădina cu lac și salon transparent',
    category: 'Locație', aspect: 'landscape',
  },
  {
    id: 35,
    src: '/images/locatie/gradina-lac-peisaj-verde-magura-events-giurgiu-langa-bucuresti.webp',
    alt: 'Grădina și lacul Măgura Events Giurgiu — peisaj natural verde, locație premium lângă București 40km',
    category: 'Locație', aspect: 'portrait',
  },
  {
    id: 36,
    src: '/images/locatie/lac-lebede.webp',
    alt: 'Lacul Măgura Events Giurgiu cu lebede albe — natură pitorească în grădina locației premium',
    category: 'Locație', aspect: 'portrait',
  },
  {
    id: 37,
    src: '/images/locatie/arc-floral-lac.webp',
    alt: 'Arc floral cu vedere la lac Măgura Events Giurgiu — decor nuntă exterior elegant Buturugeni',
    category: 'Locație', aspect: 'portrait',
  },

  // ── DECOR ───────────────────────────────────────────────────────────────
  {
    id: 38,
    src: '/images/galerie/decor-cristale.webp',
    alt: 'Perdea de cristale decorative în grădina Măgura Events Giurgiu — decor nuntă exterior premium',
    category: 'Decor', aspect: 'portrait',
  },
  {
    id: 39,
    src: '/images/galerie/decor-photobooth.webp',
    alt: 'Photobooth tematic "Once upon a time" cu vedere la lac Măgura Events — decor nuntă Giurgiu',
    category: 'Decor', aspect: 'landscape',
  },
  {
    id: 40,
    src: '/images/decor/cigar-bar-exterior-nunta-premium-magura-events-giurgiu.webp',
    alt: 'Cigar bar exterior nuntă premium Măgura Events Giurgiu — detaliu petrecere în grădina cu lac',
    category: 'Decor', aspect: 'landscape',
  },

  // ── ZILE DE NAȘTERE ─────────────────────────────────────────────────────
  {
    id: 41,
    src: '/images/zile-nastere/decor-zi-nastere-exterior-flori-colorate-baloane-bun-venit-giurgiu.webp',
    alt: 'Decor zi de naștere exterior Giurgiu — flori colorate, baloane și panou Bine ați venit Măgura Events',
    category: 'Zile de Naștere', aspect: 'landscape',
  },

  // ── SALOANE (continuare) ─────────────────────────────────────────────────
  {
    id: 42,
    src: '/images/saloane/salon-crystal-panoramic.webp',
    alt: 'Salon Crystal vedere panoramică Măgura Events Giurgiu — interior complet amenajat pentru eveniment premium',
    category: 'Saloane', aspect: 'landscape',
  },
  {
    id: 43,
    src: '/images/saloane/salon-royal-interior.webp',
    alt: 'Interior Salon Royal Măgura Events Giurgiu — sală de evenimente cu capacitate 450 persoane, decor elegant',
    category: 'Saloane', aspect: 'landscape',
  },
  {
    id: 44,
    src: '/images/saloane/aranjament-masa-verde-auriu.webp',
    alt: 'Aranjament masă salon Măgura Events — decor verde și auriu, flori naturale, design premium nuntă Giurgiu',
    category: 'Saloane', aspect: 'landscape',
  },

  // ── NUNȚI (continuare) ────────────────────────────────────────────────────
  {
    id: 45,
    src: '/images/nunti/cuplu-parc-toamna.webp',
    alt: 'Cuplu de miri toamna în parcul Măgura Events Giurgiu — sesiune foto nuntă lângă lac, frunze colorate',
    category: 'Nunți', aspect: 'landscape',
  },
  {
    id: 46,
    src: '/images/galerie/nunta-mireasa.webp',
    alt: 'Mireasă elegantă în Salon Crystal Măgura Events — rochie albă, decor floral premium nuntă Giurgiu',
    category: 'Nunți', aspect: 'portrait',
  },

  // ── DECOR (continuare) ────────────────────────────────────────────────────
  {
    id: 47,
    src: '/images/decor/cristale-exterior.webp',
    alt: 'Decor cristale exterior Măgura Events Giurgiu — instalație luminoasă elegantă pentru nuntă în grădină',
    category: 'Decor', aspect: 'portrait',
  },
  {
    id: 48,
    src: '/images/decor/photobooth-carte-povesti.webp',
    alt: 'Photobooth "A fost odată ca niciodată" Măgura Events — decor tematic pentru nuntă de poveste Giurgiu',
    category: 'Decor', aspect: 'landscape',
  },

  // ── LOCAȚIE (continuare) ──────────────────────────────────────────────────
  {
    id: 49,
    src: '/images/galerie/locatie-lac-lebede.webp',
    alt: 'Lacul cu lebede Măgura Events Giurgiu — natură pitorească în grădina locației de evenimente premium',
    category: 'Locație', aspect: 'portrait',
  },
];

function GalleryImage({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const dims = {
    landscape: { w: 800, h: 600 },
    portrait:  { w: 800, h: 1067 },
    square:    { w: 800, h: 800 },
  }[item.aspect];

  return (
    <button
      onClick={onClick}
      className="relative w-full overflow-hidden group focus:outline-none focus:ring-2 focus:ring-gold-600 block"
      aria-label={`Vizualizează: ${item.alt}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={dims.w}
        height={dims.h}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 block"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-noir-900/55 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
        <ZoomIn size={28} className="text-gold-600" />
      </div>
      <div className="absolute top-3 left-3 text-[0.55rem] font-sans tracking-widest uppercase px-2 py-1 bg-noir-900/80 text-gold-600/90">
        {item.category}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-noir-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <p className="font-sans text-[0.6rem] text-cream-300 line-clamp-2">{item.alt}</p>
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

  const displayItems = preview ? galleryItems.slice(0, 8) : filtered;

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => i !== null ? (i - 1 + displayItems.length) % displayItems.length : null),
    [displayItems.length]);
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => i !== null ? (i + 1) % displayItems.length : null),
    [displayItems.length]);

  return (
    <section className={`${preview ? 'section-padding' : 'pt-36 pb-20'} relative`} style={{ background: '#FAFAF7' }}>
      <div className="container-luxury">
        {preview ? (
          <AnimatedSection className="text-center mb-12">
            <p className="label-gold mb-4">✦ Galerie foto ✦</p>
            <h2 className="heading-lg text-cream-200 mb-4">
              Momente <span className="text-gold-gradient italic">imortalizate</span>
            </h2>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-xl mx-auto mt-6" style={{ lineHeight: 1.8 }}>
              Fiecare imagine spune o poveste — a unui cuplu fericit, a unui salon transformat în magie, a unui moment unic la Măgura Events Giurgiu.
            </p>
          </AnimatedSection>
        ) : (
          <AnimatedSection className="text-center mb-12">
            <p className="label-gold mb-2">✦ Galerie foto ✦</p>
            <h1 className="heading-lg text-cream-200 mb-4">
              Momentele noastre de <span className="text-gold-gradient italic">excepție</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-xl mx-auto mt-6" style={{ lineHeight: 1.8 }}>
              Descoperă atmosfera unică a Măgura Events — nunți elegante, botezuri delicate, majorate spectaculoase și locații superbe în Buturugeni, Giurgiu.
            </p>
          </AnimatedSection>
        )}

        {/* Filter */}
        {!preview && (
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
                <span className="ml-1.5 text-gold-600/50">
                  ({cat === 'Toate' ? galleryItems.length : galleryItems.filter(i => i.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Masonry columns — fără goluri */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-1.5">
          <AnimatePresence>
            {displayItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="break-inside-avoid mb-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{    opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <GalleryImage item={item} onClick={() => openLightbox(i)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {preview && (
          <AnimatedSection className="text-center mt-12">
            <Link href="/galerie" className="btn-outline-gold">
              <span>Vezi toate {galleryItems.length} fotografii</span>
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
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-cream-400 hover:text-gold-600 transition-colors z-10" aria-label="Închide">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 text-cream-400 hover:text-gold-600 z-10 p-2" aria-label="Anterior">
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

            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 text-cream-400 hover:text-gold-600 z-10 p-2" aria-label="Următor">
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
