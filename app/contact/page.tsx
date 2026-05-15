import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import { IconTikTok } from '@/components/Icons';
import { siteConfig } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Contact — Solicită Ofertă Personalizată',
  description:
    'Contactează Măgura Events pentru a solicita o ofertă personalizată pentru nunta, botezul sau evenimentul tău. Formular de contact, telefon, adresă și programare vizionare salon.',
  alternates: { canonical: 'https://magura-events.ro/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-40 pb-16 relative"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%), #FAFAF7`,
        }}
      >
        <div className="container-luxury text-center">
          <AnimatedSection>
            <p className="label-gold mb-4">✦ Hai să vorbim ✦</p>
            <h1 className="heading-xl text-cream-200 mb-4">
              Solicită{' '}
              <span className="text-gold-gradient italic">ofertă</span>
            </h1>
            <span className="gold-line" />
            <p className="font-sans text-cream-500 max-w-xl mx-auto mt-6" style={{ lineHeight: 1.8 }}>
              Completați formularul de mai jos și vă vom contacta în maximum 24 de ore cu o ofertă personalizată pentru evenimentul dumneavoastră.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding" style={{ background: '#FAFAF7' }}>
        <div className="container-luxury">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Contact info */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <p className="label-gold mb-6">✦ Informații contact ✦</p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 border border-gold-600/25 flex items-center justify-center flex-shrink-0">
                        <Phone size={16} className="text-gold-600" />
                      </div>
                      <div>
                        <p className="font-sans text-xs tracking-widest uppercase text-gold-600/60 mb-1">Telefon</p>
                        <a
                          href="tel:+40765736177"
                          className="font-serif text-xl text-cream-200 hover:text-gold-600 transition-colors"
                        >
                          +40 765 736 177
                        </a>
                        <p className="font-sans text-xs text-cream-600 mt-1">Disponibil L-D 09:00 – 20:00</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 border border-gold-600/25 flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-gold-600" />
                      </div>
                      <div>
                        <p className="font-sans text-xs tracking-widest uppercase text-gold-600/60 mb-1">Email</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="font-serif text-xl text-cream-200 hover:text-gold-600 transition-colors break-all"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 border border-gold-600/25 flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-gold-600" />
                      </div>
                      <div>
                        <p className="font-sans text-xs tracking-widest uppercase text-gold-600/60 mb-1">Adresă</p>
                        <address className="font-serif text-xl text-cream-200 not-italic" style={{ lineHeight: 1.4 }}>
                          Sat Măgura<br />
                          județul Giurgiu
                        </address>
                        <a
                          href="https://share.google/cdgA7UY1kWbB499qv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block font-sans text-xs text-gold-600 hover:text-gold-500 transition-colors mt-2 underline"
                        >
                          Deschide în Google Maps →
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 border border-gold-600/25 flex items-center justify-center flex-shrink-0">
                        <Clock size={16} className="text-gold-600" />
                      </div>
                      <div>
                        <p className="font-sans text-xs tracking-widest uppercase text-gold-600/60 mb-1">Program</p>
                        <p className="font-sans text-sm text-cream-300" style={{ lineHeight: 1.8 }}>
                          Luni – Vineri: 09:00 – 20:00<br />
                          Sâmbătă – Duminică: 10:00 – 22:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social media */}
                <div className="border-t border-gold-600/10 pt-6">
                  <p className="font-sans text-xs tracking-widest uppercase text-gold-600/60 mb-4">Social Media</p>
                  <a
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-cream-400 hover:text-gold-600 transition-colors group"
                  >
                    <Facebook size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="font-sans text-sm">Măgura Events — Facebook</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@magura_events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-cream-400 hover:text-gold-600 transition-colors group"
                  >
                    <IconTikTok size={16} color="currentColor" className="group-hover:scale-110 transition-transform" />
                    <span className="font-sans text-sm">@magura_events — TikTok</span>
                  </a>
                  <a
                    href="https://www.instagram.com/magura_events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-cream-400 hover:text-gold-600 transition-colors group"
                  >
                    <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="font-sans text-sm">@magura_events — Instagram</span>
                  </a>
                </div>

                {/* Quick promise */}
                <div className="card-luxury p-6 border-gold-600/20">
                  <p className="font-serif text-lg text-cream-100 mb-2">Promisiunea noastră</p>
                  <p className="font-sans text-xs text-cream-500" style={{ lineHeight: 1.75 }}>
                    Răspundem la orice cerere în maximum <strong className="text-gold-600">24 de ore</strong>.
                    Consultanța inițială este complet gratuită și fără obligații.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
              <div className="card-luxury p-8 lg:p-10">
                <h2 className="font-serif text-2xl text-cream-100 mb-2">Cerere ofertă personalizată</h2>
                <p className="font-sans text-xs text-cream-600 mb-8">
                  Câmpurile marcate cu <span className="text-gold-600">*</span> sunt obligatorii.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-96 border-t border-gold-600/10">
        <iframe
          src="https://maps.google.com/maps?q=Magura+Events+Buturugeni+Giurgiu+Romania&output=embed&hl=ro&z=15"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(75%) invert(88%) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locație Măgura Events pe Google Maps"
        />
      </div>
    </>
  );
}
