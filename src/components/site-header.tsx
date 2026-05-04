import type { NavLink, PaletteAction } from "@/lib/template-content";
import { CommandPalette } from "@/components/command-palette";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderProps = {
  navLinks: NavLink[];
  paletteActions: PaletteAction[];
};

export function SiteHeader({ navLinks, paletteActions }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="panel mx-auto max-w-6xl px-3 py-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="#top"
            className="flex items-center gap-3 rounded-full px-1 py-1 transition hover:text-[color:var(--accent)]"
          >
            <span className="icon-badge h-11 w-11 rounded-full font-mono text-sm font-semibold">
              DP
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-[color:var(--foreground)]">
                Developer Resume Template
              </span>
              <span className="block text-xs text-[color:var(--muted-foreground)]">
                Panel-based portfolio structure
              </span>
            </span>
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
                      className="inline-flex rounded-full px-4 py-2 text-sm text-[color:var(--muted-foreground)] transition hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--foreground)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <CommandPalette actions={paletteActions} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
