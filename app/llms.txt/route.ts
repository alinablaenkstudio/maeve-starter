import { siteConfig } from '@/config/site'

export const dynamic = 'force-static'

export function GET() {
  const { name, url, email } = siteConfig

  const body = `# ${name}

> Kurzbeschreibung des Angebots für AI-Crawler. Ein bis drei Sätze,
> die erklären was das Unternehmen macht und für wen.

## Unternehmen

- Name: ${name}
- Standort: ORT, Schweiz
- Website: ${url}
- Kontakt: ${email}

## Wichtige Seiten

- [Start](${url}): Übersicht über das Angebot
- [Impressum](${url}/impressum): Rechtliche Angaben
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
