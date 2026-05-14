# Motion System — Aibro (spec)

Философия: motion должен помогать ориентироваться и ощущаться "дорого", но не быть навязчивым.

## Базовая палитра

```css
:root {
  --ease-ui: cubic-bezier(0.2, 0, 0.38, 0.9);
  --ease-open: cubic-bezier(0, 0, 0.38, 0.9);
  --ease-close: cubic-bezier(0.2, 0, 1, 0.9);
  --dur-press: 110ms;
  --dur-hover: 160ms;
  --dur-card: 200ms;
  --dur-panel: 260ms;
}
```

## Рекомендации

- Hover: 140-180ms, Press: 90-120ms.
- Карточки: легкий lift (translateY -2..-3px) только на desktop pointers.
- Tooltips: delay 150-250ms.

## Reduced motion (mandatory)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

_Last updated: 2026-05-13. Maintained by: rumira._
