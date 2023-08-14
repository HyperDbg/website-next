'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Icons } from '@/components/icons'
import { MobileNav } from '@/components/mobile-nav'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { navbarItems } from '@/config/navbar'

interface MainNavProps {
  children?: React.ReactNode
}

export function MainNav({ children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-3 md:flex">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {navbarItems?.length ? (
        <nav className="hidden gap-6 md:flex">
          {navbarItems?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                item.href.startsWith(`/${segment}`)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && navbarItems && (
        <MobileNav items={navbarItems}>{children}</MobileNav>
      )}
    </div>
  )
}
