import type { OverviewItem, SocialLink } from "@/lib/template-content";

type IdentityStripProps = {
  items: OverviewItem[];
  links: SocialLink[];
};

export function IdentityStrip({ items, links }: IdentityStripProps) {
  const quickItems = items.slice(0, 4);

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
      <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {quickItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="panel-muted min-w-0 px-4 py-4">
              <dt className="flex items-center gap-2">
                <span className="icon-badge h-9 w-9 text-[color:var(--foreground)]">
                  <Icon aria-hidden className="h-4 w-4" />
                </span>
                <span className="mono-detail uppercase text-[color:var(--muted-foreground)]">
                  {item.label}
                </span>
              </dt>
              <dd className="mt-3 text-sm leading-7 text-[color:var(--foreground)]">
                {item.value}
              </dd>
            </div>
          );
        })}
      </dl>

      <div className="panel-muted flex items-center gap-2 p-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={`${link.title}: ${link.handle}`}
              title={link.title}
              className="icon-badge h-11 w-11 text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:bg-[color:var(--background-elevated)] hover:text-[color:var(--accent)]"
            >
              <Icon aria-hidden className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
