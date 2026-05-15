import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Galerie Foto — Momente de Excepție la Măgura Events',
  description:
    'Galerie foto Măgura Events — nunți, botezuri, majorate, corporate și saloane. Descoperă atmosfera și eleganța evenimentelor organizate în saloanele noastre premium din județul Buzău.',
  alternates: { canonical: 'https://magura-events.ro/galerie' },
};

export default function GaleriePage() {
  return <Gallery />;
}
