import * as React from 'react'
import { Icons } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'

export function Footer() {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Licensed under{' '}
            <a
              href="https://github.com/HyperDbg/HyperDbg/blob/master/LICENSE"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GPLv3
            </a>
            .
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  )
}
