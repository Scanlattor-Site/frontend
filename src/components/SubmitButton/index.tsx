'use client'

import Button from '@/components/Button'
import { type ComponentProps } from 'react'

type Props = ComponentProps<typeof Button> & {
  pendingText?: string
  pending?: boolean
}

export function SubmitButton({
  children,
  pendingText = 'Submitting...',
  pending,
  ...props
}: Props) {
  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? pendingText : children}
    </Button>
  )
}
