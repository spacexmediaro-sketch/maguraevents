import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { Users, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Salon Crystal — Eleganță Clasică pentru Evenimente Memorabile',
  description:
    'Salon Crystal — spațiu elegant de 500 m² pentru 80–250 persoane. Candelabre, lumini ambientale, pistă de dans și sistem audio profesional. Ideal pentru nunți și botezuri premium în Giurgiu.',
  alternates: { canonical: 'https://magura-events.ro/saloane/salon-1' },
};

export default function SalonCrystalPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-0 relative"
        style={{ background: '#FAFAF7' }}
      >
        <div className="container-luxury">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-sans text-xs text-cream-600">
                <li><Link href="/" className="hover:text-gold-600 transition-colors">Acasă</Link></li>
                <li className="text-gold-600/40">/</li>
                <li><Link href="/saloane" className="hover:text-gold-600 transition-colors">Saloane</Link></li>
                <li className="text-gold-600/40">/</li>
                <li className="text-cream-400">Salon Crystal</li>
              </ol>
            </nav>
          </AnimatedSection>
        </div>

        <div className="relative h-[60vh] min-h-96 overflow-hidden border-t border-gold-600/10">
          <Image
            src="/images/galerie/salon-crystal-interior.webp"
            alt="Interior Salon Crystal — mese elegante cu scaune aurii și aranjamente florale premium"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-noir-900 via-noir-900/60 to-transparent">
            <div className="container-luxury">
              <p className="label-gold mb-2">✦ Salon 1 ✦</p>
              <h1 className="font-serif text-5xl md:text-7xl font-light text-cream-100" style={{ letterSpacing: '0.05em' }}>
                Salon Crystal
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding" style={{ background: '#FAFAF7' }}>
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <p className="label-gold mb-4">✦ Eleganță clasică redefinită ✦</p>
                <h2 className="heading-md text-cream-200 mb-6">
                  Un spațiu creat pentru{' '}
                  <span className="text-gold-gradient italic">momente perfecte</span>
                </h2>
                <div className="space-y-4 font-sans text-cream-500 text-sm mb-8" style={{ lineHeight: 1.9 }}>
                  <p>
                    Salonul Crystal este inima Măgura Events — un spațiu care îmbină arhitectura clasică cu eleganța modernă. Candelabre elegante, oglinzi cu rame aurite și lumini ambientale create special pentru fiecare moment al evenimentului dumneavoastră.
                  </p>
                  <p>
                    Cu o capacitate flexibilă între 80 și 250 de persoane, Salonul Crystal se pretează perfect pentru nunți intime și de dimensiuni medii, botezuri elegante, majorate și orice eveniment privat care necesită un cadru rafinat.
                  </p>
                  <p>
                    Echipa noastră amenajează salonul în funcție de viziunea fiecărui client — de la decoruri florale delicate la aranjamente grandioase, de la lumini calde și romantice la iluminare de scenă pentru o pistă de dans dinamică.
                  </p>
                </div>

                {/* Features list */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Candelabre de cristal originale',
                    'Sistem de lumini ambientale LED',
                    'Pistă de dans acoperită',
                    'Sistem audio profesional',
                    'Aer condiționat inteligent',
                    'Bar dedicat cu frigidere',
                    'Toalete renovate premium',
                    'Parcare privată gratuită',
                    'Acces persoane cu dizabilități',
                    'Wi-Fi de mare viteză',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-gold-600 flex-shrink-0" />
                      <span className="font-sans text-xs text-cream-400">{feat}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection direction="right" delay={0.2}>
                <div className="card-luxury p-7 mb-6">
                  <h3 className="font-serif text-xl text-cream-100 mb-5">Specificații tehnice</h3>
                  <dl className="space-y-4">
                    {[
                      { icon: Maximize2, label: 'Suprafață', val: '500 m²' },
                      { icon: Users,     label: 'Capacitate', val: '80 – 250 pers.' },
                      { icon: Sparkles,  label: 'Stil',       val: 'Clasic Premium' },
                    ].map(({ icon: Icon, label, val }) => (
                      <div key={label} className="flex items-center gap-4 border-b border-gold-600/10 pb-4 last:border-b-0 last:pb-0">
                        <div className="w-9 h-9 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-gold-600" />
                        </div>
                        <div>
                          <p className="font-sans text-[0.6rem] tracking-widest uppercase text-gold-600/60">{label}</p>
                          <p className="font-serif text-cream-200">{val}</p>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="card-luxury p-7 mb-6 border-gold-600/30">
                  <p className="label-gold text-[0.6rem] mb-3">Ideal pentru</p>
                  <div className="flex flex-wrap gap-2">
                    {['Nunți', 'Botezuri', 'Majorate', 'Zile de naștere', 'Corporate', 'Aniversări'].map((tag) => (
                      <span key={tag} className="text-[0.6rem] font-sans px-3 py-1.5 border border-gold-600/20 text-cream-500 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-gold w-full justify-center text-xs">
                  <span>Verifică Disponibilitatea</span>
                </Link>
                <Link href="/contact" className="btn-outline-gold w-full justify-center text-xs mt-3">
                  <span>Programează Vizionare</span>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Other salon CTA */}
      <section className="py-16 border-t border-gold-600/10" style={{ background: '#F5F2EB' }}>
        <div className="container-luxury text-center">
          <AnimatedSection>
            <p className="font-sans text-cream-500 text-sm mb-6">
              Aveți un eveniment mai mare? Descoperiți Salonul Royal.
            </p>
            <Link href="/saloane/salon-2" className="btn-outline-gold">
              <span>Salon Royal — 150–450 persoane</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
