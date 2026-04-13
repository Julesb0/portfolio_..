"use client"

import { Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Diseñador UX/UI & Frontend Developer",
    company: "Proyecto Académico",
    period: "Mar 2025 - Actualidad",
    focus: "Enfoque en desarrollo de sistemas y optimización de software",
    description: [
      "Seleccionado entre un grupo de estudiantes de la universidad mediante un proceso de selección para participar en proyectos académicos relevantes.",
      "Responsable del diseño de interfaces de usuario, creando con Figma prototipos limpios, accesibles y visualmente atractivos.",
      "Desarrollo frontend usando tecnologías modernas como el framework Astro y Tailwind CSS para una estructura clara y maquetación rápida.",
    ],
    technologies: ["Figma", "Astro", "Tailwind CSS", "React"],
    color: "#f97316",
  },
  {
    id: 2,
    role: "Full-Stack & Diseñador UX/UI",
    company: "Plataforma Aneimera UCC",
    period: "Ago 2024 - Dic 2024",
    focus: "Gestión de equipos y desarrollo de plataformas web",
    description: [
      "Como Project Lead, gestioné el equipo usando la metodología SCRUM, estableciendo objetivos, priorizando tareas y facilitando reuniones semanales.",
      "Diseñé wireframes y prototipos interactivos en Figma para mejorar la experiencia del usuario, asegurando una navegación clara y eficiente.",
      "Desarrollé la integración entre el frontend en React y el backend en .NET, implementando la conexión eficiente para la gestión de eventos.",
    ],
    technologies: ["React", ".NET", "Figma", "SCRUM"],
    color: "#10b981",
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="relative py-24 md:py-32 overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 font-mono text-[#7c3aed] text-xs leading-4 whitespace-pre select-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="flex gap-4">
              {Array.from({ length: 20 }).map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? "1" : "0"}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-[#f97316]" />
            <span className="font-mono text-sm text-[#64748b]">{"// 04 · EXPERIENCIA LABORAL"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
            <span className="text-[#f97316]">Desarrollador Frontend</span>
            <span className="text-[#f1f5f9]"> dedicado a crear aplicaciones web y </span>
            <span className="text-[#f97316]">proyectos de impacto social</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f97316] via-[#7c3aed] to-[#10b981]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-12 md:pl-20">
                {/* Timeline Dot */}
                <div
                  className="absolute left-2 md:left-6 w-4 h-4 rounded-full border-4 border-[#0a0a0f]"
                  style={{
                    backgroundColor: exp.color,
                    boxShadow: `0 0 20px ${exp.color}`,
                  }}
                />

                {/* Content Card */}
                <div className="bg-[#111827] rounded-2xl border border-[#1e293b] p-6 md:p-8 hover:border-[#7c3aed]/50 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                        style={{
                          backgroundColor: `${exp.color}20`,
                          color: exp.color,
                        }}
                      >
                        {exp.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#f97316]">{exp.role}</h3>
                      <p className="text-[#64748b]">{exp.company}</p>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-[#0f172a] border border-[#1e293b] flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-8 h-8" style={{ color: exp.color }} />
                    </div>
                  </div>

                  {/* Focus */}
                  <p className="text-[#7c3aed] font-medium mb-4">{exp.focus}</p>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[#94a3b8]">
                        <span className="text-[#f97316] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#0f172a] border border-[#1e293b] text-[#64748b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
