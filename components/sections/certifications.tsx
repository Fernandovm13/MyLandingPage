"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ShieldCheck, Cloud, Network, Database } from "lucide-react"

const certifications = [
  {
    title: "AWS Certified Generative AI Developer – Professional",
    issuer: "Amazon Web Services",
    type: "Professional",
    icon: Cloud,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "AWS Agentic AI Demonstrated",
    issuer: "Amazon Web Services",
    type: "Demonstrated",
    icon: ShieldCheck,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Cisco CCNP Service Provider",
    issuer: "Cisco Systems",
    type: "Professional",
    icon: Network,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    title: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services",
    type: "Associate",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    type: "Associate",
    icon: Cloud,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    title: "AWS Certified Machine Learning Engineer - Associate",
    issuer: "Amazon Web Services",
    type: "Associate",
    icon: Award,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    type: "Foundational",
    icon: Cloud,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    type: "Foundational",
    icon: Cloud,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    title: "Network Technician Career Path",
    issuer: "Cisco",
    type: "Career Path",
    icon: Network,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-primary tracking-wider mb-4 uppercase">CERTIFICACIONES Y RECONOCIMIENTOS</h2>
          <p className="text-3xl md:text-4xl text-foreground font-bold max-w-2xl mx-auto">
            Garantía de excelencia técnica y formación continua
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.title} className="bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:translate-y-[-4px] overflow-hidden group">
              <CardContent className="p-0">
                <div className="p-6 flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${cert.bgColor} ${cert.color} group-hover:scale-110 transition-transform`}>
                    <cert.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 text-[10px] uppercase tracking-wider font-mono">
                      {cert.type}
                    </Badge>
                    <h4 className="text-lg font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground italic">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <div className={`h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-primary to-transparent`} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center">
          <p className="text-muted-foreground italic text-lg">
            "Comprometido con el aprendizaje constante para implementar las mejores arquitecturas en la nube y redes."
          </p>
        </div>
      </div>
    </section>
  )
}
