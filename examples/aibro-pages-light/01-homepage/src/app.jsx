// СММ АЙБРО — Homepage (Light) — main app entry.

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "default",
  "tile": "on",
  "phoneAutoplay": true
}/*EDITMODE-END*/;

function App() {
  const [phoneIndex, setPhoneIndex] = useState(0);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to document body
  useEffect(() => {
    document.body.setAttribute("data-accent", t.accent);
    document.body.setAttribute("data-tile", t.tile);
  }, [t.accent, t.tile]);

  // Autoplay phone carousel (paused on hover, respects reduced-motion)
  useEffect(() => {
    if (!t.phoneAutoplay) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => {
      setPhoneIndex((i) => (i + 1) % PHONE_SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, [t.phoneAutoplay]);

  return (
    <>
      <a href="#main" className="skip-link">Перейти к содержимому</a>
      <Header />
      <main id="main">
        <Hero phoneIndex={phoneIndex} setPhoneIndex={setPhoneIndex} />
        <Trust />
        <HowItWorks />
        <Features />
        <CrmHighlight />
        <Pricing />
        <Partner />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Акцент">
          <TweakRadio
            label="Изумруд"
            value={t.accent}
            onChange={(v) => setTweak("accent", v)}
            options={[
              { value: "default", label: "Канон" },
              { value: "deep", label: "Глубже" },
              { value: "bright", label: "Ярче" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Фон">
          <TweakRadio
            label="Tile-паттерн в hero"
            value={t.tile}
            onChange={(v) => setTweak("tile", v)}
            options={[
              { value: "on", label: "Точки" },
              { value: "off", label: "Чистый" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Карусель">
          <TweakToggle
            label="Автопрокрутка слайдов"
            value={t.phoneAutoplay}
            onChange={(v) => setTweak("phoneAutoplay", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
