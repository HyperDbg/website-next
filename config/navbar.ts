export type NavigationMenu = {
  title: string
  items: Array<NavigationItem>
}

export type NavigationItem = {
  title: string
  href: string
  disabled?: boolean
  description?: string
}

export const navbarItems: Array<NavigationItem | NavigationMenu> = [
  {
    title: 'Docs',
    items: [
      {
        title: 'Documentation',
        href: 'https://docs.hyperdbg.org',
        description: 'Read the documentation to learn how to use HyperDbg.',
      },
      {
        title: 'Doxygen',
        href: 'https://doxygen.hyperdbg.org/',
        description: 'Read the doxygen to learn how to use HyperDbg.',
      },
      {
        title: 'Cheatsheet',
        href: '/cheatsheet',
        description: 'Learn how to use HyperDbg with examples.',
      },
    ],
  },
  {
    title: 'Learn',
    items: [
      {
        title: 'Tutorials',
        href: '/tutorials',
        description: 'Learn how to use HyperDbg with examples.',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Issues',
        href: '',
        description: 'Report a bug or request a feature.',
      },
      {
        title: 'Discussions',
        href: '',
        description: 'Ask questions and find answers.',
      },
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
    description: 'Read the latest news about HyperDbg.',
  },
]
