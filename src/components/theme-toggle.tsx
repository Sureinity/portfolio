"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => {
        const isDarkTheme =
          document.documentElement.classList.contains("dark");
        setTheme(isDarkTheme ? "light" : "dark");
      }}
      className="icon-badge h-10 w-10 text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--line-strong)] hover:bg-[color:var(--background-muted)]"
    >
      <SunMedium
        aria-hidden
        className="h-4 w-4 block dark:hidden"
      />
      <Moon
        aria-hidden
        className="hidden h-4 w-4 dark:block"
      />
    </button>
  );
}
