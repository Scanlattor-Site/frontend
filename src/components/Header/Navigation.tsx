'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type NavItems = {
  label: string
  href: string
}

interface NavigationProps {
  navItems: NavItems[]
}

export default function Navigation({ navItems }: NavigationProps) {
  const pathname = usePathname()
  return navItems.map((item, index) => (
    <Link
      key={item.href + index}
      className={twMerge(
        'p-2 transform hover:font-semibold',
        pathname === `${item.href}`
          ? 'font-bold text-lg border-b-2 border-b-solid border-b-white'
          : '',
      )}
      href={`${item.href}`}
    >
      {item.label}
    </Link>
  ))
}
