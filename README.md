# 🤠 Дымок из ствола — Фан-портал

Персональный фан-портал-энциклопедия о культовом вестерн-сериале **«Дымок из ствола» (Gunsmoke, 1955–1975)**.

## 🎬 О сериале

- **20 сезонов**, 635 эпизодов
- **Рейтинг IMDb:** 8.1/10 (10 453 голоса)
- **Жанр:** Вестерн, Драма
- **Сюжет:** Маршал Мэтт Диллон наводит порядок в неспокойном Додж-Сити

## 🎨 Дизайн

Стиль **«Western Noir / Кинохроника»**:
- Тёмная палитра с золотыми акцентами
- Шрифты: Rye (заголовки), Playfair Display, Inter, Special Elite
- Эффекты: зерно плёнки, текстура пергамента, виньетка
- Адаптивный дизайн (mobile-first)

## 🚀 Запуск

```bash
# Установка зависимостей
npm install

# Разработка (http://localhost:3000)
npm run dev

# Production build
npm run build

# Предпросмотр production build
npm run start
```

## 📁 Структура проекта

```
gunsmoke-portal/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Корневой layout с навигацией
│   ├── page.tsx           # Главная страница
│   ├── episodes/          # Эпизоды (635 штук)
│   ├── characters/        # Персонажи
│   ├── cast/              # Актёры
│   ├── gallery/           # Фотогалерея
│   ├── history/           # История создания
│   └── reviews/           # Отзывы зрителей
├── components/
│   ├── sections/          # Секции страниц
│   │   ├── HeroSection.tsx
│   │   ├── EpisodeOfDay.tsx
│   │   ├── RandomFact.tsx
│   │   └── QuickLinks.tsx
│   └── ui/                # UI-компоненты
│       ├── Navigation.tsx
│       └── PaperCard.tsx
├── lib/                   # Утилиты и хуки
├── data/                  # JSON данные (планируется)
└── public/                # Статические файлы
```

## 📦 Технологии

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Rye, Playfair Display, Inter, Special Elite)
- **Иконки:** Lucide React
- **Анимации:** Framer Motion (планируется)
- **3D:** Three.js + React Three Fiber (планируется)

## ✅ Этап 1: Каркас и дизайн-система (ЗАВЕРШЁН)

### Что сделано:
- ✅ Настроен Next.js 15 с TypeScript и Tailwind CSS
- ✅ Создана дизайн-система (цвета, шрифты, переменные)
- ✅ Базовый layout с навигацией (desktop + mobile)
- ✅ Главная страница с секциями:
  - Hero (название, рейтинг, информация)
  - Эпизод дня
  - Случайный факт
  - Быстрые ссылки
- ✅ UI-компоненты:
  - `PaperCard` (карточка в стиле пергамента)
  - `Navigation` (адаптивное меню)
- ✅ Заглушки для всех разделов
- ✅ Эффект зерна плёнки (CSS)
- ✅ Анимации fade-in, hover-эффекты

### Следующие этапы:
2. Сбор данных + страницы эпизодов, персонажей, актёров
3. Hero 3D-сцена (револьвер + улица Додж-Сити)
4. Остальные разделы (радио, фильмы, интервью, карта)
5. Личный кабинет и трекер просмотра
6. Полировка и оптимизация

## 📚 Источники данных

- **IMDb:** https://www.imdb.com/title/tt0047736/
- **IMDb Datasets:** https://datasets.imdbws.com/
- **Cinemeta API:** https://v3-cinemeta.strem.io/
- **Wikipedia:** https://en.wikipedia.org/wiki/Gunsmoke

## 📄 Лицензия

Проект для личного использования. Все права на сериал «Дымок из ствола» принадлежат CBS.

---

**Создано:** 2026-10-10
