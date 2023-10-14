export default async function Tutorials() {
  return (
    <div className="container flex flex-col gap-x-0 py-6 lg:flex-row lg:gap-x-2 lg:py-16">
      <div className="mb-12 flex flex-col gap-4 lg:w-1/3">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Cheat Sheet
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Native Debuggers command map and cheat sheet.
        </p>
      </div>
    </div>
  )
}
