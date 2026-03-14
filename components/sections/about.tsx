export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3" />
              <div className="absolute inset-0 bg-card border border-border rounded-lg transform -rotate-3" />
              <div className="relative bg-secondary rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                <img 
                  src="assets/projects/profile.jpg" 
                  alt="Fernando Vélez Méndez"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <div className="text-8xl font-bold text-primary/20">FVM</div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-mono text-primary tracking-wider mb-4">SOBRE MÍ</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Full Stack Developer apasionado por crear soluciones modernas
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
                Soy <span className="text-foreground font-medium">Fernando Vélez Méndez</span>, un desarrollador apasionado por la convergencia entre el hardware y el software. Formado en la <span className="text-primary">Universidad Politécnica de Chiapas</span>, he dedicado mi carrera a explorar cómo los sensores y la computación en la nube pueden trabajar juntos para resolver problemas reales.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mi experiencia abarca desde la programación de microcontroladores <span className="text-foreground">ESP32</span> con MicroPython, hasta la creación de infraestructuras escalables en <span className="text-foreground">AWS</span> y servicios en tiempo real con <span className="text-foreground">Go</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Tengo experiencia integrando servicios externos como Cloudinary para la gestión de imágenes y utilizando Docker para asegurar que las aplicaciones sean portátiles y escalables. Soy un firme creyente en el código limpio y el aprendizaje continuo.
              </p>
              
              <ul className="list-none space-y-2 mt-4">
                  <li><span className="text-muted-foreground">📍 Ubicación:</span> Chiapas, México</li>
                  <li><span className="text-muted-foreground">🎓 Educación:</span> Ingeniería en Software, UP Chiapas (2023-2025)</li>
                  <li><span className="text-muted-foreground">🚀 Especialidad:</span> IoT & Agentic AI Architect</li>
                  <li><span className="text-muted-foreground">🏆 Certificación:</span> +30 Badges (AWS & Cisco)</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
