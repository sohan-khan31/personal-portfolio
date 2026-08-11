import { BookOpen, FileText, Presentation, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import {
  conferences,
  journalArticles,
  posters,
  reports,
} from "@/lib/cv-data"

function PubList({
  icon,
  title,
  count,
  items,
}: {
  icon: React.ReactNode
  title: string
  count: number
  items: string[]
}) {
  return (
    <Reveal className="rounded-2xl border border-border bg-card/50 p-6 md:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
            {icon}
          </span>
          <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
        </div>
        <span className="font-display text-sm font-semibold text-muted-foreground">
          {String(count).padStart(2, "0")}
        </span>
      </div>
      <ol className="mt-5 space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span className="font-display text-xs font-semibold text-primary/80 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-pretty text-muted-foreground">{item}</span>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}

export function ResearchSection() {
  return (
    <section id="research" className="relative mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="03"
        title="Research & Publications"
        subtitle="Peer-reviewed articles, working papers, technical reports, and poster presentations spanning river geomorphology, climate resilience, and water security."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="lg:row-span-2">
          <PubList
            icon={<BookOpen className="h-5 w-5" />}
            title="Journal Articles"
            count={journalArticles.length}
            items={journalArticles}
          />
        </div>
        <PubList
          icon={<FileText className="h-5 w-5" />}
          title="Reports"
          count={reports.length}
          items={reports}
        />
        <PubList
          icon={<Presentation className="h-5 w-5" />}
          title="Poster Presentations"
          count={posters.length}
          items={posters}
        />
      </div>

      <Reveal className="mt-6 rounded-2xl border border-border bg-card/50 p-6 md:p-7">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
            <Users className="h-5 w-5" />
          </span>
          <h3 className="font-display text-lg font-semibold tracking-tight">
            Conferences, Events &amp; Workshops
          </h3>
        </div>
        <ul className="mt-5 space-y-4">
          {conferences.map((c, i) => (
            <li key={i} className="border-l border-accent/40 pl-4">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-display text-xs font-medium text-accent">{c.date}</span>
                <h4 className="font-medium">{c.title}</h4>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
