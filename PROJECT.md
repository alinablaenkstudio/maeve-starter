# PROJECT: [Kundenname]

> Kopiere dieses Template für jedes neue Kundenprojekt.
> Arbeite es mit Claude Code ab: "Prüf ob [X] erledigt ist und hak es ab."

---

## 1. Projektentscheide

Diese Entscheidungen müssen VOR dem Start getroffen werden. Besprich sie im Kick-off mit dem Kunden.

**Grundlagen**
- [ ] Projektname & Repo-Name festgelegt (`maeve-[kundenname]`)
- [ ] Domain geklärt (Kunde hat Domain / muss noch registriert werden)
- [ ] Sprache(n): nur DE / nur EN / DE + EN
- [ ] Default-Locale festgelegt (bei bilingual)

**Umfang**
- [ ] Seitenstruktur definiert (welche Seiten braucht es?)
- [ ] Kontaktformular: ja / nein / nur E-Mail-Link
- [ ] Blog: ja / nein / später
- [ ] FAQ-Bereich: ja / nein
- [ ] Newsletter-Signup: ja / nein

**Analytics & Tracking**
- [ ] Vercel Analytics (Standard — kein Cookie-Banner nötig)
- [ ] Google Ads / Meta Pixel: ja / nein (→ falls ja: Cookie-Banner + Datenschutz erweitern)
- [ ] Plausible: ja / nein (optional, kein Cookie-Banner nötig)

**Wartungsmodell**
- [ ] Kein CMS, kein Client-Login (maeve Standard)
- [ ] Änderungen per E-Mail an maeve → Update via Claude Code
- [ ] Wartung im Hosting-Preis inkludiert: ja / nein / bis X Änderungen/Monat

**Sonstiges**
- [ ] Budget / Paket besprochen (Foundation / Signature / Atelier)
- [ ] Timeline festgelegt (Start → Go-Live Datum)
- [ ] Ansprechperson beim Kunden definiert

---

## 2. Google Drive Ordner einrichten

```
[Kundenname]/
├── Shared/                    ← dem Kunden freigegeben
│   ├── 00_Onboarding.pdf      ← Checkliste was der Kunde liefern muss
│   ├── 01_Assets-vom-Kunden/  ← Kunde lädt hier hoch: Logos, Fotos, Texte
│   └── 02_Feedback/           ← Screenshots, Anmerkungen vom Kunden
├── Assets-Processing/         ← Mirco: JPG→WebP, Illustrationen→SVG
│   ├── Input/                 ← Rohdaten aus Shared rein
│   └── Output/                ← Fertige Assets für den Code
└── Notizen/                   ← interne Notizen, Briefings, Entwürfe
```

- [ ] Google Drive Ordner erstellt
- [ ] Shared-Ordner mit Kunden geteilt
- [ ] Onboarding PDF in Shared abgelegt
- [ ] Mirco über Asset-Processing-Ordner informiert

---

## 3. Content & Assets vom Kunden

> Alles was der Kunde liefern muss, bevor du mit dem Bauen anfängst.

**Texte**
- [ ] Firmenname (exakte Schreibweise)
- [ ] Claim / Tagline
- [ ] Über-uns Text oder Stichpunkte
- [ ] Texte pro Seite (oder Stichpunkte die wir ausformulieren)
- [ ] FAQ-Fragen + Antworten (falls FAQ)
- [ ] Kontakt-Infos: E-Mail, Telefon, Adresse

**Rechtliches (für Impressum & Datenschutz)**
- [ ] Vollständiger Firmenname / Vereinsname
- [ ] Rechtsform (GmbH, AG, Verein, Einzelunternehmen)
- [ ] UID-Nummer (falls vorhanden)
- [ ] Adresse
- [ ] Kontakt-E-Mail (die im Impressum steht)

**Bilder & Design**
- [ ] Logo (idealerweise SVG oder PNG mit transparentem Hintergrund)
- [ ] Favicon (falls eigenes gewünscht, sonst aus Logo generieren)
- [ ] Fotos geliefert (JPG/PNG → Mirco konvertiert zu WebP)
- [ ] Illustrationen geliefert (→ SVG-Format)
- [ ] OG-Image erstellt: statisches JPEG 1200×630px, max 300KB → `public/og-social.jpg` (mit Overlay via ImageMagick, direkt in metadata referenzieren — KEIN opengraph-image.tsx, das gibt 800KB PNG aus und WhatsApp zeigt Favicon)
- [ ] Farbpalette festgelegt (Primary, Secondary, Accent)
- [ ] Schriften festgelegt (Google Fonts oder Custom)

