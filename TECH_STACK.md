# ⚠️ TECH STACK - OUTLIVION LANDING

> **🚨 ВНИМАНИЕ: НЕ УДАЛЯТЬ ЭТОТ ФАЙЛ!**  
> Эта документация критически важна для понимания архитектуры проекта.

---

## 🎯 Назначение
Публичная посадочная страница для привлечения пользователей

---

## 🛠️ Технологии

### Core
- **Next.js 14** - React framework (App Router)
- **React 18** - UI библиотека
- **TypeScript** - Язык программирования
- **Port:** 3003 (dev) / Vercel (prod)

### Стилизация
- **TailwindCSS** - CSS framework
- **Framer Motion** - Анимации и transitions
- **@radix-ui/react-slot** - Композиция компонентов
- **class-variance-authority** - Варианты компонентов
- **clsx + tailwind-merge** - Утилиты для классов

---

## 📁 Структура проекта

```
src/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
│
├── components/
│   ├── hero-section.tsx   # Hero секция
│   └── ui/                # UI компоненты
│       ├── button.tsx
│       └── shimmering-text.tsx
│
└── lib/
    └── utils.ts           # Утилиты (cn helper)
```

---

## 🎨 UI Components

### Hero Section
```typescript
components/hero-section.tsx
- Главный заголовок
- Описание продукта
- CTA кнопки
- Анимации (Framer Motion)
```

### UI Kit
```
ui/button.tsx            # Переиспользуемые кнопки
ui/shimmering-text.tsx   # Анимированный текст
```

### Анимации
- **Fade in** - плавное появление
- **Slide up** - скольжение снизу
- **Shimmer effect** - мерцающий текст
- **Hover effects** - интерактивность

---

## 🔗 Интеграции

### Telegram Bot
```env
NEXT_PUBLIC_BOT_URL=https://t.me/outlivionbot
```
- CTA кнопка → Telegram бот
- Прямая ссылка на Mini App

### Web Portal (будущее)
```env
NEXT_PUBLIC_PORTAL_URL=https://portal.outlivion.space
```
- Ссылка на Web версию
- Альтернативный вход

---

## 🚀 Deployment

### Platform: Vercel
- URL: https://outlivion.space
- Framework: Next.js
- Region: iad1
- Package manager: pnpm

**Vercel Config:**
```json
{
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

---

## 🔐 Переменные окружения

```env
# Telegram Bot
NEXT_PUBLIC_BOT_URL=https://t.me/outlivionbot

# Web Portal (опционально)
NEXT_PUBLIC_PORTAL_URL=https://portal.outlivion.space
```

---

## 🎯 Контент лендинга

### Основные блоки
1. **Hero Section**
   - Заголовок: "Outlivion VPN"
   - Подзаголовок: Описание преимуществ
   - CTA: "Начать использовать" → Telegram Bot

2. **Features** (будущее)
   - Высокая скорость
   - Безопасность
   - Серверы по всему миру
   - Простая настройка

3. **Pricing** (будущее)
   - Тарифные планы
   - Сравнение

4. **FAQ** (будущее)
   - Частые вопросы

5. **Footer** (будущее)
   - Контакты
   - Ссылки
   - Социальные сети

---

## 🎨 Design System

### Цвета
```css
--primary: Orange #FF6B35
--background: Dark #0F0F0F
--foreground: White #FFFFFF
--accent: Custom gradients
```

### Типографика
```
Font: Inter (с поддержкой кириллицы)
Заголовки: Bold, Large
Текст: Regular, Medium
```

### Компоненты
```
Button variants:
- default: Оранжевый primary
- secondary: Outline
- ghost: Transparent
- link: Подчеркнутый
```

---

## ⚡ Команды

```bash
pnpm dev              # Разработка (port 3003)
pnpm build            # Production build
pnpm start            # Production server
pnpm lint             # ESLint проверка
```

---

## 📝 Важные заметки

1. **SEO оптимизация** - metadata в layout.tsx
2. **Open Graph** - социальные превью
3. **Favicon** - /public/favicon.svg
4. **Анимации** - Framer Motion для плавности
5. **Адаптивность** - mobile-first подход
6. **Производительность** - Next.js Image optimization
7. **Простота** - минималистичный дизайн

---

## 🔗 Связи с другими компонентами

```
Landing (outlivion.space)
    ↓ CTA Button
Telegram Bot (@outlivionbot)
    ↓ /start → Mini App
Mini App (bot.outlivion.space)
    ↓ REST API
API (api.outlivion.space)
```

---

## 🎯 Цели лендинга

### Основные задачи:
- ✅ Привлечь внимание пользователей
- ✅ Объяснить преимущества VPN
- ✅ Направить в Telegram Bot
- ✅ Создать доверие к продукту
- ✅ SEO оптимизация для поиска

### Метрики:
- Click-through rate на CTA кнопку
- Bounce rate
- Time on page
- Conversion rate → Telegram Bot

---

## 📈 Будущие улучшения

- [ ] Блок Features с описанием функций
- [ ] Pricing таблица с тарифами
- [ ] FAQ секция
- [ ] Отзывы пользователей
- [ ] Footer с контактами
- [ ] Форма обратной связи
- [ ] Мультиязычность (EN/RU)
- [ ] Blog секция

---

**Версия:** 1.0.0  
**Последнее обновление:** Декабрь 2025  
**Платформа:** Vercel  
**Package Manager:** pnpm  
**Status:** ✅ Live

