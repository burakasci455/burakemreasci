import { Reveal } from "./Reveal";

type Pkg = {
  name: string;
  features: string[];
  featured?: boolean;
};

const setupPackages: Pkg[] = [
  {
    name: "Başlangıç",
    features: [
      "Website (4–5 sayfa)",
      "Mobil uyumlu tasarım",
      "Google Haritalar kaydı",
      "Domain bağlantısı",
      "Domain kurulumu + 1 yıl yayında kalma",
      "30 gün hata garantisi",
    ],
  },
  {
    name: "Profesyonel",
    featured: true,
    features: [
      "Başlangıç paketi +",
      "Google'da görünürlük",
      "Ziyaretçi takip sistemi",
      "Arama takip kurulumu",
      "Domain kurulumu + 1 yıl yayında kalma",
      "İçerik yazımı",
    ],
  },
  {
    name: "Premium",
    features: [
      "Profesyonel paketi +",
      "NFC + QR yorum kartı",
      "Sosyal medya butonları",
      "Domain kurulumu + 1 yıl yayında kalma",
      "Logo tasarımı",
      "Hızlı Destek",
    ],
  },
];

const carePackages: Pkg[] = [
  {
    name: "Güvende Kal",
    features: [
      "Site çalışır durumda",
      "Ayda 1 güncelleme",
      "Hata çözümü + yedek",
    ],
  },
  {
    name: "Gör & Yönet",
    featured: true,
    features: ["Temel Bakım +", "Ayda 2 güncelleme", "Ziyaretçi raporu"],
  },
  {
    name: "Ultra",
    features: [
      "Standart Bakım +",
      "Görünürlük artırma",
      "Acil müdahale önceliği",
    ],
  },
];

const EMAIL = "burakemreasci2004@gmail.com";

function mailto(pkg: string) {
  const subject = encodeURIComponent(`Teklif talebi — ${pkg}`);
  const body = encodeURIComponent(
    `Merhaba Burak,\n\n"${pkg}" paketi için bir teklif almak istiyorum.\n\nMarka / iş: \nİhtiyacım: \nBütçe aralığı: \nİletişim: \n\nTeşekkürler.`,
  );
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

function mailtoOptional() {
  const subject = encodeURIComponent("Opsiyonel hizmetler teklifi");
  const body = encodeURIComponent(
    `Merhaba Burak,\n\nAşağıdaki opsiyonel hizmetler için teklif almak istiyorum:\n\n- İkinci Dil (İngilizce versiyon)\n- Online Randevu Sistemi Kurulumu\n- Ekstra Revizyon\n- Bakım Dışı Büyük Değişiklik\n- NFC + QR Yorum Kartı\n\nİhtiyacım olanlar: \n\nTeşekkürler.`,
  );
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

function Card({ pkg }: { pkg: Pkg }) {
  return (
    <article
      className={`group relative h-full rounded-xl border p-7 md:p-8 flex flex-col transition-all duration-700 ease-out ${
        pkg.featured
          ? "border-accent/50 bg-surface/60 shadow-[0_30px_80px_-40px_oklch(0.55_0.22_277_/_0.6)] md:-translate-y-2 hover:-translate-y-3"
          : "border-border/60 bg-surface/30 hover:border-accent/40 hover:-translate-y-1"
      }`}
    >
      {pkg.featured && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, oklch(0.55 0.22 277 / 0.25), transparent 60%)",
          }}
        />
      )}
      <div className="relative flex items-center justify-between">
        <div>
          <h3 className="font-serif-title text-3xl md:text-[34px] tracking-tight text-foreground">
            {pkg.name}
          </h3>
          <div className="w-10 h-px bg-foreground/20 mt-3" />
        </div>
        {pkg.featured && (
          <span className="font-display text-[10px] tracking-[0.25em] uppercase text-accent border border-accent/40 rounded-full px-2.5 py-1">
            En Popüler
          </span>
        )}
      </div>

      <div className="relative mt-6 border-t border-border/40 pt-6 flex-1">
        <ul className="space-y-3.5">
          {pkg.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 font-body text-sm md:text-[15px] text-foreground/85"
            >
              <span
                aria-hidden
                className="mt-[7px] h-1 w-1 rounded-full bg-accent shrink-0"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={mailto(pkg.name)}
        className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-display text-xs tracking-[0.25em] uppercase transition-all duration-500 bg-accent text-accent-foreground hover:bg-accent-glow shadow-[0_0_20px_-5px_oklch(0.55_0.22_277_/_0.4)]"
      >
        Teklif Al
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="transition-transform duration-500 group-hover:translate-x-1"
          aria-hidden
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </article>
  );
}

