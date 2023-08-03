import { twMerge } from 'tailwind-merge'

export interface ButtonProps {
  children: React.ReactNode
  secondary?: boolean
  className?: string
}

export default function Button({
  children,
  secondary,
  className,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'bg-primary px-8 py-2 rounded-full hover:px-[calc(2rem-2px)] hover:py-[calc(0.5rem-2px)] hover:bg-white hover:border-2 hover:border-primary hover:text-primary text-white font-semibold',
        secondary && 'bg-secondary hover:border-secondary hover:text-secondary',
        className,
      )}
    >
      {children}
    </button>
  )
}
