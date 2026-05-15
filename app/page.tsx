import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SalonShowcase from '@/components/SalonShowcase';
import EventTypes from '@/components/EventTypes';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import GeoContent from '@/components/GeoContent';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { IconTikTok } from '@/components/Icons';
import JsonLd from '@/components/JsonLd';
import { eventVenueSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Măgura Events — Salon Nunți și Evenimente Premium | Buturugeni, Giurgiu',
  description:
    'Măgura Events — saloane premium pentru nunți, botezuri, majorate și corporate în Buturugeni, Giurgiu, la 40 km de București. Salon Crystal (250 pers.) și Salon Royal (450 pers.). Organizare completă, meniuri rafinate.',
  keywords: [
    'salon nunți Giurgiu',
    'salon evenimente Giurgiu',
    'salon botez Giurgiu',
    'Măgura Events',
    'locație nuntă lângă București',
    'salon nuntă Buturugeni',
    'restaurant nuntă Giurgiu',
    'salon majorat Giurgiu',
    'salon nuntă Ilfov',
    'nuntă aproape București',
    'salon eventos lux',
  ],
  alternates: { canonical: 'https://magura-events.ro' },
  other: {
    'geo.region':    'RO-GR',
    'geo.placename': 'Buturugeni, Giurgiu, România',
    'geo.position':  '44.13;25.87',
    'ICBM':          '44.13, 25.87',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={eventVenueSchema()} />

      {/* Hero cinematic */}
      <Hero />

      {/* Stats bar */}
      <StatsBar />

      {/* Salon showcase */}
      <SalonShowcase />

      {/* Event types */}
      <EventTypes />

      {/* Menu section */}
      <MenuSection />

      {/* Gallery preview */}
      <Gallery preview />

      {/* Reviews */}
      <Reviews />

      {/* Full-width CTA */}
      <CtaBanner />

      {/* FAQ */}
      <FAQ />

      {/* Map + Contact teaser */}
      <MapSection />

      {/* GEO SEO — zona de acoperire */}
      <GeoContent />
    </>
  );
}

function StatsBar() {
  const stats = [
    { value: '10+',  label: 'Ani de experiență' },
    { value: '500+', label: 'Evenimente organizate' },
    { value: '2',    label: 'Saloane premium' },
    { value: '5.0',  label: 'Rating Google' },
  ];

  return (
    <div
      className="border-y border-gold-600/15 py-10"
      style={{ background: '#F7F4EE' }}
    >
      <div className="container-luxury">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p
                className="font-serif font-light text-gold-gradient mb-1"
                style={{ fontSize: '2.5rem', letterSpacing: '0.05em' }}
                aria-label={`${stat.value} ${stat.label}`}
              >
                {stat.value}
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-cream-500">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}

function CtaBanner() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.12) 0%, transparent 60%),
          linear-gradient(180deg, #0a0805 0%, #FAFAF7 100%)
        `,
      }}
    >
      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }} />

      <div className="container-luxury text-center">
        <AnimatedSection>
          <p className="label-gold mb-6">✦ Rezervați data dorită ✦</p>
          <h2 className="heading-lg text-cream-200 mb-6 max-w-3xl mx-auto">
            Evenimentul perfect începe cu{' '}
            <span className="text-gold-gradient italic">o conversație</span>
          </h2>
          <p className="font-sans text-cream-500 max-w-xl mx-auto mb-10" style={{ lineHeight: 1.8 }}>
            Contactați echipa noastră astăzi și descoperiți cum putem transforma visul dumneavoastră într-o realitate memorabilă. Consultanța este complet gratuită.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              <span>Solicită Ofertă Gratuită</span>
            </Link>
            <a href="tel:+40765736177" className="btn-outline-gold">
              <span>Sună Acum</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="section-padding-sm border-t border-gold-600/10" style={{ background: '#FAFAF7' }}>
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <AnimatedSection direction="left">
            <p className="label-gold mb-4">✦ Locație ✦</p>
            <h2 className="heading-md text-cream-200 mb-6">
              Găsiți-ne în inima{' '}
              <span className="text-gold-gradient italic">Buturugeni, Giurgiu</span>
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold-600/70 mb-1">Adresă</p>
                  <address className="font-sans text-cream-300 text-sm not-italic" style={{ lineHeight: 1.7 }}>
                    Sat Măgura, Comuna Buturugeni, Județul Giurgiu<br />România
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold-600/70 mb-1">Telefon</p>
                  <a href="tel:+40765736177" className="font-sans text-cream-300 text-sm hover:text-gold-600 transition-colors">
                    +40 765 736 177
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold-600/70 mb-1">Program</p>
                  <p className="font-sans text-cream-300 text-sm" style={{ lineHeight: 1.7 }}>
                    Luni – Vineri: 09:00 – 20:00<br />
                    Sâmbătă – Duminică: 10:00 – 22:00
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="btn-gold">
                <span>Programează Vizionare</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Google Maps embed */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative border border-gold-600/20 overflow-hidden" style={{ height: '380px' }}>
              <iframe
                src="https://maps.google.com/maps?q=Magura+Events+Buturugeni+Giurgiu+Romania&output=embed&hl=ro&z=14"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(75%) invert(88%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locație Măgura Events pe Google Maps"
                aria-label="Hartă Google Maps cu locația Măgura Events în județul Giurgiu"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 40px rgba(250,250,247,0.6)',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              />
            </div>
            <p className="font-sans text-xs text-cream-700 mt-3 text-center">
              <a
                href="https://share.google/cdgA7UY1kWbB499qv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600/60 hover:text-gold-600 transition-colors"
              >
                Deschide în Google Maps →
              </a>
            </p>

            {/* Social media */}
            <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-gold-600/10">
              <span className="font-sans text-xs text-cream-700 tracking-widest uppercase">Urmărește-ne</span>
              <a href="https://www.facebook.com/profile.php?id=100071001438187" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 border border-gold-600/20 flex items-center justify-center text-cream-500 hover:text-gold-600 hover:border-gold-600/50 transition-all duration-300">
                <Facebook size={14} />
              </a>
              <a href="https://www.instagram.com/magura_events" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 border border-gold-600/20 flex items-center justify-center text-cream-500 hover:text-gold-600 hover:border-gold-600/50 transition-all duration-300">
                <Instagram size={14} />
              </a>
              <a href="https://www.tiktok.com/@magura_events" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 border border-gold-600/20 flex items-center justify-center text-cream-500 hover:text-gold-600 hover:border-gold-600/50 transition-all duration-300">
                <IconTikTok size={14} color="currentColor" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
