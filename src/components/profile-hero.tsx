import Image from "next/image";
import type { ReactNode } from "react";
import type { HeroProfile } from "@/lib/template-content";
import { HeroContactPanel } from "@/components/hero-contact-panel";
import { RoleSwitcher } from "@/components/role-switcher";
import { socialLinks } from "@/lib/template-content";

type ProfileHeroProps = {
  profile: HeroProfile;
  details: ReactNode;
};

const heroContactLinks = socialLinks.map(({ title, handle, href }) => ({
  title,
  handle,
  href,
}));

export function ProfileHero({ profile, details }: ProfileHeroProps) {
  return (
    <section id="top" className="panel hero-panel animate-rise overflow-hidden">
      <div className="surface-pattern rule-b hero-logo-strip">
        <div className="hero-brand-icon">
          <Image
            src="/brand/slaine-primary.png"
            alt=""
            width={1916}
            height={821}
            unoptimized
            aria-hidden
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 px-5 pb-5 pt-0 text-center sm:px-6">
        <div className="w-full max-w-4xl space-y-6">
          <div className="profile-portrait-shell">
            <div className="profile-portrait-frame">
              <div className="profile-portrait-image">
                <Image
                  src="/assets/profile-bg-dark-gray.png"
                  alt={`${profile.name} profile picture`}
                  fill
                  priority
                  sizes="(max-width: 640px) 11rem, 15rem"
                  className="object-cover object-center dark:hidden"
                />
                <Image
                  src="/assets/profile-bg-light.png"
                  alt={`${profile.name} profile picture`}
                  fill
                  priority
                  sizes="(max-width: 640px) 11rem, 15rem"
                  className="hidden object-cover object-center dark:block"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="hero-identity-band space-y-3">
              <h1 className="font-intro-serif text-4xl text-[color:var(--foreground)] sm:text-5xl">
                {profile.name}
              </h1>
              <span className="eyebrow">
                <RoleSwitcher />
              </span>
            </div>

            <div className="space-y-3">
              <div className="mx-auto w-full max-w-3xl">
                {details}
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <HeroContactPanel links={heroContactLinks} showTime={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
