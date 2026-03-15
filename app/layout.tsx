import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando Vélez Méndez | Full Stack Developer & IoT Engineer",
  description: "Desarrollador Full Stack especializado en Angular, Node.js e IoT. Experto en integración de sensores y soluciones en la nube desde Tuxtla Gutiérrez, Chiapas.",
  metadataBase: new URL('https://portafolio.velezmen.me'),
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
