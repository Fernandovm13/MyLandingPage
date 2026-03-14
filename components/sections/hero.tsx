"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, FileText, Mail } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-1000">HOLA, MI NOMBRE ES</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Fernando <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Vélez Méndez</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground font-medium mb-8 max-w-3xl mx-auto leading-tight">
            Full Stack Developer <span className="text-primary">&</span> IoT Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Especializado en construir aplicaciones web modernas con <span className="text-foreground">Angular</span> y <span className="text-foreground">Node.js</span>, con un enfoque profundo en <span className="text-primary">Sistemas IoT</span> y sensores en tiempo real.
          </p>
          <p className="text-sm text-muted-foreground mb-8 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Disponible para proyectos desde Tuxtla Gutiérrez, Chiapas, México
          </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="group"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Proyectos
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contacto
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="text-muted-foreground hover:text-foreground"
            asChild
          >
            <a href={getAssetPath("/cv.pdf")} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Descargar CV
            </a>
          </Button>
        </div>
        <div className="mt-24 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary/50 mx-auto" />
        </div>
      </div>
    </section>
  )
}
