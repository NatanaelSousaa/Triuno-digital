import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Triuno Digital',
  description: 'Especialista em criação de sites e apps customizados. Soluções tecnológicas inovadoras para sua empresa.',
  keywords: 'desenvolvimento web, apps customizados, agência de tecnologia, sites responsivos',
  authors: [{ name: 'Triuno Digital' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: '',
    apple: '',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://triunodigital.com.br',
    siteName: 'Triuno Digital',
    
  },
    generator: ''
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
