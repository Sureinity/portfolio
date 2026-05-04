type FooterLink = {
  label: string;
  href: string;
};

type SiteFooterProps = {
  ownerName: string;
  links: FooterLink[];
};

export function SiteFooter({ ownerName, links }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="panel rule-t mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-semibold text-[color:var(--foreground)]">
            {ownerName}
          </p>
          <p className="mt-1 text-sm leading-7 text-[color:var(--muted-foreground)]">
            Built with Next.js, React, TypeScript, Tailwind CSS, a theme
            toggle, and a command palette.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="ghost-button px-4 py-2 text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-[color:var(--muted-foreground)]">
          © {year} {ownerName}
        </p>
      </div>
    </footer>
  );
}
