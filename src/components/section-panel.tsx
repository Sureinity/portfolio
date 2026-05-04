import type { ReactNode } from "react";

type SectionPanelProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  srOnlyTitle?: boolean;
  action?: ReactNode;
};

export function SectionPanel({
  id,
  title,
  description,
  children,
  srOnlyTitle = false,
  action,
}: SectionPanelProps) {
  return (
    <section id={id} className="panel overflow-hidden scroll-mt-28">
      <header className="rule-b px-5 py-4 sm:px-6">
        {srOnlyTitle ? (
          <h2 className="sr-only">{title}</h2>
        ) : (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <span className="eyebrow">{title}</span>
              {description ? (
                <p className="max-w-3xl text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
                  {description}
                </p>
              ) : null}
            </div>
            {action}
          </div>
        )}
      </header>
      <div className="px-5 py-5 sm:px-6 sm:py-6">{children}</div>
    </section>
  );
}
