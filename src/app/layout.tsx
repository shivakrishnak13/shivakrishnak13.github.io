import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://shivakrishna.dev'),
  title: {
    default: 'Shivakrishna Kosari — Full Stack Developer',
    template: '%s | Shiva Krishna Kosari',
  },
  description:
    'Full Stack Developer (Frontend-Focused) with 2+ years of experience building responsive, scalable web apps using React, Vue, Next.js, Node.js, TypeScript and more.',
  keywords: [
    'Shiva Krishna Kosari',
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Vue.js Developer',
    'TypeScript',
    'MERN Stack',
    'Portfolio',
    'Web Developer India',
  ],
  authors: [{ name: 'Shiva Krishna Kosari', url: 'https://github.com/shivakrishnak13' }],
  creator: 'Shiva Krishna Kosari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shivakrishna.dev',
    siteName: 'Shiva Krishna Kosari Portfolio',
    title: 'Shiva Krishna Kosari — Full Stack Developer',
    description:
      'Full Stack Developer (Frontend-Focused) building responsive, AI-powered web applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shiva Krishna Kosari — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shiva Krishna Kosari — Full Stack Developer',
    description: 'Full Stack Developer building responsive, AI-powered web applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#080c14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
