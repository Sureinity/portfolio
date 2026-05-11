import Image from "next/image";
import type { CSSProperties } from "react";

type StackLogoItem = {
  name: string;
  logoSrc: string;
  contrastLogoSrc?: string;
  display?: "default" | "docker";
};

type StackLogoRowProps = {
  items: StackLogoItem[];
};

export function StackLogoRow({ items }: StackLogoRowProps) {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {items.map((item, index) => (
        <button
          key={item.name}
          type="button"
          className="stack-logo-button group info-hover flex h-20 w-20 items-center justify-center bg-transparent transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--line-strong)]"
          aria-label={item.name}
          data-hover-detail={item.name}
          data-logo-display={item.display ?? "default"}
          style={{ "--stack-delay": `${index * 80}ms` } as CSSProperties}
        >
          <Image
            src={item.logoSrc}
            alt={item.name}
            width={64}
            height={64}
            className={`h-16 w-16 object-contain opacity-95 drop-shadow-[0_1px_1px_rgba(255,255,255,0.45)] transition group-hover:opacity-100 group-focus-visible:opacity-100 ${item.contrastLogoSrc ? "dark:hidden" : ""}`}
          />
          {item.contrastLogoSrc ? (
            <Image
              src={item.contrastLogoSrc}
              alt={item.name}
              width={64}
              height={64}
              className="hidden h-16 w-16 object-contain opacity-95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] transition group-hover:opacity-100 group-focus-visible:opacity-100 dark:block"
            />
          ) : null}
        </button>
      ))}
    </div>
  );
}
