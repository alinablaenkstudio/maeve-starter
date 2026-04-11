# CLAUDE.md — [Projektname]

<!-- ONBOARDING-HINWEIS: Diese Datei ist ein Template und muss beim Projekt-Setup mit echten Kundendaten befüllt werden. Platzhalter [in eckigen Klammern] ersetzen. i18n-Abschnitt entfernen falls nur eine Sprache. -->

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

## i18n entfernen (falls nur eine Sprache)

Wenn das Projekt nur eine Sprache hat, muss i18n komplett entfernt werden:

1. Alle Seiten von `app/[locale]/` nach `app/` verschieben
2. `app/[locale]/layout.tsx` → wird zu `app/layout.tsx` (ohne Locale-Parameter, `lang="de"` oder `lang="en"` fix setzen)
3. `next-intl` deinstallieren (`npm uninstall next-intl`)
4. `messages/`-Ordner löschen — Texte direkt im JSX schreiben
5. `i18n/`-Ordner löschen (routing.ts, request.ts)
6. `lib/i18n-metadata.ts` löschen — Canonical/Hreflang direkt in layout.tsx
7. `next.config.ts` — next-intl Plugin entfernen falls vorhanden
8. `useTranslations()` durch direkte Texte ersetzen in allen Seiten/Komponenten
9. In dieser CLAUDE.md: i18n-Abschnitt entfernen, Tech Stack anpassen, Seiten-Pfade aktualisieren (z.B. `/impressum` statt `/[locale]/impressum`)

## Design-Workflow

**Kein HTML-Mockup als Zwischenschritt.** Design immer direkt als Next.js Components + CSS implementieren.
Preview-Server starten, Screenshot zeigen, iterieren — nie in HTML vorbauen.

**Legal-Seiten beim Redesign nicht vergessen:** Wenn `globals.css` neu aufgebaut wird (neue Farben, Fonts, Layout), müssen die `.legal`-Styles für Impressum und Datenschutz immer mit angepasst werden. Diese Seiten sollen das gleiche Look & Feel haben wie der Rest der Website.

## Status

- [ ] config/site.ts befüllt
- [ ] messages/de.json + en.json befüllt
- [ ] Impressum + Datenschutz mit echten Daten befüllt
- [ ] Fonts eingebunden
- [ ] Design/CSS umgesetzt
- [ ] Vercel Projekt eingerichtet
- [ ] Domain verbunden
