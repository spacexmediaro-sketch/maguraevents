'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Maximize2, Sparkles, ArrowRight } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const saloane = [
  {
    id:       'salon-1',
    name:     'Salon Crystal',
    subtitle: 'Eleganță clasică redefinită',
    href:     '/saloane/salon-1',
    capacitate: '80 – 250 persoane',
    suprafata:  '500 m²',
    stil:       'Clasic Premium',
    features:   ['Lumini ambientale LED', 'Scenă și pistă de dans', 'Sistem audio profesional', 'Climatizare inteligentă'],
    description: 'Salonul Crystal îmbină arhitectura clasică cu rafinamentul modern. Candelabre elegante, oglinzi cu rame aurite și lumini ambientale create pentru fiecare moment al evenimentului dumneavoastră.',
    image:      '/images/galerie/salon-crystal-interior.webp',
    imageAlt:   'Interior Salon Crystal cu mese aurii și aranjamente florale premium',
    color:      '#C9A84C',
    gradient:   'linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(212,175,55,0.05) 100%)',
  },
  {
    id:       'salon-2',
    name:     'Salon Royal',
    subtitle: 'Grandoare pentru momente unice',
    href:     '/saloane/salon-2',
    capacitate: '150 – 450 persoane',
    suprafata:  '850 m²',
    stil:       'Grand Luxe',
    features:   ['Terasă privată', 'Foyer de primire separat', 'Proiector și ecran cinema', 'Bar dedicat'],
    description: 'Salonul Royal oferă o experiență grandioasă, cu tavane înalte, draperii de catifea și o terasă privată cu vedere panoramică. Conceput pentru nunți mari și evenimente de excepție.',
    image:      '/images/galerie/salon-royal-masa.webp',
    imageAlt:   'Salon Royal — aranjament masă rotundă cu farfurii aurii și decor verde premium',
    color:      '#D4AF37',
    gradient:   'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(201,168,76,0.05) 100%)',
  },
];

export default function SalonShowcase() {
  return (
    <section className="section-padding bg-noir-900 relative overflow-hidden" id="saloane">
      {/* Background decorative */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 40% at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)
          `,
        }}
      />

      <div className="container-luxury relative">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="label-gold mb-4">✦ Saloanele noastre ✦</p>
          <h2 className="heading-lg text-cream-200 mb-4">
            Două lumi de{' '}
            <span className="text-gold-gradient italic">rafinament</span>
          </h2>
          <span className="gold-line" />
          <p className="font-sans text-cream-500 max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
            Fie că visezi la un salon intim și elegant sau la o sală grandioasă care să-ți uimească invitații, Măgura Events îți oferă spațiul perfect pentru fiecare ocazie.
          </p>
        </AnimatedSection>

        {/* Saloane cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {saloane.map((salon) => (
            <StaggerItem key={salon.id}>
              <Link href={salon.href} className="block group">
                <article
                  className="card-luxury h-full flex flex-col overflow-hidden"
                  style={{ background: salon.gradient, minHeight: '560px' }}
                >
                  {/* Image placeholder */}
                  <div className="relative h-72 overflow-hidden">
                    {/* Real photo */}
                    <Image
                      src={(salon as typeof saloane[0] & { image: string }).image}
                      alt={(salon as typeof saloane[0] & { imageAlt: string }).imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-900/90 via-noir-900/20 to-transparent" />

                    {/* Caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="label-gold text-[0.6rem]">{salon.stil}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-8">
                    <h3 className="heading-sm text-cream-100 mb-1 group-hover:text-gold-500 transition-colors duration-400">
                      {salon.name}
                    </h3>
                    <p className="font-sans text-xs tracking-widest uppercase mb-5" style={{ color: salon.color }}>
                      {salon.subtitle}
                    </p>

                    <p className="font-sans text-cream-500 text-sm mb-6" style={{ lineHeight: 1.8 }}>
                      {salon.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gold-600/10">
                      <div className="text-center">
                        <Users size={14} className="mx-auto mb-1" style={{ color: salon.color }} />
                        <p className="font-sans text-[0.7rem] tracking-wider text-cream-500">{salon.capacitate}</p>
                      </div>
                      <div className="text-center border-x border-gold-600/10">
                        <Maximize2 size={14} className="mx-auto mb-1" style={{ color: salon.color }} />
                        <p className="font-sans text-[0.7rem] tracking-wider text-cream-500">{salon.suprafata}</p>
                      </div>
                      <div className="text-center">
                        <Sparkles size={14} className="mx-auto mb-1" style={{ color: salon.color }} />
                        <p className="font-sans text-[0.7rem] tracking-wider text-cream-500">{salon.stil}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="grid grid-cols-2 gap-2 mb-8">
                      {salon.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 font-sans text-xs text-cream-500"
                        >
                          <span style={{ color: salon.color, fontSize: '0.5rem' }}>◆</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-auto flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase group-hover:gap-4 transition-all duration-400" style={{ color: salon.color }}>
                      <span>Descoperă salonul</span>
                      <ArrowRight size={14} className="transition-transform duration-400 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-16" delay={0.2}>
          <p className="font-sans text-cream-500 text-sm mb-6">
            Nu știi ce salon se potrivește evenimentului tău?
          </p>
          <Link href="/contact" className="btn-outline-gold">
            <span>Programează o Vizionare</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
