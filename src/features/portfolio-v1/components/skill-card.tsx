import type { SkillGroup } from "@/features/portfolio-v1/content";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  const Icon = group.icon;

  return (
    <article className="soft-card group flex h-full flex-col gap-6 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.1)]">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${group.iconTone}`}
        >
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          Focus Area
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="font-display text-2xl text-slate-900">{group.title}</h3>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          {group.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200/80"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
