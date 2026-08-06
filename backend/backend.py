import os
import json
from typing import Any, Dict, Optional

from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

# Конфиг через переменные окружения
TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID", "")
TELEGRAM_API_URL = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"

app = FastAPI()

# CORS для локальной разработки
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # сузить в проде
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def format_message(payload: Dict[str, Any]) -> str:
    # Формируем читаемое сообщение без parse_mode
    lines = ["Новая заявка:"]
    for k, v in payload.items():
        # Нормализуем к строке
        if isinstance(v, (list, tuple)):
            v = ", ".join(map(str, v))
        else:
            v = str(v)
        lines.append(f"- {k}: {v}")
    return "\n".join(lines)

async def send_to_telegram(text: str) -> None:
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
        raise RuntimeError("TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID не заданы")

    async with httpx.AsyncClient(timeout=10) as client:
        r = await client.post(
            TELEGRAM_API_URL,
            json={
                "chat_id": int(TELEGRAM_CHAT_ID),
                "text": text,
                # Без parse_mode, чтобы не экранировать спецсимволы
                # "parse_mode": "HTML",
                "disable_web_page_preview": True,
            },
        )
        if r.status_code != 200:
            try:
                data = r.json()
                detail = data.get("description") or data
            except Exception:
                detail = r.text
            raise RuntimeError(f"Telegram API error: {detail}")

@app.post("/api/form")
async def handle_form(request: Request):
    """
    Универсальный обработчик:
    - application/json: произвольный JSON-объект
    - multipart/form-data: любые поля формы (файлы перечислим по именам)
    """
    content_type = request.headers.get("content-type", "")

    payload: Dict[str, Any] = {}

    try:
      # JSON
      if "application/json" in content_type:
          body = await request.json()
          if not isinstance(body, dict):
              raise HTTPException(status_code=400, detail="Ожидается JSON-объект")
          payload = body

      # FormData (в т.ч. multipart)
      elif "multipart/form-data" in content_type or "application/x-www-form-urlencoded" in content_type:
          form = await request.form()
          files_info = {}
          for key, value in form.multi_items():
              # UploadFile
              if hasattr(value, "filename"):
                  # Здесь только перечисляем имена файлов
                  files_info.setdefault(key, []).append(value.filename)
              else:
                  # Стандартное поле
                  if key in payload:
                      # аккумулируем повторяющиеся поля в список
                      if isinstance(payload[key], list):
                          payload[key].append(value)
                      else:
                          payload[key] = [payload[key], value]
                  else:
                      payload[key] = value

          if files_info:
              payload["_files"] = files_info

      else:
          # Попробуем сначала как JSON, потом как форма
          try:
              body = await request.json()
              if not isinstance(body, dict):
                  raise ValueError("not dict")
              payload = body
          except Exception:
              form = await request.form()
              for key, value in form.multi_items():
                  if hasattr(value, "filename"):
                      payload.setdefault("_files", {}).setdefault(key, []).append(value.filename)
                  else:
                      if key in payload:
                          if isinstance(payload[key], list):
                              payload[key].append(value)
                          else:
                              payload[key] = [payload[key], value]
                      else:
                          payload[key] = value

      if not payload:
          raise HTTPException(status_code=400, detail="Пустое тело запроса")

      text = format_message(payload)
      await send_to_telegram(text)

      return {"status": "ok"}

    except HTTPException:
      raise
    except RuntimeError as e:
      print(e)
      # Ошибки конфигурации/Telegram
      raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
      # Любая другая ошибка
      print(e)
      raise HTTPException(status_code=500, detail="Internal Server Error")


@app.get("/")
def root():
    return {"message": "ok"}
    
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)    