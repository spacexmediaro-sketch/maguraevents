import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/metadata';

const cormorant = Cormorant_Garamond({
  subsets:  ['latin', 'latin-ext'],
  weight:   ['300', '400', '500', '600', '700'],
  style:    ['normal', 'italic'],
  variable: '--font-cormorant',
  display:  'swap',
  preload:  true,
});

const montserrat = Montserrat({
  subsets:  ['latin', 'latin-ext'],
  weight:   ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display:  'swap',
  preload:  true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:  'Măgura Events — Saloane Premium pentru Evenimente Memorabile',
    template: '%s | Măgura Events',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors:  [{ name: siteConfig.legalName }],
  robots: {
    index:  true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type:     'website',
    siteName: 'Măgura Events',
    locale:   'ro_RO',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <meta name="theme-color" content="#FAFAF7" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="bg-noir-900 text-cream-200 antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
