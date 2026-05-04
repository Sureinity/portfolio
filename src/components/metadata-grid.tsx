import type { OverviewItem } from "@/lib/template-content";
import { ArrowUpRight } from "lucide-react";

type MetadataGridProps = {
  items: OverviewItem[];
};

export function MetadataGrid({ items }: MetadataGridProps) {
  return (
    <dl className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="panel-muted p-4">
            <dt className="flex items-center gap-3">
              <span className="icon-badge h-10 w-10 text-[color:var(--foreground)]">
                <Icon aria-hidden className="h-4 w-4" />
              </span>
              <span className="mono-detail uppercase text-[color:var(--muted-foreground)]">
                {item.label}
              </span>
            </dt>
            <dd className="mt-4 space-y-2">
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 text-base font-semibold text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]"
                >
                  {item.value}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <p className="text-base font-semibold text-[color:var(--foreground)]">
                  {item.value}
                </p>
              )}
              {item.detail ? (
                <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {item.detail}
                </p>
              ) : null}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
