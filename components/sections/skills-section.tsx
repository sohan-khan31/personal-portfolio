import { GraduationCap, Languages as LanguagesIcon, Layers } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { languages, skills, softSkills, training } from "@/lib/cv-data"

export function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="05"
        title="Skills & Expertise"
        subtitle="A geospatial-first toolkit spanning spatial analysis, programming, research methods, and design."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal
            key={group.category}
            delay={(i % 3) * 60}
            className="rounded-2xl border border-border bg-card/50 p-6"
          >
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                {group.category}
              </h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
        {/* Languages */}
        <Reveal className="rounded-2xl border border-border bg-card/50 p-6 md:p-7">
          <div className="flex items-center gap-2">
            <LanguagesIcon className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-semibold tracking-tight">Languages</h3>
          </div>
          <ul className="mt-5 space-y-4">
            {languages.map((l) => (
              <li key={l.name} className="border-l border-border pl-4">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-medium">{l.name}</span>
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {l.note}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{l.levels}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border pt-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Organizational
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Training */}
        <Reveal delay={80} className="rounded-2xl border border-border bg-card/50 p-6 md:p-7">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Training &amp; Courses
            </h3>
          </div>
          <ul className="mt-5 divide-y divide-border">
            {training.map((t, i) => (
              <li key={i} className="flex gap-4 py-3 first:pt-0">
                <span className="font-display text-xs font-semibold tabular-nums text-primary">
                  {t.year}
                </span>
                <div>
                  <p className="text-sm font-medium leading-snug">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
