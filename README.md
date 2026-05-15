# Aibro Brand Assets

Visual identity assets for **Aibro СММ** (СММ АЙБРО) — ИИ-автоматизация бизнеса в MAX. Light & dark themes, glassmorphism style, Russian-only product (RU локализация, 168-ФЗ compliance).

> **Brand owner:** ИП Мальцев Валерий Валерьевич (Russia, ИНН 519041916737)
> **Domain:** smmaibro.ru
> **Visual identity is single-tenant** (no jurisdictional split unlike SmashOne).

## Repository scope

This repo contains **visual brand identity** only — logos, design tokens, component specs, brand compliance rules. It is referenced by **Claude Design** (https://claude.ai/design) projects and downstream implementation in product code (`web/src/` of private app repo).

### What's here

- `logos/`
  - `logo_friendly_robot_icon_light.svg` + preview — current friendly robot icon (light theme)
  - `logo_friendly_robot_icon_dark.svg` + preview — current friendly robot icon (dark theme)
  - `MAX_light_icon.svg` + preview — MAX-platform icon в нашем стиле (light)
  - `MAX_dark_icon.svg` + preview — MAX-platform icon в нашем стиле (dark)
  - `v2/` — source exports for robot v2 (master svgs + favicons)
  - `current/` — structured copies (robot + MAX)
- `tiles/`
  - `aibro-tile-light/` — light theme background tile pattern
  - `aibro-tile-dark/` — dark theme background tile pattern
  - `light/` and `dark/` — structured copies of tile svgs
- `tokens/`
  - `light-theme.md` — light theme tokens (colors / typography / spacing / radius / shadows)
  - `dark-theme.md` — dark theme tokens
  - `motion.md` — motion / animation system
- `patterns/`
  - `glassmorphism.md` — glassmorphism implementation guide (canonical product style)
  - `landing-pages.md` — landing page section patterns (hero / validation / features / pricing / FAQ)
- `brand/`
  - `brand-identity.md` — brand voice / tone / visual ДНК
- `compliance/`
  - `168-fz.md` — 168-ФЗ Russian language compliance (ИИ/СММ/ЧЗВ vs AI/SMM/FAQ)
  - `single-max.md` — Single-MAX iron rules (no Telegram/ВК/ОК/Дзен/Automator references)
- `examples/` — reference designs (заполняется по мере того как Rumira создаёт страницы)

### What's NOT here

- ❌ Marketing copy / pricing values / launch dates / financial details
- ❌ Page layouts / specific product screens (живут в private `smmaibro` repo, `web/src/pages/`)
- ❌ Backend / API / database details
- ❌ Customer data / business logic
- ❌ Credentials / API keys / tokens

## Brand identity summary

- **Themes:** Light + Dark — both first-class, user-toggleable via theme switcher
- **Style:** Glassmorphism (см. `patterns/glassmorphism.md`)
- **Brand mark:** Friendly robot icon (см. `logos/logo_friendly_robot_icon_*`) — дружелюбный, ИИ-ассистент персонификация
- **Platform mark:** MAX icon в нашем стиле (см. `logos/MAX_*`) — единственная поддерживаемая платформа (single-MAX с 04.05.2026)
- **Typography:** см. tokens/light-theme.md и tokens/dark-theme.md (typography секция)
- **Color philosophy:** теплая палитра, warm neutrals, accent через robot icon

## Russian language compliance (168-ФЗ)

С 01.03.2026 user-facing аббревиатуры **только кириллица**:

| ❌ Запрещено | ✅ Обязательно |
|---|---|
| AI | ИИ |
| SMM | СММ |
| FAQ | ЧЗВ / Частые вопросы |
| PRO | ПРО |
| STANDARD | СТАНДАРТ |

Бренд — «**СММ АЙБРО**» (заглавными). MAX — латиницей всегда (торговая марка VK).

Подробнее: `compliance/168-fz.md`.

## Single-MAX iron rules

С 04.05.2026 Aibro СММ — single-platform продукт (только MAX). **Не упоминать в дизайне:**

- ❌ Telegram / TG / Телеграм
- ❌ ВКонтакте / VK / ВК
- ❌ Одноклассники / OK / ОК
- ❌ Дзен / Yandex Zen
- ❌ Automator / Программа Automator (закрыта)

Подробнее: `compliance/single-max.md`.

## Использование с Claude Design

При создании проекта в Claude Design (https://claude.ai/design) подключи этот репо:

```
Link code on GitHub:  https://github.com/NeuralLera/aibro-brand-assets
```

Claude Design автоматически подтянет logos / tokens / patterns / compliance — будет использовать их при генерации концептов.

## Использование Rumira (бренд-дизайнер)

**Rumira** — бренд-дизайнер Aibro СММ. Существует в двух инкарнациях:

- **Claude-Rumira** (Opus 4.7) — `Aibro_SMM/design/.claude/agents/rumira.md`
- **OpenCode-Rumira** (gpt-5.2 acting) — `Aibro_SMM/design/.opencode/agents/rumira.md`

Обе инкарнации используют этот репо как **SSoT для design tokens / logos / brand compliance**. При правках бренд-токенов / айдентики — коммит идёт **сюда** (в `aibro-brand-assets`), не в `Aibro_SMM`.

При правках дизайн-процесса (workflow / claude-design-workflow / sonya-brand-assets / conversion-copywriting) — это остаётся в `Aibro_SMM/design/knowledge/` (это процесс, не айдентика).

## Sister project

- **SmashOne brand assets:** https://github.com/NeuralLera/smashone-brand-assets — старший проект-эталон с 6-platform support и dual-jurisdiction (US Corp + EU Polska). Aibro brand-assets создан по тому же паттерну.

## License

MIT — см. `LICENSE`. Visual assets (`logos/*.svg`) — © 2026 ИП Мальцев Валерий Валерьевич, all rights reserved (для использования в Aibro СММ продукте и связанных материалах).

---

*Last updated: 2026-05-14 | Maintained by: Rumira (Claude Opus 4.7) + OpenCode-Rumira (gpt-5.2 acting)*
