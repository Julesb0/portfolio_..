"use client"

import { User, Globe, Heart, Lightbulb, GraduationCap } from "lucide-react"
import { StarField } from "@/sections/esferafondo"

const infoCards = [
  {
    title: "Idiomas",
    icon: Globe,
    items: [
      { label: "Español", value: "Nativo" },
      { label: "Inglés", value: "B2" },
    ],
  },
  {
    title: "Habilidades Blandas",
    icon: Heart,
    items: [
      { label: "Curioso" },
      { label: "Autodidacta" },
      { label: "Proactivo" },
    ],
  },
  {
    title: "Intereses",
    icon: Lightbulb,
    items: [
      { label: "Programación" },
      { label: "Edición" },
      { label: "Piano" },
      { label: "Ajedrez" },
      { label: "Fútbol" },
    ],
  },
  {
    title: "Educación",
    icon: GraduationCap,
    items: [
      { label: "Universidad Cooperativa de Colombia" },
      { label: "Ingeniería de Software" },
      { label: "Pasto, Nariño" },
    ],
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32 bg-[#0f172a]">
      <StarField count={30} opacity={0.2} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-5 h-5 text-[#10b981]" />
            <span className="font-mono text-sm text-[#64748b]">{"// 03 · SOBRE MÍ"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
            <span className="text-[#f1f5f9]">Soy un </span>
            <span className="text-[#10b981]">desarrollador de software</span>
            <span className="text-[#f1f5f9]"> especializado en </span>
            <span className="text-[#10b981]">Aplicaciones Web</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Bio */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#f1f5f9] mb-1">Julio Bolaños Benavides</h3>
              <p className="font-mono text-[#10b981]">Software Developer .</p>
            </div>

            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                Soy estudiante de{" "}
                <span className="text-[#10b981] font-medium">Ingeniería de Software</span> en la Universidad Cooperativa de Colombia. A lo largo de mi formación, he cultivado una mentalidad{" "}
                <span className="text-[#10b981] font-medium">proactiva y autodidacta</span>, participando en proyectos que me han permitido desarrollar{" "}
                <span className="text-[#10b981] font-medium">habilidades críticas y resolutivas</span>.
              </p>
              <p>
                Durante mi formación, he enfocado mi aprendizaje en la{" "}
                <span className="text-[#10b981] font-medium">arquitectura de sistemas</span> y el{" "}
                <span className="text-[#10b981] font-medium">rendimiento óptimo</span> para aplicaciones web. De manera independiente, he adquirido capacidades para desarrollar soluciones{" "}
                <span className="text-[#10b981] font-medium">accesibles y escalables</span>.
              </p>
            </div>

            {/* Illustration placeholder */}
            <div className="mt-8 hidden lg:block">
              <div className="w-full max-w-md h-64 bg-gradient-to-br from-[#10b981]/20 to-[#7c3aed]/20 rounded-2xl flex items-center justify-center border border-[#1e293b]">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-[#10b981]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-[#10b981]">JB</span>
                  </div>
                  <p className="text-[#64748b] text-sm">Desarrollador Frontend</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {infoCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="p-5 rounded-xl bg-[#111827] border border-[#1e293b] hover:border-[#10b981]/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-4 h-4 text-[#10b981]" />
                    <h4 className="font-mono text-sm text-[#10b981]">{card.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {card.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-[#f1f5f9] text-sm font-medium">{item.label}</span>
                        {item.value && (
                          <span className="text-[#64748b] text-sm">- {item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* University Card - Special */}
            <div className="sm:col-span-2 p-6 rounded-xl bg-[#111827] border border-[#1e293b]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c00] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#f1f5f9]">Universidad Cooperativa de Colombia</h4>
                  <p className="text-[#64748b]">Ingeniería de Software | 2022 - Presente</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-[#64748b]">
                    <span className="text-[#10b981]">●</span>
                    <span>Pasto, Nariño - Colombia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
