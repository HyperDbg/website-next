export type NavbarItem = {
  title: string
  href: string
  disabled?: boolean
}
export const navbarItems: Array<NavbarItem> = [
  {
    title: 'Documentation',
    href: 'https://docs.hyperdbg.org/',
  },
  {
    title: 'Doxygen',
    href: 'https://doxygen.hyperdbg.org/',
  },
  {
    title: 'Tutorials',
    href: '/tutorials',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
]
