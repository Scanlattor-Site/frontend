'use client'
import { Menu, Transition } from '@headlessui/react'
import type { NavItemType } from '@/constants/navItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export interface MenuHamburguerProps {
  items: NavItemType[]
}

export default function MenuHamburguer({ items }: MenuHamburguerProps) {
  const pathname = usePathname()
  const defaultClassesLines =
    'border border-white border-solid w-6 rounded-md transition-all duration-300'

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="p-3 text-gray font-bold md:p-0 flex flex-col items-end focus:outline-none md:hidden gap-1 bg-quaternary bg-opacity-50 rounded-md h-full">
          <span
            className={`${defaultClassesLines} ui-open:rotate-45 ui-open:translate-y-1.5`}
          />
          <span
            className={`${defaultClassesLines} ui-open:opacity-0 ui-open:-translate-x-5`}
          />
          <span
            className={`${defaultClassesLines} ui-open:-rotate-45 ui-open:-translate-y-1.5`}
          />
        </Menu.Button>
        <Transition
          as={Menu.Items}
          enter="transition duration-500 ease-out"
          enterFrom="transform opacity-40"
          leave="transition duration-300 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
          className="absolute -right-3 top-0 mt-12 py-1 w-screen h-[calc(100vh-3rem)] bg-quaternary outline-none"
        >
          {items.map((item, index) => (
            <Menu.Item
              key={item.href + index}
              as={Link}
              href={item.href}
              className={`${
                pathname === item.href ? 'bg-secondary font-bold' : ''
              } ui-active:bg-secondary ui-active:font-semibold text-gray block px-4 py-2 text-sm`}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Transition>
      </Menu>
    </div>
  )
}
