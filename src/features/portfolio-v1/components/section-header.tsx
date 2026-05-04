type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl items-center text-center"
      : "max-w-3xl";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="pill">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="font-display text-3xl leading-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
