'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer>
      <Link href={`/${language}/impressum`}>{t('footer.legal')}</Link>
      <Link href={`/${language}/datenschutz`}>{t('footer.privacy')}</Link>
      <span>{t('footer.madeBy')}</span>
    </footer>
  )
}
