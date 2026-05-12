"use client";

import mermaid from "mermaid";
import { useEffect, useId, useState } from "react";

type MermaidDiagramProps = {
  chart: string;
};

function sanitizeSvg(svg: string) {
  return svg.replace(/<script[\s\S]*?<\/script>/gi, "");
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const generatedId = useId().replace(/:/g, "");
  const [svg, setSvg] = useState<string>("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      const styles = getComputedStyle(document.documentElement);
      const getColor = (name: string) => styles.getPropertyValue(name).trim();

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        themeVariables: {
          background: getColor("--background-elevated"),
          primaryColor: getColor("--background-muted"),
          primaryTextColor: getColor("--foreground"),
          primaryBorderColor: getColor("--line-strong"),
          lineColor: getColor("--muted-foreground"),
          secondaryColor: getColor("--background"),
          tertiaryColor: getColor("--background-muted"),
          fontFamily: "var(--font-sans)",
        },
      });

      try {
        const result = await mermaid.render(`project-diagram-${generatedId}`, chart);

        if (!cancelled) {
          setSvg(sanitizeSvg(result.svg));
          setFailed(false);
        }
      } catch {
        if (!cancelled) {
          setFailed(true);
          setSvg("");
        }
      }
    }

    void renderDiagram();

    const observer = new MutationObserver(() => {
      void renderDiagram();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [chart, generatedId]);

  if (failed) {
    return (
      <pre className="mermaid-fallback">
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <div
      className="mermaid-frame"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
