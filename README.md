# Aibro Brand Assets — Public Mirror

Публичный repo с supplementary visual references СММ АЙБРО.

> **⚠️ Это NOT SSoT.** Canonical brand spec живёт в **private repo** `Aibro_SMM/design/`:
> - `Aibro_SMM/design/STYLE_CANON.md` — главный SSoT (стиль / копирайт / компоненты / готовый PROMPT v1)
> - `Aibro_SMM/design/assets/` — 53 SVG + 5 manifests (curated logos, icons, badges)
> - `Aibro_SMM/design/MOCKUPS_CANON.md` — phone mockups carousel
> - `Aibro_SMM/design/MASTER-SITEMAP.md` — 4 surfaces

## Зачем этот public repo

1. **Compliance summaries** — `compliance/168-fz.md` + `compliance/single-max.md` (короткие чек-листы для быстрого review).
2. **Pattern references** — `patterns/glassmorphism.md` + `patterns/landing-pages.md`.
3. **Утверждённые экспорты СММ АЙБРО** — `examples/aibro-pages-light/` + `examples/aibro-pages-dark/` (заполняются по мере approval).

## Структура

```
aibro-brand-assets/
├── compliance/              — Короткие чек-листы (168-ФЗ + single-MAX)
│   ├── 168-fz.md              — Кириллица: ИИ / СММ / ЧЗВ / ПРО / СТАНДАРТ
│   └── single-max.md          — Single-platform MAX (no Telegram / ВК / ОК / Дзен)
├── patterns/                — Visual pattern references
│   ├── glassmorphism.md       — Tile background + glassmorphism canon
│   └── landing-pages.md       — Public one-pager + CRM-pivot section
└── examples/                — Visual HTML references (наши approved страницы)
    ├── aibro-pages-light/     — утверждённые наши страницы (light theme)
    └── aibro-pages-dark/      — утверждённые наши страницы (dark theme)
```

## Источник правды по design tokens / typography / icons

**НЕ в этом repo.** В private repo `Aibro_SMM/design/STYLE_CANON.md`:

- **Шрифты:** Onest (headlines) + Golos Text (body). Inter / Geist / Roboto / Arial — banned.
- **Иконки:** curated SVG в `design/assets/icons/ui-core/` (30 SVG) + 5 manifests. Lucide / Tabler / Heroicons / Phosphor — banned.
- **Палитра:** Emerald light / dark — детали в STYLE_CANON секции 4-5.
- **Motion:** restraint 140-220ms — детали в STYLE_CANON секции 3.
- **Brand assets:** `design/assets/logos/aibro/` + `design/assets/logos/max/` (`aibro_channel/logos/` — НЕ для design-system, только для СОНИ канал-агента).

## Использование с Claude Design

В setup форме Claude Design (https://claude.ai/design):

- Поле **«Link code on GitHub»**: опционально — `https://github.com/NeuralLera/aibro-brand-assets` (даст compliance + pattern references).
- **Основной canon** — paste содержимого `PROMPT.md` из task-папки (`Aibro_SMM/design/.claude/tasks/<TASK>/PROMPT.md`). PROMPT уже содержит canonical tokens / typography / iron rules.
- **Brand assets (logos / icons / badges)** — drag-drop напрямую из `Aibro_SMM/design/assets/` (этот публичный repo не содержит SVG ассетов — только compliance + pattern docs).

## License

См. `LICENSE`. All rights reserved — ИП Мальцев Валерий Валерьевич (ИНН 519041916737, Российская Федерация). Public visibility ≠ open-source.
