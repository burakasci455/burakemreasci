export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-border/40">
      <div className="mx-auto max-w-6xl flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-display tracking-[0.2em] uppercase">
          © 2026 Burak Emre Aşcı
        </span>
        <a
          href="#top"
          className="font-display tracking-[0.2em] uppercase hover:text-foreground transition-colors"
        >
          ↑ Yukarı
        </a>
      </div>
    </footer>
  );
}
