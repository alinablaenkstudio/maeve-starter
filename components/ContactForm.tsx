'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError('')
    const data = new FormData(e.currentTarget)

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
        website: data.get('website'),
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    setSending(false)
    if (res.ok) {
      setSent(true)
    } else if (res.status === 429) {
      setError('Zu viele Anfragen — bitte versuche es später nochmals.')
    } else {
      setError('Etwas ist schiefgelaufen — bitte versuche es nochmals.')
    }
  }

  if (sent) {
    return <p className="form__success">Vielen Dank — ich melde mich bald.</p>
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Dein Name" required />
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" name="email" placeholder="deine@email.ch" required />
      </div>
      <div>
        <label htmlFor="message">Nachricht</label>
        <textarea id="message" name="message" placeholder="Wie kann ich dir helfen?" required />
      </div>

      {/* Honeypot — vor Menschen versteckt, Bots füllen es aus. Nicht entfernen. */}
      <div className="form__hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error && <p className="form__error">{error}</p>}
      <button type="submit" className="form__submit" disabled={sending}>
        {sending ? 'Wird gesendet…' : 'Senden'}
      </button>
    </form>
  )
}
