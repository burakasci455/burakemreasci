import { Reveal } from "./Reveal";

const points = [
  {
    title: "Estetik + growth bakışı",
    desc: "Site sadece güzel görünmesin diye değil, müşteri kazanma aracı olarak kurgulanıyor.",
  },
  {
    title: "Yerel işletmenin ihtiyacını anlıyorum",
    desc: "Yerel markaların gerçek sorunu görünür olmak ve güven vermek. Çözümleri buna göre tasarlıyorum.",
  },
  {
    title: "Hızlı ve net teknik kurulum",
    desc: "Site, SEO temelleri ve ölçümleme tek elden ve kısa sürede ayağa kalkıyor.",
  },
  {
    title: "Sade, çözüm odaklı iletişim",
    desc: "Ajans dili yok. Ne yaptığımı, neden yaptığımı ve ne beklemen gerektiğini açık anlatıyorum.",
  },
];

export function WhyMe() {
  return (
    <section
      id="neden-ben"
      className="relative px-6 md:px-10 py-32 md:py-40 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <Reveal className="md:col-span-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-xs tracking-[0.3em] text-accent">04</span>
              <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Neden Ben
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-foreground/90 max-w-2xl">
              Tek bir freelancer'la çalışmanın hızını, marketing bakışıyla
              birleştiriyorum.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-md border border-border/60 bg-surface/30 p-7 md:p-8 hover:border-accent/50 transition-colors">
                <div className="flex items-baseline gap-3 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-display text-xs tracking-[0.3em] uppercase">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl md:text-2xl tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
