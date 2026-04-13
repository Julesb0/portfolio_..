import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/sections/hero-section"
import { ProjectsSection } from "@/sections/projects"
import { AboutSection } from "@/sections/aboutme"
import { ExperienceSection } from "@/sections/experience"
import { SkillsSection } from "@/sections/skills"
import { TestimonialsSection } from "@/sections/testimonials"
import { ContactSection } from "@/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
