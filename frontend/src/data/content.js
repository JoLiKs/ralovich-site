export const GA_ID = 'G-93J0D5WFVV'

export const content = {
  ru: {
    nav: {
      services: 'Услуги',
      process: 'Как работаю',
      portfolio: 'Кейсы',
      about: 'Опыт',
      contact: 'Заказать',
    },
    hero: {
      brand: 'Egor Ralovich',
      title: 'Автоматизация, которая окупается',
      subtitle:
        'Telegram-боты, скрипты и сайты под ключ — от идеи до продакшена. 5+ лет и 200+ запусков для бизнеса, которому нужен результат, а не демо.',
      ctaPrimary: 'Получить расчёт',
      ctaSecondary: 'Смотреть кейсы',
      ctaTelegram: 'Написать в Telegram',
    },
    proof: {
      items: [
        { number: '200+', label: 'Запущенных проектов' },
        { number: '5+', label: 'Лет в продакшене' },
        { number: '24ч', label: 'Ответ по задаче' },
        { number: '100%', label: 'Сдача в срок' },
      ],
    },
    services: {
      title: 'Что заказываете',
      subtitle: 'Фиксированный старт цены. Понятный объём. Без размытых «оценок на глаз».',
      cta: 'Заказать',
      items: [
        {
          tag: 'Хит',
          title: 'Telegram-боты',
          description:
            'Продажи, запись, поддержка и CRM в одном боте. Клиент пишет — система отвечает, принимает оплату и ведёт сделку.',
          features: [
            'Интеграция с CRM и платёжками',
            'Автоворонки и уведомления',
            'Админ-панель и аналитика',
            'Деплой и сопровождение',
          ],
          price: 'от 300 BYN',
          priceHint: '~7 500 ₽',
          featured: true,
        },
        {
          tag: 'Экономия времени',
          title: 'Автоматизация',
          description:
            'Скрипты, которые убирают рутину: парсинг, мониторинг, отчёты, синхронизация систем. Часы работы — за минуты.',
          features: [
            'Парсинг и сбор данных',
            'Мониторинг и алерты',
            'Отчёты без ручного труда',
            'Связка API и сервисов',
          ],
          price: 'от 600 BYN',
          priceHint: '~14 500 ₽',
        },
        {
          tag: 'Конверсия',
          title: 'Веб-сайты',
          description:
            'Сайты, которые продают: быстрые, адаптивные, с понятной структурой и SEO. Не «красивая витрина», а инструмент заявок.',
          features: [
            'Дизайн под конверсию',
            'SEO и скорость',
            'Адаптив под все устройства',
            'Формы и аналитика',
          ],
          price: 'от 2 600 BYN',
          priceHint: '~63 000 ₽',
        },
      ],
    },
    process: {
      title: 'Как проходит заказ',
      subtitle: 'Четыре шага — от первого сообщения до работающего продукта.',
      steps: [
        {
          num: '01',
          title: 'Бриф',
          text: 'Пишете задачу в Telegram или через форму. Уточняю цели, сроки и бюджет — без воды.',
        },
        {
          num: '02',
          title: 'План и цена',
          text: 'Даю конкретный объём работ, этапы и фиксированную стоимость. Согласовываем — стартуем.',
        },
        {
          num: '03',
          title: 'Разработка',
          text: 'Собираю решение, показываю промежуточные результаты. Вы видите прогресс, а не «чёрный ящик».',
        },
        {
          num: '04',
          title: 'Запуск',
          text: 'Деплой, проверка, передача доступов. При необходимости — поддержка и доработки.',
        },
      ],
    },
    portfolio: {
      title: 'Кейсы',
      subtitle: 'Не скриншоты кода — реальные задачи бизнеса, которые уже работают.',
      filters: {
        all: 'Все',
        bots: 'Боты',
        automation: 'Автоматизация',
        sites: 'Сайты',
      },
      items: [
        {
          title: 'Book Writer Bot',
          result: 'AI-генерация книг в Telegram: несколько LLM-провайдеров, EPUB, админка. Клиент запускает контент-продукт без команды разработчиков.',
          technologies: ['Python', 'aiogram', 'OpenAI', 'Anthropic'],
          category: 'bots',
        },
        {
          title: 'Dev Orchestrator',
          result: 'Один бот управляет GitHub, серверами и деплоем. Команда сократила ручные релизы и перестала терять время на рутину.',
          technologies: ['Python', 'GitHub API', 'asyncssh'],
          category: 'automation',
        },
        {
          title: 'MyDuck Bot',
          result: 'Высоконагруженная автоматизация игрового API: события, действия, панель. Стабильная работа под нагрузкой.',
          technologies: ['Telethon', 'REST', 'asyncio'],
          category: 'automation',
        },
        {
          title: 'Бот интернет-магазина',
          result: 'Заказы и поддержка в Telegram с привязкой к процессам магазина — меньше потерянных заявок.',
          technologies: ['Python', 'Telegram API', 'PostgreSQL'],
          category: 'bots',
        },
        {
          title: 'Мониторинг цен',
          result: 'Автосбор цен конкурентов с уведомлениями — решения по прайсу принимаются быстрее рынка.',
          technologies: ['Python', 'Selenium', 'BeautifulSoup'],
          category: 'automation',
        },
        {
          title: 'CRM для салона красоты',
          result: 'Запись, напоминания и расписание в боте — администратор меньше звонит, клиенты реже «забывают».',
          technologies: ['aiogram', 'Redis'],
          category: 'bots',
        },
        {
          title: 'Корпоративный сайт',
          result: 'Быстрый адаптивный сайт с SEO и анимациями — витрина, которая приводит заявки.',
          technologies: ['HTML/CSS', 'JavaScript', 'GSAP'],
          category: 'sites',
        },
        {
          title: 'Браузерная автоматизация',
          result: 'Сценарии в браузере вместо ручного кликанья — часы работы сжимаются в минуты.',
          technologies: ['Python', 'Selenium'],
          category: 'automation',
        },
      ],
    },
    about: {
      title: 'Почему мне доверяют',
      description:
        'Я Егор Ралович — разработчик с 5+ годами в продакшене. Специализация: Telegram-боты, автоматизация и сайты, которые должны работать каждый день, а не только на демо.',
      description2:
        'Беру задачу целиком: архитектура, код, интеграции, деплой. Говорю по делу, держу сроки и не пропадаю после оплаты. Если нужно — сопровождаю продукт после запуска.',
      points: [
        { title: 'Продакшен, не pet-проекты', text: '200+ реальных запусков — от MVP до нагруженных систем.' },
        { title: 'Полный цикл', text: 'От ТЗ до сервера: бот/сайт живёт, а не лежит в архиве.' },
        { title: 'Прямой контакт', text: 'Работаете со мной лично — без менеджеров и «передам программисту».' },
        { title: 'Стек под задачу', text: 'Python, JS/React, Telegram API, PostgreSQL, Redis — выбираю то, что решает цель.' },
      ],
      skills: ['Python', 'JavaScript', 'React', 'Telegram API', 'PostgreSQL', 'Redis', 'Selenium', 'aiogram'],
    },
    contact: {
      title: 'Готовы обсудить задачу?',
      subtitle: 'Напишите в Telegram — отвечу в течение суток. Или оставьте заявку: разберу и предложу план с ценой.',
      telegram: { title: 'Telegram', value: '@kiinaui', hint: 'Самый быстрый способ' },
      email: { title: 'Email', value: 'kiinaui@icloud.com' },
      guarantee: 'Бесплатная оценка объёма. Без обязательств до согласования.',
      formLabels: {
        name: 'Ваше имя',
        telegram: 'Telegram',
        service: 'Что нужно',
        message: 'Кратко о задаче',
        submit: 'Отправить заявку',
        serviceOptions: [
          'Выберите услугу',
          'Telegram бот',
          'Скрипт автоматизации',
          'Веб-сайт',
          'Консультация',
        ],
      },
      success: 'Заявка отправлена. Свяжусь с вами в ближайшее время.',
      error: 'Не удалось отправить. Напишите напрямую в Telegram @kiinaui',
    },
    footer: {
      rights: 'Егор Ралович. Все права защищены.',
      tagline: 'Боты · Автоматизация · Сайты',
    },
  },
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      portfolio: 'Cases',
      about: 'Experience',
      contact: 'Hire me',
    },
    hero: {
      brand: 'Egor Ralovich',
      title: 'Automation that pays for itself',
      subtitle:
        'Telegram bots, scripts and websites — from idea to production. 5+ years and 200+ launches for businesses that need results, not demos.',
      ctaPrimary: 'Get a quote',
      ctaSecondary: 'View cases',
      ctaTelegram: 'Message on Telegram',
    },
    proof: {
      items: [
        { number: '200+', label: 'Launched projects' },
        { number: '5+', label: 'Years in production' },
        { number: '24h', label: 'Response time' },
        { number: '100%', label: 'On-time delivery' },
      ],
    },
    services: {
      title: 'What you can order',
      subtitle: 'Clear starting price. Defined scope. No vague “ballpark” estimates.',
      cta: 'Order',
      items: [
        {
          tag: 'Popular',
          title: 'Telegram bots',
          description:
            'Sales, booking, support and CRM in one bot. The client messages — the system replies, takes payment and moves the deal.',
          features: [
            'CRM & payment integrations',
            'Funnels and notifications',
            'Admin panel & analytics',
            'Deploy and support',
          ],
          price: 'from $100',
          priceHint: '',
          featured: true,
        },
        {
          tag: 'Time saver',
          title: 'Automation',
          description:
            'Scripts that remove busywork: scraping, monitoring, reports, system sync. Hours of work compressed into minutes.',
          features: ['Data scraping', 'Monitoring & alerts', 'Automated reports', 'API wiring'],
          price: 'from $200',
          priceHint: '',
        },
        {
          tag: 'Conversion',
          title: 'Websites',
          description:
            'Sites built to convert: fast, responsive, clear structure and SEO. Not a pretty facade — a lead machine.',
          features: ['Conversion-first design', 'SEO & speed', 'Fully responsive', 'Forms & analytics'],
          price: 'from $860',
          priceHint: '',
        },
      ],
    },
    process: {
      title: 'How the order works',
      subtitle: 'Four steps — from first message to a live product.',
      steps: [
        {
          num: '01',
          title: 'Brief',
          text: 'Send the task via Telegram or the form. I clarify goals, timeline and budget — no fluff.',
        },
        {
          num: '02',
          title: 'Plan & price',
          text: 'You get a concrete scope, milestones and a fixed price. Agree — we start.',
        },
        {
          num: '03',
          title: 'Build',
          text: 'I ship the solution with progress checkpoints. You see movement, not a black box.',
        },
        {
          num: '04',
          title: 'Launch',
          text: 'Deploy, verify, hand over access. Support and iterations available after go-live.',
        },
      ],
    },
    portfolio: {
      title: 'Cases',
      subtitle: 'Not code screenshots — real business problems already in production.',
      filters: {
        all: 'All',
        bots: 'Bots',
        automation: 'Automation',
        sites: 'Sites',
      },
      items: [
        {
          title: 'Book Writer Bot',
          result:
            'AI book generation in Telegram: multi-provider LLMs, EPUB, admin panel. Client ships a content product without a dev team.',
          technologies: ['Python', 'aiogram', 'OpenAI', 'Anthropic'],
          category: 'bots',
        },
        {
          title: 'Dev Orchestrator',
          result:
            'One bot drives GitHub, servers and deploys. The team cut manual releases and stopped bleeding time on ops.',
          technologies: ['Python', 'GitHub API', 'asyncssh'],
          category: 'automation',
        },
        {
          title: 'MyDuck Bot',
          result: 'High-load game API automation: events, actions, control panel. Stable under pressure.',
          technologies: ['Telethon', 'REST', 'asyncio'],
          category: 'automation',
        },
        {
          title: 'E-commerce bot',
          result: 'Orders and support in Telegram wired to store workflows — fewer lost leads.',
          technologies: ['Python', 'Telegram API', 'PostgreSQL'],
          category: 'bots',
        },
        {
          title: 'Price monitoring',
          result: 'Automated competitor pricing with alerts — pricing decisions move faster than the market.',
          technologies: ['Python', 'Selenium', 'BeautifulSoup'],
          category: 'automation',
        },
        {
          title: 'Beauty salon CRM',
          result: 'Booking, reminders and schedule in a bot — less phone time, fewer no-shows.',
          technologies: ['aiogram', 'Redis'],
          category: 'bots',
        },
        {
          title: 'Corporate website',
          result: 'Fast responsive site with SEO and motion — a storefront that brings inquiries.',
          technologies: ['HTML/CSS', 'JavaScript', 'GSAP'],
          category: 'sites',
        },
        {
          title: 'Browser automation',
          result: 'Browser scenarios instead of manual clicking — hours collapsed into minutes.',
          technologies: ['Python', 'Selenium'],
          category: 'automation',
        },
      ],
    },
    about: {
      title: 'Why clients trust me',
      description:
        'I am Egor Ralovich — a developer with 5+ years in production. Focus: Telegram bots, automation and websites that must run every day, not just on a demo.',
      description2:
        'I own the full loop: architecture, code, integrations, deploy. Straight talk, deadlines kept, no vanishing after payment. Post-launch support available.',
      points: [
        { title: 'Production, not toys', text: '200+ real launches — from MVP to high-load systems.' },
        { title: 'Full cycle', text: 'From brief to server: the product lives, not sits in an archive.' },
        { title: 'Direct contact', text: 'You work with me personally — no middlemen.' },
        { title: 'Stack for the goal', text: 'Python, JS/React, Telegram API, PostgreSQL, Redis — chosen to solve the job.' },
      ],
      skills: ['Python', 'JavaScript', 'React', 'Telegram API', 'PostgreSQL', 'Redis', 'Selenium', 'aiogram'],
    },
    contact: {
      title: 'Ready to talk about your task?',
      subtitle: 'Message on Telegram — I reply within a day. Or leave a request: I’ll review and send a plan with pricing.',
      telegram: { title: 'Telegram', value: '@kiinaui', hint: 'Fastest way' },
      email: { title: 'Email', value: 'kiinaui@icloud.com' },
      guarantee: 'Free scope estimate. No commitment until we agree.',
      formLabels: {
        name: 'Your name',
        telegram: 'Telegram',
        service: 'What you need',
        message: 'Short description',
        submit: 'Send request',
        serviceOptions: ['Select service', 'Telegram bot', 'Automation script', 'Website', 'Consultation'],
      },
      success: 'Request sent. I’ll get back to you soon.',
      error: 'Sending failed. Message me directly on Telegram @kiinaui',
    },
    footer: {
      rights: 'Egor Ralovich. All rights reserved.',
      tagline: 'Bots · Automation · Websites',
    },
  },
}
