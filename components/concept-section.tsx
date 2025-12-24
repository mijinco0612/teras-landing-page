export function ConceptSection() {
  return (
    <section id="philosophy" className="relative border-b border-border bg-card">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block border-2 border-primary px-4 py-2">
            <span className="text-sm font-bold text-primary tracking-wider">THE ORIGIN</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            TERAS means <span className="text-primary">{'"Monster"'}</span> and{" "}
            <span className="text-secondary">{'"Tera-scale"'}</span>
          </h2>

          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              From the Greek word for <span className="text-foreground font-bold">{'"Monster"'}</span> or{" "}
              <span className="text-foreground font-bold">{'"Prodigy,"'}</span>
              TERAS represents both the challenges we face and the magnitude we help you achieve.
            </p>
            <p className="text-xl md:text-2xl font-bold text-foreground">
              We face the monstrous complexity of modern SaaS development so you don&apos;t have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">Τέρας</div>
              <div className="text-sm text-muted-foreground">Greek: Monster / Prodigy</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-secondary">10¹²</div>
              <div className="text-sm text-muted-foreground">Tera: Magnitude of Scale</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">LLC</div>
              <div className="text-sm text-muted-foreground">Engineering Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
