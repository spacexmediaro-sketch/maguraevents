import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { IconDove } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Botezuri — Salon Premium pentru Botezul Copilului Tău | Măgura Events',
  description:
    'Organizăm botezuri elegante în saloanele premium Măgura Events din Giurgiu. Decor tematic, meniu botez rafinat, tort personalizat și animator pentru copii.',
  keywords: ['botez Giurgiu', 'salon botez', 'organizare botez', 'meniu botez', 'botez premium'],
  alternates: { canonical: 'https://magura-events.ro/botezuri' },
};

export default function BotezuriPage() {
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
                <IconDove size={30} color="#C9A84C" strokeWidth={1.2} />
              </div>
            </div>
            <p className="label-gold mb-4">✦ Primul pas în lume ✦</p>
            <h1 className="heading-xl text-cream-200 mb-6">
              Botezuri{' '}
              <span className="text-gold-gradient italic">de neuitat</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-2xl mx-auto mt-6" style={{ lineHeight: 1.9 }}>
              Celebrarea botezului este unul dintre cele mai emoționante momente din viața unei familii. Creăm o atmosferă caldă, delicată și elegantă pentru micuțul vostru și pentru toți invitații.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0a0a0a' }}>
        <div className="container-luxury max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'Decor tematic personalizat',     desc: 'Alegem împreună tema, culorile și stilul decorului — de la floral delicat la tematic cu personaje.' },
              { title: 'Meniu botez complet',             desc: 'Preparate rafinate create de chef-ul nostru, inclusiv tort de botez personalizat.' },
              { title: 'Animator pentru copii',           desc: 'Menținăm copiii fericiți cu activități interactive și programe speciale adaptate vârstei.' },
              { title: 'Coordonator dedicat',             desc: 'Un coordonator de eveniment se ocupă de toate detaliile în ziua botezului.' },
              { title: 'Spații pentru părinți și copii', desc: 'Amenajăm spații special pentru schimbarea și odihna micuților.' },
              { title: 'Fotografie și video',             desc: 'Colaborăm cu fotografi și cameramani profesioniști pentru amintiri impecabile.' },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="card-luxury p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle2 size={16} className="text-gold-600 flex-shrink-0 mt-0.5" />
                    <h3 className="font-serif text-lg text-cream-100">{item.title}</h3>
                  </div>
                  <p className="font-sans text-xs text-cream-500 pl-7" style={{ lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold"><span>Solicită Ofertă Botez</span></Link>
              <Link href="/meniuri" className="btn-outline-gold"><span>Vezi Meniu Botez</span></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
