"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const videoTutorials = [
  {
    title: "Despliegue de Instancias EC2 en AWS",
    description: "Guía paso a paso para configurar, lanzar y gestionar instancias de cómputo en la nube utilizando Amazon EC2 de forma segura.",
    videoUrl: "https://www.youtube.com/embed/L5ITZ-yg2Rs",
    thumbnail: "https://img.youtube.com/vi/L5ITZ-yg2Rs/maxresdefault.jpg",
    tags: ["AWS", "EC2", "Cloud"],
  },
  {
    title: "Configuración de IP Elástica en AWS",
    description: "Aprende a asignar y asociar direcciones IP estáticas (Elastic IPs) para mantener tus aplicaciones accesibles permanentemente.",
    videoUrl: "https://www.youtube.com/embed/YkbNhKgVnUA",
    thumbnail: "https://img.youtube.com/vi/YkbNhKgVnUA/maxresdefault.jpg",
    tags: ["AWS", "Networking", "EIP"],
  },
  {
    title: "Despliegue express por 1 hora, dominio gratis",
    description: "Cómo preparar y publicar un backend robusto con Node.js y Express, optimizando el entorno para entornos de producción.",
    videoUrl: "https://www.youtube.com/embed/6UUQdX7S1II",
    thumbnail: "https://img.youtube.com/vi/6UUQdX7S1II/maxresdefault.jpg",
    tags: ["Node.js", "Express", "Deployment"],
  },
]

export function Blog() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null)

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
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:border-primary/50 transition-all group overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo({ url: video.videoUrl, title: video.title })}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-12 h-12 text-white drop-shadow-xl" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {video.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 italic">
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

      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
          <DialogHeader className="p-4 absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent">
            <DialogTitle className="text-white font-bold">{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full mt-0">
            {selectedVideo && (
              <iframe
                src={`${selectedVideo.url}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
