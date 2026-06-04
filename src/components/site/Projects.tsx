import { useState } from "react";
import { Reveal } from "./Reveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import heroImg from "@/assets/atelier/atelier-hero.png.asset.json";
import aboutImg from "@/assets/atelier/atelier-about.png.asset.json";
import projectsImg from "@/assets/atelier/atelier-projects.png.asset.json";
import portfolioImg from "@/assets/atelier/atelier-portfolio.png.asset.json";
import workshopImg from "@/assets/atelier/atelier-workshop.png.asset.json";

const atelierShots = [
  { src: heroImg.url, label: "Ana sayfa" },
  { src: aboutImg.url, label: "Hakkımızda" },
  { src: projectsImg.url, label: "Seçilmiş işler" },
  { src: portfolioImg.url, label: "Portföy" },
  { src: workshopImg.url, label: "Atölye" },
];

type Project = {
  num: string;
  title: string;
  category: string;
  year: string;
  cover?: string;
  shots?: { src: string; label: string }[];
  description?: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Atelier Meşe",
    category: "İç mimarlık · Web tasarım",
    year: "2026",
    cover: heroImg.url,
    shots: atelierShots,
    description:
      "İç mimarlık ve özel üretim mobilya atölyesi Atelier Meşe için sade, sıcak ve doğal tonlara dayanan bir kurumsal site tasarımı.",
  },
  { num: "02", title: "", category: "Yakında", year: "" },
  { num: "03", title: "", category: "Yakında", year: "" },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

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
              Seçilmiş işler. Bir projeye basarak detayları görebilirsiniz.
            </p>
            <p className="mt-4 font-body text-sm text-muted-foreground/80">
              Yeni projeler süreciyle birlikte tek tek eklenecek.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const isLive = !!p.shots;
            return (
              <Reveal key={p.num} delay={i * 120}>
                <article
                  onClick={() => isLive && setActive(p)}
                  className={`group relative aspect-[4/5] rounded-md border border-border/60 bg-surface/40 overflow-hidden transition-all duration-700 ${
                    isLive
                      ? "cursor-pointer hover:border-accent/60 hover:bg-surface/70"
                      : "hover:border-accent/30"
                  }`}
                >
                  {p.cover && (
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"
                  />
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
                        {isLive ? p.year : "Yakında"}
                      </span>
                      <p className="mt-3 font-display text-2xl tracking-tight text-foreground">
                        {p.title || "—"}
                      </p>
                      {isLive && (
                        <p className="mt-1 font-body text-xs text-muted-foreground">
                          {p.category}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[92vh] overflow-y-auto bg-background border-border/60 p-0">
          {active && (
            <div className="p-6 md:p-10">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-display text-xs tracking-[0.3em] text-accent">
                  Proje · {active.num}
                </span>
                <span className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  {active.year}
                </span>
              </div>
              <DialogTitle className="font-display text-3xl md:text-5xl tracking-tight text-foreground">
                {active.title}
              </DialogTitle>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                {active.category}
              </p>
              {active.description && (
                <DialogDescription className="mt-6 font-body text-base md:text-lg text-foreground/80 max-w-3xl leading-relaxed">
                  {active.description}
                </DialogDescription>
              )}

              <div className="mt-10 grid grid-cols-1 gap-5">
                {active.shots?.map((s) => (
                  <figure
                    key={s.src}
                    className="overflow-hidden rounded-md border border-border/50 bg-surface/30"
                  >
                    <img
                      src={s.src}
                      alt={`${active.title} — ${s.label}`}
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                    <figcaption className="px-4 py-3 font-display text-[11px] tracking-[0.3em] uppercase text-muted-foreground border-t border-border/40">
                      {s.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
