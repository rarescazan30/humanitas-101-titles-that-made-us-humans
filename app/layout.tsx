import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Serif_4, Work_Sans} from 'next/font/google'
import './globals.css'


const workSans = Work_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-work-sans',
  display: 'swap',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cărțile care ne-au făcut oameni',
  description:
    'O selecție esențială de cărți, curatoriată de Gabriel Liiceanu. O listă de lectură fundamentală, reunită aici sub egida proiectului „Cărțile care ne-au făcut oameni”.',
  generator: 'v0.app',
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

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAFAFA',
}

import { ReadBooksProvider } from '@/lib/read-books-context'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSerif.variable} ${workSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ReadBooksProvider>
          {children}
        </ReadBooksProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
