'use client'

import { Mail, Phone, MapPin, Calendar, User, Globe, Download, ArrowLeft, Award, BookOpen, Briefcase, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAssetPath } from "@/lib/utils"

export default function CVPage() {
  const technicalSkills = [
    { name: "Frontend (Angular/React/Next.js)", level: 5 },
    { name: "Backend (Node.js/Go/Python)", level: 5 },
    { name: "IoT & Microcontroladores (ESP32)", level: 5 },
    { name: "Cloud (AWS/Firebase)", level: 5 },
    { name: "DevOps & Docker", level: 4 },
    { name: "Arquitectura de Software", level: 4 },
  ]

  const personalData = [
    { icon: User, label: "Fernando Vélez Méndez" },
    { icon: Mail, label: "fernandoveme79@gmail.com" },
    { icon: Phone, label: "+52 961 133 1366" },
    { icon: MapPin, label: "Tuxtla Gutiérrez, Chiapas" },
    { icon: Calendar, label: "13 de abril de 2005" },
    { icon: Globe, label: "Mexicana" },
  ]

  return (
    <div className="min-h-screen bg-slate-100 py-0 sm:py-10 print:py-0 print:bg-white selection:bg-blue-200">
      {/* Action Buttons (Hidden when printing) */}
      <div className="max-w-[210mm] mx-auto mb-6 flex justify-between px-4 sm:px-0 print:hidden">
        <Button variant="outline" size="sm" asChild className="gap-2">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
        </Button>
        <Button onClick={() => window.print()} className="gap-2 bg-blue-800 hover:bg-blue-900">
          <Download className="w-4 h-4" />
          Descargar PDF
        </Button>
      </div>

      {/* CV Paper Container */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl flex flex-col md:flex-row print:shadow-none print:w-full min-h-[297mm]">
        
        {/* Sidebar (Left Column) */}
        <aside className="w-full md:w-[280px] bg-[#32527b] text-white p-8 flex flex-col gap-8 print:w-[30%] print:bg-[#32527b] print:text-white">
          {/* Header in Sidebar for Mobile/Alternative */}
          <div className="text-center flex flex-col items-center gap-4">
            <div className="w-40 h-40 rounded-full border-4 border-white/20 overflow-hidden bg-slate-200 relative">
              <img 
                src={getAssetPath("/assets/projects/profile.jpg")} 
                alt="Fernando Vélez Méndez"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold leading-tight">Fernando Vélez<br/>Méndez</h1>
              <div className="mt-2 h-0.5 bg-white/30 w-12 mx-auto"></div>
            </div>
          </div>

          {/* Personal Data Section */}
          <section>
            <h2 className="text-lg font-semibold border-b border-white/20 pb-2 mb-4 uppercase tracking-wider text-blue-100">Datos personales</h2>
            <ul className="space-y-4">
              {personalData.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 mt-1 flex-shrink-0 text-blue-200" />
                  <span className="text-sm font-light text-blue-50">{item.label}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Competencies Section */}
          <section>
            <h2 className="text-lg font-semibold border-b border-white/20 pb-2 mb-4 uppercase tracking-wider text-blue-100">Competencias</h2>
            <ul className="space-y-4">
              {technicalSkills.map((skill, i) => (
                <li key={i} className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-blue-50">{skill.name}</span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div 
                        key={dot} 
                        className={`w-2.5 h-2.5 rounded-full ${dot <= skill.level ? 'bg-white' : 'bg-white/20'}`} 
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Interests Section */}
          <section className="mt-auto">
            <h2 className="text-lg font-semibold border-b border-white/20 pb-2 mb-4 uppercase tracking-wider text-blue-100">Pasatiempos</h2>
            <ul className="flex flex-wrap gap-2">
              {["IA Generativa", "IoT", "Ciberseguridad", "Cloud", "Hardware"].map((item) => (
                <li key={item} className="bg-white/10 px-3 py-1 rounded text-xs text-blue-50">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Main Content (Right Column) */}
        <main className="flex-1 p-10 flex flex-col gap-10 bg-white print:p-8">
          
          {/* Section: Perfil */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-blue-800">
              <User className="w-6 h-6" />
              <h2 className="text-2xl font-bold border-l-4 border-blue-800 pl-3 leading-none italic uppercase tracking-tighter">Perfil</h2>
            </div>
            <p className="text-slate-600 leading-relaxed italic text-sm">
                Ingeniero en Software altamente motivado con una sólida especialización en la convergencia de Hardware (IoT) y Software (Full Stack). Experto en arquitecturas escalables con Node.js, microservicios en Go y sistemas de monitoreo en tiempo real. Comprometido con soluciones de vanguardia en Agentic AI y Cloud Infrastructure (AWS Certified). Busco aportar innovación técnica e implementación de alta calidad.
            </p>
          </section>

          {/* Section: Formación */}
          <section>
            <div className="flex items-center gap-3 mb-6 text-blue-800">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-2xl font-bold border-l-4 border-blue-800 pl-3 leading-none italic uppercase tracking-tighter">Formación</h2>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200">
                <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600" />
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-800">Ingeniería en Software</h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">2023 - Presente</span>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-2 italic">Universidad Politécnica de Chiapas</p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4 italic">
                  <li>Especialización en desarrollo de sistemas distribuidos y arquitecturas en la nube.</li>
                  <li>Promedio destacado y participación en proyectos de investigación IoT.</li>
                  <li>Liderazgo en el desarrollo de APIs asíncronas de alto rendimiento.</li>
                </ul>
              </div>

              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200">
                <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-400" />
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-800">Preparatoria Técnica</h3>
                  <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded">2021 - 2023</span>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-2 italic">Colegio de Bachilleres de Chiapas (COBACH 33)</p>
                <p className="text-xs text-slate-600 italic">Formación con excelencia académica en áreas de ciencias fisicomatemáticas y tecnología base.</p>
              </div>
            </div>
          </section>

          {/* Section: Experiencia */}
          <section>
            <div className="flex items-center gap-3 mb-6 text-blue-800">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-2xl font-bold border-l-4 border-blue-800 pl-3 leading-none italic uppercase tracking-tighter">Experiencia</h2>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800 uppercase tracking-tight">Lead Developer @ Proyecto GallerySync</h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">2024 - 2025</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 italic list-none">
                  <li className="flex gap-2"><span>•</span> Desarrollo de PWA modular escalable utilizando Node.js y arquitectura de 'clusters'.</li>
                  <li className="flex gap-2"><span>•</span> Implementación de Worker Threads para procesamiento intensivo de archivos multimedia.</li>
                  <li className="flex gap-2"><span>•</span> Diseño de una arquitectura offline-first con eficiencia en consumo de datos.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800 uppercase tracking-tight">Full Stack Specialist @ Proyecto IoT Firebase</h3>
                  <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded">2023 - 2024</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 italic list-none">
                  <li className="flex gap-2"><span>•</span> Creación de un ecosistema de monitoreo remoto con ESP32 y MicroPython.</li>
                  <li className="flex gap-2"><span>•</span> Integración de conectividad GPRS/GSM y streaming hacia bases de datos Firebase.</li>
                  <li className="flex gap-2"><span>•</span> Desarrollo de interfaces de control reactivas para visualización de sensores.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800 uppercase tracking-tight">Software Engineer independent</h3>
                  <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded">2022 - 2023</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 italic list-none">
                  <li className="flex gap-2"><span>•</span> Contenedorización avanzada con Docker y despliegue en infraestructuras AWS.</li>
                  <li className="flex gap-2"><span>•</span> Desarrollo de backends de alto rendimiento para e-commerce y blogs técnicos.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Certificaciones */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-blue-800">
              <Award className="w-6 h-6" />
              <h2 className="text-2xl font-bold border-l-4 border-blue-800 pl-3 leading-none italic uppercase tracking-tighter">Certificaciones</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>AWS Generative AI Developer – Prof.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>AWS Data Engineer – Associate</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>AWS Machine Learning Engineer – Assoc.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Cisco CCNP Service Provider</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>AWS Agentic AI Demonstrated</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>AWS Developer – Associate</span>
                </div>
            </div>
          </section>

        </main>
      </div>

      <style jsx global>{`
        @media print {
          body { -webkit-print-color-adjust: exact; }
          .print-hidden { display: none; }
          @page {
            size: A4;
            margin: 0;
          }
          nav, footer, .fixed, .sticky { display: none !important; }
        }
      `}</style>
    </div>
  )
}
