import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Cloud, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Lenguajes",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Go", "SQL"],
  },
  {
    title: "Frameworks & Librerías",
    icon: Database,
    skills: ["Node.js", "Express", "FastAPI", "Django", "React", "Next.js"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"],
  },
  {
    title: "Bases de Datos & Herramientas",
    icon: GitBranch,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Git", "REST APIs"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-4">HABILIDADES TÉCNICAS</h2>
        <p className="text-2xl md:text-3xl text-foreground font-semibold mb-12 max-w-2xl">
          Tecnologías y herramientas que domino
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
              <CardHeader className="pb-2">
                <category.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
