import Image from "next/image";
import type { NavLink, PaletteAction } from "@/lib/template-content";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderProps = {
  navLinks: NavLink[];
  paletteActions: PaletteAction[];
};

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  return (
    <header className="site-header sticky top-0 z-50 px-4 pt-2 sm:px-6 lg:px-8">
      <div className="panel site-chrome-panel mx-auto px-3 py-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
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

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <nav
              aria-label="Primary navigation"
              className="overflow-x-auto pb-1 lg:pb-0"
            >
              <ul className="flex min-w-max items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex rounded-full px-4 py-2 text-sm text-[color:var(--muted-foreground)] transition hover:text-[color:var(--foreground)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
