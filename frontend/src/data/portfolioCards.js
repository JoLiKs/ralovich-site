// Presentation layer for portfolio grid cards: accent, visual and short human copy per project id.
export const cardMeta = {
  delivery: { accent: '#f59e0b', visual: 'delivery', wide: true },
  interview: { accent: '#22d3ee', visual: 'interview', wide: true },
  vtoroy: { accent: '#34d399', visual: 'kanban' },
  devorch: { accent: '#a78bfa', visual: 'telegram' },
  crypto: { accent: '#facc15', visual: 'exchange' },
  pulse: { accent: '#fb7185', visual: 'terminal' },
}

export const cardCopy = {
  ru: {
    delivery: { kicker: 'Логистика · под NDA', tagline: 'Заказ, курьер и получатель – в одной системе, от приёма до подписи на пороге.', highlights: ['Приложение курьера на Flutter: скан штрихкода, фото и подпись', 'GPS-трекинг, который не теряет точки без сети', 'Публичная страница отслеживания для получателя'] },
    interview: { kicker: 'AI · живой проект', tagline: 'Собеседование, к которому можно готовиться хоть в 3 ночи. AI-рекрутер гоняет по стеку и в конце честно говорит HIRE или REJECT.', highlights: ['Любой стек и грейд – от Intern до Lead', 'RU и EN'] },
    vtoroy: { kicker: 'HR-платформа', tagline: 'Помогает вернуться к работе после долгого перерыва – и работодателям найти таких людей.', highlights: ['Kanban-воронка найма с drag-and-drop', 'Метка return-friendly у вакансий'] },
    devorch: { kicker: 'DevOps из Telegram', tagline: 'Написал боту – получил правку кода, PR и деплой на сервер. Без десятка вкладок.', highlights: ['Cursor-агент правит код прямо в репозитории', 'Деплой по SSH одной командой'] },
    crypto: { kicker: 'Финтех · open source', tagline: 'Сравнивает цены на Binance и Coinbase и сразу показывает спред.', highlights: ['Асинхронный сбор цен с retry и кешем', 'CLI и веб-интерфейс'] },
    pulse: { kicker: 'Мониторинг · open source', tagline: 'Следит, живы ли ваши сервисы, и считает SLA, пока вы спите.', highlights: ['Задержки p50 / p95 / p99 и доля ошибок', 'Дашборд в терминале, экспорт в JSON/CSV'] },
  },
  en: {
    delivery: { kicker: 'Logistics · NDA', tagline: 'Order, courier and recipient in one system – from intake to the signature at the door.', highlights: ['Flutter courier app: barcode scan, photo and signature', 'GPS tracking that keeps points when the network drops', 'Public tracking page for the recipient'] },
    interview: { kicker: 'AI · live project', tagline: 'An interview you can practise for at 3 a.m. The AI recruiter grills you on your stack and ends with an honest HIRE or REJECT.', highlights: ['Any stack and level – Intern to Lead', 'RU and EN'] },
    vtoroy: { kicker: 'HR platform', tagline: 'Helps people get back to work after a long break – and employers find them.', highlights: ['Drag-and-drop Kanban hiring funnel', 'Return-friendly tag on vacancies'] },
    devorch: { kicker: 'DevOps from Telegram', tagline: 'Message the bot – get a code change, a PR and a server deploy. No dozen tabs.', highlights: ['Cursor agent edits code right in the repo', 'One-command SSH deploy'] },
    crypto: { kicker: 'Fintech · open source', tagline: 'Compares prices on Binance and Coinbase and shows the spread right away.', highlights: ['Async price collection with retries and cache', 'CLI and web UI'] },
    pulse: { kicker: 'Monitoring · open source', tagline: 'Watches whether your services are up and counts SLA while you sleep.', highlights: ['p50 / p95 / p99 latency and error rate', 'Terminal dashboard, JSON/CSV export'] },
  },
}
