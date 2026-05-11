import { ActivityGrid } from "@/components/activity-grid";
// import { BlogList } from "@/components/blog-list";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectAccordion } from "@/components/project-accordion";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SectionPanel } from "@/components/section-panel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StackLogoRow } from "@/components/stack-logo-row";
import { TerminalDetailsCard } from "@/components/terminal-details-card";
import { TimelineSection } from "@/components/timeline-section";
import {
  aboutParagraphs,
  // articleEntries,
  educationItems,
  experienceItems,
  heroProfile,
  navLinks,
  paletteActions,
  projects,
  stackLogoItems,
} from "@/lib/template-content";

function renderBoldText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-[color:var(--foreground)]">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

export default function Home() {
  return (
    <div className="app-shell">
      <SiteHeader navLinks={navLinks} paletteActions={paletteActions} />

      <main className="main-frame mx-auto flex max-w-6xl flex-col gap-0 px-4 pb-12 pt-0 sm:px-6 lg:px-8">
        <ProfileHero
          profile={heroProfile}
          details={<TerminalDetailsCard />}
        />
        <div className="panel-divider" />

        <SectionPanel
          id="about"
          title="About"
          contentClassName="about-section-body"
        >
          <div className="mx-auto max-w-5xl space-y-7">
            <div className="space-y-3 text-center">
              <p className="mx-auto max-w-3xl text-lg leading-8 text-[color:var(--foreground)] sm:text-xl">
                {heroProfile.tagline}
              </p>
              <p className="mx-auto max-w-3xl text-base leading-8 text-[color:var(--muted-foreground)] sm:text-lg">
                {heroProfile.summary}
              </p>
            </div>

            <div className="mx-auto max-w-4xl space-y-4">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-8 text-[color:var(--muted-foreground)] sm:text-base"
                >
                  {renderBoldText(paragraph)}
                </p>
              ))}
            </div>
          </div>
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="activity"
          title="Contribution & Activity"
        >
          <ActivityGrid
            username="Sureinity"
          />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="projects"
          title="Projects"
        >
          <ProjectAccordion projects={projects} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="experience"
          title="Experience"
        >
          <TimelineSection items={experienceItems} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="education"
          title="Education"
        >
          <TimelineSection items={educationItems} />
        </SectionPanel>
        <div className="panel-divider" />

        {/*
        <SectionPanel
          id="articles"
          title="Blog / Articles"
        >
          <BlogList articles={articleEntries} />
        </SectionPanel>
        <div className="panel-divider" />
        */}

        <SectionPanel
          id="stack"
          title="Technology Stack"
          contentClassName="surface-pattern"
        >
          <StackLogoRow items={stackLogoItems} />
        </SectionPanel>
      </main>

      <SiteFooter ownerName={heroProfile.name} />
      <ScrollToTop />
    </div>
  );
}
