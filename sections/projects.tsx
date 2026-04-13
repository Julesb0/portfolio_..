"use client"

import Image from "next/image"
import { FolderOpen, Search, Github } from "lucide-react"
import { StarField } from "@/sections/esferafondo"
import { useLanguage } from "@/components/language-provider"

interface TechIcon {
  name: string
  bg: string
  letter: string
  color: string
}

interface Project {
  id: string
  title: string
  description: string
  bannerBg: string
  bannerLabel: string
  bannerLabelColor: string
  previewBg: string
  images?: {
    cover?: string
  }
  techs: TechIcon[]
  demoUrl: string
  codeUrl: string
}

const projects: Project[] = [
  {
    id: "01",
    title: "Clon Inicial Mercado Libre",
    description:
      "Clon inicial de la interfaz de Mercado Libre enfocado en maquetación responsive y estructura de e-commerce. Incluye navegación principal, secciones de productos destacadas y base visual para futuras funcionalidades.",
    bannerBg: "linear-gradient(135deg, #facc15 0%, #fde047 50%, #fef08a 100%)",
    bannerLabel: "Clon Mercado Libre",
    bannerLabelColor: "#1f2937",
    previewBg: "#fef9c3",
    images: {
      cover: "/mercadolibre.png",
    },
    techs: [
      { name: "Astro", bg: "#ff5d01", letter: "A", color: "#fff" },
      { name: "React", bg: "#61dafb", letter: "R", color: "#000" },
      { name: "CSS", bg: "#1572b6", letter: "C", color: "#fff" },
      { name: "TS", bg: "#3178c6", letter: "TS", color: "#fff" },
    ],
    demoUrl: "https://clon-inicial-mercado-libre.vercel.app/",
    codeUrl: "https://github.com/Julesb0/clon-inicial-MercadoLibre.git",
  },
  {
    id: "02",
    title: "Mentes Creativas",
    description:
      "Plataforma educativa interactiva orientada al aprendizaje de matemáticas, ciencias naturales y tecnología mediante experiencias 3D inmersivas. Incluye módulos como sistema solar, formas 3D y simetría para aprendizaje lúdico.",
    bannerBg: "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 50%, #8b5cf6 100%)",
    bannerLabel: "Mentes Creativas",
    bannerLabelColor: "#082f49",
    previewBg: "#dbeafe",
    images: {
      cover: "/MentesCreativas.png",
    },
    techs: [
      { name: "React", bg: "#61dafb", letter: "R", color: "#000" },
      { name: "TypeScript", bg: "#3178c6", letter: "TS", color: "#fff" },
      { name: "Three.js", bg: "#111827", letter: "3D", color: "#fff" },
      { name: "Vite", bg: "#7c3aed", letter: "V", color: "#fff" },
    ],
    demoUrl: "https://mentes-creativas4.vercel.app",
    codeUrl: "https://github.com/Julesb0/MentesCreativas4.git",
  },
]

function ProjectCard({ project, language }: { project: Project; language: "es" | "en" }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-[#0f172a] border border-[#1e293b] hover:border-[#334155] transition-all duration-300 group">
      {/* Banner / Preview Image */}
      <div
        className="relative h-60 sm:h-72 flex flex-col items-start justify-end p-5 overflow-hidden"
        style={{ background: project.bannerBg }}
      >
        {/* Project label inside banner */}
        <div className="relative z-10 flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <FolderOpen className="w-3.5 h-3.5 text-white" />
          </div>
          <span
            className="text-base font-bold italic"
            style={{ color: project.bannerLabelColor }}
          >
            {project.bannerLabel}
          </span>
        </div>

        {/* Mock UI preview */}
        <div
          className="absolute z-10 inset-x-4 bottom-0 top-14 rounded-t-lg overflow-hidden shadow-xl"
          style={{ background: project.previewBg }}
        >
          {project.images?.cover ? (
            <>
              <Image
                src={project.images.cover}
                alt={`Portada de ${project.title}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={project.title === "Mentes Creativas"}
              />
              <div className="absolute inset-0 bg-black/10" />
            </>
          ) : (
            <div className="flex flex-col gap-1 p-3 h-full">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="h-2 rounded bg-white/60 w-3/4" />
              <div className="h-2 rounded bg-white/40 w-1/2 mt-1" />
              <div className="flex gap-2 mt-3">
                <div className="h-16 rounded bg-white/50 flex-1" />
                <div className="h-16 rounded bg-white/30 flex-1" />
              </div>
              <div className="h-2 rounded bg-white/40 w-2/3 mt-2" />
              <div className="h-2 rounded bg-white/30 w-1/2" />
            </div>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <h3 className="text-lg font-bold text-[#f1f5f9]">{project.title}</h3>
        <p className="text-sm text-[#64748b] leading-relaxed line-clamp-3">{project.description}</p>

        {/* Footer row: tech icons + Explorar button */}
        <div className="flex items-center justify-between mt-auto pt-2">
          {/* Tech icon stack */}
          <div className="flex items-center gap-1.5">
            {project.techs.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-[#0f172a]"
                style={{ background: tech.bg, color: tech.color }}
              >
                {tech.letter}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#334155] text-sm font-semibold text-[#f1f5f9] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all cursor-pointer"
            >
              {language === "es" ? "Codigo" : "Code"}
              <Github className="w-3.5 h-3.5" />
            </a>

            {/* Explorar button */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#334155] text-sm font-semibold text-[#f1f5f9] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all cursor-pointer"
            >
              {language === "es" ? "Explorar" : "Explore"}
              <Search className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { language } = useLanguage()

  return (
    <section id="proyectos" className="relative py-20 md:py-24">
      <StarField count={55} opacity={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[#60a5fa]/20 blur-md" />
              <FolderOpen className="relative w-5 h-5 text-[#dbeafe]" />
            </div>
            <span className="text-sm text-[#f1f5f9]">{language === "es" ? "Proyectos" : "Projects"}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-[#f1f5f9] max-w-3xl">
            {language === "es" ? "Algunos de mis " : "Some of my "}
            <span className="text-[#93c5fd]">{language === "es" ? "proyectos destacados" : "featured projects"}</span>{" "}
            {language === "es" ? "como desarrollador full-stack" : "as a full-stack developer"}
          </h2>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} language={language} />
          ))}
        </div>
      </div>
    </section>
  )
}
