import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Soluționare Litigii — ANPC | Măgura Events',
  description: 'Informații privind soluționarea alternativă a litigiilor, plângeri ANPC și platforma SOL pentru Măgura Events — AGRO & FISHING MAGURA SRL.',
  alternates: { canonical: 'https://magura-events.ro/litigii' },
};

export default function LitigiiPage() {
  return (
    <section className="pt-40 pb-24" style={{ background: '#080808' }}>
      <div className="container-luxury max-w-3xl">
        <AnimatedSection>
          <p className="label-gold mb-4">✦ Legal ✦</p>
          <h1 className="heading-md text-cream-200 mb-4">Soluționare Litigii</h1>
          <span className="gold-line-left" />
          <p className="font-sans text-xs text-cream-600 mb-10">Ultima actualizare: 15 Ianuarie 2025</p>

          <div className="space-y-8 font-sans text-sm text-cream-500" style={{ lineHeight: 1.9 }}>
            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Angajamentul nostru</h2>
              <p>AGRO & FISHING MAGURA SRL se angajează să rezolve orice reclamație sau nemulțumire a clienților în mod amiabil, rapid și corect. Satisfacția clienților noștri este prioritatea noastră.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Procedura de soluționare a reclamațiilor</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Contact direct', desc: 'Transmiteți reclamația la contact@magura-events.ro sau telefonic. Vom răspunde în maximum 5 zile lucrătoare.' },
                  { step: '2', title: 'Escaladare', desc: 'Dacă nu sunteți mulțumit de răspuns, puteți contacta conducerea societății pentru o analiză suplimentară.' },
                  { step: '3', title: 'Soluționare alternativă', desc: 'În cazul în care nu ajungem la un acord amiabil, puteți apela la ANPC sau la platforma SOL.' },
                ].map((item) => (
                  <div key={item.step} className="card-luxury p-5 flex items-start gap-4">
                    <div className="w-8 h-8 border border-gold-600/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-gold-600">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-cream-200 mb-1">{item.title}</h3>
                      <p className="text-xs text-cream-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Autorități competente</h2>
              <div className="space-y-4">
                <div className="card-luxury p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <ExternalLink size={14} className="text-gold-600" />
                    <h3 className="font-serif text-base text-cream-200">ANPC — Autoritatea Națională pentru Protecția Consumatorilor</h3>
                  </div>
                  <p className="text-xs text-cream-500 mb-2">Puteți depune o plângere la ANPC dacă considerați că drepturile dumneavoastră de consumator au fost încălcate.</p>
                  <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className="text-gold-600 text-xs underline hover:text-gold-500 transition-colors">
                    anpc.ro →
                  </a>
                </div>

                <div className="card-luxury p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <ExternalLink size={14} className="text-gold-600" />
                    <h3 className="font-serif text-base text-cream-200">SOL — Soluționare Online a Litigiilor (UE)</h3>
                  </div>
                  <p className="text-xs text-cream-500 mb-2">Platforma europeană de soluționare online a litigiilor, disponibilă pentru contractele încheiate online.</p>
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold-600 text-xs underline hover:text-gold-500 transition-colors">
                    ec.europa.eu/consumers/odr →
                  </a>
                </div>

                <div className="card-luxury p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <ExternalLink size={14} className="text-gold-600" />
                    <h3 className="font-serif text-base text-cream-200">Instanțele judecătorești competente</h3>
                  </div>
                  <p className="text-xs text-cream-500">Litigiile care nu pot fi soluționate pe cale amiabilă sau prin SAL vor fi transmise instanțelor judecătorești competente din România, conform legislației în vigoare.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Contact pentru reclamații</h2>
              <div className="card-luxury p-5">
                <p className="text-sm text-cream-300 mb-1 font-medium">AGRO & FISHING MAGURA SRL</p>
                <p className="text-xs text-cream-500">Sat Măgura, Comuna Buturugeni, Județul Giurgiu, România</p>
                <p className="text-xs text-cream-500 mt-1">
                  Email:{' '}
                  <a href="mailto:contact@magura-events.ro" className="text-gold-600 underline">
                    contact@magura-events.ro
                  </a>
                </p>
                <p className="text-xs text-cream-500">Telefon: +40 XXX XXX XXX</p>
              </div>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
