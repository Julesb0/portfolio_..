"use client"

import Image from "next/image"
import { useState } from "react"
import { Mail, Send, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarField } from "@/sections/esferafondo"
import { useLanguage } from "@/components/language-provider"

export function ContactSection() {
  const { language } = useLanguage()
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
    alert(language === "es" ? "¡Mensaje enviado! Te contactaré pronto." : "Message sent! I will contact you soon.")
  }

  return (
    <section id="contacto" className="relative py-20 md:py-24">
      <StarField count={65} opacity={0.2} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[#a855f7]/20 blur-md" />
              <Mail className="relative w-5 h-5 text-[#f3e8ff]" />
            </div>
            <span className="text-sm text-[#f1f5f9]">{language === "es" ? "Contactame" : "Contact Me"}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
            <span className="text-[#f1f5f9]">{language === "es" ? "¿Tienes una idea en mente? " : "Do you have an idea in mind? "}</span>
            <span className="text-[#d8b4fe]">{language === "es" ? "Transformemosla" : "Let's turn it"}</span>
            <span className="text-[#f1f5f9]">{language === "es" ? " en una " : " into a "}</span>
            <span className="text-[#d8b4fe]">{language === "es" ? "experiencia" : "visual experience"}</span>
            <span className="text-[#f1f5f9]">{language === "es" ? " visual unica y funcional." : " that is unique and functional."}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#64748b] mb-2">
                  {language === "es" ? "Nombre" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#1e293b] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#7c3aed] transition-colors"
                  placeholder={language === "es" ? "Tu nombre" : "Your name"}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#64748b] mb-2">
                  {language === "es" ? "Correo" : "Email"}
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
                  {language === "es" ? "Mensaje" : "Message"}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#1e293b] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#7c3aed] transition-colors resize-none"
                  placeholder={language === "es" ? "Cuentame sobre tu proyecto..." : "Tell me about your project..."}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-md py-6 gap-2 text-base disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (language === "es" ? "Enviando..." : "Sending...") : (language === "es" ? "Enviar mensaje" : "Send message")}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Card */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md p-0 bg-transparent border-0">
              {/* Profile */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#cbd5e1] border border-[#94a3b8]/40 flex-shrink-0">
                  <Image
                    src="/7cef6379-3486-473a-8f85-43bc9cfd27e7.png"
                    alt="Foto de Julio Bolaños"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-[#f1f5f9]">Julio B. Benavides</h3>
                  <p className="text-[#7c3aed] font-mono text-sm">{language === "es" ? "Desarrollador de software" : "Software Developer"}</p>
                </div>
              </div>

              <p className="text-[#94a3b8] text-center mb-6">
                {language === "es"
                  ? "¿Estas listo para dar vida a tu proximo proyecto? Por favor, completa el "
                  : "Ready to bring your next project to life? Please complete the "}
                <span className="text-[#f1f5f9] font-medium">{language === "es" ? "formulario" : "form"}</span>
                {language === "es" ? " y cuentame tu idea. Estare encantado de ayudarte!" : " and tell me your idea. I would be glad to help!"}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-[#334155]" />
                <div className="text-center text-[#64748b] text-sm whitespace-nowrap">{language === "es" ? "o contactame por" : "or contact me via"}</div>
                <div className="h-px flex-1 bg-[#334155]" />
              </div>

              {/* Quick contact buttons */}
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:jul.b.benavides@gmail.com"
                  className="px-6 py-2 rounded-md bg-[#7c3aed] text-white flex items-center gap-2 hover:bg-[#6d28d9] transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/esteban-bolaños-641668387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-md bg-[#0077b5] text-white flex items-center gap-2 hover:bg-[#006097] transition-colors cursor-pointer"
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
