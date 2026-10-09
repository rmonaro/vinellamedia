import { services } from '../data'

export function Services() {
  return (
    <section id="services" className="services">
      <span className="eyebrow">Services</span>
      <h2 className="h2">Three disciplines. No handoffs between agencies.</h2>
      {services.map((s) => (
        <div key={s.num} className="svc">
          <p className="svc-num">{s.num}</p>
          <h3>{s.title}</h3>
          <div className="svc-body">
            <p className="muted">{s.copy}</p>
            <div className="tags">
              {s.tags.map((t) => (
                <span key={t} className="tag tag-neutral">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
