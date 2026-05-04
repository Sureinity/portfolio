import type { TimelineEntry } from "@/lib/template-content";
import { ChevronDown } from "lucide-react";

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
          className="group panel-muted overflow-hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-4 py-4 sm:px-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                  {item.title}
                </h3>
                <span className="mono-detail rounded-full border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-2.5 py-1 text-[color:var(--muted-foreground)]">
                  {item.mode}
                </span>
              </div>
              <p className="text-sm text-[color:var(--foreground)] sm:text-base">
                {item.organization}
              </p>
              <p className="mono-detail text-[color:var(--muted-foreground)]">
                {item.period}
              </p>
            </div>
            <ChevronDown
              aria-hidden
              className="mt-1 h-5 w-5 shrink-0 text-[color:var(--muted-foreground)] transition group-open:rotate-180"
            />
          </summary>

          <div className="rule-t px-4 py-4 sm:px-5">
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
