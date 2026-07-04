<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# DevOps Portfolio Agent Context

This repository is John Ghlen Dealdo's personal DevOps / platform engineering portfolio.

## Tech Stack

- Next.js `16.2.4` App Router, React `19.2.4`, TypeScript, Tailwind CSS v4-style global CSS.
- Main content lives in `src/lib/template-content.ts`.
- Main page composition lives in `src/app/page.tsx`.
- Shared section wrapper: `src/components/section-panel.tsx`.
- Global visual system: `src/app/globals.css`.
- Theme control uses `next-themes` through `src/components/theme-provider.tsx` and `src/components/theme-toggle.tsx`.
- Mermaid diagrams render through `src/components/mermaid-diagram.tsx`.

## Required Workflow

- Commit every completed user-requested change with a Conventional Commit message.
- Do not leave completed work unstaged or uncommitted unless the user explicitly asks not to commit.
- Before committing UI/content/code changes, run:
  - `npm run lint`
  - `npm run build`
- Use `git diff --check` before committing when practical.
- Preserve unrelated user changes. Never revert unrelated files or use destructive git commands unless explicitly requested.
- Prefer `rg` / `rg --files` for searching.
- Use `apply_patch` for manual file edits.

## Current Portfolio Facts

- Name shown in hero: `John Ghlen Dealdo`.
- Footer owner name: `John Ghlen`.
- Current role switcher rotates through `DevOps Engineer`, `Platform Engineer`, and `Linux SysAdmin`.
- Default color theme must be light/white.
- The About section should stay concise, first-person, and focused on practical infrastructure, security in DevOps/platform engineering, Proxmox-focused projects, side projects, open source, and sports.
- Do not describe Digos College as expected or undergraduate; it is shown as graduated.
- Infosoft internship dates should not include `(Expected)`.
- Helity location is `Germany, Europe`.

## Content Guidelines

- Keep portfolio copy direct, modern, and human. Avoid hype, buzzwords, and exaggerated claims.
- Do not invent accomplishments. Use existing local repos and stated user context as source of truth.
- Project cards follow the structure in `ProjectEntry` inside `src/lib/template-content.ts`.
- Experience and education cards use `TimelineEntry` inside `src/lib/template-content.ts`.
- Blog/articles are intentionally commented out in `src/app/page.tsx`; keep them as future reference unless the user asks otherwise.

## Visual Design Guidelines

- Preserve the current outlined, grid/dotted, technical portfolio language.
- Section labels use `.section-title-label`: medium-large, intentionally bold, with a pulsing dot.
- The hero role label uses the same bold modern direction and should keep consistent word spacing.
- Header brand icon is scroll-aware: hidden while the hero dotted brand preview is in range, then reappears after the preview is passed.
- Do not add miscellaneous hover colors. Hover/link color changes should be brightness/contrast relative to the current theme unless a source brand color is explicitly required.
- Header and footer should remain visually aligned to the main content width unless the user asks otherwise.

## Assets

- Brand PNG assets live in `public/brand/`:
  - active shorthand icon: `public/brand/slaine-icon.png`
  - active primary variants and legacy files may remain for reference.
- Legacy brand SVG files in `public/brand/` should stay for legacy purposes unless explicitly asked to remove them.
- Tech stack icons mostly live in `public/stack/theme/`.
- Tech stack PNG preference still applies unless the user explicitly asks for SVG. Current exception: Packer uses `public/stack/theme/packer.svg` because the user explicitly requested the colored SVG icon.
- Organization logos live in `public/organizations/`.
- Resume PDF lives at `public/resume/john-ghlen-dealdo-resume.pdf` and is linked as `/resume/john-ghlen-dealdo-resume.pdf`.

## Projects Context

- Strong project entries include:
  - `Gated Proxmox Management via OPNsense`
  - `Proxmox Platform Infrastructure as Code`
  - `Web Security Chaos Toolkit`
  - `Proxmox Provisioning Control Plane`
- `Proxmox Private VM Access with WireGuard` is currently kept in data but filtered out from the exported `projects` list.
- Local source of truth for the Proxmox Platform IaC project: `~/Coding/Projects/proxmox-platform-iac`.
- Local source of truth for Helity work context: `~/devops-test/`.

## Docker / Deployment Context

- Containerization files are present:
  - `Dockerfile`
  - `.dockerignore`
  - `docker-compose.local.yml`
  - `docker-compose.prod.yml`
  - `deploy.env.example`
- Production Compose assumes Traefik on the same dedicated server.
- `next.config.ts` uses standalone output for Docker.

## Validation Notes

- Normal validation: `npm run lint && npm run build`.
- If changing Docker files, also consider `docker compose -f docker-compose.local.yml build`.
- If changing Next.js behavior, first consult relevant docs under `node_modules/next/dist/docs/` as required above.
