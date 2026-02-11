import React from "react"
import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'JobBoard - Find Your Dream Career',
  description: 'Discover thousands of job opportunities from top companies. Search by title, location, and job type to find the perfect role.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
