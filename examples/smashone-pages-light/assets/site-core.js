/* ============================================================================
   SmashOne v6 LIGHT — site-core.js
   Shared behaviors: theme toggle (cookie persistence) + FAQ accordion.
   Load with: <script src="assets/site-core.js" defer></script>
   ============================================================================ */

/* ---------- Theme toggle — light/dark with cookie persistence -------- */
(function () {
  const root = document.documentElement;
  const STORAGE_KEY = 'theme';

  function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
  }
  function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  // First-visit detection
  const stored = getCookie(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    applyTheme(stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  function toggle() {
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setCookie(STORAGE_KEY, next);
  }

  document.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.theme-toggle');
    if (btn) toggle();
  });
})();

/* ---------- FAQ accordion — single-open behavior --------------------- */
(function () {
  const items = document.querySelectorAll('.faq__item');
  if (!items.length) return;
  items.forEach(item => {
    const btn = item.querySelector('.faq__q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      items.forEach(i => {
        i.classList.remove('is-open');
        const b = i.querySelector('.faq__q');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

/* ---------- Cookie banner (EU only — auto-init if present) ----------- */
(function () {
  const banner = document.querySelector('.cookie-banner[data-cookie-banner]');
  if (!banner) return;
  const STORAGE_KEY = 'cookies_choice';
  function getChoice() {
    const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + STORAGE_KEY + '=([^;]+)'));
    return m ? decodeURIComponent(m[1]) : '';
  }
  function setChoice(value) {
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
  }
  if (!getChoice()) banner.hidden = false;
  banner.addEventListener('click', (ev) => {
    const action = ev.target.dataset.cookieAction;
    if (!action) return;
    setChoice(action);
    banner.hidden = true;
  });
})();
