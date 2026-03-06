import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'

const outfit = Outfit({ subsets: ['latin'] })

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
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children} 
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
