import { useEffect, useRef, useState } from 'react'
import { Mandala } from './Ornaments'

export default function EnvelopeIntro({ onReveal, onDone }) {
  const [stage, setStage] = useState('closed') // closed | breaking | opening | leaving
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const open = () => {
    if (stage !== 'closed') return
    setStage('breaking')
    timers.current.push(setTimeout(() => setStage('opening'), 420))
    timers.current.push(
      setTimeout(() => {
        setStage('leaving')
        onReveal()
      }, 2150),
    )
    timers.current.push(setTimeout(() => onDone(), 3000))
  }

  const skip = () => {
    timers.current.forEach(clearTimeout)
    onReveal()
    onDone()
  }

  return (
    <div className={`intro ${stage === 'leaving' ? 'is-leaving' : ''}`}>
      <Mandala className="intro-mandala intro-mandala-left" />
      <Mandala className="intro-mandala intro-mandala-right" />
      <div className="intro-glow" />

      <div className="intro-inner">
        <p className="intro-kicker">You are cordially invited</p>

        <div className="envelope-wrap">
          <div
            className={`envelope ${stage}`}
            onClick={open}
            role="button"
            tabIndex={0}
            aria-label="Open the wedding invitation"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                open()
              }
            }}
          >
            <div className="env-back" />

            <div className="letter">
              <span className="letter-eyebrow">The wedding of</span>
              <span className="letter-names">
                Aditya <em>&amp;</em> Komal
              </span>
              <span className="letter-rule" />
              <span className="letter-date">22 · 02 · 2027</span>
              <span className="letter-place">Jaipur, India</span>
            </div>

            <div className="env-front">
              <div className="env-pocket" />
              <span className="env-to">To: You &amp; Your Family</span>
              <span className="env-stamp" aria-hidden="true">
                <span>22</span>
                <span>FEB</span>
              </span>
            </div>

            <div className="env-flap" />

            <button
              type="button"
              className="env-seal"
              onClick={(e) => {
                e.stopPropagation()
                open()
              }}
              aria-label="Break the seal and open the invitation"
            >
              <span className="seal-inner">
                <span className="seal-script">A&amp;K</span>
                <span className="seal-year">2027</span>
              </span>
            </button>
          </div>

          <p className="intro-hint">
            <span className="hint-line" />
            Tap the wax seal to open
            <span className="hint-line" />
          </p>
        </div>

        <button type="button" className="intro-skip" onClick={skip}>
          Skip the envelope
        </button>
      </div>
    </div>
  )
}
