import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { profile, references, socials } from "@/lib/cv-data"

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="07"
        title="Get in Touch"
        subtitle="Open to research collaborations, fellowships, and roles in disaster management, climate research, and geospatial science."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* Contact + socials */}
        <Reveal className="rounded-2xl border border-border bg-card/50 p-6 md:p-8">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 rounded-lg border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <span className="block truncate font-medium group-hover:text-primary">
                  {profile.email}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Phone
                </span>
                {profile.phones.map((p) => (
                  <span key={p} className="mr-3 font-medium">
                    {p}
                  </span>
                ))}
              </span>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-secondary/40 p-4">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Address
                </span>
                <span className="text-sm font-medium leading-relaxed">{profile.address}</span>
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Find me online
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 rounded-md border border-border px-3 py-2.5 text-sm transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium">{s.label}</span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {s.handle}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 flex-none text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* References */}
        <Reveal delay={80} className="rounded-2xl border border-border bg-card/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-semibold tracking-tight">References</h3>
          <ul className="mt-5 space-y-4">
            {references.map((r) => (
              <li
                key={r.email}
                className="rounded-lg border border-border bg-secondary/30 p-4"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-medium">{r.name}</h4>
                </div>
                <p className="text-sm text-primary">{r.role}</p>
                <p className="text-xs text-muted-foreground">{r.org}</p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <a
                    href={`mailto:${r.email}`}
                    className="inline-flex items-center gap-1 hover:text-primary"
                  >
                    <Mail className="h-3 w-3" />
                    {r.email}
                  </a>
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    {r.phone}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-display text-xs font-bold text-primary">
            MSK
          </span>
          <span className="text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} Md Sohan Khan. All rights reserved.`}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Disaster Management · GIS &amp; Remote Sensing · Dhaka, Bangladesh
        </p>
      </div>
    </footer>
  )
}
