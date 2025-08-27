import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Money & Me - Transform Your Money Mindset',
  description: 'Unlock abundance and transform your relationship with money through mindful finance coaching.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
