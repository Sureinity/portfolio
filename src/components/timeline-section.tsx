import Image from "next/image";
import type { TimelineEntry } from "@/lib/template-content";
import { Ban, ChevronDown } from "lucide-react";

type TimelineSectionProps = {
  items: TimelineEntry[];
};

export function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={`${item.organization}-${item.title}`}
          open={item.open}
          className="dropdown-card group panel-muted overflow-hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-5">
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="min-w-0 break-words font-editorial-serif text-xl text-[color:var(--foreground)]">
                  {item.title}
                </h3>
                <span className="mono-detail rounded-full border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-2.5 py-1 text-[color:var(--muted-foreground)]">
                  {item.mode}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base">
                <span className="inline-flex min-w-0 items-center gap-2">
                  {item.organizationLogoSrc ? (
                    <span className="relative inline-flex h-7 w-7 overflow-hidden rounded-full border border-[color:var(--line)] bg-[color:var(--background-elevated)]">
                      <Image
                        src={item.organizationLogoSrc}
                        alt={item.organizationLogoAlt ?? `${item.organization} logo`}
                        fill
                        sizes="28px"
                        className="object-cover object-center"
                      />
                    </span>
                  ) : item.organizationLogoFallback === "not-allowed" ? (
                    <span
                      aria-hidden
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--background-elevated)] text-[color:var(--muted-foreground)]"
                    >
                      <Ban className="h-4 w-4" />
                    </span>
                  ) : null}

                  {item.organizationUrl ? (
                    <a
                      href={item.organizationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="min-w-0 break-words text-[color:var(--foreground)] underline decoration-[color:var(--line-strong)] underline-offset-4 transition hover:text-[color:var(--muted-foreground)]"
                    >
                      {item.organization}
                    </a>
                  ) : (
                    <span className="min-w-0 break-words text-[color:var(--foreground)]">{item.organization}</span>
                  )}
                </span>
                {item.location ? (
                  <span className="mono-detail text-[color:var(--muted-foreground)]">
                    {item.location}
                  </span>
                ) : null}
              </div>
              <p className="mono-detail text-[color:var(--muted-foreground)]">
                {item.period}
              </p>
            </div>
            <ChevronDown
              aria-hidden
              className="mt-1 h-5 w-5 shrink-0 text-[color:var(--muted-foreground)] transition group-open:rotate-180"
            />
          </summary>

          <div className="dropdown-content rule-t px-4 py-4 sm:px-5">
            <div className="space-y-4">
              <p className="text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
                {item.summary}
              </p>
              <ul className="space-y-3 text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-3 py-2 text-sm text-[color:var(--foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
