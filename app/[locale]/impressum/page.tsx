import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  const t = useTranslations('impressum')

  return (
    <main className="legal">
      <h1>{t('title')}</h1>
      <h2>{t('responsible')}</h2>
      <p>{t('company')}</p>
      <p>{t('address')}</p>
      <p>{t('uid')}</p>
      <p>{t('email')}</p>
    </main>
  )
}
