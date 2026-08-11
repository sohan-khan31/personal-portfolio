import { Reveal } from "@/components/reveal"

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        <span className="font-display text-sm font-medium tracking-[0.3em] text-primary">
          {index}
        </span>
        <span className="h-px flex-1 max-w-24 bg-border" />
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}
