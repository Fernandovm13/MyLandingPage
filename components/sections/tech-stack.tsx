"use client"

import { 
  Code2, 
  Terminal, 
  Layers, 
  Box, 
  Database, 
  GitBranch, 
  Layout, 
  Server, 
  Globe,
  Monitor,
  Cloud,
  Cpu,
  Zap
} from "lucide-react"

const technologies = [
  { name: "Python", icon: Code2, color: "#3776AB" },
  { name: "Go (Golang)", icon: Terminal, color: "#00ADD8" },
  { name: "Angular", icon: Layout, color: "#DD0031" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "TypeScript", icon: Code2, color: "#3178C6" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "Firebase", icon: Database, color: "#FFCA28" },
  { name: "IoT/Sensors", icon: Cpu, color: "#2496ED" },
  { name: "Docker", icon: Box, color: "#2496ED" },
  { name: "Esp32", icon: Zap, color: "#E34F26" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
]

export function TechStack() {
  return (
    <section id="technologies" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-4">STACK TECNOLÓGICO</h2>
        <p className="text-2xl md:text-3xl text-foreground font-semibold mb-12 max-w-2xl">
          Tecnologías que domino y utilizo en mis proyectos
        </p>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <tech.icon 
                className="w-10 h-10 text-muted-foreground group-hover:scale-110 transition-transform duration-300" 
                style={{ color: tech.color }}
              />
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
