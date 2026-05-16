# Cabinet IA Patterns — Aibro СММ

> **Canonical cabinet UX patterns** для `cabinet.smmaibro.ru`, `admin.smmaibro.ru`, `partners.smmaibro.ru`. Sidebar canon + Cmd+K + light-default + glassmorphism + 4-surface architecture.

## Sidebar canon (collapsed 64px / expanded 256px)

### Структура

```
┌─────────────────────────────────────┐
│ Logo + brand name                   │  ← 64px expanded / 48px collapsed
├─────────────────────────────────────┤
│ Business switcher dropdown           │  ← если у user >1 бизнеса
├─────────────────────────────────────┤
│ Nav items (icons + labels)           │  ← 36px высота each
│ ├ Дашборд        [Cmd+1]            │
│ ├ Товары/Услуги  [Cmd+2]            │
│ ├ Контент        [Cmd+3]            │
│ ├ Заказы         [Cmd+4]  (CRM)     │
│ ├ Записи         [Cmd+5]  (CRM)     │
│ ├ Клиенты        [Cmd+6]  (CRM)     │
│ ├ Аналитика      [Cmd+7]            │
│ ├ Настройки      [Cmd+8]            │
│ └ Помощь         [Cmd+9]            │
├─────────────────────────────────────┤
│ User profile pill (bottom)          │
│ ├ Avatar + name + theme toggle      │
│ └ Logout option                     │
└─────────────────────────────────────┘
```

### Размеры

- **Collapsed width:** 64px (icons only, tooltip on hover).
- **Expanded width:** 256px (icons + labels).
- **Item height:** 36px (touch target 44px включая padding).
- **Item padding:** 8px vertical, 12px horizontal (collapsed) / 12px vertical, 16px horizontal (expanded).
- **Active state:** изумрудный border-left 3px + `--accent-bg` fill + `--accent-strong` text/icon.

### Active state visual

```css
.nav-item.active {
  background: var(--accent-bg);
  border-left: 3px solid var(--accent-primary);
  color: var(--accent-strong);
  font-weight: var(--font-semibold);
}

.nav-item.active .icon {
  color: var(--accent-primary);
  stroke-width: 2;  /* slightly bolder */
}
```

### Hover (inactive items)

```css
.nav-item:hover {
  background: var(--bg-subtle);
  color: var(--text-primary);
  transition: 
    background-color var(--duration-fast) var(--ease-default),
    color var(--duration-fast) var(--ease-default);
}
```

## Business switcher (multi-business support)

User может иметь несколько бизнесов (max 5 на единый тариф). Switcher между ними:

```
┌─────────────────────────────────────┐
│ Пекарня Уют ▼                       │
└─────────────────────────────────────┘
           ↓ (на клик)
┌─────────────────────────────────────┐
│ ☑ Пекарня Уют                       │
│   Пульс Фитнес                      │
│   Алексей Страхов                   │
│   ─────────────                     │
│   + Создать бизнес                  │
└─────────────────────────────────────┘
```

**State:** активный бизнес — Redux/Context (`useBusiness().activeBusinessId`).

**Business-first isolation** (см. CLAUDE.md): все API запросы используют `business_id`, не `bot_id`.

## Cmd+K command palette

**ОБЯЗАТЕЛЬНО.** Активация — `Cmd+K` (Mac) / `Ctrl+K` (Win/Linux).

### Структура

```
┌──────────────────────────────────────┐
│ 🔍 Поиск по кабинету...              │
├──────────────────────────────────────┤
│ ⚡ Быстрые действия                  │
│ ├ Создать пост      ↵                │
│ ├ Добавить товар    ↵                │
│ └ Открыть статистику ↵               │
├──────────────────────────────────────┤
│ 🗂 Перейти                           │
│ ├ Дашборд                            │
│ ├ Товары                             │
│ ├ Заказы                             │
│ └ ... (все navigation items)         │
├──────────────────────────────────────┤
│ 💡 Подсказка                         │
│ ├ Что такое автопостинг?             │
│ └ Как добавить бизнес?                │
└──────────────────────────────────────┘
```

**Implementation:** `cmdk` библиотека (Vercel) — стандарт.

### Mobile fallback

На mobile (`<768px`) — fullscreen modal вместо middle-screen palette. Trigger через 🔍 кнопку в header.

