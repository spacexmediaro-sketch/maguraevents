import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zile de Naștere — Aniversare Premium | Măgura Events Buzău',
  description:
    'Organizăm aniversări și zile de naștere în saloane premium în Buzău. De la petreceri intime la aniversări grandioase — decoruri tematice, meniuri personalizate și surprize speciale.',
  keywords: ['zi de naștere Buzău', 'aniversare Buzău', 'petrecere zi nastere', 'organizare aniversare'],
  alternates: { canonical: 'https://magura-events.ro/zile-nastere' },
};

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
            <p style={{ fontSize: '2.5rem' }} className="mb-4" role="img" aria-label="Zi de nastere">🎂</p>
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
            {[
              { emoji: '🎨', title: 'Decor tematic personalizat', desc: 'Orice temă îți dorești — de la glam și auriu la rustic, boho sau tematici specifice.' },
              { emoji: '🍰', title: 'Tort de aniversare spectaculos', desc: 'Torturi create de cofetarul nostru, personalizate în funcție de vârsta și preferințele aniversatei/ului.' },
              { emoji: '📷', title: 'Photobox premium', desc: 'Colțișor foto cu props, fundal tematic și imprimare foto instant pentru invitați.' },
              { emoji: '🎁', title: 'Surprize și momente speciale', desc: 'Intrări surprise, confetti cannons, baloane LED și momente orchestrate perfect.' },
              { emoji: '🍽️', title: 'Meniu personalizat', desc: 'Meniu adaptat preferințelor gastronomice și numărului de invitați.' },
              { emoji: '🎤', title: 'DJ sau Muzică live', desc: 'Muzica perfectă pentru fiecare moment al petrecerii, de la cocktail la finala nopții.' },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="card-luxury p-6 flex gap-4">
                  <span style={{ fontSize: '1.8rem' }} className="flex-shrink-0" role="img" aria-label={item.title}>{item.emoji}</span>
                  <div>
                    <h3 className="font-serif text-lg text-cream-100 mb-2">{item.title}</h3>
                    <p className="font-sans text-xs text-cream-500" style={{ lineHeight: 1.75 }}>{item.desc}</p>
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
