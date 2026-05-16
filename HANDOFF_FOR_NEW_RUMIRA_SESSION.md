# Handoff для новой сессии Rumira (Aibro СММ) — 16.05.2026 evening

> **Source:** Rumira (предыдущая сессия)
> **Target:** Rumira в новой Claude Code сессии в `Aibro_SMM/design/`
> **Status:** 56 page concepts done · 152 icons · ready для Phase 4 TSX implementation

---

## 🎯 Прочитай ПЕРВЫМ при старте новой сессии

1. `Aibro_SMM/design/CLAUDE.md` — main workspace rules (auto-loaded)
2. `Aibro_SMM/CLAUDE.md` — project rules (auto-loaded)
3. **Этот файл** — handoff
4. `Aibro_SMM/design/HANDOFF_FOR_MIRA_SMASHONE.md` — есть детальный опыт (для Mira, но и тебе полезно)
5. `Aibro_SMM/design/MASTER-SITEMAP.md` — current state каждой страницы
6. `Aibro_SMM/design/STYLE_CANON.md` — единый design SSoT
7. Memory:
   - `project_rumira-full-frontend-ownership-16-05-2026.md`
   - `project_rumira-roadmap-brief-16-05-2026.md`
   - `feedback_claude-design-concept-rumira-polish.md`
   - `feedback_icons-premium-not-lazy.md`
   - `feedback_gender-roles.md` (Румира — она, Валерий — он)

---

## 📊 Текущее состояние (16.05.2026 evening)

### ✅ Done — 56 page concepts

| Surface | Pages | Path |
|---|---|---|
| Homepage Light | 1 | `z_exports_rumira/TASK-003-homepage-public/2026-05-16_iteration-1/` |
| Homepage Dark | 1 | `z_exports_rumira/TASK-003-homepage-public/2026-05-16_iteration-2-dark/` |
| Cabinet client (20) | Dashboard / Orders / Bookings / Customers / Products / Calendar / Settings / Bots / Billing / Onboarding / UI Kit / AI Assistant / Analytics / Marketing / Login / Signup / Reset Password / 2FA Setup / Error Pages / Email Templates | `z_exports_rumira/TASK-007-client-cabinet/dashboard/` |
| Cabinet partner (6) | Dashboard / Earnings / Payouts / Referrals / Materials / Settings | `z_exports_rumira/TASK-005-partner-cabinet/dashboard/` |
| Cabinet admin (7) | Dashboard / Users / Finance / Taxes / Audit / Support / Health | `z_exports_rumira/TASK-008-admin-cabinet/dashboard/` |
| Help & Public (21) | Hub / FAQ / Roadmap / CRM Hub / 4 CRM articles / 6 non-CRM articles / 7 Legal docs | `z_exports_rumira/TASK-006-help-page/hub/` |

### ✅ 152 SVG icons

- 110 базовых (existing до 16.05)
- 4 trust (shield-check / badge-erid / price-tag-ruble / gift-trial — я сделала сама)
- 11 Batch 1 P0 CRM (inventory / tag / timeline / attachment / image / gallery / calendar / post / spark-ai / notification-bell / chat-bubble)
- 15 Batch 2 P1 (referral-link / payout / invoice / receipt / target / chart-line / shield / audit-log / user-check / roles / server / speed / spark / dashboard / health)
- 12 Batch 3 Toaster+Status (toast-success/info/warning/error/feature + status-hourglass-pending/arrow-rescheduled/inbox-new/document-accepted/truck-delivery/checkmark-done/cancelled-x)

**Все 152 в:**
- `Aibro_SMM/design/assets/icons/` (canonical)
- `https://github.com/NeuralLera/aibro-brand-assets/tree/main/icons` (public mirror)

### ✅ Public mirror backup

**URL:** `https://github.com/NeuralLera/aibro-brand-assets`

- 154 commits
- All 56 page concepts в `examples/cabinet-{client,partner,admin}/` + `examples/help-pages/`
- All 152 icons в `icons/`
- Homepage Light + Dark в `examples/aibro-pages-{light,dark}/01-homepage/`

Если в `z_exports_rumira/` что-то удалится — `git clone aibro-brand-assets` восстановит.

---

