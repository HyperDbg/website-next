import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default async function Tutorials() {
  const tutorials = await import('@/content/tutorials.json')

  return (
    <div className="container flex flex-col gap-x-0 py-6 lg:flex-row lg:gap-x-2 lg:py-16">
      <div className="mb-12 flex flex-col gap-4 lg:w-1/3">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Tutorials
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Official and community tutorials for learning how to use the HyperDbg.
        </p>
      </div>

      <div className="space-y-12 lg:w-2/3">
        <section id="courses">
          <header className="mb-6 flex items-center justify-between">
            <h2 className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-4xl">
              Courses
            </h2>
          </header>

          <div className="flex flex-col gap-4">
            {tutorials.courses.map((course) => (
              <Card key={course.title}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-2">
                    <span>{course.title}</span>
                    {course.community && (
                      <Badge variant="outline">Community</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="w-10/12">
                  {course.description}
                </CardContent>

                <CardFooter className="flex w-full justify-between">
                  <div className="flex items-center justify-start gap-1">
                    <span className="text-muted-foreground">By</span>{' '}
                    {course.author}
                  </div>

                  <Link
                    href={course.link}
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    Visit Course
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="videos">
          <header className="mb-6 flex items-center justify-between">
            <h2 className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-4xl">
              Videos
            </h2>
          </header>

          <div className="flex flex-col gap-4">
            {tutorials.videos.map((video) => (
              <Card key={video.title}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-start gap-2">
                    <span>{video.title}</span>
                    {video.community && (
                      <Badge variant="outline">Community</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="w-10/12">
                  {video.description}
                </CardContent>

                <CardFooter className="flex w-full justify-between">
                  <div className="flex items-center justify-start gap-1">
                    <span className="text-muted-foreground">By</span>{' '}
                    {video.author}
                  </div>

                  <Link
                    href={video.link}
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    Watch video
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