**Domain & Hosting**
- [ ] Kunde hat Domain (Registrierung ist Sache des Kunden)
- [ ] Kunde hat Zugang zu seinem Domain-Provider (GoDaddy, Hostpoint, etc.)
- [ ] DNS-Anleitung für Vercel an Kunden geschickt (CNAME / A-Record)
- [ ] E-Mail-Setup: Resend (Formular-Versand) + Google Workspace (Kundenpostfach) sind zwei separate Sachen → STANDARDS.md → E-Mail-Setup

---

## 4. Technisches Setup

> Referenz: ~/dev/STANDARDS.md

**Repo & Projekt**
- [ ] Repo erstellt: `maeve-[kundenname]`
- [ ] Next.js Projekt initialisiert (App Router)
- [ ] TypeScript konfiguriert
- [ ] Tailwind CSS installiert + konfiguriert
- [ ] Farbtoken als CSS-Variablen in globals.css definiert
- [ ] Custom Fonts eingebunden (public/fonts/ oder Google Fonts)
- [ ] CLAUDE.md erstellt mit Projektinfos

**i18n (falls mehrsprachig)**
- [ ] next-intl v4 installiert
- [ ] i18n/routing.ts — Locales + Default definiert
- [ ] i18n/request.ts — Message-Loader
- [ ] i18n/navigation.ts — Custom Link, useRouter
- [ ] middleware.ts — Locale Detection + Redirects
- [ ] messages/de.json erstellt
- [ ] messages/en.json erstellt
- [ ] language-context.tsx eingerichtet
- [ ] Language Switcher Komponente gebaut

**Seitenstruktur**
- [ ] app/layout.tsx — Root Layout (Fonts, Metadata)
- [ ] app/[locale]/layout.tsx — Locale Layout (Provider, Nav, Footer)
- [ ] app/[locale]/page.tsx — Homepage
- [ ] Weitere Seiten gemäss Projektentscheid angelegt
- [ ] Navigation Komponente
- [ ] Footer Komponente

**Config-Struktur (nach blaenk-Muster)**
- [ ] config/site.ts — Seitenname, URL, Social Links
- [ ] config/legal.ts — Impressum + Datenschutz Inhalte
- [ ] config/faq.ts (falls FAQ)
- [ ] config/contact.ts (falls Kontaktformular)
- [ ] Weitere Config-Dateien nach Bedarf

---

## 5. Features einbauen

**Kontaktformular (falls ja)**
- [ ] Formular-Komponente gebaut (React Hook Form + Zod)
- [ ] Server Action: E-Mail senden (Resend)
- [ ] Captcha: Cloudflare Turnstile
- [ ] Erfolgs- / Fehlermeldung im UI
- [ ] E-Mail-Template erstellt

**Blog (falls ja)**
- [ ] Route: app/[locale]/blog/page.tsx + [slug]/page.tsx
- [ ] content/blog/ Ordner mit MDX-Dateien
- [ ] config/blog.ts — Post-Metadaten
- [ ] lib/blog.ts — getPostBySlug(), formatDate()
- [ ] MDX-Komponenten (h2, h3, p, blockquote, ul, ol, Figure)
- [ ] Post-Card Komponente
- [ ] Blog-Layout mit max-w-[720px] Lesebreite
- [ ] RSS Feed: app/[locale]/feed.xml/route.ts

**Cookie-Banner (nur falls Google Ads / Meta Pixel)**
- [ ] Cookie-Consent Komponente eingebaut
- [ ] Tracking erst nach Zustimmung laden
- [ ] Datenschutz entsprechend erweitert

---

## 6. SEO

> Referenz: ~/dev/STANDARDS.md → SEO Baseline

