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
  }, [lang])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== 'function') return
    window.gtag('config', GA_ID, { page_path: window.location.pathname })
  }, [])

  const portfolioItems = useMemo(
    () => (filter === 'all' ? t.portfolio.items : t.portfolio.items.filter((item) => item.category === filter)),
    [filter, t.portfolio.items],
  )

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const handleNavClick = (event, hash) => {
    event.preventDefault()
    scrollTo(hash.replace('#', ''))
  }

  const navLinks = [
    { href: '#home', label: lang === 'ru' ? 'Главная' : 'Home' },
    { href: '#services', label: t.nav.services },
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
            <div className="nav-logo">
              <span className="logo-text">Egor Ralovich</span>
            </div>

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
            </div>

            <div className="nav-controls">
              <div className="language-switcher">
                <button type="button" className={`lang-btn ${lang === 'ru' ? 'active' : ''}`} onClick={() => setLang('ru')}>RU</button>
                <button type="button" className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
              </div>

              <button type="button" className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-background" />
        <div className="hero-particles" />
        <div className="hero-container">
          <motion.div className="hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="hero-header">
              <h1 className="hero-title">
                <span className="title-line">{t.hero.title1}</span>
                <span className="title-line gradient-text">{t.hero.title2}</span>
                <span className="title-line">{t.hero.title3}</span>
              </h1>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
            </div>
            <div className="hero-buttons">
              <button type="button" className="btn btn-primary" onClick={() => scrollTo('contact')}>{t.hero.ctaPrimary}</button>
              <button type="button" className="btn btn-secondary" onClick={() => scrollTo('portfolio')}>{t.hero.ctaSecondary}</button>
            </div>
            <div className="hero-stats">
              {t.hero.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="code-window">
              <div className="window-header">
                <div className="window-buttons"><span className="btn-close" /><span className="btn-minimize" /><span className="btn-maximize" /></div>
                <div className="window-title">bot.py</div>
              </div>
              <div className="window-content">
                <div className="code-line"><span className="code-keyword">from</span> <span className="code-module">aiogram</span> <span className="code-keyword">import</span> <span className="code-class">Bot</span>, <span className="code-class">Dispatcher</span>, <span className="code-class">F</span></div>
                <div className="code-line"><span className="code-variable">bot</span> <span className="code-dot">=</span> <span className="code-class">Bot</span><span className="code-bracket">(</span><span className="code-param">token</span><span className="code-dot">=</span><span className="code-string">"..."</span><span className="code-bracket">)</span></div>
                <div className="code-line"><span className="code-variable">dp</span> <span className="code-dot">=</span> <span className="code-class">Dispatcher</span><span className="code-bracket">()</span></div>
                <div className="code-line"><span className="code-deccorator">@dp.message</span><span className="code-bracket">(</span><span className="code-class">F</span><span className="code-dot">.</span><span className="code-param">text</span> <span className="code-dot">==</span> <span className="code-string">"/start"</span><span className="code-bracket">)</span></div>
                <div className="code-line"><span className="code-keyword">async def</span> <span className="code-function">start</span><span className="code-bracket">(</span><span className="code-param">message</span><span className="code-bracket">):</span></div>
                <div className="code-line code-indent"><span className="code-keyword">await</span> <span className="code-variable">message</span><span className="code-dot">.</span><span className="code-method">answer</span><span className="code-bracket">(</span><span className="code-string">"Привет!"</span><span className="code-bracket">)</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>
          <div className="services-grid">
            {t.services.items.map((service) => (
              <motion.div key={service.title} className={`service-card ${service.featured ? 'featured' : ''}`} whileHover={{ y: -6 }}>
                {service.featured && <div className="service-badge">{service.badge}</div>}
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <div className="service-price">{service.price}</div>
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
          <div className="portfolio-filter">
            {filterKeys.map((key) => (
              <button key={key} type="button" className={`filter-btn ${filter === key ? 'active' : ''}`} onClick={() => setFilter(key)}>
                {t.portfolio.filters[key]}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <motion.article key={item.title} className={`portfolio-item ${index < 3 ? 'featured' : ''}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="portfolio-image">
                  {index < 3 && <span className="portfolio-badge">Featured</span>}
                  <span>{item.icon}</span>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                  <div className="portfolio-technologies">{item.technologies.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-content">
          <div className="about-text">
            <div className="section-header text-left">
              <h2 className="section-title">{t.about.title}</h2>
            </div>
            <p className="about-description">{t.about.description}</p>
            <p className="about-description">{t.about.description2}</p>
            <div className="about-skills">
              <h3>{t.about.skillsTitle}</h3>
              <div className="portfolio-technologies skills-tags">
                {t.about.skills.map((skill) => <span className="tech-tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="avatar">
                <motion.div
                  className="avatar-shine"
                  style={{
                    backgroundImage: "url('/avatar.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <div className="floating-elements">
                <motion.div className="floating-icon python" animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>🐍</motion.div>
                <motion.div className="floating-icon telegram" animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>📱</motion.div>
                <motion.div className="floating-icon web" animate={{ y: [0, -18, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>🌐</motion.div>
                <motion.div className="floating-icon automation" animate={{ y: [0, -22, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>⚡</motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-subtitle">{t.contact.subtitle}</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <a className="contact-item" href="https://t.me/kiinaui" target="_blank" rel="noreferrer">
                <div className="contact-icon">📱</div>
                <div className="contact-details"><h3>{t.contact.telegram.title}</h3><p>{t.contact.telegram.value}</p></div>
              </a>
              <a className="contact-item" href="mailto:kiinaui@icloud.com">
                <div className="contact-icon">✉️</div>
                <div className="contact-details"><h3>{t.contact.email.title}</h3><p>{t.contact.email.value}</p></div>
              </a>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group"><input id="name" name="name" required placeholder=" " /><label htmlFor="name">{t.contact.formLabels.name}</label></div>
              <div className="form-group"><input id="telegram" name="telegram" required placeholder=" " /><label htmlFor="telegram">{t.contact.formLabels.telegram}</label></div>
              <div className="form-group form-group-select">
                <label htmlFor="service">{t.contact.formLabels.service}</label>
                <select id="service" name="service" required defaultValue="">
                  {t.contact.formLabels.serviceOptions.map((option, index) => (
                    <option key={option} value={index === 0 ? '' : option} disabled={index === 0}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-group"><textarea id="message" name="message" required placeholder=" " /><label htmlFor="message">{t.contact.formLabels.message}</label></div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? '...' : t.contact.formLabels.submit}</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo"><span className="logo-accent">Egor Ralovich</span></div>
            <div className="footer-links">
              <button type="button" className="footer-link" onClick={() => scrollTo('services')}>{t.nav.services}</button>
              <button type="button" className="footer-link" onClick={() => scrollTo('portfolio')}>{t.nav.portfolio}</button>
              <button type="button" className="footer-link" onClick={() => scrollTo('contact')}>{t.nav.contact}</button>
            </div>
            <div className="footer-social"><a className="social-link" href="https://t.me/kiinaui" target="_blank" rel="noreferrer">TG</a></div>
          </div>
          <div className="footer-bottom">© {new Date().getFullYear()} {t.footer.rights}</div>
        </div>
      </footer>
    </div>
  )
}

export default App
