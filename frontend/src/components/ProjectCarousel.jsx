import { useEffect, useRef } from 'react'

// Data-driven card carousel. Each card: { name, initials, subtitle, date, rating, text, project: { label, title, url, thumb } }.
// Real client testimonials can be added later via content `portfolio.testimonials` – they are shown before project cards.
const initialsOf = (s) => s.replace(/[«»"']/g, '').split(/[\s–-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export function buildCards(portfolio) {
  const fromProjects = portfolio.items.map((item) => {
    const url = item.liveLink || item.link
    return {
      name: item.title,
      initials: initialsOf(item.title),
      subtitle: item.technologies.slice(0, 3).join(' · '),
      date: item.technologies.length ? item.technologies.slice(3).join(' · ') : '',
      rating: 5,
      text: item.solution,
      project: {
        label: portfolio.carousel.projectLabel,
        title: url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : portfolio.carousel.noLink,
        url,
        thumb: item.icon,
      },
    }
  })
  return [...(portfolio.testimonials || []), ...fromProjects]
}

export default function ProjectCarousel({ cards, title }) {
  const viewport = useRef(null)
  const track = useRef(null)
  const state = useRef({ x: 0, paused: false, dragging: false, startX: 0, startOffset: 0, moved: 0 })

  useEffect(() => {
    let raf
    let last = performance.now()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tick = (now) => {
      const s = state.current
      const dt = Math.min(now - last, 50)
      last = now
      const half = track.current ? track.current.scrollWidth / 2 : 0
      if (!s.paused && !s.dragging && !reduce) s.x -= dt * 0.04
      if (half) {
        while (s.x <= -half) s.x += half
        while (s.x > 0) s.x -= half
      }
      if (track.current) track.current.style.transform = `translate3d(${s.x}px,0,0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const onDown = (e) => {
    const s = state.current
    s.dragging = true; s.startX = e.clientX; s.startOffset = s.x; s.moved = 0
  }
  const onMove = (e) => {
    const s = state.current
    if (!s.dragging) return
    const dx = e.clientX - s.startX
    s.moved = Math.max(s.moved, Math.abs(dx))
    if (s.moved > 5 && e.pointerType !== 'mouse') e.preventDefault?.()
    s.x = s.startOffset + dx
  }
  const onUp = () => { state.current.dragging = false }
  const onClickCapture = (e) => { if (state.current.moved > 8) { e.preventDefault(); e.stopPropagation() } }

  const list = [...cards, ...cards]
  return (
    <div className="pc" aria-label={title}>
      {title && <h3 className="pc-heading">{title}</h3>}
      <div
        className="pc-viewport"
        ref={viewport}
        onMouseEnter={() => { state.current.paused = true }}
        onMouseLeave={() => { state.current.paused = false; onUp() }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        <div className="pc-track" ref={track}>
          {list.map((c, i) => (
            <article className="pc-card" key={i} aria-hidden={i >= cards.length}>
              <span className="pc-quote" aria-hidden="true">“</span>
              <div className="pc-head">
                <span className="pc-avatar">{c.initials}</span>
                <div className="pc-who">
                  <div className="pc-name">{c.name}<svg className="pc-verified" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <div className="pc-sub">{c.subtitle}</div>
                </div>
              </div>
              <div className="pc-meta">
                <span className="pc-stars">{'★'.repeat(c.rating || 5)}</span>
                {c.date && <span className="pc-date">{c.date}</span>}
              </div>
              <p className="pc-text">{c.text}</p>
              {c.project && (
                <a className={`pc-project ${c.project.url ? '' : 'pc-nolink'}`} href={c.project.url || undefined} target="_blank" rel="noreferrer" tabIndex={i >= cards.length ? -1 : 0}>
                  <span className="pc-thumb">{c.project.thumb}</span>
                  <span className="pc-pinfo">
                    <span className="pc-plabel">{c.project.label}</span>
                    <span className="pc-ptitle">{c.project.title}</span>
                  </span>
                  {c.project.url && <span className="pc-arrow">↗</span>}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
