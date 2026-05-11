"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  const Icon = isDarkTheme ? Moon : SunMedium;

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} theme`}
      onClick={() => {
        setTheme(isDarkTheme ? "light" : "dark");
      }}
      className="icon-badge theme-toggle-button h-10 w-10 text-[color:var(--foreground)] transition hover:-translate-y-0.5"
    >
      <Icon
        aria-hidden
        className="h-4 w-4"
      />
    </button>
  );
}
