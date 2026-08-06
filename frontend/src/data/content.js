export const GA_ID = 'G-93J0D5WFVV'

export const content = {
  ru: {
    nav: {
      services: 'Услуги',
      portfolio: 'Портфолио',
      about: 'Обо мне',
      contact: 'Контакты',
    },
    hero: {
      title1: 'Создаю',
      title2: 'умные решения',
      title3: 'для вашего бизнеса',
      subtitle:
        'Разработка Telegram ботов, скриптов автоматизации и современных веб-сайтов. Превращаю ваши идеи в работающие цифровые продукты.',
      ctaPrimary: 'Обсудить проект',
      ctaSecondary: 'Мои работы',
      stats: [
        { number: '200+', label: 'Проектов' },
        { number: '5+', label: 'Лет опыта' },
        { number: '100%', label: 'Качество' },
      ],
    },
    services: {
      title: 'Мои услуги',
      subtitle: 'Комплексные решения для автоматизации и развития вашего бизнеса',
      items: [
        {
          icon: '🤖',
          title: 'Telegram боты',
          description:
            'Создание умных ботов для автоматизации бизнес-процессов, интеграции с API, обработки заказов и поддержки клиентов.',
          features: [
            'Интеграция с CRM системами',
            'Автоматизация продаж',
            'Система уведомлений',
            'Аналитика и отчетность',
          ],
          price: 'от 300 BYN (7500 ₽)',
          featured: true,
        },
        {
          icon: '⚡',
          title: 'Скрипты автоматизации',
          description:
            'Разработка Python-скриптов для автоматизации рутинных задач, парсинга данных, мониторинга и интеграции систем.',
          features: [
            'Парсинг веб-сайтов',
            'Автоматизация отчетов',
            'Мониторинг систем',
            'Интеграция API',
          ],
          price: 'от 600 BYN (14500 ₽)',
        },
        {
          icon: '🌐',
          title: 'Веб-сайты',
          description:
            'Создание современных адаптивных веб-сайтов с сильным дизайном, оптимизированных для конверсии и поисковых систем.',
          features: [
            'Адаптивный дизайн',
            'SEO оптимизация',
            'Быстрая загрузка',
            'Современные технологии',
          ],
          price: 'от 2600 BYN (63 000 ₽)',
        },
      ],
    },
    portfolio: {
      title: 'Портфолио',
      subtitle: 'Примеры реализованных проектов',
      filters: {
        all: 'Все проекты',
        bots: 'Боты',
        automation: 'Автоматизация',
        sites: 'Сайты',
      },
      items: [
        {
          icon: '📚',
          title: 'Book Writer Bot',
          description:
            'AI backend для генерации книг. Telegram-бот с мультипровайдерной интеграцией LLM (OpenAI, Anthropic, Gemini, DeepSeek), абстракцией провайдеров, генерацией EPUB, SQLite и admin-панелью. Деплой как systemd-сервис на Linux VPS.',
          technologies: ['Python', 'aiogram', 'OpenAI', 'Anthropic', 'Gemini', 'DeepSeek', 'SQLite', 'EPUB'],
          category: 'bots',
        },
        {
          icon: '🛠️',
          title: 'Dev Orchestrator',
          description:
            'Telegram-оркестратор разработки и деплоя: GitHub (PR, issues, commits), Cursor API, удалённое управление серверами через asyncssh. Модульная архитектура services/handlers, YAML-конфиг серверов, автоматический git pull + restart.',
          technologies: ['Python', 'aiogram', 'GitHub API', 'asyncssh', 'YAML', 'Cursor API'],
          category: 'automation',
        },
        {
          icon: '🦆',
          title: 'MyDuck Bot',
          description:
            'Высоконагруженная автоматизация игрового API на Telethon + REST: мониторинг событий, автоматические действия, панель управления. Оптимизация сетевых запросов и управление сессиями.',
          technologies: ['Python', 'Telethon', 'REST API', 'asyncio', 'SQLite'],
          category: 'automation',
        },
        {
          icon: '🤖',
          title: 'Бот для интернет-магазина',
          description: 'Автоматизация обработки заказов и поддержки клиентов с интеграцией в бизнес-процессы магазина.',
          technologies: ['Python', 'Telegram API', 'PostgreSQL'],
          category: 'bots',
        },
        {
          icon: '📊',
          title: 'Система мониторинга цен',
          description: 'Автоматический парсинг и анализ цен конкурентов с уведомлениями и отчётами.',
          technologies: ['Python', 'Selenium', 'BeautifulSoup'],
          category: 'automation',
        },
        {
          icon: '💄',
          title: 'CRM бот для салона красоты',
          description: 'Запись клиентов, напоминания, управление расписанием и админ-панель для персонала.',
          technologies: ['Python', 'aiogram', 'Redis'],
          category: 'bots',
        },
        {
          icon: '🌐',
          title: 'Корпоративный сайт',
          description: 'Современный адаптивный сайт с анимациями, SEO и быстрой загрузкой.',
          technologies: ['HTML/CSS', 'JavaScript', 'GSAP'],
          category: 'sites',
        },
        {
          icon: '📈',
          title: 'Автоматизация действий в браузере',
          description: 'Выполнение сценариев в браузере: отправка сообщений, заполнение форм и другие задачи.',
          technologies: ['Python', 'Selenium'],
          category: 'automation',
        },
      ],
    },
    about: {
      title: 'Обо мне',
      description:
        'Привет! Я Егор Ралович — разработчик с более чем 5-летним опытом создания цифровых решений. Специализируюсь на разработке Telegram ботов, автоматизации бизнес-процессов и создании современных веб-сайтов.',
      description2:
        'Моя цель — помочь вашему бизнесу стать более эффективным через умную автоматизацию и качественные цифровые продукты. Каждый проект для меня — это возможность создать что-то действительно полезное и красивое.',
      skillsTitle: 'Технологии, которые я использую:',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Telegram API', level: 98 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'React', level: 85 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    contact: {
      title: 'Готовы начать проект?',
      subtitle: 'Свяжитесь со мной для обсуждения вашей задачи',
      telegram: { title: 'Telegram', value: '@kiinaui' },
      email: { title: 'Email', value: 'kiinaui@icloud.com' },
      formLabels: {
        name: 'Ваше имя',
        telegram: 'Телеграм',
        service: 'Тип услуги',
        message: 'Описание проекта',
        submit: 'Отправить заявку',
        serviceOptions: [
          'Выберите услугу',
          'Telegram бот',
          'Скрипт автоматизации',
          'Веб-сайт',
          'Консультация',
        ],
      },
      success: 'Спасибо! Ваше сообщение отправлено.',
      error: 'Ошибка отправки. Попробуйте позже или напишите в Telegram.',
    },
    footer: {
      rights: 'Егор Ралович. Все права защищены.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title1: 'Building',
      title2: 'smart solutions',
      title3: 'for your business',
      subtitle:
        'Development of Telegram bots, automation scripts and modern websites. I turn your ideas into working digital products.',
      ctaPrimary: 'Discuss project',
      ctaSecondary: 'My work',
      stats: [
        { number: '200+', label: 'Projects' },
        { number: '5+', label: 'Years' },
        { number: '100%', label: 'Quality' },
      ],
    },
    services: {
      title: 'My services',
      subtitle: 'Comprehensive solutions for automation and business growth',
      items: [
        {
          icon: '🤖',
          title: 'Telegram Bots',
          description:
            'Smart bots for business automation, API integrations, order processing and customer support.',
          features: ['CRM integrations', 'Sales automation', 'Notification system', 'Analytics and reporting'],
          price: 'from $100',
          featured: true,
        },
        {
          icon: '⚡',
          title: 'Automation scripts',
          description:
            'Python scripts for routine tasks, data parsing, monitoring and system integrations.',
          features: ['Web scraping', 'Report automation', 'System monitoring', 'API integration'],
          price: 'from $200',
        },
        {
          icon: '🌐',
          title: 'Websites',
          description:
            'Modern responsive websites with strong design, optimized for conversion and search engines.',
          features: ['Responsive design', 'SEO optimization', 'Fast loading', 'Modern stack'],
          price: 'from $860',
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Selected delivered projects',
      filters: {
        all: 'All projects',
        bots: 'Bots',
        automation: 'Automation',
        sites: 'Sites',
      },
      items: [
        {
          icon: '📚',
          title: 'Book Writer Bot',
          description:
            'AI backend for book generation. Telegram bot with multi-provider LLM integration (OpenAI, Anthropic, Gemini, DeepSeek), provider abstraction, EPUB export, SQLite and admin panel. Deployed as a systemd service on Linux VPS.',
          technologies: ['Python', 'aiogram', 'OpenAI', 'Anthropic', 'Gemini', 'DeepSeek', 'SQLite', 'EPUB'],
          category: 'bots',
        },
        {
          icon: '🛠️',
          title: 'Dev Orchestrator',
          description:
            'Telegram orchestrator for development and deployment: GitHub (PR, issues, commits), Cursor API, remote server management via asyncssh. Modular services/handlers architecture, YAML server config, automatic git pull + restart.',
          technologies: ['Python', 'aiogram', 'GitHub API', 'asyncssh', 'YAML', 'Cursor API'],
          category: 'automation',
        },
        {
          icon: '🦆',
          title: 'MyDuck Bot',
          description:
            'High-load game API automation with Telethon + REST: event monitoring, automated actions, control panel. Network request optimization and session management.',
          technologies: ['Python', 'Telethon', 'REST API', 'asyncio', 'SQLite'],
          category: 'automation',
        },
        {
          icon: '🤖',
          title: 'E-commerce Bot',
          description: 'Order processing automation and customer support for an online store.',
          technologies: ['Python', 'Telegram API', 'PostgreSQL'],
          category: 'bots',
        },
        {
          icon: '📊',
          title: 'Price Monitoring System',
          description: 'Automated competitor price parsing and analysis with alerts and reports.',
          technologies: ['Python', 'Selenium', 'BeautifulSoup'],
          category: 'automation',
        },
        {
          icon: '💄',
          title: 'Beauty Salon CRM Bot',
          description: 'Client booking, reminders, schedule management and admin panel.',
          technologies: ['Python', 'aiogram', 'Redis'],
          category: 'bots',
        },
        {
          icon: '🌐',
          title: 'Corporate Website',
          description: 'Modern responsive website with animations, SEO and fast loading.',
          technologies: ['HTML/CSS', 'JavaScript', 'GSAP'],
          category: 'sites',
        },
        {
          icon: '📈',
          title: 'Browser Automation',
          description: 'Browser scenario execution: messaging, form filling and repetitive workflows.',
          technologies: ['Python', 'Selenium'],
          category: 'automation',
        },
      ],
    },
    about: {
      title: 'About me',
      description:
        'Hi! I am Egor Ralovich — a developer with 5+ years of experience building digital products. I specialize in Telegram bots, business automation and modern websites.',
      description2:
        'My goal is to make your business more efficient through smart automation and high-quality software. Every project is a chance to build something truly useful and polished.',
      skillsTitle: 'Technologies I use:',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Telegram API', level: 98 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'React', level: 85 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    contact: {
      title: 'Ready to start a project?',
      subtitle: 'Contact me to discuss your task',
      telegram: { title: 'Telegram', value: '@kiinaui' },
      email: { title: 'Email', value: 'kiinaui@icloud.com' },
      formLabels: {
        name: 'Your name',
        telegram: 'Telegram',
        service: 'Service type',
        message: 'Project description',
        submit: 'Send request',
        serviceOptions: ['Select service', 'Telegram bot', 'Automation script', 'Website', 'Consultation'],
      },
      success: 'Thank you! Your message has been sent.',
      error: 'Sending failed. Please try later or message me on Telegram.',
    },
    footer: {
      rights: 'Egor Ralovich. All rights reserved.',
    },
  },
}
