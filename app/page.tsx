import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PhilosophySection } from "@/components/philosophy-section"
import { MethodologySection } from "@/components/methodology-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { BackgroundParticles } from "@/components/background-particles"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <BackgroundParticles />
      <div className="relative z-10">
        <Header />
        <Hero />
        <PhilosophySection />
        <MethodologySection />
        <ServicesSection />
        <Footer />
      </div>
    </main>
  )
}
