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

type ResponseApi = {
  total: number
  mangas: MangasType.SearchProps[]
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const response: ResponseApi = await fetch(
    'https://scanlattor-site-back.bohr.io/api/mangas',
    {
      next: {
        // tags: ['mangas'],
        revalidate: 60,
      },
    },
  ).then((res) => res.json())
  console.log(response)
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} flex flex-col items-center h-[200vh]`}
      >
        <Header mangas={response.mangas} />
        {children}
      </body>
    </html>
  )
}
