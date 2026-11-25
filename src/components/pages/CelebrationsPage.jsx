import PageHead from './PageHead'
import { EventIcon } from '../Ornaments'
import { DholArt } from '../Art'

const events = [
  {
    icon: 'haldi',
    name: 'Haldi',
    meta: 'Sat 20 Feb · 10:00 AM · Terrace Garden',
    dress: 'Marigold yellow',
    swatch: '#e0a233',
  },
  {
    icon: 'mehndi',
    name: 'Mehndi',
    meta: 'Sat 20 Feb · 4:30 PM · Courtyard Lawns',
    dress: 'Greens & florals',
    swatch: '#3f7a5f',
  },
  {
    icon: 'sangeet',
    name: 'Sangeet',
    meta: 'Sat 20 Feb · 8:00 PM · Grand Ballroom',
    dress: 'Bollywood glam',
    swatch: '#a83a63',
  },
  {
    icon: 'baraat',
    name: 'Baraat & Wedding',
    meta: 'Mon 22 Feb · 9:00 AM · Palace Lawns',
    dress: 'Traditional Indian',
    swatch: '#8c2c2c',
  },
]

export default function CelebrationsPage() {
  return (
    <div className="page celebrations-page">
      <PageHead
        eyebrow="The celebrations"
        title="Three days of joy"
        sub="Haldi, mehndi, music and a whole lot of love."
      />

      <ul className="event-list">
        {events.map((event) => (
          <li className="event-row" key={event.name}>
            <span className="event-row-icon">
              <EventIcon name={event.icon} />
            </span>

            <span className="event-row-name">{event.name}</span>
            <span className="event-row-dress">
              <span className="event-swatch" style={{ background: event.swatch }} />
              {event.dress}
            </span>
            <span className="event-row-meta">{event.meta}</span>
          </li>
        ))}
      </ul>

      <div className="art-wrap art-dhol">
        <DholArt />
      </div>

      <p className="page-note page-note-small">
        All ceremonies at The Grand Palace Lawns, Jaipur
      </p>
    </div>
  )
}
