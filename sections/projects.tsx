"use client"

import { FolderOpen, Search } from "lucide-react"
import { StarField } from "@/sections/esferafondo"

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
  techs: TechIcon[]
  demoUrl: string
}

const projects: Project[] = [
  {
    id: "01",
    title: "Aid Manager Web",
    description:
      "Diseñada para equipos enfocados en el impacto social, esta plataforma facilita la gestión de proyectos benéficos mediante herramientas para coordinar tareas, asignar recursos y obtener análisis en tiempo real que optimizan cada iniciativa.",
    bannerBg: "linear-gradient(135deg, #16a34a 0%, #4ade80 50%, #bbf7d0 100%)",
    bannerLabel: "Aid Manager Web",
    bannerLabelColor: "#14532d",
    previewBg: "#dcfce7",
    techs: [
      { name: "Vue.js", bg: "#42b883", letter: "V", color: "#fff" },
      { name: "JavaScript", bg: "#f7df1e", letter: "JS", color: "#000" },
      { name: "C#", bg: "#68217a", letter: "C#", color: "#fff" },
      { name: ".NET", bg: "#512bd4", letter: ".", color: "#fff" },
    ],
    demoUrl: "#",
  },
  {
    id: "02",
    title: "Spotify Clone",
    description:
      "Basado en la plataforma de música más popular, este clon recrea la experiencia de usuario de Spotify, incorporando funcionalidades como reproducción en tiempo real, gestión de playlists y exploración de artistas con interfaz responsive.",
    bannerBg: "linear-gradient(135deg, #1db954 0%, #a3e635 50%, #d9f99d 100%)",
    bannerLabel: "Spotify Clone",
    bannerLabelColor: "#14532d",
    previewBg: "#ecfccb",
    techs: [
      { name: "Astro", bg: "#ff5d01", letter: "A", color: "#fff" },
      { name: "React", bg: "#61dafb", letter: "R", color: "#000" },
      { name: "Svelte", bg: "#ff3e00", letter: "S", color: "#fff" },
      { name: "TS", bg: "#3178c6", letter: "TS", color: "#fff" },
    ],
    demoUrl: "#",
  },
  {
    id: "03",
    title: "Aid Manager Mobile",
    description:
      "Basada en la versión web, esta aplicación móvil extiende la experiencia de gestión al ofrecer funcionalidades centradas en directores de proyecto, permitiendo supervisar, asignar y tomar decisiones clave desde cualquier lugar.",
    bannerBg: "linear-gradient(135deg, #166534 0%, #16a34a 60%, #4ade80 100%)",
    bannerLabel: "Aid Manager Mobile",
    bannerLabelColor: "#dcfce7",
    previewBg: "#d1fae5",
    techs: [
      { name: "Flutter", bg: "#54c5f8", letter: "F", color: "#fff" },
      { name: "Dart", bg: "#00b4ab", letter: "D", color: "#fff" },
      { name: "C#", bg: "#68217a", letter: "C#", color: "#fff" },
      { name: ".NET", bg: "#512bd4", letter: ".", color: "#fff" },
    ],
    demoUrl: "#",
  },
  {
    id: "04",
    title: "Aneimera Platform",
    description:
      "Desarrollada para la directiva de ANEIMERA UPC, esta plataforma permite crear, editar y gestionar eventos de forma sencilla y segura, asegurando que cada actualización se refleje automáticamente en el sitio oficial de la organización.",
    bannerBg: "linear-gradient(135deg, #991b1b 0%, #ef4444 50%, #fca5a5 100%)",
    bannerLabel: "Aneimera Platform",
    bannerLabelColor: "#fff",
    previewBg: "#fee2e2",
    techs: [
      { name: "React", bg: "#61dafb", letter: "R", color: "#000" },
      { name: "Tailwind", bg: "#38bdf8", letter: "T", color: "#fff" },
      { name: "C#", bg: "#68217a", letter: "C#", color: "#fff" },
      { name: ".NET", bg: "#512bd4", letter: ".", color: "#fff" },
    ],
    demoUrl: "#",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-[#0f172a] border border-[#1e293b] hover:border-[#334155] transition-all duration-300 group">
      {/* Banner / Preview Image */}
      <div
        className="relative h-60 sm:h-72 flex flex-col items-start justify-end p-5 overflow-hidden"
        style={{ background: project.bannerBg }}
      >
        {/* Project label inside banner */}
        <div className="flex items-center gap-2 mb-3">
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
          className="absolute inset-x-4 bottom-0 top-14 rounded-t-lg overflow-hidden shadow-xl"
          style={{ background: project.previewBg }}
        >
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

          {/* Explorar button */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#334155] text-sm font-semibold text-[#f1f5f9] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all cursor-pointer"
          >
            Explorar
            <Search className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative py-24 md:py-32">
      <StarField count={30} opacity={0.15} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#334155]" />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FolderOpen className="w-5 h-5 text-[#64748b]" />
            <span className="text-sm text-[#64748b]">Proyectos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#f1f5f9] max-w-3xl">
            Algunos de mis{" "}
            <span className="text-[#38bdf8]">proyectos destacados</span>{" "}
            como desarrollador full-stack y diseñador UI/UX
          </h2>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
