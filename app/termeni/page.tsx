import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Termeni și Condiții | Măgura Events',
  description: 'Termeni și condiții de utilizare a site-ului Măgura Events și de contractare a serviciilor de organizare evenimente AGRO & FISHING MAGURA SRL.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://magura-events.ro/termeni' },
};

export default function TermeniPage() {
  const date = '15 Ianuarie 2025';
  return (
    <section className="pt-40 pb-24" style={{ background: '#FAFAF7' }}>
      <div className="container-luxury max-w-3xl">
        <AnimatedSection>
          <p className="label-gold mb-4">✦ Legal ✦</p>
          <h1 className="heading-md text-cream-200 mb-4">Termeni și Condiții</h1>
          <span className="gold-line-left" />
          <p className="font-sans text-xs text-cream-600 mb-10">Ultima actualizare: {date}</p>

          <div className="prose prose-invert max-w-none space-y-8 font-sans text-sm text-cream-500" style={{ lineHeight: 1.9 }}>
            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">1. Părțile contractante</h2>
              <p>Prezentele Termeni și Condiții reglementează relația dintre <strong className="text-cream-300">AGRO & FISHING MAGURA SRL</strong>, cu sediul în Sat Măgura, Comuna Buturugeni, Județul Giurgiu, CUI 29032418, Nr. Reg. Com. J2011000564520 (denumit în continuare „Prestator"), și orice persoană fizică sau juridică care accesează site-ul magura-events.ro sau solicită servicii de organizare evenimente (denumit în continuare „Client").</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">2. Obiectul serviciilor</h2>
              <p>Prestatorul oferă servicii de:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Închiriere saloane pentru evenimente (nunți, botezuri, majorate, zile de naștere, corporate)</li>
                <li>Catering și preparare meniuri pentru evenimente</li>
                <li>Organizare și coordonare evenimente</li>
                <li>Servicii complementare: decor, sunet, lumini, coordonator dedicat</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">3. Rezervare și confirmare</h2>
              <p>Rezervarea unui salon se consideră confirmată numai după:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Semnarea unui contract de prestări servicii</li>
                <li>Achitarea avansului stabilit în contract</li>
                <li>Confirmarea scrisă din partea Prestatorului</li>
              </ul>
              <p className="mt-3">Completarea formularului de pe site sau contactul telefonic nu constituie o rezervare confirmată.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">4. Plăți și avans</h2>
              <p>Avansul de rezervare este nerambursabil în caz de anulare din inițiativa Clientului, în condițiile prevăzute în contractul individual. Modalitățile de plată acceptate sunt: numerar (la sediu) și transfer bancar.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">5. Anulări și modificări</h2>
              <p>Clientul poate solicita modificarea datei evenimentului cu minim 60 de zile înainte, sub rezerva disponibilității. Anularea cu mai puțin de 30 de zile înainte de eveniment atrage pierderea avansului achitat, conform contractului.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">6. Responsabilități</h2>
              <p>Prestatorul nu este responsabil pentru:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Daunele cauzate de terți (invitați, furnizori externi) pe durata evenimentului</li>
                <li>Forța majoră (calamități naturale, pandemii, interdicții legale)</li>
                <li>Bunurile personale ale invitaților lăsate nesupravegheate</li>
              </ul>
              <p className="mt-3">Clientul răspunde pentru daunele aduse salonului de el însuși sau de invitații săi.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">7. Proprietate intelectuală</h2>
              <p>Toate elementele site-ului magura-events.ro (texte, imagini, design, cod) sunt proprietatea AGRO & FISHING MAGURA SRL și sunt protejate de legile privind dreptul de autor. Este interzisă reproducerea fără acordul scris al Prestatorului.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">8. Legea aplicabilă și soluționarea litigiilor</h2>
              <p>Prezentul contract este guvernat de legislația română. Litigiile vor fi soluționate pe cale amiabilă sau, în caz de eșec, de instanțele judecătorești competente din România. Clientul poate apela la ANPC (<a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">anpc.ro</a>) sau la platforma europeană SOL (<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">ec.europa.eu/consumers/odr</a>).</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">9. Modificarea termenilor</h2>
              <p>AGRO & FISHING MAGURA SRL își rezervă dreptul de a modifica prezentele Termeni și Condiții oricând, cu publicarea versiunii actualizate pe site. Continuarea utilizării site-ului după publicarea modificărilor constituie acceptul acestora.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">10. Contact</h2>
              <p>Pentru orice întrebări legate de acești Termeni și Condiții, ne puteți contacta la: <a href="mailto:contact@magura-events.ro" className="text-gold-600 underline">contact@magura-events.ro</a> sau la adresa societății din Sat Măgura, Comuna Buturugeni, Județul Giurgiu.</p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
