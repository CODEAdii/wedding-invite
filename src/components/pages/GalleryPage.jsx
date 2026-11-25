import PageHead from './PageHead'

const modules = import.meta.glob(
  '../../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
)

const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, url]) => {
    const file = path.split('/').pop() || 'photo'
    return { url, name: file.replace(/\.[^.]+$/, '') }
  })

function CameraHeart() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="7" y="16" width="50" height="38" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M22 16l3-6h14l3 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="35" r="9.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M32 40c-5-4-7-7-4.6-9.2 1.7-1.5 3.7-.7 4.6.9.9-1.6 2.9-2.4 4.6-.9C39 33 37 36 32 40Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="48" cy="25" r="2" fill="currentColor" />
      <path d="M15 25h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export default function GalleryPage() {
  return (
    <div className="page gallery-page">
      <PageHead
        eyebrow="Our moments"
        title="Us, in pictures"
        sub={photos.length ? 'A few of our favourite moments together.' : undefined}
      />

      {photos.length ? (
        <div className="photo-grid" data-count={Math.min(photos.length, 3)}>
          {photos.map((photo, index) => (
            <figure
              className="photo-frame"
              key={photo.url}
              style={{ '--photo-delay': `${index * 0.06}s` }}
            >
              <img
                src={photo.url}
                alt={`Aditya and Komal — moment ${index + 1}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      ) : (
        <div className="photo-empty">
          <CameraHeart />
          <p className="photo-empty-title">Our story, coming soon</p>
          <p className="photo-empty-text">
            A little gallery of our favourite moments will appear here.
          </p>
          {import.meta.env.DEV && (
            <p className="photo-empty-hint">
              Add images to <code>src/assets/photos</code>
            </p>
          )}
        </div>
      )}
    </div>
  )
}