## Layout (cabinet)

```
┌────────────────────────────────────────────┐
│ Sidebar │  Header (breadcrumb + actions)   │
│         │ ─────────────────────────────── │
│  256px  │                                  │
│         │  Main content area               │
│         │  (max-width 1280px centered)     │
│         │                                  │
│         │                                  │
│         │                                  │
└─────────┴──────────────────────────────────┘
```

### Header

- **Height:** 56px.
- **Sticky** (sticky top:0 на scroll).
- **Backdrop blur** (glassmorphism для sticky elements over content).
- **Breadcrumb** слева: `Кабинет / Заказы / #1234`.
- **Actions** справа: search button → opens Cmd+K, notifications bell, profile avatar dropdown.

### Main content

- **Max-width:** 1280px (centered).
- **Padding:** 24px desktop, 16px mobile.
- **Top spacing после header:** 24px.

## Cards (dashboard / list items)

### Standard card

```css
.card {
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);   /* 12px */
  padding: 24px;
  box-shadow: var(--shadow-sm);
  transition: 
    transform var(--duration-medium) var(--ease-default),
    box-shadow var(--duration-medium) var(--ease-default);
}

.card.interactive:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  cursor: pointer;
}
```

### Glass card (premium effect для KPI)

```css
.card-glass {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  padding: 24px;
}
```

**Usage:** dashboard KPI cards, hero sections в кабинете, premium feature highlights.

## Tables (TanStack v8 + shadcn DataTable)

### Row heights

- **Compact:** 40px (для info-heavy таблиц).
- **Default:** 48px (стандарт).
- **Comfortable:** 56px (для редко используемых таблиц).

### Required features

- **Sortable columns** (стрелочки в header).
- **Filter row** (опционально per-column).
- **Bulk select** (checkbox в первой колонке + actions in toolbar).
- **Pagination** (default 25 / 50 / 100 per page).
- **Sticky header** на scroll.
- **Empty state** (см. ниже).
- **Loading state** — skeleton rows (same height как real rows).

### Mobile

- **Sticky first column** (обычно name / ID).
- Horizontal scroll для остальных колонок.
- Touch swipe for row actions.

## Charts (Tremor + IBM colorblind palette)

### Color palette (multi-series, colorblind-safe)

```css
--chart-color-1: #648FFF;   /* blue */
--chart-color-2: #785EF0;   /* purple */
--chart-color-3: #DC267F;   /* pink */
--chart-color-4: #FE6100;   /* orange */
--chart-color-5: #FFB000;   /* yellow */
```

**Для Aibro single-series:** изумрудный gradient (`#10b981` → `#34d399`).

### KPI cards (dashboard)

```
┌───────────────────────────────┐
│ Подписчики MAX                │ ← label, --text-secondary --text-sm
│ 1 247                         │ ← value, h2, --text-3xl --font-bold
│ ↗ +84 за неделю               │ ← delta, --text-sm --success или --error
└───────────────────────────────┘
```

**Number formatting:**
- `font-variant-numeric: tabular-nums` (обязательно).
- Разделители тысяч пробелом (1 247, не 1,247) — РФ стандарт.
- Валюты: `4 990 ₽` (символ после числа, неразрывный пробел).

## Empty / Loading / Error states

### Empty state

```
┌──────────────────────────────────────┐
│       📦 (illustration / icon)        │
│                                       │
│       Заказов пока нет                │
│                                       │
│   Когда клиент оформит заказ через   │
│   ассистента в MAX, он появится здесь │
│                                       │
│      [Открыть демо пример →]         │
└──────────────────────────────────────┘
```

**Pattern:**
- Illustration ~96-128px (Lucide icon с opacity 0.4 для simple variant).
- H2 заголовок (2-4 слова).
- Sub-copy (1-2 строки, explains почему пусто + что делать).
- Primary action (или demo link / помощь link).

### Loading state

- **Skeleton screens** для list views (3-5 rows skeleton).
- **Spinner** только для actions >2 sec.
- **Никаких "Loading..."** текстовых indicator (use skeleton).

### Error state

```
┌──────────────────────────────────────┐
│       ⚠️ (error icon)                 │
│                                       │
│       Не удалось загрузить           │
│                                       │
│   Проверьте интернет или повторите   │
│                                       │
│      [Повторить попытку]             │
└──────────────────────────────────────┘
```

