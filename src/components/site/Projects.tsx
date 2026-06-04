import { Reveal } from "./Reveal";

const placeholders = [
  { num: "01", label: "Yakında" },
  { num: "02", label: "Yakında" },
  { num: "03", label: "Yakında" },
];

export function Projects() {
  return (
    <section
      id="projeler"
      className="relative px-6 md:px-10 py-32 md:py-40 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
          <Reveal className="md:col-span-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-xs tracking-[0.3em] text-accent">
                02
              </span>
              <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Projeler
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-foreground/90 max-w-2xl">
              Şu an üzerinde çalıştığım işler yakında burada olacak.
            </p>
            <p className="mt-4 font-body text-sm text-muted-foreground/80">
              Her bir proje süreciyle birlikte tek tek eklenecek.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {placeholders.map((p, i) => (
            <Reveal key={p.num} delay={i * 120}>
              <article
                className="group relative aspect-[4/5] rounded-md border border-border/60 bg-surface/40 overflow-hidden transition-all duration-700 hover:border-accent/50 hover:bg-surface/70"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, oklch(0.55 0.22 277 / 0.18), transparent 60%)",
                  }}
                />
                <div className="relative h-full w-full p-6 flex flex-col justify-between">
                  <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">
                    Proje · {p.num}
                  </span>
                  <div>
                    <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.25em] uppercase text-accent/90">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {p.label}
                    </span>
                    <p className="mt-3 font-display text-2xl tracking-tight text-foreground/70">
                      —
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
