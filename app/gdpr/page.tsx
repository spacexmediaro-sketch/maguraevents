import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Politică GDPR — Prelucrarea Datelor Personale | Măgura Events',
  description: 'Informare privind prelucrarea datelor cu caracter personal conform Regulamentului GDPR (UE) 2016/679 de către AGRO & FISHING MAGURA SRL — Măgura Events.',
  alternates: { canonical: 'https://magura-events.ro/gdpr' },
};

export default function GdprPage() {
  return (
    <section className="pt-40 pb-24" style={{ background: '#080808' }}>
      <div className="container-luxury max-w-3xl">
        <AnimatedSection>
          <p className="label-gold mb-4">✦ Legal ✦</p>
          <h1 className="heading-md text-cream-200 mb-4">Politică GDPR</h1>
          <span className="gold-line-left" />
          <p className="font-sans text-xs text-cream-600 mb-3">Ultima actualizare: 15 Ianuarie 2025</p>
          <p className="font-sans text-xs text-cream-600 mb-10">Conform Regulamentului (UE) 2016/679 (GDPR)</p>

          <div className="space-y-8 font-sans text-sm text-cream-500" style={{ lineHeight: 1.9 }}>
            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Informare privind prelucrarea datelor cu caracter personal</h2>
              <p>Conform obligațiilor prevăzute de Regulamentul (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal, vă aducem la cunoștință:</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Operatorul</h2>
              <div className="card-luxury p-5">
                <dl className="space-y-2">
                  {[
                    ['Denumire',    'AGRO & FISHING MAGURA SRL'],
                    ['CUI',         '29032418'],
                    ['Adresă',      'Sat Măgura, Comuna Buturugeni, Județul Giurgiu, România'],
                    ['Email',       'contact@magura-events.ro'],
                    ['Responsabil GDPR', 'AGRO & FISHING MAGURA SRL (intern)'],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-2 gap-4 text-xs border-b border-gold-600/10 pb-2 last:border-0 last:pb-0">
                      <dt className="text-cream-600">{k}</dt>
                      <dd className="text-cream-300">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Datele prelucrate</h2>
              <p>Prelucrăm date cu caracter personal colectate prin:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Formularul de contact și cerere de ofertă de pe site</li>
                <li>Comunicări prin telefon, email sau mesagerie</li>
                <li>Contracte și documente comerciale</li>
              </ul>
              <p className="mt-3">Categorii de date: identitate (nume, prenume), contact (telefon, email), date despre eveniment, date financiare (pentru contractare).</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Drepturile dumneavoastră conform GDPR</h2>
              <div className="space-y-3">
                {[
                  { right: 'Dreptul de acces (Art. 15)',       desc: 'Puteți solicita o copie a datelor personale pe care le deținem despre dumneavoastră.' },
                  { right: 'Dreptul la rectificare (Art. 16)', desc: 'Puteți solicita corectarea datelor inexacte sau incomplete.' },
                  { right: 'Dreptul la ștergere (Art. 17)',    desc: 'Puteți solicita ștergerea datelor în condițiile prevăzute de GDPR.' },
                  { right: 'Dreptul la restricție (Art. 18)',  desc: 'Puteți solicita limitarea prelucrării în anumite circumstanțe.' },
                  { right: 'Dreptul la portabilitate (Art. 20)', desc: 'Puteți primi datele într-un format structurat, lizibil automat.' },
                  { right: 'Dreptul la opoziție (Art. 21)',    desc: 'Puteți obiecta față de prelucrarea datelor în scopuri de marketing.' },
                  { right: 'Retragerea consimțământului',      desc: 'Puteți retrage oricând consimțământul dat, fără a afecta legalitatea prelucrărilor anterioare.' },
                ].map(({ right, desc }) => (
                  <div key={right} className="flex items-start gap-3">
                    <span className="text-gold-600 text-xs mt-1 flex-shrink-0">◆</span>
                    <div>
                      <strong className="text-cream-300 text-xs">{right}</strong>
                      <p className="text-xs text-cream-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Exercitarea drepturilor</h2>
              <p>Pentru a vă exercita drepturile GDPR, transmiteți o solicitare la: <a href="mailto:contact@magura-events.ro" className="text-gold-600 underline">contact@magura-events.ro</a>.</p>
              <p className="mt-3">Vom răspunde solicitărilor în termen de <strong className="text-cream-300">30 de zile</strong> de la primirea cererii.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">Depunerea plângerilor</h2>
              <p>Dacă considerați că drepturile dumneavoastră au fost încălcate, puteți depune o plângere la:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong className="text-cream-300">ANSPDCP</strong> — Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal:{' '}
                  <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">dataprotection.ro</a>
                </li>
              </ul>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
