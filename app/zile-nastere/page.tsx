import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { IconCake, IconDecor, IconCamera, IconStar, IconMic, IconPhotobox } from '@/components/Icons';
import type { ComponentType } from 'react';
import type { IconProps } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Zile de Naștere — Aniversare Premium | Măgura Events Giurgiu',
  description:
    'Organizăm aniversări și zile de naștere în saloane premium în Giurgiu. De la petreceri intime la aniversări grandioase — decoruri tematice, meniuri personalizate și surprize speciale.',
  keywords: ['zi de naștere Giurgiu', 'aniversare Giurgiu', 'petrecere zi nastere', 'organizare aniversare'],
  alternates: { canonical: 'https://magura-events.ro/zile-nastere' },
};

const features: { Icon: ComponentType<IconProps>; title: string; desc: string }[] = [
  { Icon: IconDecor,    title: 'Decor tematic personalizat', desc: 'Orice temă îți dorești — de la glam și auriu la rustic, boho sau tematici specifice.' },
  { Icon: IconCake,     title: 'Tort de aniversare spectaculos', desc: 'Torturi create de cofetarul nostru, personalizate în funcție de vârstă și preferințe.' },
  { Icon: IconPhotobox, title: 'Photobox premium', desc: 'Colțișor foto cu props, fundal tematic și imprimare foto instant pentru invitați.' },
  { Icon: IconStar,     title: 'Surprize și momente speciale', desc: 'Intrări surprise, confetti cannons, baloane LED și momente orchestrate perfect.' },
  { Icon: IconCamera,   title: 'Meniu personalizat', desc: 'Meniu adaptat preferințelor gastronomice și numărului de invitați.' },
  { Icon: IconMic,      title: 'DJ sau Muzică live', desc: 'Muzica perfectă pentru fiecare moment al petrecerii, de la cocktail la finala nopții.' },
];

export default function ZileNasterePage() {
  return (
    <>
      <section
        className="pt-40 pb-24 relative"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%), #080808`,
        }}
      >
        <div className="container-luxury text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border border-gold-600/30 flex items-center justify-center">
                <IconCake size={30} color="#C9A84C" strokeWidth={1.2} />
              </div>
            </div>
            <p className="label-gold mb-4">✦ Sărbătorire premium ✦</p>
            <h1 className="heading-xl text-cream-200 mb-6">
              Zile de naștere{' '}
              <span className="text-gold-gradient italic">memorabile</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-2xl mx-auto mt-6" style={{ lineHeight: 1.9 }}>
              Fiecare an merită celebrat cu stil. De la petreceri intime și elegante la aniversări grandioase cu sute de invitați — organizăm exact ziua de naștere pe care ți-ai dorit-o.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0a0a0a' }}>
        <div className="container-luxury max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {features.map(({ Icon, title, desc }) => (
              <AnimatedSection key={title}>
                <div className="card-luxury p-6 flex gap-5 h-full">
                  <div className="w-12 h-12 border border-gold-600/25 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} color="#C9A84C" strokeWidth={1.3} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-cream-100 mb-2">{title}</h3>
                    <p className="font-sans text-xs text-cream-500" style={{ lineHeight: 1.75 }}>{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center">
            <Link href="/contact" className="btn-gold"><span>Planifică Aniversarea</span></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
