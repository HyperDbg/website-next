export default async function Tutorials() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Tutorials
          </h1>
          <p className="text-xl text-muted-foreground">
            Official and community tutorials for learning how to use the
            HyperDbg.
          </p>
        </div>
      </div>
    </div>
  )
}