**Error states обязательно:**
- Friendly tone (не «Internal Server Error 500»).
- Action button (retry / contact support).
- Не показывать stack traces / technical details на user surface.

## Notifications + Toast

### Toast positions

- **Default:** top-right (desktop), top-center (mobile).
- **Animations:** см. `motion-system.md`.

### Toast types

| Type | Color | Icon | Auto-dismiss |
|---|---|---|---|
| Success | `--success` | ✓ | 5 sec |
| Info | `--info` | ℹ | 5 sec |
| Warning | `--warning` | ⚠ | 8 sec |
| Error | `--error` | ✕ | never (user dismiss) |

### Notification bell (header)

- **Badge:** `--accent-primary` dot + count (max display "9+").
- **Dropdown:** `cmdk`-style panel с recent notifications.
- **States:** unread (bold) / read (regular) / dismissed.

## Forms (RHF + accessibility)

### Form validation

- **Mode:** `onTouched` + `reValidateMode: onChange` (React Hook Form).
- **Errors below input:** красный текст `--error` 14px, появляется через 220ms fade.
- **Field state:** `border-color` shifts to `--error` on invalid.

### Field types canonical

- Text input: 40px height, 8px radius, 12px horizontal padding.
- Textarea: min 80px, max 200px (scroll).
- Select: native `<select>` on mobile, custom dropdown desktop.
- Checkbox/Radio: 20×20px, изумрудный fill on checked.
- Toggle: 32×16px pill, изумрудный bg when on.

### Submit buttons

- **Primary action:** full-width on mobile, intrinsic width desktop.
- **Loading state:** spinner inside button + disabled state + text «Сохраняем...».
- **Disabled:** opacity 0.5, cursor not-allowed.

## Role-based UI (4-surface)

### Client cabinet (`cabinet.smmaibro.ru`)

- **Audience:** владелец бизнеса (платный + триал).
- **Navigation:** Дашборд / Товары / Контент / Заказы / Записи / Клиенты / Аналитика / Настройки / Помощь.
- **No admin features visible.**

### Admin ops (`admin.smmaibro.ru`)

- **Audience:** Валерий + roles (manager / finance / support).
- **Navigation:** Дашборд / Users / Businesses / Финансы / Подписки / Платежи / Поддержка / Health.
- **Banner if impersonating user:** жёлтая полоса сверху «Просматриваете кабинет user@email».

### Partners (`partners.smmaibro.ru`)

- **Audience:** партнёры реферальной программы 10/10.
- **Navigation:** Дашборд / Рефералы / Заработок / Выплаты / Материалы.
- **L1+L2 lifetime visualization** на дашборде.

## Применение в PROMPT.md (Claude Design)

```markdown
## Cabinet shell

Sidebar (256/64 collapse):
- Logo + brand top
- Business switcher dropdown
- 9 nav items с Cmd+1..9
- User profile pill bottom + theme toggle
- Active state: изумрудный border-left + accent-bg fill

Header sticky 56px:
- Breadcrumb left
- Cmd+K search button + notifications + avatar right

Main content:
- Max-width 1280 centered
- Padding 24px desktop / 16px mobile
- Cards (glass или regular) для KPI / list views

Empty states:
- Lucide icon 96-128 opacity 0.4
- H2 + sub + primary CTA

Tables TanStack v8:
- Row 48px default
- Sortable + filter + bulk select + pagination
- Sticky first column on mobile

Toast:
- Top-right desktop / top-center mobile
- Success/Info 5s / Warning 8s / Error never
```

## Cross-references

- `design/STYLE_CANON.md` — общий канон components
- `design/knowledge/light-theme-tokens.md` — colors
- `design/knowledge/motion-system.md` — transitions
- `design/knowledge/typography-system.md` — text scale
- SmashOne sister: `C:\MyProjects\SMM-Hub\design\knowledge\cabinet-ia-patterns.md` (read-only — у них 8-surface)

## Version

v1.0 — 2026-05-15 (Phase A. Cabinet IA для 4-surface Aibro: client/admin/partners + public. Single-tier upgrade pattern + CRM-pivot 3 новых nav items.)
