import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Web sitesi ne kadar sürede yayına alınıyor?",
    a: "İçeriklerin hazır olduğu standart bir kurumsal site genelde 1–2 hafta içinde yayına alınır. Kapsam genişledikçe süre değişebilir; her zaman baştan netleştiririz.",
  },
  {
    q: "SEO ile Google'da hemen üst sıralara çıkar mıyım?",
    a: "Hayır, böyle bir garanti gerçekçi değil. Yaptığım şey, sitenin Google tarafından doğru anlaşılmasını ve doğru sorgularda görünme şansının oluşmasını sağlayan temel altyapıyı kurmak.",
  },
  {
    q: "Domain ve hosting işlerini de hallediyor musun?",
    a: "Evet. Domain seçimi, yönlendirme, yayın ve teknik kurulum süreçlerinin tamamını birlikte yürütürüz. Sen sadece içeriğe ve markaya odaklan.",
  },
  {
    q: "Search Console ve Analytics kuruyor musun?",
    a: "Evet, standart sürecin parçası. Search Console doğrulaması, sitemap gönderimi ve Analytics bağlantısı yapılır; kısa bir kullanım rehberiyle birlikte teslim edilir.",
  },
  {
    q: "Kimlerle çalışıyorsun?",
    a: "Çoğunlukla yerel markalar, küçük işletmeler, atölyeler ve yeni başlayan girişimlerle çalışıyorum. Tek muhatap arayan, sade ilerlemek isteyen ekiplere uygunum.",
  },
];

export function FAQ() {
  return (
    <section
      id="sss"
      className="relative px-6 md:px-10 py-32 md:py-40 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-16">
          <Reveal className="md:col-span-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-xs tracking-[0.3em] text-accent">06</span>
              <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Sık Sorulan Sorular
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-foreground/90 max-w-2xl">
              İlk temas öncesi en çok merak edilenler. Daha fazlasını sormak
              istersen kısa bir mesaj yeterli.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <Accordion type="single" collapsible className="max-w-3xl">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="font-display text-left text-base md:text-lg tracking-tight hover:text-accent hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
