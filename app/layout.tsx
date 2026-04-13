import type { Metadata, Viewport } from 'next'
import { Inter, Sora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Julio Bolaños | Software Developer',
  description: 'Portafolio profesional de Julio Bolaños Benavides - Desarrollador de Software especializado en aplicaciones web y móviles.',
  keywords: ['Software Developer', 'Frontend', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Julio Bolaños Benavides' }],
  creator: 'Julio Bolaños Benavides',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    title: 'Julio Bolaños | Software Developer',
    description: 'Desarrollador de Software especializado en crear soluciones tecnológicas eficientes.',
    siteName: 'Julio Bolaños Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julio Bolaños | Software Developer',
    description: 'Desarrollador de Software especializado en crear soluciones tecnológicas eficientes.',
  },
}

export const viewport: Viewport = {
  themeColor: '#7c3aed',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#1E1E2E] text-[#f1f5f9] overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
