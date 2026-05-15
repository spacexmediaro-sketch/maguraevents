import type { Metadata } from 'next';
import Reviews from '@/components/Reviews';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recenzii Clienți — Ce Spun Oamenii despre Măgura Events',
  description:
    'Recenzii reale de la clienții Măgura Events. Descoperă experiențele familiilor care au ales saloanele noastre premium pentru nunți, botezuri și majorate în județul Giurgiu.',
  alternates: { canonical: 'https://magura-events.ro/recenzii' },
};

export default function RecenziiPage() {
  return (
    <>
      <section
        className="pt-40 pb-16 relative"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%), #080808`,
        }}
      >
        <div className="container-luxury text-center">
          <AnimatedSection>
            <p className="label-gold mb-4">✦ Clienții noștri vorbesc ✦</p>
            <h1 className="heading-xl text-cream-200 mb-4">
              Experiențe{' '}
              <span className="text-gold-gradient italic">autentice</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-xl mx-auto mt-6" style={{ lineHeight: 1.8 }}>
              Cea mai bună dovadă a calității noastre sunt familiile fericite care au ales Măgura Events. Citiți poveștile lor și decideți cum ar trebui să arate evenimentul dumneavoastră.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Reviews />

      <section className="py-16 border-t border-gold-600/10 text-center" style={{ background: '#0a0a0a' }}>
        <div className="container-luxury">
          <AnimatedSection>
            <p className="font-sans text-cream-500 text-sm mb-6">
              Doriți să fiți unul dintre clienții fericiți Măgura Events?
            </p>
            <Link href="/contact" className="btn-gold"><span>Solicită Ofertă</span></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
