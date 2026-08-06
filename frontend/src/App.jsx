import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { content, GA_ID } from './data/content.js'
import './App.css'

const filterKeys = ['all', 'bots', 'automation', 'sites']

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('preferred-language') || 'ru')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [filter, setFilter] = useState('all')
  const [submitting, setSubmitting] = useState(false)
  const [notice, setNotice] = useState(null)

  const t = content[lang]

  useEffect(() => {
    localStorage.setItem('preferred-language', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== 'function') return
    window.gtag('config', GA_ID, { page_path: window.location.pathname })
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const portfolioItems = useMemo(
    () => (filter === 'all' ? t.portfolio.items : t.portfolio.items.filter((item) => item.category === filter)),
    [filter, t.portfolio.items],
  )

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const handleNavClick = (event, hash) => {
    event.preventDefault()
    scrollTo(hash.replace('#', ''))
  }

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#process', label: t.nav.process },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  const showNotice = (text, type) => {
    setNotice({ text, type })
    setTimeout(() => setNotice(null), 4000)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      const formData = new FormData(event.target)
      const payload = Object.fromEntries(formData.entries())
      const response = await fetch('https://ralovich.by/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      event.target.reset()
      showNotice(t.contact.success, 'success')
    } catch (error) {
      console.error(error)
      showNotice(t.contact.error, 'error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="App">
      {notice && <div className={`notification notification-${notice.type} show`}>{notice.text}</div>}

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="nav-container">
            <button type="button" className="nav-logo" onClick={() => scrollTo('home')}>
              <span className="logo-mark">R</span>
              <span className="logo-text">Ralovich</span>
            </button>

            <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              {menuOpen && <div className="nav-menu-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="nav-link" onClick={(event) => handleNavClick(event, link.href)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a className="nav-cta mobile-only" href="https://t.me/kiinaui" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>

            <div className="nav-controls">
              <div className="language-switcher">
                <button type="button" className={`lang-btn ${lang === 'ru' ? 'active' : ''}`} onClick={() => setLang('ru')}>
                  RU
                </button>
                <button type="button" className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
                  EN
                </button>
              </div>
              <a className="nav-cta desktop-only" href="https://t.me/kiinaui" target="_blank" rel="noreferrer">
                Telegram
              </a>
              <button
                type="button"
                className={`nav-toggle ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Menu"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="hero-mesh" />
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
          <div className="hero-grid" />
          <div className="hero-signal">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-brand">{t.hero.brand}</p>
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => scrollTo('contact')}>
                {t.hero.ctaPrimary}
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => scrollTo('portfolio')}>
                {t.hero.ctaSecondary}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="proof" aria-label="Proof">
        <div className="container proof-row">
          {t.proof.items.map((item, index) => (
            <motion.div
              key={item.label}
              className="proof-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <span className="proof-number">{item.number}</span>
              <span className="proof-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>
          <div className="services-grid">
            {t.services.items.map((service, index) => (
              <motion.article
                key={service.title}
                className={`service-card ${service.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="service-top">
                  <span className="service-tag">{service.tag}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="service-footer">
                  <div className="service-price-block">
                    <span className="service-price">{service.price}</span>
                    {service.priceHint ? <span className="service-price-hint">{service.priceHint}</span> : null}
                  </div>
                  <button type="button" className="btn btn-sm" onClick={() => scrollTo('contact')}>
                    {t.services.cta}
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.process.title}</h2>
            <p className="section-subtitle">{t.process.subtitle}</p>
          </div>
          <div className="process-grid">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={step.num}
                className="process-step"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <span className="process-num">{step.num}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.portfolio.title}</h2>
            <p className="section-subtitle">{t.portfolio.subtitle}</p>
          </div>
          <div className="portfolio-filter" role="tablist">
            {filterKeys.map((key) => (
              <button
                key={key}
                type="button"
                className={`filter-btn ${filter === key ? 'active' : ''}`}
                onClick={() => setFilter(key)}
              >
                {t.portfolio.filters[key]}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="portfolio-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.05, 0.3) }}
              >
                <div className="portfolio-meta">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <span className="portfolio-cat">{t.portfolio.filters[item.category]}</span>
                </div>
                <p className="portfolio-description">{item.result}</p>
                <div className="portfolio-technologies">
                  {item.technologies.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="about">
        <div className="container about-layout">
          <div className="about-intro">
            <h2 className="section-title">{t.about.title}</h2>
            <p className="about-description">{t.about.description}</p>
            <p className="about-description">{t.about.description2}</p>
            <div className="about-skills">
              {t.about.skills.map((skill) => (
                <span className="skill-chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="about-points">
            {t.about.points.map((point, index) => (
              <motion.div
                key={point.title}
                className="about-point"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-subtitle">{t.contact.subtitle}</p>
          </div>
          <div className="contact-layout">
            <div className="contact-aside">
              <a className="contact-channel" href="https://t.me/kiinaui" target="_blank" rel="noreferrer">
                <span className="contact-channel-label">{t.contact.telegram.title}</span>
                <span className="contact-channel-value">{t.contact.telegram.value}</span>
                <span className="contact-channel-hint">{t.contact.telegram.hint}</span>
              </a>
              <a className="contact-channel" href="mailto:kiinaui@icloud.com">
                <span className="contact-channel-label">{t.contact.email.title}</span>
                <span className="contact-channel-value">{t.contact.email.value}</span>
              </a>
              <p className="contact-guarantee">{t.contact.guarantee}</p>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.contact.formLabels.name}</label>
                <input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="telegram">{t.contact.formLabels.telegram}</label>
                <input id="telegram" name="telegram" required placeholder="@username" />
              </div>
              <div className="form-group">
                <label htmlFor="service">{t.contact.formLabels.service}</label>
                <select id="service" name="service" required defaultValue="">
                  {t.contact.formLabels.serviceOptions.map((option, index) => (
                    <option key={option} value={index === 0 ? '' : option} disabled={index === 0}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.contact.formLabels.message}</label>
                <textarea id="message" name="message" required rows={4} />
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                {submitting ? '...' : t.contact.formLabels.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo-mark">R</span>
            <div>
              <strong>Egor Ralovich</strong>
              <span>{t.footer.tagline}</span>
            </div>
          </div>
          <div className="footer-links">
            <button type="button" className="footer-link" onClick={() => scrollTo('services')}>
              {t.nav.services}
            </button>
            <button type="button" className="footer-link" onClick={() => scrollTo('portfolio')}>
              {t.nav.portfolio}
            </button>
            <button type="button" className="footer-link" onClick={() => scrollTo('contact')}>
              {t.nav.contact}
            </button>
            <a className="footer-link" href="https://t.me/kiinaui" target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
