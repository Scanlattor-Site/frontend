import Card from '@/components/Card'
import FavoriteButton from '@/components/Card/FavoriteButton'
import Carousel from '@/components/Carousel'
import StartSession from '@/components/StartSession'
import theme from '@/theme/themeConfig'
import { ConfigProvider, Divider } from 'antd'
import Link from 'next/link'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://scanlattor-site-back.bohr.io/api'

export default async function Home() {
  const mostRead: MangasType.MangaProps[] = [
    {
      id: '1',
      title: 'One Piece',
      slug: 'one-piece',
      author: 'Eiichiro Oda',
      chapters: [],
      createdAt: '2021-10-10',
      releaseDate: '2021-10-10',
      status: 'ongoing',
      synopsis:
        'One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos são serializados na revista Weekly Shōnen Jump desde 22 de julho de 1997, com os capítulos compilados e publicados em volumes tankōbon pela editora Shueisha. One Piece segue as aventuras de Monkey D. Luffy, um jovem cujo corpo ganhou as propriedades de borracha depois de ter ingerido uma Fruta do Diabo acidentalmente. Com sua tripulação de piratas, chamada de Straw Hat Pirates, Luffy explora a Grand Line em busca do One Piece, o maior tesouro do mundo, para se tornar o Rei dos Piratas.',
      thumbnail:
        'https://i.pinimg.com/originals/0b/3f/5b/0b3f5b2e2b5c2e2b0e9d5a5b7a0e6c5b.jpg',
      updatedAt: '2021-10-10',
      rate: 5,
      views: 1000,
    },
  ] /* await fetch(
    `${API_URL}/mangas/most-read`,
  ).then((res) => res.json()) */

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
          <section className="flex md:flex-wrap overflow-x-auto gap-4 mt-11 justify-between first:bg-white pb-4">
            {mostRead.map((manga) => (
              <div
                className="relative flex-shrink-0 md:w-[47%]  w-32"
                key={manga.id}
              >
                <FavoriteButton id={manga.id} />
                <Link
                  href={`/mangas/${manga.slug}`}
                  className="md:w-[47%] w-32 flex-shrink-0 h-full relative"
                >
                  <Card
                    manga={manga}
                    className="w-full flex-col md:flex-row flex-shrink-0"
                    imageClassName="md:w-36 w-32 h-44 md:flex-grow flex-grow-0 flex-shrink-0"
                  >
                    <div className="flex flex-col md:justify-evenly justify-between h-full w-full md:mt-6">
                      <Card.Title className="line-clamp-2">
                        {manga.title}
                      </Card.Title>
                      <Card.Author>{manga.author}</Card.Author>
                      <Card.Synopsis className="hidden md:line-clamp-3">
                        {manga.synopsis}
                      </Card.Synopsis>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </section>
        </section>
      </section>
    </ConfigProvider>
  )
}
