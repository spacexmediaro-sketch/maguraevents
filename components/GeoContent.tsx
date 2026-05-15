import { localitiesByCounty, within60km } from '@/lib/geo';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const countyAccent: Record<string, string> = {
  București:  'Acces rapid · 40 km · Autostradă A2',
  Ilfov:      'Județ limitrof · 28–58 km',
  Giurgiu:    'Județ local · 2–40 km',
  Dâmbovița:  'Nord-vest · 35–65 km',
  Argeș:      'Vest · ~65 km',
  Teleorman:  'Sud · 22–58 km',
};

export default function GeoContent() {
  const counties = Object.keys(localitiesByCounty).filter((c) => c !== 'București');

  return (
    <section
      className="section-padding border-t border-gold-600/10"
      style={{ background: '#060605' }}
      aria-label="Zona de acoperire Măgura Events"
    >
      <div className="container-luxury">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="label-gold mb-4">✦ Zona de acoperire ✦</p>
          <h2 className="heading-md text-cream-200 mb-4">
            Organizăm evenimente în{' '}
            <span className="text-gold-gradient italic">toată regiunea</span>
          </h2>
          <div className="gold-line" />
          <p className="font-sans text-cream-500 max-w-2xl mx-auto mt-6" style={{ lineHeight: 1.9 }}>
            Localizați în <strong className="text-cream-300">Sat Măgura, Buturugeni, Giurgiu</strong> —
            la doar <strong className="text-cream-300">40 km de București</strong>. Deservim cupluri și
            familii din București, Ilfov, Giurgiu, Dâmbovița, Argeș și județele limitrofe.
          </p>
        </div>

        {/* Distance pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {[
            { city: 'București',  km: '~40 km',  note: 'A2' },
            { city: 'Giurgiu',    km: '~27 km',  note: 'DN5' },
            { city: 'Videle',     km: '~35 km',  note: 'DJ' },
            { city: 'Răcari',     km: '~35 km',  note: 'DN' },
            { city: 'Mihăilești', km: '~10 km',  note: 'DN61' },
          ].map((item) => (
            <div key={item.city} className="card-luxury p-5 text-center">
              <p className="font-serif text-xl text-gold-600 mb-1">{item.km}</p>
              <p className="font-sans text-xs text-cream-200 font-medium mb-1">{item.city}</p>
              <p className="font-sans text-[0.6rem] text-cream-600 tracking-wider">{item.note}</p>
            </div>
          ))}
        </div>

        {/* County cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* București — card special */}
          <div className="relative card-luxury p-7 border-l-2 border-gold-600/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-9 h-9 border border-gold-600/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={15} className="text-gold-600" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-cream-100 mb-0.5">
                  Evenimente <span className="text-gold-600">București</span>
                </h3>
                <p className="font-sans text-[0.62rem] text-gold-600/60 tracking-widest uppercase">
                  {countyAccent['București']}
                </p>
              </div>
            </div>
            <p className="font-sans text-xs text-cream-500 mb-5" style={{ lineHeight: 1.8 }}>
              Locație exclusivistă la 40 de minute de capitală — cadrul perfect pentru cuplurile
              din București care vor o nuntă sau botez departe de agitația orașului.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Nuntă', 'Botez', 'Majorat', 'Corporate'].map((kw) => (
                <span key={kw} className="text-[0.6rem] font-sans px-3 py-1.5 bg-gold-600/5 border border-gold-600/20 text-gold-600/80 tracking-wide">
                  {kw} București
                </span>
              ))}
            </div>
          </div>

          {/* County cards */}
          {counties.map((county) => {
            const locs = localitiesByCounty[county].filter((l) => l.distKm <= 65);
            if (locs.length === 0) return null;
            const sorted    = locs.sort((a, b) => a.distKm - b.distKm);
            const top       = sorted.slice(0, 6);
            const remaining = sorted.slice(6);

            return (
              <div key={county} className="relative card-luxury p-7 border-l-2 border-gold-600/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-9 h-9 border border-gold-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={15} className="text-gold-600/70" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-cream-100 mb-0.5">
                      Evenimente <span className="text-gold-600">{county}</span>
                    </h3>
                    <p className="font-sans text-[0.62rem] text-gold-600/60 tracking-widest uppercase">
                      {countyAccent[county] ?? `${locs.length} localități · până la ${Math.max(...locs.map((l) => l.distKm))} km`}
                    </p>
                  </div>
                </div>

                {/* Top cities */}
                <div className="space-y-1.5 mb-4">
                  {top.map((loc) => (
                    <div key={loc.name} className="flex items-center justify-between">
                      <span className="font-sans text-xs text-cream-400">{loc.name}</span>
                      <span className="font-sans text-[0.58rem] text-cream-700 tabular-nums">{loc.distKm} km</span>
                    </div>
                  ))}
                </div>

                {/* Remaining — vizibil pentru SEO, discret vizual */}
                {remaining.length > 0 && (
                  <p className="font-sans text-[0.58rem] text-cream-700" style={{ lineHeight: 1.7 }}>
                    + {remaining.map((l) => l.name).join(', ')}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* SEO paragraph */}
        <div className="mt-12 p-8 border border-gold-600/8" style={{ background: 'rgba(201,168,76,0.02)' }}>
          <h3 className="font-serif text-base text-cream-300 mb-3">
            Locație premium accesibilă din toată zona de sud a României
          </h3>
          <p className="font-sans text-cream-600 text-xs mb-3" style={{ lineHeight: 2 }}>
            Căutați un <strong className="text-cream-500">salon de nunți</strong>, o{' '}
            <strong className="text-cream-500">locație pentru botez</strong> sau un{' '}
            <strong className="text-cream-500">salon de majorat</strong> premium lângă București?
            Suntem în <strong className="text-cream-500">Sat Măgura, Buturugeni, Giurgiu</strong> și
            organizăm evenimente pentru clienți din:
          </p>
          <p className="font-sans text-[0.6rem] text-cream-700" style={{ lineHeight: 2.2 }}>
            {within60km
              .sort((a, b) => a.distKm - b.distKm)
              .map((loc) => `${loc.name} (${loc.county})`)
              .join(' · ')}
            {' '}și din toate localitățile limitrofe.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-sans text-cream-500 text-sm mb-6">
            Indiferent de unde veniți — suntem la distanță de un apel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              <span>Solicită Ofertă</span>
            </Link>
            <a href="tel:+40765736177" className="btn-outline-gold">
              <span>+40 765 736 177</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
