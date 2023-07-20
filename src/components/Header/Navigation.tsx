'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
      className={`p-2 hover:scale-110 hover:text-quaternary transition-transform duration-300 ${
        pathname === `/${item.href}` ? 'text-bold' : ''
      }`}
      href={`/ ${item.href}`}
    >
      {item.label}
    </Link>
  ))
}
