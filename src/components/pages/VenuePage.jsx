import PageHead from './PageHead'
import { MandapArt } from '../Art'
import { downloadIcs, MAP_URL } from '../../lib/calendar'

export default function VenuePage() {
  return (
    <div className="page venue-page">
      <PageHead eyebrow="The venue" title="Where we say “I do”" />

      <div className="art-wrap art-mandap">
        <MandapArt />
      </div>

      <p className="venue-name">The Grand Palace Lawns</p>
      <p className="venue-address">
        Amer Road, Jaipur
        <br />
        Rajasthan 302002, India
      </p>

      <div className="venue-facts">
        <div>
          <span>Baraat</span>
          <strong>9:00 AM</strong>
        </div>
        <div>
          <span>Muhurat</span>
          <strong>10:00 AM</strong>
        </div>
        <div>
          <span>Dinner</span>
          <strong>7:30 PM</strong>
        </div>
      </div>

      <div className="venue-actions">
        <a className="btn btn-gold" href={MAP_URL} target="_blank" rel="noreferrer">
          Get directions
        </a>
        <button type="button" className="btn btn-ghost" onClick={downloadIcs}>
          Save the date
        </button>
      </div>

      <p className="page-note page-note-small">
        Valet parking available · Arrive 30 minutes before the muhurat
      </p>
    </div>
  )
}
