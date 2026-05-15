import type { Metadata } from 'next';
import MenuSection from '@/components/MenuSection';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { IconFork, IconChef, IconPlate } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Meniuri Evenimente — Gastronomie de Excepție | Măgura Events',
  description:
    'Descoperă meniurile premium Măgura Events: meniu nuntă, meniu botez, meniu majorat și meniu corporate. Preparate proaspete, gătite în bucătăria proprie de chef-ul nostru.',
  keywords: ['meniu nuntă', 'meniu botez', 'meniu majorat', 'meniu corporate', 'catering evenimente Giurgiu'],
  alternates: { canonical: 'https://magura-events.ro/meniuri' },
};

const avantaje = [
  { Icon: IconFork,  title: 'Ingrediente proaspete', desc: 'Folosim ingrediente proaspete, locale, achiziționate zilnic de la producători verificați.' },
  { Icon: IconChef,  title: 'Chef cu experiență',     desc: 'Chef-ul nostru cu experiență internațională creează preparate de restaurant de lux.' },
  { Icon: IconPlate, title: 'Prezentare premium',     desc: 'Fiecare farfurie este prezentată impecabil, ca într-un restaurant de lux cu stele Michelin.' },
];

export default function MeniuriPage() {
  return (
    <>
      <section
        className="pt-40 pb-16 relative"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%), #FAFAF7`,
        }}
      >
        <div className="container-luxury text-center">
          <AnimatedSection>
            <p className="label-gold mb-4">✦ Gastronomie de excepție ✦</p>
            <h1 className="heading-xl text-cream-200 mb-4">
              Meniuri create{' '}
              <span className="text-gold-gradient italic">cu pasiune</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-2xl mx-auto mt-6" style={{ lineHeight: 1.9 }}>
              Bucătăria noastră proprie pregătește meniuri complete și rafinate pentru fiecare tip de eveniment. Ingrediente proaspete, preparate cu grijă și prezentate impecabil — pentru că mâncarea este parte din experiență.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <MenuSection />

      {/* Why us */}
      <section className="section-padding border-t border-gold-600/10" style={{ background: '#FAFAF7' }}>
        <div className="container-luxury max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="heading-sm text-cream-200 mb-4">
              De ce să alegeți meniurile Măgura Events?
            </h2>
            <span className="gold-line" />
            <div className="grid sm:grid-cols-3 gap-8 mt-10">
              {avantaje.map(({ Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-14 h-14 border border-gold-600/25 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} color="#C9A84C" strokeWidth={1.3} />
                  </div>
                  <h3 className="font-serif text-lg text-cream-200 mb-2">{title}</h3>
                  <p className="font-sans text-xs text-cream-500" style={{ lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <p className="font-sans text-sm text-cream-500 mb-6">
                Toate meniurile sunt personalizabile. Fiecare ofertă este adaptată nevoilor și bugetului dumneavoastră.
              </p>
              <Link href="/contact" className="btn-gold"><span>Solicită Ofertă Meniu</span></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
