import { Briefcase, HandHeart, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import {
  projects,
  type ProjectsItem,
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

function ProjectsCard({ item }: { item: ProjectsItem }) {
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

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative border-t border-border bg-grid"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="02"
          title="Projects"
          subtitle="Selected research, academic, and professional projects demonstrating expertise in disaster management, climate resilience, GIS, and applied research."
        />

        <div className="mb-8 flex items-center gap-2 text-sm font-medium text-primary">
          <Briefcase className="h-4 w-4" />
          Accomplished and Ongoing Projects
        </div>

        <Reveal className="max-w-3xl">
          {projects.map((item, i) => (
            <ProjectsCard key={i} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
