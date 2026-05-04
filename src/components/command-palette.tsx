"use client";

import {
  startTransition,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import { ArrowUpRight, Search } from "lucide-react";
import type { PaletteAction } from "@/lib/template-content";

type CommandPaletteProps = {
  actions: PaletteAction[];
};

export function CommandPalette({ actions }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const inputRef = useRef<HTMLInputElement>(null);

  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const filteredActions = actions.filter((action) => {
    if (!normalizedQuery) {
      return true;
    }

    return `${action.title} ${action.description} ${action.group}`
      .toLowerCase()
      .includes(normalizedQuery);
  });

  const groupedActions: Record<string, PaletteAction[]> = {};

  for (const action of filteredActions) {
    groupedActions[action.group] ??= [];
    groupedActions[action.group].push(action);
  }

  const closePalette = () => {
    setIsOpen(false);
    setQuery("");
  };

  const runAction = (action: PaletteAction) => {
    if (action.external) {
      window.open(action.href, "_blank", "noopener,noreferrer");
      closePalette();
      return;
    }

    if (action.href.startsWith("#")) {
      const target = document.querySelector<HTMLElement>(action.href);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", action.href);
      }

      closePalette();
      return;
    }

    window.location.assign(action.href);
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Open command palette"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--background-muted)] px-3 text-sm text-[color:var(--muted-foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--line-strong)] hover:text-[color:var(--foreground)]"
      >
        <Search aria-hidden className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
        <span className="mono-detail rounded-md border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-2 py-0.5">
          Ctrl K
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/28 px-4 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="command-palette-title"
          onClick={closePalette}
        >
          <div
            className="panel mx-auto max-w-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-[color:var(--line)] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <Search
                  aria-hidden
                  className="h-4 w-4 text-[color:var(--muted-foreground)]"
                />
                <div>
                  <p id="command-palette-title" className="font-semibold">
                    Command palette
                  </p>
                  <p className="text-sm text-[color:var(--muted-foreground)]">
                    Jump to sections, open links, or switch to the preserved v1
                    design.
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();

                if (filteredActions[0]) {
                  runAction(filteredActions[0]);
                }
              }}
              className="border-b border-[color:var(--line)] px-5 py-4 sm:px-6"
            >
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  startTransition(() => setQuery(nextValue));
                }}
                placeholder="Search for a section or action"
                className="w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--background-muted)] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted-foreground)]"
              />
            </form>

            <div className="max-h-[60vh] overflow-y-auto px-5 py-5 sm:px-6">
              {filteredActions.length === 0 ? (
                <p className="text-sm text-[color:var(--muted-foreground)]">
                  No actions match this search yet.
                </p>
              ) : (
                <div className="space-y-5">
                  {Object.entries(groupedActions).map(([group, groupActions]) => (
                    <div key={group} className="space-y-2">
                      <p className="mono-detail uppercase text-[color:var(--muted-foreground)]">
                        {group}
                      </p>
                      <div className="space-y-2">
                        {groupActions.map((action) => (
                          <button
                            key={`${group}-${action.title}`}
                            type="button"
                            onClick={() => runAction(action)}
                            className="flex w-full items-start justify-between gap-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--background-muted)] px-4 py-3 text-left transition hover:border-[color:var(--line-strong)] hover:bg-[color:var(--accent-soft)]"
                          >
                            <span>
                              <span className="block font-medium text-[color:var(--foreground)]">
                                {action.title}
                              </span>
                              <span className="mt-1 block text-sm leading-6 text-[color:var(--muted-foreground)]">
                                {action.description}
                              </span>
                            </span>
                            <ArrowUpRight
                              aria-hidden
                              className="mt-1 h-4 w-4 shrink-0 text-[color:var(--muted-foreground)]"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
