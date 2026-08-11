import { cn } from "@/lib/utils"

/**
 * Abstract topographic contour field — a nod to cartography / terrain models.
 * Purely decorative and theme-derived (not real geographic data).
 */
export function TopoBackdrop({ className }: { className?: string }) {
  const lines = Array.from({ length: 9 })
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="topoFade" cx="50%" cy="42%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="topoMask">
            <rect width="1200" height="800" fill="url(#topoFade)" />
          </mask>
        </defs>
        <g mask="url(#topoMask)" stroke="var(--primary)" strokeOpacity="0.22">
          {lines.map((_, i) => {
            const offset = i * 26
            return (
              <path
                key={i}
                d={`M -100 ${180 + offset}
                    C 200 ${120 + offset}, 380 ${300 + offset}, 620 ${240 + offset}
                    S 1050 ${140 + offset}, 1360 ${260 + offset}`}
                strokeWidth={i % 3 === 0 ? 1.4 : 0.8}
              />
            )
          })}
          {lines.map((_, i) => {
            const offset = i * 30
            return (
              <path
                key={`b-${i}`}
                d={`M -100 ${520 + offset}
                    C 260 ${470 + offset}, 460 ${640 + offset}, 720 ${560 + offset}
                    S 1080 ${470 + offset}, 1360 ${580 + offset}`}
                strokeWidth={i % 3 === 0 ? 1.4 : 0.8}
                stroke="var(--accent)"
                strokeOpacity="0.16"
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}
