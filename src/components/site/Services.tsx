import { Reveal } from "./Reveal";
import { Globe, Search, BarChart3, MapPin, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Kurumsal web sitesi kurulumu",
    desc: "Markanın ihtiyacına göre sade, hızlı ve mobil uyumlu modern bir site. Tasarımdan yayına tek elden.",
  },
  {
    icon: Search,
    title: "Temel SEO kurulumu",
    desc: "Title, meta, başlık hiyerarşisi, sitemap, robots ve schema. Google'ın siteyi doğru anlaması için temel altyapı.",
  },
  {
    icon: BarChart3,
    title: "Search Console & Analytics",
    desc: "Search Console doğrulama, sitemap gönderimi ve Analytics kurulumu. İlk günden itibaren ölçülebilir bir başlangıç.",
  },
  {
    icon: MapPin,
    title: "Yerel görünürlük için sayfa yapısı",
    desc: "Yerel işletmelerin aranma sorgularına denk düşen, hizmet ve bölge odaklı sayfa kurgusu.",
  },
  {
    icon: MessageSquare,
    title: "Marka mesajını netleştirme",
    desc: "Ne yaptığını ilk 5 saniyede anlatan, sade ve güven veren bir dil. Şişirme yok, satış odaklı netlik var.",
  },
];

export function Services() {
  return (
    <section
      id="hizmetler"
      className="relative px-6 md:px-10 py-32 md:py-40 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <Reveal className="md:col-span-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-xs tracking-[0.3em] text-accent">01</span>
              <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Ne Yapıyorum
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-foreground/90 max-w-2xl">
              Markalara sadece site kurmuyorum; bulunurluk için gereken temel
              dijital altyapıyı baştan sona kuruyorum.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 border border-border/40 rounded-md overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <article className="h-full bg-background p-8 md:p-10 group hover:bg-surface/30 transition-colors">
                  <div className="flex items-center gap-3 text-accent">
                    <Icon size={18} strokeWidth={1.5} />
                    <span className="font-display text-xs tracking-[0.3em] uppercase">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl md:text-2xl tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
