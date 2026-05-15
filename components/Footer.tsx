import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { IconTikTok } from './Icons';
import { siteConfig } from '@/lib/metadata';

const eventLinks = [
  { label: 'Nunți',           href: '/nunti' },
  { label: 'Botezuri',        href: '/botezuri' },
  { label: 'Majorate',        href: '/majorate' },
  { label: 'Zile de Naștere', href: '/zile-nastere' },
  { label: 'Corporate',       href: '/corporate' },
  { label: 'Meniuri',         href: '/meniuri' },
];

const siteLinks = [
  { label: 'Acasă',        href: '/' },
  { label: 'Despre noi',   href: '/despre' },
  { label: 'Saloane',      href: '/saloane' },
  { label: 'Galerie',      href: '/galerie' },
  { label: 'Recenzii',     href: '/recenzii' },
  { label: 'Contact',      href: '/contact' },
];

const legalLinks = [
  { label: 'Termeni și condiții',        href: '/termeni' },
  { label: 'Politică confidențialitate', href: '/confidentialitate' },
  { label: 'Politică cookies',           href: '/cookies' },
  { label: 'GDPR',                        href: '/gdpr' },
  { label: 'Soluționare litigii',         href: '/litigii' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-600/10" style={{ background: '#050505' }}>
      <div className="container-luxury py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6" aria-label="Măgura Events — Pagina principală">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Măgura Events logo"
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <div>
                  <span className="font-serif font-light text-gold-gradient block" style={{ fontSize: '1.2rem', letterSpacing: '0.3em' }}>
                    MĂGURA
                  </span>
                  <span className="font-sans text-[0.48rem] tracking-[0.5em] uppercase text-cream-600">
                    EVENTS
                  </span>
                </div>
              </div>
            </Link>

            <p className="font-sans text-cream-600 text-xs mb-6" style={{ lineHeight: 1.8 }}>
              Saloane premium pentru nunți, botezuri, majorate și evenimente corporate în județul Giurgiu. Rafinament, eleganță și organizare impecabilă.
            </p>

            {/* Social media — Facebook + Instagram + TikTok */}
            <div className="flex gap-3 mb-6">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gold-600/20 flex items-center justify-center text-cream-500 hover:text-gold-600 hover:border-gold-600/50 transition-all duration-300"
                aria-label="Măgura Events pe Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://www.instagram.com/magura_events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gold-600/20 flex items-center justify-center text-cream-500 hover:text-gold-600 hover:border-gold-600/50 transition-all duration-300"
                aria-label="Măgura Events pe Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.tiktok.com/@magura_events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gold-600/20 flex items-center justify-center text-cream-500 hover:text-gold-600 hover:border-gold-600/50 transition-all duration-300"
                aria-label="Măgura Events pe TikTok"
              >
                <IconTikTok size={14} color="currentColor" />
              </a>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <a href="tel:+40765736177" className="flex items-center gap-3 group">
                <Phone size={12} className="text-gold-600/60 group-hover:text-gold-600 transition-colors" />
                <span className="font-sans text-xs text-cream-500 group-hover:text-cream-300 transition-colors">
                  +40 765 736 177
                </span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group">
                <Mail size={12} className="text-gold-600/60 group-hover:text-gold-600 transition-colors" />
                <span className="font-sans text-xs text-cream-500 group-hover:text-cream-300 transition-colors">
                  {siteConfig.email}
                </span>
              </a>
              <a
                href="https://maps.google.com/maps?q=Magura+Events+Buturugeni+Giurgiu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin size={12} className="text-gold-600/60 group-hover:text-gold-600 transition-colors mt-0.5 flex-shrink-0" />
                <address className="font-sans text-xs text-cream-500 not-italic group-hover:text-cream-300 transition-colors" style={{ lineHeight: 1.6 }}>
                  Sat Măgura,<br />județul Giurgiu, România
                </address>
              </a>
            </div>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-gold-600 mb-6">
              Evenimente
            </h3>
            <ul className="space-y-3">
              {eventLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-cream-500 hover:text-cream-200 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-gold-600/30 group-hover:text-gold-600/60 transition-colors text-[0.5rem]">◆</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-gold-600 mb-6">
              Navigare
            </h3>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-cream-500 hover:text-cream-200 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-gold-600/30 group-hover:text-gold-600/60 transition-colors text-[0.5rem]">◆</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Company */}
          <div>
            <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-gold-600 mb-6">
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-cream-500 hover:text-cream-200 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-gold-600/30 group-hover:text-gold-600/60 transition-colors text-[0.5rem]">◆</span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://anpc.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-cream-500 hover:text-cream-200 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ExternalLink size={10} className="text-gold-600/30 group-hover:text-gold-600/60 transition-colors" />
                  ANPC
                </a>
              </li>
              <li>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-cream-500 hover:text-cream-200 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ExternalLink size={10} className="text-gold-600/30 group-hover:text-gold-600/60 transition-colors" />
                  SOL — Soluționare online
                </a>
              </li>
            </ul>

            <div className="border border-gold-600/10 p-4" style={{ background: 'rgba(201,168,76,0.02)' }}>
              <p className="font-sans text-[0.6rem] text-cream-700" style={{ lineHeight: 1.8 }}>
                <strong className="text-cream-500">AGRO & FISHING MAGURA SRL</strong><br />
                CUI: 29032418<br />
                Nr. Reg. Com.: J2011000564520<br />
                EUID: ROONRC.J2011000564520<br />
                Data înf.: 25.08.2011
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-600/10 py-6">
        <div className="container-luxury flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream-700 text-center sm:text-left">
            © {year} Măgura Events — AGRO & FISHING MAGURA SRL. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream-700 hover:text-gold-600 transition-colors">
              <Facebook size={14} />
            </a>
            <a href="https://www.tiktok.com/@magura_events" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-cream-700 hover:text-gold-600 transition-colors">
              <IconTikTok size={14} color="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
