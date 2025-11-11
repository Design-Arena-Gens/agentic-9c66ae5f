import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: 'Modern Full?Stack Developer Portfolio',
    template: '%s ? Dev Portfolio'
  },
  description: 'A unique, stylish, and performant portfolio showcasing full?stack craft.',
  metadataBase: new URL('https://agentic-9c66ae5f.vercel.app'),
  openGraph: {
    title: 'Modern Full?Stack Developer Portfolio',
    description: 'A unique, stylish, and performant portfolio.',
    url: 'https://agentic-9c66ae5f.vercel.app',
    siteName: 'Dev Portfolio',
    images: [
      { url: '/api/og', width: 1200, height: 630 }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Full?Stack Developer Portfolio',
    description: 'A unique, stylish, and performant portfolio.',
    images: ['/api/og']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' }
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-body antialiased min-h-screen')}>        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
