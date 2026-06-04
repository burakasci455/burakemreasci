import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Burak Emre Aşcı — Tasarımcı" },
      {
        name: "description",
        content:
          "Burak Emre Aşcı — markalar için sade ve işlevsel kimlikler tasarlayan bağımsız tasarımcı. Sakarya / İstanbul.",
      },
      { property: "og:title", content: "Burak Emre Aşcı — Tasarımcı" },
      {
        property: "og:description",
        content:
          "Markalar için sade ve işlevsel kimlikler tasarlıyorum. Portföy ve iletişim.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Burak Emre Aşcı",
          jobTitle: "Tasarımcı",
          url: "/",
          sameAs: [
            "https://www.linkedin.com/in/burak-emre-asci-7606a52b7/",
          ],
          email: "mailto:burakemreasci2004@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Sakarya / İstanbul",
            addressCountry: "TR",
          },
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
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
