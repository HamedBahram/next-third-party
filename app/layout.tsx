import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>{children}</main>
        <GoogleTagManager gtmId='GTM-WBM4N32P' />
      </body>
    </html>
  )
}
