const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projetos',
  },
  {
    label: 'Login',
    href: '/login',
  },
]

export type NavItemType = (typeof navItems)[0]

export default navItems
