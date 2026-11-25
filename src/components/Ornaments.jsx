/* Decorative SVG ornaments used across the invitation. */

export function Mandala({ className = '' }) {
  const outer = Array.from({ length: 24 })
  const mid = Array.from({ length: 16 })
  const inner = Array.from({ length: 8 })

  return (
    <svg
      className={`mandala ${className}`}
      viewBox="0 0 400 400"
      aria-hidden="true"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="0.9">
        <circle cx="200" cy="200" r="196" opacity="0.55" />
        <circle cx="200" cy="200" r="184" opacity="0.35" />
        <circle cx="200" cy="200" r="150" opacity="0.5" />
        <circle cx="200" cy="200" r="96" opacity="0.45" />
        <circle cx="200" cy="200" r="64" opacity="0.4" />
        <circle cx="200" cy="200" r="30" opacity="0.5" />

        {outer.map((_, i) => (
          <g key={`o${i}`} transform={`rotate(${i * 15} 200 200)`}>
            <path d="M200 4c10 12 10 24 0 38-10-14-10-26 0-38Z" opacity="0.55" />
            <circle cx="200" cy="48" r="1.6" fill="currentColor" stroke="none" opacity="0.6" />
          </g>
        ))}

        {mid.map((_, i) => (
          <g key={`m${i}`} transform={`rotate(${i * 22.5 + 7} 200 200)`}>
            <path
              d="M200 54c16 14 16 30 0 46-16-16-16-32 0-46Z"
              opacity="0.45"
            />
            <path d="M200 150c8 10 8 22 0 32-8-10-8-22 0-32Z" opacity="0.5" />
          </g>
        ))}

        {inner.map((_, i) => (
          <g key={`i${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <path d="M200 112c14 12 14 26 0 38-14-12-14-26 0-38Z" opacity="0.55" />
            <circle cx="200" cy="170" r="2" fill="currentColor" stroke="none" opacity="0.7" />
          </g>
        ))}

        <circle cx="200" cy="200" r="12" opacity="0.7" />
        <circle cx="200" cy="200" r="5" fill="currentColor" stroke="none" opacity="0.5" />
      </g>
    </svg>
  )
}

export function Divider({ className = '' }) {
  return (
    <div className={`divider ${className}`} aria-hidden="true">
      <span className="divider-line" />
      <svg viewBox="0 0 60 24" className="divider-mark" fill="none">
        <path d="M30 4c5 5 5 10 0 16-5-6-5-11 0-16Z" stroke="currentColor" strokeWidth="1" />
        <path d="M30 8v8" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="9" cy="12" r="2.4" stroke="currentColor" strokeWidth="0.9" />
        <circle cx="51" cy="12" r="2.4" stroke="currentColor" strokeWidth="0.9" />
        <path d="M14 12h10M36 12h10" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      </svg>
      <span className="divider-line" />
    </div>
  )
}

export function CornerFlourish({ className = '' }) {
  return (
    <svg
      className={`corner-flourish ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4c0 34 6 56 22 72s38 22 72 22"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M4 18c0 28 5 47 19 61s33 19 61 19"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.6"
      />
      <path
        d="M34 10c-6 10-5 20 4 25 9 4 17-3 15-12-2-7-10-8-13 0"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M10 34c10-6 20-5 25 4 4 9-3 17-12 15-7-2-8-10 0-13"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="2.6" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="18" r="1.8" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

export function EventIcon({ name }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const icons = {
    haldi: (
      <>
        <circle cx="24" cy="24" r="7.5" />
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d="M24 3.5v6M24 38.5v6M3.5 24h6M38.5 24h6M9.5 9.5l4.2 4.2M34.3 34.3l4.2 4.2M38.5 9.5l-4.2 4.2M13.7 34.3l-4.2 4.2"
            opacity="0.75"
          />
        ))}
        <path d="M20.5 24.5c2-3 5-3 7 0" />
      </>
    ),
    mehndi: (
      <>
        <path d="M24 12c-4 6-4 12 0 18 4-6 4-12 0-18Z" />
        <path d="M14 22c-3 5-1 10 3 13 2-6 1-10-3-13ZM34 22c3 5 1 10-3 13-2-6-1-10 3-13Z" />
        <path d="M18 34c1 5 4 8 6 8s5-3 6-8" />
        <circle cx="24" cy="40" r="1.6" />
        <path d="M10 40h4M34 40h4" opacity="0.6" />
      </>
    ),
    sangeet: (
      <>
        <path d="M18 34V14l16-4v20" />
        <ellipse cx="15.5" cy="35" rx="4.5" ry="3.4" />
        <ellipse cx="31.5" cy="31" rx="4.5" ry="3.4" />
        <path d="M18 19l16-4" opacity="0.7" />
      </>
    ),
    baraat: (
      <>
        <path d="M8 26c0-9 7-16 16-16s16 7 16 16" />
        <path d="M24 10V6" />
        <path d="M6 26h36" />
        <path d="M10 26v14M38 26v14M14 31h20" opacity="0.75" />
        <circle cx="24" cy="16" r="2.2" />
      </>
    ),
    wedding: (
      <>
        <circle cx="18" cy="27" r="9.5" />
        <circle cx="30" cy="27" r="9.5" />
        <path d="M24 12l-3-4h6l-3 4Z" opacity="0.8" />
      </>
    ),
    reception: (
      <>
        <path d="M12 12h8l-4 10-4-10ZM12 12h8M16 22v9M12 34h8" />
        <path d="M28 10h8l-4 10-4-10ZM28 10h8M32 20v11M28 34h8" />
        <path d="M16 22c-1 6 4 8 0 0Z" opacity="0.5" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 48 48" {...common} aria-hidden="true">
      {icons[name] || icons.wedding}
    </svg>
  )
}
