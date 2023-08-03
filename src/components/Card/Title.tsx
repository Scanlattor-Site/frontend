import { twMerge } from 'tailwind-merge'

export interface TitleProps {
  children: string
  className?: HTMLHeadingElement['className']
}

/**
 * Componente para ser usado dentro do componente Card
 *
 * @param children O titulo do mangá
 * @param className A classe do elemento
 * @returns O nome do autor do mangá formatado
 */
export default function Title({ children, className }: TitleProps) {
  return (
    <h3 className={twMerge('font-bold text-sm w-fit', className)}>
      {children}
    </h3>
  )
}
