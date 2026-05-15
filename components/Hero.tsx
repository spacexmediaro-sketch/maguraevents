'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [introVisible, setIntroVisible] = useState(true);
  const [heroVisible,  setHeroVisible]  = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIntroVisible(false);
      setTimeout(() => setHeroVisible(true), 300);
    }, 2400);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${y * 0.4}px)`;
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
            {/* Warm ambient light blobs */}
            <div
              className="absolute rounded-full opacity-20 blur-[120px]"
              style={{
                width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
                top: '10%', left: '20%',
                animation: 'float 4s ease-in-out infinite',
              }}
            />
            <div
              className="absolute rounded-full opacity-10 blur-[100px]"
              style={{
                width: '40vw', height: '40vw',
                background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
                bottom: '15%', right: '15%',
                animation: 'float 5s ease-in-out infinite reverse',
              }}
            />

            {/* Logo reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              {/* Decorative ornament top */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-20 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
                <span style={{ color: '#C9A84C', fontSize: '1rem' }}>✦</span>
                <div className="w-20 h-px" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              </motion.div>

              <motion.span
                initial={{ opacity: 0, letterSpacing: '0.5em' }}
                animate={{ opacity: 1, letterSpacing: '0.5em' }}
                transition={{ delay: 0.3, duration: 1.5 }}
                className="font-serif font-light text-gold-gradient block"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
              >
                MĂGURA
              </motion.span>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="font-sans font-light text-cream-500 mt-2"
                style={{ fontSize: '0.7rem', letterSpacing: '0.7em' }}
              >
                EVENTS
              </motion.span>

              {/* Decorative ornament bottom */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-3 mt-6"
              >
                <div className="w-20 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
                <span style={{ color: '#C9A84C', fontSize: '0.6rem' }}>◆</span>
                <div className="w-20 h-px" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="font-sans text-cream-600 text-xs tracking-[0.4em] uppercase mt-8"
              >
                Momente care rămân
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO SECTION ── */}
      <section
        className="relative h-screen min-h-[700px] overflow-hidden"
        aria-label="Măgura Events — Saloane premium pentru evenimente memorabile"
      >
        {/* Background: cinematic luxury atmosphere */}
        <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
          {/* Base color layers */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 80% at 50% 100%, rgba(139,105,20,0.25) 0%, transparent 60%),
                radial-gradient(ellipse 60% 40% at 30% 60%, rgba(201,168,76,0.12) 0%, transparent 50%),
                radial-gradient(ellipse 50% 60% at 70% 40%, rgba(212,175,55,0.08) 0%, transparent 50%),
                linear-gradient(180deg, #0a0805 0%, #080808 60%, #040404 100%)
              `,
            }}
          />

          {/* Simulated light bokeh for luxury venue atmosphere */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-[0.06]"
              style={{
                width:  `${Math.random() * 200 + 60}px`,
                height: `${Math.random() * 200 + 60}px`,
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#D4AF37' : '#C9A84C'} 0%, transparent 70%)`,
                top:   `${Math.random() * 100}%`,
                left:  `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
                filter: 'blur(20px)',
              }}
            />
          ))}

          {/* Table setting silhouette hint */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2/5 opacity-20"
            style={{
              background: `
                radial-gradient(ellipse 100% 60% at 50% 100%,
                  rgba(201,168,76,0.3) 0%,
                  transparent 60%
                )
              `,
            }}
          />
        </div>

        {/* Hero gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.45) 50%, rgba(8,8,8,0.92) 100%)',
          }}
        />

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: heroVisible ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="label-gold mb-6"
          >
            ✦ Două saloane de excepție ✦
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 30 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-serif font-light text-cream-200 mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 1.05, letterSpacing: '0.04em' }}
          >
            Unde visele{' '}
            <span className="block italic text-gold-gradient">
              devin amintiri
            </span>
          </motion.h1>

          {/* Gold divider */}
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

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-sans font-light text-cream-500 max-w-xl mx-auto mb-12"
            style={{ fontSize: '1rem', lineHeight: 1.8, letterSpacing: '0.05em' }}
          >
            Nunți, botezuri, majorate și evenimente corporate organizate cu rafinament și atenție impecabilă la fiecare detaliu, în inima județului Buzău.
          </motion.p>

          {/* CTAs */}
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
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown size={18} className="text-gold-600" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
