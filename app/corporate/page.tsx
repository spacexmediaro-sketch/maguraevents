import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { IconPillar, IconProjector, IconMusic, IconStar } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Evenimente Corporate — Conferințe, Gale și Team-Building | Măgura Events',
  description:
    'Organizăm evenimente corporate în Buzău: conferințe, team-building, gale de premiere și cine de afaceri. Sală echipată complet cu proiector, sistem audio, catering business și WiFi dedicat.',
  keywords: ['eveniment corporate Buzău', 'conferință Buzău', 'team building Buzău', 'gală premiere', 'catering corporate'],
  alternates: { canonical: 'https://magura-events.ro/corporate' },
};

const types = [
  {
    Icon:  IconProjector,
    title: 'Conferințe și Seminarii',
    desc:  'Sală configurabilă în teatru, clasă sau U-shape. Proiector Full HD, ecran cinema, sistem audio multi-canal, Wi-Fi dedicat de mare viteză și flipchart.',
    tags:  ['Proiector Full HD', 'Sistem audio', 'Wi-Fi dedicat'],
  },
  {
    Icon:  IconPillar,
    title: 'Gale și Cine de Afaceri',
    desc:  'Atmosferă elegantă și servicii premium pentru cine de afaceri și gale corporative. Decor rafinat, meniu select și personal profesionist.',
    tags:  ['Decor elegant', 'Meniu select', 'Personal dedicat'],
  },
  {
    Icon:  IconMusic,
    title: 'Team-Building-uri',
    desc:  'Spații versatile, interior și exterior, pentru activități de echipă. Catering personalizat, bar și organizare completă a activităților.',
    tags:  ['Spațiu exterior', 'Catering', 'Organizare completă'],
  },
  {
    Icon:  IconStar,
    title: 'Lansări de Produse',
    desc:  'Scenă echipată, sistem de iluminat profesional și proiecție pentru lansări de produse sau prezentări de brand de impact.',
    tags:  ['Scenă iluminată', 'Proiecție', 'Branding space'],
  },
];

export default function CorporatePage() {
  return (
    <>
      <section
        className="pt-40 pb-24 relative"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%), #080808`,
        }}
      >
        <div className="container-luxury text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border border-gold-600/30 flex items-center justify-center">
                <IconPillar size={30} color="#C9A84C" strokeWidth={1.2} />
              </div>
            </div>
            <p className="label-gold mb-4">✦ Profesionalism de elită ✦</p>
            <h1 className="heading-xl text-cream-200 mb-6">
              Evenimente{' '}
              <span className="text-gold-gradient italic">corporate</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-2xl mx-auto mt-6" style={{ lineHeight: 1.9 }}>
              Conferințe de impact, gale de premiere elegante, team-building-uri memorabile sau cine de afaceri — Măgura Events oferă spațiul și serviciile perfecte pentru orice eveniment de business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0a0a0a' }}>
        <div className="container-luxury max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {types.map(({ Icon, title, desc, tags }) => (
              <AnimatedSection key={title}>
                <div className="card-luxury p-7 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 border border-gold-600/25 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} color="#C9A84C" strokeWidth={1.3} />
                    </div>
                    <h3 className="font-serif text-xl text-cream-100">{title}</h3>
                  </div>
                  <p className="font-sans text-sm text-cream-500 mb-4" style={{ lineHeight: 1.75 }}>{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[0.6rem] font-sans px-2.5 py-1 border border-gold-600/20 text-gold-600/70 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link href="/contact" className="btn-gold"><span>Solicită Ofertă Corporate</span></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
