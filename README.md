# Aibro Brand Assets

Публичный репо визуальной айдентики СММ АЙБРО — design system spec для подключения к [Claude Design](https://claude.ai/design) через "Link code on GitHub".

> **SSoT для бренда Aibro СММ.** Адаптировано из sister `https://github.com/NeuralLera/smashone-brand-assets` под российский рынок (168-ФЗ + single-MAX + единый тариф 4 990 ₽).

## Структура

```
aibro-brand-assets/
├── tokens/           — Design tokens (verbatim CSS для PROMPT.md)
│   ├── light-theme.md     — Emerald Light palette + glassmorphism
│   ├── dark-theme.md      — Emerald Dark (зелёный undertone + saturate boost)
│   ├── typography.md      — Geist + Inter + IBM Plex Mono stack
│   └── motion.md          — 140-220ms restraint canon
├── patterns/         — UI patterns
│   ├── landing-pages.md   — Public one-pager + CRM-pivot section
│   ├── cabinet-ia.md      — Sidebar 256/64 + Cmd+K + cards + tables
│   └── glassmorphism.md   — Glassmorphism + tile background layered hero
├── brand/
│   └── brand-identity.md  — Friendly Robot icon + MAX glyph + voice/tone
├── compliance/
│   ├── 168-fz.md         — Кириллица: ИИ / СММ / ЧЗВ / ПРО / СТАНДАРТ
│   └── single-max.md     — Single-platform MAX (no Telegram / ВК / ОК / Дзен)
└── examples/         — Заполняется после approval Aibro pages
    └── (заполняется)
```

## Принципы

- **Light default** (с toggle на dark).
- **Изумрудный акцент** `#10b981` ≤10% surface coverage.
- **Glassmorphism canon** — backdrop-filter blur(20px) + rgba surfaces + multi-layer shadows.
- **Sentence case везде** (никаких Title Case / UPPERCASE для заголовков).
- **168-ФЗ кириллица** для всех user-facing аббревиатур (ИИ / СММ / ЧЗВ / ПРО).
- **Бренд:** «СММ АЙБРО» (никаких «Aibro» / «AIBRO» / «aibro» в visible text).
- **MAX** — латиницей всегда (торговая марка VK).

## Tariff / Trial (для PROMPT)

- **Единый тариф:** 4 990 ₽/мес (всё включено, без аддонов).
- **Триал:** 5 дней (2 автопоста/день, 100 ответов ИИ/триал).
- **Партнёрка:** 10% L1 + 10% L2 lifetime (unified 12.05.2026).
- **CRM-pivot (релиз 08.06.2026):** приём заказов / запись на услуги / мини-CRM клиентов + push владельцу через MAX. Оплата заказа клиентом — **мимо нас** (владелец сам на своей кассе/банке).

## Подключение к Claude Design

При создании нового проекта на https://claude.ai/design в поле "Link code on GitHub" указывай:

```
https://github.com/NeuralLera/aibro-brand-assets
```

Claude Design автоматически подтянет tokens / patterns / brand / compliance — будет использовать при генерации концептов. Это даёт **консистентность бренда** между разными design проектами.

## Use в PROMPT.md (для Rumira)

При написании PROMPT для Claude Design — встраивай канон verbatim:

```markdown
## Design tokens
[см. tokens/light-theme.md + tokens/dark-theme.md]

## Typography
[см. tokens/typography.md]

## Motion
[см. tokens/motion.md]

## Glassmorphism
[см. patterns/glassmorphism.md]

## Brand identity
[см. brand/brand-identity.md]

## Compliance
[см. compliance/168-fz.md + compliance/single-max.md]
```

## Sister repos

- **SmashOne (EU/US):** `https://github.com/NeuralLera/smashone-brand-assets` — эталон structure, английский tone, dark default + light toggle, 6-platform stack.

## Связанные документы

- Основной репо Aibro СММ: `https://github.com/NeuralLera/smmaibro` (private).
- Rumira (бренд-дизайнер): `Aibro_SMM/design/CLAUDE.md` + `Aibro_SMM/design/.claude/agents/rumira.md`.
- Knowledge library: `Aibro_SMM/design/knowledge/` — детальные knowledge файлы (8 шт).

## Версия

- **v2.0** — 2026-05-16. Полное переписывание с нуля. Источник: `Aibro_SMM/design/knowledge/` (Phase A foundation для Rumira). Заменяет v1.0 (короткие spec'и от Дона + GPT-Rumira 14-15.05).

## License

MIT — см. `LICENSE`.

---

*Aibro СММ © 2025-2026 · ИП Мальцев Валерий Валерьевич · ИНН 519041916737*
