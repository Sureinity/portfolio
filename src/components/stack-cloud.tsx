import type { StackCategory } from "@/lib/template-content";

type StackCloudProps = {
  categories: StackCategory[];
};

export function StackCloud({ categories }: StackCloudProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {categories.map((category) => {
        const Icon = category.icon;

        return (
          <article key={category.title} className="panel-muted p-4">
            <div className="flex items-center gap-3">
              <span className="icon-badge h-11 w-11 text-[color:var(--foreground)]">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-[color:var(--foreground)]">
                  {category.title}
                </h3>
                <p className="mono-detail text-[color:var(--muted-foreground)]">
                  Editable category group
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--background-elevated)] px-3 py-2 text-sm text-[color:var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
