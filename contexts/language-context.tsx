'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

type Language = 'de' | 'en'

export function useLanguage() {
  const t = useTranslations()
  const language = useLocale() as Language
  const router = useRouter()
  const pathname = usePathname()

  const setLanguage = (lang: Language) => {
    router.replace(pathname, { locale: lang })
  }

  return { t, language, setLanguage }
}