**Technisch**
- [ ] app/robots.ts existiert mit korrekter Sitemap-URL
- [ ] app/sitemap.ts existiert und listet alle Locale-URLs
- [ ] generateMetadata mit alternates (canonical + hreflang) pro Seite
- [ ] OG-Image vorhanden (1200×630px, JPG)
- [ ] Favicon vorhanden (app/icon.png)
- [ ] JSON-LD: mindestens LocalBusiness + WebSite
- [ ] JSON-LD: FAQPage (falls FAQ vorhanden)
- [ ] JSON-LD: BlogPosting + BreadcrumbList (falls Blog)
- [ ] Security Headers in next.config.ts (alle 5)
- [ ] poweredByHeader: false in next.config.ts

**Inhaltlich**
- [ ] Title-Tags inkl. Standort-Keyword (falls lokales Business)
- [ ] Meta-Descriptions für alle Seiten (max 155 Zeichen)
- [ ] Heading-Hierarchie korrekt: H1 → H2 → H3 (kein Überspringen)
- [ ] Kein `<div>` wo semantisch ein Heading hingehört
- [ ] Alle Bilder haben Alt-Text
- [ ] Keine Platzhalter-Links (href="#")
- [ ] Alle externen Links: target="_blank" rel="noopener noreferrer"

---

## 7. Legal

> Referenz: ~/dev/STANDARDS.md → Legal pages

- [ ] app/[locale]/impressum/page.tsx erstellt
- [ ] app/[locale]/datenschutz/page.tsx erstellt
- [ ] Impressum enthält: Firmenname, Adresse, UID, Kontakt-E-Mail
- [ ] Datenschutz enthält: Verantwortliche Stelle, Server-Logs, Hosting (Vercel)
- [ ] Datenschutz erweitert falls: Kontaktformular / Analytics / Tracking
- [ ] Beide Seiten im Footer verlinkt
- [ ] Beide Seiten: robots: { index: false, follow: false }
- [ ] Optional: "Webdesign & Development by maeve studio" im Impressum

---

## 8. Pre-Launch Check

> Geh diese Liste komplett durch bevor du die Seite live schaltest.

**Visuell**
- [ ] Alle Seiten auf Desktop getestet
- [ ] Alle Seiten auf Mobile getestet (Chrome DevTools)
- [ ] Kein Placeholder-Text oder -Bilder sichtbar
- [ ] Dark Mode getestet (falls implementiert)
- [ ] Alle Links funktionieren
- [ ] Formulare getestet (E-Mail kommt an)
- [ ] Favicon sichtbar im Browser-Tab
- [ ] OG-Image Vorschau getestet (z.B. opengraph.xyz)

**Performance**
- [ ] Lighthouse Score ≥ 90 (Performance, Accessibility, SEO)
- [ ] Bilder optimiert (WebP, korrekte Grössen)
- [ ] Keine ungenutzten Dependencies

**Deployment**
- [ ] Vercel Projekt eingerichtet
- [ ] Environment Variables gesetzt (falls nötig: RESEND_API_KEY, etc.)
- [ ] Custom Domain in Vercel hinzugefügt
- [ ] DNS-Anleitung an Kunden geschickt (Kunde ändert DNS selbst oder wir machen es gemeinsam per Screenshare)
- [ ] SSL-Zertifikat aktiv (Vercel macht das automatisch)
- [ ] Vercel Analytics aktiviert
- [ ] Preview-URL an Kunden für finalen Check

---

## 9. Go-Live

- [ ] Kunde hat Preview abgenommen
- [ ] Kunde hat DNS auf Vercel umgestellt (mit unserer Anleitung oder per Screenshare)
- [ ] Seite erreichbar unter finaler Domain
- [ ] Redirect von www ↔ non-www funktioniert
- [ ] Sitemap bei Google Search Console einreichen
- [ ] Finale OG-Image Vorschau nochmal prüfen (Cache kann alt sein)

---

## 10. Nach Go-Live

- [ ] Kunden informiert: Seite ist live
- [ ] Erklärt wie Änderungswünsche ablaufen (E-Mail an uns)
- [ ] Google Search Console eingerichtet (Kunde als Owner oder wir)
- [ ] Erste Indexierung überwachen
- [ ] Nach 1 Woche: kurzer Check ob alles läuft
- [ ] Nach 1 Monat: Analytics Review mit Kunde (optional)

---

## Notizen

_Platz für projektspezifische Notizen, Entscheidungen, offene Fragen._

