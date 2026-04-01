'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

export default function Nav() {
  const { t, language, setLanguage } = useLanguage()

  return (
    <nav>
      <Link href="/">{t('nav.home')}</Link>
      <Link href={`/${language}#contact`}>{t('nav.contact')}</Link>
      <button onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}>
        {language === 'de' ? 'EN' : 'DE'}
      </button>
    </nav>
  )
}
