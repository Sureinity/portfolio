import { ActivityGrid } from "@/components/activity-grid";
import { BlogList } from "@/components/blog-list";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectAccordion } from "@/components/project-accordion";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SectionPanel } from "@/components/section-panel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StackCloud } from "@/components/stack-cloud";
import { TerminalDetailsCard } from "@/components/terminal-details-card";
import { TimelineSection } from "@/components/timeline-section";
import {
  aboutParagraphs,
  activityMonthLabels,
  activityWeeks,
  articleEntries,
  educationItems,
  experienceItems,
  footerLinks,
  heroProfile,
  navLinks,
  paletteActions,
  projects,
  stackCategories,
} from "@/lib/template-content";

export default function Home() {
  return (
    <div className="app-shell">
      <SiteHeader navLinks={navLinks} paletteActions={paletteActions} />

      <main className="main-frame mx-auto flex max-w-6xl flex-col gap-0 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <ProfileHero profile={heroProfile} />
        <div className="panel-divider" />

        <SectionPanel
          id="about"
          title="About"
        >
          <div className="space-y-6">
            <TerminalDetailsCard />

            <div className="space-y-4">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-8 text-[color:var(--muted-foreground)] sm:text-base"
                >
                  {paragraph}
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
          <ActivityGrid weeks={activityWeeks} monthLabels={activityMonthLabels} />
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

        <SectionPanel
          id="articles"
          title="Blog / Articles"
        >
          <BlogList articles={articleEntries} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="stack"
          title="Technology Stack"
        >
          <StackCloud categories={stackCategories} />
        </SectionPanel>
      </main>

      <SiteFooter ownerName={heroProfile.name} links={footerLinks} />
      <ScrollToTop />
    </div>
  );
}
