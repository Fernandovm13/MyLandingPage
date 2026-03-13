"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-4">CONTACTO</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          ¿Tienes un proyecto en mente?
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
          Si tienes una pregunta o simplemente quieres saludar, no dudes en contactarme.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 text-left">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:fernandovm79@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      fernandovm79@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Tuxtla Gutierrez, Chiapas, México
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Disponible para trabajo remoto
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="flex-1 border-border/50 hover:border-primary/50 hover:bg-primary/10" asChild>
                <a href="https://linkedin.com/in/fernandovm" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1 border-border/50 hover:border-primary/50 hover:bg-primary/10" asChild>
                <a href="https://github.com/Fernandovm13" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Nombre</label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <Textarea
                    id="message"
                    placeholder="Tu mensaje..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
