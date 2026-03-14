import type { Metadata } from 'next'
import { Silkscreen, Geist } from 'next/font/google'
import './globals.css'

const silkscreen = Silkscreen({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-silkscreen',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: "Fernando Vélez Méndez | Full Stack Developer & IoT Engineer",
  description: "Desarrollador Full Stack especializado en Angular, Node.js e IoT. Experto en integración de sensores y soluciones en la nube desde Tuxtla Gutiérrez, Chiapas.",
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${silkscreen.variable} ${geist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
