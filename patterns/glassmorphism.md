# Tile Background — паттерн фонового тайла (СММ АЙБРО)

> **Адаптировано из Mira (SmashOne) `design/knowledge/tile-background.md` → RU + emerald brand.**
> **Iron rule:** subtle (5% opacity, soft-light blend). НЕ "ковёр" / НЕ обоев / НЕ visual noise.

## Файлы

- **Dark theme:** `design/logos/aibro-tile-dark/empty-tile-dark.svg`
- **Light theme:** `design/logos/aibro-tile-light/empty-tile-light.svg`

Оба 64×64 px SVG (vector — масштабируется без потерь). Tile дизайн со ВСЕМИ нужными слоями:
- base solid fill
- linear gradient (base-to-darker)
- pattern stripes (тончайшая текстура ~1% opacity)
- radial brand-color glow в углу (emerald — наш бренд)
- top edge highlight
- inner glow + vignette (только dark)
- 14px rounded corners + 1.2px border

## Когда использовать

✅ **Background hero-секций** (Home hero, лендинг premium блоки)
✅ **Background больших карточек** (testimonial cards, pricing card)
✅ **Background модальных окон** (по решению — premium feel)
✅ **Авторизация / signup** (signin/signup pages full-screen)

❌ **Не использовать на:**
- Маленьких UI-элементах (buttons, badges)
- Длинных текстовых блоках (ухудшает читабельность)
- Формах кабинета (formы должны быть на solid `--cab-bg-surface`)
- Таблицах / data-grid (отвлекает от данных)

## Как использовать в CSS / Tailwind

### CSS вариант 1 — repeating background (full-page hero):
```css
.hero-section {
  background-image: url('/assets/tile-dark.svg');
  background-repeat: repeat;
  background-size: 64px 64px;
  background-color: #0a0a0a; /* fallback */
}

/* Dark theme */
[data-theme="dark"] .hero-section,
.dark .hero-section {
  background-image: url('/assets/tile-dark.svg');
}

/* Light theme */
[data-theme="light"] .hero-section,
.light .hero-section {
  background-image: url('/assets/tile-light.svg');
}
```

### CSS вариант 2 — overlay через ::before (с blend-mode):
```css
.premium-card {
  position: relative;
  background: var(--cab-bg-surface); /* основной фон */
}
.premium-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/assets/tile-dark.svg');
  background-repeat: repeat;
  background-size: 64px 64px;
  opacity: 0.05; /* iron rule — 5% subtle */
  mix-blend-mode: soft-light;
  pointer-events: none;
}
```

### React / TSX inline:
```tsx
<section
  style={{
    backgroundImage: `url(/assets/tile-${theme}.svg)`,
    backgroundRepeat: 'repeat',
    backgroundSize: '64px 64px',
  }}
  className="..."
>
  ...
</section>
```

## Iron rules

1. **5% opacity** через soft-light blend — НЕ ярче. Tile должен быть "почти не виден", добавлять премиум-фактуру без отвлечения.
2. **На mobile (≤768px):** scale 150-200% (т.е. `background-size: 96-128px`) или mesh gradient fallback — repeating tile на маленьких экранах выглядит "ковровым" pattern.
3. **`prefers-reduced-motion`** — никакой анимации фона (parallax / scrolling tile / etc).
4. **Контраст соблюдён** — текст поверх tile должен оставаться AAA (7:1) для headings и AA (4.5:1) для body. Tile не понижает контраст потому что 5%.
5. **НЕ комбинируй** tile-dark с light theme и наоборот. Theme-aware swap обязателен.

## Brand color (emerald)

- **Dark accent:** `#10B981` (Emerald-500) — 10% radial glow в углу tile-dark
- **Light accent:** `#059669` (Emerald-600) — 8% radial glow в углу tile-light

(SmashOne использует gold `#c9a646` — мы заменили на emerald. Структура слоёв та же.)

## Где разместить SVG для прода

После одобрения дизайна:
1. Скопировать SVG в `web/public/assets/tile-dark.svg` + `web/public/assets/tile-light.svg`
2. Или вставить inline в Hero компонент (для perf — 1 HTTP request меньше)
3. Опционально — конвертировать в base64 data-URL и встроить в CSS (`background-image: url(data:image/svg+xml;base64,...)`)

## Размер файла

- SVG ~1.5 KB (compressed gzip ~700 байт)
- Vector → масштаб без потерь
- Decode time на CPU minimal (1-2ms)
- Альтернатива WebP/AVIF не нужна — SVG для tile оптимальнее

## Reference

- SmashOne (Mira): `C:\MyProjects\SMM-Hub\design\logos\smashone-tile-dark\empty-tile-dark.svg` + `smashone-tile-light/empty-tile-light.svg`
- Research: `design/research/done/RES-DESIGN-001_2026-web-design-trends/FINDINGS.md` — tile background section (Iron rule 10 — subtle 5% soft-light)
