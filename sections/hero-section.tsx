"use client"

import { useEffect, useState, useCallback } from "react"
import { Download, Github, Linkedin, Youtube, ChevronDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const titles = ["Software Developer", "Frontend Developer", "UI/UX Designer"]

function TypewriterText() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false)
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        return
      }
      const timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1))
      }, 50)
      return () => clearTimeout(timeout)
    }

    if (displayText === currentTitle) {
      setIsPaused(true)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentTitle.slice(0, displayText.length + 1))
    }, 100)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, currentTitleIndex])

  return (
    <div className="font-mono text-xl md:text-2xl flex items-center gap-1 text-[#f1f5f9]">
      <span className="text-[#64748b]">{"<"}</span>
      <span>{displayText}</span>
      <span className="w-0.5 h-6 bg-[#f1f5f9] animate-pulse inline-block" />
      <span className="text-[#64748b]">{" />"}</span>
    </div>
  )
}

function StarField() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 4,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            opacity: 0.25,
          }}
        />
      ))}
    </div>
  )
}

const socialLinks = [
  { href: "https://linkedin.com/in/esteban-bolaños-641668387", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/Julesb0", label: "GitHub", icon: Github },
  { href: "mailto:julioestebanb0@gmail.com", label: "Email", icon: Mail },
  { href: "#", label: "YouTube", icon: Youtube },
]

export function HeroSection() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a1a]">
      <StarField />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
        {/* Avatar row */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-[#1e293b] border-2 border-[#334155] flex items-center justify-center overflow-hidden flex-shrink-0">
            <span className="text-xl font-bold text-[#7c3aed]">JB</span>
          </div>
          <div className="flex items-center gap-2 border border-[#334155] rounded-full px-4 py-1.5 text-sm text-[#f1f5f9]">
            <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
            Disponible para trabajar
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f1f5f9] mb-4 leading-tight">
          Hola, soy{" "}
          <span className="text-[#7c3aed]">Julio Bolaños</span>
        </h1>

        {/* Typewriter */}
        <div className="mb-6">
          <TypewriterText />
        </div>

        {/* Bio */}
        <p className="text-[#94a3b8] text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          Estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia y desarrollador autodidacta con experiencia en Frontend y Diseño UX/UI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => scrollToSection("contacto")}
            className="bg-[#f1f5f9] hover:bg-white text-[#0a0a1a] font-semibold px-6 py-5 gap-2 text-sm rounded-md cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Contáctame
          </Button>
          <Button
            variant="outline"
            className="border-[#334155] text-[#f1f5f9] hover:bg-[#1e293b] px-6 py-5 gap-2 text-sm rounded-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Descargar CV
          </Button>
        </div>
      </div>

      {/* Fixed Social Icons - Right side */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-[#111827] border border-[#1e293b] text-[#f1f5f9] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all cursor-pointer"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("sobre-mi")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#475569] hover:text-[#7c3aed] transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 animate-bounce-arrow" />
      </button>
    </section>
  )
}
