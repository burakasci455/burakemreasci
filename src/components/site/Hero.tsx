import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 md:px-10 pt-28 pb-24 overflow-hidden"
    >
      {/* Ambient indigo glow */}
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
            Tasarımcı · Sakarya / İstanbul
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display mt-8 text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            Markalar için{" "}
            <span className="italic font-normal text-accent">sade</span> ve{" "}
            <span className="italic font-normal text-accent">işlevsel</span>{" "}
            kimlikler tasarlıyorum.
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-foreground/30" />
            <p className="font-display text-sm md:text-base tracking-[0.2em] uppercase text-foreground/80">
              Burak Emre Aşcı
            </p>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-20 md:mt-28 flex items-center gap-2 text-xs text-muted-foreground/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            kaydırarak devam et
          </div>
        </Reveal>
      </div>
    </section>
  );
}
