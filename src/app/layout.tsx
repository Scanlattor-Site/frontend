import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SCAN_NAME ?? 'Scanlattor Site',
  description: 'Site para scanslattors.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} flex flex-col items-center`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
