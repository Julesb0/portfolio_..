"use client"

import { useState } from "react"
import { MessageSquare, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarField } from "@/sections/esferafondo"
import { useLanguage } from "@/components/language-provider"

const testimonials = [
  {
    id: 1,
    content:
      "Trabajar con Julio no es solo \"hacer código y ya\". El man siempre está pensando en cómo mejorar lo que ya funciona. A veces puede ser intenso con los detalles, pero al final uno entiende por qué: le gusta que las cosas queden bien hechas de verdad. Además, no es de esos que se guardan el conocimiento, siempre explica sin hacerte sentir bruto.",
    author: "Nicolás Bastidas",
    role: "",
    initials: "NB",
    color: "#7c3aed",
  },
  {
    id: 2,
    content:
      "Lo que más destaco de trabajar con Julio es que no se queda quieto. Si algo no le sale, insiste hasta que lo entiende o lo hace funcionar. Puedes llegar con una propuesta y la analiza de verdad, no te la descarta por ego.",
    author: "William Inzandara",
    role: "",
    initials: "WI",
    color: "#38bdf8",
  },
  {
    id: 3,
    content:
      "Con Julio programar se siente más como construir algo en serio que como cumplir una tarea. El tipo se mete en el proyecto, le importa cómo se ve, cómo se usa y hasta cómo lo va a entender otra persona después. Algo que me marcó fue que siempre piensa en el usuario final, no solo en que el código funcione. Y en equipo es firme, si ve algo mal lo dice, pero con la intención de mejorar, no de criticar por criticar. Eso hace que uno también suba el nivel.",
    author: "Khaled Benavides",
    role: "",
    initials: "KB",
    color: "#10b981",
  },
]

export function TestimonialsSection() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="relative py-20 md:py-24">
      <StarField count={55} opacity={0.2} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[#7c3aed]/20 blur-md" />
              <MessageSquare className="relative w-5 h-5 text-[#ddd6fe]" />
            </div>
            <span className="text-sm text-[#f1f5f9]">{language === "es" ? "Testimonios" : "Testimonials"}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
            <span className="text-[#f1f5f9]">{language === "es" ? "Lo que dicen sobre " : "What people say about "}</span>
            <span className="text-[#7c3aed]">{language === "es" ? "mi trabajo" : "my work"}</span>
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-6 rounded-2xl bg-[#111827]/35 border border-[#1e293b] hover:border-[#7c3aed]/50 transition-colors"
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl"
                style={{
                  background: `linear-gradient(135deg, ${testimonial.color}20 0%, transparent 50%)`,
                }}
              />

              {/* Quote icon */}
              <Quote
                className="w-8 h-8 mb-4"
                style={{ color: testimonial.color }}
              />

              {/* Content */}
              <p className="text-[#94a3b8] leading-relaxed mb-6">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-[#f1f5f9] font-medium">{testimonial.author}</p>
                  {testimonial.role ? <p className="text-[#64748b] text-sm">{testimonial.role}</p> : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative p-6 rounded-2xl bg-[#111827]/35 border border-[#1e293b]">
            {/* Accent corner */}
            <div
              className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl"
              style={{
                background: `linear-gradient(135deg, ${testimonials[currentIndex].color}20 0%, transparent 50%)`,
              }}
            />

            {/* Quote icon */}
            <Quote
              className="w-8 h-8 mb-4"
              style={{ color: testimonials[currentIndex].color }}
            />

            {/* Content */}
            <p className="text-[#94a3b8] leading-relaxed mb-6">{testimonials[currentIndex].content}</p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: testimonials[currentIndex].color }}
              >
                {testimonials[currentIndex].initials}
              </div>
              <div>
                <p className="text-[#f1f5f9] font-medium">{testimonials[currentIndex].author}</p>
                {testimonials[currentIndex].role ? <p className="text-[#64748b] text-sm">{testimonials[currentIndex].role}</p> : null}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-[#1e293b] hover:bg-[#1e293b] cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    index === currentIndex ? "bg-[#7c3aed]" : "bg-[#1e293b]"
                  }`}
                  aria-label={
                    language === "es"
                      ? `Ir al testimonio ${index + 1}`
                      : `Go to testimonial ${index + 1}`
                  }
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-[#1e293b] hover:bg-[#1e293b] cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
