import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="iletisim"
      className="relative px-6 md:px-10 py-32 md:py-40 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-4">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-xs tracking-[0.3em] text-accent">
              08
            </span>
            <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
              İletişim
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-8">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Markanı birlikte{" "}
            <span className="italic text-accent">konumlandıralım</span>.
          </p>
          <p className="mt-6 font-body text-base md:text-lg text-muted-foreground max-w-xl">
            Markanı, ihtiyacını ve hedefini kısaca yaz — birlikte bakalım.
            Hazır brief gerekmiyor, birkaç cümle yeterli. Genelde 24 saat
            içinde dönüyorum.
          </p>

          <div className="mt-14 space-y-6">
            <a
              href="mailto:burakemreasci2004@gmail.com"
              className="group flex items-center justify-between border-t border-border/50 py-5 transition-colors hover:border-accent/60"
              aria-label="E-posta gönder"
            >
              <span className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                E-posta
              </span>
              <span className="font-body text-base md:text-lg text-foreground/90 group-hover:text-accent transition-colors">
                burakemreasci2004@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/burak-emre-asci-7606a52b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-t border-border/50 py-5 transition-colors hover:border-accent/60"
              aria-label="LinkedIn profili (yeni sekmede açılır)"
            >
              <span className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                LinkedIn
              </span>
              <span className="font-body text-base md:text-lg text-foreground/90 group-hover:text-accent transition-colors inline-flex items-center gap-2">
                Burak Emre Aşcı
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="opacity-60 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden
                >
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <div className="border-t border-border/50" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
