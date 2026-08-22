# PROJECT: [Kundenname]

> Kopiere dieses Template für jedes neue Kundenprojekt.
> Arbeite es mit Claude Code ab: "Prüf ob [X] erledigt ist und hak es ab."

---

## 1. Projektentscheide

Diese Entscheidungen müssen VOR dem Start getroffen werden. Besprich sie im Kick-off mit dem Kunden.

**Grundlagen**
- [ ] Projektname & Repo-Name festgelegt (`maeve-[kundenname]`)
- [ ] Domain geklärt (Kunde hat Domain / muss noch registriert werden / bestehende Domain wird übernommen)
- [ ] Sprache: DE-only (Standard) / DE + EN (→ `docs/i18n-add-on.md`, **vor** dem Design entscheiden)

**Umfang**
- [ ] Seitenstruktur definiert (One-Pager oder Mehrseiter, welche Seiten?)
- [ ] Kontaktformular: ja / nein / nur E-Mail-Link
- [ ] Buchungstool-Embed: ja / nein
- [ ] Blog: ja / nein / später
- [ ] FAQ-Bereich: ja / nein
- [ ] Newsletter-Signup: ja / nein

**Analytics & Tracking**
- [ ] Vercel Analytics (Standard — im Starter drin, kein Cookie-Banner nötig)
- [ ] Google Ads / Meta Pixel: ja / nein (→ falls ja: Cookie-Banner + Datenschutz erweitern)

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
- [ ] Angebote & Preise
- [ ] FAQ-Fragen + Antworten (falls FAQ)
- [ ] Kontakt-Infos: E-Mail, Telefon, Adresse, Öffnungszeiten
- [ ] Testimonials / Google-Reviews (Name + Text, für Schema)

**Rechtliches (für Impressum & Datenschutz)**
- [ ] Vollständiger Firmenname / Vereinsname
- [ ] Rechtsform (GmbH, AG, Verein, Einzelunternehmen)
- [ ] UID-Nummer (falls vorhanden)
- [ ] Adresse
- [ ] Kontakt-E-Mail (die im Impressum steht)

**Bilder & Design**
- [ ] Logo (idealerweise SVG oder PNG mit transparentem Hintergrund)
- [ ] Favicon → `app/icon.png` (falls eigenes gewünscht, sonst aus Logo generieren)
- [ ] Fotos geliefert (JPG/PNG → Mirco konvertiert zu WebP)
- [ ] Illustrationen geliefert (→ SVG-Format)
- [ ] OG-Image erzeugt: `./scripts/make-og.sh public/images/hero.jpg "rgba(R,G,B,0.7)"`
      → statisches JPEG 1200×630, max 300KB. **Kein** `opengraph-image.tsx` —
      das gibt 800KB PNG aus und WhatsApp zeigt dann nur das Favicon.
- [ ] Farbpalette festgelegt (in `app/globals.css` als CSS-Variablen unter `:root`)
- [ ] Schriften festgelegt (Google Fonts via `next/font/google` in `app/layout.tsx`)
- [ ] Gestaltung aus dem Projekt entwickelt — **nicht** aus dem Starter oder einem
      anderen maeve-Projekt übernommen. Der Starter liefert Technik, kein Design.
      Wenn der Kunde eine bestehende Seite hat, ist deren Formensprache der
      Ausgangspunkt, nicht unsere Hausmuster.

**Domain & Hosting**
- [ ] Kunde hat Domain (Registrierung ist Sache des Kunden)
- [ ] Kunde hat Zugang zu seinem Domain-Provider (Hostpoint, Hoststar, GoDaddy, etc.)
- [ ] DNS-Anleitung für Vercel an Kunden geschickt (A-Record / CNAME)
- [ ] E-Mail-Setup: Resend (Formular-Versand) + Google Workspace (Kundenpostfach)
      sind zwei separate Sachen → `~/dev/STANDARDS.md` → E-Mail-Setup
- [ ] Resend: **keine** Kundendomain verifizieren — Absender ist fix
      `noreply@blaenkstudio.com`. Nur einen API Key pro Projekt anlegen und
      als `RESEND_API_KEY` in Vercel hinterlegen (Production **und** Preview).

---

## 4. Technisches Setup

