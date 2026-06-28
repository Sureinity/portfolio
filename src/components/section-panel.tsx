import type { ReactNode } from "react";

type SectionPanelProps = {
  id: string;
  title: string;
  children: ReactNode;
  srOnlyTitle?: boolean;
  action?: ReactNode;
  contentClassName?: string;
};

export function SectionPanel({
  id,
  title,
  children,
  srOnlyTitle = false,
  action,
  contentClassName,
}: SectionPanelProps) {
  return (
    <section id={id} className="panel overflow-hidden scroll-mt-28">
      <header className="section-panel-header px-5 py-4 sm:px-6">
        {srOnlyTitle ? (
          <h2 className="sr-only">{title}</h2>
        ) : (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="section-title-label">{title}</span>
            </div>
            {action}
          </div>
        )}
      </header>
      <div className={`px-5 py-5 sm:px-6 sm:py-6 ${contentClassName ?? ""}`}>{children}</div>
    </section>
  );
}
