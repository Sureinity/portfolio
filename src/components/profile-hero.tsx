import type { HeroProfile } from "@/lib/template-content";
import { HeroContactPanel } from "@/components/hero-contact-panel";
import { socialLinks } from "@/lib/template-content";

type ProfileHeroProps = {
  profile: HeroProfile;
};

const heroContactLinks = socialLinks.map(({ title, handle, href }) => ({
  title,
  handle,
  href,
}));

export function ProfileHero({ profile }: ProfileHeroProps) {
  return (
    <section id="top" className="panel animate-rise overflow-hidden">
      <div className="surface-pattern rule-b h-36 sm:h-44" />

      <div className="grid gap-6 px-5 py-5 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div className="lg:-mt-22">
          <div className="panel-muted overflow-hidden">
            <div className="rule-b flex items-center justify-center bg-[color:var(--background-muted)] px-6 py-8">
              <div className="icon-badge h-28 w-28 rounded-full font-mono text-4xl font-semibold">
                {profile.initials}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:pt-2">
          <div className="space-y-4">
            <span className="eyebrow">{profile.role}</span>
            <div className="space-y-3">
              <h1 className="font-intro-serif max-w-4xl text-4xl text-[color:var(--foreground)] sm:text-5xl">
                {profile.name}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[color:var(--foreground)] sm:text-xl">
                {profile.tagline}
              </p>
              <p className="max-w-3xl text-base leading-8 text-[color:var(--muted-foreground)] sm:text-lg">
                {profile.summary}
              </p>
            </div>
          </div>

          <HeroContactPanel links={heroContactLinks} showTime={false} />
        </div>
      </div>
    </section>
  );
}
