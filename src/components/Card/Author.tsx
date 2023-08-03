import { twMerge } from 'tailwind-merge'

export interface AuthorProps {
  children: string | null
  className?: HTMLParagraphElement['className']
}
/**
 * Componente para ser usado dentro do componente Card
 *
 * @param children O nome do autor do mangá
 * @param className A classe do elemento
 * @returns O nome do autor do mangá formatado
 */
export default function Author({ children, className }: AuthorProps) {
  return (
    <p className={twMerge('text-xs w-fit', className)}>
      Autor: {children || 'Desconhecido'}
    </p>
  )
}