> Referenz: `~/dev/STANDARDS.md`

**Design**
- [ ] Der Starter bringt nur einen CSS-Reset mit. Farben, Schriften, Abstände,
      Komponenten-Styles: alles pro Projekt.
- [ ] Kontrast geprüft: Fliesstext mindestens 4.5:1, grosse Schrift ab 24px
      mindestens 3:1. Helle Marken- und Pastellfarben reissen das schnell —
      rechnen statt schätzen.

**Repo & Projekt**
- [ ] Starter geklont: `git clone https://github.com/alinablaenkstudio/maeve-starter.git maeve-[kunde]`
- [ ] `.git` neu initialisiert, eigenes GitHub Repo erstellt (`maeve-[kundenname]`, privat)
- [ ] `npm install` durchgelaufen
- [ ] `config/site.ts` befüllt (Name, URL, E-Mail) — **vor** allem anderen
- [ ] `.claude/CLAUDE.md` mit Projektinfos befüllt
- [ ] Farbtoken als CSS-Variablen in `app/globals.css`
- [ ] Fonts eingebunden (`next/font/google` in `app/layout.tsx`)

**i18n (nur falls mehrsprachig)**
- [ ] `docs/i18n-add-on.md` abgearbeitet
- [ ] Sprachumschalter in `Nav.tsx`
- [ ] Sitemap + llms.txt um zweite Sprache erweitert

**Seitenstruktur**
- [ ] `app/layout.tsx` — Metadata, OG, JSON-LD, Fonts angepasst
- [ ] `app/page.tsx` — Homepage
- [ ] Weitere Seiten gemäss Projektentscheid angelegt
- [ ] `components/Nav.tsx` + `components/Footer.tsx` angepasst
- [ ] `app/not-found.tsx` gestyled

**Config-Struktur**
- [ ] `config/site.ts` — Name, URL, E-Mail
- [ ] Weitere Config-Dateien nur wo es wirklich Daten sind, die sich wiederholen
      (z.B. `config/fahrten.ts`, `config/faq.ts`) — sonst Texte direkt ins JSX

---

## 5. Features einbauen

**Kontaktformular (falls ja)**
- [ ] `components/ContactForm.tsx` ins Design integriert
- [ ] Honeypot-Feld `website` **nicht** entfernt (Spam-Schutz)
- [ ] Rate-Limit in `app/api/contact/route.ts` belassen
- [ ] Erfolgs- / Fehlermeldung gestyled
- [ ] Formular in Produktion getestet (E-Mail kommt an, Reply-To stimmt)
- [ ] Cloudflare Turnstile — nur falls tatsächlich Spam auftaucht

**Blog (falls ja)**
- [ ] `lib/posts.ts` — Post-Metadaten (Slug, Titel, Datum, Beschreibung)
- [ ] `app/blog/page.tsx` — Übersicht
- [ ] `app/blog/[slug]/page.tsx` oder eine Datei pro Post
- [ ] Lesebreite max. 720px
- [ ] `BlogPosting` + `BreadcrumbList` JSON-LD pro Post
- [ ] Posts in `app/sitemap.ts` eingetragen
- [ ] Referenz: `~/dev/maeve-massagezeiten`

**Cookie-Banner (nur falls Google Ads / Meta Pixel)**
- [ ] Cookie-Consent Komponente eingebaut
- [ ] Tracking erst nach Zustimmung laden
- [ ] Datenschutz entsprechend erweitert

---

## 6. SEO

> Referenz: `~/dev/STANDARDS.md` → SEO Baseline

**Technisch**
- [ ] `app/robots.ts` mit korrekter Sitemap-URL
- [ ] `app/sitemap.ts` listet alle Seiten
- [ ] `app/llms.txt/route.ts` befüllt
- [ ] `alternates.canonical` in jeder `metadata` / `generateMetadata`
- [ ] OG-Image vorhanden (1200×630 JPG, max 300KB)
- [ ] Favicon vorhanden (`app/icon.png`)
- [ ] JSON-LD: mindestens `WebSite` + passender Business-Typ
      (`LocalBusiness`, `HealthAndBeautyBusiness`, `ProfessionalService`, `Organization`)
