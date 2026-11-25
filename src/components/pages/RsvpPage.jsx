import { useState } from 'react'
import PageHead from './PageHead'

export default function RsvpPage() {
  const [attending, setAttending] = useState('yes')
  const [name, setName] = useState('')
  const [guests, setGuests] = useState('1')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(null)

  const submit = (event) => {
    event.preventDefault()
    if (!name.trim()) return
    setSent({ name: name.trim(), attending })
  }

  return (
    <div className="page rsvp-page">
      <PageHead
        eyebrow="Kindly respond"
        title="Will you join us?"
        sub="Please let us know by 20 January 2027."
      />

      {sent ? (
        <div className="rsvp-success" role="status">
          <span className="rsvp-success-mark" aria-hidden="true">
            ✓
          </span>
          <h3>Thank you, {sent.name.split(' ')[0]}!</h3>
          <p>
            {sent.attending === 'yes'
              ? 'Your RSVP is noted — we cannot wait to celebrate with you in Jaipur.'
              : 'We will miss you dearly, but your blessings mean the world to us.'}
          </p>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setSent(null)
              setName('')
              setMessage('')
              setGuests('1')
              setAttending('yes')
            }}
          >
            Send another response
          </button>
        </div>
      ) : (
        <form className="rsvp-form" onSubmit={submit}>
          <div className="rsvp-toggle" role="group" aria-label="Will you attend?">
            <button
              type="button"
              className={`rsvp-toggle-btn ${attending === 'yes' ? 'active' : ''}`}
              onClick={() => setAttending('yes')}
              aria-pressed={attending === 'yes'}
            >
              Joyfully accepts
            </button>
            <button
              type="button"
              className={`rsvp-toggle-btn ${attending === 'no' ? 'active' : ''}`}
              onClick={() => setAttending('no')}
              aria-pressed={attending === 'no'}
            >
              Regretfully declines
            </button>
          </div>

          <div className="field-row">
            <label className="field">
              <span className="field-label">Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                autoComplete="name"
                required
              />
            </label>

            <label className="field field-guests">
              <span className="field-label">Guests</span>
              <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span className="field-label">A note for the couple</span>
            <textarea
              rows="2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Wishes or a song request…"
            />
          </label>

          <button type="submit" className="btn btn-gold rsvp-submit" disabled={!name.trim()}>
            Send RSVP
          </button>
        </form>
      )}
    </div>
  )
}
