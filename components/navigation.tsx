"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X, Download, Home, FolderOpen, User, Code2, MessageSquare, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const navItems = [
  {
    id: "inicio",
    label: { es: "Inicio", en: "Home" },
    icon: Home,
  },
  {
    id: "proyectos",
    label: { es: "Proyectos", en: "Projects" },
    icon: FolderOpen,
  },
  {
    id: "sobre-mi",
    label: { es: "Sobre Mí", en: "About Me" },
    icon: User,
  },
  {
    id: "skills",
    label: { es: "Skills", en: "Skills" },
    icon: Code2,
  },
  {
    id: "testimonios",
    label: { es: "Testimonios", en: "Testimonials" },
    icon: MessageSquare,
  },
  {
    id: "contacto",
    label: { es: "Contacto", en: "Contact" },
    icon: Mail,
  },
]

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%"

function DecodeText({ text, isHovered }: { text: string; isHovered: boolean }) {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text)
      return
    }

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join("")
      )

      if (iteration >= text.length) {
        clearInterval(interval)
      }

      iteration += 1 / 2
    }, 30)

    return () => clearInterval(interval)
  }, [isHovered, text])

  return <span className="font-mono">{displayText}</span>
}

export function Navigation() {
  const { language, toggleLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-[#1e293b]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="font-mono text-2xl font-bold text-[#7c3aed] hover:text-[#38bdf8] transition-colors cursor-pointer"
          >
            JB
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-3 py-2 text-sm flex items-center gap-2 transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? "text-[#7c3aed]"
                      : "text-[#64748b] hover:text-[#f1f5f9]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <DecodeText text={item.label[language]} isHovered={hoveredItem === item.id} />
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#7c3aed] rounded-full" />
                  )}
                </button>
              )
            })}

            <button
              onClick={toggleLanguage}
              className="ml-2 px-3 py-2 text-xs font-mono rounded-md border border-[#334155] text-[#cbd5e1] hover:border-[#7c3aed] hover:text-[#f1f5f9] transition-colors cursor-pointer"
              aria-label={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              size="sm"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full px-4 gap-2"
            >
              <Download className="w-4 h-4" />
              {language === "es" ? "Descargar CV" : "Download CV"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#f1f5f9] hover:text-[#7c3aed] transition-colors cursor-pointer"
            aria-label={
              isOpen
                ? language === "es"
                  ? "Cerrar menú"
                  : "Close menu"
                : language === "es"
                  ? "Abrir menú"
                  : "Open menu"
            }
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden glass ${
          isOpen ? "max-h-[500px] border-b border-[#1e293b]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "bg-[#7c3aed]/20 text-[#7c3aed]"
                    : "text-[#64748b] hover:text-[#f1f5f9] hover:bg-[#1e293b]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-mono">{item.label[language]}</span>
              </button>
            )
          })}
          <button
            onClick={toggleLanguage}
            className="w-full mt-2 px-4 py-3 rounded-lg border border-[#334155] text-[#cbd5e1] hover:text-[#f1f5f9] hover:border-[#7c3aed] transition-colors font-mono text-sm cursor-pointer"
          >
            {language === "es" ? "Cambiar a EN" : "Switch to ES"}
          </button>
          <Button
            className="w-full mt-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full gap-2"
          >
            <Download className="w-4 h-4" />
            {language === "es" ? "Descargar CV" : "Download CV"}
          </Button>
        </div>
      </div>
    </nav>
  )
}
