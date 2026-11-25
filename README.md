# Aditya & Komal — Digital Wedding Invitation

An Indian-style wedding invitation that behaves like a real card, not a website: a wax-sealed
envelope opens to reveal a gold-bordered invitation card that you turn page by page — the
invitation, the countdown, the celebrations, the venue, a photo gallery and a closing note,
with hand-drawn illustrations of the couple, a dhol player and a mandap.

Built with **React + Vite** (UI only — no backend).

## Run it

```bash
pnpm install
pnpm dev         # http://localhost:5173
pnpm build       # production build into dist/
pnpm preview     # preview the production build
```

> Uses **pnpm** (declared in `package.json` → `packageManager`). If `pnpm` is missing:
> `npm install -g pnpm`. npm/yarn also work, but the lockfile is `pnpm-lock.yaml`.
>
> `pnpm-workspace.yaml` allows only `esbuild` to run its install script — pnpm 10+ blocks
> dependency build scripts by default, and Vite needs esbuild's binary.

## Your photos

Drop photos into **`src/assets/photos/`** — the **Our moments** card picks them up automatically,
no code changes needed.

- Formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` (lowercase names recommended)
- Order: sorted by file name, so use `01.jpg`, `02.jpg`, `03.jpg` …
- Recommended: portrait or square, ~1200 px wide, under ~500 KB each
- The gallery crops to a 4:5 portrait frame, so keep faces centred
- 1 or 2 photos get a larger centred layout; 3+ fill a neat grid

A full guide lives in `src/assets/photos/README.md`.

## The experience

| Card | Notes |
| --- | --- |
| Envelope | Sealed with a wax seal; tap it to break the seal, open the flap in 3D and lift the card out |
| The invitation | Ganesh shloka, Aditya & Komal in gold script, date, muhurat and venue |
| Save the date | Live countdown to 22 Feb 2027, 10:00 AM IST, plus an "Add to calendar" `.ics` download |
| The celebrations | Haldi, Mehndi, Sangeet and Baraat & Wedding with times, places and dress codes |
| The venue | Mandap illustration, address, timings and a Google Maps link |
| Our moments | A photo gallery fed by `src/assets/photos/` (shows a graceful "coming soon" state while empty) |
| With love | Couple illustration, hashtag and a "reopen the envelope" link |

Navigation: on-screen arrows, the gold dots (jump to any card), a "Turn the card" link,
keyboard ← / →, and horizontal swipe on touch screens.

Little details: staggered text reveals on every card, letter-spacing and blur-in title
animations, a gold shimmer on the names, a ticking countdown, floating marigold petals,
and reduced-motion support.

## Make it yours

- **Names, date, venue (cover)** → `src/components/pages/CoverPage.jsx`
- **Countdown target** → `TARGET` in `src/components/pages/CountdownPage.jsx`
- **Events / dress codes** → `events` array in `src/components/pages/CelebrationsPage.jsx`
- **Venue + map link** → `src/components/pages/VenuePage.jsx`, `src/lib/calendar.js`
- **Photos** → `src/assets/photos/` (see above)
- **Illustrations** → `src/components/Art.jsx` (hand-drawn SVG, edit colours and shapes there)
- **Colours, type and animations** → `src/styles.css` (`:root` tokens at the top)
- **Envelope** → `src/components/EnvelopeIntro.jsx`

The "Grand Palace Lawns, Jaipur" venue and family details are placeholders — swap in the real
ones before sharing the link.

## Notes

- Fonts load from Google Fonts (Cormorant Garamond, Marcellus, Great Vibes, Jost, Tiro Devanagari).
- The card is height-locked to the viewport; very short screens get a compact layout and the
  card body scrolls if needed.
- Fully keyboard accessible: the envelope opens with Enter/Space, cards turn with ← / →.
- Animations respect `prefers-reduced-motion`.
