/* Hand-drawn SVG illustrations for the invitation.
   Flat, warm and minimal — they sit directly on the cream card paper. */

const skin = '#e7b78d'
const skinShade = '#d9a377'
const maroon = '#6b1524'
const maroonDeep = '#4d0b18'
const gold = '#c9a24b'
const goldLight = '#e6c884'
const ivory = '#f8eedb'
const dark = '#2f1b18'
const blush = '#efc9bd'
const saffron = '#e0a233'

function Marigold({ x, y, r = 4 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={saffron} />
      <circle cx={x} cy={y} r={r * 0.55} fill="#eec26a" />
      <circle cx={x} cy={y} r={r * 0.18} fill={maroon} opacity="0.35" />
    </g>
  )
}

export function CoupleArt({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 260 212"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      {/* ground shadow */}
      <ellipse cx="131" cy="201" rx="86" ry="6" fill={gold} opacity="0.16" />

      {/* ---------------- bride ---------------- */}
      <g>
        {/* lehenga skirt */}
        <path
          d="M62 198c-4-29 4-56 14-72h41c10 16 18 43 14 72Z"
          fill={maroon}
        />
        <path
          d="M62 198c20 7 50 7 69 0l-1-11c-19 8-48 8-67 0Z"
          fill={gold}
        />
        <circle cx="82" cy="172" r="2" fill={goldLight} opacity="0.85" />
        <circle cx="100" cy="183" r="1.7" fill={goldLight} opacity="0.8" />
        <circle cx="116" cy="170" r="2" fill={goldLight} opacity="0.85" />
        <circle cx="90" cy="190" r="1.5" fill={goldLight} opacity="0.7" />
        <path d="M70 182c12 4 32 4 44 0" stroke={goldLight} strokeWidth="1" opacity="0.6" />

        {/* choli + midriff */}
        <path d="M82 104q16-9 31 0l5 24H77Z" fill="#7d1c2e" />
        <rect x="83" y="116" width="29" height="10" rx="4" fill={skin} />
        <path d="M76 122h43l1 8H75Z" fill={gold} />
        <circle cx="97" cy="126" r="2.2" fill={maroonDeep} opacity="0.5" />

        {/* neck + head */}
        <rect x="90" y="86" width="15" height="12" fill={skinShade} />
        <circle cx="97" cy="72" r="17" fill={skin} />
        <circle cx="97" cy="70" r="19" fill={dark} opacity="0.95" />
        <circle cx="77" cy="64" r="7.5" fill={dark} />
        <circle cx="97" cy="73" r="16.5" fill={skin} />
        <path
          d="M81 70a16.5 16.5 0 0 1 33 0c-3-13-8-19-16.5-19S84 57 81 70Z"
          fill={dark}
        />

        {/* face */}
        <circle cx="90" cy="75" r="1.4" fill={dark} />
        <circle cx="104" cy="75" r="1.4" fill={dark} />
        <path d="M92 81q5 4 10 0" stroke={maroonDeep} strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="97" cy="66" r="1.2" fill={maroon} />
        <path d="M97 54v7" stroke={gold} strokeWidth="1" />
        <circle cx="97" cy="53" r="2.2" fill={gold} />
        <circle cx="78" cy="78" r="2.6" fill="none" stroke={gold} strokeWidth="1.2" />
        <circle cx="116" cy="78" r="2.6" fill="none" stroke={gold} strokeWidth="1.2" />

        {/* necklace */}
        <path d="M89 92q8 7 16 0" stroke={gold} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M91 96q6 5 12 0" stroke={goldLight} strokeWidth="1" strokeLinecap="round" />

        {/* garland */}
        <Marigold x={86} y={98} r={3.4} />
        <Marigold x={92} y={102} r={3.4} />
        <Marigold x={99} y={103} r={3.4} />
        <Marigold x={106} y={99} r={3.4} />

        {/* arms */}
        <path d="M82 108c-5 8-8 18-10 26" stroke={skin} strokeWidth="6" strokeLinecap="round" />
        <path d="M111 108c8 3 15 5 22 6" stroke={skin} strokeWidth="6" strokeLinecap="round" />
        <circle cx="125" cy="114" r="3.4" fill={skin} />
        <path d="M71 122c-2 2-2 5 0 6 2 1 5 0 5-2" stroke={gold} strokeWidth="1.2" />
        <path d="M112 106c2 2 5 2 7 0" stroke={gold} strokeWidth="1.2" opacity="0.8" />

        {/* dupatta drape */}
        <path
          d="M112 100c10 4 16 18 17 36 1 14-1 26-3 34l-10-3c4-16 4-38-8-58Z"
          fill={blush}
          opacity="0.55"
        />
        <path
          d="M112 100c10 4 16 18 17 36"
          stroke={gold}
          strokeWidth="1"
          opacity="0.5"
        />
      </g>

      {/* ---------------- groom ---------------- */}
      <g>
        {/* legs */}
        <path d="M152 148h12l-1 42h-12Z" fill={ivory} />
        <path d="M174 148h12l2 42h-12Z" fill={ivory} />
        <path d="M151 186h14v6h-16Z" fill={maroon} />
        <path d="M174 186h14l1 6h-16Z" fill={maroon} />
        <path d="M153 187h10" stroke={gold} strokeWidth="1" />

        {/* sherwani */}
        <path
          d="M143 96q12-10 29-10t29 10l-4 56q-11 9-25 9t-25-9Z"
          fill={ivory}
        />
        <path d="M143 96q12-10 29-10t29 10" stroke={gold} strokeWidth="1.4" />
        <path d="M172 90v60" stroke={gold} strokeWidth="0.9" opacity="0.7" />
        <circle cx="172" cy="108" r="1.6" fill={gold} />
        <circle cx="172" cy="120" r="1.6" fill={gold} />
        <circle cx="172" cy="132" r="1.6" fill={gold} />
        <path d="M144 100c8 12 10 24 9 36" stroke={maroon} strokeWidth="5" opacity="0.9" />
        <path d="M144 100c8 12 10 24 9 36" stroke={gold} strokeWidth="1" opacity="0.6" />

        {/* neck + head */}
        <rect x="165" y="84" width="15" height="12" fill={skinShade} />
        <circle cx="172" cy="70" r="16.5" fill={skin} />

        {/* turban */}
        <path
          d="M150 60c0-15 9-24 22-24s22 9 22 24c-6-5-14-7-22-7s-16 2-22 7Z"
          fill={maroon}
        />
        <path d="M151 57c7-6 14-8 21-8s14 2 21 8" stroke={gold} strokeWidth="1.6" />
        <path d="M172 37v7" stroke={gold} strokeWidth="1" />
        <path d="M188 40c5-3 9 0 8 5-4 1-7 0-8-5Z" fill={gold} />

        {/* face */}
        <circle cx="166" cy="72" r="1.4" fill={dark} />
        <circle cx="179" cy="72" r="1.4" fill={dark} />
        <path d="M168 79q4 3.5 8 0" stroke={maroonDeep} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M168 76h9" stroke={dark} strokeWidth="1.1" strokeLinecap="round" opacity="0.75" />

        {/* garland */}
        <Marigold x={163} y={93} r={3.4} />
        <Marigold x={170} y={96} r={3.4} />
        <Marigold x={177} y={94} r={3.4} />
        <Marigold x={183} y={89} r={3.2} />

        {/* arms */}
        <path d="M146 105c-6 4-11 7-16 9" stroke={skin} strokeWidth="6" strokeLinecap="round" />
        <circle cx="129" cy="115" r="3.4" fill={skin} />
        <path d="M190 106c4 8 6 17 7 24" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* joined hands */}
      <ellipse cx="131" cy="114" rx="5.5" ry="4.4" fill={skinShade} />
      <path d="M127 112q4-3 8 0" stroke={gold} strokeWidth="1" opacity="0.6" />

      {/* little marigold cluster between them */}
      <Marigold x={133} y={128} r={2.6} />
      <Marigold x={139} y={124} r={2.2} />

      {/* petals */}
      <g fill="#d9867f" opacity="0.75">
        <path d="M52 84c3-4 6-2 5 2-1 3-4 4-5-2Z" />
        <path d="M214 108c3-4 6-2 5 2-1 3-4 4-5-2Z" />
        <path d="M198 64c3-4 6-2 5 2-1 3-4 4-5-2Z" />
      </g>
      <g fill={goldLight} opacity="0.8">
        <circle cx="62" cy="120" r="1.6" />
        <circle cx="205" cy="86" r="1.4" />
        <circle cx="44" cy="150" r="1.4" />
      </g>
    </svg>
  )
}

