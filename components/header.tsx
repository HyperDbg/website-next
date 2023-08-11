import { MainNav } from '@/components/main-nav'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function Header() {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav />
        <nav>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-4',
            )}
          >
            Cite Paper
          </Link>
        </nav>
      </div>
    </header>
  )
}
