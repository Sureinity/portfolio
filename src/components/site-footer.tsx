type SiteFooterProps = {
  ownerName: string;
};

export function SiteFooter({ ownerName }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="panel site-chrome-panel rule-t mx-auto flex flex-col items-center gap-2 px-5 py-5 text-center sm:px-6">
        <p className="text-sm text-[color:var(--muted-foreground)]">
          Built with Next.js, React, TypeScript, & Tailwind CSS. The source code
          is available on{" "}
          <a
            href="https://github.com/Sureinity"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[color:var(--foreground)] transition hover:brightness-125"
          >
            Github
          </a>
        </p>
        <p className="text-sm text-[color:var(--muted-foreground)]">
          © {year} {ownerName}
        </p>
      </div>
    </footer>
  );
}
