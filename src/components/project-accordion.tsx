import type { ProjectEntry } from "@/lib/template-content";
import { ArrowUpRight, ChevronDown, FolderGit2 } from "lucide-react";
import { MermaidDiagram } from "./mermaid-diagram";

type ProjectAccordionProps = {
  projects: ProjectEntry[];
};

export function ProjectAccordion({ projects }: ProjectAccordionProps) {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <details
          key={project.title}
          open={index === 0}
          className="dropdown-card group panel-muted overflow-hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-5">
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="min-w-0 break-words font-editorial-serif text-xl text-[color:var(--foreground)]">
                  {project.title}
                </h3>
                <span className="mono-detail rounded-full border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-2.5 py-1 text-[color:var(--muted-foreground)]">
                  {project.status}
                </span>
                <span className="mono-detail text-[color:var(--muted-foreground)]">
                  {project.period}
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
                {project.summary}
              </p>
            </div>
            <ChevronDown
              aria-hidden
              className="mt-1 h-5 w-5 shrink-0 text-[color:var(--muted-foreground)] transition group-open:rotate-180"
            />
          </summary>

          <div className="dropdown-content rule-t px-4 py-4 sm:px-5">
            <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-4">
                <p className="text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
                  {project.detail}
                </p>

                <div>
                  <p className="mono-detail uppercase text-[color:var(--muted-foreground)]">
                    What this project covers
                  </p>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.diagram ? (
                  <div>
                    <p className="mono-detail uppercase text-[color:var(--muted-foreground)]">
                      Compact schema
                    </p>
                    <MermaidDiagram chart={project.diagram} />
                  </div>
                ) : null}

                <div>
                  <p className="mono-detail uppercase text-[color:var(--muted-foreground)]">
                    Sequence
                  </p>
                  <ol className="project-timeline mt-4">
                    {project.timeline.map((step) => (
                      <li key={step.title} className="project-timeline-item">
                        <span aria-hidden className="project-timeline-dot" />
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-[color:var(--foreground)]">
                            {step.title}
                          </h4>
                          <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-4 py-4">
                  <p className="mono-detail uppercase text-[color:var(--muted-foreground)]">
                    Engineering takeaway
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
                    {project.learned}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="mono-detail uppercase text-[color:var(--muted-foreground)]">
                    Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-3 py-2 text-sm text-[color:var(--foreground)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ghost-button"
                    >
                      <FolderGit2 className="h-4 w-4" />
                      GitHub
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ghost-button"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
