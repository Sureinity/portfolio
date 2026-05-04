import type { Profile } from "@/features/portfolio-v1/content";
import { ArrowRight, Boxes, Cable, TerminalSquare } from "lucide-react";

type HeroProps = {
  profile: Profile;
};

const focusCards = [
  {
    title: "Linux-first habits",
    description: "I like getting close to the operating system and understanding what services are actually doing.",
    icon: TerminalSquare,
  },
  {
    title: "Reliable delivery",
    description: "I’m motivated by workflows that reduce friction, cut repeated steps, and make releases easier to trust.",
    icon: Boxes,
  },
  {
    title: "Infrastructure clarity",
    description: "Networking, containers, and platform decisions make more sense when I can map how everything connects.",
    icon: Cable,
  },
];

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="top"
      className="section-shell animate-rise overflow-hidden px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-5">
            <span className="pill">
              {profile.role}
            </span>

            <div className="space-y-4">
              <h1 className="font-display max-w-3xl text-4xl leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Building reliable infrastructure, automation, and deployment
                workflows with care.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                {profile.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {focusCards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.title} className="soft-card p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,233,220,0.95),rgba(227,244,255,0.95))] text-slate-800 ring-1 ring-white/70">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 text-base font-semibold text-slate-900">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4">
          <article className="soft-card bg-[linear-gradient(145deg,rgba(255,248,240,0.95),rgba(243,249,255,0.95))] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Intro
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-slate-900 sm:text-4xl">
              {profile.name}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
              I&apos;m an aspiring DevOps / Platform Engineer who enjoys turning
              technical curiosity into reliable, repeatable systems. I like the
              work that happens between writing code and keeping services
              healthy in the real world.
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="soft-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                I enjoy working on
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                {profile.interests.map((interest) => (
                  <li key={interest} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#ff8f6b] to-[#56b6ff]"
                    />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="soft-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Current focus
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                {profile.currentFocus.map((focus) => (
                  <li key={focus} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#7ee7d0] to-[#57a9ff]"
                    />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
