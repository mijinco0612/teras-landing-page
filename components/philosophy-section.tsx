export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section title */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-xs font-medium tracking-widest text-foreground/40 uppercase mb-4">Philosophy</h2>
            <div className="w-16 h-px bg-foreground/20" />
          </div>

          {/* Editorial grid layout */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-foreground/90 leading-tight text-balance">
                  複雑さを飼いならし、構造を生み出す力
                </h3>
                <p className="text-sm md:text-base font-light text-foreground/60 leading-relaxed">
                  The power to tame complexity and create structure.
                </p>
              </div>

              <div className="space-y-6 text-sm md:text-base font-light text-foreground/70 leading-relaxed">
                <p>
                  TERAの名は、ギリシャ語で「怪物」「驚異」を意味する。私たちは、混沌とした複雑なシステムに立ち向かい、それを明確な構造へと変える存在だ。
                </p>
                <p className="text-foreground/50 italic text-xs md:text-sm">
                  The name TERAS comes from the Greek word meaning "monster" or "prodigy." We are the force that
                  confronts chaotic, complex systems and transforms them into clear structures.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-foreground/80">Engineering as Power</h4>
                <p className="text-sm font-light text-foreground/60 leading-relaxed">
                  開発とは、複雑さに秩序を与える行為だ。明確な境界、整然とした層、統制された流れ。
                </p>
                <p className="text-xs font-light text-foreground/40 leading-relaxed italic">
                  Development is the act of giving order to complexity. Clear boundaries, organized layers, controlled
                  flows.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-medium text-foreground/80">Structure & Clarity</h4>
                <p className="text-sm font-light text-foreground/60 leading-relaxed">
                  私たちは、曖昧さを排除し、明確な設計を通じてシステムに美しい秩序をもたらす。
                </p>
                <p className="text-xs font-light text-foreground/40 leading-relaxed italic">
                  We eliminate ambiguity and bring beautiful order to systems through clear design.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-foreground/10">
            <blockquote className="text-xl md:text-2xl font-light text-foreground/60 leading-relaxed text-center max-w-3xl mx-auto text-balance">
              "We do not observe chaos. We transform it into order."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
