import { useEffect, useState } from "react";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#surec", label: "Süreç" },
  { href: "#projeler", label: "Projeler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#iletisim", label: "İletişim" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-sm tracking-[0.25em] text-foreground/90 hover:text-foreground transition-colors"
          aria-label="Ana sayfa"
        >
          BEA
        </a>
        <ul className="hidden md:flex items-center gap-7 lg:gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-xs lg:text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#iletisim"
          className="md:hidden font-body text-xs tracking-wide text-accent hover:text-accent-glow"
        >
          İletişim
        </a>
      </nav>
    </header>
  );
}
