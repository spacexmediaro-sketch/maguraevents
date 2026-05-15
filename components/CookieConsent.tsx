'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

const COOKIE_KEY = 'magura_events_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{   y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-6 md:right-auto md:max-w-sm"
          role="dialog"
          aria-label="Consimțământ cookies"
          aria-live="polite"
        >
          <div
            className="border border-gold-600/25 p-6"
            style={{ background: 'rgba(15,15,15,0.97)', backdropFilter: 'blur(12px)' }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <Cookie size={18} className="text-gold-600 flex-shrink-0" />
                <h3 className="font-serif text-lg font-light text-cream-200">Cookies</h3>
              </div>
              <button
                onClick={decline}
                className="text-cream-600 hover:text-cream-300 transition-colors flex-shrink-0"
                aria-label="Refuză și închide"
              >
                <X size={16} />
              </button>
            </div>

            <p className="font-sans text-xs text-cream-500 mb-5" style={{ lineHeight: 1.7 }}>
              Folosim cookie-uri pentru a îmbunătăți experiența dumneavoastră pe site. Prin continuarea navigării, acceptați utilizarea cookie-urilor conform{' '}
              <Link href="/cookies" className="text-gold-600 underline hover:text-gold-500">
                Politicii de cookies
              </Link>{' '}
              și{' '}
              <Link href="/confidentialitate" className="text-gold-600 underline hover:text-gold-500">
                Politicii de confidențialitate
              </Link>.
            </p>

            <div className="flex gap-3">
              <button
                onClick={accept}
                className="btn-gold flex-1 text-center text-xs px-4 py-3 justify-center"
              >
                <span>Accept</span>
              </button>
              <button
                onClick={decline}
                className="btn-outline-gold flex-1 text-xs px-4 py-3 text-center justify-center"
              >
                <span>Refuz</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
