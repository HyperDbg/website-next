import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default async function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[72rem] flex-col items-center gap-6 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            A debugger designed for analyzing, fuzzing and reversing.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            HyperDbg debugger is an open-source, user-mode, and kernel-mode
            debugger with a focus on using hardware technologies to provide new
            features to the debuggers’ world.
          </p>
          <div className="space-x-2">
            <Link href="#" className={cn(buttonVariants({ size: 'lg' }))}>
              Get Started
            </Link>
            <Link
              href={'#'}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              Download
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
