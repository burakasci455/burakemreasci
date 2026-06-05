import { Reveal } from "./Reveal";

const trustItems = [
  "Web sitesi",
  "Temel SEO",
  "Search Console",
  "Analytics",
  "Mobil uyum",
  "Yerel görünürlük",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 md:px-10 pt-28 pb-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 277 / 0.55) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 right-0 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.45 0.18 280 / 0.55) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl w-full">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-muted-foreground">
            <span className="h-px w-8 bg-accent/70" />
            Web sitesi · Temel SEO · Görünürlük
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display mt-8 text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            Markanı dijitalde{" "}
            <span className="italic font-normal text-accent">görünür</span> ve{" "}
            <span className="italic font-normal text-accent">güvenilir</span>{" "}
            kılan dijital altyapı.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 max-w-2xl font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Yerel markalar için modern web sitesi, temel SEO ve ölçümleme
            kurulumu. Sadece güzel görünen değil; doğru kişiye ulaşan ve güven
            inşa eden bir altyapı kuruyorum.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projeler"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm tracking-wide text-accent-foreground hover:bg-accent-glow transition-colors"
            >
              Projeleri Gör
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className="group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 font-display text-sm tracking-wide text-foreground hover:border-accent/60 hover:text-accent transition-colors"
            >
              İletişime Geç
            </a>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-3 text-[11px] tracking-[0.2em] uppercase text-muted-foreground/80">
            {trustItems.map((t, i) => (
              <li key={t} className="flex items-center gap-2">
                {i > 0 && <span className="h-px w-4 bg-border/60" aria-hidden />}
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
