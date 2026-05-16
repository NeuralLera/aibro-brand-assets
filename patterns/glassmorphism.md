# Tile Background — Aibro СММ Glassmorphism

> **Canonical glassmorphism + tile-background pattern** для Aibro СММ. Subtle, premium, не отвлекает от контента.

## Концепция

Aibro использует **glassmorphism как визуальную сигнатуру**:
1. **Tile-background pattern** — subtle паттерн на основном фоне (4-5% opacity).
2. **Glass cards** — backdrop-filter blur + полу-прозрачный фон.
3. **Hero layered surfaces** — 3-4 слоя с разными blur values.

**Restraint:** glass effect используется на ~20-30% поверхности страницы. Не везде — иначе теряется premium feel.

## Tile-background pattern

### Light theme

```css
.tile-bg-light {
  background-color: #fafafa;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.02) 0%, transparent 50%);
  background-size: 800px 800px;
  background-attachment: fixed;
}

/* Опционально: SVG tile pattern */
.tile-bg-light-svg {
  background-color: #fafafa;
  background-image: url('/tiles/aibro-light.svg');
  background-repeat: repeat;
  background-size: 240px 240px;
  background-blend-mode: multiply;  /* для smoothing */
  opacity: 1; /* паттерн уже at 4% opacity внутри SVG */
}
```

**SVG content (4% opacity, изумрудный hint):**
```svg
<svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="tile" patternUnits="userSpaceOnUse" width="60" height="60">
      <circle cx="30" cy="30" r="1" fill="rgba(16,185,129,0.04)"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#tile)"/>
</svg>
```

### Dark theme

```css
.tile-bg-dark {
  background-color: #0a0f0d;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(52, 211, 153, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(52, 211, 153, 0.03) 0%, transparent 50%);
  background-size: 800px 800px;
  background-attachment: fixed;
}

.tile-bg-dark-svg {
  background-color: #0a0f0d;
  background-image: url('/tiles/aibro-dark.svg');
  background-repeat: repeat;
  background-size: 240px 240px;
  background-blend-mode: soft-light;
  opacity: 1;
}
```

**Dark SVG** — 5% opacity (slightly stronger для dark, иначе invisible).

### Mobile fallback

```css
@media (max-width: 768px) {
  .tile-bg-light,
  .tile-bg-dark {
    background-attachment: scroll;  /* fixed не работает на iOS */
    background-size: 400px 400px;   /* smaller для performance */
  }
}
```

## Glassmorphism cards

### Light theme

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  box-shadow: 
    0 1px 2px rgba(15, 23, 42, 0.04),
    0 1px 1px rgba(15, 23, 42, 0.02);
}

.glass-card-strong {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}
```

### Dark theme

```css
.glass-card-dark {
  background: rgba(16, 28, 22, 0.55);
  backdrop-filter: blur(20px) saturate(1.2);
  -webkit-backdrop-filter: blur(20px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.3);
}

.glass-card-dark-strong {
  background: rgba(16, 28, 22, 0.75);
  backdrop-filter: blur(24px) saturate(1.3);
  -webkit-backdrop-filter: blur(24px) saturate(1.3);
}
```

**Saturate 1.2-1.3 для dark** — компенсирует desaturation под blur, иначе контент выглядит «выцветшим».

## Layered hero surfaces

Hero на public page — 3-4 слоя для глубины:

```html
<section class="hero">
  <!-- Layer 1: tile pattern background (4% opacity) -->
  <div class="hero-tile-bg"></div>
  
  <!-- Layer 2: emerald radial gradient (8% opacity) -->
  <div class="hero-gradient"></div>
  
  <!-- Layer 3: subtle noise texture (1% opacity, optional) -->
  <div class="hero-noise"></div>
  
  <!-- Layer 4: content with glass card -->
  <div class="hero-content glass-card-strong">
    <!-- ... -->
  </div>
