# Aibro Brand Assets — Public Mirror

Публичный repo с supplementary visual references СММ АЙБРО.

> **⚠️ Это NOT SSoT.** Canonical brand spec живёт в **private repo** `Aibro_SMM/design/`:
> - `Aibro_SMM/design/STYLE_CANON.md` — главный SSoT (стиль / копирайт / компоненты / готовый PROMPT v1)
> - `Aibro_SMM/design/assets/` — 53 SVG + 5 manifests (curated logos, icons, badges)
> - `Aibro_SMM/design/MOCKUPS_CANON.md` — phone mockups carousel
> - `Aibro_SMM/design/MASTER-SITEMAP.md` — 4 surfaces

## Зачем этот public repo

1. **Visual ДНК reference (SmashOne)** — `examples/smashone-pages-light/` (22 страницы) + `examples/smashone-pages-dark/` (5 страниц). Берём layout / glassmorphism / типографику от sister-проекта, контент полностью под Aibro (тариф 4990 ₽, single-MAX, ИП Мальцев РФ, 168-ФЗ).
2. **Утверждённые экспорты Aibro** — `examples/aibro-pages-light/` / `examples/aibro-pages-dark/` (заполняются по мере approve).
3. **Compliance summaries** — `compliance/168-fz.md` + `compliance/single-max.md` (короткие чек-листы для быстрого review).
4. **Pattern references** — `patterns/glassmorphism.md` + `patterns/landing-pages.md`.

## Структура

```
aibro-brand-assets/
├── compliance/         — Короткие чек-листы (168-ФЗ + single-MAX)
│   ├── 168-fz.md         — Кириллица: ИИ / СММ / ЧЗВ / ПРО / СТАНДАРТ
│   └── single-max.md     — Single-platform MAX (no Telegram / ВК / ОК / Дзен)
├── patterns/           — Visual pattern references
│   ├── glassmorphism.md  — Tile background + glassmorphism canon
│   └── landing-pages.md  — Public one-pager + CRM-pivot section
└── examples/           — Visual HTML references
    ├── smashone-pages-light/  — 22 SmashOne pages (visual ДНК reference)
    ├── smashone-pages-dark/   — 5 SmashOne dark pages
    ├── aibro-pages-light/     — утверждённые наши страницы (light)
    └── aibro-pages-dark/      — утверждённые наши страницы (dark)
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

- Поле **«Link code on GitHub»**: опционально — `https://github.com/NeuralLera/aibro-brand-assets` (даст visual ДНК references).
- **Основной canon** — paste содержимого `PROMPT.md` из task-папки (`Aibro_SMM/design/.claude/tasks/<TASK>/PROMPT.md`). PROMPT уже содержит canonical tokens / typography / iron rules.

## Sister projects

- `https://github.com/NeuralLera/smashone-brand-assets` — эталон по которому сделан наш repo
- `https://smashone.ai` — sister international product (SmashOne)

## License

См. `LICENSE`.
