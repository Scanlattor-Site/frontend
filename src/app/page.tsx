import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import StartSession from '@/components/StartSession'
import theme from '@/theme/themeConfig'
import { ConfigProvider, Divider } from 'antd'

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
              <Card key={manga.id} manga={manga}>
                <Card.Title>{manga.title}</Card.Title>
                <Card.Author>{manga.author}</Card.Author>
                <Card.Synopsis>{manga.synopsis}</Card.Synopsis>
              </Card>
            ))}
          </section>
        </section>
      </section>
    </ConfigProvider>
  )
}
