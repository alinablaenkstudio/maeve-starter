# CLAUDE.md — [Projektname]

## Projekt-Übersicht

| | |
|---|---|
| **Kunde** | [Kundenname] |
| **Domain** | [yourdomain.com] |
| **E-Mail** | [hello@yourdomain.com] |
| **Paket** | Foundation / Signature / Atelier |
| **Go-Live** | [Datum] |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, Server Components) |
| Language | TypeScript 5 |
| i18n | next-intl v4 (URL-based: `/de/...`, `/en/...`) |
| Styling | Native CSS (no Tailwind) |
| Hosting | Vercel |

## i18n

- Locales: `['de', 'en']`
- Default locale: `de`
- URL-based routing: `/de/...`, `/en/...`

## Projektentscheide

- [ ] Sprache(n): DE only / EN only / DE + EN
- [ ] Kontaktformular: ja / nein
- [ ] Blog: ja / nein
- [ ] Analytics: Vercel Analytics / Plausible / keine
- [ ] Cookie-Banner: ja (falls Ads/Pixel) / nein

## Seiten

- `/[locale]` — Homepage
- `/[locale]/impressum` — Impressum
- `/[locale]/datenschutz` — Datenschutz
- (weitere Seiten hier ergänzen)

## Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| `config/site.ts` | Name, URL, E-Mail — hier ändern, nicht im Code |
| `messages/de.json` | Alle deutschen Texte |
| `messages/en.json` | Alle englischen Texte |
| `app/[locale]/layout.tsx` | Metadata, JSON-LD, Fonts |
| `lib/i18n-metadata.ts` | Hreflang + canonical helper |

## Konventionen

- Alle Texte kommen aus `messages/[locale].json` — nie hardcoden
- URLs und Site-Name kommen aus `config/site.ts` — nie hardcoden
- Eine Komponente pro Datei in `components/`
- Server Components by default, `'use client'` nur wenn nötig (z.B. Sprachumschalter)

## Status

- [ ] config/site.ts befüllt
- [ ] messages/de.json + en.json befüllt
- [ ] Impressum + Datenschutz mit echten Daten befüllt
- [ ] Fonts eingebunden
- [ ] Design/CSS umgesetzt
- [ ] Vercel Projekt eingerichtet
- [ ] Domain verbunden
