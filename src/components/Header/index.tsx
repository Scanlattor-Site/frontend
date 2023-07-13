import Logo from './Logo'
import Navigation from './Navigation'
import { navItems } from '@/utils/navItems'

export default function Header() {
  return (
    <header className="flex w-full justify-between p-3 from-primary to-secondary bg-gradient-to-r bg-gradi">
      <Logo />
      <nav className="flex gap-3 w-max">
        <Navigation navItems={navItems} />
      </nav>
    </header>
  )
}
