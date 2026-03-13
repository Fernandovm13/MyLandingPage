import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

const videoTutorials = [
  {
    title: "Tutorial de Angular: Fundamentos",
    description: "Aprende los conceptos básicos de Angular, desde componentes hasta servicios y routing.",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=600&auto=format&fit=crop",
    tags: ["Angular", "Frontend"],
  },
  {
    title: "Node.js y Docker: Guía de Inicio",
    description: "Cómo contenedorizar tu aplicación Node.js para un despliegue profesional.",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop",
    tags: ["Node.js", "Docker", "Backend"],
  },
  {
    title: "Integración con Cloudinary",
    description: "Gestiona imágenes de forma eficiente en tus proyectos web con Cloudinary.",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=600&auto=format&fit=crop",
    tags: ["Cloudinary", "API"],
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-mono text-primary tracking-wider mb-4">CONTENIDO TÉCNICO</h2>
          <p className="text-2xl md:text-3xl text-foreground font-semibold max-w-2xl">
            Video Tutoriales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTutorials.map((video, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/50 transition-all group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                    ▶
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {video.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/80 text-xs text-muted-foreground">
                      {tag}
                    </Badge>
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