- [ ] JSON-LD erweitert: `address`, `telephone`, `openingHours`, `priceRange`,
      `hasOfferCatalog`, `aggregateRating` + `review` (falls Reviews vorhanden)
- [ ] JSON-LD: `FAQPage` (falls FAQ), `BlogPosting` (falls Blog)
- [ ] Security Headers in `next.config.ts` (alle 5)
- [ ] `poweredByHeader: false`

**Inhaltlich**
- [ ] Title-Tags inkl. Standort-Keyword (bei lokalem Business)
- [ ] Meta-Descriptions für alle Seiten (max 155 Zeichen)
- [ ] Heading-Hierarchie korrekt: H1 → H2 → H3 (kein Überspringen)
- [ ] Kein `<div>` wo semantisch ein Heading hingehört
- [ ] Alle Bilder haben Alt-Text
- [ ] Keine Platzhalter-Links (`href="#"`)
- [ ] Alle externen Links: `target="_blank" rel="noopener noreferrer"`

---

## 7. Legal

> Referenz: `~/dev/STANDARDS.md` → Legal pages

- [ ] `app/impressum/page.tsx` mit echten Kundendaten
- [ ] `app/datenschutz/page.tsx` mit echten Kundendaten
- [ ] Impressum enthält: Firmenname, Adresse, UID, Kontakt-E-Mail
- [ ] Datenschutz spiegelt die **tatsächlich** eingesetzten Tools
      (Kontaktformular / Vercel Analytics / Tracking raus, falls nicht genutzt)
- [ ] Kunde ist verantwortliche Stelle — nicht blaenk studio (Kundenprojekt!)
- [ ] Beide Seiten im Footer verlinkt
- [ ] Beide Seiten: `robots: { index: false, follow: false }`
- [ ] Credit "Webdesign & Entwicklung: maeve studio" im Impressum

---

## 8. Pre-Launch Check

**Visuell**
- [ ] Alle Seiten auf Desktop getestet
- [ ] Alle Seiten auf Mobile getestet
- [ ] Kein Placeholder-Text oder -Bild sichtbar (auch nicht in Impressum/Datenschutz!)
- [ ] `app/not-found.tsx` gestyled und getestet
- [ ] Alle Links funktionieren
- [ ] Formular getestet (E-Mail kommt an)
- [ ] Favicon sichtbar im Browser-Tab
- [ ] OG-Image Vorschau getestet (opengraph.xyz)

**Performance**
- [ ] Lighthouse ≥ 90 (Performance, Accessibility, SEO)
- [ ] Bilder optimiert (WebP, korrekte Grössen)
- [ ] Keine ungenutzten Dependencies

**Deployment**
- [ ] Vercel Projekt eingerichtet, mit GitHub Repo verbunden
- [ ] `RESEND_API_KEY` gesetzt (Production **und** Preview)
- [ ] Custom Domain in Vercel hinzugefügt
- [ ] DNS-Anleitung an Kunden geschickt
- [ ] SSL aktiv (macht Vercel automatisch)
- [ ] Vercel Analytics im Dashboard aktiviert
- [ ] Preview-URL an Kunden für finalen Check

---

## 9. Go-Live

- [ ] Kunde hat Preview abgenommen
- [ ] Kunde hat DNS auf Vercel umgestellt
- [ ] Seite erreichbar unter finaler Domain
- [ ] Redirect von www ↔ non-www funktioniert
- [ ] Alte Seite: Redirects für bestehende URLs gesetzt (falls Relaunch)
- [ ] Sitemap bei Google Search Console eingereicht
- [ ] Finale OG-Image Vorschau nochmal prüfen (Cache kann alt sein)

---

## 10. Nach Go-Live

- [ ] Kunden informiert: Seite ist live
- [ ] Erklärt wie Änderungswünsche ablaufen (E-Mail an uns)
- [ ] Google Search Console eingerichtet
- [ ] Google Business Profil aktualisiert (Website-Link)
- [ ] Erste Indexierung überwachen
- [ ] Nach 1 Woche: kurzer Check ob alles läuft
- [ ] Nach 1 Monat: Analytics Review mit Kunde (optional)

---

## Notizen

_Platz für projektspezifische Notizen, Entscheidungen, offene Fragen._
