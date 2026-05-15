import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://magura-events.ro';

export const siteConfig = {
  name:      'Măgura Events',
  legalName: 'AGRO & FISHING MAGURA SRL',
  cui:       'CUI 29032418',
  regCom:    'J2011000564520',
  url:       BASE_URL,
  phone:     '+40 765 736 177',
  phoneRaw:  '+40765736177',
  email:     'contact@magura-events.ro',
  address:   'Sat Măgura, Comuna Buturugeni, Județul Giurgiu, România',
  facebook:  'https://www.facebook.com/profile.php?id=100071001438187',
  instagram: 'https://www.instagram.com/magura_events',
  tiktok:    'https://www.tiktok.com/@magura_events',
  description:
    'Măgura Events — saloane premium de evenimente în Buturugeni, Giurgiu, la 40 km de București. Organizăm nunți, botezuri, majorate și corporate pentru clienți din Giurgiu, Ilfov, Dâmbovița, Argeș și București.',

  // ─── Keywords extinse GEO ────────────────────────────────────────
  keywords: [
    // Brand
    'Măgura Events',
    'salon events Magura',
    'Magura Events Buturugeni',

    // Tip eveniment generic
    'salon evenimente',
    'sală evenimente',
    'locație nuntă',
    'salon nunți premium',
    'salon botez elegant',
    'salon majorat',
    'eveniment corporate',
    'organizare nuntă',
    'restaurant nuntă',
    'nuntă elegantă',
    'botez premium',
    'locație eveniment lux',
    'sală nuntă cu parc',
    'salon cu lac',

    // ── Giurgiu ──
    'salon evenimente Giurgiu',
    'salon nunți Giurgiu',
    'salon botez Giurgiu',
    'sală nuntă Giurgiu',
    'locație nuntă Giurgiu',
    'restaurant nuntă Giurgiu',
    'salon majorat Giurgiu',
    'eveniment corporate Giurgiu',
    'organizare nuntă Giurgiu',
    'nuntă Giurgiu',
    'botez Giurgiu',
    'salon Buturugeni',
    'salon Mihăilești',
    'nuntă Bolintin-Vale',
    'nuntă Joița',
    'salon Găiseni',

    // ── București ──
    'salon nunți lângă București',
    'salon evenimente aproape București',
    'locație nuntă în afara Bucureștiului',
    'salon botez lângă București',
    'restaurant nuntă aproape București',
    'sală majorat lângă București',
    'nuntă la 40 km de București',
    'salon nuntă sector 1',
    'salon nuntă sector 4',
    'salon nuntă sector 5',
    'salon nuntă sector 6',
    'salon evenimente București',
    'nuntă București',
    'botez București',
    'salon botez București',

    // ── Ilfov ──
    'salon nunți Ilfov',
    'salon evenimente Ilfov',
    'locație nuntă Ilfov',
    'nuntă Voluntari',
    'nuntă Popești-Leordeni',
    'salon Bragadiru',
    'salon Măgurele Ilfov',
    'nuntă Cornetu',
    'nuntă Clinceni',
    'salon 1 Decembrie',
    'salon Jilava',
    'nuntă Pantelimon',
    'salon Buftea',

    // ── Dâmbovița ──
    'salon nunți Dâmbovița',
    'salon evenimente Dâmbovița',
    'nuntă Târgoviște',
    'nuntă Titu',
    'salon Răcari',
    'salon Găești',
    'nuntă Moreni',
    'locație nuntă Dâmbovița',

    // ── Argeș ──
    'salon nunți Argeș',
    'salon evenimente Argeș',
    'nuntă Pitești',
    'salon nuntă Pitești',
    'nuntă Mioveni',
    'nuntă Costești',
    'locație nuntă Argeș',
    'salon botez Argeș',

    // ── Teleorman ──
    'salon evenimente Teleorman',
    'nuntă Videle',
    'nuntă Alexandria',
    'salon Călugareni',

    // ── Long-tail AEO ──
    'cel mai frumos salon de nuntă lângă București',
    'locație exclusivistă nuntă lângă capitală',
    'salon nuntă cu lac și parc Giurgiu',
    'salon nuntă cu grădină București',
    'sală evenimente cu parcare mare',
    'unde organizez nunta lângă București',
    'salon 250 persoane Giurgiu',
    'salon 450 persoane lângă București',
    'salon nuntă Giurgiu preț',
    'ofertă nuntă salon Giurgiu',
    'rezervare salon nuntă',
  ],
};

export function createMetadata(
  overrides: Partial<Metadata> & { title: string; description: string; path?: string }
): Metadata {
  const { title, description, path = '', ...rest } = overrides;
  const url       = `${BASE_URL}${path}`;
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: siteConfig.keywords,
    authors:  [{ name: siteConfig.legalName, url: BASE_URL }],
    creator:  siteConfig.legalName,
    publisher: siteConfig.legalName,
    robots: {
      index:  true,
      follow: true,
      googleBot: {
        index:               true,
        follow:              true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet':       -1,
      },
    },
    alternates: { canonical: url },
    openGraph: {
      type:        'website',
      url,
      title:       fullTitle,
      description,
      siteName:    siteConfig.name,
      locale:      'ro_RO',
      images: [
        {
          url:    `${BASE_URL}/og-image.webp`,
          width:  1200,
          height: 630,
          alt:    `${siteConfig.name} — Saloane premium evenimente Giurgiu, lângă București`,
        },
      ],
    },
    twitter: {
      card:        'summary_large_image',
      title:       fullTitle,
      description,
      images:      [`${BASE_URL}/og-image.webp`],
    },
    other: {
      'geo.region':      'RO-GR',
      'geo.placename':   'Buturugeni, Giurgiu, România',
      'geo.position':    '44.13;25.87',
      'ICBM':            '44.13, 25.87',
    },
    ...rest,
  };
}
