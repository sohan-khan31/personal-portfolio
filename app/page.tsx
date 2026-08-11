import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ResearchSection } from "@/components/sections/research-section"
import { EducationSection } from "@/components/sections/education-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { AwardsSection } from "@/components/sections/awards-section"
import { ContactSection, SiteFooter } from "@/components/sections/contact-section"

export default function Page() {
  return (
    <div className="min-h-svh">
      <SiteNav />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ResearchSection />
        <EducationSection />
        <SkillsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
