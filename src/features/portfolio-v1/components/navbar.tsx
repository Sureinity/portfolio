import type { NavItem } from "@/features/portfolio-v1/content";

type NavbarProps = {
  items: NavItem[];
  ownerName: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function Navbar({ items, ownerName }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/75 bg-white/78 px-3 py-3 shadow-[0_14px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <a
            href="#top"
            className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:text-sky-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffd0bd,#94dbff)] text-sm font-semibold text-slate-900 shadow-inner shadow-white/70">
              {getInitials(ownerName)}
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-slate-900">
                {ownerName}
              </span>
              <span className="block text-xs text-slate-500">
                DevOps / Platform Portfolio
              </span>
            </span>
          </a>

          <nav
            aria-label="Section navigation"
            className="overflow-x-auto pb-1 md:pb-0"
          >
            <ul className="flex min-w-max items-center gap-2">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100/70 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
