# Ralovich — portfolio site

Frontend (React + Vite) and backend (FastAPI → Telegram) for [ralovich.by](https://ralovich.by).

## Structure

```
frontend/   React portfolio (Vite)
backend/    FastAPI form endpoint → Telegram
```

## Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# fill TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
./start.sh
```

API: `POST /api/form` (JSON or form-data).

## Frontend

```bash
cd frontend
npm install
npm run dev
npm run build
```

Deploy to FTP (credentials via env or `~/.ralovich-ftp.env`):

```bash
export FTP_HOST=... FTP_USER=... FTP_PASS=...
python3 frontend/scripts/deploy.py
```
