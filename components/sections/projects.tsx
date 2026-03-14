"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder, PlayCircle, Loader2 } from "lucide-react"
import { getAssetPath } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "IoT Remote Monitoring System",
    description: "Solución completa de monitoreo remoto utilizando ESP32 y MicroPython. Integra sensores de precisión (DS18B20/DHT) y transmite datos en tiempo real a Firebase mediante conectividad GSM/GPRS (SIM800L).",
    role: "Full Stack & IoT Engineer",
    period: "2024",
    technologies: ["MicroPython", "ESP32", "Firebase", "GPRS", "Sensors"],
    metrics: [
      { label: "Latencia", value: "< 2s" },
      { label: "Sensores", value: "Multi-point" },
      { label: "Uptime", value: "99.9%" }
    ],
    image: "/assets/projects/iot-monitoring.jpg",
    links: {
      github: "https://github.com/Fernandovm13/Esp32-sensores-Firebase",
    },
    featured: true,
  },
  {
    title: "Real-Time Sensor Streaming (Go)",
    description: "Backend de alto rendimiento construido con Go para el streaming de datos de sensores mediante WebSockets. Capaz de manejar múltiples conexiones de sensores con baja latencia y alta concurrencia.",
    role: "Backend Developer",
    period: "2024",
    technologies: ["Go", "WebSockets", "Concurrency", "Real-time"],
    metrics: [
      { label: "Conexiones", value: "1000+" },
      { label: "Lenguaje", value: "Golang" },
      { label: "Protocolo", value: "WS" }
    ],
    image: "/assets/projects/sensor-streaming.jpg",
    links: {
      github: "https://github.com/Fernandovm13/websocket_sensores",
    },
    featured: true,
  },
  {
    title: "Modern Sensor Data API",
    description: "API profesional desarrollada con FastAPI para la gestión, filtrado y servicio de información proveniente de sensores. Implementa programación asíncrona para maximizar el throughput.",
    role: "Backend Engineer",
    period: "2023",
    technologies: ["FastAPI", "Python", "AsyncIO", "API Design"],
    metrics: [
      { label: "Framework", value: "FastAPI" },
      { label: "Docs", value: "Swagger" },
      { label: "Type", value: "REST" }
    ],
    image: "/assets/projects/sensor-api.jpg",
    links: {
      github: "https://github.com/Fernandovm13/fastApi_sensors",
    },
    featured: true,
  },
  {
    title: "ONAT_front",
    description: "Portal administrativo moderno construido con Angular para gestión de servicios.",
    technologies: ["Angular", "TypeScript", "Admin"],
    links: {
      github: "https://github.com/Fernandovm13/ONAT_front",
    },
    featured: false,
  },
  {
    title: "Api_ropa",
    description: "Backend de e-commerce con Docker y Cloudinary.",
    technologies: ["Node.js", "Express", "Docker"],
    links: {
      github: "https://github.com/Fernandovm13/Api_ropa",
    },
    featured: false,
  },
  {
    title: "BlogPersonal",
    description: "Plataforma de blog desarrollada para compartir conocimientos técnicos.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    links: {
      github: "https://github.com/Fernandovm13/BlogPersonal",
    },
    featured: false,
  },
  {
    title: "Landing-Page",
    description: "Landing page profesional diseñada con un enfoque en la conversión.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    links: {
      github: "https://github.com/Fernandovm13/Landing-Page",
    },
    featured: false,
  },
]

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-4">PROYECTOS DESTACADOS</h2>
        <p className="text-2xl md:text-3xl text-foreground font-semibold mb-12 max-w-2xl">
          Soluciones que he construido para resolver problemas reales
        </p>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Project Image/Preview */}
              <div
                className={`lg:col-span-6 ${
                  index % 2 === 1 ? "lg:col-start-7" : ""
                } relative group`}
              >
                <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden border border-border">
                  <img 
                    src={getAssetPath(project.image || "")} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <div className="text-4xl font-bold text-primary/20">{project.title.charAt(0)}</div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`lg:col-span-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                } relative`}
              >
                <p className="font-mono text-primary text-sm mb-2">{project.role}</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                
                <Card className="bg-card/90 backdrop-blur border-border/50 mb-4 shadow-xl">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 border-t border-border/50 pt-4">
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
                            <p className="text-sm font-bold text-primary">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.technologies?.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/80 text-muted-foreground text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className={`flex gap-3 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.links?.github && (
                    <Button variant="outline" size="sm" className="border-border/50 hover:bg-primary/10" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Otros Proyectos</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.title} className="bg-card/50 border-border/50 hover:border-primary/50 transition-all group flex flex-col">
              <CardHeader className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="h-8 w-8 text-primary/70 group-hover:text-primary transition-colors" />
                  <div className="flex gap-2">
                    {project.links?.github && (
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies?.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
