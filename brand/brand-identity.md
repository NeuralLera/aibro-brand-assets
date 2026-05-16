# Brand Identity System — Aibro СММ

> **Canonical brand identity** для Aibro СММ. Friendly robot icon + MAX glyph + изумрудный акцент + glassmorphism. Sentence case + 168-ФЗ кириллица.

## Brand DNA

### Identity statement

**«СММ АЙБРО — кабинет владельца бизнеса в MAX, который работает за вас 24/7.»**

Three pillars:
1. **Direct + practical** — без жаргона, конкретные результаты («5 постов в день»).
2. **Outcome-first** — фокус на том что получит клиент, не на технологии.
3. **Story-driven** — реальные сценарии (пекарня / фитнес / страхование / туры).

### Voice & tone

- **Уверенный, без заносчивости.**
- **Уважительный к клиенту** (владелец бизнеса умный и занятой).
- **Без обещаний** (никаких «100% результат»).
- **Без снижения качества клиента** (никаких «ваш контент плохой»).
- **Sentence case везде.** Никаких CAPS / Title Case.

### Personality (5 attributes)

| Attribute | Vector |
|---|---|
| **Confident** | Знает что делает, но не хвастается. |
| **Helpful** | Полезен в каждом взаимодействии. |
| **Modern** | Современный tone, не корпоративный 2010-х. |
| **Russian** | Естественный русский язык, без англицизмов. |
| **Premium** | Качество исполнения видно в деталях. |

## Logo system

### Primary logo — Friendly Robot Icon

Расположение: `aibro_channel/logos/` (4 файла):
- `aibro_robot_light.svg` — для light theme.
- `aibro_robot_light.png` — PNG fallback.
- `aibro_robot_dark.svg` — для dark theme.
- `aibro_robot_dark.png` — PNG fallback.

**Описание:** дружелюбный робот с круглой головой, изумрудный акцент в глазах + body lines. Outlined style, не filled. Subtle smile.

**Размеры использования:**
- Favicon: 32×32, 16×16 (PNG).
- Header logo (collapsed sidebar): 48×48.
- Header logo (expanded sidebar): 32×32 + wordmark «СММ АЙБРО».
- OG image: 200×200 (в составе 1200×630 hero).
- Avatar (МAX channel): 512×512 (high-res).

### Secondary — MAX glyph

Расположение: `aibro_channel/logos/` (4 файла):
- `aibro_max_light.svg/.png` — MAX-логотип в нашем стиле light.
- `aibro_max_dark.svg/.png` — dark.

**Использование:** только для индикации MAX-интеграции (например в платформах-карточках на public site, в badge «Работает в MAX»).

### Wordmark «СММ АЙБРО»

- **Шрифт:** Geist Variable Bold (700).
- **Tracking:** -0.02em (tight).
- **Кириллица обязательно** — никаких «SMMAIBRO» / «AIBRO» / «aibro».
- **Минимальный размер:** 14px (никогда меньше, иначе нечитаемо).

```html
<!-- Sidebar expanded -->
<div class="brand-lockup">
  <img src="/logos/aibro_robot_light.svg" alt="СММ АЙБРО" width="32" height="32">
  <span class="wordmark">СММ АЙБРО</span>
</div>
```

```css
.wordmark {
  font-family: var(--font-sans);
  font-weight: var(--font-bold);
  font-size: var(--text-base);
  letter-spacing: -0.02em;
  color: var(--text-primary);
}
```

### Лого don'ts

❌ **Запрещено:**
- Stretching / squishing logo.
- Rotating logo (любой угол).
- Filtering (drop-shadow / blur / glow).
- Inverting колоры в логотипе.
- Использовать на конфликтующих background (логотип на изумрудном primary).
- «AIBRO» / «Aibro» / «aibro» — без кириллицы бренда.

## Color identity

### Primary

```css
--brand-emerald: #10b981;       /* emerald-500 — primary */
--brand-emerald-hover: #059669; /* emerald-600 */
--brand-emerald-dark: #34d399;  /* emerald-400 для dark theme */
```

### Brand restraint

- **Изумрудный покрывает ≤10% любой surface.** Не доминирует.
- Используется для: CTA buttons, active nav items, key icons, success indicators, accent borders.
- НЕ используется для: body text (контраст fail), large backgrounds, неконтекстных decorative elements.

### Neutral palette

```css
/* Light theme neutrals */
--neutral-50: #fafafa;
--neutral-100: #f4f6f5;
--neutral-200: #e4e7e6;
--neutral-300: #cbd1cf;
--neutral-400: #94a3b8;
--neutral-500: #64748b;
--neutral-600: #475569;
--neutral-700: #334155;
--neutral-800: #1e293b;
--neutral-900: #0f172a;
```

Slate base с лёгким зелёным undertone — гармония с изумрудным акцентом.

## Iconography

### Primary library — Lucide

```jsx
import { Plus, Settings, Users, ShoppingBag } from 'lucide-react';

<Plus size={20} strokeWidth={1.5} />
```

**Defaults:**
- Stroke width: **1.5px** (semibold, не bold).
- Style: outlined.
- Color: `currentColor` (inherit от parent).
- Sizes: **16 / 20 / 24 / 32 / 48**.

### Fallback library — Tabler

Для специфических icons которых нет в Lucide.

### Custom Aibro icons

