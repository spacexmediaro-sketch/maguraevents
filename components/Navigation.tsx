'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Acasă',   href: '/' },
  { label: 'Despre',  href: '/despre' },
  {
    label: 'Saloane',
    href:  '/saloane',
    children: [
      { label: 'Salon Crystal', href: '/saloane/salon-1' },
      { label: 'Salon Royal',   href: '/saloane/salon-2' },
    ],
  },
  {
    label: 'Evenimente',
    href:  '#',
    children: [
      { label: 'Nunți',              href: '/nunti' },
      { label: 'Botezuri',           href: '/botezuri' },
      { label: 'Majorate',           href: '/majorate' },
      { label: 'Zile de Naștere',    href: '/zile-nastere' },
      { label: 'Corporate',          href: '/corporate' },
    ],
  },
  { label: 'Meniuri', href: '/meniuri' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Recenzii', href: '/recenzii' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-noir-900/95 backdrop-blur-md border-b border-gold-600/20 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="Măgura Events — Pagina principală">
            <span
              className="font-serif text-2xl font-light tracking-[0.3em] uppercase text-gold-gradient"
              style={{ fontSize: '1.4rem', letterSpacing: '0.35em' }}
            >
              MĂGURA
            </span>
            <span className="font-sans text-[0.55rem] tracking-[0.5em] uppercase text-cream-500 mt-0.5">
              EVENTS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" ref={dropdownRef} aria-label="Navigare principală">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className="flex items-center gap-1 text-xs font-sans font-medium tracking-widest uppercase text-cream-400 hover:text-gold-600 transition-colors duration-300"
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{   opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 min-w-[200px] bg-noir-700 border border-gold-600/20 py-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 text-xs font-sans font-medium tracking-widest uppercase text-cream-400 hover:text-gold-600 hover:bg-gold-600/5 transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-sans font-medium tracking-widest uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-gold-600'
                      : 'text-cream-400 hover:text-gold-600'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}

            <Link
              href="/contact"
              className="btn-gold text-[0.65rem] px-6 py-3"
            >
              <span>Solicită Ofertă</span>
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream-300 hover:text-gold-600 transition-colors"
            aria-label={mobileOpen ? 'Închide meniu' : 'Deschide meniu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{   x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-noir-800 border-l border-gold-600/20 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-gold-600/10">
              <span className="font-serif text-xl tracking-widest text-gold-600">MENIU</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-cream-400 hover:text-gold-600 transition-colors"
                aria-label="Închide meniu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.children ? (
                    <div className="mb-2">
                      <span className="block py-3 text-xs font-sans font-medium tracking-widest uppercase text-gold-600/70 border-b border-gold-600/10">
                        {link.label}
                      </span>
                      <div className="pl-4 mt-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2.5 text-xs font-sans tracking-widest uppercase text-cream-400 hover:text-gold-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block py-3 text-xs font-sans font-medium tracking-widest uppercase border-b border-gold-600/10 transition-colors ${
                        pathname === link.href ? 'text-gold-600' : 'text-cream-300 hover:text-gold-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="px-6 py-6 border-t border-gold-600/10">
              <Link
                href="/contact"
                className="btn-gold w-full text-center text-xs justify-center"
              >
                <span>Solicită Ofertă Personalizată</span>
              </Link>
              <p className="text-center text-xs text-cream-600 mt-4">
                Tel:{' '}
                <a href="tel:+40XXXXXXXXX" className="text-gold-600 hover:underline">
                  +40 XXX XXX XXX
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay behind mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{   opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-noir-900/80 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
