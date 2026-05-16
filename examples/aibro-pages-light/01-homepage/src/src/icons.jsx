// Inline SVG icon library (24×24, stroke 1.8 currentColor)
// Drawn in design-system style — no external libs (Lucide / Tabler forbidden).

const I = {
  // Stroke style — kebab-case names
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5l5 5 11-11"></path>
    </svg>
  ),
  checkCircle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M8 12.5l2.5 2.5L16 9.5"></path>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"></path>
      <path d="M9 12.5l2 2 4-4"></path>
    </svg>
  ),
  ruble: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 5h6.5a4 4 0 0 1 0 8H8"></path>
      <path d="M8 17V5"></path>
      <path d="M5 9h9"></path>
      <path d="M5 13h9"></path>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 7v5l3 2"></path>
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14"></path>
    </svg>
  ),
  edit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4l4 4-11 11H5v-4z"></path>
      <path d="M14 6l4 4"></path>
    </svg>
  ),
  package: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"></path>
      <path d="M4 7.5L12 12l8-4.5"></path>
      <path d="M12 12v9"></path>
      <path d="M8 5.3l8 4.5"></path>
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5"></rect>
      <path d="M3.5 10h17"></path>
      <path d="M8 3v4M16 3v4"></path>
      <circle cx="12" cy="14.5" r="1.5" fill="currentColor" stroke="none"></circle>
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="9" r="3.5"></circle>
      <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5"></path>
      <path d="M16 5.5a3.5 3.5 0 0 1 0 7"></path>
      <path d="M17.5 14c2.5.5 4 2.3 4 5"></path>
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h16v11H10l-4 4v-4H4z"></path>
      <path d="M8 10h8M8 13h5"></path>
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10v4l2 .5v4l3-.5-.5-3 8 2.5V7.5L7 10z"></path>
      <path d="M19 9v6"></path>
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3H5v7l9.5 9.5a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8L12 3z"></path>
      <circle cx="9" cy="8" r="1.4" fill="currentColor" stroke="none"></circle>
    </svg>
  ),
  chevron: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  ),
  arrowLeft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 6l-6 6 6 6"></path>
    </svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6l6 6-6 6"></path>
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 11v5M12 7.5v.5"></path>
    </svg>
  ),
  externalLink: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4h6v6"></path>
      <path d="M20 4l-9 9"></path>
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path>
    </svg>
  ),
  signal: (
    <svg viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
      <rect x="0.5" y="8" width="2.5" height="3.5" rx="0.6"></rect>
      <rect x="4.5" y="6" width="2.5" height="5.5" rx="0.6"></rect>
      <rect x="8.5" y="4" width="2.5" height="7.5" rx="0.6"></rect>
      <rect x="12.5" y="1.5" width="2.5" height="10" rx="0.6"></rect>
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 5c3-2.5 9-2.5 12 0"></path>
      <path d="M4 7.5c2-1.5 6-1.5 8 0"></path>
      <path d="M6 10c1-.8 3-.8 4 0"></path>
    </svg>
  ),
  battery: (
    <svg viewBox="0 0 26 12" fill="none" aria-hidden="true">
      <rect x="0.5" y="1" width="22" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.2"></rect>
      <rect x="2" y="2.5" width="16" height="7" rx="1.2" fill="currentColor"></rect>
      <rect x="23" y="4" width="2" height="4" rx="0.8" fill="currentColor"></rect>
    </svg>
  ),
};

// Icon component — wraps inline SVG with currentColor inheritance.
function Icon({ name, size = 24, className = "", style }) {
  const svg = I[name];
  if (!svg) return null;
  return (
    <span
      className={"icon " + className}
      style={{ width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...style }}
    >
      {React.cloneElement(svg, { width: size, height: size })}
    </span>
  );
}

window.Icon = Icon;
window.I = I;
