import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { Users, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Salon Royal — Grandoare pentru Evenimente de Excepție',
  description:
    'Salon Royal — 850 m² pentru 150–450 persoane. Terasă privată, foyer separat, proiector HD și bar dedicat. Cel mai mare salon premium din zona Buzău pentru nunți grandioase.',
  alternates: { canonical: 'https://magura-events.ro/saloane/salon-2' },
};

export default function SalonRoyalPage() {
  return (
    <>
      <section className="pt-40 pb-0 relative" style={{ background: '#080808' }}>
        <div className="container-luxury">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-sans text-xs text-cream-600">
                <li><Link href="/" className="hover:text-gold-600 transition-colors">Acasă</Link></li>
                <li className="text-gold-600/40">/</li>
                <li><Link href="/saloane" className="hover:text-gold-600 transition-colors">Saloane</Link></li>
                <li className="text-gold-600/40">/</li>
                <li className="text-cream-400">Salon Royal</li>
              </ol>
            </nav>
          </AnimatedSection>
        </div>

        <div className="relative h-[60vh] min-h-96 overflow-hidden border-t border-gold-600/10">
          <Image
            src="/images/galerie/salon-royal-masa.webp"
            alt="Salon Royal Măgura Events — aranjament masă cu farfurii aurii și decor verde premium"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-noir-900 via-noir-900/60 to-transparent">
            <div className="container-luxury">
              <p className="label-gold mb-2">✦ Salon 2 ✦</p>
              <h1 className="font-serif text-5xl md:text-7xl font-light text-cream-100" style={{ letterSpacing: '0.05em' }}>
                Salon Royal
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#080808' }}>
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <p className="label-gold mb-4">✦ Grandoare pentru momente unice ✦</p>
                <h2 className="heading-md text-cream-200 mb-6">
                  Cel mai amplu spațiu de{' '}
                  <span className="text-gold-gradient italic">lux din zonă</span>
                </h2>
                <div className="space-y-4 font-sans text-cream-500 text-sm mb-8" style={{ lineHeight: 1.9 }}>
                  <p>
                    Salonul Royal este destinat evenimentelor grandioase — nunți cu sute de invitați, gale corporative, conferințe de impact sau orice eveniment care necesită un spațiu imens și echipat complet.
                  </p>
                  <p>
                    Cu tavane înalte, draperii de catifea, o terasă privată cu vedere panoramică și un foyer de primire separat pentru cocktail, Salonul Royal oferă o experiență completă și de neegalat.
                  </p>
                  <p>
                    Sistemul de proiectare Full HD, scena integrată și ecranul cinema asigură spectacole vizuale impresionante, fie că este vorba despre prezentări corporate sau momentele video de la nuntă.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Tavane înalte — arhitectură grandioasă',
                    'Terasă privată cu vedere panoramică',
                    'Foyer de primire separat',
                    'Proiector Full HD + ecran cinema',
                    'Sistem audio surround',
                    'Scenă integrată iluminată',
                    'Bar dedicat cu selfservice',
                    'Pistă de dans extinsă',
                    'Climatizare independentă pe zone',
                    'Parcare extinsă — 200+ locuri',
                    'Acces VIP separat',
                    'Generator propriu',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-gold-600 flex-shrink-0" />
                      <span className="font-sans text-xs text-cream-400">{feat}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection direction="right" delay={0.2}>
                <div className="card-luxury p-7 mb-6">
                  <h3 className="font-serif text-xl text-cream-100 mb-5">Specificații tehnice</h3>
                  <dl className="space-y-4">
                    {[
                      { icon: Maximize2, label: 'Suprafață', val: '850 m²' },
                      { icon: Users,     label: 'Capacitate', val: '150 – 450 pers.' },
                      { icon: Sparkles,  label: 'Stil',       val: 'Grand Luxe' },
                    ].map(({ icon: Icon, label, val }) => (
                      <div key={label} className="flex items-center gap-4 border-b border-gold-600/10 pb-4 last:border-b-0 last:pb-0">
                        <div className="w-9 h-9 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-gold-600" />
                        </div>
                        <div>
                          <p className="font-sans text-[0.6rem] tracking-widest uppercase text-gold-600/60">{label}</p>
                          <p className="font-serif text-cream-200">{val}</p>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="card-luxury p-7 mb-6">
                  <p className="label-gold text-[0.6rem] mb-3">Ideal pentru</p>
                  <div className="flex flex-wrap gap-2">
                    {['Nunți mari', 'Gale', 'Conferințe', 'Team-building', 'Corporate', 'Aniversări mari'].map((tag) => (
                      <span key={tag} className="text-[0.6rem] font-sans px-3 py-1.5 border border-gold-600/20 text-cream-500 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-gold w-full justify-center text-xs">
                  <span>Verifică Disponibilitatea</span>
                </Link>
                <Link href="/contact" className="btn-outline-gold w-full justify-center text-xs mt-3">
                  <span>Programează Vizionare</span>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-gold-600/10" style={{ background: '#0a0a0a' }}>
        <div className="container-luxury text-center">
          <AnimatedSection>
            <p className="font-sans text-cream-500 text-sm mb-6">
              Preferiți un cadru mai intim? Descoperiți Salonul Crystal.
            </p>
            <Link href="/saloane/salon-1" className="btn-outline-gold">
              <span>Salon Crystal — 80–250 persoane</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
