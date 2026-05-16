# Motion System — Aibro СММ

> **Canonical motion patterns** для Aibro СММ. Restraint > playfulness. 140-220ms durations. NO bounce / elastic / parallax.

## Принципы

1. **Restraint.** Aibro premium tone — движение умеренное, не отвлекает.
2. **Purposeful.** Каждая анимация решает UX задачу (feedback, hierarchy, continuity).
3. **Fast.** 140-220ms для большинства transitions. Только page-transitions = 220ms.
4. **Easing.** `cubic-bezier(0.4, 0, 0.2, 1)` (Material Standard) — universal default.
5. **`prefers-reduced-motion` обязательно** — заменяет всё на 0ms transitions.

## Duration scale

```css
--duration-instant: 90ms;       /* press states, immediate feedback */
--duration-fast: 140ms;         /* hover transitions, small UI changes */
--duration-medium: 180ms;       /* dropdowns, tooltips */
--duration-normal: 220ms;       /* page transitions, modals appear */
--duration-slow: 320ms;         /* large surface changes (rare) */
--duration-deliberate: 500ms;   /* onboarding tooltips, only deliberate UX */
```

**Banned:**
- Анимации >1 секунды (кроме splash / onboarding с явным rationale).
- Бесконечные loops (loaders OK с `prefers-reduced-motion` fallback).

## Easing functions

```css
/* Universal default — Material Standard */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);

/* Acceleration (uses speed-up curve) — для exit/disappear */
--ease-accelerate: cubic-bezier(0.4, 0, 1, 1);

/* Deceleration — для enter/appear */
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1);

/* Smooth out — для long durations */
--ease-out-soft: cubic-bezier(0.16, 1, 0.3, 1);
```

**Banned:**
- `cubic-bezier(0.5, 1.5, 0.5, 1)` и подобные с overshoot — bounce.
- `cubic-bezier(0.75, -0.5, 0.25, 1.5)` — elastic.
- Spring physics (framer-motion `type: 'spring'` без `stiffness` cap) — risk of bounce.

## Hover / Press / Focus states

