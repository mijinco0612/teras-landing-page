export function Header() {
  return (
    <header className="bg-background border-b border-border/30 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <img src="/teras-logo.svg" alt="TERAS" className="h-6" />
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#philosophy"
              className="text-sm font-semibold text-foreground hover:text-foreground transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#methodology"
              className="text-sm font-semibold text-foreground hover:text-foreground transition-colors"
            >
              Methodology
            </a>
            <a
              href="#services"
              className="text-sm font-semibold text-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
