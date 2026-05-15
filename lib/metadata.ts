import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://magura-events.ro';

export const siteConfig = {
  name:        'Măgura Events',
  legalName:   'AGRO & FISHING MAGURA SRL',
  cui:         'CUI 29032418',
  regCom:      'J2011000564520',
  url:         BASE_URL,
  phone:       '+40 XXX XXX XXX',
  email:       'contact@magura-events.ro',
  address:     'Sat Măgura, Comuna Buturugeni, Județul Giurgiu, România',
  facebook:    'https://www.facebook.com/profile.php?id=100071001438187',
  instagram:   'https://www.instagram.com/magura_events',
  tiktok:      'https://www.tiktok.com/@magura_events',
  description: 'Măgura Events — saloane premium pentru nunți, botezuri, majorate și evenimente corporate în județul Giurgiu. Atmosferă de lux, meniuri rafinate, organizare impecabilă.',
  keywords: [
    'salon evenimente Giurgiu',
    'salon nunți Giurgiu',
    'salon botez Giurgiu',
    'sală evenimente',
    'locație nunți',
    'restaurant nuntă Giurgiu',
    'sală majorat',
    'evenimente corporate Giurgiu',
    'meniu nuntă',
    'meniu botez',
    'Măgura Events',
    'nuntă elegantă',
    'botez premium',
    'organizare evenimente private',
    'salon Crystal Giurgiu',
    'salon Royal Giurgiu',
  ],
};

export function createMetadata(overrides: Partial<Metadata> & {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const { title, description, path = '', ...rest } = overrides;
  const url = `${BASE_URL}${path}`;
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.legalName, url: BASE_URL }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    robots: {
      index:                     true,
      follow:                    true,
      googleBot: {
        index:                   true,
        follow:                  true,
        'max-video-preview':     -1,
        'max-image-preview':     'large',
        'max-snippet':           -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type:        'website',
      url,
      title:       fullTitle,
      description,
      siteName:    siteConfig.name,
      locale:      'ro_RO',
      images: [
        {
          url:    `${BASE_URL}/og-image.jpg`,
          width:  1200,
          height: 630,
          alt:    `${siteConfig.name} — Saloane premium pentru evenimente memorabile`,
        },
      ],
    },
    twitter: {
      card:        'summary_large_image',
      title:       fullTitle,
      description,
      images:      [`${BASE_URL}/og-image.jpg`],
    },
    ...rest,
  };
}
