type ActivityGridProps = {
  weeks: number[][];
  monthLabels: string[];
};

const levelClassNames = [
  "activity-level-0",
  "activity-level-1",
  "activity-level-2",
  "activity-level-3",
  "activity-level-4",
];

export function ActivityGrid({ weeks, monthLabels }: ActivityGridProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
          A placeholder activity panel modeled after contribution heatmaps. Use
          it for GitHub data later, or keep it as a visible learning cadence
          tracker.
        </p>
        <p className="mono-detail uppercase text-[color:var(--muted-foreground)]">
          Example summary: steady weekly practice across deployment, Linux,
          automation, and infrastructure topics.
        </p>
      </div>

      <div className="panel-muted overflow-x-auto p-4">
        <div className="min-w-[720px]">
          <div
            className="mb-3 grid gap-1 text-[11px] text-[color:var(--muted-foreground)]"
            style={{ gridTemplateColumns: `repeat(${monthLabels.length}, minmax(0, 1fr))` }}
          >
            {monthLabels.map((label, index) => (
              <span key={`${label}-${index}`} className="mono-detail">
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={`week-${weekIndex}`} className="flex flex-col gap-1">
                {week.map((level, dayIndex) => (
                  <span
                    key={`day-${weekIndex}-${dayIndex}`}
                    className={`activity-cell ${levelClassNames[level]}`}
                    title={`Activity level ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted-foreground)]">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span
            key={level}
            className={`activity-cell ${levelClassNames[level]}`}
            aria-label={`Legend level ${level}`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