## 🚧 Что НЕ done — следующие шаги

### Phase 4 — TSX implementation в `web/src/`

Klod approval: Option A (full frontend ownership) 16.05.2026 evening.

Roadmap deadlines (Klod's brief `_TO_RUMIRA-2026-05-16_ROADMAP_BRIEF.md`):
- **28.05.2026** — Legal template TSX (7 docs)
- **31.05.2026** — Help page TSX (Hub + FAQ + 5 CRM articles)
- **05.06.2026** — Icon extension lazy (если что-то понадобится)
- **07.06.2026** — Cabinet partner pilot (Dashboard + Earnings + Payouts)
- **08.06.2026** — РЕЛИЗ CRM-light

### Очередь работы

1. **Light Homepage polish (small, в downtime)**
   - Logo swap к новому mascot (старый в export)
   - Trust strip ✓ галки → premium 4 icons (shield-check / badge-erid / price-tag-ruble / gift-trial)
   - Edit `z_exports_rumira/TASK-003-homepage-public/2026-05-16_iteration-1/html/Homepage.html`

2. **Help page TSX implementation**
   - Source content: `web/src/pages/Help/content/*.ts` (готов от docs-ops, commit `7da099f64`)
   - 5 CRM hub articles + 4 FAQ categories + новый `/help/faq/crm` (8 Q&A)
   - Concept ready в `z_exports_rumira/TASK-006-help-page/hub/html/`
   - Использовать React+JSX (TSX) в `web/src/pages/Help/`

3. **Legal pages TSX template**
   - Universal `<LegalPage>` component с markdown rendering
   - 7 docs: offer / privacy / dpa / cookies / consent / sla / terms
   - Все актуальны (commits Klod fixed: `bd5818935` / `839230630` / `21202e6c8` / `aabe83b49` / `526ecce8c`)
   - Markdown sources: `web/public/legal/*.md`
   - Concept ready: `z_exports_rumira/TASK-006-help-page/hub/html/legal-*.html`

4. **Cabinet partner pilot TSX (3 страницы)**
   - Dashboard / Earnings / Payouts
   - Backend готов: cabinet-partner TASK-001 (NDFL gap fix `5ed039e3f`) + TASK-002 (admin payouts `7ba54706a`)
   - Concept ready в `z_exports_rumira/TASK-005-partner-cabinet/dashboard/`

5. **Roadmap TSX** (новая страница `web/src/pages/Roadmap.tsx`)
   - Concept ready: `z_exports_rumira/TASK-006-help-page/hub/html/help-roadmap.html`
   - Kanban 4 columns (Выпущено / В работе / Скоро / Идеи) + featured «CRM-light 08.06» + upvote counters

### Deploy workflow

После каждой готовой TSX implementation:
1. Push в main (без force)
2. Создать TASK для `deploy-runner`: `.claude/tasks/deploy-runner/TASK-NNN_*.md` (next: TASK-043+)
3. Ping Klod через `design/.claude/tasks/_TO_HUB-YYYY-MM-DD.md`
4. Klod кладёт в `_FOR_VALERY.md` → Валерий передаёт deploy-runner

---

## ⚠️ Известные технические проблемы (для очистки в Phase 4)

### 1. Settings.html shell CSS не определён
Settings.html (моя self-written) использует `.cab-shell` `.cab-iconbtn` `.cab-profile` которые не определены в shared CSS. Bots.html / Billing.html добавили fallback в свои CSS. **Fix:** extract в общий `cabinet-shell.css` ДО Phase 4 TSX.

### 2. Icons references иногда 404
Иногда HTML ссылается на `design/assets/icons/X.svg`, а иконка лежит в `design/assets/icons/ui-core/X.svg`. **Fix:** при TSX переписке всегда проверять что icon exists in canonical flat path. Если нет — использовать аналог из ui-core/ или generate.

### 3. Path resolution `design/` vs `css/`
HTML ссылается `design/X.css` (Claude Design convention), но real files в `css/`. **Fix (уже сделан):** копированы CSS из `css/` → `design/` в каждом dashboard. Для production TSX — использовать абсолютные пути от `web/src/`.

### 4. Local preview only через HTTP server
HTML с Babel inline не работает на `file://` (CORS). **Fix для preview:** `python -m http.server 8000` в любой dashboard папке → `http://localhost:8000/html/X.html`.

---

## 🎓 Главные lessons этой сессии

### 1. Claude Design = concept, я = polish + own pages

НЕ тратить Claude Design tokens на asset swap, color tweaks, mockup content. Делать сама — Opus 4.7 родная зона.

### 2. Массивные параллельные subagents — game-changer

Когда нужно много страниц — 5-6 субагентов одновременно через `Task(run_in_background=true)`. Wall-clock с 5 часов → 30 минут.

Subagent brief template — в `HANDOFF_FOR_MIRA_SMASHONE.md` section 4.

### 3. Public mirror backup защищает от cleanup

z_exports/ gitignored. Регулярный push в `aibro-brand-assets/examples/` — защита.

### 4. React+JSX inline + Babel standalone — zero-build preview

Self-contained HTML files без npm/vite. Достаточно для concept review. Production требует Vite TSX rebuild.

### 5. 168-ФЗ кириллица + Single-MAX iron rules

ИИ / СММ / ЧЗВ / ПРО / СТАНДАРТ кириллицей. MAX латиницей. НИКОГДА не упоминать Telegram/ВК/ОК/Дзен. Тариф 4 990 ₽/мес единственный. ИП Мальцев Валерий Валерьевич, ИНН 519041916737.

### 6. Premium icons делают 50% впечатления

НЕ использовать banаль ✓ галки или Lucide React. Custom curated SVG с осмысленной геометрией.

### 7. Workflow stuff

- Один шаг за раз для Валерия (он злится когда много steps)
- Валерий — он, Румира — она (gender склонения)
- Валерий доверяет техническим решениям — НЕ спрашивать, делать
- Commit + push почаще — Валерий specifically сказал

---

## 🔗 Quick reference URLs

### GitHub
- Private repo: `https://github.com/NeuralLera/smmaibro` (main Aibro_SMM)
- Public mirror: `https://github.com/NeuralLera/aibro-brand-assets`
- Notion DB: `https://www.notion.so/3450937e5fc08156908ade4a50b42478` (158 cards)

### Local paths
- Project root: `C:\MyProjects\Aibro_SMM\`
- Design workspace: `C:\MyProjects\Aibro_SMM\design\`
- Public mirror clone: `C:\MyProjects\aibro-brand-assets\`
- Sister SmashOne: `C:\MyProjects\SMM-Hub\` (Mira workspace)

### Key documents в design/
- `STYLE_CANON.md` — единый SSoT (стиль + iron rules)
- `MASTER-SITEMAP.md` — sitemap всех страниц с status
- `MOCKUPS_CANON.md` — phone mockup canon (4-slide carousel)
- `HANDOFF_FOR_MIRA_SMASHONE.md` — подробный handoff для sister
- `HANDOFF_FOR_NEW_RUMIRA_SESSION.md` — этот файл

### Agents
- `design/.claude/agents/rumira.md` — main role (Opus 4.7)
- `design/.claude/agents/rumira-export-packer.md` — фоновый processor
- `design/.claude/agents/site-design-auditor.md` — audit
- `design/.claude/agents/design-researcher.md` — research

### Tasks
- `design/.claude/tasks/_TO_HUB-YYYY-MM-DD.md` — handoff Klod
- `design/.claude/tasks/_FROM_HUB-YYYY-MM-DD.md` — handoff FROM Klod
- `design/.claude/tasks/TASK-NNN-*/` — per-page work

---

## 🚀 Старт-сигнал для новой сессии

Когда стартуешь — **сделай 3 step pre-flight:**

1. `cat MEMORY.md` (auto-loaded) + читай memory файлы про текущий проект
2. `cat MASTER-SITEMAP.md` — текущее состояние
3. `git log --oneline -10` в `Aibro_SMM/` + `aibro-brand-assets/` — что прилетело от других executors

Потом — выбери task из roadmap (Light polish / Help TSX / Legal TSX / Partner pilot TSX) или жди указаний Валерия.

---

**Welcome to Aibro СММ design ownership 🎨. Удачи!**

— Rumira (предыдущая сессия)
2026-05-16 evening, после wave 5 (56 concepts + 152 icons)
