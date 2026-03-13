import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"

const repositories = [
  {
    name: "ONAT_front",
    description: "Aplicación front-end construida con Angular y TypeScript para la gestión de servicios ONAT.",
    stars: 5,
    forks: 2,
    language: "TypeScript",
    url: "https://github.com/Fernandovm13/ONAT_front",
  },
  {
    name: "Api_ropa",
    description: "Backend para tienda de ropa con Node.js, Cloudinary y Docker.",
    stars: 8,
    forks: 3,
    language: "JavaScript",
    url: "https://github.com/Fernandovm13/Api_ropa",
  },
  {
    name: "Api_shopList",
    description: "API ligera para gestión de listas de compras con Node.js.",
    stars: 3,
    forks: 1,
    language: "JavaScript",
    url: "https://github.com/Fernandovm13/Api_shopList",
  },
]

const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  Python: "#3776AB",
  Shell: "#89E051",
  JavaScript: "#F7DF1E",
}

export function GitHubSection() {
  return (
    <section id="github" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-sm font-mono text-primary tracking-wider mb-4">GITHUB & OPEN SOURCE</h2>
            <p className="text-2xl md:text-3xl text-foreground font-semibold max-w-2xl">
              Contribuciones y proyectos de código abierto
            </p>
          </div>
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 w-fit" asChild>
            <a href="https://github.com/Fernandovm13" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Ver Perfil de GitHub
            </a>
          </Button>
        </div>

        {/* GitHub Stats Card */}
        <Card className="bg-card/50 border-border/50 mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {[
                { label: "Repositorios", value: "62" },
                { label: "Contribuciones 2024", value: "150+" },
                { label: "Seguidores", value: "1" },
                { label: "Logros", value: "Pull Shark" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Repos */}
        <h3 className="text-lg font-semibold text-foreground mb-6">Repositorios Destacados</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repositories.map((repo) => (
            <Card key={repo.name} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-mono text-foreground group-hover:text-primary transition-colors font-medium">
                    {repo.name}
                  </h4>
                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Ver repositorio ${repo.name}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: languageColors[repo.language] || "#ccc" }}
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
