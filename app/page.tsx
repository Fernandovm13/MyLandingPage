import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { TechStack } from "@/components/sections/tech-stack"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { GitHubSection } from "@/components/sections/github"
import { Blog } from "@/components/sections/blog"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <GitHubSection />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
