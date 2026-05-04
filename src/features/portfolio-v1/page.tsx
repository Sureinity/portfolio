import { ContactLinks } from "@/features/portfolio-v1/components/contact-links";
import { Footer } from "@/features/portfolio-v1/components/footer";
import { Hero } from "@/features/portfolio-v1/components/hero";
import { Navbar } from "@/features/portfolio-v1/components/navbar";
import { ProjectCard } from "@/features/portfolio-v1/components/project-card";
import { SectionHeader } from "@/features/portfolio-v1/components/section-header";
import { SkillCard } from "@/features/portfolio-v1/components/skill-card";
import {
  aboutHighlights,
  contactLinks,
  journeyTopics,
  navItems,
  profile,
  projects,
  skillGroups,
} from "@/features/portfolio-v1/content";

export default function PortfolioV1Page() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,140,92,0.32),_transparent_72%)] blur-3xl" />
        <div className="animate-drift absolute right-[-5rem] top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(110,198,255,0.26),_transparent_70%)] blur-3xl [animation-delay:1.8s]" />
        <div className="animate-drift absolute bottom-16 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(126,231,208,0.24),_transparent_68%)] blur-3xl [animation-delay:3.2s]" />
      </div>

      <Navbar items={navItems} ownerName={profile.name} />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <Hero profile={profile} />

        <section
          id="about"
          className="section-shell scroll-mt-28 px-6 py-10 sm:px-8 lg:px-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="About"
                title="I like learning how systems behave behind the interface."
                description="My interest in DevOps and platform work comes from wanting to understand the full path from code to running service. I enjoy the practical layers in between: Linux, networking, automation, containers, and deployment flow."
              />

              <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  I spend a lot of time exploring how infrastructure fits
                  together, especially the parts that are easy to overlook when
                  everything is abstracted away. The more I understand how
                  systems work under the hood, the more confidently I can build,
                  debug, and improve them.
                </p>
                <p>
                  I&apos;m especially drawn to environments where I can automate
                  repeated work, make deployments more predictable, and take
                  ownership of infrastructure end-to-end. Small lab projects are
                  my favorite way to learn because they turn concepts into
                  systems I can actually observe and maintain.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <article className="soft-card p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                  What keeps me engaged
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 sm:text-base">
                  {aboutHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#ff8f6b] to-[#58b7ff]"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="soft-card bg-[linear-gradient(135deg,rgba(255,241,228,0.92),rgba(239,248,255,0.94))] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                  My approach
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Learn by building. Document what changes. Automate what
                  repeats. Stay curious enough to trace the root cause instead
                  of stopping at the symptom.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="section-shell scroll-mt-28 px-6 py-10 sm:px-8 lg:px-10"
        >
          <SectionHeader
            eyebrow="Skills"
            title="Tools and concepts I keep coming back to"
            description="I’m building a practical DevOps foundation across infrastructure, automation, and delivery workflows. These are the areas I spend the most time practicing in projects and labs."
            align="center"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="section-shell scroll-mt-28 px-6 py-10 sm:px-8 lg:px-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Projects"
              title="Hands-on work I can keep growing over time"
              description="These project cards are written as realistic placeholders so you can swap in your real repos, screenshots, and links later without rewriting the entire layout."
            />
            <p className="pill self-start text-xs text-slate-500">
              Replace titles, links, and lessons whenever your work evolves.
            </p>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section
          id="journey"
          className="section-shell scroll-mt-28 px-6 py-10 sm:px-8 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Learning Journey"
                title="I’m intentionally growing into platform engineering."
                description="I don’t want to collect tools without understanding where they fit. My goal is to build depth one layer at a time and connect each new topic back to real operating decisions."
              />

              <article className="soft-card bg-[linear-gradient(135deg,rgba(236,250,246,0.94),rgba(239,246,255,0.94))] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                  What I want to strengthen next
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Repeatable infrastructure, safer deployment habits, better
                  observability, and more confidence moving between local labs
                  and cloud-based environments.
                </p>
              </article>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {journeyTopics.map((topic) => (
                <article key={topic.title} className="soft-card p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl text-slate-900">
                      {topic.title}
                    </h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {topic.stage}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {topic.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section-shell scroll-mt-28 px-6 py-10 sm:px-8 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Contact"
                title="I’m looking for opportunities to keep building."
                description="If you’re hiring for an entry-level DevOps, infrastructure, or platform-focused role, or if you just want to connect about labs and deployment workflows, I’d be happy to talk."
              />

              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                The contact details below are placeholders for now, so you can
                replace them with your real email, profiles, and resume link in
                one file when you&apos;re ready.
              </p>
            </div>

            <ContactLinks links={contactLinks} />
          </div>
        </section>
      </main>

      <Footer ownerName={profile.name} />
    </div>
  );
}
