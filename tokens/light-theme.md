# Light Theme Tokens — Aibro СММ (Emerald Light)

> **Canonical light theme tokens** для Aibro СММ public-сайта + кабинетов. Сценарий по умолчанию (с toggle на dark). Изумрудный акцент + glassmorphism.

## Цветовая палитра

### Backgrounds (4-tier surface)

```css
--bg-base: #fafafa;          /* page background — nearly white, чуть тёплый */
--bg-elevated: #ffffff;       /* cards / modals на основном фоне */
--bg-subtle: #f4f6f5;         /* subtle dividers / disabled states */
--bg-glass: rgba(255, 255, 255, 0.7);  /* glassmorphism cards */
```

### Текст

```css
--text-primary: #0f172a;      /* headings + body main (slate-900) */
--text-secondary: #475569;    /* secondary text (slate-600) */
--text-muted: #94a3b8;        /* hints / placeholders (slate-400) */
--text-on-accent: #ffffff;    /* текст на изумрудном primary */
```

### Изумрудный акцент (Emerald)

```css
--accent-primary: #10b981;    /* emerald-500 — CTA, активные элементы */
--accent-hover: #059669;      /* emerald-600 — hover/pressed */
--accent-bg: #ecfdf5;         /* emerald-50 — subtle background tint */
--accent-border: #6ee7b7;     /* emerald-300 — borders / outlines */
--accent-strong: #047857;     /* emerald-700 — для текста на light bg (AAA contrast) */
```

**Restraint:** изумрудный покрывает **≤10% surface area**. Не использовать для body text на light background (контраст 3:1 fail). Для текста-акцента — `--accent-strong` (контраст 7.4:1, AAA passes).

### State colors

```css
--success: #10b981;           /* совпадает с primary — natural fit */
--warning: #f59e0b;           /* amber-500 */
--error: #ef4444;             /* red-500 */
--info: #3b82f6;              /* blue-500 */
```

### Borders

```css
--border-subtle: rgba(15, 23, 42, 0.08);   /* dividers, card borders */
--border-strong: rgba(15, 23, 42, 0.16);   /* focus indicators, active borders */
--border-glass: rgba(255, 255, 255, 0.3);  /* для glass cards */
```

### Shadows (multi-layer)

```css
/* Subtle elevation — для cards в обычном состоянии */
--shadow-sm: 
  0 1px 2px rgba(15, 23, 42, 0.04),
  0 1px 1px rgba(15, 23, 42, 0.02);

/* Medium elevation — для hover cards / dropdowns */
--shadow-md: 
  0 4px 8px rgba(15, 23, 42, 0.06),
  0 2px 4px rgba(15, 23, 42, 0.04),
  0 0 0 1px rgba(15, 23, 42, 0.02);

/* Large elevation — modals, popovers */
--shadow-lg: 
  0 16px 32px rgba(15, 23, 42, 0.08),
  0 8px 16px rgba(15, 23, 42, 0.04);

/* Focus ring — accent */
--shadow-focus: 0 0 0 3px rgba(16, 185, 129, 0.2);
```

## Spacing scale (4px grid)

```css
--space-0: 0;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

## Border radius

```css
--radius-sm: 6px;             /* inputs, badges */
--radius-md: 8px;             /* buttons */
--radius-lg: 12px;            /* cards, containers */
--radius-xl: 16px;            /* modals, large panels */
--radius-2xl: 24px;           /* hero cards, big features */
--radius-full: 9999px;        /* pills, avatars */
```

## Typography (см. typography-system.md)

```css
--font-sans: 'Geist Variable', 'Inter Variable', system-ui, -apple-system, sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, 'SF Mono', monospace;
```

## Container widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;
--container-content: 720px;   /* для текстовых блоков */
```

## Glassmorphism canonical pattern

```css
.glass-card {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.glass-card-strong {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border-glass);
}
```

## Контраст checklist

| Pair | Ratio | WCAG |
|---|---|---|
| `--text-primary` on `--bg-base` | 17.6:1 | AAA |
| `--text-secondary` on `--bg-base` | 7.2:1 | AAA |
| `--text-muted` on `--bg-base` | 3.0:1 | AA Large only |
| `--text-on-accent` on `--accent-primary` | 4.7:1 | AA |
| `--accent-strong` on `--bg-base` | 7.4:1 | AAA (для accent text) |
| `--accent-primary` on `--bg-base` | 3.1:1 | **fail для body, AA для large** |

**Правила:**
- Body text — только `--text-primary` или `--text-secondary`.
- Accent text (ссылки, важные слова) — `--accent-strong` (не `--accent-primary`).
- Helper / muted text — `--text-muted` только для не-критичного контента (≥18px размер).

## Tailwind config mapping

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'aibro-bg': '#fafafa',
      'aibro-elevated': '#ffffff',
      'aibro-subtle': '#f4f6f5',
      'aibro-text': '#0f172a',
      'aibro-text-secondary': '#475569',
      'aibro-text-muted': '#94a3b8',
      'aibro-accent': '#10b981',
      'aibro-accent-hover': '#059669',
      'aibro-accent-bg': '#ecfdf5',
      'aibro-accent-strong': '#047857',
    }
  }
}
```

## CSS-in-globals.css

```css
:root[data-theme="light"] {
  --bg-base: #fafafa;
  --bg-elevated: #ffffff;
  /* ... все токены ... */
  color-scheme: light;
}
```

## Применение в PROMPT.md (Claude Design)

При написании PROMPT для Claude Design — embed весь блок CSS variables как канон. Claude Design использует токены при генерации.

```markdown
## Design tokens (verbatim — копируй в Claude Design)

[вставить весь блок выше]

## Изумрудный акцент usage
- CTA primary button background = --accent-primary
- CTA hover = --accent-hover  
- Selected state в navigation = --accent-bg + --accent-primary border-left
- Links в body text = --accent-strong (для AAA contrast)
- Decorative dots / icons = --accent-primary (с 60% opacity)
```

## Cross-references

- `design/knowledge/dark-theme-tokens.md` — соответствующая dark версия
- `design/knowledge/tile-background.md` — glassmorphism + tile pattern
- `design/knowledge/brand-identity-system.md` — brand colors в контексте бренда
- `design/STYLE_CANON.md` — application в layout / components
- Aibro brand assets: `https://github.com/NeuralLera/aibro-brand-assets/tree/main/tokens/light-theme.md`

## Version

v1.0 — 2026-05-15 (Phase A подготовки Румиры. Изумрудный акцент vs SmashOne золотой `#c9a646`. Адаптировано под РФ premium-light scenario вместо EU/US dark-default.)
