# Typography System — Aibro СММ

> **Canonical typography stack** для Aibro СММ. Geist + Inter + IBM Plex Mono. Кириллица coverage обязательна. Sentence case везде.

## Font stack

```css
--font-sans: 'Geist Variable', 'Inter Variable', 
             system-ui, -apple-system, 'Segoe UI', 
             Roboto, 'Helvetica Neue', Arial, sans-serif;

--font-mono: 'IBM Plex Mono', ui-monospace, 
             'SF Mono', Menlo, Monaco, Consolas, 
             'Liberation Mono', 'Courier New', monospace;
```

**Почему:**
- **Geist Variable** — primary для headlines + UI. Современный sans от Vercel. Отличная кириллица в v1.2+.
- **Inter Variable** — fallback + body на смешанных страницах. Универсальный, проверен на кириллице.
- **IBM Plex Mono** — для tabular numbers + technical text (цены, даты, IDs).

**Banned для Aibro** (визуально устаревшие или плохо отрабатывают кириллицу):
- Roboto (выглядит дешёво на кириллице, слабая readability).
- Arial / Helvetica (системные, не премиум).
- Montserrat (overused, generic).
- Open Sans (старит дизайн).
- Times / Georgia (никогда — продукт sans-only).

## Type scale (1.25 modular)

```css
--text-xs: 0.75rem;       /* 12px — labels, micro-copy */
--text-sm: 0.875rem;      /* 14px — secondary body, captions */
--text-base: 1rem;        /* 16px — body default */
--text-lg: 1.125rem;      /* 18px — lead paragraph */
--text-xl: 1.25rem;       /* 20px — sub-heading H4 */
--text-2xl: 1.5rem;       /* 24px — H3 */
--text-3xl: 1.875rem;     /* 30px — H2 */
--text-4xl: 2.25rem;      /* 36px — H1 в кабинете */
--text-5xl: 3rem;         /* 48px — Hero H1 (mobile) */
--text-6xl: 3.75rem;      /* 60px — Hero H1 (desktop) */
--text-7xl: 4.5rem;       /* 72px — Mega hero (опционально) */
```

## Line height

```css
--leading-none: 1;        /* для display */
--leading-tight: 1.15;    /* для headings H1-H2 */
--leading-snug: 1.3;      /* для H3-H4 */
--leading-normal: 1.5;    /* body — оптимально для кириллицы */
--leading-relaxed: 1.65;  /* для long-form text */
```

**Кириллица:** обычно требует на 10% больше line-height чем латиница (из-за надстрочных/подстрочных элементов). `--leading-normal: 1.5` — protected.

## Letter spacing (tracking)

```css
--tracking-tight: -0.02em;     /* для display H1 */
--tracking-normal: 0;          /* body default */
--tracking-wide: 0.05em;       /* для small caps / labels */
--tracking-widest: 0.1em;      /* для over-emphasized labels */
```

## Font weights (Variable axis)

```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 800;
```

**Использование:**
- Body — 400 (regular).
- UI labels / chips — 500 (medium).
- Buttons CTA — 600 (semibold).
- H1-H2 — 700 (bold).
- H3-H4 — 600 (semibold).
- Display hero — 700 или 800 (bold/black).

## Tabular numbers (для цен, дат, IDs)

```css
.tabular {
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum' on;
}
```

**Применять везде где:**
- Цены: `4 990 ₽/мес` (tabular)
- Даты в таблицах: `15.05.2026` (tabular)
- IDs / счётчики: `#1234` (tabular)
- Метрики dashboard: `42` views (tabular)

Без tabular цифры разной ширины (3 vs 8 px) → визуально дёргается при анимации/обновлении.

## Canonical heading hierarchy

```css
/* Display — hero pages, очень крупный */
.h-display {
  font-family: var(--font-sans);
  font-size: var(--text-6xl);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  font-weight: var(--font-bold);
}

/* H1 — главный заголовок страницы (включая secondary pages) */
.h1 {
  font-size: var(--text-4xl);  /* mobile: text-3xl */
  line-height: var(--leading-tight);
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-tight);
}

@media (max-width: 768px) {
  .h1 { font-size: var(--text-3xl); }
}

/* H2 — section headings */
.h2 {
  font-size: var(--text-3xl);
  line-height: var(--leading-snug);
  font-weight: var(--font-semibold);
}

/* H3 — subsection */
.h3 {
  font-size: var(--text-2xl);
  line-height: var(--leading-snug);
  font-weight: var(--font-semibold);
}

/* H4 — card titles */
.h4 {
  font-size: var(--text-xl);
  line-height: var(--leading-snug);
  font-weight: var(--font-medium);
}

/* Body — основной текст */
.body {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  font-weight: var(--font-regular);
  color: var(--text-primary);
}

.body-lg {
  font-size: var(--text-lg);
  line-height: var(--leading-normal);
}

/* Captions / labels */
.caption {
  font-size: var(--text-sm);
  line-height: var(--leading-snug);
  color: var(--text-secondary);
}

.label {
  font-size: var(--text-xs);
  line-height: var(--leading-snug);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--text-muted);
  text-transform: uppercase;  /* только для labels — НЕ для заголовков */
}
```

