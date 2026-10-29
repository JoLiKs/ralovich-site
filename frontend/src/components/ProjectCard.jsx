import { motion } from 'framer-motion'

function Visual({ type }) {
  switch (type) {
    case 'delivery':
      return (
        <div className="v-delivery">
          <svg className="v-route" viewBox="0 0 300 160" preserveAspectRatio="none"><path d="M20 130 C 80 120, 70 40, 150 60 S 250 30, 280 25" /><circle cx="20" cy="130" r="6" /><circle cx="280" cy="25" r="6" /></svg>
          <div className="v-phone"><div className="v-phone-bar" /><div className="v-pill">● В пути</div><div className="v-row" /><div className="v-row s" /><div className="v-scan">▮▯▮▮▯▮▯▮▮</div><div className="v-btn">Вручить</div></div>
        </div>
      )
    case 'interview':
      return (
        <div className="v-chat">
          <div className="b l">Расскажите, как работает event loop?</div>
          <div className="b r">Это цикл, который берёт задачи из очереди…</div>
          <div className="b l">Хорошо. А что с GIL?</div>
          <div className="v-verdict">HIRE ✓</div>
        </div>
      )
    case 'kanban':
      return (
        <div className="v-kanban">
          {['Отклик', 'Интервью', 'Оффер'].map((c, i) => (
            <div className="col" key={c}><span>{c}</span>{Array.from({ length: 3 - i }).map((_, j) => <i key={j} className={i === 1 && j === 0 ? 'drag' : ''} />)}</div>
          ))}
        </div>
      )
    case 'telegram':
      return (
        <div className="v-tg">
          <div className="m me">/deploy api</div>
          <div className="m">git pull ✓</div>
          <div className="m">systemctl restart ✓</div>
          <div className="m ok">Готово 🚀</div>
        </div>
      )
    case 'exchange':
      return (
        <div className="v-ex">
          <div className="r"><b>Binance</b><span className="bar" style={{ width: '62%' }} /></div>
          <div className="r"><b>Coinbase</b><span className="bar" style={{ width: '78%' }} /></div>
          <div className="spread">spread ↗</div>
        </div>
      )
    default:
      return (
        <div className="v-term">
          <div><span className="g">●</span> api /health 200</div>
          <div><span className="g">●</span> web / 200</div>
          <div><span className="rd">●</span> cdn / retry…</div>
          <div className="spark">{[30, 50, 40, 70, 45, 90, 35, 55, 60, 40, 75, 50].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
        </div>
      )
  }
}

export default function ProjectCard({ item, meta, copy, labels }) {
  const url = item.liveLink || item.link
  return (
    <motion.article
      className={`pcard ${meta.wide ? 'wide' : ''}`}
      style={{ '--accent': meta.accent }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="pcard-visual"><Visual type={meta.visual} /></div>
      <div className="pcard-body">
        <span className="pcard-kicker">{copy.kicker}</span>
        <h3 className="pcard-title">{item.title}</h3>
        <p className="pcard-tagline">{copy.tagline}</p>
        <ul className="pcard-hl">{copy.highlights.slice(0, 3).map((h) => <li key={h}>{h}</li>)}</ul>
        <div className="pcard-foot">
          <div className="pcard-tags">{item.technologies.slice(0, 3).map((t) => <span key={t}>{t}</span>)}</div>
          <div className="pcard-links">
            {item.liveLink && <a className="pcard-cta" href={item.liveLink} target="_blank" rel="noreferrer">{labels.live} ↗</a>}
            {item.link && <a className="pcard-gh" href={item.link} target="_blank" rel="noreferrer">GitHub →</a>}
            {!url && <span className="pcard-nda">NDA</span>}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
