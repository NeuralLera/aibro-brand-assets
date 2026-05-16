// Phone mockup with 4-slide carousel — Hero centerpiece.
// Slides: Пекарня Уют (chat) / Пульс Фитнес (chat) / Смарт Тур (ad+chat) / Алексей Страхов (ad+chat)

const { useState, useEffect, useRef } = React;

const PHONE_SLIDES = [
  {
    id: "bakery",
    business: "Пекарня «Уют»",
    handle: "ассистент · в сети",
    tag: "ИИ",
    caption: "Пекарня · информационный пост в канале и запись на самовывоз",
    body: (
      <>
        <div className="bubble bubble-bot">Здравствуйте! Это пекарня «Уют». Что подскажу?</div>
        <div className="bubble bubble-user">Хочу заказать торт на завтра</div>
        <div className="bubble bubble-bot">Конечно. Какой нужен — медовик, наполеон или морковный?</div>
        <div className="bubble bubble-user">Морковный, на 8 персон</div>
        <div className="bubble bubble-bot">Принимаю заказ: морковный, 8 персон — 2 400 ₽. Самовывоз завтра до 12:00, ул. Свободы, 14. Подтвердить?</div>
        <div className="bubble bubble-user">Да, подтверждаю</div>
      </>
    ),
  },
  {
    id: "fitness",
    business: "Пульс · фитнес-клуб",
    handle: "ассистент · в сети",
    tag: "ИИ",
    caption: "Фитнес-клуб · ответ по абонементу и запись на пробное занятие",
    body: (
      <>
        <div className="bubble bubble-bot">Здравствуйте! Это «Пульс». Чем помочь?</div>
        <div className="bubble bubble-user">Сколько стоит абонемент на месяц?</div>
        <div className="bubble bubble-bot">Безлимит — 4 900 ₽/мес. Утренний (до 16:00) — 2 900 ₽/мес. С тренером — от 1 500 ₽/занятие.</div>
        <div className="bubble bubble-bot">Хотите попробовать бесплатное занятие? Есть слоты завтра в 09:00, 18:30, 20:00.</div>
        <div className="bubble bubble-user">Записывайте на 18:30</div>
        <div className="bubble bubble-bot">Записал — Анна, завтра 18:30, тренер Илья. Напомню за час.</div>
      </>
    ),
  },
  {
    id: "tour",
    business: "Смарт Тур · турагентство",
    handle: "канал · 1 412 подписчиков",
    tag: "ОРД",
    caption: "Турагентство · рекламный пост с erid и подбор тура в чате",
    body: (
      <>
        <div className="adpost">
          <div className="adpost-head">
            <div className="ava">СТ</div>
            <div className="adpost-name">Смарт Тур</div>
            <div className="adpost-erid">erid: 2Vt­zqx9KQ4P</div>
          </div>
          <div className="adpost-hero adpost-tour">Турция, 7 ночей<br/>от 38 900 ₽</div>
          <div className="adpost-body">
            <b>Анталия 4★, всё включено.</b> Вылет из Москвы 12 июня. Места только до пятницы. Напишите «подбор» — соберём вариант под бюджет.
          </div>
        </div>
        <div className="bubble bubble-user">Подбор</div>
        <div className="bubble bubble-bot">Бюджет на двоих и даты? Дам 3 варианта.</div>
        <div className="bubble bubble-user">До 90 000 на двоих, 12–19 июня</div>
        <div className="bubble bubble-bot">Подобрал: Анталия 4★ — 78 600 ₽, Кемер 4★ — 84 200 ₽, Сиде 5★ — 89 900 ₽. Какой держим?</div>
      </>
    ),
  },
  {
    id: "insurance",
    business: "Алексей Страхов · ИП",
    handle: "канал · 826 подписчиков",
    tag: "ОРД",
    caption: "Страхование · реклама ОСАГО с erid и расчёт стоимости в чате",
    body: (
      <>
        <div className="adpost">
          <div className="adpost-head">
            <div className="ava">АС</div>
            <div className="adpost-name">Алексей Страхов</div>
            <div className="adpost-erid">erid: 2Vt­зq4M7p1R</div>
          </div>
          <div className="adpost-hero adpost-insurance">ОСАГО за 8 минут<br/>без переплат</div>
          <div className="adpost-body">
            <b>Считаю в 12 компаниях</b> и беру минимальный тариф. Полис в электронном виде, действует с момента оплаты. Напишите марку и регион — посчитаю.
          </div>
        </div>
        <div className="bubble bubble-user">Lada Vesta 2021, Тверь</div>
        <div className="bubble bubble-bot">Стаж и возраст водителя?</div>
        <div className="bubble bubble-user">37 лет, стаж 14</div>
        <div className="bubble bubble-bot">Минимум — Согаз 6 840 ₽. Альфа — 7 120 ₽. Ингосстрах — 7 480 ₽. Оформить Согаз?</div>
      </>
    ),
  },
];

function PhoneMockup({ activeIndex, onIndexChange }) {
  const slides = PHONE_SLIDES;
  const slide = slides[activeIndex];

  // Keyboard support
  const containerRef = useRef(null);
  const goNext = () => onIndexChange((activeIndex + 1) % slides.length);
  const goPrev = () => onIndexChange((activeIndex - 1 + slides.length) % slides.length);

  return (
    <div className="phone-wrap" ref={containerRef}>
      <div className="phone" role="region" aria-label="Демо-интерфейс кабинета СММ АЙБРО в MAX">
        <div className="phone-screen">
          <div className="phone-island" aria-hidden="true"></div>
          <div className="phone-status">
            <span className="tabular">9:41</span>
            <div className="phone-status-right">
              <Icon name="signal" size={16} />
              <Icon name="wifi" size={16} />
              <Icon name="battery" size={26} />
            </div>
          </div>
          <div className="phone-body">
            <div className="phone-chathead">
              <span className="phone-chathead-avatar">
                <img src="assets/logos/robot-icon-light.svg" alt="" />
              </span>
              <div>
                <div className="phone-chathead-name">{slide.business}</div>
                <div className="phone-chathead-meta">{slide.handle}</div>
              </div>
              <span className="phone-chathead-tag">{slide.tag}</span>
            </div>
            <div className="phone-slides">
              {slides.map((s, i) => (
                <div key={s.id} className={"phone-slide" + (i === activeIndex ? " is-active" : "")} aria-hidden={i !== activeIndex}>
                  {s.body}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="phone-controls" role="group" aria-label="Управление слайдером">
        <button className="phone-arrow" onClick={goPrev} aria-label="Предыдущий слайд">
          <Icon name="arrowLeft" size={20} />
        </button>
        <div className="phone-dots" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={"phone-dot" + (i === activeIndex ? " is-active" : "")}
              onClick={() => onIndexChange(i)}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Слайд ${i + 1}: ${s.business}`}
            />
          ))}
        </div>
        <button className="phone-arrow" onClick={goNext} aria-label="Следующий слайд">
          <Icon name="arrowRight" size={20} />
        </button>
      </div>

      <div className="phone-caption">
        <b>{slide.business.replace(/\s·.*$/, "").replace(/«|»/g, "")}</b> · {slide.caption.replace(/^[^·]+·\s*/, "")}
      </div>
      <div className="phone-disclaim">Демо-интерфейс, не реальные переписки и данные.</div>
    </div>
  );
}

window.PhoneMockup = PhoneMockup;
window.PHONE_SLIDES = PHONE_SLIDES;
