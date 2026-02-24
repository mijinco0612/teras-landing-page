export function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Architecture Design",
      titleJa: "アーキテクチャ設計",
      description:
        "Evolutionary architecture patterns to decompose monoliths into maintainable, scalable systems. From monoliths to microservices, and everything in between.",
    },
    {
      number: "02",
      title: "Organization Development",
      titleJa: "組織開発",
      description:
        "Design organizational structures that enable fast flow and minimize dependencies. Create stream-aligned teams with clear ownership and autonomous purpose.",
    },
    {
      number: "03",
      title: "Technical Leadership",
      titleJa: "技術リーダーシップ",
      description:
        "Strategic technical leadership on-demand. Fractional CTO services, architecture reviews, technical strategy, and hands-on guidance for scaling engineering organizations.",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section title */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-semibold tracking-widest text-foreground uppercase mb-4">Services</h2>
            <div className="w-full h-[0.5px] bg-foreground" />
          </div>

          {/* Large typography list */}
          <div className="space-y-16 md:space-y-20">
            {services.map((service, index) => (
              <div key={index} className="group pb-16 md:pb-20 border-b border-foreground/5 last:border-b-0 last:pb-0">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                  {/* Number */}
                  <div className="md:col-span-2">
                    <span className="text-6xl md:text-7xl font-light text-foreground group-hover:text-foreground transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-10 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-base md:text-lg font-light text-foreground">{service.titleJa}</p>
                    </div>

                    <p className="text-sm md:text-base font-light text-foreground leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
