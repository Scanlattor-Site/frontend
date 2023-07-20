import Logo from './Logo'
import MenuHamburguer from './MenuHamburguer'
import Navigation from './Navigation'
import navItems from '@/constants/navItems'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between p-3 from-primary to-secondary bg-gradient-to-r bg-gradi">
      <Logo />
      <nav className="flex gap-3 w-max items-center">
        <section className="hidden md:block">
          <Navigation navItems={navItems} />
        </section>
        <section className="block md:hidden">
          <MenuHamburguer items={navItems} />
        </section>
      </nav>
    </header>
  )
}
