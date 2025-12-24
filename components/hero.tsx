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
    }

    const particles: Particle[] = []
    const particleCount = 70
    const numBands = 3
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const baseRadius = Math.min(canvas.width, canvas.height) * 0.35

    // Initialize particles distributed across the three bands
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        bandIndex: i % numBands,
        position: (i / particleCount) * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.003,
      })
    }

    let time = 0
    let animationFrame: number

    // Function to calculate position on intertwined band
    const getBandPosition = (bandIndex: number, position: number, time: number) => {
      const phaseOffset = (bandIndex / numBands) * Math.PI * 2
      const weaveOffset = Math.sin(position * 3 + phaseOffset) * baseRadius * 0.15

      const angle = position + time * 0.5
      const radius = baseRadius + weaveOffset

      const weaveFactor = Math.sin(angle * 3 + phaseOffset) * baseRadius * 0.12

      const x = centerX + Math.cos(angle) * radius + Math.cos(angle + Math.PI / 2) * weaveFactor
      const y = centerY + Math.sin(angle) * radius + Math.sin(angle + Math.PI / 2) * weaveFactor

      return { x, y }
    }

    const animate = () => {
      // Clear canvas with subtle fade
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      const currentCenterX = canvas.width / 2
      const currentCenterY = canvas.height / 2

      particles.forEach((particle) => {
        particle.position += particle.speed

        const pos = getBandPosition(particle.bandIndex, particle.position, time)

        const opacity = 0.12 + (particle.bandIndex / numBands) * 0.08
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`
        ctx.fill()
      })

      // Draw connecting lines between particles on the same band
      for (let bandIndex = 0; bandIndex < numBands; bandIndex++) {
        const bandParticles = particles.filter((p) => p.bandIndex === bandIndex)

        for (let i = 0; i < bandParticles.length - 1; i++) {
          const p1 = bandParticles[i]
          const p2 = bandParticles[i + 1]

          const pos1 = getBandPosition(p1.bandIndex, p1.position, time)
          const pos2 = getBandPosition(p2.bandIndex, p2.position, time)

          const distance = Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2))

          if (distance < baseRadius * 0.5) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 + (bandIndex / numBands) * 0.03})`
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
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">TERAS</div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/90 leading-relaxed text-balance">
              複雑さに秩序をもたらす、怪物として。
            </h1>

            <p className="text-sm md:text-base lg:text-lg font-light text-foreground/60 leading-relaxed max-w-3xl mx-auto text-balance">
              混沌とした複雑性を、明確な構造へと変える。
              <br />
              開発を通じて、システムに秩序と美しさをもたらす。
            </p>
          </div>

          <div className="pt-12 space-y-4">
            <p className="text-base md:text-lg font-light text-foreground/50 italic">
              A monster that brings order to complexity.
            </p>
            <p className="text-xs md:text-sm font-light text-foreground/40 max-w-2xl mx-auto leading-relaxed">
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
