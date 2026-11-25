import { Divider } from '../Ornaments'
import { CoupleArt } from '../Art'

export default function ClosingPage({ onReplay }) {
  return (
    <div className="page closing-page">
      <div className="art-wrap art-couple">
        <CoupleArt />
      </div>

      <p className="eyebrow">With love and blessings</p>

      <p className="closing-names">Aditya &amp; Komal</p>

      <Divider />

      <p className="closing-date">22 February 2027 · Jaipur</p>
      <p className="closing-hashtag">#AdityaWedsKomal</p>

      <p className="closing-shloka">॥ शुभ विवाह ॥</p>

      <button type="button" className="closing-replay" onClick={onReplay}>
        Open the envelope again
      </button>
    </div>
  )
}
