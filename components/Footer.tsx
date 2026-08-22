import Link from 'next/link'

// Impressum und Datenschutz gehören in der Schweiz in den Footer.
// Alles Weitere pro Projekt.
export default function Footer() {
  return (
    <footer>
      <Link href="/impressum">Impressum</Link>
      <Link href="/datenschutz">Datenschutz</Link>
    </footer>
  )
}
