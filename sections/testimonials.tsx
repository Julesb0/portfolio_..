"use client"

import { useState } from "react"
import { MessageSquare, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarField } from "@/sections/esferafondo"

const testimonials = [
  {
    id: 1,
    content:
      "Julio demostró ser un desarrollador excepcional durante nuestro proyecto conjunto. Su capacidad para resolver problemas complejos y su atención al detalle son impresionantes. Siempre dispuesto a ayudar y compartir conocimientos.",
    author: "Compañero de clase",
    role: "Estudiante de Ingeniería de Software",
    initials: "CC",
    color: "#7c3aed",
  },
  {
    id: 2,
    content:
      "Como profesor, he visto a muchos estudiantes, pero Julio destaca por su compromiso con el aprendizaje continuo y su capacidad para aplicar conceptos teóricos en proyectos prácticos. Un futuro prometedor en la industria del software.",
    author: "Profesor Universidad",
    role: "Docente de Programación",
    initials: "PU",
    color: "#38bdf8",
  },
  {
    id: 3,
    content:
      "Trabajar con Julio en el proyecto de Aneimera fue una experiencia enriquecedora. Su liderazgo técnico y habilidades de comunicación facilitaron el trabajo en equipo. Entrega resultados de alta calidad en tiempo récord.",
    author: "Colaborador de proyecto",
    role: "Desarrollador Backend",
    initials: "CP",
    color: "#10b981",
  },
]

export function TestimonialsSection() {
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
            <MessageSquare className="w-5 h-5 text-[#7c3aed]" />
            <span className="text-sm text-[#f1f5f9]">Testimonios</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
            <span className="text-[#f1f5f9]">Lo que dicen sobre </span>
            <span className="text-[#7c3aed]">mi trabajo</span>
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-6 rounded-2xl bg-[#111827] border border-[#1e293b] hover:border-[#7c3aed]/50 transition-colors"
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
                  <p className="text-[#64748b] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative p-6 rounded-2xl bg-[#111827] border border-[#1e293b]">
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
                <p className="text-[#64748b] text-sm">{testimonials[currentIndex].role}</p>
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
                  aria-label={`Go to testimonial ${index + 1}`}
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
