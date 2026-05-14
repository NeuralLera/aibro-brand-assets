# Examples — Reference Designs

Эта папка содержит **референсные дизайны** для генерации страниц Aibro СММ через Claude Design.

## Что здесь

### `smashone-pages-light/` — 22 страницы SmashOne (light theme, полный набор)

Полный набор публичного сайта SmashOne (https://smashone.ai) в **light theme**, экспортированные из Claude Design v6 (2026-05-12):

**Главные / маркетинг:**
- `Homepage.html` — главная (hero / validation / features / pricing / FAQ)
- `pricing.html` — тарифы
- `help.html` — справка hub
- `integrations.html` — список интеграций (у нас single MAX, берём только структуру)

**Vertical landings:**
- `for-restaurants.html`, `for-salons.html` — структуры под ниши (адаптируем под наши: пекарни, кофейни, фитнес, страховые, тур-агентства)

**Сравнения:**
- `vs-diy.html`, `vs-hootsuite-buffer.html`, `vs-smm-agency.html` — паттерны "vs X"

**Конверсия / оплата:**
- `paywall.html` — после окончания триала
- `dunning.html` — failed payment recovery
- `cancellation.html` — отмена подписки

**Legal:**
- `terms.html`, `privacy.html`, `cookies.html`, `dpa.html`, `security.html`

**Прочее:**
- `api.html`, `automator.html`, `changelog.html`, `status.html` — у Aibro **не делаем** (нет публичного API, automator закрыт, нет changelog публичного, нет status page для MVP)

**Стили:**
- `site.css` — оригинальные стили SmashOne. **Не копировать напрямую** (у нас свой `tokens/`), но смотреть как они применили tokens.
- `assets/` — картинки/шрифты для рендеринга HTML

### `smashone-pages-dark/` — 5 страниц SmashOne (dark theme)

| Файл | Что |
|---|---|
| `Homepage.html` | Главная dark theme (v5 1440px self-contained) |
| `pricing.html` | Тарифы dark theme (v1 1440px) |
| `automator.html` | Программа Automator (у нас закрыта — берём только структуру dark adaptation) |
| `onboarding-wizard.html` | Wizard onboarding клиента (полезно для нашего onboarding) |
| `auth-bundle.html` | Login/Signup bundle (полезно для `/auth/*` страниц) |

> Light → Dark адаптация остальных страниц делается через design tokens (см. `tokens/dark-theme.md`) — Claude Design сгенерирует обе темы из одного PROMPT.

### `screenshots/`

- `smashone-homepage-light-2026-05-14.png` — light theme homepage
- `smashone-homepage-dark-2026-05-14.png` — dark theme homepage

Для визуального сравнения / inspiration при создании Aibro home в Claude Design.

---

## 🚨 SmashOne — это ТОЛЬКО структурный/визуальный референс

**Контент копировать ЗАПРЕЩЕНО.** SmashOne и Aibro — разные продукты с разной аудиторией. Берём **визуальную ДНК** и **структурные паттерны**, но не текст.

### ✅ Что брать со SmashOne

- Layout (двухколоночный hero: H1 + sub + CTA слева, продуктовое превью-эмбед справа)
- Glassmorphism стиль карточек (см. `patterns/glassmorphism.md`)
- Сетка (12-col, generous whitespace)
- Иерархия типографики (крупный H1 ~64px, разреженная)
- CTA placement (primary + secondary рядом, secondary outline)
- Trust footer с 4-мя badges
- Theme toggle, navigation структура
- Section flow: hero → social-proof → product → features → pricing → FAQ → footer

### ❌ Что НЕ копировать

| Что НЕ копировать (SmashOne) | Что у Aibro |
|---|---|
| Wordmark "SmashOne" | «СММ АЙБРО» (заглавными), friendly robot icon |
| Английский язык (EU/US аудитория) | **Только русский** (Россия, 168-ФЗ) |
| Цена €1,500-€5,000 / agency comparison EU | Своё value-сравнение в ₽ (агентства РФ от 50 000 ₽/мес) |
| 6 платформ (Telegram/VK/OK/Дзен и др.) | **Только MAX** (single-MAX с 04.05.2026) |
| 3 тарифа (Light / Pro / Agency) | **Один тариф** 4 990 ₽/мес |
| 14-day trial | **5 дней триал** |
| €0 today / Stripe verified payments | ₽ / ЮKassa + Т-Банк |
| Polish Sp. z.o.o entity / GDPR-compliant | **ИП Мальцев Валерий Валерьевич** (Россия), 152-ФЗ + 168-ФЗ |
| Restaurants/salons across Europe | Малый бизнес РФ (пекарни, фитнес, страховой агент, тур-агентства, кофейни и т.д.) |
| Automator programme | у нас закрыт 04.05.2026 — НЕ упоминать вообще |
| `vs-hootsuite-buffer.html` / `vs-diy.html` | у нас своё сравнение vs «нанять СММ-щика за 60к ₽» |

---

## ✅ Что у Aibro в hero (вместо SmashOne копирайтинга)

**H1 (примеры — финальная формулировка через Phase 0 BRIEF Rumira):**
- «ИИ-ассистент для бизнеса в MAX за 4 990 ₽/мес — вместо штата СММ-щика за 60 000 ₽»
- «Перестаньте платить агентству за СММ. ИИ-автоматизация в MAX за 4 990 ₽/мес»
- «СММ АЙБРО — ИИ берёт на себя посты, ответы клиентам и приём заказов в MAX»

**Sub-text:** что мы делаем (автопостинг + ЧЗВ-бот + приём заказов CRM-light + приём звонков). Для малого бизнеса в России. Single-MAX.

**CTA:**
- Primary: «Попробовать бесплатно — 5 дней триал»
- Secondary: «Смотреть демо» (или «Как это работает»)

**Trust footer (4 badges):**
- ИП Мальцев (РФ, ИНН 519041916737) / Юр.лицо в России
- ЮKassa + Т-Банк / Безопасные платежи РФ
- 168-ФЗ / 152-ФЗ соответствие (российский ИИ + персданные)
- Возврат / гарантия (формулировка через legal docs)

---

## 📋 Список страниц Aibro для генерации

| Aibro страница | SmashOne reference | Приоритет |
|---|---|---|
| Главная (`/`) | `Homepage.html` light + dark | P0 (релиз 8.06) |
| Тарифы (если будет отдельной — но скорее всего секция Home) | `pricing.html` | P1 |
| Справка hub (`/help`) | `help.html` | P0 |
| Vertical landing для пекарен (`/for-bakery`) | `for-restaurants.html` | P1 |
| Vertical landing для салонов / фитнеса | `for-salons.html` | P1 |
| После триала (`/paywall`) | `paywall.html` | P1 |
| Условия использования (`/legal/terms`) | `terms.html` | P0 |
| Политика конфиденциальности (`/legal/privacy`) | `privacy.html` | P0 |

Aibro **пропускает** (не делаем): `automator.html` (программа закрыта), `api.html` (нет публичного API), `integrations.html` (single MAX, не нужно), `vs-*.html` (своё сравнение позже), `changelog.html` (внутренний), legal docs `dpa.html`/`security.html`/`status.html`/`cancellation.html`/`dunning.html` (для РФ другая структура — см. `web/public/legal/` в основном репо).

---

## Использование с Claude Design

При создании концепта новой страницы:

1. В Claude Design (https://claude.ai/design) подключи этот репо:
   ```
   https://github.com/NeuralLera/aibro-brand-assets
   ```
2. В PROMPT.md указывай конкретный reference, например:
   ```
   Use `examples/smashone-pages-light/Homepage.html` as **structural/visual ДНК reference**.
   Adapt content to Russian Aibro brand per `compliance/168-fz.md` and `compliance/single-max.md`.
   NO direct copy of SmashOne copy/pricing/jurisdiction details.
   Generate both light and dark theme versions per `tokens/`.
   ```
3. Прикрепи скриншоты (`screenshots/*.png`) для визуального сравнения.
4. Claude Design сгенерит концепт в стилистической ДНК SmashOne, но с Aibro контентом.

---

## Будущие examples (Aibro pages)

По мере того как Rumira создаёт страницы Aibro и Валерий утверждает их в Claude Design — финальные экспорты сохраняются здесь:

```
examples/
├── aibro-pages-light/
│   ├── Homepage.html         ← ждёт первой утверждённой версии
│   ├── pricing.html
│   ├── help.html
│   └── ...
├── aibro-pages-dark/
│   └── ... (аналогично)
├── smashone-pages-light/     ← reference (read-only)
├── smashone-pages-dark/      ← reference (read-only)
└── screenshots/
```

---

*Last updated: 2026-05-14 | SmashOne reference snapshot from `SMM-Hub/design/exports/TASK-001-homepage/` (v6 light + v5 dark, 2026-05-12)*
