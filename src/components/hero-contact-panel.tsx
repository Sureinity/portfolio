"use client";

import { useSyncExternalStore } from "react";

type HeroContactPanelProps = {
  links: {
    title: string;
    handle: string;
    href: string;
  }[];
};

const MANILA_TIME_FORMATTER = new Intl.DateTimeFormat("en-PH", {
  timeZone: "Asia/Manila",
  weekday: "short",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function subscribe(onStoreChange: () => void) {
  const intervalId = window.setInterval(onStoreChange, 30_000);
  return () => window.clearInterval(intervalId);
}

function getSnapshot() {
  return Date.now();
}

function getServerSnapshot() {
  return 0;
}

function MailIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25Zm1.5.198v10.302c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V6.948l-8.452 5.283a1.5 1.5 0 0 1-1.596 0Zm15.583-1.051a.75.75 0 0 0-.583-.147H5.25a.75.75 0 0 0-.583.147L12 10.485Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
      <rect x="2" y="2" width="20" height="20" rx="4" className="fill-current" />
      <circle cx="7" cy="8" r="1.4" fill="var(--background-elevated)" />
      <rect x="5.7" y="10.2" width="2.6" height="8" rx="0.6" fill="var(--background-elevated)" />
      <path
        d="M10.3 10.2h2.5v1.12c.39-.76 1.32-1.4 2.72-1.4 2.92 0 3.55 1.94 3.55 4.77v3.51h-2.7v-3.11c0-1.48-.27-2.45-1.53-2.45-1.46 0-1.87 1.03-1.87 2.38v3.18h-2.67Z"
        fill="var(--background-elevated)"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm6.86 8.25h-3.23a15.5 15.5 0 0 0-1.25-4.43 8.28 8.28 0 0 1 4.48 4.43ZM12 4.5c.9 0 2.2 2.27 2.63 6H9.37C9.8 6.77 11.1 4.5 12 4.5ZM5.14 13.5h3.23a15.5 15.5 0 0 0 1.25 4.43 8.28 8.28 0 0 1-4.48-4.43Zm0-3a8.28 8.28 0 0 1 4.48-4.43 15.5 15.5 0 0 0-1.25 4.43Zm6.86 9c-.9 0-2.2-2.27-2.63-6h5.26c-.43 3.73-1.73 6-2.63 6Zm2.95-1.57a15.5 15.5 0 0 0 1.25-4.43h3.23a8.28 8.28 0 0 1-4.48 4.43ZM16.2 10.5a15.5 15.5 0 0 0-1.25-4.43 8.28 8.28 0 0 1 4.48 4.43Zm-6.83 3h5.26c-.43 3.73-1.73 6-2.63 6s-2.2-2.27-2.63-6Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm0 2.25a7.5 7.5 0 1 1-7.5 7.5A7.51 7.51 0 0 1 12 4.5Zm-.75 2.25v5.56a.75.75 0 0 0 .22.53l3.75 3.75 1.06-1.06-3.53-3.53V6.75Z" />
    </svg>
  );
}

function LaunchIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M8.22 5.72h10.06v10.06h-2.25V9.56l-8.25 8.25-1.56-1.56 8.25-8.25H8.22Z" />
    </svg>
  );
}

function ContactIcon({ title }: { title: string }) {
  switch (title) {
    case "Email":
      return <MailIcon />;
    case "GitHub":
      return <GitHubIcon />;
    case "LinkedIn":
      return <LinkedInIcon />;
    case "Website":
      return <GlobeIcon />;
    default:
      return <GlobeIcon />;
  }
}

export function HeroContactPanel({ links }: HeroContactPanelProps) {
  const timestamp = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const orderedTitles = ["Email", "GitHub", "LinkedIn", "Website"];
  const orderedLinks = orderedTitles
    .map((title) => links.find((link) => link.title === title))
    .filter(
      (
        link,
      ): link is {
        title: string;
        handle: string;
        href: string;
      } => Boolean(link),
    );

  const timeLabel =
    timestamp === 0
      ? "Philippines · Asia/Manila · GMT+8"
      : `Philippines · ${MANILA_TIME_FORMATTER.format(timestamp)} · GMT+8`;

  return (
    <div className="space-y-3 px-4 py-4">
      {orderedLinks.map((link) => (
        <a
          key={link.title}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={`${link.title}: ${link.handle}`}
          title={link.title}
          className="group flex items-center gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-3 py-3 transition hover:-translate-y-0.5 hover:border-[color:var(--line-strong)] hover:bg-[color:var(--background-muted)]"
        >
          <span className="icon-badge h-11 w-11 shrink-0 rounded-xl text-[color:var(--foreground)]">
            <ContactIcon title={link.title} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-base font-semibold text-[color:var(--foreground)]">
              {link.title}
            </span>
            <span className="mt-0.5 block truncate text-sm text-[color:var(--muted-foreground)]">
              {link.handle}
            </span>
          </span>
          <span className="shrink-0 text-[color:var(--muted-foreground)] transition group-hover:text-[color:var(--foreground)]">
            <LaunchIcon />
          </span>
        </a>
      ))}

      <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-3 py-3">
        <div className="flex items-center gap-3">
          <span className="icon-badge h-11 w-11 shrink-0 rounded-xl text-[color:var(--foreground)]">
            <ClockIcon />
          </span>
          <div className="min-w-0">
            <p className="text-base font-semibold text-[color:var(--foreground)]">
              Manila time
            </p>
            <p className="mt-0.5 text-sm text-[color:var(--muted-foreground)]">
              {timeLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
