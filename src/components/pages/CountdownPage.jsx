import { useEffect, useState } from 'react'
import PageHead from './PageHead'
import { downloadIcs } from '../../lib/calendar'

const TARGET = new Date('2027-02-22T10:00:00+05:30').getTime()

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const pad = (n) => String(n).padStart(2, '0')

export default function CountdownPage() {
  const [time, setTime] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: pad(time.days), label: 'Days' },
    { value: pad(time.hours), label: 'Hours' },
    { value: pad(time.minutes), label: 'Minutes' },
    { value: pad(time.seconds), label: 'Seconds' },
  ]

  return (
    <div className="page countdown-page">
      <PageHead eyebrow="Save the date" title="Counting down" />

      <div className="countdown-panel">
        <p className="countdown-kicker">To the muhurat</p>

        <div className="countdown-grid" role="timer" aria-live="off">
          {units.map((unit) => (
            <div className="countdown-unit" key={unit.label}>
              <span className="countdown-value" key={unit.value}>
                {unit.value}
              </span>
              <span className="countdown-label">{unit.label}</span>
            </div>
          ))}
        </div>

        <p className="countdown-mini">22 · 02 · 2027 · 10:00 AM</p>
      </div>

      <p className="page-note">
        Join us in Jaipur as we tie the knot.
        <br />
        <span>#AdityaWedsKomal</span>
      </p>

      <button type="button" className="btn btn-gold" onClick={downloadIcs}>
        Add to calendar
      </button>
    </div>
  )
}
