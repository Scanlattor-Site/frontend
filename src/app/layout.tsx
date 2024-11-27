import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import UserInfosProvider from '@/lib/UserInfos'

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
  /* const response: ResponseApi = await fetch(
    'https://scanlattor-site-back.bohr.io/api/mangas',
    {
      next: {
        // tags: ['mangas'],
        revalidate: 60,
      },
    },
  ).then((res) => res.json()) */
  const response = {
    total: 0,
    mangas: [],
  }
  console.log(response)
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} flex flex-col items-center min-h-screen`}>
        <UserInfosProvider>
          <StyledComponentsRegistry>
            <Header mangas={response.mangas} />
            {children}
          </StyledComponentsRegistry>
        </UserInfosProvider>
      </body>
    </html>
  )
}
