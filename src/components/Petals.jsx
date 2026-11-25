import { useMemo } from 'react'

const COLORS = ['#e2a13c', '#d9867f', '#c9a24b', '#e6b96a', '#cf8f4a']

export default function Petals({ active }) {
  const petals = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => {
        const size = 6 + Math.random() * 6
        return {
          id: i,
          left: Math.random() * 100,
          size,
          delay: Math.random() * 18,
          duration: 16 + Math.random() * 16,
          drift: (Math.random() - 0.5) * 22,
          color: COLORS[i % COLORS.length],
          opacity: 0.22 + Math.random() * 0.28,
        }
      }),
    [],
  )

  return (
    <div className={`petals ${active ? 'is-active' : ''}`} aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size,
            background: petal.color,
            animationDelay: `-${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: petal.opacity,
            '--drift': `${petal.drift}vw`,
          }}
        />
      ))}
    </div>
  )
}