</section>
```

### CSS

```css
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-tile-bg {
  position: absolute;
  inset: 0;
  background-image: url('/tiles/aibro-light.svg');
  background-repeat: repeat;
  background-size: 240px 240px;
  opacity: 0.4;  /* tile + radial gradient blend */
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 70% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 70%, rgba(16, 185, 129, 0.08) 0%, transparent 50%);
  z-index: 1;
}

.hero-noise {
  position: absolute;
  inset: 0;
  background-image: url('/tiles/noise.svg');  /* SVG turbulence filter */
  opacity: 0.02;
  mix-blend-mode: overlay;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
}
```

## Performance considerations

### Backdrop-filter — GPU-heavy

- **На mobile** — `backdrop-filter` может tank fps. Использовать selectively (только key surfaces — hero card, modal).
- **Fallback** для unsupported browsers:

```css
@supports not (backdrop-filter: blur(20px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.95);  /* solid fallback */
  }
}
```

### `will-change` discipline

- НЕ ставь `will-change: backdrop-filter` permanently — это memory leak.
- Только для pre-animation (hover, modal open), удаляй после.

## Visual examples (для PROMPT.md)

### Pattern 1 — Card list (dashboard)

```
┌─────────────────────────────────────┐
│  [Tile-bg pattern subtle]            │
│                                       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐│
│  │ Glass   │ │ Glass   │ │ Glass   ││  ← 3 KPI cards
│  │ card 1  │ │ card 2  │ │ card 3  ││
│  └─────────┘ └─────────┘ └─────────┘│
│                                       │
│  ┌───────────────────────────────────┐│
│  │ Regular card (recent activity)    ││  ← Solid card (более concrete)
│  └───────────────────────────────────┘│
└─────────────────────────────────────┘
```

### Pattern 2 — Hero (public)

```
┌─────────────────────────────────────┐
│  [Tile + emerald radial gradient]   │
│                                       │
│  Заголовок                            │
│  Sub-headline                         │
│  [Glass card with phone mockup] →     │
│                                       │
│  [Primary CTA button]                 │
│                                       │
└─────────────────────────────────────┘
```

### Pattern 3 — Modal

```
┌─────────────────────────────────────┐
│  Page content (blurred behind)      │
│                                       │
│       ┌───────────────────┐          │
│       │ Glass-strong card │          │
│       │                   │          │
│       │ Modal content     │          │
│       │                   │          │
│       └───────────────────┘          │
│                                       │
└─────────────────────────────────────┘
```

Modal backdrop:
```css
.modal-backdrop {
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
```

## Применение в PROMPT.md (Claude Design)

```markdown
## Glassmorphism canonical

Layer 1 — Tile pattern:
- Light: SVG tile 240×240px, 4% opacity emerald dots
- Dark: SVG tile 240×240px, 5% opacity soft-light blend
- Background-attachment: fixed (desktop), scroll (mobile <768px)

Layer 2 — Emerald radial gradient (hero only):
- rgba(16, 185, 129, 0.12) at 70%/30% position
- rgba(16, 185, 129, 0.08) at 30%/70% position

Layer 3 — Glass cards:
- Light: rgba(255, 255, 255, 0.7) bg + blur(20px) + 1px border 0.3 opacity
- Dark: rgba(16, 28, 22, 0.55) bg + blur(20px) saturate(1.2) + 1px border 0.1 opacity

Performance:
- Selective использование (key surfaces only)
- Mobile fallback: solid background если @supports not (backdrop-filter)
```

## Cross-references

- `design/knowledge/light-theme-tokens.md` — colors used в gradient
- `design/knowledge/dark-theme-tokens.md` — dark variant
- `design/knowledge/motion-system.md` — transitions on glass cards hover
- `web/src/styles/globals.css` — реализация tokens в CSS
- `aibro-brand-assets/tiles/` — SVG tile patterns repo
- SmashOne sister: `C:\MyProjects\SMM-Hub\design\knowledge\tile-background.md` (read-only — у них warm gold tile, у нас изумрудный)

## Version

v1.0 — 2026-05-15 (Phase A. Изумрудный glassmorphism канон. Light-default + dark-toggle. Layered hero pattern.)
