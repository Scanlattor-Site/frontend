'use client'
import { Menu, Transition } from '@headlessui/react'
import type { NavItemType } from '@/constants/navItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface MenuHamburguerProps {
  items: NavItemType[]
}

export default function MenuHamburguer({ items }: MenuHamburguerProps) {
  const pathname = usePathname()
  const defaultClassesLines =
    'border border-primary border-solid w-6 rounded-md transition-all duration-300'

  return (
    <div>
      <Menu>
        <Menu.Button className="p-3 text-gray font-bold md:p-0 flex flex-col items-end focus:outline-none md:hidden gap-1 bg-quaternary bg-opacity-20 rounded-md h-full">
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
          enter="transition duration-300 ease-out"
          enterFrom="transform translate-x-10 opacity-40"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform -translate-x-20 opacity-0"
        >
          <Menu.Items className="absolute -right-3 top-0 mt-3 w-screen h-screen bg-primary outline-none">
            <div className="py-1">
              {items.map((item, index) => (
                <Menu.Item
                  key={item.href + index}
                  as={Link}
                  href={item.href}
                  className={`${
                    pathname === item.href ? 'bg-secondary text-primary' : ''
                  } ui-active:bg-secondary ui-active:text-primary text-gray block px-4 py-2 text-sm`}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
