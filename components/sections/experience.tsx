"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Proyecto GallerySync",
    position: "Lead Developer",
    period: "Oct 2025 - Presente",
    description: [
      "Desarrollo de una Progressive Web App (PWA) enfocada en la eficiencia de streaming de imágenes y acceso offline-first.",
      "Implementación de arquitectura modular en Node.js utilizando el módulo 'cluster' para escalabilidad vertical.",
      "Optimización de procesos en segundo plano con 'worker_threads' para generación de thumbnails, marcas de agua y empaquetado de assets.",
      "Diseño de interfaz fluida y responsiva con enfoque en la experiencia de usuario (UX).",
    ],
    technologies: ["Node.js", "PWA", "Cluster", "Worker Threads", "Service Workers"],
  },
  {
    company: "Freelance / Independent",
    position: "Full Stack Developer",
    period: "2023 - Presente",
    description: [
      "Desarrollo de aplicaciones web modernas utilizando el stack Angular y Node.js",
      "Implementación de APIs RESTful robustas y escalables con Express",
      "Contenedorización de aplicaciones con Docker para facilitar el despliegue y escalabilidad",
      "Integración de servicios de terceros como Cloudinary para la gestión de activos multimedia",
    ],
    technologies: ["Angular", "Node.js", "Express", "Docker", "Cloudinary"],
  },
  {
    company: "Proyectos en GitHub",
    position: "Open Source Contributor",
    period: "2022 - 2023",
    description: [
      "Mantenimiento y desarrollo de repositorios personales destacados como ONAT_front y Api_ropa",
      "Colaboración en proyectos de landing pages profesionales y responsivas",
      "Implementación de mejores prácticas de codificación y documentación de APIs",
    ],
    technologies: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Git"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-4">EXPERIENCIA PROFESIONAL</h2>
        <p className="text-2xl md:text-3xl text-foreground font-semibold mb-12 max-w-2xl">
          Mi trayectoria en el desarrollo de software
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-3 text-left text-sm font-mono whitespace-nowrap transition-all duration-200",
                  "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                  activeTab === index
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 md:pl-8 pt-4 md:pt-0">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={cn(
                  "transition-opacity duration-200",
                  activeTab === index ? "block" : "hidden"
                )}
              >
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {exp.position}{" "}
                  <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-muted-foreground mb-6">
                  {exp.period}
                </p>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 text-sm">▹</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/80 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
