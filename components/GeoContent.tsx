import { localitiesByCounty, within60km } from '@/lib/geo';
import Link from 'next/link';

/**
 * Secțiune GEO SEO — vizibilă pentru Google, utilă pentru utilizatori.
 * Structurată cu H3/H4 pentru crawlere, cu text natural relevant.
 */
export default function GeoContent() {
  const counties = Object.keys(localitiesByCounty).filter(
    (c) => c !== 'București'
  );

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
          <p
            className="font-sans text-cream-500 max-w-2xl mx-auto mt-6"
            style={{ lineHeight: 1.9 }}
          >
            Măgura Events este localizat în <strong className="text-cream-300">Sat Măgura, Comuna Buturugeni, Județul Giurgiu</strong> — la doar{' '}
            <strong className="text-cream-300">40 km de București</strong>, accesibil rapid din toată zona de sud a țării. Deservim cupluri și familii din București, Ilfov, Giurgiu, Dâmbovița, Argeș și județele limitrofe.
          </p>
        </div>

        {/* Distance highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {[
            { city: 'București',     km: '~40 km',  note: 'Autostradă A2' },
            { city: 'Giurgiu',       km: '~27 km',  note: 'DN5' },
            { city: 'Videle',        km: '~35 km',  note: 'DJ' },
            { city: 'Răcari',        km: '~35 km',  note: 'DN' },
            { city: 'Mihăilești',    km: '~10 km',  note: 'DN61' },
          ].map((item) => (
            <div
              key={item.city}
              className="card-luxury p-5 text-center"
            >
              <p className="font-serif text-xl text-gold-600 mb-1">{item.km}</p>
              <p className="font-sans text-xs text-cream-200 font-medium mb-1">{item.city}</p>
              <p className="font-sans text-[0.6rem] text-cream-600 tracking-wider">{item.note}</p>
            </div>
          ))}
        </div>

        {/* Counties grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* București special */}
          <div className="card-luxury p-6 lg:col-span-1">
            <h3 className="font-serif text-xl text-cream-100 mb-1">
              Salon evenimente <span className="text-gold-600">București</span>
            </h3>
            <p className="font-sans text-xs text-gold-600/70 tracking-widest uppercase mb-4">
              40 km · Acces rapid A2
            </p>
            <p className="font-sans text-xs text-cream-500 mb-4" style={{ lineHeight: 1.75 }}>
              Organizăm nunți, botezuri și majorate pentru familii din București care doresc o locație premium, exclusivistă, departe de agitația orașului dar la doar 40 de minute.
            </p>
            <div className="flex flex-wrap gap-2">
              {['nuntă București', 'botez București', 'majorat București', 'eveniment corporate București'].map((kw) => (
                <span key={kw} className="text-[0.55rem] font-sans px-2 py-1 border border-gold-600/15 text-cream-600 tracking-wider">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* County cards */}
          {counties.map((county) => {
            const locs = localitiesByCounty[county].filter((l) => l.distKm <= 65);
            if (locs.length === 0) return null;
            const maxDist = Math.max(...locs.map((l) => l.distKm));
            return (
              <div key={county} className="card-luxury p-6">
                <h3 className="font-serif text-xl text-cream-100 mb-1">
                  Salon evenimente{' '}
                  <span className="text-gold-600">{county}</span>
                </h3>
                <p className="font-sans text-xs text-gold-600/70 tracking-widest uppercase mb-4">
                  {locs.length} localități acoperite · până la {maxDist} km
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {locs
                    .sort((a, b) => a.distKm - b.distKm)
                    .slice(0, 16)
                    .map((loc) => (
                      <span
                        key={loc.name}
                        className="text-[0.58rem] font-sans px-2 py-1 border border-gold-600/10 text-cream-600 hover:text-cream-300 hover:border-gold-600/30 transition-colors duration-200"
                        title={`${loc.type} — ${loc.distKm} km`}
                      >
                        {loc.name}
                      </span>
                    ))}
                  {locs.length > 16 && (
                    <span className="text-[0.55rem] font-sans text-cream-700 self-center">
                      +{locs.length - 16} localități
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* SEO paragraph — natural text cu toate localitățile */}
        <div className="mt-14 card-luxury p-8">
          <h3 className="font-serif text-xl text-cream-200 mb-4">
            Locație premium accesibilă din toată zona de sud a României
          </h3>
          <p className="font-sans text-cream-500 text-sm mb-4" style={{ lineHeight: 1.9 }}>
            Dacă ești în căutarea unui <strong className="text-cream-300">salon de nunți</strong>, a unei{' '}
            <strong className="text-cream-300">locații pentru botez</strong> sau a unui{' '}
            <strong className="text-cream-300">salon de majorat</strong> premium în apropierea Bucureștiului,
            Măgura Events este alegerea perfectă. Suntem situați în{' '}
            <strong className="text-cream-300">Sat Măgura, Buturugeni, Giurgiu</strong> și organizăm
            evenimente pentru clienți din:
          </p>
          <div
            className="font-sans text-xs text-cream-600"
            style={{ lineHeight: 2, columns: '2 200px', columnGap: '2rem' }}
          >
            {within60km
              .sort((a, b) => a.distKm - b.distKm)
              .map((loc) => (
                <span key={`${loc.name}-${loc.county}`} className="inline-block mr-1">
                  {loc.name} ({loc.county}),{' '}
                </span>
              ))}
            și din toate localitățile și județele limitrofe.
          </div>
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
