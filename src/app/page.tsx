import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import StartSession from '@/components/StartSession'
import theme from '@/theme/themeConfig'
import { ConfigProvider, Divider } from 'antd'
import Image from 'next/image'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://scanlattor-site-back.bohr.io/api'
const MAX_SYNOPSIS_LENGTH = 100

export default async function Home() {
  const mostRead: MangasType.MangaProps[] = await fetch(
    `${API_URL}/mangas/most-read`,
  ).then((res) => res.json())

  console.log(mostRead)
  return (
    <ConfigProvider theme={theme}>
      <Carousel />
      <section className="container relative">
        <StartSession />
        <section className="md:mt-20 mt-10">
          <Divider
            orientation="left"
            // style={{ color: theme.token?.colorPrimary }}
            // className="flex gap-4 items-center"
          >
            <h2 className="font-bold text-primary text-2xl">Mais Lidos</h2>
            {/* <div className="border-[0.5px] border-primary flex-grow h-0" /> */}
          </Divider>
          <section className="flex flex-wrap gap-y-7 mt-11 justify-between">
            {mostRead.map((manga) => (
              <Card key={manga.id} manga={manga} />
            ))}
            {/* <div key={manga.id} className="w-1/4">
                <Image
                  src={manga.thumbnail}
                  alt={manga.title}
                  className="rounded-lg w-full"
                />
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="font-bold text-lg">{manga.title}</h3>
                  <p className="text-sm">
                    {manga.synopsis.length > MAX_SYNOPSIS_LENGTH
                      ? manga.synopsis.slice(0, MAX_SYNOPSIS_LENGTH) + '...'
                      : manga.synopsis}
                  </p>
                </div>
              </div> */}
          </section>
        </section>
      </section>
    </ConfigProvider>
  )
}
