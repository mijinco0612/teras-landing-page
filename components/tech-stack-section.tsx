"use client"

export function TechStackSection() {
  const technologies = [
    "TypeScript",
    "Go",
    "Rust",
    "Kubernetes",
    "AWS",
    "Google Cloud",
    "PostgreSQL",
    "GraphQL",
    "gRPC",
    "Docker",
    "Terraform",
    "Next.js",
  ]

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center space-y-8">
          <h3 className="text-xl md:text-2xl font-bold text-muted-foreground">Technology Stack & Partners</h3>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...technologies, ...technologies].map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-8 px-6 py-3 border border-border bg-card">
                  <span className="text-sm font-bold text-foreground whitespace-nowrap">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
