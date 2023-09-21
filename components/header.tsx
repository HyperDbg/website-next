import { MainNav } from '@/components/main-nav'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from './icons'

export function Header() {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav />
        <nav>
          <Link
            href="/cite-paper"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-4',
            )}
          >
            <Icons.citation className="mr-2 h-4 w-4" /> Cite Paper
          </Link>
        </nav>
      </div>
    </header>
  )
}
