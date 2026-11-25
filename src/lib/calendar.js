export function downloadIcs() {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Aditya and Komal Wedding//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    'UID:aditya-komal-wedding-20270222@invite',
    'DTSTAMP:20260101T000000Z',
    'DTSTART:20270222T043000Z',
    'DTEND:20270222T083000Z',
    'SUMMARY:Wedding of Aditya & Komal',
    'LOCATION:The Grand Palace Lawns, Amer Road, Jaipur, Rajasthan',
    'DESCRIPTION:Celebrate the wedding of Aditya and Komal. Muhurat at 10:00 AM IST. Please arrive by 9:30 AM.',
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Aditya-Komal-Wedding.ics'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1500)
}

export const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+Lawns+Amer+Road+Jaipur'
