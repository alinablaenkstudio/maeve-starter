import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main>
      <h1>Seite nicht gefunden</h1>
      <p>Diese Seite existiert nicht oder wurde verschoben.</p>
      <p>
        <Link href="/">Zurück zur Startseite</Link>
      </p>
    </main>
  )
}
