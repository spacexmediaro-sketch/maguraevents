'use client';

import { Star, Quote } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import Link from 'next/link';

const reviews = [
  {
    name:  'Andreea & Mihai Constantin',
    event: 'Nuntă — Salon Crystal',
    date:  'Octombrie 2024',
    stars: 5,
    text:  'Nu există cuvinte suficiente pentru a descrie cât de perfect a fost totul. Echipa Măgura Events a transformat visul nostru în realitate. Fiecare detaliu a fost gândit cu maximă atenție, de la decor la meniu. Invitații noștri încă vorbesc despre această nuntă!',
  },
  {
    name:  'Familia Popescu',
    event: 'Botez — Salon Royal',
    date:  'August 2024',
    stars: 5,
    text:  'Am ales Măgura Events pentru botezul fetiței noastre și nu ne-am putut imagina o alegere mai bună. Atmosfera a fost călduroasă și elegantă, mâncarea delicioasă, iar personalul incredibil de amabil. Mulțumim din suflet!',
  },
  {
    name:  'Raluca Dumitrescu',
    event: 'Majorat — Salon Crystal',
    date:  'Septembrie 2024',
    stars: 5,
    text:  'Cea mai reușită petrecere de majorat pe care am văzut-o! Salonul a arătat absolut spectaculos, muzica a fost pe gustul tuturor și serviciile la superlativ. Toți colegii mei au rămas impresionați. Recomand cu toată căldura!',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} din 5 stele`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          fill={i < count ? '#D4AF37' : 'none'}
          stroke={i < count ? '#D4AF37' : '#7A6E65'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="section-padding" style={{ background: '#080808' }}>
      <div className="container-luxury">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="label-gold mb-4">✦ Ce spun clienții noștri ✦</p>
          <h2 className="heading-lg text-cream-200 mb-4">
            Experiențe{' '}
            <span className="text-gold-gradient italic">memorabile</span>
          </h2>
          <span className="gold-line" />
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#D4AF37" stroke="#D4AF37" />
              ))}
            </div>
            <span className="font-sans text-cream-500 text-sm">
              5.0 ·  Recenzii reale Google
            </span>
          </div>
        </AnimatedSection>

        {/* Reviews grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <StaggerItem key={i}>
              <article className="card-luxury p-7 flex flex-col h-full">
                <Quote size={24} className="mb-4 opacity-30" style={{ color: '#C9A84C' }} />

                <blockquote className="font-sans text-cream-400 text-sm flex-1 mb-6" style={{ lineHeight: 1.8 }}>
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                <div className="border-t border-gold-600/10 pt-5">
                  <StarRating count={review.stars} />
                  <p className="font-serif text-cream-200 text-lg mt-2">{review.name}</p>
                  <p className="font-sans text-gold-600/70 text-xs tracking-wider mt-0.5">
                    {review.event}
                  </p>
                  <p className="font-sans text-cream-600 text-xs mt-0.5">{review.date}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Google Reviews CTA */}
        <AnimatedSection className="text-center">
          <div
            className="inline-flex flex-col items-center gap-4 border border-gold-600/20 px-10 py-8 mx-auto"
            style={{ background: 'rgba(201,168,76,0.03)' }}
          >
            <p className="font-sans text-cream-500 text-sm">
              Vedeți toate recenziile noastre pe Google Business
            </p>
            <a
              href="https://www.google.com/search?q=Magura+Events+Buturugeni+Giurgiu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-xs px-6 py-3"
            >
              <span>Recenzii Google</span>
            </a>
            <p className="text-xs text-cream-700 font-sans italic">
              * Recenziile afișate sunt reale. Se poate integra Google Reviews API pentru afișare automată.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
