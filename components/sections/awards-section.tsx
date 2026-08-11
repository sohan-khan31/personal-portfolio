import { Award, Medal, Trophy } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { achievements, grants } from "@/lib/cv-data"

export function AwardsSection() {
  return (
    <section id="awards" className="relative border-t border-border bg-grid">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="06"
          title="Grants, Fellowships & Achievements"
          subtitle="Competitive research fellowships, scholarships, and recognitions across academia, humanitarian service, and the arts."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Grants & fellowships */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Trophy className="h-4 w-4" />
              Grants, Fellowships &amp; Scholarships
            </div>
            {grants.map((g, i) => (
              <Reveal
                key={i}
                delay={i * 50}
                className="rounded-2xl border border-border bg-card/50 p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                    <Medal className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold leading-snug tracking-tight text-balance">
                      {g.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/90">{g.org}</p>
                    <p className="mt-1 font-display text-xs font-medium text-primary">{g.date}</p>
                    {g.desc ? (
                      <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
                        {g.desc}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <Award className="h-4 w-4" />
              Achievements &amp; Recognitions
            </div>
            <Reveal className="overflow-hidden rounded-2xl border border-border bg-card/50">
              <ul className="divide-y divide-border">
                {achievements.map((a, i) => (
                  <li key={i} className="flex gap-4 p-5">
                    <span className="font-display text-xs font-semibold tabular-nums text-accent">
                      {a.date}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium leading-snug text-pretty">{a.title}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">{a.org}</p>
                      {a.desc ? (
                        <p className="mt-1 text-xs text-muted-foreground">{a.desc}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
