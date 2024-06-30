import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

import { Toaster } from '@/components/ui/sonner'

const roboto = Roboto({ weight: '300', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bharat Yadav',
  description: "Bharat's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {' '}
        {children} <Toaster />
      </body>
    </html>
  )
}
