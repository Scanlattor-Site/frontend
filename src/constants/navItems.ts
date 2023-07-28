const navItems = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Quem somos?',
    href: '/quem-somos',
  },
  {
    label: 'Projetos',
    href: '/projetos',
  },
  {
    label: 'Comunidade',
    href: '/comunidade',
  },
  {
    label: 'Biblioteca',
    href: '/biblioteca',
  },
]

export type NavItemType = (typeof navItems)[0]

export default navItems
