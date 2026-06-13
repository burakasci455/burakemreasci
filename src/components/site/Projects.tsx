import { useState } from "react";
import { Reveal } from "./Reveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import heroImg from "@/assets/atelier/atelier-hero.png.asset.json";
import aboutImg from "@/assets/atelier/atelier-about.png.asset.json";
import projectsImg from "@/assets/atelier/atelier-projects.png.asset.json";
import portfolioImg from "@/assets/atelier/atelier-portfolio.png.asset.json";
import workshopImg from "@/assets/atelier/atelier-workshop.png.asset.json";
import ofHero from "@/assets/omerfaruk/of-hero.png.asset.json";
import ofPortfolio from "@/assets/omerfaruk/of-portfolio.png.asset.json";
import ofCourses from "@/assets/omerfaruk/of-courses-intro.png.asset.json";
import ofAboutShort from "@/assets/omerfaruk/of-about-short.png.asset.json";
import ofSchedule from "@/assets/omerfaruk/of-schedule.png.asset.json";
import ofAbout from "@/assets/omerfaruk/of-about.png.asset.json";

const atelierShots = [
  { src: heroImg.url, label: "Ana sayfa — Atelier Meşe iç mimarlık web sitesi tasarımı" },
  { src: aboutImg.url, label: "Hakkımızda — Atelier Meşe iç mimarlık web sitesi tasarımı" },
  { src: projectsImg.url, label: "Seçilmiş işler — Atelier Meşe iç mimarlık web sitesi tasarımı" },
  { src: portfolioImg.url, label: "Portföy — Atelier Meşe iç mimarlık web sitesi tasarımı" },
  { src: workshopImg.url, label: "Atölye — Atelier Meşe iç mimarlık web sitesi tasarımı" },
];

const omerFarukShots = [
  { src: ofHero.url, label: "Ana sayfa — Ömer Faruk Art karakalem sanatçısı web sitesi tasarımı" },
  { src: ofPortfolio.url, label: "Portföy — Ömer Faruk Art karakalem sanatçısı web sitesi tasarımı" },
  { src: ofCourses.url, label: "Atölye & online kurslar — Ömer Faruk Art web sitesi tasarımı" },
  { src: ofSchedule.url, label: "Kurs takvimi — Ömer Faruk Art web sitesi tasarımı" },
  { src: ofAboutShort.url, label: "Hakkında kısa — Ömer Faruk Art web sitesi tasarımı" },
  { src: ofAbout.url, label: "Hakkında detay — Ömer Faruk Art web sitesi tasarımı" },
];

type Project = {
  num: string;
  title: string;
  sector: string;
  year: string;
  cover?: string;
  shots?: { src: string; label: string }[];
  problem?: string;
  work?: string;
  impact?: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Atelier Meşe",
    sector: "İç mimarlık · Mobilya atölyesi",
    year: "2026",
    cover: heroImg.url,
    shots: atelierShots,
    problem:
      "Atölyenin işleri güçlü ama internette ciddi bir vitrini yoktu. Potansiyel müşteri markayı aradığında bulamıyor, bulduğunda da güven sinyali alamıyordu.",
    work:
      "Sıcak ve doğal tonlara dayanan kurumsal bir site kurguladım. Ana sayfa, hakkımızda, seçilmiş işler, portföy ve atölye sayfalarını içerik ve mesaj akışına göre tasarladım. Temel SEO ve görünürlük altyapısı baştan kuruldu.",
    impact:
      "Marka artık aratıldığında bulunabilir, sergilenecek bir vitrine sahip ve potansiyel müşteriye ilk dakikada güven veren bir dijital ev sahibi.",
  },
  {
    num: "02",
    title: "Ömer Faruk Art",
    sector: "Karakalem sanatçısı · Atölye & online kurslar",
    year: "2026",
    cover: ofHero.url,
    shots: omerFarukShots,
    problem:
      "Sanatçının işleri ve atölye kursları tamamen Instagram'a sıkışmıştı. Potansiyel öğrenci kurs takvimini, içeriği veya sanatçının kim olduğunu net bir yerden göremiyordu.",
    work:
      "Editöryel bir tonda; eserler, kurslar, hakkında ve iletişim akışlarını ayıran bir kişisel marka sitesi kurguladım. Portföy galerisi, atölye & online kurs tanıtımı, kurs takvimi ve hakkında sayfalarını içerik öncelikli olarak tasarladım.",
    impact:
      "Sanatçının dijital vitrini artık tek bir yerde toplandı; eserler ciddi bir sunumla görünür, kurslar takvim üzerinden kayda dönüştürülebilir hale geldi.",
  },
  {
    num: "03",
    title: "",
    sector: "Yakında",
    year: "",
  },
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
              <span className="font-display text-xs tracking-[0.3em] text-accent">03</span>
              <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Projeler
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-foreground/90 max-w-2xl">
              Seçilmiş işler. Her proje; sorun, kurulan yapı ve hedeflenen
              etki üzerinden anlatılıyor.
            </p>
            <p className="mt-4 font-body text-sm text-muted-foreground/80">
              Bir karta basarak detayları görebilirsin.
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
                      alt={`${p.title} — ${p.sector} web sitesi tasarımı`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                    />
                  )}
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
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
                      <p className="mt-1 font-body text-xs text-muted-foreground">
                        {p.sector}
                      </p>
                      {isLive && (
                        <p className="mt-3 font-body text-[11px] tracking-[0.2em] uppercase text-accent/80">
                          Case study →
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
                {active.sector}
              </p>

              <DialogDescription className="sr-only">
                {active.title} case study
              </DialogDescription>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { label: "Sorun", body: active.problem },
                  { label: "Ne yaptım", body: active.work },
                  { label: "Hedeflenen etki", body: active.impact },
                ].map(
                  (b) =>
                    b.body && (
                      <div key={b.label} className="border-t border-border/50 pt-5">
                        <p className="font-display text-[11px] tracking-[0.3em] uppercase text-accent">
                          {b.label}
                        </p>
                        <p className="mt-3 font-body text-sm md:text-base text-foreground/85 leading-relaxed">
                          {b.body}
                        </p>
                      </div>
                    ),
                )}
              </div>

              <div className="mt-12 grid grid-cols-1 gap-5">
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
