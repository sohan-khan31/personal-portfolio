import { Compass, Heart, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import {
  personalInterests,
  profile,
  researchInterests,
} from "@/lib/cv-data"

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
      <SectionHeading index="01" title="Professional Summary" />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="rounded-2xl border border-border bg-card/50 p-6 md:p-8">
          <Sparkles className="h-6 w-6 text-primary" />
          <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/90">
            {profile.summary}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Based in</dt>
              <dd className="mt-1 font-medium">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Nationality</dt>
              <dd className="mt-1 font-medium">{profile.nationality}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Born</dt>
              <dd className="mt-1 font-medium">{profile.dob}</dd>
            </div>
          </dl>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={80} className="rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-2">
              <Compass className="h-5 w-5 text-primary" />
              <h3 className="font-display font-semibold">Research Interests</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {researchInterests.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-accent" />
              <h3 className="font-display font-semibold">Personal Interests</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {personalInterests.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
