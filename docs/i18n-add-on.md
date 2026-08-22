# i18n nachrüsten (next-intl v4)

Der Starter ist bewusst **DE-only**. Die letzten Projekte (Massagezeiten, Club BM)
waren alle einsprachig — i18n von Anfang an drin zu haben hiess jedes Mal, es
wieder rauszureissen. Wer zwei Sprachen braucht, baut sie nach dieser Anleitung ein.

Entscheide das **vor** dem Design. Nachträglich alle Texte aus dem JSX in JSON zu
ziehen ist die unangenehmere Variante.

## 1. Paket

```bash
npm install next-intl
```

## 2. Dateien anlegen

```ts
// i18n/routing.ts
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localeDetection: true,
})
```

```ts
// i18n/request.ts
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !routing.locales.includes(locale as 'de' | 'en')) {
    locale = routing.defaultLocale
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
```

```ts
// i18n/navigation.ts
import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
```

```ts
// middleware.ts
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
}
```

```ts
// lib/i18n-metadata.ts
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
```

```tsx
// contexts/language-context.tsx
'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

type Language = 'de' | 'en'

export function useLanguage() {
  const t = useTranslations()
  const language = useLocale() as Language
  const router = useRouter()
  const pathname = usePathname()

  const setLanguage = (lang: Language) => router.replace(pathname, { locale: lang })

  return { t, language, setLanguage }
}
```

## 3. next.config.ts

```ts
import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin('./i18n/request.ts')
// ... nextConfig wie gehabt
export default withNextIntl(nextConfig)
```

## 4. App-Struktur umbauen

```
app/
  layout.tsx           ← wird zum Passthrough: export default ({children}) => children
  page.tsx             ← redirect('/de')
  [locale]/
    layout.tsx         ← der echte Layout (Fonts, Metadata, JSON-LD, NextIntlClientProvider)
    page.tsx
    impressum/page.tsx
    datenschutz/page.tsx
```

Im `[locale]/layout.tsx`:

```tsx
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
```

und `...getI18nMetadata(locale)` in `generateMetadata`.

## 5. Texte auslagern

`messages/de.json` und `messages/en.json` anlegen, alle Strings aus dem JSX
dorthin verschieben, im Code `useTranslations('bereich')` verwenden.

## 6. Nicht vergessen

- `app/sitemap.ts` — beide Locale-URLs eintragen
- `app/llms.txt/route.ts` — beide Sprachen erwähnen
- `<html lang={locale}>` statt fix `lang="de"`
- Sprachumschalter in `Nav.tsx` (wird dadurch Client Component)
- OG `locale`: `de_CH` bzw. `en_US`

## Übersetzte Slugs

Erst machen, wenn es wirklich gebraucht wird (`/de/ueber-uns` vs `/en/about`).
Braucht Redirect-Logik im Middleware. Für die meisten Seiten den Aufwand nicht wert.
