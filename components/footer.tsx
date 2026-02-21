export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 pb-12 md:pb-16 border-b border-background/10">
            {/* Left column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src="/teras-mark.png" alt="" className="h-14 md:h-16" />
                  <img src="/teras-logo.svg" alt="TERAS" className="h-8 md:h-10 invert" />
                </div>
                <p className="text-sm font-light text-background/60 italic">Traces of the Future.</p>
              </div>
            </div>

            {/* Right column - Contact */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xs font-medium tracking-widest text-background/40 uppercase">Contact</h4>
                <div className="space-y-2 text-sm font-light text-background/80">
                  <p>Representative: Takamichi Tatsumoto</p>
                  <p>Email: contact@teras.tech</p>
                  <p>Location: 7F, Ichigo Tenjin North Bldg., 4-6-28 Tenjin, Chuo-ku, Fukuoka-shi, Fukuoka, Japan</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-medium tracking-widest text-background/40 uppercase">Expertise</h4>
                <div className="flex flex-wrap gap-2 text-xs font-light">
                  {["DDD", "Microservices", "Team Topologies", "Inverse Conway", "Event Sourcing", "CQRS", "Design Thinking"].map(
                    (tag) => (
                      <span key={tag} className="px-3 py-1 border border-background/20 text-background/70">
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 md:pt-12">
            <p className="text-xs font-light text-background/40">© 2025 LLC TERAS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
