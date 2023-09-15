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

const tutorials = {
  courses: [
    {
      title: 'Reversing with HyperDbg',
      description:
        'A comprehensive guide focused on teaching reverse engineering techniques using HyperDbg. This course is designed for individuals interested in analyzing, fuzzing, and reversing software using modern hardware technologies.',
      author: 'Sina Karvandi',
      community: false,
      link: 'https://ost2.fyi/Dbg3301',
    },
    {
      title: 'Hypervisor From Scratch',
      description:
        "If you're interested in understanding the internal design and architecture of hypervisors and HyperDbg, you can read the Hypervisor From Scratch course.",
      author: 'Sina Karvandi',
      community: false,
      link: 'https://github.com/SinaKarvandi/Hypervisor-From-Scratch/',
    },
  ],
  videos: [
    {
      title:
        'A Practical Introduction to HyperDbg Debugger - Webinar (Persian)',
      description:
        'In this webinar, principles, design constraints, and first steps for using HyperDbg debugger and hypervisor-based reverse engineering are explained.',
      author: 'Sina Karvandi',
      community: false,
      link: 'https://www.youtube.com/watch?v=EK5WwWb5WNA',
    },
    {
      title: 'Hyperdbg installation and first steps - (Spanish)',
      description:
        'Step-by-step guide on installing and using HyperDbg debugger.',
      author: 'Ricardo Narvaja',
      community: true,
      link: 'https://www.youtube.com/watch?v=BBp5kGL1qoI',
    },
    {
      title: 'Hyperdbg instalation in two VM and new features - (Spanish)',
      description:
        'Installing HyperDbg on two virtual machines and explaining its new features.',
      author: 'Ricardo Narvaja',
      community: true,
      link: 'https://www.youtube.com/watch?v=rmkEW5IVDyg&t',
    },
  ],
} as const

export default async function Tutorials() {
  return (
    <div className="container flex py-6 lg:py-16">
      <div className="flex w-1/3 flex-col gap-4 md:max-w-[58rem]">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Tutorials
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Official and community tutorials for learning how to use the HyperDbg.
        </p>
      </div>

      <div className="w-2/3 space-y-12">
        <section id="courses">
          <header className="flex items-center justify-between mb-6 ml-6">
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

                <CardFooter className="w-full flex justify-between">
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
          <header className="flex items-center justify-between mb-6 ml-6">
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

                <CardFooter className="w-full flex justify-between">
                  <div className="flex items-center justify-start gap-1">
                    <span className="text-muted-foreground">By</span>{' '}
                    {video.author}
                  </div>

                  <Link
                    href="/"
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
