import { twMerge } from 'tailwind-merge'

export interface SynopsisProps {
  children: string
  maxSynopsisLength?: number
  className?: HTMLParagraphElement['className']
}

const MAX_SYNOPSIS_LENGTH = 100

/**
 * Componente para ser usado dentro do componente Card
 *
 * @param children A sinpose do mangá
 * @param maxSynopsisLength O tamanho máximo da sinpose, valor padrão: 100
 * @param className A classe do elemento
 * @returns A sinpose do mangá formatada
 */
export default function Synopsis({
  children: synopsis,
  maxSynopsisLength,
  className,
}: SynopsisProps) {
  return (
    <p className={twMerge('text-xs w-fit', className)}>
      {synopsis.length > (maxSynopsisLength || MAX_SYNOPSIS_LENGTH)
        ? synopsis.slice(0, maxSynopsisLength || MAX_SYNOPSIS_LENGTH) + '...'
        : synopsis}
    </p>
  )
}
