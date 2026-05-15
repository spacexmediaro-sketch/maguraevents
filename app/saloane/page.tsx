import type { Metadata } from 'next';
import SalonShowcase from '@/components/SalonShowcase';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Saloane Evenimente Premium — Salon Crystal și Salon Royal',
  description:
    'Descoperă cele două saloane Măgura Events: Salon Crystal (80–250 persoane) și Salon Royal (150–450 persoane). Spații elegante pentru nunți, botezuri, majorate și corporate în Giurgiu.',
  alternates: { canonical: 'https://magura-events.ro/saloane' },
};

export default function SaloanePage() {
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
            <p className="label-gold mb-4">✦ Spații de excepție ✦</p>
            <h1 className="heading-xl text-cream-200 mb-4">
              Saloanele{' '}
              <span className="text-gold-gradient italic">noastre</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-2xl mx-auto mt-6" style={{ lineHeight: 1.8 }}>
              Două universuri de eleganță și rafinament — fiecare cu propria personalitate, ambele cu același nivel impecabil de servicii și atenție la detalii.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SalonShowcase />

      {/* Features comparison */}
      <section className="section-padding border-t border-gold-600/10" style={{ background: '#F5F2EB' }}>
        <div className="container-luxury max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-md text-cream-200">
              Ce include{' '}
              <span className="text-gold-gradient italic">fiecare salon</span>
            </h2>
            <span className="gold-line" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="card-luxury overflow-hidden">
              <div className="grid grid-cols-3">
                <div className="p-4 border-b border-gold-600/10" />
                {['Salon Crystal', 'Salon Royal'].map((salon) => (
                  <div key={salon} className="p-4 text-center border-b border-l border-gold-600/10">
                    <p className="font-serif text-sm text-cream-200">{salon}</p>
                  </div>
                ))}
              </div>
              {[
                ['Capacitate',              '80 – 250 pers.',      '150 – 450 pers.'],
                ['Suprafață',               '500 m²',              '850 m²'],
                ['Sistem audio profesional', '✦',                   '✦'],
                ['Lumini ambientale LED',    '✦',                   '✦'],
                ['Pistă de dans',            '✦',                   '✦'],
                ['Proiector / Ecran',        '—',                   '✦'],
                ['Terasă privată',           '—',                   '✦'],
                ['Foyer separat',            '—',                   '✦'],
                ['Bar dedicat',             '✦',                   '✦'],
                ['Parcare gratuită',         '✦',                   '✦'],
                ['Wi-Fi de mare viteză',     '✦',                   '✦'],
                ['Vestiare / Toalete',       '✦',                   '✦'],
              ].map(([feature, crystal, royal]) => (
                <div key={feature} className="grid grid-cols-3 border-b border-gold-600/5 last:border-b-0 hover:bg-gold-600/3 transition-colors">
                  <div className="p-4">
                    <span className="font-sans text-xs text-cream-500">{feature}</span>
                  </div>
                  {[crystal, royal].map((val, i) => (
                    <div key={i} className={`p-4 text-center border-l border-gold-600/10 ${val === '—' ? 'text-cream-700' : 'text-gold-600'}`}>
                      <span className="font-sans text-xs font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-10" delay={0.2}>
            <Link href="/contact" className="btn-gold">
              <span>Verifică Disponibilitatea</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
