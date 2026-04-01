import { useTranslations } from 'next-intl'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <>
      <Nav />
      <main>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </main>
      <Footer />
    </>
  )
}
