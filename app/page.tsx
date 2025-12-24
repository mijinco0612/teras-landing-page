import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PhilosophySection } from "@/components/philosophy-section"
import { MethodologySection } from "@/components/methodology-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PhilosophySection />
      <MethodologySection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
