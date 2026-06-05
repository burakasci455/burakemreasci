import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="hakkimda"
      className="relative px-6 md:px-10 py-32 md:py-40 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-4">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-xs tracking-[0.3em] text-accent">05</span>
            <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Hakkımda
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-8">
          <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.35] tracking-tight text-foreground/95">
            Ben <span className="text-accent/90">Burak Emre Aşcı</span>.
            Yerel markalara modern web sitesi, temel SEO ve ölçümleme
            altyapısı kuruyorum.
          </p>
          <p className="mt-8 font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
            İstanbul Aydın Üniversitesi'nde sosyoloji, Anadolu Üniversitesi'nde
            açıktan işletme okuyorum. Asıl ilgim marketing ve growth tarafında —
            bir markanın nasıl bulunduğunu, nasıl tercih edildiğini ve nasıl
            güven kurduğunu anlamak.
          </p>
          <p className="mt-5 font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Sakaryalıyım, İstanbul'da yaşıyorum. Tek başına çalışan,
            sürpriz çıkarmayan, ne yaptığını açık anlatan bir freelancer'la
            çalışmak istiyorsan doğru yerdesin.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
