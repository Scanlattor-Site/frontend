import { Skeleton } from 'antd'
import Image from 'next/image'

export interface CardProps {
  manga: MangasType.MangaProps
  loading?: boolean
}

const MAX_SYNOPSIS_LENGTH = 100
const MAX_TITLE_LENGTH = 40

export default function Card({ manga, loading }: CardProps) {
  return (
    <div className="max-w-[27.19113rem]">
      <Skeleton
        loading={loading || false}
        avatar={{
          style: {
            width: '8.8rem',
            height: '9.1rem',
            borderRadius: '0.375rem',
          },
        }}
        active
      >
        <div className="flex gap-2">
          <Image
            src={manga.thumbnail}
            alt={manga.title}
            width={141}
            height={147}
            className="w-36 h-[9.19rem] rounded-md flex-shrink-0 flex-grow"
          />
          <div className="flex flex-col gap-2 mt-2 flex-shrink max-w-xs">
            <h3 className="font-bold text-sm w-fit">
              {manga.title.length > MAX_TITLE_LENGTH
                ? manga.title.slice(0, MAX_TITLE_LENGTH) + '...'
                : manga.title}
            </h3>
            <p className="text-xs w-fit">
              Autor: {manga.author ? manga.author : 'Desconhecido'}
            </p>
            <p className="text-xs w-fit">
              {manga.synopsis.length > MAX_SYNOPSIS_LENGTH
                ? manga.synopsis.slice(0, MAX_SYNOPSIS_LENGTH) + '...'
                : manga.synopsis}
            </p>
          </div>
        </div>
      </Skeleton>
    </div>
  )
}