```css
/* Buttons */
.button {
  transition: 
    background-color var(--duration-fast) var(--ease-default),
    transform var(--duration-instant) var(--ease-default),
    box-shadow var(--duration-fast) var(--ease-default);
}

.button:hover {
  background-color: var(--accent-hover);
}

.button:active {
  transform: translateY(1px) scale(0.99);  /* subtle press */
}

.button:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
  box-shadow: var(--shadow-focus);
}

/* Cards */
.card-hover {
  transition: 
    transform var(--duration-medium) var(--ease-default),
    box-shadow var(--duration-medium) var(--ease-default);
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

## Page transitions

### Fade + slight slide (canonical)

```css
.page-enter {
  opacity: 0;
  transform: translateY(8px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: 
    opacity var(--duration-normal) var(--ease-default),
    transform var(--duration-normal) var(--ease-default);
}

.page-exit {
  opacity: 1;
  transform: translateY(0);
}

.page-exit-active {
  opacity: 0;
  transform: translateY(-8px);
  transition: 
    opacity var(--duration-fast) var(--ease-accelerate),
    transform var(--duration-fast) var(--ease-accelerate);
}
```

**Slide distance:** **8-16px maximum.** Больше = page jumping → плохая UX.

## Loading states

### Skeleton screens

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-subtle) 0%,
    var(--bg-elevated) 50%,
    var(--bg-subtle) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-pulse 1.6s ease-in-out infinite;
}

@keyframes skeleton-pulse {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

**Rules:**
- Skeleton shapes должны matches финальный контент (same size + radius).
- Минимум 200ms показа (иначе flicker если контент быстрый — fallback на `min-duration`).
- `prefers-reduced-motion: reduce` → static gray background (без shimmer).

### Spinners / progress

- **Spinners — только для actions >2 сек.** До 1 сек — никакого indicator (это hectic).
- **Progress bars** — для actions с known duration (upload / sync / batch operation).

```css
.spinner {
  border: 2px solid transparent;
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

## Micro-interactions

### Button press feedback

```css
button {
  transition: transform var(--duration-instant) var(--ease-default);
}

button:active {
  transform: scale(0.97);  /* subtle, не больше 0.95 */
}
```

### Form validation

```css
.input-error {
  animation: shake-subtle 220ms var(--ease-default);
  border-color: var(--error);
}

@keyframes shake-subtle {
  0%, 100% { transform: translateX(0); }
  25%, 75% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
}
```

**Shake — только 3px amplitude.** Больше = comedic, неприемлемо для премиум.

### Toast appearance

```css
.toast-enter {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.toast-enter-active {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: 
    opacity var(--duration-medium) var(--ease-out-soft),
    transform var(--duration-medium) var(--ease-out-soft);
}
```

Toast auto-dismiss: **5 sec для info, 8 sec для success, never для error** (user dismisses).

## Scroll-triggered animations

**Использовать sparingly.** Только для:
- Hero animations (1 раз на странице).
- Features carousel reveal (если есть).

**Banned:**
- Heavy parallax (background move ≠ scroll position).
- Element rotation на scroll.
- "Pinning" sections (full-screen takeover).

### Fade-in on scroll (canonical)

```css
.fade-on-scroll {
  opacity: 0;
  transform: translateY(16px);
  transition: 
    opacity var(--duration-deliberate) var(--ease-out-soft),
    transform var(--duration-deliberate) var(--ease-out-soft);
}

.fade-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**JS trigger via IntersectionObserver** (threshold 0.1, rootMargin -50px).

## Theme switching transitions

```css
:root {
  transition: 
    background-color var(--duration-normal) var(--ease-default),
    color var(--duration-normal) var(--ease-default);
}

* {
  transition: 
    background-color var(--duration-normal) var(--ease-default),
    border-color var(--duration-normal) var(--ease-default),
    color var(--duration-normal) var(--ease-default);
}
```

**Caveat:** не применяй transition на `transform` / `opacity` для всех элементов — это сломает interactions. Только для color tokens.

## `prefers-reduced-motion` (ОБЯЗАТЕЛЬНО)

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Skeleton — static instead of shimmer */
  .skeleton {
    background: var(--bg-subtle);
    animation: none;
  }
}
```

## Performance budget

- **60fps target.** Все animations должны держать 60fps на mid-range mobile (iPhone X equivalent).
- **GPU-accelerated properties only:** `transform`, `opacity`, `filter`. НЕ `top` / `left` / `width` / `height`.
- **`will-change`** — только на pre-animation, удаляй после (perpetual `will-change` = memory leak).

## Применение в PROMPT.md (Claude Design)

```markdown
## Motion

All transitions:
- Duration: 140-220ms (hover 140ms / dropdowns 180ms / modals 220ms).
- Easing: cubic-bezier(0.4, 0, 0.2, 1) default.
- NO bounce / elastic / parallax / page-pinning.
- prefers-reduced-motion: reduce → all animations 0ms.

Hover:
- Cards: translateY(-2px) + shadow expand, 180ms.
- Buttons: bg-color shift, 140ms.

Page transitions:
- Fade + slide 8-16px, 220ms.

Loading:
- Skeleton shimmer 1.6s loop.
- Spinner только для >2 sec actions.
- prefers-reduced-motion: skeleton static.

Toast:
- Auto-dismiss 5s info / 8s success / never error.
- Enter: opacity + translateY(-20px) → 0 + scale 0.95 → 1, 180ms.
```

## Cross-references

- `design/knowledge/light-theme-tokens.md` — shadows используются для elevation transitions
- `design/STYLE_CANON.md` — application в components
- SmashOne sister: `C:\MyProjects\SMM-Hub\design\knowledge\motion-system.md` (read-only, у них durations те же, easing аналогично).

## Version

v1.0 — 2026-05-15 (Phase A. Conservative motion канон. RU SMB prefers premium-minimal vs flashy.)
