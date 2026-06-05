import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { WhyMe } from "@/components/site/WhyMe";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const SITE_URL = "https://burakemreasci.lovable.app";
const TITLE =
  "Burak Emre Aşcı — Web Sitesi & Temel SEO | Yerel Markalar İçin Dijital Görünürlük";
const DESCRIPTION =
  "Burak Emre Aşcı — yerel markalara modern web sitesi, temel SEO ve Search Console kurulumu. Sadece tasarım değil; bulunurluk ve güven inşa eden dijital altyapı.";

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
        <WhyMe />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
