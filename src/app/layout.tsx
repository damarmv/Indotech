
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'indonesia technology.corp - Solusi CCTV & Sistem Keamanan Bogor Jabodetabek',
    template: '%s | indonesia technology.corp',
  },
  description: 'Penyedia solusi sistem keamanan terintegrasi profesional. Ahli instalasi CCTV Bogor, Smart Alarm, Access Control, dan Infrastruktur Jaringan di Jabodetabek.',
  keywords: ['CCTV Bogor', 'Security System Bogor', 'Instalasi CCTV Jabodetabek', 'Access Control Bogor', 'Smart Alarm Bogor', 'Indonesia Technology Corp', 'Sistem Keamanan Terintegrasi'],
  authors: [{ name: 'indonesia technology.corp' }],
  creator: 'indonesia technology.corp',
  publisher: 'indonesia technology.corp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://indonesiatechnology.id',
    siteName: 'indonesia technology.corp',
    title: 'Solusi CCTV & Sistem Keamanan Terintegrasi Profesional - indonesia technology.corp',
    description: 'Lindungi aset Anda dengan teknologi keamanan mutakhir. Spesialis instalasi CCTV, Alarm, dan Jaringan terbaik di Bogor dan Jabodetabek.',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/studio-2175880406-bdd33.firebasestorage.app/o/Desain%20tanpa%20judul%20(3).png?alt=media&token=a5ec83d4-cf85-4941-b0ac-92efcb95d2da',
        width: 1200,
        height: 630,
        alt: 'indonesia technology.corp Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'indonesia technology.corp - Solusi CCTV & Security System',
    description: 'Solusi sistem keamanan dan teknologi terintegrasi profesional di Bogor & Jabodetabek.',
    images: ['https://firebasestorage.googleapis.com/v0/b/studio-2175880406-bdd33.firebasestorage.app/o/Desain%20tanpa%20judul%20(3).png?alt=media&token=a5ec83d4-cf85-4941-b0ac-92efcb95d2da'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'indonesia technology.corp',
    image: 'https://firebasestorage.googleapis.com/v0/b/studio-2175880406-bdd33.firebasestorage.app/o/Desain%20tanpa%20judul%20(3).png?alt=media&token=a5ec83d4-cf85-4941-b0ac-92efcb95d2da',
    '@id': 'https://indonesiatechnology.id',
    url: 'https://indonesiatechnology.id',
    telephone: '+6283190433681',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jalan Pesona Cilebut 1 No. BLOK I2/21',
      addressLocality: 'Cilebut',
      addressRegion: 'Jawa Barat',
      postalCode: '16710',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.530273,
      longitude: 106.795731,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/indotechnology.id?igsh=YWxkNnMzZjYzemow',
      'https://www.tiktok.com/@indotechh.id?_r=1&_t=ZS-95hBAf3ctoz',
    ],
  };

  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