export function DholArt({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 130 150" fill="none" aria-hidden="true">
      <ellipse cx="66" cy="142" rx="44" ry="4.5" fill={gold} opacity="0.16" />

      {/* legs */}
      <path d="M54 116h10l-2 22H50Z" fill={ivory} />
      <path d="M70 116h10l4 22H72Z" fill={ivory} />
      <path d="M49 136h13v5H47Z" fill={maroon} />
      <path d="M72 136h13l1 5H72Z" fill={maroon} />

      {/* kurta */}
      <path d="M47 68q10-8 22-8t22 8l-4 52q-9 7-18 7t-18-7Z" fill={maroon} />
      <path d="M48 69q10-7 21-7t21 7" stroke={gold} strokeWidth="1.3" />
      <path d="M69 64v56" stroke={gold} strokeWidth="0.8" opacity="0.6" />
      <circle cx="69" cy="86" r="1.4" fill={gold} />
      <circle cx="69" cy="96" r="1.4" fill={gold} />

      {/* head */}
      <rect x="63" y="56" width="13" height="10" fill={skinShade} />
      <circle cx="69" cy="46" r="14" fill={skin} />
      <circle cx="58" cy="48" r="1.2" fill={dark} />
      <circle cx="80" cy="48" r="1.2" fill={dark} />
      <path d="M64 54q5 4 10 0" stroke={maroonDeep} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M64 51h10" stroke={dark} strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* turban */}
      <path d="M54 38c0-12 7-19 15-19s15 7 15 19c-5-4-10-6-15-6s-10 2-15 6Z" fill={saffron} />
      <path d="M55 36c4-5 9-7 14-7s10 2 14 7" stroke={goldLight} strokeWidth="1.4" />
      <path d="M69 19v6" stroke={gold} strokeWidth="1" />
      <path d="M81 24c4-2 7 0 6 4-3 1-5 0-6-4Z" fill={goldLight} />

      {/* dhol */}
      <g>
        <ellipse cx="66" cy="99" rx="27" ry="12" fill="#a9772e" />
        <rect x="39" y="91" width="54" height="16" fill="#c2923f" />
        <ellipse cx="39" cy="99" rx="7" ry="11" fill="#e6cfa4" />
        <ellipse cx="39" cy="99" rx="5" ry="8.5" fill="#f2e3c6" />
        <ellipse cx="93" cy="99" rx="7" ry="11" fill="#5d1122" />
        <ellipse cx="93" cy="99" rx="5" ry="8.5" fill="#7d1c2e" />
        <path d="M56 90v18M66 89v20M76 90v18" stroke={gold} strokeWidth="1" opacity="0.8" />
        <path d="M92 108c-2 5-5 8-9 9M40 108c2 5 5 8 9 9" stroke={maroon} strokeWidth="1.4" />
      </g>

      {/* arms with sticks */}
      <path d="M49 74c-7-2-12-7-15-13" stroke={skin} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M89 74c7-2 12-7 15-13" stroke={skin} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M32 56 20 45M106 56l12-11" stroke="#a9772e" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="19" cy="44" r="2.6" fill={gold} />
      <circle cx="119" cy="44" r="2.6" fill={gold} />

      {/* garland */}
      <Marigold x={59} y={74} r={2.8} />
      <Marigold x={66} y={77} r={2.8} />
      <Marigold x={73} y={75} r={2.8} />
      <Marigold x={79} y={71} r={2.6} />

      {/* confetti */}
      <g fill={saffron} opacity="0.85">
        <circle cx="22" cy="76" r="2" />
        <circle cx="110" cy="80" r="1.7" />
        <circle cx="30" cy="108" r="1.5" />
      </g>
      <g fill="#d9867f" opacity="0.75">
        <path d="M98 92c3-4 6-2 5 2-1 3-4 4-5-2Z" />
        <path d="M24 92c3-4 6-2 5 2-1 3-4 4-5-2Z" />
      </g>
    </svg>
  )
}

