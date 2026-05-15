import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import Link from 'next/link';
import { Heart, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nunți — Organizare Premium în Salon de Lux | Măgura Events Buzău',
  description:
    'Organizăm nunți de vis în saloanele Crystal și Royal din Buzău. Decor floral, meniu rafinat, sistem audio-video, coordonator eveniment și toate serviciile pentru ziua cea mai importantă din viața ta.',
  keywords: ['nuntă Buzău', 'salon nunți Buzău', 'organizare nuntă', 'restaurant nuntă Buzău', 'nuntă elegantă', 'meniu nuntă'],
  alternates: { canonical: 'https://magura-events.ro/nunti' },
};

const included = [
  'Consultanță gratuită și planificare detaliată',
  'Salon decorat în stilul ales de voi',
  'Aranjamente florale personalizate',
  'Meniu complet de nuntă pregătit în bucătăria proprie',
  'Tort nupțial inclus în pachet',
  'Sistem audio profesional și microfon',
  'Lumini ambientale programabile LED',
  'Pistă de dans acoperită',
  'Coordonator de eveniment dedicat',
  'Garderobă și personal de service',
  'Parcare gratuită pentru toți invitații',
  'Spații separate pentru mireasă și mire',
];

export default function NuntiPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.14) 0%, transparent 60%),
            #080808
          `,
        }}
      >
        <div className="container-luxury text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-6">
              <Heart size={32} className="text-gold-600" fill="rgba(201,168,76,0.2)" />
            </div>
            <p className="label-gold mb-4">✦ Ziua perfectă ✦</p>
            <h1 className="heading-xl text-cream-200 mb-6">
              Nunți de{' '}
              <span className="text-gold-gradient italic">vis</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-2xl mx-auto mt-6" style={{ lineHeight: 1.9 }}>
              Nunta voastră merită cel mai frumos cadru. La Măgura Events, transformăm visul vostru în cea mai memorabilă zi din viața voastră — cu eleganță, rafinament și atenție impecabilă la fiecare detaliu.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ background: '#0a0a0a' }}>
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="label-gold mb-4">✦ De ce Măgura Events? ✦</p>
              <h2 className="heading-md text-cream-200 mb-6">
                Experiența de care aveți nevoie{' '}
                <span className="text-gold-gradient italic">pentru ziua cea mai importantă</span>
              </h2>
              <p className="font-sans text-cream-500 text-sm mb-8" style={{ lineHeight: 1.9 }}>
                Cu peste 10 ani de experiență în organizarea nunților, echipa Măgura Events cunoaște fiecare detaliu care face diferența. De la prima consultanță până la ultimul dans, suntem alături de voi pentru a vă asigura că totul decurge perfect.
              </p>

              <p className="font-sans text-sm text-cream-300 font-medium mb-4">Ce include pachetul de nuntă:</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-cream-500" style={{ lineHeight: 1.7 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              {/* Real wedding images */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="relative h-72 col-span-2 overflow-hidden">
                  <Image
                    src="/images/nunti/cuplu-parc-toamna.webp"
                    alt="Cuplu de miri în parcul Măgura Events — toamna magică"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/nunti/mireasa-salon.webp"
                    alt="Mireasă în rochie albă în Salon Crystal"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/galerie/nunta-cuplu-gradina.webp"
                    alt="Miri sub pergola albă din grădina Măgura Events"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>

              {/* CTA cards */}
              <div className="space-y-4">
                <div className="card-luxury p-6">
                  <p className="font-serif text-xl text-cream-100 mb-2">Salon Crystal</p>
                  <p className="font-sans text-xs text-cream-500 mb-3">80 – 250 invitați · Atmosferă intimă și elegantă</p>
                  <Link href="/saloane/salon-1" className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600 hover:text-gold-500 transition-colors">
                    Descoperă salonul →
                  </Link>
                </div>
                <div className="card-luxury p-6">
                  <p className="font-serif text-xl text-cream-100 mb-2">Salon Royal</p>
                  <p className="font-sans text-xs text-cream-500 mb-3">150 – 450 invitați · Grandoare și spectacol</p>
                  <Link href="/saloane/salon-2" className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600 hover:text-gold-500 transition-colors">
                    Descoperă salonul →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-gold-600/10 text-center" style={{ background: '#080808' }}>
        <div className="container-luxury">
          <AnimatedSection>
            <p className="label-gold mb-4">✦ Rezervați data voastră ✦</p>
            <h2 className="heading-sm text-cream-200 mb-6">
              Începeți planificarea nunții de vis
            </h2>
            <p className="font-sans text-cream-500 max-w-lg mx-auto mb-10" style={{ lineHeight: 1.8 }}>
              Datele populare se rezervă rapid. Contactați-ne acum pentru a verifica disponibilitatea și a primi o ofertă personalizată gratuită.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold"><span>Solicită Ofertă Nuntă</span></Link>
              <Link href="/galerie" className="btn-outline-gold"><span>Vezi Galeria</span></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
