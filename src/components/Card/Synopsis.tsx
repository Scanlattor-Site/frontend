import { twMerge } from 'tailwind-merge'

export interface SynopsisProps {
  children: string
  className?: HTMLParagraphElement['className']
}

/**
 * Componente para ser usado dentro do componente Card
 *
 * @param children A sinpose do mangá
 * @param className A classe do elemento
 * @returns A sinpose do mangá formatada
 */
export default function Synopsis({
  children: synopsis,
  className,
}: SynopsisProps) {
  return <p className={twMerge('text-xs w-fit', className)}>{synopsis}</p>
}