const optionalServices = [
  "İkinci Dil (İngilizce versiyon)",
  "Online Randevu Sistemi Kurulumu",
  "Ekstra Revizyon",
  "Bakım Dışı Büyük Değişiklik (yeni sayfa, tasarım değişikliği)",
  "NFC + QR Yorum Kartı",
];

function OptionalServices() {
  return (
    <div className="mt-24 md:mt-32">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-display text-[11px] tracking-[0.3em] uppercase text-accent">
            Ek Hizmetler
          </span>
          <span className="font-body text-xs text-muted-foreground">
            İhtiyacınıza göre eklenebilir
          </span>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h3 className="font-serif-title text-2xl md:text-[28px] tracking-tight text-foreground mb-8">
          İhtiyacınıza Göre Ek Hizmetler
        </h3>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {optionalServices.map((svc, i) => (
          <Reveal key={svc} delay={i * 80}>
            <div className="group rounded-xl border border-border/60 bg-surface/20 p-5 md:p-6 hover:border-accent/30 hover:bg-surface/40 transition-all duration-500 h-full flex items-start gap-3">
              <span
                aria-hidden
                className="mt-[7px] h-1 w-1 rounded-full bg-accent/60 shrink-0"
              />
              <span className="font-body text-sm text-foreground/80 leading-relaxed">
                {svc}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-xl border border-border/40 bg-surface/20 p-6 md:p-8">
          <p className="font-body text-sm md:text-[15px] text-muted-foreground max-w-xl leading-relaxed">
            Her işletmenin ihtiyacı farklıdır. Size özel fiyat ve çözümler
            için iletişime geçin.
          </p>
          <a
            href={mailtoOptional()}
            className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-display text-xs tracking-[0.25em] uppercase transition-all duration-500 bg-accent text-accent-foreground hover:bg-accent-glow shadow-[0_0_20px_-5px_oklch(0.55_0.22_277_/_0.4)] shrink-0"
          >
            İletişime Geç
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform duration-500 group-hover:translate-x-1"
              aria-hidden
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </Reveal>
    </div>
  );
}

export function Packages() {
  return (
    <section
      id="paketler"
      className="relative px-6 md:px-10 py-32 md:py-40 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20">
          <Reveal className="md:col-span-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-xs tracking-[0.3em] text-accent">
                04
              </span>
              <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Paketler
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-foreground/90 max-w-2xl">
              İhtiyacına göre net çerçeveler. Fiyatlar; kapsam, içerik ve
              hedeflere göre kişiye özel belirleniyor — sana özel teklifi
              birlikte konuşalım.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-display text-[11px] tracking-[0.3em] uppercase text-accent">
              Kurulum
            </span>
            <span className="font-body text-xs text-muted-foreground">
              Tek seferlik ödeme
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:items-stretch">
          {setupPackages.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <Card pkg={p} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 font-body text-xs text-muted-foreground/70">
            * 1 yıl sonrası yıllık domain yenileme ve barındırma ücreti
            uygulanır.
          </p>
        </Reveal>

        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-display text-[11px] tracking-[0.3em] uppercase text-accent">
                Aylık Bakım
              </span>
              <span className="font-body text-xs text-muted-foreground">
                Opsiyonel — istediğin zaman iptal
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:items-stretch">
            {carePackages.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <Card pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>

        <OptionalServices />
      </div>
    </section>
  );
}

