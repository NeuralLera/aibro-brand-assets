# Dark Theme Tokens — Aibro (spec)

> Используй при создании Aibro Dark Design System в Claude Design. Это не код, а спецификация токенов.

## Философия

- Near-black вместо чистого черного.
- Поверхности - 4 слоя для глубины.
- Текст - один белый с opacity.

## Surfaces (4-tier)

| Tier | Token | Value | Usage |
|---|---|---|---|
| Layer 0 | `surface.base` | `#0a0a0a` | фон страницы |
| Layer 1 | `surface.raised` | `#11151b` | основные панели |
| Layer 2 | `surface.elevated` | `#151b22` | карточки/ховеры |
| Layer 3 | `surface.overlay` | `#1a212a` | модалки/поповеры |

## Text (white opacity hierarchy)

| Level | Token | Value |
|---|---|---|
| Strong | `text.strong` | `rgba(255,255,255,0.96)` |
| Primary | `text.primary` | `rgba(255,255,255,0.88)` |
| Secondary | `text.secondary` | `rgba(255,255,255,0.70)` |
| Tertiary | `text.tertiary` | `rgba(255,255,255,0.54)` |
| Disabled | `text.disabled` | `rgba(255,255,255,0.36)` |

## Brand accent (Aibro)

- `brand.accent`: `#10b981`
- `brand.accentHover`: `#059669`
- `brand.accentSoftBg`: `rgba(16,185,129,0.10)`

## Borders

- `border.subtle`: `rgba(255,255,255,0.08)`
- `border.emphasis`: `rgba(255,255,255,0.14)`

## Radius

8 / 12 / 16 / 24

## Spacing

4 / 8 / 12 / 16 / 24 / 32 / 48 / 64

## Glass (selective)

```css
background: rgba(255,255,255,0.04);
backdrop-filter: blur(16px) saturate(180%);
border: 1px solid rgba(255,255,255,0.08);
box-shadow: 0 8px 32px rgba(0,0,0,0.40);
```

_Last updated: 2026-05-13. Maintained by: rumira._
