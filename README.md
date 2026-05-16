# Aibro Brand Assets — Public Mirror

Публичный repo с visual brand assets СММ АЙБРО (logos / icons / badges / patterns / compliance docs).

> **⚠️ NOT SSoT.** Canonical brand spec живёт в **private repo** `Aibro_SMM/design/`:
> - `Aibro_SMM/design/STYLE_CANON.md` — главный SSoT (стиль / копирайт / компоненты / готовый PROMPT v1)
> - `Aibro_SMM/design/assets/` — оригинал curated assets (с extra subfolder structure: `assets/icons/ui-core/`, `assets/icons/_sprites/`)
> - `Aibro_SMM/design/MOCKUPS_CANON.md` — phone mockups carousel
> - `Aibro_SMM/design/MASTER-SITEMAP.md` — 4 surfaces

Этот публичный mirror — для подключения через Claude Design (`Link code on GitHub`) и других AI-инструментов которым нужны publicly accessible URL.

## Содержимое

```
aibro-brand-assets/
├── LICENSE                       — All Rights Reserved, ИП Мальцев Валерий Валерьевич
├── README.md                     — этот файл
│
├── logos/
│   ├── aibro/                    — 4 SVG бренд (robot-icon-{light,dark} + favicon-{light,dark})
│   └── max/                      — 8 SVG MAX (glyph / light / dark / mono / circle / outline / brand-emerald)
│
├── icons/                        — 110+ canonical SVG (stroke 1.8, 24×24, currentColor)
│   ├── icon-*.svg                — 80 SVG из manifests (nav / crm / actions / status / max-eco / roadmap)
│   ├── ui-core/                  — 30 SVG core UI (home, settings, calendar-clock, credit-card, etc)
│   ├── _sprites/                 — 6 SVG sprite sheets (actions / cabinet / max-ecosystem / roadmap / status)
│   └── _preview.html             — визуальный preview всех 110+ иконок (light/dark toggle)
│
├── badges/                       — 5 SVG status pills (demo / official / service / soon / support)
│
├── compliance/
│   ├── 168-fz.md                 — Cyrillic abbreviations user-facing rule
│   └── single-max.md             — single-platform iron rules (only MAX)
│
├── patterns/
│   ├── glassmorphism.md          — tile background + glass layering canon
│   └── landing-pages.md          — public one-pager structure
│
├── _meta/                        — JSON manifests с inner SVG paths
│   ├── manifest-cabinet.json     — 20 nav + 5 CRM + 5 CRM-settings
│   ├── manifest-actions.json     — 19 CRUD action icons
│   ├── manifest-status.json      — 15 status icons
│   ├── manifest-max-ecosystem.json — 9 entity + niche icons
│   └── manifest-roadmap.json     — 7 roadmap micro-icons
│
└── examples/
    ├── aibro-pages-light/        — утверждённые page exports (light theme) — заполняются
    └── aibro-pages-dark/         — утверждённые page exports (dark theme) — заполняются
```

## Quick stats

| Категория | Кол-во SVG |
|---|---|
| Aibro logos (light + dark) | 4 |
| MAX logos (variants) | 8 |
| Icons (из manifests, flat) | 80 |
| Icons / ui-core | 30 |
| Icons / sprites | 6 |
| Badges (status pills) | 5 |
| **TOTAL canonical SVG** | **133** |

## Canonical icon spec

Все SVG в `icons/` следуют единому stencil:

```xml
<svg xmlns="..." viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.8"
     stroke-linecap="round" stroke-linejoin="round">
  {paths}
</svg>
```

- **24×24 grid**
- **Stroke 1.8px** (canon 1.8-2.0)
- **`currentColor` inheritance** — color наследуется от parent CSS
- **Rounded caps + joins** — smooth visual
- **Kebab-case naming** — `icon-nav-home.svg`, `icon-crm-orders.svg`

**Запрещённые icon libs:** Lucide React, Tabler, Heroicons, Phosphor, FontAwesome, Material Icons.

## Использование с Claude Design

В setup форме Claude Design (https://claude.ai/design):

- Поле **«Link code on GitHub»**: `https://github.com/NeuralLera/aibro-brand-assets`
- Claude Design подтянет автоматически:
  - 133 SVG (logos + icons + badges)
  - 2 compliance docs (168-ФЗ + single-MAX)
  - 2 patterns docs (glassmorphism + landing-pages)
  - 5 JSON manifests (для programmatic icon lookup)

## Brand canon (краткое описание)

### Typography
- **Headlines:** Onest (RU-friendly, expressive)
- **Body:** Golos Text (RU-friendly, highly readable)
- **Mono:** JetBrains Mono (для tabular numbers, цены, даты, IDs)
- **BANNED:** Inter / Geist / Roboto / Arial / Helvetica / Montserrat / Open Sans / Times / Georgia

### Palette
- **Light:** Emerald `#10b981` primary + `#ecfdf5` subtle bg, neutral surfaces near-white
- **Dark:** Emerald `#34d399` primary + `#0a0f0d` near-black bg
- **Restraint:** изумрудный покрывает ≤10% (light) или ≤12% (dark) surface

### Glassmorphism
- Cards: `rgba(255,255,255,0.7)` light / `rgba(16,28,22,0.55)` dark
- Backdrop-filter: `blur(20px)` (dark adds `saturate(1.2)` compensation)
- 1px hairline borders, radius-12 default

### Motion
- 140-220ms `cubic-bezier(0.4, 0, 0.2, 1)`
- **BANNED:** bounce / elastic / parallax / page-pinning
- `prefers-reduced-motion` → 0.001ms (mandatory)

### Product canon (immutable)
- **Tariff:** single 4 990 ₽/мес (no multi-tier, no add-ons)
- **Trial:** 5 days без карты
- **Platform:** ONLY MAX messenger (отдельный мессенджер группы VK, свой бренд)
- **CRM-pivot:** заказы + записи + мини-CRM. Оплата клиента — мимо нас (не платёжный агент).
- **Brand wordmark:** «СММ АЙБРО» (Cyrillic, Onest Bold, tracking -0.02em). Never «Aibro» / «AIBRO».
- **168-ФЗ:** AI → ИИ, SMM → СММ, FAQ → ЧЗВ, PRO → ПРО. Exceptions: MAX, CRM, MVP, ОРД, ИП, erid.

### Jurisdiction
- Russia only. ИП Мальцев Валерий Валерьевич (ИНН 519041916737), УСН 6%.

## License

См. `LICENSE`. All Rights Reserved — ИП Мальцев Валерий Валерьевич (Российская Федерация). Public visibility ≠ open-source.

## Sister project

(Эти ассеты — самодостаточный canonical reference для СММ АЙБРО. Sister-проекты не используются как content/style reference.)
