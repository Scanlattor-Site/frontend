import { Skeleton } from 'antd'
import Image, { ImageProps } from 'next/image'
import Title from './Title'
import { twMerge } from 'tailwind-merge'
import Author from './Author'
import Synopsis from './Synopsis'

export interface CardProps {
  manga: MangasType.MangaProps
  children: React.ReactNode
  loading?: boolean
  className?: HTMLDivElement['className']
  imageClassName?: ImageProps['className']
}

function Card({
  manga,
  loading,
  imageClassName,
  className,
  children,
}: CardProps) {
  return (
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
      <div className={twMerge('flex gap-2', className)}>
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
        <div className="flex flex-col gap-2 mt-2 flex-shrink max-w-xs h-full">
          {children}
        </div>
      </div>
    </Skeleton>
  )
}

/**
 * Componente para ser usado dentro do componente Card
 *
 * @param children O titulo do mangá
 * @param className A classe do elemento
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
 * @param className A classe do elemento
 * @returns A sinpose do mangá formatada
 */
Card.Synopsis = Synopsis

export default Card
