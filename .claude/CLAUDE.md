# CLAUDE.md — [Projektname]

<!-- TEMPLATE: Beim Setup mit echten Kundendaten befüllen. Platzhalter [in eckigen Klammern] ersetzen. -->

## Projekt-Übersicht

| | |
|---|---|
| **Kunde** | [Kundenname] |
| **Domain** | [yourdomain.ch] |
| **E-Mail** | [hello@yourdomain.ch] |
| **Adresse** | [Strasse, PLZ Ort] |
| **Telefon** | [+41 XX XXX XX XX] |
| **Paket** | Foundation / Signature / Atelier |
| **Go-Live** | [Datum] |
| **Gestartet** | [Datum] |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, Server Components) |
| Language | TypeScript 5 |
| Sprache | DE-only (i18n siehe `docs/i18n-add-on.md`) |
| Styling | Native CSS in `app/globals.css` — kein Tailwind. Design kommt vom Projekt, der Starter liefert nur den Reset. |
| Formular | Resend über `app/api/contact/route.ts` |
| Analytics | Vercel Analytics |
| Hosting | Vercel |

## Farbpalette

<!-- Pro Projekt festlegen. Der Starter gibt bewusst keine Farben vor. -->

## Projektentscheide

- [ ] Sprache: DE-only / DE + EN
- [ ] Seitenstruktur: One-Pager / Mehrseiter
- [ ] Kontaktformular: ja / nein / nur E-Mail-Link
- [ ] Blog: ja / nein / später
- [ ] FAQ: ja / nein
- [ ] Analytics: Vercel Analytics (Standard, kein Cookie-Banner)
- [ ] Cookie-Banner: nur nötig falls Google Ads / Meta Pixel

## Positionierung

<!-- Was ist das Angebot, für wen, welche Leitbegriffe für SEO, welche Abgrenzung. -->

## Seiten

- `/` — Homepage
- `/impressum`
- `/datenschutz`

## Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| `config/site.ts` | Name, URL, E-Mail — single source of truth, nie hardcoden |
| `app/layout.tsx` | Metadata, OG, JSON-LD, Fonts |
| `app/page.tsx` | Homepage |
| `app/globals.css` | Design-Tokens + alle Styles |
| `app/llms.txt/route.ts` | llms.txt für AI-Crawler |
| `app/api/contact/route.ts` | Formular-Versand (Honeypot + Rate-Limit) |
| `scripts/make-og.sh` | OG-Image aus Hero-Bild erzeugen |

## Kontaktformular / Resend

- Absender ist fix `noreply@blaenkstudio.com` — Kundendomains werden in Resend
  **nicht** verifiziert. Der Gratis-Plan erlaubt eine Domain, die teilen sich
  alle maeve-Projekte. Details in `~/dev/STANDARDS.md` → E-Mail-Setup.
- Empfänger ist `siteConfig.email`, `replyTo` ist die anfragende Person.
- Pro Projekt nur: API Key in Resend anlegen, `RESEND_API_KEY` in Vercel
  hinterlegen (Production **und** Preview). Ohne Key gibt das Formular in
  Produktion still 500 zurück.
- Schutz: Honeypot-Feld `website` + In-Memory-Rate-Limit (3 pro 10 Min pro IP).
  Bei ernsthaftem Spam Cloudflare Turnstile ergänzen.

## Konventionen

- Texte direkt im JSX — kein i18n, keine Message-Files
- URL, Name, E-Mail aus `config/site.ts`
- Eine Komponente pro Datei in `components/`
- Server Components by default, `'use client'` nur wo nötig
- CSS in `app/globals.css`, Design-Tokens als CSS-Variablen unter `:root`
- Gestaltung immer aus dem Projekt heraus entwickeln, nie aus dem Starter oder
  aus einem anderen maeve-Projekt übernehmen — sonst gleichen sich die Seiten an

## Design-Workflow

**Kein HTML-Mockup als Zwischenschritt.** Design direkt als Next.js Components + CSS.
Preview-Server starten, Screenshot zeigen, iterieren.

**Legal-Seiten beim Redesign mitziehen:** Wenn `globals.css` neu aufgebaut wird,
müssen Impressum, Datenschutz und 404 mitgestylt werden. Sie haben keine
eigenen Klassen — das Projekt entscheidet, wie sie angebunden werden.
Diese Seiten sollen dasselbe Look & Feel haben wie der Rest.

## Status

- [ ] `config/site.ts` befüllt
- [ ] Impressum + Datenschutz mit echten Kundendaten
- [ ] Fonts eingebunden
- [ ] Design/CSS umgesetzt
- [ ] `app/icon.png` + `public/og-social.jpg`
- [ ] JSON-LD in `app/layout.tsx` an das Geschäft angepasst
- [ ] `app/llms.txt/route.ts` befüllt
- [ ] GitHub Repo + Vercel Projekt
- [ ] `RESEND_API_KEY` in Vercel
- [ ] Domain verbunden
