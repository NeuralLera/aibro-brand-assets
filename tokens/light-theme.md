# Light Theme Tokens — Aibro (spec)

> Используй при создании Aibro Light Design System в Claude Design. Это не код, а спецификация токенов.

## Философия

- Light-тема должна быть мягкой: near-white вместо чистого белого.
- Текст - off-black (не #000).
- Границы минимальные; depth через тени.

## Surfaces (4-tier)

| Tier | Token | Value | Usage |
|---|---|---|---|
| Layer 0 | `surface.base` | `#fafafa` | фон страницы |
| Layer 1 | `surface.raised` | `#f4f4f5` | основные панели |
| Layer 2 | `surface.elevated` | `#ffffff` | карточки/ховеры |
| Layer 3 | `surface.overlay` | `#ffffff` | модалки/поповеры (с shadow) |

## Text (alpha-black hierarchy)

| Level | Token | Value |
|---|---|---|
| Strong | `text.strong` | `rgba(10,10,10,0.92)` |
| Primary | `text.primary` | `rgba(10,10,10,0.80)` |
| Secondary | `text.secondary` | `rgba(10,10,10,0.60)` |
| Tertiary | `text.tertiary` | `rgba(10,10,10,0.46)` |
| Disabled | `text.disabled` | `rgba(10,10,10,0.30)` |

## Brand accent (Aibro)

Primary accent в UI: emerald (как на текущем сайте).

- `brand.accent`: `#10b981`
- `brand.accentHover`: `#059669`
- `brand.accentSoftBg`: `rgba(16,185,129,0.10)`

Secondary accent (ИИ): indigo (только как badge, не как основной CTA).

## Borders

- `border.subtle`: `rgba(10,10,10,0.06)`
- `border.emphasis`: `rgba(10,10,10,0.12)`

## Radius

8 / 12 / 16 / 24

## Spacing

4 / 8 / 12 / 16 / 24 / 32 / 48 / 64

## Shadows

```css
shadow.sm: 0 1px 2px rgba(0,0,0,0.04);
shadow.md: 0 4px 10px rgba(0,0,0,0.06);
shadow.lg: 0 14px 30px rgba(0,0,0,0.10);
```

## Reduced motion

Light/dark одинаково: respect `prefers-reduced-motion`.

_Last updated: 2026-05-13. Maintained by: rumira._
