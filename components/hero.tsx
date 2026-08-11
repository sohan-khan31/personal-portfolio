import { ArrowDown, Mail, MapPin, Satellite } from "lucide-react"
import { profile, socials, stats } from "@/lib/cv-data"
import { TopoBackdrop } from "@/components/topo-backdrop"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <TopoBackdrop />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--background)_92%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Satellite className="h-3.5 w-3.5 text-primary" />
            Research Associate · SPARRSO Fellow · GIS &amp; RS
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 font-display text-lg font-medium tracking-tight text-foreground/90 sm:text-xl">
            {profile.title}
            <span className="mx-2 text-primary">/</span>
            <span className="text-muted-foreground">{profile.subtitle}</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore my work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            {socials.slice(0, 4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Monogram medallion + stat strip */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-square rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-grid opacity-40" />
            <div className="relative flex h-full flex-col items-center justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-primary/40 bg-primary/10 sm:h-36 sm:w-36">
                <span className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  {profile.initials}
                </span>
              </div>
              <p className="mt-6 text-center font-display text-sm font-semibold tracking-tight">
                Md Sohan Khan
              </p>
              <p className="mt-1 text-center text-xs text-muted-foreground">
                Disaster Management · Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display text-2xl font-bold text-primary">
                    {s.value}
                  </span>
                  <p className="mt-1 text-xs font-medium leading-snug text-foreground">
                    {s.label}
                  </p>
                  <p className="text-[11px] leading-snug text-muted-foreground">
                    {s.sub}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
