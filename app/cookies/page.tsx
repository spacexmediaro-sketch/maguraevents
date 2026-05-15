import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Politică Cookies | Măgura Events',
  description: 'Politica de utilizare a cookie-urilor pe site-ul Măgura Events — magura-events.ro. Tipuri de cookies, gestionare și retragerea consimțământului.',
  alternates: { canonical: 'https://magura-events.ro/cookies' },
};

export default function CookiesPage() {
  return (
    <section className="pt-40 pb-24" style={{ background: '#FAFAF7' }}>
      <div className="container-luxury max-w-3xl">
        <AnimatedSection>
          <p className="label-gold mb-4">✦ Legal ✦</p>
          <h1 className="heading-md text-cream-200 mb-4">Politică Cookies</h1>
          <span className="gold-line-left" />
          <p className="font-sans text-xs text-cream-600 mb-10">Ultima actualizare: 15 Ianuarie 2025</p>

          <div className="space-y-8 font-sans text-sm text-cream-500" style={{ lineHeight: 1.9 }}>
            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Ce sunt cookie-urile?</h2>
              <p>Cookie-urile sunt fișiere text mici stocate pe dispozitivul dumneavoastră atunci când accesați un site web. Ele permit site-ului să vă recunoască la vizite ulterioare și să salveze preferințele dumneavoastră.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Tipuri de cookie-uri utilizate</h2>
              <div className="space-y-4">
                {[
                  {
                    name: 'Cookie-uri strict necesare',
                    desc: 'Esențiale pentru funcționarea site-ului. Nu pot fi dezactivate. Stochează preferința de consimțământ cookies (cheie: magura_events_cookie_consent). Nu colectează date personale.',
                    required: true,
                  },
                  {
                    name: 'Cookie-uri de performanță / analiză',
                    desc: 'Opționale. Utilizate prin Google Analytics pentru a înțelege cum interacționați cu site-ul (pagini vizitate, durată sesiune). Datele sunt anonimizate. Se activează doar cu consimțământul dumneavoastră.',
                    required: false,
                  },
                  {
                    name: 'Cookie-uri de funcționalitate',
                    desc: 'Opționale. Salvează preferințele dumneavoastră (ex: limba preferată). Nu sunt utilizate în prezent pe site.',
                    required: false,
                  },
                ].map((cookie) => (
                  <div key={cookie.name} className="card-luxury p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-base text-cream-200">{cookie.name}</h3>
                      <span className={`text-[0.6rem] font-sans px-2 py-1 ${cookie.required ? 'bg-gold-600/20 text-gold-600' : 'border border-cream-700/30 text-cream-600'}`}>
                        {cookie.required ? 'Necesare' : 'Opționale'}
                      </span>
                    </div>
                    <p className="text-xs text-cream-500">{cookie.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Durata de stocare</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cookie-uri de sesiune: se șterg la închiderea browserului</li>
                <li>Cookie-uri persistente: maxim 12 luni (preferința de consimțământ)</li>
                <li>Google Analytics: conform politicii Google (maxim 26 luni)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Gestionarea cookie-urilor</h2>
              <p>Puteți gestiona sau șterge cookie-urile din setările browserului dumneavoastră. Dezactivarea cookie-urilor strict necesare poate afecta funcționalitatea site-ului.</p>
              <p className="mt-3">Puteți de asemenea să vă retrageți consimțământul oricând ștergând datele locale ale site-ului din browser (Storage → Local Storage → cheile magura_events_*).</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Contact</h2>
              <p>Pentru întrebări legate de politica noastră de cookies: <a href="mailto:contact@magura-events.ro" className="text-gold-600 underline">contact@magura-events.ro</a></p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
