'use client'
import { Suspense, useEffect, useState } from 'react'
import LogoAndName from './Logo'
import MenuHamburguer from './MenuHamburguer'
import Navigation from './Navigation'
import navItems from '@/constants/navItems'
import { twMerge } from 'tailwind-merge'
import { Transition } from '@headlessui/react'
import Search from '../Search'
import { usePathname } from 'next/navigation'

const ROUTES_WITH_STICKY_HEADER = ['/']

export default function Header() {
  const [headerIsColored, setHeaderIsCollored] = useState(false)
  const [isScrollingTop, setIsScrollingTop] = useState(true)
  const pathname = usePathname()
  const isFixed = ROUTES_WITH_STICKY_HEADER.includes(pathname)
  const scrollThreshold = 100 // Defina o valor em pixels para ativar a mudança de cor
  let prevScrollPos = 0

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    setIsScrollingTop(currentScrollPos < prevScrollPos)
    setHeaderIsCollored(currentScrollPos >= scrollThreshold)
    console.log(currentScrollPos < prevScrollPos)

    prevScrollPos = currentScrollPos
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Transition
      as="header"
      enter="transition duration-300 ease-out"
      enterFrom="transform -translate-y-20 opacity-40"
      enterTo="transform translate-y-0 opacity-100"
      leave="transition duration-300 ease-out"
      leaveFrom="transform translate-y-0 opacity-100"
      show={isScrollingTop}
      className={twMerge(
        'w-full from-transparent to-transparent bg-gradient-to-r sticky top-0 z-50',
        isFixed && 'fixed',
        isScrollingTop ? 'visible' : 'hidden',
        headerIsColored ? 'from-primary to-secondary' : '',
      )}
    >
      <section className="flex w-full items-center justify-between p-3 container gap-3">
        <LogoAndName />
        <nav className="flex gap-3 w-max items-center order-last md:order-none">
          <section className="hidden md:block">
            <Navigation navItems={navItems} />
          </section>
          <section className="block md:hidden">
            <MenuHamburguer items={navItems} />
          </section>
        </nav>
        <section className="md:block md:order-none order-2 max-md:flex-grow max-md:flex max-md:justify-end">
          <Suspense>
            <Search />
          </Suspense>
        </section>
      </section>
    </Transition>
  )
}
