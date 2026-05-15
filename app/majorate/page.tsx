import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { IconCrown, IconMusic, IconPhotobox, IconCocktail, IconCake, IconCelebration, IconDecor } from '@/components/Icons';
import EventGallery from '@/components/EventGallery';

const majoratPhotos = [
  { src: '/images/locatie/exterior-noapte-copaci-luminati-fairy-lights-gradina-magura-events-giurgiu.webp', alt: 'Exterior Măgura Events noaptea — copaci luminați cu fairy lights, atmosferă de petrecere majorat' },
  { src: '/images/decor/photobooth-carte-povesti.webp',                                                    alt: 'Photobooth tematic pentru majorat — decor "A fost odată ca niciodată" Măgura Events Giurgiu' },
  { src: '/images/saloane/salon-nunta-panoramic-interior-scaune-albe-candelabru-covor.webp',               alt: 'Interior salon panoramic Măgura Events — spațiu ideal pentru petrecere majorat 18 ani Giurgiu' },
  { src: '/images/decor/cristale-exterior.webp',                                                           alt: 'Decor cristale luminoase exterior — instalație premium pentru majorat Măgura Events' },
  { src: '/images/locatie/exterior-salon-events-pergola-copaci-verzi-vara-magura-giurgiu.webp',            alt: 'Exterior salon Măgura Events vara — pergolă și grădină pentru majorat în aer liber Giurgiu' },
  { src: '/images/saloane/salon-crystal-panoramic.webp',                                                   alt: 'Salon Crystal Măgura Events Giurgiu — vedere panoramică interior pentru majorat 18 ani' },
];

export const metadata: Metadata = {
  title: 'Majorate — Petrecere de 18 Ani Spectaculoasă | Măgura Events Giurgiu',
  description:
    'Organizăm petreceri de majorat spectaculoase în saloanele premium din Giurgiu. DJ profesionist, lumini de scenă, pistă de dans, photobox și tot ce ai nevoie pentru cea mai tare petrecere de 18 ani.',
  keywords: ['majorat Giurgiu', 'petrecere majorat', 'salon majorat', 'organizare majorat', 'petrecere 18 ani'],
  alternates: { canonical: 'https://magura-events.ro/majorate' },
};

const features = [
  { Icon: IconMusic,       title: 'DJ Profesionist',    desc: 'Mixuri live, lumini de club și o pistă de dans care nu se mai oprește toată noaptea.' },
  { Icon: IconPhotobox,    title: 'Photobox & Reels',   desc: 'Colțișor foto premium cu accesorii tematice și imprimare instant a pozelor.' },
  { Icon: IconCocktail,    title: 'Bar Open',            desc: 'Bar complet cu băuturi diverse, servit de barmani profesioniști pe toată durata petrecerii.' },
  { Icon: IconCake,        title: 'Tort Spectaculos',    desc: 'Tort de majorat tematic, personalizat în funcție de personalitatea aniversatului.' },
  { Icon: IconCelebration, title: 'Momente Speciale',   desc: 'Confetti, baloane, surprize personalizate și momente de neuitat pentru aniversat.' },
  { Icon: IconDecor,       title: 'Decor Tematic',       desc: 'Decoruri complet personalizate — de la glam și auriu la teme specifice cerute de aniversat.' },
];

export default function MajoratePage() {
  return (
    <>
      <section
        className="pt-40 pb-24 relative"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 50% 0%, rgba(139,105,20,0.12) 0%, transparent 60%), #080808`,
        }}
      >
        <div className="container-luxury text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border border-gold-600/30 flex items-center justify-center">
                <IconCrown size={30} color="#C9A84C" strokeWidth={1.2} />
              </div>
            </div>
            <p className="label-gold mb-4">✦ 18 ani — o seară de neuitat ✦</p>
            <h1 className="heading-xl text-cream-200 mb-6">
              Majorate{' '}
              <span className="text-gold-gradient italic">spectaculoase</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-2xl mx-auto mt-6" style={{ lineHeight: 1.9 }}>
              Petrecerea de majorat trebuie să fie legendară. La Măgura Events creăm experiențe unice pentru tinerii care celebrează 18 ani — cu energie, muzică, lumini și o atmosferă de club premium.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0a0a0a' }}>
        <div className="container-luxury max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map(({ Icon, title, desc }) => (
              <AnimatedSection key={title}>
                <div className="card-luxury p-7 text-center h-full flex flex-col items-center">
                  <div className="w-14 h-14 border border-gold-600/25 flex items-center justify-center mb-5">
                    <Icon size={26} color="#C9A84C" strokeWidth={1.2} />
                  </div>
                  <h3 className="font-serif text-xl text-cream-100 mb-3">{title}</h3>
                  <p className="font-sans text-xs text-cream-500" style={{ lineHeight: 1.75 }}>{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link href="/contact" className="btn-gold"><span>Solicită Ofertă Majorat</span></Link>
          </AnimatedSection>
        </div>
      </section>

      <EventGallery photos={majoratPhotos} />
    </>
  );
}
