import { Resend } from 'resend'
import { siteConfig } from '@/config/site'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return Response.json({ error: 'Fehlende Felder' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: `${siteConfig.name} Website <noreply@${new URL(siteConfig.url).hostname}>`,
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
