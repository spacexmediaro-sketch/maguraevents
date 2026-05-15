'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const events = [
  {
    emoji:    '💍',
    title:    'Nunți',
    subtitle: 'Ziua perfectă',
    href:     '/nunti',
    description: 'Transformăm povestea voastră de iubire în cel mai memorabil eveniment al vieții. De la decoruri impresionante la meniuri rafinate.',
    tags:     ['Florărie inclusă', 'Tort nuptial', 'Muzică live'],
    gradient: 'from-[#C9A84C]/10 via-transparent to-transparent',
  },
  {
    emoji:    '🍼',
    title:    'Botezuri',
    subtitle: 'Primul pas în lume',
    href:     '/botezuri',
    description: 'Celebrăm venirea pe lume a micuțului cu o atmosferă caldă, delicată și organizată perfect pentru micii invitați și părinții lor.',
    tags:     ['Decor tematic', 'Tort personalizat', 'Animator copii'],
    gradient: 'from-[#D4AF37]/10 via-transparent to-transparent',
  },
  {
    emoji:    '🎓',
    title:    'Majorate',
    subtitle: '18 ani — o seară de neuitat',
    href:     '/majorate',
    description: 'O petrecere de majorat trebuie să fie spectaculoasă. Lumini de scenă, pistă de dans, sunet premium și o atmosferă de club de lux.',
    tags:     ['DJ profesionist', 'Photobox', 'Bar open'],
    gradient: 'from-[#B8960C]/10 via-transparent to-transparent',
  },
  {
    emoji:    '🎂',
    title:    'Zile de Naștere',
    subtitle: 'Sărbătorire premium',
    href:     '/zile-nastere',
    description: 'De la petreceri intime la aniversări grandioase — organizăm fiecare detaliu pentru ca ziua ta să fie exact cum ți-ai dorit.',
    tags:     ['Decoruri tematice', 'Meniuri personalizate', 'Surprize speciale'],
    gradient: 'from-[#C9A84C]/10 via-transparent to-transparent',
  },
  {
    emoji:    '🏢',
    title:    'Corporate',
    subtitle: 'Profesionalism de elită',
    href:     '/corporate',
    description: 'Conferințe, team-building-uri, gale de premiere sau cine de afaceri. Spațiu echipat complet pentru orice nevoie corporativă.',
    tags:     ['Proiector HD', 'Catering business', 'WiFi dedicat'],
    gradient: 'from-[#D4AF37]/10 via-transparent to-transparent',
  },
  {
    emoji:    '✨',
    title:    'Evenimente Private',
    subtitle: 'Orice ocazie specială',
    href:     '/contact',
    description: 'Aveți o ocazie unică în minte? Fie că este un logodna, o reunire de familie sau orice altceva, noi organizăm cu același rafinament.',
    tags:     ['Concept personalizat', 'Flexibilitate totală', 'Consultanță inclusă'],
    gradient: 'from-[#B8960C]/10 via-transparent to-transparent',
  },
];

export default function EventTypes() {
  return (
    <section className="section-padding relative" style={{ background: '#0a0a0a' }}>
      <div className="container-luxury">
        <AnimatedSection className="text-center mb-16">
          <p className="label-gold mb-4">✦ Tipuri de evenimente ✦</p>
          <h2 className="heading-lg text-cream-200 mb-4">
            Fiecare eveniment,{' '}
            <span className="text-gold-gradient italic">impecabil organizat</span>
          </h2>
          <span className="gold-line" />
          <p className="font-sans text-cream-500 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
            Experiența noastră de peste un deceniu în organizarea de evenimente ne permite să transformăm orice ocazie într-o amintire de neșters.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <StaggerItem key={event.title}>
              <Link href={event.href} className="block group h-full">
                <article
                  className={`card-luxury h-full flex flex-col p-7 bg-gradient-to-br ${event.gradient}`}
                >
                  <div className="mb-4">
                    <span style={{ fontSize: '2rem' }} role="img" aria-label={event.title}>
                      {event.emoji}
                    </span>
                  </div>

                  <p className="label-gold text-[0.6rem] mb-1">{event.subtitle}</p>
                  <h3 className="font-serif text-2xl font-light text-cream-100 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="font-sans text-cream-500 text-sm flex-1 mb-5" style={{ lineHeight: 1.75 }}>
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.6rem] font-sans tracking-wider uppercase px-2.5 py-1 border border-gold-600/20 text-gold-600/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-gold-600/70 group-hover:text-gold-600 transition-colors duration-300">
                    <span>Află mai mult</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
