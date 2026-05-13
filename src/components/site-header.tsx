"use client";

import Image from "next/image";
import type { NavLink, PaletteAction } from "@/lib/template-content";
import { ThemeToggle } from "@/components/theme-toggle";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

type SiteHeaderProps = {
  navLinks: NavLink[];
  paletteActions: PaletteAction[];
};

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 px-4 pt-2 sm:px-6 lg:px-8">
      <div className="panel site-chrome-panel mx-auto px-3 py-3">
        <div className="flex items-center gap-3">
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
            className="ml-auto hidden lg:block"
          >
            <ul className="flex items-center gap-1">
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

          <div className="flex items-center gap-2">
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
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
              className="icon-badge mobile-menu-button h-10 w-10 text-[color:var(--foreground)] transition hover:-translate-y-0.5 lg:hidden"
            >
              {menuOpen ? (
                <X aria-hidden className="h-4 w-4" />
              ) : (
                <Menu aria-hidden className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`mobile-nav-menu lg:hidden ${menuOpen ? "mobile-nav-menu-open" : ""}`}
        >
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith("#") ? undefined : "_blank"}
                  rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                  onClick={() => setMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
