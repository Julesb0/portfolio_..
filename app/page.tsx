import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/sections/hero-section"
import { ProjectsSection } from "@/sections/projects"
import { AboutSection } from "@/sections/aboutme"
import { SkillsSection } from "@/sections/skills"
import { TestimonialsSection } from "@/sections/testimonials"
import { ContactSection } from "@/sections/contact"
import { Footer } from "@/components/footer"

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-8" aria-hidden="true">
      <div className="flex items-center">
        <div className="w-10 h-px bg-[#e2e8f0]" />
        <div className="flex-1 h-px bg-[#334155]" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
