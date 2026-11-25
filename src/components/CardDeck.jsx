import { useCallback, useEffect, useRef, useState } from 'react'
import { CornerFlourish, Mandala } from './Ornaments'
import CoverPage from './pages/CoverPage'
import CountdownPage from './pages/CountdownPage'
import CelebrationsPage from './pages/CelebrationsPage'
import VenuePage from './pages/VenuePage'
import GalleryPage from './pages/GalleryPage'
import ClosingPage from './pages/ClosingPage'

const pages = [
  { key: 'cover', label: 'The invitation' },
  { key: 'countdown', label: 'Save the date' },
  { key: 'celebrations', label: 'The celebrations' },
  { key: 'venue', label: 'The venue' },
  { key: 'gallery', label: 'Our moments' },
  { key: 'closing', label: 'With love' },
]

function Chevron({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M14.5 5.5 8 12l6.5 6.5' : 'M9.5 5.5 16 12l-6.5 6.5'}
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function CardDeck({ active }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const indexRef = useRef(0)
  const touchStart = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => {
    indexRef.current = index
  }, [index])

  const go = useCallback((delta) => {
    const total = pages.length
    const next = (indexRef.current + delta + total) % total
    setDirection(delta > 0 ? 1 : -1)
    setIndex(next)
  }, [])

  const jumpTo = useCallback((target) => {
    if (target === indexRef.current) return
    setDirection(target > indexRef.current ? 1 : -1)
    setIndex(target)
  }, [])

  useEffect(() => {
    if (!active) return
    const onKey = (event) => {
      const tag = event.target?.tagName?.toLowerCase()
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        go(1)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        go(-1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, go])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 })
  }, [index])

  const onTouchStart = (event) => {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const onTouchEnd = (event) => {
    if (!touchStart.current) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y
    touchStart.current = null
    if (event.target.closest('input, select, textarea, button, a')) return
    if (Math.abs(dx) > 46 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      go(dx < 0 ? 1 : -1)
    }
  }

  let page
  switch (pages[index].key) {
    case 'countdown':
      page = <CountdownPage />
      break
    case 'celebrations':
      page = <CelebrationsPage />
      break
    case 'venue':
      page = <VenuePage />
      break
    case 'gallery':
      page = <GalleryPage />
      break
    case 'closing':
      page = <ClosingPage onReplay={() => window.location.reload()} />
      break
    default:
      page = <CoverPage onNext={() => go(1)} />
  }

  return (
    <div
      className="deck"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="group"
      aria-roledescription="wedding invitation card"
      aria-label={`${pages[index].label}, card ${index + 1} of ${pages.length}`}
    >
      <article className="invite-card">
        <CornerFlourish className="corner corner-tl" />
        <CornerFlourish className="corner corner-tr" />
        <CornerFlourish className="corner corner-bl" />
        <CornerFlourish className="corner corner-br" />

        <div className="card-watermark" aria-hidden="true">
          <Mandala />
        </div>

        <div className="card-top">
          <span className="card-mono">A ✦ K</span>
          <span className="card-date">22 · 02 · 2027</span>
        </div>

        <div className="card-body" ref={bodyRef}>
          <div
            key={pages[index].key}
            className="card-page"
            data-dir={direction > 0 ? 'next' : 'prev'}
          >
            {page}
          </div>
        </div>

        <footer className="card-nav">
          <button
            type="button"
            className="nav-arrow"
            onClick={() => go(-1)}
            aria-label="Previous card"
          >
            <Chevron direction="left" />
          </button>

          <div className="nav-dots" role="tablist" aria-label="Invitation cards">
            {pages.map((item, i) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={item.label}
                className={`nav-dot ${i === index ? 'active' : ''}`}
                onClick={() => jumpTo(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="nav-arrow"
            onClick={() => go(1)}
            aria-label="Next card"
          >
            <Chevron direction="right" />
          </button>
        </footer>

        <p className="sr-only" aria-live="polite">
          {pages[index].label}
        </p>
      </article>
    </div>
  )
}
