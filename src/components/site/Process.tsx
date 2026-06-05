import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Keşif",
    desc: "Markanı, hedef kitleni ve müşteriyle nerede karşılaştığını anlıyorum. Hangi sorgularda görünmen gerektiğini netleştiriyoruz.",
  },
  {
    n: "02",
    title: "Yapı & İçerik",
    desc: "Sayfa mimarisini, mesaj sırasını ve içerik bloklarını kurguluyorum. Estetikten önce iletişim ve dönüşüm akışı.",
  },
  {
    n: "03",
    title: "Kurulum & Yayın",
    desc: "Modern, hızlı ve mobil uyumlu siteyi geliştirip yayına alıyorum. Domain, hosting ve teknik SEO temellerini birlikte bağlıyoruz.",
  },
  {
    n: "04",
    title: "Ölçümleme & Devir",
    desc: "Search Console ve Analytics kurulumu, sitemap gönderimi ve kısa bir kullanım rehberi. Site senin elinde, ölçülebilir şekilde devam ediyor.",
  },
];

export function Process() {
  return (
    <section
      id="surec"
      className="relative px-6 md:px-10 py-32 md:py-40 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <Reveal className="md:col-span-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-xs tracking-[0.3em] text-accent">02</span>
              <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Nasıl Çalışıyorum
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-foreground/90 max-w-2xl">
              Şeffaf, dört adımlı bir süreç. Sürpriz fatura değil, baştan
              netleşen bir yol haritası.
            </p>
          </Reveal>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-px bg-border/40 border border-border/40 rounded-md overflow-hidden">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <li className="h-full bg-background p-8 md:p-9">
                <span className="font-display text-xs tracking-[0.3em] text-accent">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-xl tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
