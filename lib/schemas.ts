import { siteConfig } from './metadata';
import { targetCounties, within60km } from './geo';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://magura-events.ro';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    ['LocalBusiness', 'EventVenue'],
    '@id':      `${BASE_URL}/#business`,
    name:       'Măgura Events',
    legalName:  siteConfig.legalName,
    url:        BASE_URL,
    telephone:  siteConfig.phone,
    email:      siteConfig.email,
    description: siteConfig.description,
    image:      `${BASE_URL}/og-image.webp`,
    logo:       `${BASE_URL}/logo.png`,
    address: {
      '@type':         'PostalAddress',
      streetAddress:   'Sat Măgura',
      addressLocality: 'Buturugeni',
      addressRegion:   'Giurgiu',
      postalCode:      '085300',
      addressCountry:  'RO',
    },
    geo: {
      '@type':    'GeoCoordinates',
      latitude:   44.13,
      longitude:  25.87,
    },
    hasMap: 'https://share.google/cdgA7UY1kWbB499qv',

    // Zona de servicii — toate localitățile acoperite
    areaServed: [
      // Județe ca entitate
      ...targetCounties.map((county) => ({
        '@type':      'AdministrativeArea',
        name:         county === 'București' ? 'Municipiul București' : `Județul ${county}`,
        '@id':        `https://www.wikidata.org/wiki/${county}`,
      })),
      // Localități individuale
      ...within60km.map((loc) => ({
        '@type': 'City',
        name:    loc.name,
      })),
    ],

    openingHoursSpecification: [
      {
        '@type':    'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens:  '09:00',
        closes: '20:00',
      },
      {
        '@type':    'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens:  '10:00',
        closes: '22:00',
      },
    ],

    sameAs: [
      siteConfig.facebook,
      siteConfig.instagram,
      siteConfig.tiktok,
    ],

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Servicii evenimente Măgura Events',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Organizare nuntă Giurgiu', areaServed: 'Giurgiu' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Organizare botez lângă București' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Petrecere majorat Ilfov' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Evenimente corporate Giurgiu' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salon Crystal — 80-250 persoane' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salon Royal — 150-450 persoane' } },
      ],
    },

    priceRange:          '$$',
    currenciesAccepted:  'RON',
    paymentAccepted:     'Cash, Transfer bancar',
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name:    question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type':   'ListItem',
      position:  index + 1,
      name:      item.name,
      item:      item.url,
    })),
  };
}

export function eventVenueSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    'EventVenue',
    name:       'Măgura Events',
    url:        BASE_URL,
    telephone:  siteConfig.phone,
    address: {
      '@type':         'PostalAddress',
      streetAddress:   'Sat Măgura',
      addressLocality: 'Buturugeni',
      addressRegion:   'Giurgiu',
      addressCountry:  'RO',
    },
    maximumAttendeeCapacity: 450,
    description: 'Saloane premium pentru nunți, botezuri, majorate și evenimente corporate. Două saloane: Crystal (250 pers.) și Royal (450 pers.). Localizat în Buturugeni, Giurgiu, la 40 km de București.',
    image: `${BASE_URL}/og-image.webp`,
  };
}