## Sentence case везде (NOT Title Case)

**✅ Правильно:**
- «Подключите бизнес в MAX за 1 день»
- «Кабинет владельца»
- «Партнёрская программа»

**❌ Запрещено:**
- «Подключите Бизнес в MAX за 1 День» (Title Case)
- «КАБИНЕТ ВЛАДЕЛЬЦА» (Uppercase headlines)
- «партнёрская программа» (всё нижним для заголовка)

**Исключения (UPPERCASE разрешён):**
- Labels / chips: `НОВОЕ`, `ПРО`, `BETA`.
- Acronyms: `MAX`, `ОРД`, `ИП`.
- Brand: `СММ АЙБРО`, `СОНЯ`, `РУМИРА`.

## RU копирайтинг гайдлайны

### 168-ФЗ кириллица

- ИИ (не AI)
- СММ (не SMM)
- ЧЗВ (не FAQ)
- ПРО / СТАНДАРТ (не PRO / STANDARD)
- Бренд: «СММ АЙБРО» (не «Aibro»)

**Исключения:** `MAX` — торговая марка VK, всегда латиницей.

### Стиль

- **Direct + practical:** ≤25 слов в предложении. Уровень понимания — B2 / 5-7й класс.
- **Outcome-first** заголовки: «5 постов в день за вас» NOT «ИИ-powered автоматизация контента».
- **Story-driven:** «Мария тратила 3 часа на пост. Теперь — 5 минут.»
- **First-person CTAs:** «Запустить мой бизнес-аккаунт», «Посмотреть пример», «Получить промокод».

### Banned phrases

| Banned | Reason | Use instead |
|---|---|---|
| «Синергия», «cutting-edge», «best-in-class» | Маркетинговый жаргон | «Работает» / «Делает» / «Помогает» |
| «10x», «exponential», «AI-powered» | Hype, не для РФ SMB | конкретные числа (5 постов/день) |
| «Passive income», «be your own boss» | MLM-vibes | «Дополнительный доход за рекомендации» |
| «Limited time offer» | DSA-risky | дата конкретно (до 30.06.2026) |
| «Amazing / incredible / mind-blowing» | Hype | сдержанный tone |
| «Many / lots / various» | Vague | конкретные числа |

### Tone (для копирайтинга)

- **Уверенный, без заносчивости.** Aibro знает свой продукт.
- **Уважительный к клиенту.** Владелец бизнеса умный и занятой.
- **Без обещаний.** Никаких «100% результат» / «гарантия успеха».
- **Без снижения качества клиента.** Никаких «ваши клиенты тупые» / «контент не нужен».

## A11y for кириллица

- Кириллица **требует на 5-10% больше line-height** чем латиница (надстрочные ё, й, у).
- Минимальный body font: **16px** на desktop, **14px на mobile** (но 14px только для secondary text).
- Контраст body text ≥ 4.5:1 (WCAG AA).
- Контраст headings ≥ 3:1 (large text exception).
- Focus indicator: `outline: 2px solid var(--accent-primary); outline-offset: 2px;`

## Loading fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
```

**Самохост опционально** для production (privacy + speed):
- Geist: `https://vercel.com/fonts/geist`
- Inter: `https://rsms.me/inter/`
- IBM Plex Mono: `https://github.com/IBM/plex`

## Применение в PROMPT.md (Claude Design)

```markdown
## Typography

Font stack (verbatim, NOT change):
- font-family: 'Geist Variable', 'Inter Variable', system-ui, sans-serif (body + UI)
- font-family: 'IBM Plex Mono', monospace (tabular numbers / technical)

Type scale (verbatim):
- H1 (desktop): 36px / line-height 1.15 / weight 700
- H1 (mobile): 30px / line-height 1.2 / weight 700
- H2: 30px / 1.3 / 600
- Body: 16px / 1.5 / 400
- Caption: 14px / 1.3 / 400 secondary color
- Label: 12px / 1.3 / 500 uppercase tracking 0.05em

Tabular numbers:
- Apply `font-variant-numeric: tabular-nums` для всех цен (4 990 ₽), дат, IDs, metrics.

Sentence case везде (NOT Title Case / NOT Uppercase headings).
168-ФЗ: используй ИИ / СММ / ЧЗВ / ПРО на user-facing (не AI / SMM / FAQ / PRO).
Бренд: «СММ АЙБРО» (кириллица).
```

## Cross-references

- `design/knowledge/light-theme-tokens.md` + `dark-theme-tokens.md` — цвета текста по теме
- `design/STYLE_CANON.md` — application в layout
- `design/knowledge/landing-page-patterns.md` — headlines patterns
- SmashOne sister: `C:\MyProjects\SMM-Hub\design\knowledge\typography-system.md` (read-only reference — у них тот же stack)

## Version

v1.0 — 2026-05-15 (Phase A. Geist + Inter + Plex Mono. Кириллица coverage + sentence case + 168-ФЗ adapted.)
