import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/juanperez", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/juanperez", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/juanperez", icon: Twitter },
  { name: "Email", href: "mailto:juan@example.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Credit */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Diseñado y desarrollado por{" "}
              <span className="text-primary">Juan Pérez</span>
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
              Construido con Next.js, Tailwind CSS & TypeScript
            </p>
          </div>

          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
