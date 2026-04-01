import { siteConfig } from '@/config/site'

export function getI18nMetadata(locale: string, path = '') {
  const base = siteConfig.url
  return {
    alternates: {
      canonical: `${base}/${locale}${path}`,
      languages: {
        de: `${base}/de${path}`,
        en: `${base}/en${path}`,
        'x-default': `${base}/de${path}`,
      },
    },
  }
}
