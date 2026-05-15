import { siteConfig } from './metadata';

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
    image:      `${BASE_URL}/og-image.jpg`,
    logo:       `${BASE_URL}/logo.png`,
    address: {
      '@type':           'PostalAddress',
      streetAddress:     'Sat Măgura',
      addressLocality:   'Buzău',
      addressRegion:     'Buzău',
      postalCode:        'XXXXXX',
      addressCountry:    'RO',
    },
    geo: {
      '@type':    'GeoCoordinates',
      latitude:   45.1234,
      longitude:  26.5678,
    },
    openingHoursSpecification: [
      {
        '@type':     'OpeningHoursSpecification',
        dayOfWeek:   ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens:       '09:00',
        closes:      '20:00',
      },
      {
        '@type':     'OpeningHoursSpecification',
        dayOfWeek:   ['Saturday', 'Sunday'],
        opens:       '10:00',
        closes:      '22:00',
      },
    ],
    sameAs: [
      siteConfig.facebook,
      siteConfig.instagram,
      siteConfig.tiktok,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Servicii evenimente',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Organizare nuntă' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Organizare botez' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Organizare majorat' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Evenimente corporate' },
        },
      ],
    },
    priceRange: '$$',
    currenciesAccepted: 'RON',
    paymentAccepted:    'Cash, Transfer bancar',
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name:    question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type':    'ListItem',
      position:   index + 1,
      name:       item.name,
      item:       item.url,
    })),
  };
}
