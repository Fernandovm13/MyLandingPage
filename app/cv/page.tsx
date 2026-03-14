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
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl flex flex-col md:flex-row print:flex-row print:shadow-none print:w-[210mm] print:h-[297mm] print:min-h-[297mm] min-h-[297mm]">
        
        {/* Sidebar (Left Column) */}
        <aside className="w-full md:w-[260px] bg-[#32527b] text-white p-6 flex flex-col gap-6 print:w-[28%] print:h-full print:bg-[#32527b] print:text-white print:p-5 print:gap-5">
          {/* Header in Sidebar */}
          <div className="text-center flex flex-col items-center gap-3">
            <div className="w-32 h-32 rounded-full border-4 border-white/20 overflow-hidden bg-slate-200 relative mb-2">
              <img 
                src={getAssetPath("/assets/projects/profile.jpg")} 
                alt="Fernando Vélez Méndez"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">Fernando Vélez<br/>Méndez</h1>
              <div className="mt-1 h-0.5 bg-white/30 w-10 mx-auto"></div>
            </div>
          </div>

          {/* Personal Data Section */}
          <section className="print:break-inside-avoid">
            <h2 className="text-base font-semibold border-b border-white/20 pb-1.5 mb-3 uppercase tracking-wider text-blue-100">Datos personales</h2>
            <ul className="space-y-3">
              {personalData.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <item.icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-200" />
                  <span className="text-[13px] font-light text-blue-50 leading-tight">{item.label}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Competencies Section */}
          <section className="print:break-inside-avoid">
            <h2 className="text-base font-semibold border-b border-white/20 pb-1.5 mb-3 uppercase tracking-wider text-blue-100">Competencias</h2>
            <ul className="space-y-3">
              {technicalSkills.map((skill, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <span className="text-[13px] font-medium text-blue-50">{skill.name}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div 
                        key={dot} 
                        className={`w-2 h-2 rounded-full ${dot <= skill.level ? 'bg-white' : 'bg-white/20'}`} 
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Interests Section */}
          <section className="mt-auto print:break-inside-avoid">
            <h2 className="text-base font-semibold border-b border-white/20 pb-1.5 mb-3 uppercase tracking-wider text-blue-100">Pasatiempos</h2>
            <ul className="flex flex-wrap gap-1.5">
              {["IA Generativa", "IoT", "Ciberseguridad", "Cloud", "Hardware"].map((item) => (
                <li key={item} className="bg-white/10 px-2 py-0.5 rounded text-[11px] text-blue-50">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Main Content (Right Column) */}
        <main className="flex-1 p-8 flex flex-col gap-8 bg-white print:w-[72%] print:p-6 print:gap-6 print:h-full">
          
          {/* Section: Perfil */}
          <section className="print:break-inside-avoid">
            <div className="flex items-center gap-2.5 mb-3 text-blue-800">
              <User className="w-5 h-5" />
              <h2 className="text-xl font-bold border-l-4 border-blue-800 pl-2 leading-none italic uppercase tracking-tighter">Perfil</h2>
            </div>
            <p className="text-slate-600 leading-relaxed italic text-[13px]">
                Ingeniero en Software altamente motivado con una sólida especialización en la convergencia de Hardware (IoT) y Software (Full Stack). Experto en arquitecturas escalables con Node.js, microservicios en Go y sistemas de monitoreo en tiempo real. Comprometido con soluciones de vanguardia en Agentic AI y Cloud Infrastructure (AWS Certified). Busco aportar innovación técnica e implementación de alta calidad.
            </p>
          </section>

          {/* Section: Formación */}
          <section className="print:break-inside-avoid">
            <div className="flex items-center gap-2.5 mb-4 text-blue-800">
              <BookOpen className="w-5 h-5" />
              <h2 className="text-xl font-bold border-l-4 border-blue-800 pl-2 leading-none italic uppercase tracking-tighter">Formación</h2>
            </div>
            <div className="space-y-4">
              <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-100">
                <div className="absolute left-[-3px] top-1.5 w-2 h-2 rounded-full bg-blue-600" />
                <div className="flex justify-between items-start mb-0.5">
                  <h3 className="font-bold text-slate-800 text-sm">Ingeniería en Software</h3>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">2023 - Presente</span>
                </div>
                <p className="text-[12px] font-medium text-slate-500 mb-1.5 italic">Universidad Politécnica de Chiapas</p>
                <ul className="text-[11px] text-slate-600 space-y-0.5 list-disc pl-3.5 italic">
                  <li>Especialización en desarrollo de sistemas distribuidos y arquitecturas en la nube.</li>
                  <li>Liderazgo en el desarrollo de APIs asíncronas de alto rendimiento.</li>
                </ul>
              </div>

              <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-100">
                <div className="absolute left-[-3px] top-1.5 w-2 h-2 rounded-full bg-blue-400" />
                <div className="flex justify-between items-start mb-0.5">
                  <h3 className="font-bold text-slate-800 text-sm">Preparatoria Técnica</h3>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">2021 - 2023</span>
                </div>
                <p className="text-[12px] font-medium text-slate-500 italic">COBACH 33 - Excelencia académica.</p>
              </div>
            </div>
          </section>

          {/* Section: Experiencia */}
          <section className="print:break-inside-avoid">
            <div className="flex items-center gap-2.5 mb-4 text-blue-800">
              <Briefcase className="w-5 h-5" />
              <h2 className="text-xl font-bold border-l-4 border-blue-800 pl-2 leading-none italic uppercase tracking-tighter">Experiencia</h2>
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-800 uppercase tracking-tight text-sm">Lead Developer @ Proyecto GallerySync</h3>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">2024 - 2025</span>
                </div>
                <ul className="text-[11px] text-slate-600 space-y-1 italic list-none">
                  <li className="flex gap-2"><span>•</span> Desarrollo de PWA modular escalable utilizando Node.js y arquitectura de 'clusters'.</li>
                  <li className="flex gap-2"><span>•</span> Implementación de Worker Threads para procesamiento intensivo de archivos multimedia.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-800 uppercase tracking-tight text-sm">Full Stack Specialist @ Proyecto IoT</h3>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">2023 - 2024</span>
                </div>
                <ul className="text-[11px] text-slate-600 space-y-1 italic list-none">
                  <li className="flex gap-2"><span>•</span> Creación de ecosistema de monitoreo remoto con ESP32 y MicroPython.</li>
                  <li className="flex gap-2"><span>•</span> Integración de conectividad GPRS/GSM y streaming hacia Firebase.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-800 uppercase tracking-tight text-sm">Independent Developer</h3>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">2022 - 2023</span>
                </div>
                <ul className="text-[11px] text-slate-600 space-y-1 italic list-none">
                  <li className="flex gap-2"><span>•</span> Contenedorización con Docker y despliegue en infraestructuras AWS.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Certificaciones */}
          <section className="print:break-inside-avoid">
            <div className="flex items-center gap-2.5 mb-3 text-blue-800">
              <Award className="w-5 h-5" />
              <h2 className="text-xl font-bold border-l-4 border-blue-800 pl-2 leading-none italic uppercase tracking-tighter">Certificaciones</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {[
                  "AWS Generative AI Dev. – Prof.",
                  "AWS Data Engineer – Associate",
                  "AWS ML Engineer – Assoc.",
                  "Cisco CCNP Service Provider",
                  "AWS Agentic AI Demonstrated",
                  "AWS Developer – Associate"
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-1.5 text-[11px] text-slate-700 italic">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>{cert}</span>
                  </div>
                ))}
            </div>
          </section>

        </main>
      </div>

      <style jsx global>{`
        @media print {
          body { 
            -webkit-print-color-adjust: exact; 
            margin: 0;
            padding: 0;
            background: white !important;
          }
          .print-hidden { display: none !important; }
          @page {
            size: A4 portrait;
            margin: 0;
          }
          nav, footer, .fixed, .sticky { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>
    </div>
  )
}
