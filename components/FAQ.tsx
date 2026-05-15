'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import JsonLd from './JsonLd';
import { faqSchema } from '@/lib/schemas';

const faqs = [
  {
    question: 'Cum pot rezerva un salon la Măgura Events?',
    answer:   'Rezervarea se face simplu: completați formularul de contact de pe site sau sunați-ne direct. Vă vom contacta în maximum 24 de ore pentru a confirma disponibilitatea și a discuta detaliile evenimentului dumneavoastră.',
  },
  {
    question: 'Care este capacitatea saloanelor Măgura Events?',
    answer:   'Salonul Crystal poate găzdui între 80 și 250 de persoane, iar Salonul Royal între 150 și 450 de persoane. Ambele saloane pot fi configurate în mai multe variante de amenajare în funcție de tipul evenimentului.',
  },
  {
    question: 'Oferiți servicii de catering incluse?',
    answer:   'Da, avem bucătărie proprie și oferim meniuri complete pentru toate tipurile de evenimente — nunți, botezuri, majorate, zile de naștere și corporate. Meniurile sunt personalizabile și pregătite cu ingrediente proaspete.',
  },
  {
    question: 'Pot organiza atât nunți cât și alte tipuri de evenimente?',
    answer:   'Absolut! Specializăm în organizarea de nunți, botezuri, majorate, zile de naștere, evenimente corporate, gale, conferințe și orice alt tip de eveniment privat sau de business.',
  },
  {
    question: 'Există un avans necesar pentru rezervare?',
    answer:   'Da, pentru confirmarea rezervării este necesară achitarea unui avans. Detaliile exacte vă vor fi comunicate în cadrul discuției cu echipa noastră, după stabilirea pachetului de servicii.',
  },
  {
    question: 'Oferiți pachete complete de organizare sau doar închirierea salonului?',
    answer:   'Oferim ambele variante. Puteți închiria doar salonul sau puteți opta pentru pachete complete care includ salon, catering, decor, servicii de sunet și lumini, coordonator de eveniment și alte servicii suplimentare.',
  },
  {
    question: 'Sunt incluse serviciile de decor floral?',
    answer:   'Colaborăm cu floriști parteneri și putem include decoruri florale în pachetul dumneavoastră. Detaliile și prețurile pentru decor se stabilesc în funcție de viziunea și bugetul fiecărui client.',
  },
  {
    question: 'Există parcare disponibilă?',
    answer:   'Da, Măgura Events dispune de parcare proprie cu capacitate adecvată pentru numărul de invitați din fiecare salon. Parcarea este gratuită pentru toți invitații dumneavoastră.',
  },
  {
    question: 'Cum ajung la Măgura Events?',
    answer:   'Suntem situați în sat Măgura, județul Buzău. Accesul este ușor cu mașina, iar coordonatele GPS sunt disponibile în secțiunea Contact de pe site. Puteți vizualiza locația și pe Google Maps.',
  },
  {
    question: 'Pot programa o vizionare a salonului înainte de rezervare?',
    answer:   'Cu mare plăcere! Vă invităm să vizitați saloanele noastre pentru a vedea în detaliu tot ce vă putem oferi. Contactați-ne pentru a stabili o programare la o oră convenabilă pentru dumneavoastră.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding" style={{ background: '#0a0a0a' }}>
      <JsonLd data={faqSchema(faqs)} />

      <div className="container-luxury max-w-4xl">
        <AnimatedSection className="text-center mb-14">
          <p className="label-gold mb-4">✦ Întrebări frecvente ✦</p>
          <h2 className="heading-lg text-cream-200 mb-4">
            Tot ce trebuie să{' '}
            <span className="text-gold-gradient italic">știți</span>
          </h2>
          <span className="gold-line" />
          <p className="font-sans text-cream-500 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
            Găsiți răspunsuri la cele mai frecvente întrebări despre saloanele, serviciile și procesul de rezervare la Măgura Events.
          </p>
        </AnimatedSection>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div
                className={`border transition-all duration-300 ${
                  openIndex === i
                    ? 'border-gold-600/40 bg-gold-600/3'
                    : 'border-gold-600/10 hover:border-gold-600/25'
                }`}
                style={{ background: openIndex === i ? 'rgba(201,168,76,0.025)' : '#141414' }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={`font-serif text-lg font-light transition-colors duration-300 ${
                      openIndex === i ? 'text-gold-500' : 'text-cream-200 group-hover:text-cream-100'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                      openIndex === i ? 'rotate-180 text-gold-600' : 'text-cream-500'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{    height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-6 pb-6 font-sans text-cream-400 text-sm border-t border-gold-600/10 pt-4"
                        style={{ lineHeight: 1.8 }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <p className="font-sans text-cream-500 text-sm mb-5">
            Nu ați găsit răspunsul dorit? Suntem la dispoziția dumneavoastră.
          </p>
          <a
            href="tel:+40XXXXXXXXX"
            className="btn-outline-gold"
          >
            <span>Contactați-ne direct</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
