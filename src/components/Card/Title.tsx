import { twMerge } from 'tailwind-merge'

export interface TitleProps {
  children: string
  className?: HTMLHeadingElement['className']
  maxTitleLength?: number
}

const MAX_TITLE_LENGTH = 40

/**
 * Componente para ser usado dentro do componente Card
 *
 * @param children O titulo do mangá
 * @param className A classe do elemento
 * @param maxTitleLength O tamanho máximo do título, valor padrão: 40
 * @returns O nome do autor do mangá formatado
 */
export default function Title({
  children,
  className,
  maxTitleLength,
}: TitleProps) {
  return (
    <h3 className={twMerge('font-bold text-sm w-fit', className)}>
      {children.length > (maxTitleLength || MAX_TITLE_LENGTH)
        ? children.slice(0, maxTitleLength || MAX_TITLE_LENGTH) + '...'
        : children}
    </h3>
  )
}
