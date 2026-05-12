import Image from "next/image";
import type { NavLink, PaletteAction } from "@/lib/template-content";
import { ThemeToggle } from "@/components/theme-toggle";
import { FileText } from "lucide-react";

type SiteHeaderProps = {
  navLinks: NavLink[];
  paletteActions: PaletteAction[];
};

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  return (
    <header className="site-header sticky top-0 z-50 px-4 pt-2 sm:px-6 lg:px-8">
      <div className="panel site-chrome-panel mx-auto px-3 py-3">
        <div className="grid grid-cols-[auto_1fr] items-center gap-3 lg:grid-cols-[auto_1fr_auto]">
          <a
            href="#top"
            className="site-brand-logo"
            aria-label="Back to top"
          >
            <Image
              src="/brand/icon-shorthand-boxed-light.svg"
              alt=""
              width={256}
              height={256}
              unoptimized
              aria-hidden
              className="h-full w-full object-cover object-center dark:hidden"
            />
            <Image
              src="/brand/icon-shorthand-boxed-dark.svg"
              alt=""
              width={256}
              height={256}
              unoptimized
              aria-hidden
              className="hidden h-full w-full object-cover object-center dark:block"
            />
          </a>

          <nav
            aria-label="Primary navigation"
            className="col-span-2 row-start-2 w-full lg:col-span-1 lg:col-start-2 lg:row-start-1"
          >
            <ul className="flex flex-wrap items-center justify-center gap-1 lg:justify-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("#") ? undefined : "_blank"}
                    rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                    className="inline-flex rounded-full px-4 py-2 text-sm text-[color:var(--muted-foreground)] transition hover:text-[color:var(--foreground)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-start-2 row-start-1 flex items-center justify-end gap-2 lg:col-start-3">
            <a
              href="/resume/john-ghlen-dealdo-resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Open resume PDF"
              className="icon-badge resume-toggle-button h-10 w-10 text-[color:var(--background)] transition hover:-translate-y-0.5"
            >
              <FileText
                aria-hidden
                className="h-4 w-4"
              />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
