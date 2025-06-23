import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Proomt - The Internet\'s Prompt Layer',
  description: 'Explore, Share, Sell - One Prompt at a Time. Find the perfect words to power your AI.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 