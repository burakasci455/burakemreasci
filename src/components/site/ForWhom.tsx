import { Reveal } from "./Reveal";

const items = [
  "Instagram'da var ama web sitesi olmayan markalar",
  "Google'da görünmek isteyen yerel işletmeler",
  "Yeni açılan küçük markalar ve atölyeler",
  "Mesajını daha net anlatmak isteyen markalar",
  "Mevcut sitesi eskimiş, yenilemek isteyenler",
  "Tek bir muhatapla hızlı ilerlemek isteyen ekipler",
];

export function ForWhom() {
  return (
    <section
      id="kimler-icin"
      className="relative px-6 md:px-10 py-32 md:py-40 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-16">
          <Reveal className="md:col-span-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-xs tracking-[0.3em] text-accent">04</span>
              <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Kimler İçin Uygun
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-foreground/90 max-w-2xl">
              Herkese değil, doğru kişiye çalışıyorum. Aşağıdaki tanımlardan
              birine yakınsan birbirimize uyumlu olma ihtimalimiz yüksek.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {items.map((t, i) => (
            <Reveal key={t} delay={i * 60}>
              <li className="flex items-start gap-4 border-t border-border/50 pt-4">
                <span className="font-display text-xs tracking-[0.3em] text-accent pt-1">
                  0{i + 1}
                </span>
                <span className="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
                  {t}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
