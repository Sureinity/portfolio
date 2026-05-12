"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  queueMicrotask(onStoreChange);
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const safeTheme = mounted ? resolvedTheme : "light";
  const isDarkTheme = safeTheme === "dark";
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
