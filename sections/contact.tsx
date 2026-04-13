"use client"

import { useState } from "react"
import { Mail, Send, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarField } from "@/sections/esferafondo"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    alert("¡Mensaje enviado! Te contactaré pronto.")
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <StarField count={65} opacity={0.2} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-[#7c3aed]" />
            <span className="text-sm text-[#f1f5f9]">Contáctame</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
            <span className="text-[#f1f5f9]">¿Tienes una idea en mente? </span>
            <span className="text-[#7c3aed]">Transformémosla</span>
            <span className="text-[#f1f5f9]"> en una </span>
            <span className="text-[#38bdf8]">experiencia</span>
            <span className="text-[#f1f5f9]"> visual única y funcional.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#64748b] mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#1e293b] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#7c3aed] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#64748b] mb-2">
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#1e293b] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#7c3aed] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#64748b] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#1e293b] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#7c3aed] transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full py-6 gap-2 text-base disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Card */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md p-0 bg-transparent border-0">
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#38bdf8] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JB</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#f1f5f9]">Julio Bolaños</h3>
                  <p className="text-[#7c3aed] font-mono text-sm">Desarrollador Frontend</p>
                </div>
              </div>

              <p className="text-[#94a3b8] text-center mb-6">
                ¿Estás listo para dar vida a tu próximo proyecto? Por favor, completa el{" "}
                <span className="text-[#f1f5f9] font-medium">formulario</span> y cuéntame tu idea. ¡Estaré encantado de ayudarte!
              </p>

              <div className="text-center text-[#64748b] text-sm mb-4">o contáctame por</div>

              {/* Quick contact buttons */}
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:jul.b.benavides@gmail.com"
                  className="px-6 py-2 rounded-full bg-[#7c3aed] text-white flex items-center gap-2 hover:bg-[#6d28d9] transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/esteban-bolaños-641668387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-[#0077b5] text-white flex items-center gap-2 hover:bg-[#006097] transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
