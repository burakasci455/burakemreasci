import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { ForWhom } from "@/components/site/ForWhom";
import { WhyMe } from "@/components/site/WhyMe";
import { FAQ } from "@/components/site/FAQ";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const SITE_URL = "https://burakemreasci.lovable.app";
const TITLE =
  "Burak Emre Aşcı — Web Sitesi, Temel SEO & Dijital Görünürlük";
const DESCRIPTION =
  "Burak Emre Aşcı — yerel markalara modern web sitesi, temel SEO ve Search Console kurulumu. Markanın dijitalde bulunduğu ve güven verdiği bir altyapı.";

const FAQ_ITEMS = [
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
    a: "Evet. Domain seçimi, yönlendirme, yayın ve teknik kurulum süreçlerinin tamamını birlikte yürütürüz.",
  },
  {
    q: "Search Console ve Analytics kuruyor musun?",
    a: "Evet, standart sürecin parçası. Search Console doğrulaması, sitemap gönderimi ve Analytics bağlantısı yapılır.",
  },
  {
    q: "Kimlerle çalışıyorsun?",
    a: "Çoğunlukla yerel markalar, küçük işletmeler, atölyeler ve yeni başlayan girişimlerle çalışıyorum.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Burak Emre Aşcı, web sitesi kurulumu, temel SEO, Search Console, yerel SEO, growth marketing, dijital görünürlük, freelance web tasarım",
      },
      { name: "author", content: "Burak Emre Aşcı" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Burak Emre Aşcı" },
      { property: "og:locale", content: "tr_TR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Burak Emre Aşcı",
          alternateName: "Burak Emre Asci",
          jobTitle: "Web Tasarımcı & Dijital Görünürlük Danışmanı",
          description:
            "Yerel markalara modern web sitesi, temel SEO ve Search Console kurulumu yapan freelance tasarımcı.",
          url: SITE_URL,
          sameAs: [
            "https://www.linkedin.com/in/burak-emre-asci-7606a52b7/",
          ],
          email: "mailto:burakemreasci2004@gmail.com",
          knowsAbout: [
            "Web Design",
            "Web Development",
            "Search Engine Optimization",
            "Google Search Console",
            "Google Analytics",
            "Local SEO",
            "Growth Marketing",
            "Brand Positioning",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Sakarya / İstanbul",
            addressCountry: "TR",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Burak Emre Aşcı",
          url: SITE_URL,
          inLanguage: "tr-TR",
          author: { "@type": "Person", name: "Burak Emre Aşcı" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground font-body">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <ForWhom />
        <WhyMe />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