Generated через Gemini Gem / Nano Banana. Хранятся в `design/assets/icons/`. Должны matches Lucide style:
- Outlined stroke 1.5px.
- Square viewBox (24×24 base).
- `currentColor` inheritance.
- Sentence case naming: `aibro-bot.svg`, `aibro-cabinet.svg`.

**См. `design/STYLE_CANON.md` секция "Иконки расширенный набор" + Notion задачи на 17.05.**

### Icon usage rules

- **Buttons с текстом:** icon 16px + 8px gap + label.
- **Standalone buttons:** icon 20px, button 32×32.
- **Nav items:** icon 20px collapsed, 16px expanded.
- **Empty states:** icon 96-128px (opacity 0.4).
- **Hero illustrations:** custom larger icons (см. STYLE_CANON).

## Imagery direction

### Golden standard — без текста на картинках

См. `documentation/tech/ai/golden_standard_images.md`.

- **Никаких надписей** (цены / titles / brand name) на изображениях.
- Текст добавляется через layout HTML, не в image.
- Validation: `image_validator.py` (через Gemini) проверяет автоматически.

### Стиль изображений

- **Фотореализм** для бизнес-сценариев (пекарня / фитнес).
- **Illustration** для concepts / abstract (autoposting / ИИ-ассистент).
- **3D rendering** опционально для product features.
- **НЕТ stock-photo очевидных** (handshake meetings, generic businessmen).

### Цветовая палитра изображений

Должна harmoniously работать с изумрудным акцентом:
- Тёплые тона (yellow / orange) — для еды / craft бизнесов.
- Природные (green / earthy) — fits изумрудный естественно.
- Cool blue / purple — для tech / financial бизнесов.
- **Избегать:** ярких розовых / красных (конфликт с изумрудным).

## Bren assets в репо

### `aibro-brand-assets` (public GitHub)

`https://github.com/NeuralLera/aibro-brand-assets`

Структура:
```
aibro-brand-assets/
├── logos/
│   ├── aibro_robot_light.svg/.png
│   ├── aibro_robot_dark.svg/.png
│   ├── aibro_max_light.svg/.png
│   └── aibro_max_dark.svg/.png
├── tiles/
│   ├── aibro-light.svg
│   ├── aibro-dark.svg
│   └── noise.svg
├── tokens/
│   ├── light-theme.md
│   ├── dark-theme.md
│   └── motion.md
├── patterns/
│   ├── glassmorphism.md
│   └── landing-pages.md
├── brand/
│   └── brand-identity.md
└── compliance/
    ├── 168-fz.md
    └── single-max.md
```

**Подключается к Claude Design** через GitHub link → все ассеты автоматически подтягиваются.

### `design/assets/` (local repo)

Curated не-public ассеты:
- `design/assets/logos/` — копии для quick access.
- `design/assets/badges/` — badges для трастов / certifications.
- `design/assets/icons/` — custom иконки.

## 168-ФЗ compliance (визуально)

| User-facing | Branding | Status |
|---|---|---|
| AI / SMM / FAQ | НЕ использовать | ❌ Banned |
| ИИ / СММ / ЧЗВ | Кириллица | ✅ Канон |
| Aibro / AIBRO | НЕ использовать в text | ❌ Banned |
| СММ АЙБРО | Кириллица | ✅ Канон |
| PRO / STANDARD | НЕ использовать | ❌ Banned |
| ПРО / СТАНДАРТ | Кириллица | ✅ Канон |
| MAX | Латиница (торговая марка VK) | ✅ Исключение |

## Применение в PROMPT.md (Claude Design)

```markdown
## Brand identity

Logo:
- Primary: `/logos/aibro_robot_light.svg` (32×32 sidebar / 48×48 favicon)
- Wordmark: «СММ АЙБРО» (кириллица, Geist Bold, tracking -0.02em)
- НЕ комбинируй с «AIBRO» / «Aibro» / любым латинским вариантом

Colors:
- Primary: emerald-500 #10b981 (light) / emerald-400 #34d399 (dark)
- Restraint ≤10% surface coverage
- Body text: --text-primary (никогда изумрудный)

Icons:
- Lucide React primary (stroke 1.5px outlined)
- Tabler fallback
- Sizes: 16 / 20 / 24 / 32 / 48
- Color: currentColor inherit

Imagery:
- Без текста (golden standard)
- Фотореализм или illustration
- Гармония с изумрудным акцентом

Voice:
- Sentence case везде
- 168-ФЗ кириллица (ИИ / СММ / ЧЗВ / ПРО / СТАНДАРТ)
- Уверенный + helpful, без жаргона
```

## Cross-references

- `design/STYLE_CANON.md` — application в layout / components
- `design/knowledge/light-theme-tokens.md` — colors канон
- `design/knowledge/typography-system.md` — wordmark font canon
- `design/knowledge/tile-background.md` — glassmorphism patterns
- `aibro_channel/logos/` — реальные file paths
- `aibro-brand-assets/` — public репо
- `documentation/tech/ai/golden_standard_images.md` — без текста на картинках
- SmashOne sister: `C:\MyProjects\SMM-Hub\design\knowledge\brand-identity-system.md` (read-only — у них warm gold, 4 logo variations EU+US, наш одно lockup с emerald)

## Version

v1.0 — 2026-05-15 (Phase A. Aibro brand DNA: friendly robot + MAX glyph + изумрудный + 168-ФЗ кириллица. Single lockup vs SmashOne 4-variation.)
