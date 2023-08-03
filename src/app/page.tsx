import Carousel from '@/components/Carousel'
import StartSession from '@/components/StartSession'
import theme from '@/theme/themeConfig'
import { ConfigProvider } from 'antd'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://scanlattor-site-back.bohr.io/api'

export default async function Home() {
  const mostRead = await fetch(`${API_URL}/mangas/most-read`)
  return (
    <ConfigProvider theme={theme}>
      <Carousel />
      <section className="container relative">
        <StartSession />
        <section className="md:mt-20 mt-10">
          <div className="flex gap-4 items-center">
            <h2 className="font-bold text-primary text-2xl">Mais Lidos</h2>
            <div className="border-[0.5px] border-primary flex-grow h-0" />
          </div>
          {mostRead && <div className="flex gap-2 mt-2"></div>}
        </section>
      </section>
    </ConfigProvider>
  )
}
