"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Particle {
      bandIndex: number
      position: number
      speed: number
      radiusOffset: number
      phaseOffset: number
      weaveFreq: number
      drift: number
      hue: number
    }

    const particles: Particle[] = []
    const particleCount = 250
    const numBands = 3

    // Initialize particles with random offsets for organic motion
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        bandIndex: i % numBands,
        position: (i / particleCount) * Math.PI * 2,
        speed: 0.00005 + Math.pow(Math.random(), 3) * 0.012,
        radiusOffset: (Math.random() - 0.5) * 0.5,
        phaseOffset: Math.random() * Math.PI * 2,
        weaveFreq: 1.5 + Math.random() * 4,
        drift: (Math.random() - 0.5) * 0.001,
        hue: Math.random() * 360,
      })
    }

    let time = 0
    let animationFrame: number

    // Function to calculate position on intertwined band
    const getBandPosition = (particle: Particle, time: number) => {
      const cx = canvas.width / 2
      const isMobile = canvas.width < 768
      const cy = isMobile ? canvas.height * 0.35 : canvas.height / 2
      const r = Math.min(canvas.width, canvas.height) * 0.45

      const bandPhase = (particle.bandIndex / numBands) * Math.PI * 2
      const weaveOffset = Math.sin(particle.position * particle.weaveFreq + bandPhase + particle.phaseOffset) * r * 0.25

      const angle = particle.position + time * 0.5
      const radius = r * (1 + particle.radiusOffset) + weaveOffset

      const weaveFactor = Math.sin(angle * particle.weaveFreq + particle.phaseOffset) * r * 0.2
      const noise1 = Math.sin(time * 2.3 + particle.phaseOffset) * r * 0.08
      const noise2 = Math.cos(time * 1.7 + particle.phaseOffset * 1.3) * r * 0.06

      const x = cx + Math.cos(angle) * radius + Math.cos(angle + Math.PI / 2) * weaveFactor + noise1
      const y = cy + Math.sin(angle) * radius + Math.sin(angle + Math.PI / 2) * weaveFactor + noise2

      return { x, y }
    }

    const animate = () => {
      // Clear canvas with subtle fade
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      const isMobile = canvas.width < 768
      const particleOpacity = isMobile ? 0.15 : 0.4
      const lineOpacity = isMobile ? 0.03 : 0.08

      particles.forEach((particle) => {
        particle.position += particle.speed + particle.drift * Math.sin(time + particle.phaseOffset)

        const pos = getBandPosition(particle, time)

        const hue = (particle.hue + time * 20) % 360
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, 80%, 55%, ${particleOpacity})`
        ctx.fill()
      })

      // Draw connecting lines between particles on the same band
      for (let bandIndex = 0; bandIndex < numBands; bandIndex++) {
        const bandParticles = particles.filter((p) => p.bandIndex === bandIndex)

        for (let i = 0; i < bandParticles.length - 1; i++) {
          const p1 = bandParticles[i]
          const p2 = bandParticles[i + 1]

          const pos1 = getBandPosition(p1, time)
          const pos2 = getBandPosition(p2, time)

          const distance = Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2))

          const baseRadius = Math.min(canvas.width, canvas.height) * 0.45
          if (distance < baseRadius * 0.5) {
            const lineHue = (p1.hue + time * 20) % 360
            ctx.strokeStyle = `hsla(${lineHue}, 70%, 60%, ${lineOpacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(pos1.x, pos1.y)
            ctx.lineTo(pos2.x, pos2.y)
            ctx.stroke()
          }
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Generative art background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo placement */}
          <div className="space-y-8">
            <img src="/teras-logo.svg" alt="TERAS" className="h-10 md:h-14 lg:h-16 mx-auto" />

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed text-balance">
              複雑さに秩序をもたらす力
            </h1>

            <p className="text-sm md:text-base lg:text-lg font-light text-foreground leading-relaxed max-w-3xl mx-auto text-balance">
              混沌とした複雑性を、明確な構造へと変える。
              <br />
              開発を通じて、システムと組織に秩序と美しさをもたらす。
            </p>
          </div>

          <div className="pt-12 space-y-4">
            <p className="text-base md:text-lg font-light text-foreground italic">
              The power to tame complexity and create structure.
            </p>
            <p className="text-xs md:text-sm font-light text-foreground max-w-2xl mx-auto leading-relaxed">
              We transform chaotic complexity into clear structure. Through development, we bring order and beauty to
              your systems.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade to create "the void" */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
