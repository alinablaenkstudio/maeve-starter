import { Resend } from 'resend'
import { siteConfig } from '@/config/site'

// Lazy: der Client darf erst im Request gebaut werden. Auf Modulebene wirft
// Resend ohne API-Key beim Build ("Missing API key") und der Build schlägt fehl,
// bevor die Env-Variable in Vercel gesetzt ist.

// Einfaches In-Memory-Limit pro IP. Überlebt keinen Cold Start und gilt nur
// pro Serverless-Instanz — hält aber simple Bots von unserem geteilten
// Resend-Kontingent fern (100 Mails/Tag über alle maeve-Projekte).
// Bei ernsthaftem Spam: Cloudflare Turnstile ergänzen.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 3
const hits = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY fehlt — Formular kann nichts senden.')
    return Response.json({ error: 'Nicht konfiguriert' }, { status: 500 })
  }

  const { name, email, message, website } = await req.json()

  // Honeypot: echte Menschen sehen dieses Feld nicht, Bots füllen es aus.
  // Wir antworten absichtlich mit ok, damit der Bot nichts lernt.
  if (website) {
    return Response.json({ ok: true })
  }

  if (!name || !email || !message) {
    return Response.json({ error: 'Fehlende Felder' }, { status: 400 })
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return Response.json({ error: 'Zu viele Anfragen' }, { status: 429 })
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: `${siteConfig.name} Website <noreply@blaenkstudio.com>`,
    to: siteConfig.email,
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
  })

  if (error) {
    console.error('Resend error:', error)
    return Response.json({ error: 'Fehler beim Senden' }, { status: 500 })
  }

  return Response.json({ ok: true })
}
