import { ActivityGrid } from "@/components/activity-grid";
import { BlogList } from "@/components/blog-list";
import { MetadataGrid } from "@/components/metadata-grid";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectAccordion } from "@/components/project-accordion";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SectionPanel } from "@/components/section-panel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialLinksGrid } from "@/components/social-links-grid";
import { StackCloud } from "@/components/stack-cloud";
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
  overviewItems,
  paletteActions,
  projects,
  socialLinks,
  stackCategories,
} from "@/lib/template-content";

export default function Home() {
  return (
    <div className="app-shell">
      <SiteHeader navLinks={navLinks} paletteActions={paletteActions} />

      <main className="main-frame mx-auto flex max-w-6xl flex-col gap-0 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <ProfileHero profile={heroProfile} />
        <div className="panel-divider" />

        <SectionPanel id="overview" title="Overview" srOnlyTitle>
          <MetadataGrid items={overviewItems} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel id="social" title="Social Links" srOnlyTitle>
          <SocialLinksGrid links={socialLinks} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="about"
          title="About"
          description="A grounded summary section for explaining why you are moving toward DevOps or platform engineering, without overselling senior-level experience."
        >
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
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

            <aside className="panel-muted space-y-4 p-5">
              <p className="eyebrow">Content note</p>
              <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
                This template keeps the voice practical and entry-level. Replace
                the paragraphs with your real path into infrastructure,
                automation, Linux, and systems work.
              </p>
            </aside>
          </div>
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="activity"
          title="Contribution & Activity"
          description="A reusable heatmap panel for GitHub contributions, learning streaks, or project activity. This implementation uses placeholder data so it stays frontend-only."
        >
          <ActivityGrid weeks={activityWeeks} monthLabels={activityMonthLabels} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="projects"
          title="Projects"
          description="Expandable project entries work well for personal portfolios because they keep the page scannable while still leaving room for technical context, lessons, and links."
          action={
            <a href="/versions/v1" className="ghost-button text-sm">
              Compare with v1
            </a>
          }
        >
          <ProjectAccordion projects={projects} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="experience"
          title="Experience"
          description="A timeline or accordion section for real work, self-directed projects, apprenticeships, or lab-heavy learning experience. The sample content stays honest about being in progress."
        >
          <TimelineSection items={experienceItems} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="education"
          title="Education"
          description="A separate education panel helps keep the resume structure familiar, even if part of your background is independent learning rather than formal infrastructure work."
        >
          <TimelineSection items={educationItems} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="articles"
          title="Blog / Articles"
          description="Short writing entries help show how you think, what you are learning, and how you document your work. These links are placeholders you can replace later."
        >
          <BlogList articles={articleEntries} />
        </SectionPanel>
        <div className="panel-divider" />

        <SectionPanel
          id="stack"
          title="Technology Stack"
          description="Group tools into a few categories instead of listing everything in one long row. The goal is to communicate focus areas, not to turn the section into a checklist wall."
        >
          <StackCloud categories={stackCategories} />
        </SectionPanel>
      </main>

      <SiteFooter ownerName={heroProfile.name} links={footerLinks} />
      <ScrollToTop />
    </div>
  );
}
