import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <main className="legal">
      <h1>Datenschutzerklärung</h1>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend
        erfahren Sie, welche Daten beim Besuch dieser Website bearbeitet werden.
      </p>

      <h2>Verantwortliche Stelle</h2>
      <address>
        FIRMENNAME
        <br />
        STRASSE NR., PLZ ORT
        <br />
        UID: CHE-XXX.XXX.XXX
        <br />
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </address>

      <h2>Server-Logs</h2>
      <p>
        Beim Aufruf dieser Website werden automatisch technische Daten
        protokolliert: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite,
        Browsertyp und Betriebssystem. Diese Daten dienen dem sicheren Betrieb
        der Website und werden nicht mit anderen Datenquellen zusammengeführt.
      </p>

      <h2>Kontaktformular</h2>
      <p>
        Wenn Sie das Kontaktformular nutzen, werden Name, E-Mail-Adresse und
        Ihre Nachricht per E-Mail an uns übermittelt. Der Versand erfolgt über
        Resend (Resend, Inc., USA). Wir verwenden diese Angaben ausschliesslich
        zur Beantwortung Ihrer Anfrage.
      </p>

      <h2>Cookies</h2>
      <p>Diese Website verwendet keine Cookies und kein Tracking zu Werbezwecken.</p>

      <h2>Statistik</h2>
      <p>
        Zur Reichweitenmessung nutzen wir Vercel Analytics. Die Auswertung
        erfolgt anonymisiert und ohne Cookies; es werden keine Profile über
        einzelne Personen erstellt.
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird von Vercel Inc. (USA) gehostet. Weitere Informationen
        finden Sie unter{' '}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          vercel.com/legal/privacy-policy
        </a>
        .
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
        Einschränkung der Bearbeitung Ihrer Daten. Wenden Sie sich dafür an{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </main>
  )
}
