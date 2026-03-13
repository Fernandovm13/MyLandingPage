'use client'

import { useState } from "react"
import { Hero } from "@/components/sections/hero"
import { TechStack } from "@/components/sections/tech-stack"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { GitHubSection } from "@/components/sections/github"
import { Blog } from "@/components/sections/blog"
import { Contact } from "@/components/sections/contact"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Sobre Mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Experiencia", href: "#experience" },
    { name: "Tecnologías", href: "#technologies" },
    { name: "Contenido", href: "#blog" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-foreground">
            FVM<span className="text-primary">.</span>
          </a>
          
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-primary/50 text-primary hover:bg-primary/10" asChild>
              <a href="#contact">Hablemos</a>
            </Button>
            
            <button 
              className="md:hidden text-foreground p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú"
            >
              <div className="w-6 h-0.5 bg-foreground mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-foreground mb-1.5 opacity-100"></div>
              <div className="w-6 h-0.5 bg-foreground transition-all"></div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-2 w-full" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Hablemos</a>
              </Button>
            </div>
          </div>
        )}
      </header>

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

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-foreground">
            FVM<span className="text-primary">.</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Fernando Vélez Méndez. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/Fernandovm13" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/fernando-vélez-a521372a2/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
