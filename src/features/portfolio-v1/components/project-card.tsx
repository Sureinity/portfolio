import type { Project } from "@/features/portfolio-v1/content";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const accentBars = [
  "from-[#ff996f] via-[#ffcf76] to-[#fff2d0]",
  "from-[#70c2ff] via-[#95d8ff] to-[#e2f4ff]",
  "from-[#7ee7d0] via-[#8ac2ff] to-[#edf8ff]",
  "from-[#ffb37b] via-[#ffc2d1] to-[#fff1f5]",
];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = accentBars[index % accentBars.length];

  return (
    <article className="soft-card group flex h-full flex-col overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.1)]">
      <div className={`h-2 w-full bg-gradient-to-r ${accent}`} />

      <div className="flex h-full flex-col gap-6 p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <h3 className="font-display text-2xl text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {project.description}
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Placeholder
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[1.4rem] bg-slate-50/90 p-4 ring-1 ring-slate-200/80">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            What I learned
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            {project.learned}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            <FolderGit2 className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            <ArrowUpRight className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
