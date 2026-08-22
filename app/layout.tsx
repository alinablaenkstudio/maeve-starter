import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig } from '@/config/site'
import JsonLd from '@/components/JsonLd'
import './globals.css'

// TODO Fonts: next/font/google importieren und als --font-heading / --font-body
// an <html className> hängen.

export const metadata: Metadata = {
  title: siteConfig.name,
  description: '',
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: siteConfig.name,
    description: '',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'de_CH',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-social.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'de',
  }

  // TODO @type an das Geschaeft anpassen: LocalBusiness, HealthAndBeautyBusiness,
  // ProfessionalService, Organization ... plus address, telephone, openingHours.
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
  }

  return (
    <html lang="de">
      <body>
        <JsonLd data={website} />
        <JsonLd data={localBusiness} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
