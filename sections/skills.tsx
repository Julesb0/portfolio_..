"use client"

import { Code2, ExternalLink } from "lucide-react"
import { StarField } from "@/sections/esferafondo"

interface Skill {
  name: string
  icon: string
  color: string
  url: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#e34f26", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572b6", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#f7df1e", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178c6", url: "https://www.typescriptlang.org" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61dafb", url: "https://react.dev" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#ffffff", url: "https://nextjs.org" },
      { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg", color: "#ff5d01", url: "https://astro.build" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#38bdf8", url: "https://tailwindcss.com" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "#dd0031", url: "https://angular.dev" },
    ],
  },
  {
    title: "Backend & Datos",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933", url: "https://nodejs.org" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396", url: "https://spring.io/projects/spring-boot" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776ab", url: "https://www.python.org" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#ffffff", url: "https://expressjs.com" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47a248", url: "https://www.mongodb.com" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479a1", url: "https://www.mysql.com" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791", url: "https://www.postgresql.org" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#ffca28", url: "https://firebase.google.com" },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#f05032", url: "https://git-scm.com" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#ffffff", url: "https://github.com" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ed", url: "https://www.docker.com" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#f24e1e", url: "https://figma.com" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007acc", url: "https://code.visualstudio.com" },
      { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", color: "#f5792a", url: "https://www.blender.org" },
      { name: "Unreal Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg", color: "#ffffff", url: "https://www.unrealengine.com" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", color: "#ff6c37", url: "https://www.postman.com" },
      { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", color: "#cb3837", url: "https://www.npmjs.com" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-24">
      <StarField count={65} opacity={0.2} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[#60a5fa]/20 blur-md" />
              <Code2 className="relative w-5 h-5 text-[#c7d2fe]" />
            </div>
            <span className="text-sm text-[#f1f5f9]">Habilidades técnicas</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
            <span className="text-[#93c5fd]">Desarrollador de Software</span>
            <span className="text-[#f1f5f9]"> con experiencia en tecnologías </span>
            <span className="text-[#93c5fd]">Frontend</span>
            <span className="text-[#f1f5f9]"> y </span>
            <span className="text-[#93c5fd]">Backend</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-sm text-[#64748b] uppercase tracking-wider">{category.title}</h3>
                <div className="h-px flex-1 ml-4 bg-gradient-to-r from-[#1e293b] to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-xl bg-transparent border border-[#1e293b] hover:bg-[color-mix(in_srgb,var(--skill-color)_8%,transparent)] hover:border-[color-mix(in_srgb,var(--skill-color)_25%,#1e293b)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--skill-color)]/6 cursor-pointer"
                    style={{ "--skill-color": skill.color } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex-shrink-0">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-sm text-[#f1f5f9] font-medium truncate">{skill.name}</span>
                    </div>
                    <ExternalLink className="absolute top-2 right-2 w-3 h-3 text-[#64748b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
