"use client";

import { useEffect, useState } from "react";

type ActivityGridProps = {
  username: string;
};

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionsResponse = {
  contributions?: ContributionDay[];
};

type ContributionSlot = ContributionDay | null;

const levelClassNames = [
  "activity-level-0",
  "activity-level-1",
  "activity-level-2",
  "activity-level-3",
  "activity-level-4",
];

const DISPLAY_DAYS = 365;
const weekdayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

function toCalendarWeeks(contributions: ContributionDay[]) {
  const weeks: ContributionSlot[][] = [];
  let currentWeek: ContributionSlot[] = [];

  contributions.forEach((day, index) => {
    const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay();

    if (index === 0) {
      currentWeek.push(...Array<ContributionSlot>(weekday).fill(null));
    }

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentWeek.push(day);
  });

  if (currentWeek.length > 0) {
    currentWeek.push(...Array<ContributionSlot>(7 - currentWeek.length).fill(null));
    weeks.push(currentWeek);
  }

  return weeks;
}

function toMonthLabels(weeks: ContributionSlot[][]) {
  return weeks.map((week, index) => {
    const firstMonthDay = week.find(
      (day) => day && new Date(`${day.date}T00:00:00Z`).getUTCDate() === 1,
    );

    if (!firstMonthDay) {
      const firstVisibleDay = week.find(Boolean);

      if (index !== 0 || !firstVisibleDay) {
        return "";
      }

      return new Intl.DateTimeFormat("en", {
        month: "short",
        timeZone: "UTC",
      }).format(new Date(`${firstVisibleDay.date}T00:00:00Z`));
    }

    const previousMonthLabel = weeks.slice(0, index).some((previousWeek) =>
      previousWeek.some((day) => {
        if (!day) {
          return false;
        }

        const previousDate = new Date(`${day.date}T00:00:00Z`);
        const currentDate = new Date(`${firstMonthDay.date}T00:00:00Z`);

        return (
          previousDate.getUTCFullYear() === currentDate.getUTCFullYear() &&
          previousDate.getUTCMonth() === currentDate.getUTCMonth()
        );
      }),
    );

    if (previousMonthLabel) {
      return "";
    }

    return new Intl.DateTimeFormat("en", {
      month: "short",
      timeZone: "UTC",
    }).format(new Date(`${firstMonthDay.date}T00:00:00Z`));
  });
}

function formatContributionTitle(date: string, count: number) {
  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

  return `${count} contribution${count === 1 ? "" : "s"} // ${formattedDate}`;
}

function visibleContributionDays(weeks: ContributionSlot[]) {
  return weeks.filter((day): day is ContributionDay => Boolean(day));
}

function skeletonWeeks() {
  const today = new Date();
  const startDate = new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate() - (DISPLAY_DAYS - 1),
    ),
  );

  return toCalendarWeeks(
    Array.from({ length: DISPLAY_DAYS }, (_, dayIndex) => {
      const date = new Date(startDate);
      date.setUTCDate(startDate.getUTCDate() + dayIndex);

      return {
        date: date.toISOString().slice(0, 10),
        count: 0,
        level: 0,
      };
    }),
  );
}

export function ActivityGrid({ username }: ActivityGridProps) {
  const [weeks, setWeeks] = useState<ContributionSlot[][]>(() => skeletonWeeks());

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as ContributionsResponse;
        const contributions = data.contributions ?? [];

        if (contributions.length > 0) {
          setWeeks(toCalendarWeeks(contributions.slice(-DISPLAY_DAYS)));
        }
      } catch {
        if (!controller.signal.aborted) {
          setWeeks(skeletonWeeks());
        }
      }
    }

    loadContributions();

    return () => controller.abort();
  }, [username]);

  const monthLabels = toMonthLabels(weeks);
  const contributionDays = visibleContributionDays(weeks.flat());
  const latestYear =
    contributionDays.length > 0
      ? new Date(`${contributionDays[contributionDays.length - 1].date}T00:00:00Z`).getUTCFullYear()
      : new Date().getUTCFullYear();
  const yearlyContributionCount = contributionDays
    .filter((day) => new Date(`${day.date}T00:00:00Z`).getUTCFullYear() === latestYear)
    .reduce((total, day) => total + day.count, 0);

  return (
    <div className="space-y-4">
      <div className="activity-calendar-shell">
        <div className="activity-calendar">
          <div className="activity-month-layer">
            <span />
            <div
              className="activity-month-grid"
              style={{ gridTemplateColumns: `repeat(${weeks.length}, var(--activity-cell-size))` }}
            >
              {monthLabels.map((label, index) => (
                <span key={`${label}-${index}`} className="mono-detail activity-month-label">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="activity-body-layer">
            <div className="activity-weekday-labels">
              {weekdayLabels.map((label, index) => (
                <span key={`${label}-${index}`}>{label}</span>
              ))}
            </div>

            <div
              className="activity-matrix"
              style={{ gridTemplateColumns: `repeat(${weeks.length}, var(--activity-cell-size))` }}
            >
              {weeks.map((week, weekIndex) =>
                week.map((day, dayIndex) => {
                  if (!day) {
                    return (
                      <span
                        key={`empty-${weekIndex}-${dayIndex}`}
                        className="activity-cell activity-cell-empty"
                        aria-hidden="true"
                        style={{
                          gridColumn: weekIndex + 1,
                          gridRow: dayIndex + 1,
                        }}
                      />
                    );
                  }

                  const detail = formatContributionTitle(day.date, day.count);

                  return (
                    <span
                      key={day.date}
                      className={`activity-cell info-hover ${levelClassNames[day.level]}`}
                      aria-label={detail}
                      data-hover-detail={detail}
                      style={{
                        gridColumn: weekIndex + 1,
                        gridRow: dayIndex + 1,
                      }}
                    />
                  );
                }),
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="activity-summary">
        {yearlyContributionCount} contributions in {latestYear} on{" "}
        <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>

      <div className="activity-legend">
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
