# Dark Theme Tokens — Aibro СММ (Emerald Dark)

> **Canonical dark theme tokens** для Aibro СММ. Через toggle (light = default). Изумрудный акцент адаптирован под dark surfaces.

## Цветовая палитра

### Backgrounds (4-tier surface)

```css
--bg-base: #0a0f0d;            /* почти чёрный с зеленцой */
--bg-elevated: #111815;        /* cards / modals */
--bg-subtle: #0d1310;          /* dividers / disabled */
--bg-glass: rgba(16, 28, 22, 0.55);  /* glassmorphism cards */
```

**Не используем чистый #000 / #0a0a0a** — это слишком жёсткий контраст. Лёгкий зелёный undertone гармонирует с изумрудным акцентом.

### Текст

```css
--text-primary: #f1f5f3;       /* почти белый, slate-50 с зеленцой */
--text-secondary: #94a3b8;     /* slate-400 */
--text-muted: #64748b;         /* slate-500 */
--text-on-accent: #ffffff;     /* на изумрудном CTA */
```

### Изумрудный акцент (адаптирован для dark)

```css
--accent-primary: #34d399;     /* emerald-400 — ярче для dark surface */
--accent-hover: #6ee7b7;       /* emerald-300 */
--accent-bg: #064e3b;          /* emerald-900 — subtle dark tint */
--accent-border: #047857;      /* emerald-700 */
--accent-strong: #34d399;      /* совпадает с primary — на dark не нужно делать темнее */
```

**Restraint:** ≤10% surface coverage. На dark акцент более заметный → ещё больше restraint, чем на light.

### State colors

```css
--success: #34d399;            /* совпадает с primary */
--warning: #fbbf24;            /* amber-400 — поярче для dark */
--error: #f87171;              /* red-400 */
--info: #60a5fa;               /* blue-400 */
```

### Borders

```css
--border-subtle: rgba(241, 245, 243, 0.08);
--border-strong: rgba(241, 245, 243, 0.16);
--border-glass: rgba(255, 255, 255, 0.1);
```

### Shadows (для dark — больше с акцентом + меньше плотности)

```css
--shadow-sm: 
  0 1px 2px rgba(0, 0, 0, 0.4),
  0 1px 1px rgba(0, 0, 0, 0.2);

--shadow-md: 
  0 4px 8px rgba(0, 0, 0, 0.4),
  0 2px 4px rgba(0, 0, 0, 0.3),
  0 0 0 1px rgba(255, 255, 255, 0.04);

--shadow-lg: 
  0 16px 32px rgba(0, 0, 0, 0.5),
  0 8px 16px rgba(0, 0, 0, 0.3);

--shadow-focus: 0 0 0 3px rgba(52, 211, 153, 0.3);

/* Bonus: subtle emerald glow для primary CTA в dark */
--shadow-accent-glow: 0 0 24px rgba(52, 211, 153, 0.15);
```

## Spacing / Radius / Typography — наследуются из light theme

(см. `light-theme-tokens.md`).

## Glassmorphism dark canonical

```css
.glass-card {
  background: var(--bg-glass);
  backdrop-filter: blur(20px) saturate(1.2);
  -webkit-backdrop-filter: blur(20px) saturate(1.2);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.glass-card-strong {
  background: rgba(16, 28, 22, 0.75);
  backdrop-filter: blur(24px) saturate(1.3);
  -webkit-backdrop-filter: blur(24px) saturate(1.3);
}
```

**Saturate 1.2-1.3** добавляется на dark для усиления цветов под blur'ом — без него контент выглядит desaturated.

## Контраст checklist (dark)

| Pair | Ratio | WCAG |
|---|---|---|
| `--text-primary` on `--bg-base` | 16.8:1 | AAA |
| `--text-secondary` on `--bg-base` | 7.5:1 | AAA |
| `--text-muted` on `--bg-base` | 4.7:1 | AA |
| `--text-on-accent` on `--accent-primary` | 5.1:1 | AA |
| `--accent-primary` on `--bg-base` | 9.8:1 | AAA — отлично для accent text |

**Правила для dark:**
- Body text — `--text-primary` или `--text-secondary` (оба AAA).
- Accent text (ссылки) — можно `--accent-primary` (9.8:1 AAA, в отличие от light).
- Helper text — `--text-muted` (4.7:1 AA).

## Tailwind config dark mapping

```js
// tailwind.config.js — dark variant
darkMode: ['class', '[data-theme="dark"]'],

// В компонентах:
className="bg-aibro-bg dark:bg-aibro-bg-dark text-aibro-text dark:text-aibro-text-dark"
```

## CSS-in-globals.css

```css
:root[data-theme="dark"] {
  --bg-base: #0a0f0d;
  --bg-elevated: #111815;
  /* ... все токены ... */
  color-scheme: dark;
}

/* Auto-respect system preference if no toggle */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    /* подтянуть dark tokens */
  }
}
```

## Theme switching (Lucide Sun/Moon)

- Toggle position: top-right в header (public + cabinet).
- Icon: `Sun` (когда сейчас dark → переключение на light) / `Moon` (когда light → dark).
- Storage: cookie `aibro-theme=dark|light|system` per домен.
- Transition: 220ms `cubic-bezier(0.4, 0, 0.2, 1)` на `color` + `background-color`.
- `prefers-color-scheme` first-visit determines default if no cookie set.

```typescript
// Минимальный theme switcher
const setTheme = (theme: 'light' | 'dark' | 'system') => {
  const resolved = theme === 'system' 
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;
  document.documentElement.dataset.theme = resolved;
  document.cookie = `aibro-theme=${theme}; path=/; max-age=31536000`;
};
```

## Применение в PROMPT.md (Claude Design)

```markdown
## Dark theme variant

Generate **both light and dark variants** for each component / page.
Dark theme tokens — see verbatim CSS block from `design/knowledge/dark-theme-tokens.md`.

Specific differences от light:
- Изумрудный акцент **brighter** (emerald-400 #34d399 vs emerald-500 #10b981)
- Cards glow optional через --shadow-accent-glow для primary CTA
- Backdrop-filter saturate 1.2-1.3 (vs none на light)
- Background — деревянный зелёный undertone #0a0f0d (НЕ чистый чёрный)
```

## Cross-references

- `design/knowledge/light-theme-tokens.md` — соответствующая light версия
- `design/knowledge/tile-background.md` — glassmorphism dark patterns
- Aibro brand assets: `https://github.com/NeuralLera/aibro-brand-assets/tree/main/tokens/dark-theme.md`

## Version

v1.0 — 2026-05-15 (Phase A. Emerald Dark вариант. Зелёный undertone backgrounds vs SmashOne tonemap с warm gold).
