import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { CopyCitation } from './copy-citation'

const citation = `
@inproceedings {
  karvandi2022hyperdbg,
  title = {
    HyperDbg: Reinventing Hardware-Assisted Debugging
  },
  author = {
    Karvandi, Mohammad Sina 
    and Gholamrezaei, MohammadHosein 
    and Khalaj Monfared, Saleh 
    and Meghdadizanjani, Soroush 
    and Abbassi, Behrooz 
    and Amini, Ali 
    and Mortazavi, Reza 
    and Gorgin, Saeid 
    and Rahmati, Dara 
    and Schwarz, Michael
  },
  booktitle = {
    Proceedings of the 2022 ACM SIGSAC Conference on Computer and 
    Communications Security
  },
  pages = {
    1709--1723
  },
  year = {
    2022
  }
}`

export default function CitePaper() {
  return (
    <div className="container flex flex-col gap-x-0 py-6 lg:flex-row lg:gap-x-2 lg:py-16">
      <div className="mb-12 flex flex-col gap-4 lg:w-1/3">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Cite Paper
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          If you use HyperDbg in your research, please cite our paper.
        </p>
      </div>

      <div className="space-y-12 lg:w-2/3">
        <section>
          <Card className="">
            <CardHeader>
              <CardTitle>Reinventing Hardware-Assisted Debugging</CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-sm">
              <pre>{citation}</pre>
            </CardContent>
            <CardFooter className="flex w-full justify-end">
              <CopyCitation citation={citation} />
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}
