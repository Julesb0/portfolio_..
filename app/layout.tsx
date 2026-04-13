import type { Metadata, Viewport } from 'next'
import { Inter, Sora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import { ThemeProvider } from '@/components/theme-provider'
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
  title: 'Julesb0 | Software Developer',
  description: 'Portafolio profesional de Julio Bolaños Benavides - Desarrollador de Software especializado en aplicaciones web y móviles.',
  keywords: ['Software Developer', 'Frontend', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Julio Bolaños Benavides' }],
  creator: 'Julio Bolaños Benavides',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    title: 'Julesb0 | Software Developer',
    description: 'Desarrollador de Software especializado en crear soluciones tecnológicas eficientes.',
    siteName: 'Julio Bolaños Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julesb0 | Software Developer',
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
    <html lang="es" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
