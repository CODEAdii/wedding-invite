import { useEffect, useState } from 'react'
import EnvelopeIntro from './components/EnvelopeIntro'
import CardDeck from './components/CardDeck'
import Petals from './components/Petals'
import { CornerFlourish, Mandala } from './components/Ornaments'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [introGone, setIntroGone] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('locked', !opened)
  }, [opened])

  return (
    <>
      {!introGone && (
        <EnvelopeIntro onReveal={() => setOpened(true)} onDone={() => setIntroGone(true)} />
      )}

      <main className={`stage ${opened ? 'is-open' : ''}`}>
        <Mandala className="stage-mandala stage-mandala-left" />
        <Mandala className="stage-mandala stage-mandala-right" />

        <div className="stage-frame" aria-hidden="true">
          <CornerFlourish className="corner corner-tl" />
          <CornerFlourish className="corner corner-tr" />
          <CornerFlourish className="corner corner-bl" />
          <CornerFlourish className="corner corner-br" />
        </div>

        <Petals active={opened} />

        <CardDeck active={opened} />
      </main>
    </>
  )
}
