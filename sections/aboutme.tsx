"use client"

import { User, MapPin } from "lucide-react"
import { StarField } from "../components/star-field"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32">
      <StarField count={30} opacity={0.18} />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Top divider + label */}
        <div className="mb-10">
          <div className="w-8 h-0.5 bg-[#334155] mb-6" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#334155] flex items-center justify-center">
              <User className="w-4 h-4 text-[#f1f5f9]" />
            </div>
            <span className="text-[#f1f5f9] text-base font-medium tracking-wide">Sobre Mí</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12 text-balance">
          <span className="text-[#f1f5f9]">Soy un </span>
          <span className="text-[#4ade80]">desarrollador de software</span>
          <br />
          <span className="text-[#f1f5f9]">especializado en </span>
          <span className="text-[#4ade80]">Aplicaciones Web</span>
        </h2>

        {/* Bio row: text left, photo right */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16">
          {/* Left: name + role + bio */}
          <div className="flex-1 max-w-xl">
            <p className="text-[#f1f5f9] font-bold text-lg mb-1">Julio Esteban Bolaños Benavides</p>
            <p className="text-[#4ade80] text-sm font-medium mb-5">Desarrollador Frontend</p>

            <div className="space-y-4 text-[#94a3b8] text-sm leading-relaxed">
              <p>
                Soy estudiante de Ingeniería de Software y actualmente me encuentro en los semestres intermedios de mi carrera. A lo largo de mi formación, he cultivado una mentalidad proactiva y autodidacta, participando en{" "}
                <strong className="text-[#f1f5f9]">proyectos académicos</strong> y{" "}
                <strong className="text-[#f1f5f9]">trabajos colaborativos</strong> que me han permitido desarrollar habilidades blandas y técnicas.
              </p>
              <p>
                Durante mi formación, he enfocado mi aprendizaje en el diseño centrado en el usuario y el rendimiento óptimo para aplicaciones web y móviles. De manera autodidacta, he adquirido habilidades para desarrollar soluciones{" "}
                <strong className="text-[#f1f5f9]">accesibles y escalables</strong>.
              </p>
            </div>
          </div>

          {/* Right: photo */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className="w-56 h-64 rounded-2xl overflow-hidden border border-[#1e293b] bg-[#111827] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#4ade80] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JB</span>
                </div>
                <span className="text-[#64748b] text-xs">Julio Bolaños</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info grid: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#1e293b]">

          {/* Column 1: Idiomas + Habilidades Blandas */}
          <div className="border-b md:border-b-0 md:border-r border-[#1e293b] pr-0 md:pr-8 py-8">
            {/* Idiomas */}
            <div className="mb-8">
              <p className="text-[#4ade80] text-sm font-semibold mb-3 tracking-wide">Idiomas</p>
              <div className="w-full h-px bg-[#1e293b] mb-4" />
              <p className="text-[#f1f5f9] text-sm">
                <strong>Español</strong> - Nativo &nbsp;&nbsp;
                <strong>Inglés</strong> - B1
              </p>
            </div>

            {/* Habilidades Blandas */}
            <div>
              <p className="text-[#4ade80] text-sm font-semibold mb-3 tracking-wide">Habilidades Blandas</p>
              <div className="w-full h-px bg-[#1e293b] mb-4" />
              <p className="text-[#f1f5f9] text-sm">Creativo - Proactivo - Autodidacta</p>
            </div>
          </div>

          {/* Column 2: Voluntariado + Intereses */}
          <div className="border-b md:border-b-0 md:border-r border-[#1e293b] px-0 md:px-8 py-8">
            {/* Voluntariado */}
            <div className="mb-8">
              <p className="text-[#4ade80] text-sm font-semibold mb-3 tracking-wide">Voluntariado</p>
              <div className="w-full h-px bg-[#1e293b] mb-4" />
              <p className="text-[#f1f5f9] text-sm">
                Representante estudiantil - Consejo Estudiantil UCC
              </p>
            </div>

            {/* Intereses */}
            <div>
              <p className="text-[#4ade80] text-sm font-semibold mb-3 tracking-wide">Intereses</p>
              <div className="w-full h-px bg-[#1e293b] mb-4" />
              <p className="text-[#f1f5f9] text-sm">Programación - Diseño UX/UI - Música - Fútbol</p>
            </div>
          </div>

          {/* Column 3: Educación */}
          <div className="pl-0 md:pl-8 py-8">
            <p className="text-[#4ade80] text-sm font-semibold mb-3 tracking-wide">Educación</p>
            <div className="w-full h-px bg-[#1e293b] mb-6" />

            <div className="flex items-start gap-4">
              {/* University logo placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#2563eb] flex-shrink-0 flex items-center justify-center border border-[#334155]">
                <span className="text-white text-xs font-bold leading-none text-center">UCC</span>
              </div>

              <div>
                <a
                  href="https://www.ucc.edu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f1f5f9] font-bold text-sm hover:text-[#4ade80] transition-colors underline-offset-2 hover:underline cursor-pointer"
                >
                  Universidad Cooperativa de Colombia
                </a>
                <p className="text-[#64748b] text-xs mt-1">Ingeniería de Software | 2022 - Presente</p>
                <div className="flex items-center gap-1.5 mt-2 text-[#64748b] text-xs">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span>Pasto, Nariño - Colombia</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
