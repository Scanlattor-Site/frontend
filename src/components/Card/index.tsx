import { Skeleton } from 'antd'
import Image from 'next/image'
import Title from './Title'
import { twMerge } from 'tailwind-merge'
import Author from './Author'
import Synopsis from './Synopsis'

export interface CardProps {
  manga: MangasType.MangaProps
  children: React.ReactNode
  loading?: boolean
  imageClassName?: HTMLImageElement['className']
}

function Card({ manga, loading, imageClassName, children }: CardProps) {
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
            className={twMerge(
              'w-36 h-[9.19rem] rounded-md flex-shrink-0 flex-grow',
              imageClassName,
            )}
          />
          <div className="flex flex-col gap-2 mt-2 flex-shrink max-w-xs">
            {children}
          </div>
        </div>
      </Skeleton>
    </div>
  )
}

/**
 * Componente para ser usado dentro do componente Card
 *
 * @param children O titulo do mangá
 * @param className A classe do elemento
 * @param maxTitleLength O tamanho máximo do título, valor padrão: 40
 * @returns O nome do autor do mangá formatado
 */
Card.Title = Title

/**
 * Componente para ser usado dentro do componente Card
 *
 * @param children O nome do autor do mangá
 * @param className A classe do elemento
 * @returns O nome do autor do mangá formatado
 */
Card.Author = Author

/**
 * Componente para ser usado dentro do componente Card
 *
 * @param children A sinpose do mangá
 * @param maxSynopsisLength O tamanho máximo da sinpose, valor padrão: 100
 * @param className A classe do elemento
 * @returns A sinpose do mangá formatada
 */
Card.Synopsis = Synopsis

export default Card
