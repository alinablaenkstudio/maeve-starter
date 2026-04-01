import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  const t = useTranslations('datenschutz')

  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('intro')}</p>
      <h2>{t('responsible_title')}</h2>
      <h2>{t('collection_title')}</h2>
      <p>{t('collection_text')}</p>
      <h2>{t('cookies_title')}</h2>
      <p>{t('cookies_text')}</p>
      <h2>{t('hosting_title')}</h2>
      <p>{t('hosting_text')}</p>
      <h2>{t('rights_title')}</h2>
      <p>{t('rights_text')}</p>
    </main>
  )
}
