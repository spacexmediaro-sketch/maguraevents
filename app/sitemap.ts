import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://magura-events.ro';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages = [
    { url: '/',                  priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/despre',            priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/saloane',           priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/saloane/salon-1',   priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/saloane/salon-2',   priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/nunti',             priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/botezuri',          priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/majorate',          priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/zile-nastere',      priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/corporate',         priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/meniuri',           priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/galerie',           priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/recenzii',          priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/contact',           priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/termeni',           priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/confidentialitate', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/cookies',           priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/gdpr',              priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/litigii',           priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return pages.map(({ url, priority, changeFrequency }) => ({
    url:              `${BASE_URL}${url}`,
    lastModified:     now,
    changeFrequency,
    priority,
    alternates: {
      languages: { ro: `${BASE_URL}${url}` },
    },
  }));
}
