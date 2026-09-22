import './globals.css'
import React from 'react'
import type { Metadata, Viewport } from 'next'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const viewport: Viewport = {
  themeColor: '#14201B',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'G.S.BTP | Construction, Génie Civil, Hydraulique & Immobilier à Abidjan',
  description:
    "G.S.BTP — Entreprise générale de bâtiment, travaux publics, hydraulique villageoise et urbaine, écoconstruction BTCS et projets immobiliers d'exception à Abidjan, Côte d'Ivoire.",
  keywords: [
    'BTP Abidjan',
    'Construction Côte d’Ivoire',
    'Génie civil Abidjan',
    'Forage hydraulique CI',
    'Immobilier Abidjan',
    'BTCS Côte d’Ivoire',
    'Entreprise générale BTP',
    'G.S.BTP',
  ],
  authors: [{ name: 'G.S.BTP' }],
  metadataBase: new URL('https://gsbtp-ci.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'G.S.BTP | Construction, Génie Civil & Immobilier à Abidjan',
    description:
      'Partenaire de référence pour la conception, la construction durable, les forages et le patrimoine immobilier en Côte d’Ivoire.',
    url: 'https://gsbtp-ci.com',
    siteName: 'G.S.BTP Côte d’Ivoire',
    locale: 'fr_CI',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'G.S.BTP — Réalisations architecturales et chantiers de prestige à Abidjan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G.S.BTP | BTP & Immobilier de Standing à Abidjan',
    description: 'Bâtiment • Génie civil • Hydraulique & Forages • Immobilier en Côte d’Ivoire.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'G.S.BTP',
    description:
      "Entreprise générale de BTP, construction, génie civil, hydraulique et promotion immobilière à Abidjan, Côte d'Ivoire.",
    telephone: '+2250749096572',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abidjan',
      addressCountry: 'CI',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '5.359952',
      longitude: '-4.008256',
    },
    url: 'https://gsbtp-ci.com',
    openingHours: 'Mo,Tu,We,Th,Fr 08:00-18:00',
  }

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Schibsted+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-sand text-deep-green font-sans min-h-screen flex flex-col selection:bg-amber selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
