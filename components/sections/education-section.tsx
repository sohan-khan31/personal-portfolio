import { GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { education } from "@/lib/cv-data"

export function EducationSection() {
  return (
    <section id="education" className="relative border-t border-border bg-grid">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="04"
          title="Education"
          subtitle="Academic foundation in disaster management from the University of Dhaka, with consistent top-tier results."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {e.grade}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-balance">
                {e.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{e.field}</p>
              <p className="mt-3 text-sm text-foreground/90">{e.institution}</p>
              <p className="text-xs text-muted-foreground">{e.location}</p>
              <p className="mt-4 font-display text-xs font-medium tracking-wide text-muted-foreground">
                {e.date}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
