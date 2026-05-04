import type { SocialLink } from "@/lib/template-content";
import { ArrowUpRight } from "lucide-react";

type SocialLinksGridProps = {
  links: SocialLink[];
};

export function SocialLinksGrid({ links }: SocialLinksGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.title}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="panel-muted group flex items-start gap-4 p-4 transition hover:-translate-y-1 hover:border-[color:var(--line-strong)]"
          >
            <span className="icon-badge h-12 w-12 shrink-0 text-[color:var(--foreground)]">
              <Icon aria-hidden className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-[color:var(--foreground)]">
                {link.title}
              </span>
              <span className="mt-1 block text-sm text-[color:var(--muted-foreground)]">
                {link.handle}
              </span>
              <span className="mt-3 block text-sm leading-7 text-[color:var(--muted-foreground)]">
                {link.note}
              </span>
            </span>
            <ArrowUpRight
              aria-hidden
              className="mt-1 h-4 w-4 shrink-0 text-[color:var(--muted-foreground)] transition group-hover:text-[color:var(--foreground)]"
            />
          </a>
        );
      })}
    </div>
  );
}
