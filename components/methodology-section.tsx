"use client"

import { useState } from "react"

export function MethodologySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const methodologies = [
    {
      title: "Inverse Conway",
      subtitle: "Architecture shapes organization",
      description: "組織構造を望ましいアーキテクチャに合わせて再設計する",
      details:
        "Restructure your organization to match your desired architecture. Design team boundaries that enable true system modularity and autonomous flow.",
    },
    {
      title: "Domain-Driven Design",
      subtitle: "Clear boundaries, unified language",
      description: "ビジネスドメインと技術実装を整合させる共通言語の確立",
      details:
        "Establish ubiquitous language and bounded contexts. Align business domains with technical implementation for maintainable, scalable systems.",
    },
    {
      title: "Team Topologies",
      subtitle: "Optimized flow, minimal load",
      description: "認知負荷を最小化し、フローを最大化するチーム設計",
      details:
        "Design team interactions that minimize cognitive load and maximize flow. Stream-aligned, platform, enabling, and complicated subsystem teams.",
    },
  ]

  return (
    <section id="methodology" className="py-24 md:py-32 lg:py-40 border-t border-foreground/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-lg md:text-xl font-semibold tracking-widest text-foreground uppercase mb-4">Methodology</h2>
            <div className="w-full h-[0.5px] bg-foreground" />
          </div>

          {/* Minimalist grid */}
          <div className="grid md:grid-cols-3 border-l border-t border-foreground/10">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="border-r border-b border-foreground/10 p-8 md:p-10 lg:p-12 transition-all duration-500 relative overflow-hidden group cursor-default"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover effect: increasing density (darkness) */}
                <div
                  className="absolute inset-0 bg-foreground transition-opacity duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 0.03 : 0,
                  }}
                />

                <div className="relative space-y-6">
                  {/* Number */}
                  <div className="text-5xl font-light text-foreground group-hover:text-foreground transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title and subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-medium text-foreground">{method.title}</h3>
                    <p className="text-xs font-light text-foreground italic">{method.subtitle}</p>
                  </div>

                  {/* Description in Japanese */}
                  <p className="text-xs md:text-sm font-light text-foreground leading-relaxed">
                    {method.description}
                  </p>

                  {/* Details in English */}
                  <p className="text-xs font-light text-foreground leading-relaxed pt-4">{method.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