export function MandapArt({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 260 168" fill="none" aria-hidden="true">
      <ellipse cx="130" cy="157" rx="104" ry="5" fill={gold} opacity="0.14" />

      {/* back arch */}
      <path
        d="M56 152V84c0-30 33-52 74-52s74 22 74 52v68"
        stroke={gold}
        strokeWidth="1.4"
        opacity="0.75"
      />
      <path
        d="M66 152V86c0-26 29-46 64-46s64 20 64 46v66"
        stroke={gold}
        strokeWidth="0.8"
        opacity="0.45"
      />

      {/* dome + finial */}
      <path d="M112 40c0-11 8-19 18-19s18 8 18 19Z" fill={maroon} opacity="0.92" />
      <path d="M112 40c0-11 8-19 18-19s18 8 18 19" stroke={gold} strokeWidth="1.4" />
      <path d="M130 21v-7" stroke={gold} strokeWidth="1.2" />
      <circle cx="130" cy="12.5" r="2.5" fill={gold} />
      <path d="M133 17l13 4-13 4Z" fill={gold} opacity="0.8" />
      <path d="M108 41h44" stroke={gold} strokeWidth="1.4" />

      {/* pillars */}
      <g stroke={gold} strokeWidth="1.4">
        <path d="M58 152V76M74 152V70M186 152V70M202 152V76" />
        <path d="M53 74h10M69 68h10M181 68h10M197 74h10" strokeWidth="1.1" opacity="0.75" />
        <path d="M52 150h12M68 150h12M180 150h12M196 150h12" strokeWidth="1" opacity="0.55" />
      </g>
      <g fill={gold} opacity="0.5">
        <rect x="51" y="94" width="14" height="2.5" rx="1" />
        <rect x="67" y="88" width="14" height="2.5" rx="1" />
        <rect x="179" y="88" width="14" height="2.5" rx="1" />
        <rect x="195" y="94" width="14" height="2.5" rx="1" />
        <rect x="51" y="120" width="14" height="2.5" rx="1" />
        <rect x="67" y="114" width="14" height="2.5" rx="1" />
        <rect x="179" y="114" width="14" height="2.5" rx="1" />
        <rect x="195" y="120" width="14" height="2.5" rx="1" />
      </g>

      {/* marigold swags */}
      <g>
        <path d="M58 78q36 34 72 0" stroke={goldLight} strokeWidth="1" opacity="0.7" />
        <path d="M130 78q36 34 72 0" stroke={goldLight} strokeWidth="1" opacity="0.7" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          const t = i / 6
          const x1 = 58 + t * 72
          const y1 = 78 + Math.sin(Math.PI * t) * 24
          const x2 = 130 + t * 72
          const y2 = 78 + Math.sin(Math.PI * t) * 24
          return (
            <g key={i}>
              <Marigold x={x1} y={y1} r={3.5} />
              <Marigold x={x2} y={y2} r={3.5} />
            </g>
          )
        })}
      </g>

      {/* hanging marigold strings */}
      <g>
        <path d="M74 74v18M186 74v18" stroke={gold} strokeWidth="0.9" opacity="0.5" />
        <Marigold x={74} y={98} r={3} />
        <Marigold x={74} y={108} r={2.7} />
        <Marigold x={186} y={98} r={3} />
        <Marigold x={186} y={108} r={2.7} />
      </g>

      {/* altar / couple space */}
      <path d="M96 152v-18c0-10 15-16 34-16s34 6 34 16v18Z" fill={maroon} opacity="0.09" />
      <path d="M104 152v-14M156 152v-14" stroke={gold} strokeWidth="1" opacity="0.5" />
      <path d="M112 140h36" stroke={gold} strokeWidth="1" opacity="0.6" />

      {/* lotus */}
      <g stroke={gold} strokeWidth="1" opacity="0.85">
        <path d="M130 132c-4 4-4 8 0 11 4-3 4-7 0-11Z" />
        <path d="M120 135c-4 3-3 7 2 8 2-3 1-6-2-8ZM140 135c4 3 3 7-2 8-2-3-1-6 2-8Z" />
      </g>

      {/* side flowers */}
      <Marigold x={42} y={150} r={3} />
      <Marigold x={218} y={150} r={3} />
      <Marigold x={32} y={142} r={2.4} />
      <Marigold x={228} y={142} r={2.4} />
    </svg>
  )
}
