import { Divider } from '../Ornaments'
import { CoupleArt } from '../Art'

export default function CoverPage({ onNext }) {
  return (
    <div className="page cover">
      <p className="cover-shloka">॥ श्री गणेशाय नमः ॥</p>

      <p className="eyebrow">Together with our families</p>

      <h1 className="cover-names">
        <span className="cover-name">Aditya</span>
        <span className="cover-amp" aria-hidden="true">
          &amp;
        </span>
        <span className="cover-name">Komal</span>
      </h1>

      <p className="cover-line">
        request the pleasure of your company{' '}
        <br />
        as we celebrate our wedding
      </p>

      <Divider className="cover-divider" />

      <p className="cover-date">Monday · 22 February 2027</p>
      <p className="cover-time">Muhurat at 10:00 AM</p>
      <p className="cover-venue">The Grand Palace Lawns · Jaipur</p>

      <div className="art-wrap art-cover">
        <CoupleArt />
      </div>

      <button type="button" className="cover-turn" onClick={onNext}>
        Turn the card
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 12h14M13 6.5 18.5 12 13 17.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
