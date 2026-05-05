import type { ArticleEntry } from "@/lib/template-content";
import { ArrowUpRight } from "lucide-react";

type BlogListProps = {
  articles: ArticleEntry[];
};

export function BlogList({ articles }: BlogListProps) {
  return (
    <div className="grid gap-4">
      {articles.map((article) => (
        <a
          key={article.title}
          href={article.href}
          target="_blank"
          rel="noreferrer"
          className="panel-muted group flex flex-col gap-3 p-4 transition hover:-translate-y-1 hover:border-[color:var(--line-strong)] sm:flex-row sm:items-start sm:justify-between"
        >
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--muted-foreground)]">
              <span className="mono-detail">{article.category}</span>
              <span aria-hidden>·</span>
              <span>{article.date}</span>
              <span aria-hidden>·</span>
              <span>{article.readingTime}</span>
            </div>
            <h3 className="font-editorial-serif mt-3 text-xl text-[color:var(--foreground)]">
              {article.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
              {article.summary}
            </p>
          </div>
          <ArrowUpRight
            aria-hidden
            className="mt-1 h-4 w-4 shrink-0 text-[color:var(--muted-foreground)] transition group-hover:text-[color:var(--foreground)]"
          />
        </a>
      ))}
    </div>
  );
}
