'use client';

import Link from 'next/link';
import { UtensilsCrossed, ChevronRight } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const meniuri = [
  {
    title:    'Meniu Nuntă',
    subtitle: 'Experiență gastronomică completă',
    href:     '/meniuri#nunta',
    icon:     '🥂',
    courses: [
      'Aperitive și platouri premium',
      'Supă și preparate calde',
      'Fel principal — carne și pește',
      'Salate rafinate',
      'Tort nuptial personalizat',
      'Desert și cofetărie selectă',
    ],
    description: 'Meniu complet de nuntă conceput de chef-ul nostru, cu ingrediente proaspete și preparate pentru a impresiona cei mai exigenți invitați.',
    highlight: true,
  },
  {
    title:    'Meniu Botez',
    subtitle: 'Rafinament pentru o zi specială',
    href:     '/meniuri#botez',
    icon:     '🍼',
    courses: [
      'Aperitive delicate',
      'Ciorbe tradiționale și creme',
      'Preparate principale selectate',
      'Salate asortate',
      'Tort de botez tematic',
      'Dulciuri și cofetărie',
    ],
    description: 'Meniu gândit pentru atmosfera caldă a unui botez, cu preparate rafinate și o prezentare elegantă care completează bucuria zilei.',
    highlight: false,
  },
  {
    title:    'Meniu Majorat',
    subtitle: 'Savoare pentru o seară legendară',
    href:     '/meniuri#majorat',
    icon:     '🎉',
    courses: [
      'Finger food & canapes',
      'Bufet cald variat',
      'Grătar și specialități',
      'Salate creative',
      'Tort aniversar spectaculos',
      'Candy bar și dulciuri',
    ],
    description: 'Meniu energic și savuros pentru petrecerile de majorat, cu opțiuni variate care satisfac toți invitații, de la aperitive la desert.',
    highlight: false,
  },
  {
    title:    'Meniu Corporate',
    subtitle: 'Profesionalism în fiecare farfurie',
    href:     '/meniuri#corporate',
    icon:     '🏢',
    courses: [
      'Welcome coffee & croissante',
      'Bufet business select',
      'Preparate principale rafinate',
      'Salate și garnituri',
      'Desert și fructe',
      'Cafea și ceaiuri premium',
    ],
    description: 'Catering de business conceput pentru a impresiona partenerii și colegii, cu o prezentare impecabilă și preparate de înaltă calitate.',
    highlight: false,
  },
];

export default function MenuSection() {
  return (
    <section className="section-padding" style={{ background: '#090908' }}>
      <div className="container-luxury">
        <AnimatedSection className="text-center mb-16">
          <p className="label-gold mb-4">✦ Gastronomie de excepție ✦</p>
          <h2 className="heading-lg text-cream-200 mb-4">
            Meniuri create{' '}
            <span className="text-gold-gradient italic">cu pasiune</span>
          </h2>
          <span className="gold-line" />
          <p className="font-sans text-cream-500 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
            Fiecare meniu este conceput special pentru tipul dumneavoastră de eveniment, cu ingrediente proaspete și preparate de chef în propria noastră bucătărie.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {meniuri.map((meniu) => (
            <StaggerItem key={meniu.title}>
              <article
                className={`card-luxury flex flex-col h-full p-6 ${
                  meniu.highlight
                    ? 'border-gold-600/40'
                    : 'border-gold-600/15'
                }`}
              >
                {meniu.highlight && (
                  <div className="mb-3">
                    <span className="text-[0.55rem] font-sans font-medium tracking-widest uppercase px-3 py-1 bg-gold-600 text-noir-900">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <span style={{ fontSize: '1.8rem' }} role="img" aria-label={meniu.title}>
                    {meniu.icon}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-light text-cream-100 mb-1">{meniu.title}</h3>
                <p className="font-sans text-gold-600/70 text-xs tracking-wider mb-4">{meniu.subtitle}</p>

                <p className="font-sans text-cream-500 text-xs mb-5" style={{ lineHeight: 1.75 }}>
                  {meniu.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {meniu.courses.map((course) => (
                    <li key={course} className="flex items-start gap-2">
                      <UtensilsCrossed size={10} className="mt-1 flex-shrink-0 text-gold-600/50" />
                      <span className="font-sans text-xs text-cream-500">{course}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={meniu.href}
                  className="flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase text-gold-600/70 hover:text-gold-600 transition-colors duration-300 mt-auto"
                >
                  <span>Detalii meniu</span>
                  <ChevronRight size={12} />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-14" delay={0.2}>
          <div className="inline-flex flex-col items-center gap-4">
            <p className="font-sans text-cream-500 text-sm">
              Doriți un meniu personalizat? Discutați cu echipa noastră.
            </p>
            <Link href="/contact" className="btn-gold">
              <span>Solicită Ofertă Meniu</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
