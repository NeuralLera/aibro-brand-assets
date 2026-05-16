// Page sections — Header, Hero, Trust, How it works, Features, CRM, Pricing, Partner, FAQ, Final CTA, Footer.

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

/* =========================================================
   HEADER
   ========================================================= */
function Header() {
  return (
    <header className="hdr" role="banner">
      <div className="hdr-inner">
        <a href="#top" className="hdr-brand" aria-label="СММ АЙБРО — на главную">
          <span className="hdr-brand-mark">
            <img src="assets/logos/robot-icon-light.svg" alt="" width="24" height="24" />
          </span>
          <span className="hdr-brand-word">СММ АЙБРО</span>
        </a>
        <nav className="hdr-nav" aria-label="Основное меню">
          <a href="#features">Возможности</a>
          <a href="#pricing">Тариф</a>
          <a href="#demo">Примеры</a>
          <a href="#partner">Партнёрка</a>
          <a href="#faq">Частые вопросы</a>
        </nav>
        <div className="hdr-actions">
          <a href="#" className="btn btn-secondary btn-sm btn-login">Войти</a>
          <a href="#trial" className="btn btn-primary btn-sm">Запустить пробный период</a>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   HERO
   ========================================================= */
function Hero({ phoneIndex, setPhoneIndex }) {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div>
            <span className="chip chip-brand">CRM · РЕЛИЗ 08.06.2026</span>
          </div>
          <div className="hero-disclaimer">Пробный период 5 дней без карты</div>
          <h1 className="h1">
            Кабинет владельца бизнеса <span className="accent">в MAX</span> — за один день.
          </h1>
          <p className="hero-sub">
            ИИ-ассистент клиентам 24/7, 5 автопостов в день, приём заказов и запись на услуги — в одном кабинете. <b className="tabular">4 990 ₽</b> в месяц.
          </p>
          <div className="hero-actions">
            <a href="#trial" className="btn btn-primary btn-lg">Запустить пробный период</a>
            <a href="#demo" className="btn btn-ghost btn-md">Посмотреть демо пекарни →</a>
          </div>
        </div>
        <div className="hero-right">
          <PhoneMockup activeIndex={phoneIndex} onIndexChange={setPhoneIndex} />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRUST STRIP
   ========================================================= */
function Trust() {
  const items = [
    { ico: <img src="assets/logos/max-glyph.svg" alt="" width="18" height="18" />, label: "Работает только в MAX" },
    { ico: <Icon name="checkCircle" size={18} />, label: "Соответствует 168-ФЗ" },
    { ico: <Icon name="tag" size={18} />, label: "ОРД с автоматическим erid" },
    { ico: <Icon name="ruble" size={18} />, label: "Единый тариф 4 990 ₽/мес" },
    { ico: <Icon name="clock" size={18} />, label: "5 дней без карты" },
  ];
  return (
    <section className="trust" aria-label="Ключевые гарантии">
      <div className="trust-inner">
        {items.map((it, i) => (
          <div className="trust-chip" key={i}>
            <span className="trust-chip-ico">{it.ico}</span>
            <span className="tabular">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   HOW IT WORKS
   ========================================================= */
function HowItWorks() {
  const steps = [
    { n: "1", ico: "plus", title: "Подключите бизнес",
      sub: "Загружаете товары и услуги в кабинет через сайт или ИИ-импорт — за один день." },
    { n: "2", ico: "edit", title: "ИИ пишет посты",
      sub: "5 информационных постов в день автоматически — про продукты, акции, новости. Вы только проверяете." },
    { n: "3", ico: "package", title: "Клиенты заказывают",
      sub: "ИИ-ассистент отвечает в MAX 24/7, принимает заказы и записи, push-уведомление вам в MAX." },
  ];
  return (
    <section className="section" id="how" data-screen-label="03 How it works">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">3 ШАГА</div>
          <h2 className="h2">Как работает</h2>
          <p className="lead">От импорта каталога до первых заказов — один день. Дальше ИИ ведёт канал и отвечает клиентам за вас.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <article className="step" key={s.n}>
              <div className="step-head">
                <span className="step-num tabular">{s.n}</span>
                <span className="step-ico"><Icon name={s.ico} size={22} /></span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.sub}</p>
            </article>
          ))}
        </div>
        <div className="steps-cta">
          <a href="#trial" className="btn btn-primary btn-md">Запустить пробный период</a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES
   ========================================================= */
function Features() {
  const items = [
    { ico: "edit", title: "Контент-маркетинг",
      body: "5 постов в день автоматически + 5 быстрых постов на запрос. ИИ генерирует тексты и подбирает картинки из вашего каталога.",
      meta: "АВТОПОСТИНГ" },
    { ico: "message", title: "ИИ-ассистент клиентам 24/7",
      body: "Отвечает на вопросы в MAX мгновенно. Обучается на вашем каталоге товаров и услуг. 1 000 ответов в месяц.",
      meta: "ИИ · 24/7" },
    { ico: "package", title: "Приём заказов",
      body: "Клиент заказывает прямо в чате — товары, доставка или самовывоз, итог в кабинете. Оплата через вашу кассу.",
      meta: "С 08.06" },
    { ico: "calendar", title: "Запись на услуги",
      body: "Слоты, длительность, ресурсы — мастера, залы, комнаты. Клиент видит свободное время и записывается сам.",
      meta: "С 08.06" },
    { ico: "users", title: "Мини-CRM клиентов",
      body: "История заказов, теги, ценность клиента за всё время. Карточка клиента бизнеса с заметками.",
      meta: "ВКЛЮЧЕНО" },
    { ico: "tag", title: "ОРД маркировка",
      body: "30 рекламных постов в месяц с автомаркировкой erid. Информационные посты — без лимита.",
      meta: "ОРД · erid" },
  ];
  return (
    <section className="section" id="features" data-screen-label="04 Features">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">ЧТО ВХОДИТ</div>
          <h2 className="h2">Что входит в тариф</h2>
          <p className="lead"><span className="tabular">4 990 ₽/мес</span> — без аддонов, без скрытых модулей, всё включено.</p>
        </div>
        <div className="features">
          {items.map((f, i) => (
            <article className="feature" key={i}>
              <span className="feature-ico"><Icon name={f.ico} size={22} /></span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <div className="feature-meta">{f.meta}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CRM HIGHLIGHT
   ========================================================= */
function CrmHighlight() {
  const items = [
    { ico: "package", title: "Заказы", body: "Товары + доставка или самовывоз" },
    { ico: "calendar", title: "Записи", body: "Услуги + расписание + ресурсы" },
    { ico: "users", title: "Клиенты", body: "История + теги + ценность за всё время" },
  ];
  return (
    <section className="section" id="crm" data-screen-label="05 CRM highlight">
      <div className="container">
        <div className="crm-card">
          <div className="crm-head">
            <span className="chip chip-info">РЕЛИЗ 08.06.2026</span>
            <h2 className="h2">Принимайте заказы прямо в MAX</h2>
            <p className="lead">С 8 июня 2026 — встроенная мини-CRM в каждом тарифе. Без отдельных счетов, без интеграций.</p>
          </div>
          <div className="crm-mini">
            {items.map((it, i) => (
              <div className="crm-mini-card" key={i}>
                <span className="crm-mini-ico"><Icon name={it.ico} size={20} /></span>
                <h4>{it.title}</h4>
                <p>{it.body}</p>
              </div>
            ))}
          </div>
          <div className="crm-info" role="note">
            <span className="crm-info-ico"><Icon name="info" size={20} /></span>
            <p>
              <b>Оплата заказа клиентом — мимо нас.</b> <span>Владелец сам разбирается на своей кассе или банке. Мы не платёжный агент — без 161-ФЗ нагрузки на ваш бизнес.</span>
            </p>
          </div>
          <div className="crm-cta">
            <a href="#" className="btn btn-secondary btn-md">Открыть кабинет</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PRICING
   ========================================================= */
function Pricing() {
  const lines = [
    "5 автопостов в день",
    "5 быстрых постов на запрос",
    "1 000 товаров в каталоге",
    "1 000 ответов ИИ в месяц",
    "ИИ-коуч и голосовые сообщения",
    "Приём заказов и запись на услуги (с 08.06)",
    "Мини-CRM клиентов",
    "ОРД маркировка с erid",
  ];
  return (
    <section className="section" id="pricing" data-screen-label="06 Pricing">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow">ЦЕНА</div>
          <h2 className="h2">Один тариф. Всё включено.</h2>
          <p className="lead">Никаких ПРО / СТАНДАРТ. Никаких аддонов. Никаких скидок «вместо 9 990».</p>
        </div>
        <div className="price-card" id="trial">
          <div className="price-row">
            <span className="price-amount tabular">4 990<sup>&nbsp;₽</sup></span>
            <span className="price-period">/ мес</span>
          </div>
          <div className="price-divider" />
          <ul className="price-list">
            {lines.map((l, i) => (
              <li key={i}>
                <span className="price-check"><Icon name="check" size={12} /></span>
                <span className="tabular">{l}</span>
              </li>
            ))}
          </ul>
          <div className="price-actions">
            <a href="#" className="btn btn-primary btn-lg btn-block">Запустить пробный период 5 дней</a>
          </div>
          <div className="price-note">Без карты. Дальше <span className="tabular">4 990 ₽/мес</span>, отменить в любой момент.</div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PARTNER
   ========================================================= */
function Partner() {
  const lines = [
    <>10% с первого уровня — пожизненно, пока партнёр платит</>,
    <>+10% со второго уровня — за привлечённых ими бизнесов</>,
    <>Минимум для выплаты — <span className="tabular">1 000 ₽</span></>,
    <>Выплата автоматически 1-го числа по СБП</>,
  ];
  return (
    <section className="section" id="partner" data-screen-label="07 Partner">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">ПАРТНЁРСКАЯ ПРОГРАММА</div>
          <h2 className="h2">Зарабатывайте на рекомендациях</h2>
          <p className="lead">Двухуровневая программа: процент с приведённого бизнеса и с тех, кого приведут они. Пожизненно, пока партнёры платят.</p>
        </div>
        <div className="partner-card">
          <div className="partner-grid">
            <div>
              <div className="partner-bignum tabular">
                10%<span className="plus"> + </span>10%
              </div>
              <div className="partner-bignum-sub">пожизненно</div>
            </div>
            <div>
              <ul className="partner-checklist">
                {lines.map((l, i) => (
                  <li key={i}>
                    <span className="marker"><Icon name="check" size={12} /></span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="partner-actions">
            <a href="#" className="btn btn-primary btn-md">Стать партнёром</a>
            <a href="#" className="btn btn-secondary btn-md">Войти в кабинет партнёра</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FAQ — accordion
   ========================================================= */
const FAQ_DATA = [
  {
    q: "А если клиенты не в MAX?",
    a: "Кабинет работает только в мессенджере MAX — это требование 168-ФЗ для всех российских СММ-сервисов. Установка занимает 2 минуты, переход по ссылке из СМС или QR. По нашим данным, MAX установлен у 60–70% активных покупателей в каждом регионе РФ.",
  },
  {
    q: "Сколько стоит запуск?",
    a: "Запуск бесплатный. Первые 5 дней — пробный период без карты: проверяете кабинет, импортируете каталог, запускаете автопостинг. Дальше 4 990 ₽/мес, отменить в любой момент в один клик.",
  },
  {
    q: "Как ИИ обучается на моих данных?",
    a: "Ваш каталог товаров и услуг, описания, цены, ваши прошлые посты — ИИ читает только эти данные и пишет с учётом тона. Никаких сторонних данных, никакой утечки в общую модель. Все данные хранятся на серверах в РФ.",
  },
  {
    q: "А ОРД маркировка автоматическая?",
    a: "Да. 30 рекламных постов в месяц — кабинет сам отправляет креатив в ОРД, получает erid и подставляет в публикацию. Информационные посты (новости, ассортимент, расписание) — без лимита и без erid.",
  },
  {
    q: "Можно отменить подписку и вернуть деньги?",
    a: "Отменить — в кабинете, в один клик, в любой момент. Доступ остаётся до конца оплаченного месяца. Если кабинет не подошёл за первые 14 дней — вернём оплату полностью на тот же способ оплаты.",
  },
];

function Faq() {
  const [openIdx, setOpenIdx] = useStateS(0);
  return (
    <section className="section" id="faq" data-screen-label="08 FAQ">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">ЧЗВ</div>
          <h2 className="h2">Частые вопросы</h2>
          <p className="lead">Если не нашли ответ — напишите в нашем MAX-канале, обычно отвечаем в течение часа.</p>
        </div>
        <div className="faq">
          {FAQ_DATA.map((item, i) => (
            <div className={"faq-item" + (openIdx === i ? " is-open" : "")} key={i}>
              <button
                className="faq-question"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                aria-expanded={openIdx === i}
                aria-controls={`faq-${i}`}
              >
                <span>{item.q}</span>
                <span className="faq-caret" aria-hidden="true"><Icon name="chevron" size={18} /></span>
              </button>
              <div className="faq-answer" id={`faq-${i}`} role="region">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-after">
          <a href="#" className="btn btn-secondary btn-md">
            <img src="assets/logos/max-glyph.svg" alt="" width="18" height="18" />
            Открыть канал в MAX
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA
   ========================================================= */
function FinalCta() {
  return (
    <section className="section" data-screen-label="09 Final CTA">
      <div className="container">
        <div className="finalcta">
          <div className="finalcta-inner">
            <h2>Готовы запустить?</h2>
            <p>5 дней пробного периода без карты. Дальше <span className="tabular">4 990 ₽/мес</span> — без обязательств, отменить в любой момент.</p>
            <a href="#trial" className="btn finalcta-btn">Запустить пробный период</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */
function Footer() {
  return (
    <footer className="foot" role="contentinfo" data-screen-label="10 Footer">
      <div className="foot-inner">
        <div className="foot-cols">
          <div>
            <a href="#top" className="hdr-brand" aria-label="СММ АЙБРО — на главную">
              <span className="hdr-brand-mark"><img src="assets/logos/robot-icon-light.svg" alt="" width="24" height="24" /></span>
              <span className="hdr-brand-word">СММ АЙБРО</span>
            </a>
            <p className="foot-brand-text">
              Кабинет владельца бизнеса в MAX. ИП Мальцев Валерий Валерьевич (ИНН <span className="tabular">519041916737</span>), УСН 6%.
            </p>
          </div>
          <div>
            <h5>Продукт</h5>
            <ul>
              <li><a href="#features">Возможности</a></li>
              <li><a href="#pricing">Тариф</a></li>
              <li><a href="#partner">Партнёрка</a></li>
              <li><a href="#">Дорожная карта</a></li>
            </ul>
          </div>
          <div>
            <h5>Кабинет</h5>
            <ul>
              <li><a href="#">Войти в кабинет клиента</a></li>
              <li><a href="#">Войти в кабинет партнёра</a></li>
              <li><a href="#">Восстановить пароль</a></li>
            </ul>
          </div>
          <div>
            <h5>Документы</h5>
            <ul>
              <li><a href="#">Договор-оферта</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Согласие на обработку ПД</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-chips">
          <span className="foot-chip"><img src="assets/logos/max-glyph.svg" alt="" /> Только MAX</span>
          <span className="foot-chip"><Icon name="checkCircle" size={14} /> 168-ФЗ</span>
          <span className="foot-chip"><Icon name="tag" size={14} /> ОРД с erid</span>
        </div>
        <div className="foot-copy">
          <span className="tabular">© 2025–2026 СММ АЙБРО · contact@smmaibro.ru</span>
          <span>Сделано в России</span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   STICKY MOBILE CTA
   ========================================================= */
function StickyMobileCta() {
  const [visible, setVisible] = useStateS(false);
  useEffectS(() => {
    const onScroll = () => {
      const ratio = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      const isVisible = ratio > 0.18 && ratio < 0.92;
      setVisible(isVisible);
      document.body.classList.toggle("has-sticky-cta", isVisible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={"sticky-cta" + (visible ? " is-visible" : "")} aria-hidden={!visible}>
      <a href="#trial" className="btn btn-primary btn-md btn-block">Запустить пробный период</a>
    </div>
  );
}

Object.assign(window, { Header, Hero, Trust, HowItWorks, Features, CrmHighlight, Pricing, Partner, Faq, FinalCta, Footer, StickyMobileCta });
