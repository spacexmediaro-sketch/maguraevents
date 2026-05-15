'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';



// Rotăm între 3 imagini reale în hero
const heroImages = [
  {
    src: '/images/hero/hero-salon-crystal.webp',
    alt: 'Interior Salon Crystal — mese elegante cu scaune aurii și aranjamente florale premium',
  },
  {
    src: '/images/hero/hero-cuplu-gradina.webp',
    alt: 'Miri la Măgura Events — pergola albă din grădina salonului',
  },
  {
    src: '/images/hero/hero-detaliu-masa.webp',
    alt: 'Detaliu masă premium — farfurii aurii, pahare de cristal și aranjament floral',
  },
];

export default function Hero() {
  const [introVisible,  setIntroVisible]  = useState(true);
  const [heroVisible,   setHeroVisible]   = useState(false);
  const [currentImage,  setCurrentImage]  = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIntroVisible(false);
      setTimeout(() => setHeroVisible(true), 300);
    }, 2400);
    return () => clearTimeout(introTimer);
  }, []);

  // Rotație automată imagini la fiecare 6s
  useEffect(() => {
    if (!heroVisible) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── CINEMATIC INTRO ── */}
      <AnimatePresence>
        {introVisible && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ background: '#040404' }}
            aria-hidden="true"
          >
            <div className="absolute rounded-full opacity-15 blur-[120px]" style={{ width: '50vw', height: '50vw', background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)', top: '10%', left: '20%', animation: 'float 4s ease-in-out infinite' }} />
            <div className="absolute rounded-full opacity-08 blur-[100px]" style={{ width: '40vw', height: '40vw', background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)', bottom: '15%', right: '15%', animation: 'float 5s ease-in-out infinite reverse' }} />

            {/* Logo real centrat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              {/* Logo image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="relative mb-8"
                style={{ width: 'clamp(180px, 28vw, 280px)', height: 'clamp(180px, 28vw, 280px)' }}
              >
                <Image
                  src="/logo.png"
                  alt="Măgura Events"
                  fill
                  className="object-contain drop-shadow-[0_0_40px_rgba(201,168,76,0.4)]"
                  sizes="280px"
                  priority
                />
              </motion.div>

              {/* Linie decorativă */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
                <span style={{ color: '#C9A84C', fontSize: '0.5rem' }}>◆</span>
                <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="font-sans text-cream-600 text-xs tracking-[0.45em] uppercase mt-5"
              >
                Momente care rămân
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO SECTION ── */}
      <section className="relative h-screen min-h-[700px] overflow-hidden" aria-label="Măgura Events — Saloane premium pentru evenimente memorabile">

        {/* Real photo background with parallax */}
        <div ref={parallaxRef} className="absolute inset-0 will-change-transform" style={{ top: '-10%', height: '120%' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImage].src}
                alt={heroImages[currentImage].alt}
                fill
                priority={currentImage === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={85}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Gradient overlay for dark luxury look */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(8,8,8,0.45) 0%, rgba(8,8,8,0.3) 40%, rgba(8,8,8,0.75) 80%, rgba(8,8,8,0.97) 100%)',
          }}
        />

        {/* Gold vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(139,105,20,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Image dots indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className="transition-all duration-300"
              aria-label={`Imaginea ${i + 1}`}
              style={{
                width: i === currentImage ? '24px' : '6px',
                height: '2px',
                background: i === currentImage ? '#D4AF37' : 'rgba(212,175,55,0.35)',
              }}
            />
          ))}
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: heroVisible ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="label-gold mb-6"
          >
            ✦ Două saloane de excepție în județul Buzău ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 30 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-serif font-light text-cream-100 mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 1.05, letterSpacing: '0.04em', textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
          >
            Unde visele{' '}
            <span className="block italic text-gold-gradient">
              devin amintiri
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: heroVisible ? 1 : 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <span style={{ color: '#C9A84C', fontSize: '0.75rem' }}>✦</span>
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-sans font-light text-cream-400 max-w-xl mx-auto mb-12"
            style={{ fontSize: '1rem', lineHeight: 1.8, letterSpacing: '0.03em' }}
          >
            Nunți, botezuri, majorate și evenimente corporate organizate cu rafinament și atenție impecabilă la fiecare detaliu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 20 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="btn-gold">
              <span>Solicită Ofertă</span>
            </Link>
            <Link href="/saloane" className="btn-outline-gold">
              <span>Descoperă Saloanele</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: heroVisible ? 0.6 : 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-xs tracking-widest uppercase text-cream-600">Descoperă</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown size={18} className="text-gold-600" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
