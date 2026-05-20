"use client";

import Image from "next/image";
import type { NavLink, PaletteAction } from "@/lib/template-content";
import { ThemeToggle } from "@/components/theme-toggle";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SiteHeaderProps = {
  navLinks: NavLink[];
  paletteActions: PaletteAction[];
};

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBrandLogo, setShowBrandLogo] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef<"up" | "down">("down");

  useEffect(() => {
    let frameId = 0;

    const updateBrandVisibility = () => {
      const currentScrollY = window.scrollY;
      let nextDirection = scrollDirectionRef.current;

      if (currentScrollY > lastScrollYRef.current) {
        nextDirection = "down";
      } else if (currentScrollY < lastScrollYRef.current) {
        nextDirection = "up";
      }

      lastScrollYRef.current = currentScrollY;
      scrollDirectionRef.current = nextDirection;

      setScrollDirection((currentDirection) =>
        currentDirection === nextDirection ? currentDirection : nextDirection,
      );

      const preview = document.getElementById("hero-brand-preview");
      const header = document.querySelector(".site-header");

      if (!(preview instanceof HTMLElement) || !(header instanceof HTMLElement)) {
        setShowBrandLogo(true);
        frameId = 0;
        return;
      }

      const previewBottom = preview.getBoundingClientRect().bottom;
      const headerBottom = header.getBoundingClientRect().bottom;
      const nextVisible = previewBottom <= headerBottom + 8;

      setShowBrandLogo((currentVisible) =>
        currentVisible === nextVisible ? currentVisible : nextVisible,
      );

      frameId = 0;
    };

    const queueUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateBrandVisibility);
    };

    lastScrollYRef.current = window.scrollY;
    updateBrandVisibility();

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
    };
  }, []);

  return (
    <header className="site-header sticky top-0 z-50 px-4 pt-2 sm:px-6 lg:px-8">
      <div className="panel site-chrome-panel mx-auto px-3 py-3">
        <div className="flex items-center gap-3">
          <a
            href="#top"
            className={`site-brand-logo site-brand-logo-motion ${
              showBrandLogo ? "site-brand-logo-visible" : "site-brand-logo-hidden"
            } ${scrollDirection === "down" ? "site-brand-logo-scroll-down" : "site-brand-logo-scroll-up"}`}
            aria-label="Back to top"
            aria-hidden={!showBrandLogo}
            tabIndex={showBrandLogo ? undefined : -1}
          >
            <Image
              src="/brand/slaine-icon.png"
              alt=""
              width={1254}
              height={1254}
              unoptimized
              aria-hidden
              className="h-full w-full object-cover object-center"
            />
          </a>

          <nav
            aria-label="Primary navigation"
            className="ml-auto hidden md:block"
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

          <div className="ml-auto flex items-center gap-2">
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
              className="icon-badge mobile-menu-button h-10 w-10 text-[color:var(--foreground)] transition hover:-translate-y-0.5 md:hidden"
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
          className={`mobile-nav-menu md:hidden ${menuOpen ? "mobile-nav-menu-open" : ""}`}
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
