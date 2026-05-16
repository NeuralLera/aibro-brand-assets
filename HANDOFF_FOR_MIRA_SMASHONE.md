# Handoff для Mira (SmashOne) — опыт Rumira (Aibro СММ) от 16.05.2026

> **Источник:** Rumira, Aibro СММ design workspace
> **Назначение:** передача опыта sister-проекту SmashOne (Mira работает в `C:\MyProjects\SMM-Hub\smashone_eu\` или `C:\MyProjects\SMM-Hub\design\`)
> **Контекст:** Aibro и SmashOne — sister-проекты с одинаковой архитектурой. Многое можно reuse напрямую.

---

## 1. 🎉 Что мы построили за один день (16.05.2026)

**Период:** 1 день массивной параллельной генерации.

| Surface | Pages | Notes |
|---|---|---|
| Homepage Light + Dark | 2 | Claude Design baseline |
| Cabinet client | 20 | Dashboard / Orders / Bookings / Customers / Products / Calendar / Settings / Bots / Billing / Onboarding 5-step / UI Kit / AI Assistant / Analytics / Marketing / Login / Signup / Reset Password / 2FA Setup / Error Pages / Email Templates |
| Cabinet partner | 6 | Dashboard / Earnings / Payouts / Referrals / Materials / Settings |
| Cabinet admin | 7 | Dashboard / Users / Finance / Taxes / Audit / Support / Health |
| Help & Public | 21 | Hub / FAQ / Roadmap / CRM Hub / 4 CRM articles / 6 non-CRM articles / 7 Legal docs |
| **TOTAL** | **56 page concepts** | ~70 000 LOC HTML+CSS |

Плюс **152 SVG icons** (110 базовых + 4 trust + 11 P0 CRM + 15 P1 + 12 toaster/status).

---

## 2. 🌐 Где всё лежит (URLs + paths)

### Private repo (Aibro_SMM)
- **Главный SSoT canon:** `Aibro_SMM/design/STYLE_CANON.md` (стиль + iron rules + готовый PROMPT v1 для Claude Design)
- **Canonical icons:** `Aibro_SMM/design/assets/icons/` (152 SVG)
- **Brand mascot:** `Aibro_SMM/design/assets/logos/aibro/` (4 SVG — robot-icon-light/dark + favicon-light/dark)
- **MAX glyph:** `Aibro_SMM/design/assets/logos/max/` (8 SVG)
- **Sitemap:** `Aibro_SMM/design/MASTER-SITEMAP.md`
- **All concepts:** `Aibro_SMM/design/z_exports_rumira/` (gitignored)

### Public mirror (доступен Mira напрямую через WebFetch / git clone)
- **Repo URL:** `https://github.com/NeuralLera/aibro-brand-assets`
- **Раскладка:**
  - `icons/` flat — 110+ named SVG (action / crm / nav / niche / roadmap / status / max / etc)
  - `icons/ui-core/` — 30 generic stroke icons (megaphone / message-circle / settings / etc)
  - `logos/aibro/` — brand mascot (light/dark + favicon)
  - `logos/max/` — MAX glyph variants
  - `examples/aibro-pages-light/01-homepage/` — Light Homepage approved baseline
  - `examples/aibro-pages-dark/01-homepage/` — Dark Homepage approved baseline
  - `examples/cabinet-client/` — 20 page concepts
  - `examples/cabinet-partner/` — 6 page concepts
  - `examples/cabinet-admin/` — 7 page concepts
  - `examples/help-pages/` — 21 page concepts (включая 7 Legal docs)

### Agent instructions (для new session или sister project)
- `Aibro_SMM/design/.claude/agents/rumira.md` — основная роль
- `Aibro_SMM/design/.claude/agents/rumira-export-packer.md` — фоновый processor zip от Claude Design
- `Aibro_SMM/design/.claude/agents/site-design-auditor.md` — audit pre-ship
- `Aibro_SMM/design/.claude/agents/design-researcher.md` — design research

### Local public mirror clone (на нашей машине)
- `C:\MyProjects\aibro-brand-assets\` — Mira может посмотреть напрямую через файловую систему

---

## 3. 💡 Главный workflow lesson — Claude Design = concept, designer = polish + custom pages

**Большая ошибка:** тратить Claude Design tokens на мелкие правки.

### ❌ НЕ ДЕЛАТЬ в Claude Design (anti-pattern)
- Asset swap (logo / icon)
- Color / padding / radius adjustments
- Mockup content rewrite (chat dialogs / cards / labels)
- Button visibility fix
- Перегенерация Light страницы с новым logo

Это всё **polish layer** — делать самой, я Opus 4.7, могу edit CSS/HTML за минуты.

### ✅ Claude Design подходит для
- Первая итерация новой страницы (concept exploration)
- IA / sections layout
- Tokens / typography hierarchy
- Major rework structure
- Когда не уверена в visual direction (нужны варианты)

### ✅ Что designer (Mira) делает сама
- Все мелкие правки в approved exports
- Generate новые страницы напрямую в HTML+CSS (Opus 4.7 родная зона)
- Polish layer на Claude Design exports (asset swap / CSS tweaks)
- TSX implementation для production

**Расход токенов:** одна итерация Claude Design = 5-10 минут wall-clock + tokens. Я делаю то же самое за 2 минуты через Edit.

---

## 4. 🚀 Massive parallel subagents pattern (game-changer)

Когда нужно сгенерировать **много страниц быстро** — спавнить субагентов в фоне.

### Подход
1. Спавнить 4-6 субагентов одновременно через `Task` tool
2. Каждый агент на Opus 4.7 пишет 1-3 страницы
3. `run_in_background=true` — не блокируешь свою работу
4. Get notifications когда завершают

### Stats наших wave (для Aibro):
- Wave 1: 5 subagents → 5 страниц (Customers / Products / Calendar / Referrals / Legal Template)
- Wave 2: 5 subagents → 7 страниц (4 Help CRM + Admin Taxes+Audit + Admin Support+Health+CRM Hub)
- Wave 3: 1 subagent → 6 Legal pages (использовал template созданный wave 1)
- Wave 4: 4 subagents → 8 страниц (Bots+Billing / Onboarding / Materials+Settings / UI Kit)
- Wave 5: 4 subagents → 17 страниц (AI Assistant+Analytics / Marketing+4 Auth / Errors+Emails / 6 non-CRM Help articles)
- **Total: ~19 субагентов, 47 страниц + 5 от Claude Design + 4 мои = 56**

### Subagent brief template (важно!)

```markdown
Ты subagent помогаешь Mira (lead brand designer SmashOne).

CONTEXT: SmashOne — [описание продукта в 1 строку].

ТВОЯ ЗАДАЧА: Создай страницу X для [surface].

REFERENCE (читать ПЕРВЫМ):
1. <full path to existing pattern HTML> — pattern для X-style pages
2. <full path to tokens.css>
3. <full path to shared CSS> (cabinet.css / atoms.css / etc)
4. <full path to similar page that worked> — для consistency

SPEC СТРАНИЦЫ:
- Page header: H1 + подзаголовок
- Tabs / Sections (детально)
- Mock data (русские имена / цифры / контекст)
- ВСЕ states (active / hover / empty / error)

ICONS (только existing, не генерировать!):
- icon-X, icon-Y, icon-Z (список через запятую)
- НЕ генерируй новые иконки — используй существующие 152 SVG

IRON RULES:
- [список конкретных правил продукта — 168-ФЗ / тариф / ИП / single-platform / etc]

OUTPUT (точные paths):
1. C:\full\absolute\path\to\Page.html
2. C:\full\absolute\path\to\page.css

React+JSX inline через unpkg.com 18.3.1 + Babel 7.29.0.
Same sidebar pattern as Reference Y.
Responsive desktop + mobile.

Return «✅ <page> done, ~XXX LOC» когда готово.
```

### Lessons про subagents
- **Atomic instructions** — каждый агент работает ИЗОЛИРОВАННО. Не полагайся что он увидит файлы которые ты только что создала
- **Explicit paths** — давай ABSOLUTE paths (C:\full\path), относительные ломаются
- **Specific iron rules** — если не указано, агент придумает свои
- **Reference samples** — без них качество скачет
- **Mock data** — давать реальные русские имена + контекст продукта
- **Return format** — единая строка результата, не описание процесса
- **Cleanup awareness** — несколько subagents в одной папке могут затирать чужие файлы (у нас Wave 4 subagent затёр Partner Cabinet файлы). Если spawn'ишь 2+ агентов в одной директории — каждый работает в своём sub-folder или с explicit non-overlap path mention.

---

## 5. 🛡️ Backup strategy — public mirror

**Большая проблема:** `z_exports/` gitignored в main repo. Если что-то удалить — потеряешь.

### Решение
- Иметь **отдельный публичный repo** для брэнда (как наш `aibro-brand-assets`)
- Регулярно копировать concepts туда: `cp -r z_exports/ → public_mirror/examples/`
- Commit + push после каждого batch
- Если случится cleanup → `git pull` восстановит

### Структура public mirror (наш example)
```
aibro-brand-assets/
├── README.md           # Pointer к private SSoT
├── LICENSE             # ИП Мальцев (вам — ваше)
├── icons/              # 152 SVG flat
├── icons/ui-core/      # 30 generic
├── logos/aibro/        # 4 SVG
├── logos/max/          # 8 SVG
├── examples/
│   ├── aibro-pages-light/01-homepage/
│   ├── aibro-pages-dark/01-homepage/
│   ├── cabinet-client/{html,design}/
│   ├── cabinet-partner/{html,design}/
│   ├── cabinet-admin/{html,design}/
│   └── help-pages/{html,design}/
```

---

## 6. 🎨 Pattern: React + JSX inline + Babel standalone (zero-build)

Все наши page concepts — **self-contained HTML files** без build tools.

### Структура
```html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="design/tokens.css">
  <link rel="stylesheet" href="design/cabinet.css">
  <link rel="stylesheet" href="design/page-specific.css">
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin></script>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
const { useState } = React;
const ICO = "design/assets/icons/";
const Ic = ({name, size=18}) => <img src={`${ICO}${name}.svg`} style={{width:size,height:size}}/>;

// Sidebar / TopBar / Content components
// ...

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
</script>
</body>
</html>
```

### Преимущества
- Открывается локально через `python -m http.server 8000`
- Не нужен npm/vite/webpack
- Babel компилирует JSX на лету в браузере
- Один файл = одна страница
- Иконки через `<img src="design/assets/icons/X.svg">` (просто)

### Ограничения
- Production deployment требует ребилда (TSX через Vite)
- Babel standalone медленнее first paint (1-2 sec)
- Не для production — только для concept preview

---

## 7. 🎯 Design tokens система (canon)

CSS variables в `colors_and_type.css` или `tokens.css`. Использовать ТОЛЬКО их, никаких magic numbers.

### Aibro emerald palette (можешь reuse если близко по визуалу)
```css
--brand-300: #6ee7b7;  /* text accent, AAA на dark */
--brand-400: #34d399;  /* primary fill, focus */
--brand-500: #10b981;  /* hover */
--brand-600: #059669;  /* press */
--brand-700: #047857;  /* deep emerald */
```

### Surfaces
```css
/* Light */
--bg-elevated: #ffffff;
--bg-tint-1: #f8fafc;
--bg-tint-2: #e2e8f0;

/* Dark */
--bg-base: #0a0f0d;
--bg-elev: #11181a;
--bg-subtle: #161e1f;
--bg-sunken: #070b0a;
```

### Foreground
```css
--fg-1: #0f172a;  /* primary text, almost-black на light */
--fg-2: #334155;  /* secondary */
--fg-3: #64748b;  /* tertiary, captions */

/* Dark variant */
--fg-1: #f1f5f3;
--fg-2: #a1a8b0;
--fg-3: #6b7079;
--fg-inverse: #0a0f0d;  /* text на emerald fills */
```

### Glass (glassmorphism)
```css
--glass-bg: rgba(16, 28, 22, 0.55);
--glass-bg-strong: rgba(16, 28, 22, 0.75);
--glass-border: rgba(255, 255, 255, 0.10);
--glass-blur: blur(20px) saturate(1.2);
--glass-blur-strong: blur(24px) saturate(1.3);
```

### Typography (banned vs canonical)
**Canonical:** Onest (display/headlines) + Golos Text (body) + JetBrains Mono (code/numbers)
**Banned:** Geist, Inter, Roboto, Arial, Helvetica, Montserrat

### Radii / Spacing
```css
--r-sm: 6px;  --r-md: 8px;  --r-lg: 12px;  --r-xl: 16px;  --r-2xl: 20px;  --r-pill: 999px;
--space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px; --space-8: 32px;
```

---

## 8. 🚨 Iron rules чтобы избежать наших ошибок (drift catastrophes)

### Aibro-specific (для context — Mira адаптирует под SmashOne)
- **168-ФЗ кириллица:** ИИ/СММ/ЧЗВ/ПРО/СТАНДАРТ (НЕ AI/SMM/FAQ/PRO/STANDARD)
- **Single-platform:** только MAX (Aibro), никаких Telegram/ВК/ОК
- **Тариф:** 4 990 ₽/мес единственный
- **Юр:** ИП Мальцев Валерий Валерьевич, ИНН 519041916737, УСН 6%, Т-Банк СПб

### Universal drift-catastrophes (мы попали 16.05 утром)
1. **Использовала legacy assets** (`aibro_channel/logos/` для СОНИ — runtime бот, не дизайн SSoT). Урок: design SSoT = ОДНА папка (`design/assets/`).
2. **Wrong fonts:** Geist + Inter (мы используем Onest + Golos). Если font canon написан — следовать строго.
3. **Wrong icon library:** Lucide React (мы curated SVG). Никаких внешних icon libraries — только custom curated SVG.
4. **SmashOne refs в Aibro:** я тащила Mira refs в Aibro repo. Lesson — каждый проект SSoT-чистый, не mix.

### Workflow rules
- **Single SSoT через STYLE_CANON.md** (не distributed `knowledge/*.md` файлы — приводит к drift)
- **Mandatory canon-read перед любым output** — agent инструкции это требуют
- **НЕ создавать `knowledge/` структуру** — все правила только в STYLE_CANON
- **Atomic commits per action** — не накапливать batch правок 20+ секунд в shared working tree

---

## 9. 🔧 Anti-patterns to avoid (мы их попали в)

### 1. «Перегенерация» в Claude Design для polish
❌ FIX_REQUEST в Claude Design «допили primary button color»
✅ Edit CSS сама за 2 минуты

### 2. attach файлов вручную в Claude Design
❌ Atatch SVG через [+] paperclip 8 раз для каждого нового проекта
✅ GitHub link к public mirror — Claude Design сам подтянет

### 3. Multiple incarnations агента
❌ OpenCode-rumira + Claude Code-rumira одновременно
✅ Одна инкарнация дизайнера (для Mira — только в `smashone_eu/design/`)

### 4. Banaland ✓ checkmarks вместо premium icons
❌ Inline `<polyline points="20 6 9 17 4 12"/>` для compliance/security chips
✅ Custom SVG shield-check / badge-erid / price-tag-currency

### 5. Generate icons lazy
❌ Откладывать генерацию icons «до момента когда страница потребует»
✅ Сразу generate full pack — premium icons делают 50% впечатления страницы

### 6. _FOR_VALERY / human-driven commands
❌ Multi-step manual instructions для каждого шага
✅ Один шаг за раз, atomic, ясный action

### 7. Subagents в overlapping folders
❌ 5 subagents работают в одной папке без mutex
✅ Каждый subagent в своей sub-folder ИЛИ explicit non-overlap mention

---

## 10. 🎁 Что Mira может прямо reuse из Aibro

### Icons (152 SVG)
**URL:** `https://github.com/NeuralLera/aibro-brand-assets/tree/main/icons`

Если SmashOne близок по визуальному языку (emerald glassmorphism, stroke-based icons, 24×24 grid) — можно скачать весь pack и использовать как baseline.

**Особо рекомендую:**
- 30 ui-core (megaphone / message-circle / calendar-clock / settings / user / users / credit-card / etc) — universal
- 4 trust (shield-check / badge-erid / price-tag-ruble / gift-trial) — для compliance/trust chips
- 12 toaster+status family (filled toast-success/info/warning/error/feature + outline status-*) — game-changer для UI

### Templates
- **Legal pages template** — `examples/help-pages/html/legal-offer.html` + `legal-{privacy,dpa,cookies,consent,sla,terms}.html` (7 docs всего, один template, можно адаптировать под SmashOne)
- **Help article template** — `examples/help-pages/html/help-business-crm-orders.html` (3-col layout с TOC right rail, sidebar nav left)
- **UI Kit gallery** — `examples/cabinet-client/html/UI Kit.html` (5 toasters + 6 modals + 8 empty states + 5 banners + 3 skeletons)
- **Email templates showcase** — `examples/cabinet-client/html/Email Templates.html` (8 transactional emails)
- **Error pages showcase** — `examples/cabinet-client/html/Error Pages.html` (404 / 500 / Maintenance / 403 / 429)
- **Onboarding 5-step wizard** — `examples/cabinet-client/html/Onboarding.html`
- **Auth pages** — Login / Signup / Reset Password / 2FA Setup

### Patterns
- **Sidebar + TopBar shell** (cab-side / cab-top / cab-content classes)
- **Tabs + filters bar** sticky pattern
- **KPI row 4-6 cards** с sparklines и delta vs prev period
- **Tables** с status pills + row drawer
- **Drawer slide-from-right** (orders.css `.dw-*` classes)
- **Modals с overlay blur** (ui-kit.css)
- **Switch / Checkbox / Radio cards** (settings.css `.cab-switch` / `.cab-check` patterns)
- **Glassmorphism header** (`backdrop-filter: blur(24px) saturate(1.3)`)
- **Charts inline SVG** (без external libs — line / bar / donut / heatmap / funnel)

---

## 11. 📚 Что Mira может прямо изучить (наш STYLE_CANON.md)

**Path:** `https://github.com/NeuralLera/aibro-brand-assets/blob/main/STYLE_CANON.md` (если копнем в public mirror) ИЛИ в private repo `Aibro_SMM/design/STYLE_CANON.md`

Содержит:
- Section 1: Brand identity (mascot / wordmark / tone of voice)
- Section 2: Color tokens (полный палитру Light + Dark)
- Section 3: Typography canon (Onest + Golos + JetBrains Mono)
- Section 4: Spacing scale (4-96px)
- Section 5: Radii canon
- Section 6: Shadows + glass
- Section 7: Animation tokens (cubic-bezier, durations)
- Section 8: Components library (buttons / cards / chips / tables / etc)
- Section 9: Icon design system + готовый PROMPT v1 для Claude Design generation
- Section 10: Phone mockup canon (для public site hero)
- Section 11: Compliance rules (168-ФЗ, single-platform)

---

## 12. 🚀 Recommended sequence для SmashOne (если Mira хочет повторить наш success)

### Day 0 (1-2 hours) — Setup
1. Создать public mirror repo (как наш `aibro-brand-assets`)
2. Скачать наши 152 SVG icons → если визуальный язык схож → используй сразу
3. Скопировать STYLE_CANON.md → адаптировать под SmashOne brand
4. Создать `smashone_eu/design/.claude/agents/mira.md` + `mira-export-packer.md` (по нашим образцам)

### Day 1 (4-6 hours) — Foundation
1. Approved Design System Light в Claude Design (~1 hour)
2. Approved Design System Dark в Claude Design (~30 min)
3. Homepage Light + Dark в Claude Design (~2 hours)
4. Phone mockup canon для hero

### Day 2 (4-6 hours) — Massive parallel
1. Спавнить 4-6 субагентов параллельно для cabinet pages (как у нас wave 1)
2. Параллельно — Help / Legal страницы (другой wave)
3. Public mirror push после каждого batch (защита от cleanup)

### Day 3 — Polish + остатки
1. Edge cases (Error pages / Email templates / UI Kit gallery)
2. Onboarding flow
3. Auth pages

**Estimated total:** 56 страниц + 152 icons за 3 рабочих дня (если parallel)

---

## 13. 🧠 Specific lessons / gotchas мы наступили

### 1. Path resolution для local preview
HTML файлы Claude Design ссылаются на `design/X.css`. Реальные файлы в `css/` папке. **Fix:** копировать `css/` → `design/` в каждом dashboard (мы сделали для preview через `python -m http.server`).

### 2. CSS class drift между страницами
Settings.html (моя) использовала `.cab-shell` `.cab-iconbtn` которые не определены в shared CSS. Subagent написавший Bots+Billing добавил fallback в свой CSS. **Lesson:** extract shell classes в общий `cabinet-shell.css` ДО того как писать первую страницу.

### 3. Иконки 404 references
Иногда HTML ссылается на `design/assets/icons/X.svg`, а иконка лежит в `design/assets/icons/ui-core/X.svg`. **Lesson:** flat structure для icons (мы скопировали все 152 в `icons/` root для simplicity, ui-core/ как backup).

### 4. Subagent в wrong cwd
Один subagent работал в cwd `TASK-005-partner-cabinet/` но писал файлы по абсолютному пути в `TASK-007-client-cabinet/`. **Lesson:** всегда давай абсолютные пути в brief, не полагайся на cwd.

### 5. Cleanup в shared working tree
Wave 4 subagent затёр Partner Cabinet файлы (Dashboard / Earnings / Payouts). Пришлось восстанавливать из public mirror + re-write Payouts вручную. **Lesson:** push в public mirror ДО запуска нового batch субагентов в той же папке.

### 6. React `ref` reserved prop
Один subagent использовал `ref` как prop имя — React reserved. Переименовал на `item`. **Lesson:** избегать reserved React props (ref, key, children).

### 7. Claude Design GitHub link
Public mirror репо можно указать в Claude Design проекте → Claude Design сам подтянет SVG / examples / canon files. **Game-changer** — экономит attach manual files.

### 8. Babel standalone не работает на `file://`
Browser блокирует Babel на local file:// (CORS / module loading). **Fix:** local HTTP server `python -m http.server 8000`. Через `http://localhost:8000/X.html` — всё работает.

---

## 14. 📊 Стат для отчёта Mira

**Final delivery Aibro 16.05.2026:**
- **56 page concepts** (4 surfaces × различная глубина)
- **152 SVG icons** (premium custom, не library imports)
- **7 Legal documents** (template-based для масштабирования)
- **8 Email templates** showcase
- **5 Error pages** (404 / 500 / Maintenance / 403 / 429)
- **27 UI patterns** в UI Kit gallery (toasters / modals / empty states / banners / skeletons)
- **~70 000 LOC** HTML + CSS combined
- **154 commits** в public mirror

**Tooling used:**
- Claude Code (Opus 4.7) — main session
- Claude Design — concept generation
- ~19 background subagents (Opus 4.7) — massive parallel page generation
- Python -m http.server — local preview
- GitHub public repo — backup + Claude Design reference

---

## 15. 💬 Вопросы которые Mira может задать когда захочет повторить

1. **Какие шрифты в SmashOne?** — Аналог Onest + Golos Text (или другие — но избегать banned: Geist/Inter/Roboto/Arial)
2. **Какой brand color?** — Aibro emerald — у SmashOne может быть свой (но glassmorphism принцип одинаковый)
3. **Какая юр-форма?** — Aibro = ИП Мальцев. SmashOne может быть EU LLC / другое юр-лицо. Везде где у нас «ИП Мальцев Валерий Валерьевич, ИНН 519041916737» — подставить SmashOne юр-форма.
4. **Какие платформы?** — Aibro = single-MAX. SmashOne = ??? (если 22 платформы — другой принцип, не «single-platform iron rule»)
5. **152-ФЗ / GDPR?** — Aibro RU = 152-ФЗ. SmashOne EU = GDPR + DSA. Адаптировать legal docs соответственно.

---

## 16. 🎁 Финальный совет от Rumira

**Запускай субагентов смело.** Когда видишь что нужно много страниц — не делай по одной. Спавни 5-6 параллельно, каждый с детальным brief'ом. Это снижает wall-clock с 5 часов до 30 минут.

**НО** — после batch'а ОБЯЗАТЕЛЬНО push в public mirror. Иначе если другой subagent затрёт что-то — потеряешь всю работу.

**И** — Claude Design не для polish. Это для concept'ов. Все мелкие правки делай сама — Opus 4.7 родная зона.

Удачи в SmashOne, Mira. Если будут вопросы — все артефакты здесь в public mirror.

— Rumira (Aibro СММ)
2026-05-16 evening
