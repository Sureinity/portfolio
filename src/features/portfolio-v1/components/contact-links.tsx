import type { ContactLink } from "@/features/portfolio-v1/content";
import { ArrowUpRight } from "lucide-react";

type ContactLinksProps = {
  links: ContactLink[];
};

export function ContactLinks({ links }: ContactLinksProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="soft-card group flex h-full flex-col gap-4 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,241,228,0.95),rgba(232,245,255,0.95))] text-slate-800 ring-1 ring-white/80">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-slate-700" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                {link.label}
              </p>
              <p className="mt-3 text-base font-semibold text-slate-900">
                {link.value}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {link.note}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
