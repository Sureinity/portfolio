"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
  const label =
    resolvedTheme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(nextTheme)}
      className="icon-badge h-10 w-10 text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--line-strong)] hover:bg-[color:var(--background-muted)]"
    >
      <SunMedium
        aria-hidden
        className={`h-4 w-4 ${resolvedTheme === "dark" ? "hidden" : "block"}`}
      />
      <Moon
        aria-hidden
        className={`h-4 w-4 ${resolvedTheme === "dark" ? "block" : "hidden"}`}
      />
    </button>
  );
}
