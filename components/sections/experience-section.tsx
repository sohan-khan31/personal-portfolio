import { Briefcase, HandHeart, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import {
  experience,
  volunteering,
  type ExperienceItem,
  type VolunteerItem,
} from "@/lib/cv-data"

function TimelineNode({ current }: { current?: boolean }) {
  return (
    <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center">
      {current ? (
        <>
          <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-primary/40" />
          <span className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
        </>
      ) : (
        <span className="h-3 w-3 rounded-full border-2 border-border bg-card" />
      )}
    </span>
  )
}

function WorkCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative border-l border-border pb-10 pl-8 last:pb-0">
      <TimelineNode current={item.current} />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-lg font-semibold tracking-tight">{item.role}</h3>
        <span className="font-display text-xs font-medium tracking-wide text-primary">
          {item.date}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-foreground/90">{item.org}</p>
      {item.detail ? (
        <p className="text-xs text-muted-foreground">{item.detail}</p>
      ) : null}
      {item.project ? (
        <p className="mt-3 rounded-md border border-border bg-secondary/50 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground/80">Project: </span>
          {item.project}
        </p>
      ) : null}
      <ul className="mt-3 space-y-2">
        {item.points.map((p, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1 w-1 flex-none rounded-full bg-primary/70" />
            <span className="text-pretty">{p}</span>
          </li>
        ))}
      </ul>
      {item.tools ? (
        <p className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
          <Wrench className="mt-0.5 h-3.5 w-3.5 flex-none text-accent" />
          <span>
            <span className="font-semibold text-foreground/80">Tools: </span>
            {item.tools}
          </span>
        </p>
      ) : null}
    </div>
  )
}

function VolunteerCard({ item }: { item: VolunteerItem }) {
  return (
    <Reveal className="rounded-xl border border-border bg-card/50 p-5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display font-semibold tracking-tight">{item.role}</h3>
        <span className="text-xs font-medium text-accent">{item.date}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-foreground/90">{item.org}</p>
      <ul className="mt-3 space-y-2">
        {item.points.map((p, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent/70" />
            <span className="text-pretty">{p}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-t border-border bg-grid"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="02"
          title="Work Experience"
          subtitle="A decade of research, fieldwork, and geospatial practice across leading academic, governmental, and humanitarian institutions in Bangladesh."
        />

        <div className="mb-8 flex items-center gap-2 text-sm font-medium text-primary">
          <Briefcase className="h-4 w-4" />
          Professional roles
        </div>

        <Reveal className="max-w-3xl">
          {experience.map((item, i) => (
            <WorkCard key={i} item={item} />
          ))}
        </Reveal>

        <div className="mb-8 mt-16 flex items-center gap-2 text-sm font-medium text-accent">
          <HandHeart className="h-4 w-4" />
          Voluntary experience
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {volunteering.map((item, i) => (
            <VolunteerCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
