import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate | Măgura Events',
  description: 'Politica de confidențialitate și prelucrare date personale AGRO & FISHING MAGURA SRL — Măgura Events. Conform GDPR (UE) 2016/679 și legislației române.',
  alternates: { canonical: 'https://magura-events.ro/confidentialitate' },
};

export default function ConfidentialitatePage() {
  return (
    <section className="pt-40 pb-24" style={{ background: '#080808' }}>
      <div className="container-luxury max-w-3xl">
        <AnimatedSection>
          <p className="label-gold mb-4">✦ Legal ✦</p>
          <h1 className="heading-md text-cream-200 mb-4">Politică de Confidențialitate</h1>
          <span className="gold-line-left" />
          <p className="font-sans text-xs text-cream-600 mb-10">Ultima actualizare: 15 Ianuarie 2025</p>

          <div className="space-y-8 font-sans text-sm text-cream-500" style={{ lineHeight: 1.9 }}>
            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">1. Operatorul de date</h2>
              <p>Operatorul de date cu caracter personal este <strong className="text-cream-300">AGRO & FISHING MAGURA SRL</strong>, CUI 29032418, Nr. Reg. Com. J2011000564520, cu sediul în Sat Măgura, Județul Buzău, email: contact@magura-events.ro.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">2. Ce date colectăm</h2>
              <p>Colectăm următoarele categorii de date cu caracter personal:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-cream-300">Date de identificare:</strong> nume, prenume</li>
                <li><strong className="text-cream-300">Date de contact:</strong> număr de telefon, adresă de email</li>
                <li><strong className="text-cream-300">Date despre eveniment:</strong> tipul evenimentului, data, numărul de invitați, preferințele de salon și meniu</li>
                <li><strong className="text-cream-300">Date tehnice:</strong> adresa IP (colectată automat de server, pentru securitate)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">3. Scopul prelucrării</h2>
              <p>Prelucrăm datele dumneavoastră pentru:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Răspunderea la cereri de ofertă și programarea vizionărilor</li>
                <li>Încheierea și executarea contractelor de prestări servicii</li>
                <li>Comunicări legate de evenimentul contractat</li>
                <li>Îndeplinirea obligațiilor legale (facturare, contabilitate)</li>
                <li>Trimiterea de comunicări de marketing (doar cu acordul explicit)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">4. Temeiul legal</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Executarea unui contract sau a unor măsuri precontractuale (Art. 6(1)(b) GDPR)</li>
                <li>Obligații legale (Art. 6(1)(c) GDPR)</li>
                <li>Consimțământul dumneavoastră (Art. 6(1)(a) GDPR) — pentru marketing</li>
                <li>Interesul legitim al operatorului (Art. 6(1)(f) GDPR) — pentru securitate</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">5. Durata păstrării datelor</h2>
              <p>Datele din cererile de ofertă se păstrează maxim <strong className="text-cream-300">3 ani</strong> de la ultima interacțiune. Datele din contractele încheiate se păstrează <strong className="text-cream-300">10 ani</strong> conform obligațiilor contabile și fiscale.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">6. Destinatarii datelor</h2>
              <p>Nu vindem și nu transferăm datele dumneavoastră unor terți, cu excepția:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Furnizorilor de servicii (contabilitate, IT) care prelucrează datele în numele nostru</li>
                <li>Autorităților publice, la cererea legală</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">7. Drepturile dumneavoastră</h2>
              <p>Conform GDPR, aveți dreptul la:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Acces la datele dumneavoastră personale</li>
                <li>Rectificarea datelor inexacte</li>
                <li>Ștergerea datelor („dreptul de a fi uitat")</li>
                <li>Restricționarea prelucrării</li>
                <li>Portabilitatea datelor</li>
                <li>Opoziție față de prelucrare</li>
                <li>Retragerea consimțământului oricând</li>
                <li>Depunerea unei plângeri la ANSPDCP (<a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">dataprotection.ro</a>)</li>
              </ul>
              <p className="mt-3">Pentru exercitarea drepturilor, contactați-ne la <a href="mailto:contact@magura-events.ro" className="text-gold-600 underline">contact@magura-events.ro</a>.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream-200 mb-3">8. Securitatea datelor</h2>
              <p>Implementăm măsuri tehnice și organizatorice adecvate pentru protecția datelor: criptare HTTPS, acces restricționat, backup regulat și politici interne de securitate.</p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
