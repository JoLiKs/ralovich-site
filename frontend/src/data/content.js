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
        'Разрабатываю SaaS-платформы, backend и API, автоматизацию и мобильные приложения. Превращаю ваши идеи в работающие цифровые продукты.',
      ctaPrimary: 'Обсудить проект',
      ctaSecondary: 'Мои работы',
      stats: [
        { number: '200+', label: 'Проектов' },
        { number: '5+', label: 'Лет опыта' },
        { number: 'Под ключ', label: 'От идеи до запуска' },
      ],
    },
    services: {
      "title": "Мои услуги",
      "subtitle": "Backend, SaaS и автоматизация – от идеи до работающего продукта",
      "items": [
        {
          "icon": "🚀",
          "title": "SaaS-проекты",
          "description": "Полный цикл разработки SaaS: от идеи и MVP до продукта, который готов принимать пользователей и расти.",
          "features": [
            "Идея, прототип и MVP",
            "Backend и REST API",
            "Админ-панель и личные кабинеты",
            "Авторизация, роли и права доступа",
            "Интеграция оплат и подписок",
            "Деплой, мониторинг и масштабирование"
          ],
          "price": "от 2600 BYN (63 000 ₽)",
          "featured": true,
          "badge": "Популярно"
        },
        {
          "icon": "⚡",
          "title": "Скрипты автоматизации",
          "description": "Python-скрипты и сервисы для рутинных задач: парсинг, мониторинг, интеграции и автоматизация действий в браузере.",
          "features": [
            "Парсинг веб-сайтов и API",
            "Мониторинг цен и сервисов",
            "Автоматизация в браузере",
            "Интеграция API"
          ],
          "price": "от 600 BYN (14500 ₽)"
        },
        {
          "icon": "📱",
          "title": "Мобильные приложения на Flutter",
          "description": "Приложения под Android и iOS из одного кода – в связке с вашим backend и админкой.",
          "features": [
            "Один код – Android и iOS",
            "Работа с GPS и камерой",
            "Офлайн-режим и синхронизация",
            "Push-уведомления (FCM)"
          ],
          "price": "по запросу"
        }
      ]
    },
    portfolio: {
      "title": "Портфолио",
      "subtitle": "Реальные проекты: задача → решение → стек",
      "filters": {
        "all": "Все проекты",
        "saas": "SaaS и платформы",
        "automation": "Автоматизация"
      },
      "labels": {
        "problem": "Задача",
        "solution": "Решение",
        "features": "Что умеет",
        "link": "Код на GitHub",
        "live": "Открыть тренажёр",
        "featured": "Избранное"
      },
      "carousel": { "title": "Проекты в работе", "projectLabel": "Проект в работе", "noLink": "Под NDA" },
      "testimonials": [],
      "items": [
          {
            "icon": "🚚",
            "title": "Платформа для службы доставки",
            "category": "saas",
            "problem": "Службе доставки нужна единая система для приёма заказов, управления курьерами и отслеживания доставок.",
            "solution": "Backend с API и фоновыми задачами, панель диспетчера, админ-панель и мобильное приложение курьера на Flutter.",
            "features": [
              "Приложение курьера: смены, список заказов, скан штрихкода, фото и подпись при вручении",
              "GPS-трекинг курьеров с офлайн-буфером на случай потери сети",
              "Управление заказами и курьерами, статусы доставки",
              "Админ-панель: настройки интеграций (SMS, push, хранилище файлов)",
              "Публичная страница отслеживания заказа для получателя"
            ],
            "technologies": [
              "Node.js",
              "TypeScript",
              "PostgreSQL",
              "Flutter",
              "Docker"
            ]
          },
        {
          "icon": "🎤",
          "title": "Тренажёр по собеседованиям",
          "category": "saas",
          "problem": "Подготовиться к техническому собеседованию сложно без живой практики с интервьюером.",
          "solution": "Веб-симулятор технического интервью: диалог с AI-рекрутером по выбранному стеку и грейду с вердиктом в конце.",
          "features": [
            "Выбор языка (RU / EN), стека и грейда – от Intern до Lead",
            "Живой диалог с AI-рекрутером через Cursor API",
            "Итоговый вердикт HIRE / REJECT",
            "Админка: ключ API, список сессий, блокировка по IP"
          ],
          "technologies": [
            "Python",
            "Flask",
            "Cursor API",
            "JavaScript",
            "Gunicorn",
            "nginx"
          ],
          "link": "https://github.com/JoLiKs/Conversations",
          "liveLink": "https://ralovich.com/conversation/"
        },
        {
          "icon": "🌱",
          "title": "«Второй старт» – HR-платформа",
          "category": "saas",
          "problem": "Людям после длительного перерыва (декрет, уход за близкими, лечение) трудно вернуться на рынок труда, а работодателям – найти таких кандидатов.",
          "solution": "Платформа с кабинетами соискателя и рекрутера: вакансии, отклики, интервью и воронка найма в одном сервисе.",
          "features": [
            "Регистрация, вход и восстановление пароля (JWT)",
            "Профиль с опытом, перерывом, навыками и резюме PDF",
            "Каталог вакансий с фильтрами и меткой return-friendly",
            "Kanban-воронка с drag-and-drop и назначение интервью"
          ],
          "technologies": [
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "React",
            "Vite",
            "Docker Compose"
          ],
          "link": "https://github.com/JoLiKs/vtoroy-start"
        },
        {
          "icon": "🛠️",
          "title": "Dev Orchestrator",
          "category": "automation",
          "problem": "Работа с репозиториями, правками кода и деплоем на разные серверы требовала переключения между множеством инструментов.",
          "solution": "Единая точка управления разработкой и деплоем: GitHub, Cursor API и серверы по SSH, с управлением из Telegram.",
          "features": [
            "Репозитории, PR, issues и коммиты GitHub",
            "Запуск Cursor-агента для правок кода в репозитории",
            "Деплой по SSH: git pull + перезапуск сервиса",
            "YAML-конфиг серверов, whitelist пользователей"
          ],
          "technologies": [
            "Python",
            "asyncssh",
            "PyGithub",
            "Cursor API",
            "YAML",
            "systemd"
          ]
        },
        {
          "icon": "📊",
          "title": "Crypto Arbitrage Finder",
          "category": "automation",
          "problem": "Нужно быстро сравнивать цены криптовалют на разных биржах и видеть арбитражные возможности.",
          "solution": "Асинхронное Python-приложение, которое собирает цены с бирж (Binance, Coinbase) и показывает спреды.",
          "features": [
            "Асинхронные запросы через httpx",
            "Валидация ответов через Pydantic",
            "Retry-логика и LRU-кеш",
            "CLI на Typer и веб-интерфейс на FastAPI",
            "Юнит-тесты на pytest"
          ],
          "technologies": [
            "Python",
            "asyncio",
            "httpx",
            "FastAPI",
            "Pydantic",
            "Typer"
          ],
          "link": "https://github.com/JoLiKs/Crypto-Arbitrage-Finder"
        },
        {
          "icon": "📈",
          "title": "PulseWatch – мониторинг доступности",
          "category": "automation",
          "problem": "Нужно регулярно проверять доступность HTTP-сервисов и считать SLA.",
          "solution": "Асинхронный монитор: параллельные проверки эндпоинтов и отчёты по SLA.",
          "features": [
            "Параллельные проверки с настраиваемой конкурентностью",
            "Повторы с экспоненциальной задержкой",
            "Аптайм, задержки p50/p95/p99, доля ошибок",
            "Дашборд в терминале, экспорт в JSON/CSV"
          ],
          "technologies": [
            "Python",
            "asyncio",
            "YAML",
            "pytest"
          ],
          "link": "https://github.com/JoLiKs/pulsewatch"
        },
        {
          "icon": "🌐",
          "title": "Автоматизация действий в браузере",
          "category": "automation",
          "problem": "Ответы на входящие сообщения на площадке объявлений отнимали время вручную.",
          "solution": "Скрипт, который сам заходит в аккаунт, находит непрочитанные чаты и отвечает в них.",
          "features": [
            "Вход по сохранённым cookies",
            "Поиск непрочитанных чатов",
            "Человекоподобный ввод и прокрутка",
            "undetected-chromedriver"
          ],
          "technologies": [
            "Python",
            "Selenium",
            "undetected-chromedriver"
          ]
        }
      ]
    },
    about: {
      title: 'Обо мне',
      description:
        'Привет! Я Егор Ралович – разработчик с более чем 5-летним опытом создания цифровых решений. Специализируюсь на backend-разработке, SaaS-платформах и автоматизации бизнес-процессов.',
      description2:
        'Моя цель – помочь вашему бизнесу стать более эффективным через умную автоматизацию и качественные цифровые продукты. Каждый проект для меня – это возможность создать что-то действительно полезное и красивое.',
      skillsTitle: 'Технологии, которые я использую:',
      skills: ['Python', 'FastAPI', 'Flask', 'asyncio', 'Node.js', 'TypeScript', 'React', 'Flutter', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Selenium', 'Playwright'],
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
          'SaaS-проект',
          'Скрипт автоматизации',
          'Мобильное приложение',
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
        'I build SaaS platforms, backends and APIs, automation and mobile apps. I turn your ideas into working digital products.',
      ctaPrimary: 'Discuss project',
      ctaSecondary: 'My work',
      stats: [
        { number: '200+', label: 'Projects' },
        { number: '5+', label: 'Years' },
        { number: 'End-to-end', label: 'From idea to launch' },
      ],
    },
    services: {
      "title": "My services",
      "subtitle": "Backend, SaaS and automation – from idea to a working product",
      "items": [
        {
          "icon": "🚀",
          "title": "SaaS projects",
          "description": "Full-cycle SaaS development: from idea and MVP to a product ready to onboard users and grow.",
          "features": [
            "Idea, prototype and MVP",
            "Backend and REST API",
            "Admin panel and user dashboards",
            "Auth, roles and permissions",
            "Payments and subscriptions",
            "Deploy, monitoring and scaling"
          ],
          "price": "from $860",
          "featured": true,
          "badge": "Popular"
        },
        {
          "icon": "⚡",
          "title": "Automation scripts",
          "description": "Python scripts and services for routine work: scraping, monitoring, integrations and browser automation.",
          "features": [
            "Website and API scraping",
            "Price and service monitoring",
            "Browser automation",
            "API integration"
          ],
          "price": "from $200"
        },
        {
          "icon": "📱",
          "title": "Flutter mobile apps",
          "description": "Android and iOS apps from a single codebase, connected to your backend and admin panel.",
          "features": [
            "One codebase for Android and iOS",
            "GPS and camera",
            "Offline mode and sync",
            "Push notifications (FCM)"
          ],
          "price": "on request"
        }
      ]
    },
    portfolio: {
      "title": "Portfolio",
      "subtitle": "Real projects: problem → solution → stack",
      "filters": {
        "all": "All projects",
        "saas": "SaaS & platforms",
        "automation": "Automation"
      },
      "labels": {
        "problem": "Problem",
        "solution": "Solution",
        "features": "Features",
        "link": "Code on GitHub",
        "live": "Open trainer",
        "featured": "Featured"
      },
      "carousel": { "title": "Projects in progress", "projectLabel": "Project in progress", "noLink": "Under NDA" },
      "testimonials": [],
      "items": [
          {
            "icon": "🚚",
            "title": "Delivery service platform",
            "category": "saas",
            "problem": "A delivery service needed one system for order intake, courier management and delivery tracking.",
            "solution": "A backend with an API and background jobs, a dispatcher panel, an admin panel and a Flutter courier app.",
            "features": [
              "Courier app: shifts, order list, barcode scan, photo and signature on delivery",
              "Courier GPS tracking with an offline buffer for network loss",
              "Order and courier management, delivery statuses",
              "Admin panel: integration settings (SMS, push, file storage)",
              "Public order tracking page for the recipient"
            ],
            "technologies": [
              "Node.js",
              "TypeScript",
              "PostgreSQL",
              "Flutter",
              "Docker"
            ]
          },
        {
          "icon": "🎤",
          "title": "Interview trainer",
          "category": "saas",
          "problem": "Preparing for a technical interview is hard without live practice with an interviewer.",
          "solution": "A web simulator of a technical interview: a dialogue with an AI recruiter for the chosen stack and level, with a verdict at the end.",
          "features": [
            "Language (RU / EN), stack and level – from Intern to Lead",
            "Live dialogue with an AI recruiter via Cursor API",
            "Final verdict: HIRE / REJECT",
            "Admin: API key, session list, IP blocking"
          ],
          "technologies": [
            "Python",
            "Flask",
            "Cursor API",
            "JavaScript",
            "Gunicorn",
            "nginx"
          ],
          "link": "https://github.com/JoLiKs/Conversations",
          "liveLink": "https://ralovich.com/conversation/"
        },
        {
          "icon": "🌱",
          "title": "“Second Start” – HR platform",
          "category": "saas",
          "problem": "People returning after a long break (parental leave, caregiving, treatment) struggle to re-enter the job market, and employers struggle to find them.",
          "solution": "A platform with candidate and recruiter dashboards: vacancies, applications, interviews and hiring funnel in one service.",
          "features": [
            "Sign-up, login and password reset (JWT)",
            "Profile with experience, career break, skills and PDF resume",
            "Vacancy catalog with filters and a return-friendly tag",
            "Kanban funnel with drag-and-drop and interview scheduling"
          ],
          "technologies": [
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "React",
            "Vite",
            "Docker Compose"
          ],
          "link": "https://github.com/JoLiKs/vtoroy-start"
        },
        {
          "icon": "🛠️",
          "title": "Dev Orchestrator",
          "category": "automation",
          "problem": "Working with repos, code changes and deploys to several servers meant switching between many tools.",
          "solution": "A single control point for development and deployment: GitHub, Cursor API and servers over SSH, controlled from Telegram.",
          "features": [
            "GitHub repos, PRs, issues and commits",
            "Run a Cursor agent to change code in a repo",
            "SSH deploy: git pull + service restart",
            "YAML server config, user whitelist"
          ],
          "technologies": [
            "Python",
            "asyncssh",
            "PyGithub",
            "Cursor API",
            "YAML",
            "systemd"
          ]
        },
        {
          "icon": "📊",
          "title": "Crypto Arbitrage Finder",
          "category": "automation",
          "problem": "Quickly compare crypto prices across exchanges and spot arbitrage opportunities.",
          "solution": "An async Python app that collects prices from exchanges (Binance, Coinbase) and shows spreads.",
          "features": [
            "Async requests via httpx",
            "Response validation with Pydantic",
            "Retry logic and LRU cache",
            "Typer CLI and FastAPI web UI",
            "pytest unit tests"
          ],
          "technologies": [
            "Python",
            "asyncio",
            "httpx",
            "FastAPI",
            "Pydantic",
            "Typer"
          ],
          "link": "https://github.com/JoLiKs/Crypto-Arbitrage-Finder"
        },
        {
          "icon": "📈",
          "title": "PulseWatch – uptime monitoring",
          "category": "automation",
          "problem": "HTTP services need regular availability checks and SLA calculation.",
          "solution": "An async monitor: concurrent endpoint checks and SLA reports.",
          "features": [
            "Concurrent checks with configurable concurrency",
            "Exponential backoff retries",
            "Uptime, p50/p95/p99 latency, error rate",
            "Terminal dashboard, JSON/CSV export"
          ],
          "technologies": [
            "Python",
            "asyncio",
            "YAML",
            "pytest"
          ],
          "link": "https://github.com/JoLiKs/pulsewatch"
        },
        {
          "icon": "🌐",
          "title": "Browser automation",
          "category": "automation",
          "problem": "Replying to incoming messages on a classifieds site took manual time.",
          "solution": "A script that logs in, finds unread chats and replies to them.",
          "features": [
            "Login via saved cookies",
            "Finding unread chats",
            "Human-like typing and scrolling",
            "undetected-chromedriver"
          ],
          "technologies": [
            "Python",
            "Selenium",
            "undetected-chromedriver"
          ]
        }
      ]
    },
    about: {
      title: 'About me',
      description:
        'Hi! I am Egor Ralovich – a developer with 5+ years of experience building digital products. I specialize in backend development, SaaS platforms and business automation.',
      description2:
        'My goal is to make your business more efficient through smart automation and high-quality software. Every project is a chance to build something truly useful and polished.',
      skillsTitle: 'Technologies I use:',
      skills: ['Python', 'FastAPI', 'Flask', 'asyncio', 'Node.js', 'TypeScript', 'React', 'Flutter', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Selenium', 'Playwright'],
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
        serviceOptions: ['Select service', 'SaaS project', 'Automation script', 'Mobile app', 'Consultation'],
      },
      success: 'Thank you! Your message has been sent.',
      error: 'Sending failed. Please try later or message me on Telegram.',
    },
    footer: {
      rights: 'Egor Ralovich. All rights reserved.',
    },
  },
}
