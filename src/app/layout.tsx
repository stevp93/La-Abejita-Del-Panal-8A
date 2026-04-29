import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: 'La Abejita del Panal 8A — Miel 100% Natural de Boyacá',
    template: '%s | La Abejita del Panal 8A',
  },
  description:
    'Productos apícolas 100% naturales de San Mateo, Boyacá. Miel pura, polen, propóleo y dulces artesanales. Registro INVIMA. Sin aditivos.',
  keywords: [
    'miel natural',
    'productos apícolas',
    'miel de Boyacá',
    'polen',
    'propóleo',
    'miel pura Colombia',
    'La Abejita del Panal',
    'San Mateo Boyacá',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'La Abejita del Panal 8A',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
