import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { getI18nMetadata } from '@/lib/i18n-metadata'
import { siteConfig } from '@/config/site'
import JsonLd from '@/components/JsonLd'
import '../globals.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: siteConfig.name,
    description: '',
    robots: { index: true, follow: true },
    ...getI18nMetadata(locale),
    openGraph: {
      title: siteConfig.name,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      locale: locale === 'de' ? 'de_CH' : 'en_US',
      type: 'website',
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'de' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ['de', 'en'],
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
  }

  return (
    <html lang={locale}>
      <body>
        <JsonLd data={website} />
        <JsonLd data={localBusiness} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
