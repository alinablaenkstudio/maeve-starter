import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Nav() {
  return (
    <nav>
      <Link href="/">{siteConfig.name}</Link>
      <Link href="/#kontakt">Kontakt</Link>
    </nav>
  )
}
