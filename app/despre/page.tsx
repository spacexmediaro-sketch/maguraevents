import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import Link from 'next/link';
import { Heart, Award, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Despre Măgura Events — Povestea noastră',
  description:
    'Descoperă povestea Măgura Events — brand de evenimente premium fondat în 2011 în județul Giurgiu. Peste 10 ani de experiență în organizarea celor mai frumoase nunți, botezuri și majorate.',
  alternates: { canonical: 'https://magura-events.ro/despre' },
};

const valori = [
  {
    icon:  Heart,
    title: 'Pasiune',
    desc:  'Fiecare eveniment este tratat cu aceeași pasiune și dedicare, indiferent de mărime sau buget.',
  },
  {
    icon:  Award,
    title: 'Excelență',
    desc:  'Standardele noastre sunt ridicate și ne propunem să le depășim la fiecare eveniment organizat.',
  },
  {
    icon:  Users,
    title: 'Oameni',
    desc:  'Echipa noastră experimentată este prezentă în fiecare moment pentru a asigura perfecțiunea.',
  },
  {
    icon:  Star,
    title: 'Rafinament',
    desc:  'Atenția la detalii, de la decor la servicii, face diferența dintre un eveniment bun și unul de neuitat.',
  },
];

export default function DesprePage() {
  return (
    <>
      {/* Page header */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%),
            #FAFAF7
          `,
        }}
      >
        <div className="container-luxury text-center">
          <AnimatedSection>
            <p className="label-gold mb-4">✦ Povestea noastră ✦</p>
            <h1 className="heading-xl text-cream-200 mb-6">
              Despre{' '}
              <span className="text-gold-gradient italic">Măgura Events</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-2xl mx-auto mt-6" style={{ lineHeight: 1.9 }}>
              Din 2011, Măgura Events creează momente de neuitat pentru familii din întreaga Românie. Două saloane elegante, o echipă dedicată și o singură misiune: evenimentul tău perfect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding" style={{ background: '#F5F2EB' }}>
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              {/* Real photos */}
              <div className="space-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/locatie/lac-lebede.webp"
                    alt="Lacul Măgura Events cu lebede albe — natură pitorească în grădina locației"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-noir-900 to-transparent">
                    <p className="label-gold text-[0.6rem]">Lacul privat Măgura Events</p>
                  </div>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/locatie/arc-floral-lac.webp"
                    alt="Arc floral cu vedere panoramică la lac — Măgura Events"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-noir-900 to-transparent">
                    <p className="label-gold text-[0.6rem]">Fondat în 2011</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <p className="label-gold mb-4">✦ Istoria noastră ✦</p>
              <h2 className="heading-md text-cream-200 mb-6">
                Peste un deceniu de{' '}
                <span className="text-gold-gradient italic">povești frumoase</span>
              </h2>
              <div className="space-y-4 font-sans text-cream-500 text-sm" style={{ lineHeight: 1.9 }}>
                <p>
                  Măgura Events a luat naștere în 2011 din dorința de a oferi familiilor din județul Giurgiu un spațiu de excepție pentru cele mai importante momente ale vieții lor.
                </p>
                <p>
                  De-a lungul anilor, am transformat zeci de vise în realitate — nunți de basm, botezuri delicate, majorate spectaculoase și evenimente corporate de impact. Fiecare eveniment ne-a îmbogățit experiența și ne-a confirmat că pasiunea pentru organizare este cea mai puternică resursă a noastră.
                </p>
                <p>
                  Astăzi, dispunem de două saloane elegante — <strong className="text-cream-300">Salon Crystal</strong> și <strong className="text-cream-300">Salon Royal</strong> — bucătărie proprie cu meniuri rafinate și o echipă completă de profesioniști gata să transforme orice viziune în realitate.
                </p>
                <p>
                  Misiunea noastră rămâne aceeași: <em className="text-gold-600">fiecare client pleacă cu amintiri de neuitat</em>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="section-padding" style={{ background: '#FAFAF7' }}>
        <div className="container-luxury">
          <AnimatedSection className="text-center mb-14">
            <p className="label-gold mb-4">✦ Valorile noastre ✦</p>
            <h2 className="heading-md text-cream-200">
              Ce ne definește
            </h2>
            <span className="gold-line" />
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valori.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-luxury p-8 text-center">
                  <v.icon size={28} className="mx-auto mb-4 text-gold-600" />
                  <h3 className="font-serif text-xl text-cream-100 mb-3">{v.title}</h3>
                  <p className="font-sans text-cream-500 text-sm" style={{ lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company info */}
      <section className="section-padding-sm border-t border-gold-600/10" style={{ background: '#F5F2EB' }}>
        <div className="container-luxury max-w-3xl text-center">
          <AnimatedSection>
            <p className="label-gold mb-4">✦ Date firmă ✦</p>
            <h2 className="heading-sm text-cream-200 mb-8">Informații juridice</h2>
            <div className="card-luxury p-8 text-left">
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  ['Denumire',        'AGRO & FISHING MAGURA SRL'],
                  ['CUI',             '29032418'],
                  ['Nr. Reg. Com.',   'J2011000564520'],
                  ['EUID',            'ROONRC.J2011000564520'],
                  ['Data înființare', '25 August 2011'],
                  ['Sediu social',    'Sat Măgura, Comuna Buturugeni, Județul Giurgiu'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-sans text-xs tracking-widest uppercase text-gold-600/60 mb-1">{label}</dt>
                    <dd className="font-sans text-sm text-cream-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/saloane" className="btn-gold"><span>Descoperă Saloanele</span></Link>
              <Link href="/contact" className="btn-outline-gold"><span>Contactați-ne</span></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
