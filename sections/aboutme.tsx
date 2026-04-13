"use client"

import Image from "next/image"
import { User, MapPin } from "lucide-react"
import { StarField } from "../components/star-field"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="relative py-20 md:py-24">
      <StarField count={50} opacity={0.18} />

      <div className="relative max-w-7xl mx-auto px-8">

        {/* Top divider + label */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[#4ade80]/20 blur-md" />
              <User className="relative w-5 h-5 text-[#dcfce7]" />
            </div>
            <span className="text-[#f1f5f9] text-base font-medium tracking-wide">Sobre Mí</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-12 text-balance">
          <span className="text-[#f1f5f9]">Soy un </span>
          <span className="text-[#4ade80]">desarrollador de software</span>
          <br />
          <span className="text-[#f1f5f9]">especializado en </span>
          <span className="text-[#4ade80]">Aplicaciones Web</span>
        </h2>

        {/* Bio row: text left, photo right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-10 mb-10">
          {/* Left: name + role + bio */}
          <div className="flex-1 lg:max-w-4xl">
            <p className="text-[#f1f5f9] font-bold text-lg mb-1">Julio Esteban Bolaños Benavides</p>
            <p className="text-[#4ade80] text-sm font-medium mb-5">Desarrollador Frontend</p>

            <div className="space-y-4 text-[#94a3b8] text-sm leading-relaxed lg:max-w-2xl">
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
          <div className="flex-shrink-0 flex justify-center lg:justify-end lg:ml-auto lg:mr-6">
            <div className="w-56 h-64 rounded-2xl overflow-hidden border border-[#1e293b] bg-[#111827]">
              <Image
                src="/FotoPortfolio.png"
                alt="Foto de Julio Bolaños"
                width={224}
                height={256}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom info grid: left details + education */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

          {/* Left block: aligned rows between columns */}
          <div className="md:col-span-2 py-6 md:py-8 md:pr-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">

              {/* Row 1 */}
              <div className="py-3 md:py-0">
                <p className="text-[#4ade80] text-sm font-semibold mb-3 tracking-wide">Idiomas</p>
                <div className="w-full h-px bg-[#1e293b] mb-4" />
                <p className="text-[#f1f5f9] text-sm">
                  <strong>Español</strong> - Nativo &nbsp;&nbsp;
                  <strong>Inglés</strong> - B1
                </p>
              </div>

              <div className="py-3 md:py-0">
                <p className="text-[#4ade80] text-sm font-semibold mb-3 tracking-wide">Intereses</p>
                <div className="w-full h-px bg-[#1e293b] mb-4" />
                <p className="text-[#f1f5f9] text-sm">Programación - Diseño UX/UI - Música - Fútbol</p>
              </div>

              {/* Row 2 */}
              <div className="py-3 md:py-0 md:col-span-2">
                <p className="text-[#4ade80] text-sm font-semibold mb-3 tracking-wide">Habilidades Blandas</p>
                <div className="w-full h-px bg-[#1e293b] mb-4" />
                <p className="text-[#f1f5f9] text-sm">Creativo - Proactivo - Autodidacta</p>
              </div>
            </div>
          </div>

          {/* Right block: educación */}
          <div className="pl-0 md:pl-8 py-6 md:py-8">
            <p className="text-[#4ade80] text-sm font-semibold mb-3 tracking-wide">Educación</p>
            <div className="w-full h-px bg-[#1e293b] mb-6" />

            <div className="flex items-start gap-4">
              {/* University logo */}
              <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/logo_ucc_2018(CURVAS)-01.png"
                  alt="Logo Universidad Cooperativa de Colombia"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
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
