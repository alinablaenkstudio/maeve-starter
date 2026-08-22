import Link from 'next/link'
import { siteConfig } from '@/config/site'

// Struktur, kein Design. Markup und Klassen im Projekt frei anpassen.
export default function Nav() {
  return (
    <header>
      <nav>
        <Link href="/">{siteConfig.name}</Link>
      </nav>
    </header>
  )
}
