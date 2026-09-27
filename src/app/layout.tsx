import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DCA Moving — Toronto's Top-Rated Movers | 5.0 ★ Google Reviews",
  description:
    "DCA Moving is Toronto's top-rated owner-operated moving company. 5.0 stars on Google with 150+ reviews. Free in-home estimates and moving quotes. Zero-damage guarantee. Call (416) 832-7474.",
  keywords: ["Toronto movers", "moving company", "moving quote", "moving estimate", "GTA movers", "local movers", "DCA moving"],
  openGraph: {
    title: "DCA Moving — Toronto's Top-Rated Movers",
    description:
      'Owner-operated. 5.0★ on Google. 150+ reviews. Zero-damage guarantee. Free in-home estimates and moving quotes by Denis himself. Serving Toronto & the GTA.',
    url: 'https://dcamoving.com',
    siteName: 'DCA Moving',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DCA Moving — Toronto's Top-Rated Movers",
    description:
      'Owner-operated. 5.0★ on Google. 150+ reviews. Zero-damage guarantee. Free in-home estimates and moving quotes.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=630&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['MovingCompany', 'LocalBusiness'],
    name: 'DCA Moving',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=630&fit=crop',
    url: 'https://dcamoving.com',
    telephone: '+14168327474',
    email: 'info@dcamoving.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '53 Sherwood Park Dr',
      addressLocality: 'Concord',
      addressRegion: 'ON',
      postalCode: 'L4K 4X7',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.8344923,
      longitude: -79.5098687,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '150',
    },
    priceRange: '$$',
    openingHours: 'Mo-Sa 08:00-20:00',
    areaServed: [
      'Toronto',
      'North York',
      'Etobicoke',
      'Scarborough',
      'Vaughan',
      'Concord',
      'Thornhill',
      'Richmond Hill',
      'Markham',
      'Mississauga',
      'Brampton',
      'Leaside',
      'Hamilton',
      'Barrie',
      'Huntsville',
      'Ottawa',
    ],
    description:
      "Toronto's top-rated owner-operated moving company. 5.0 stars on Google with 150+ reviews. Free in-home estimates and moving quotes, zero-damage guarantee, transparent pricing.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
