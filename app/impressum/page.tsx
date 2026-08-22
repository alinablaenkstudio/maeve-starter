import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <main className="legal">
      <h1>Impressum</h1>

      <h2>Verantwortlich für den Inhalt</h2>
      <address>
        FIRMENNAME
        <br />
        STRASSE NR.
        <br />
        PLZ ORT
        <br />
        Schweiz
      </address>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <br />
        Telefon: +41 XX XXX XX XX
      </p>

      <h2>Handelsregister</h2>
      <p>UID: CHE-XXX.XXX.XXX</p>

      <h2>Webdesign &amp; Entwicklung</h2>
      <p>maeve studio, ein Angebot der blaenk studio GmbH, Zürich.</p>
    </main>
  )
}
