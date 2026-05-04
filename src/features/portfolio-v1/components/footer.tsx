type FooterProps = {
  ownerName: string;
};

export function Footer({ ownerName }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 rounded-[1.75rem] border border-white/70 bg-white/75 px-6 py-5 text-sm text-slate-500 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {ownerName}. Built with Next.js, React, TypeScript, and
          Tailwind CSS.
        </p>
        <a
          href="#top"
          className="font-medium text-slate-700 transition hover:text-sky-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
