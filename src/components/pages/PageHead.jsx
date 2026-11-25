import { Divider } from '../Ornaments'

export default function PageHead({ eyebrow, title, sub }) {
  return (
    <header className="page-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="page-title">{title}</h2>
      <Divider />
      {sub ? <p className="page-sub">{sub}</p> : null}
    </header>
  )
}
