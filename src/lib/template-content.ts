import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Cable,
  Calendar,
  Cloud,
  FileText,
  FolderGit2,
  Globe,
  House,
  Inbox,
  Layers3,
  Mail,
  MapPin,
  Radar,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Waypoints,
  Workflow,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type PaletteAction = {
  title: string;
  description: string;
  href: string;
  group: string;
  external?: boolean;
};

export type HeroProfile = {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  summary: string;
  status: string;
  quickFacts: string[];
};

export type OverviewItem = {
  label: string;
  value: string;
  detail?: string;
  href?: string;
  icon: LucideIcon;
};

export type SocialLink = {
  title: string;
  handle: string;
  note: string;
  href: string;
  icon: LucideIcon;
};

export type ProjectEntry = {
  title: string;
  summary: string;
  period: string;
  status: string;
  detail: string;
  highlights: string[];
  timeline: {
    title: string;
    description: string;
  }[];
  diagram?: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  learned: string;
};

export type TimelineEntry = {
  title: string;
  organization: string;
  organizationUrl?: string;
  organizationLogoSrc?: string;
  organizationLogoAlt?: string;
  organizationLogoFallback?: "not-allowed";
  location?: string;
  period: string;
  mode: string;
  summary: string;
  bullets: string[];
  stack: string[];
  open?: boolean;
};

export type ArticleEntry = {
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  category: string;
  href: string;
};

export type StackCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type StackLogoItem = {
  name: string;
  logoSrc: string;
  contrastLogoSrc?: string;
  display?: "default" | "docker";
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Activity", href: "#activity" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  // { label: "Blog", href: "#articles" },
  { label: "Stack", href: "#stack" },
];

export const heroProfile: HeroProfile = {
  name: "John Ghlen Dealdo",
  initials: "JGD",
  role: "DevOps / Platform Engineer",
  tagline:
    "Building reliable infrastructure, automation, and deployment workflows one practical system at a time.",
  summary:
    "I’m drawn to the parts of software delivery that sit below the interface: Linux, networking, infrastructure as code, CI/CD, and the steady operational habits that make systems easier to run and easier to trust.",
  status:
    "Part-time Linux system administrator based in the Philippines, building toward DevOps and platform engineering work.",
  quickFacts: [
    "Part-time Linux system administrator",
    "Philippines-based",
    "Automation-first mindset",
    "Infrastructure-focused growth",
  ],
};

export const overviewItems: OverviewItem[] = [
  {
    label: "Track",
    value: "DevOps / Platform",
    detail: "Focused on infrastructure, delivery, and operability",
    icon: BriefcaseBusiness,
  },
  {
    label: "Focus",
    value: "Linux, automation, IaC, CI/CD",
    detail: "Learning by building deployment and infrastructure labs",
    icon: ServerCog,
  },
  {
    label: "Work",
    value: "Part-time Linux system administrator",
    detail: "Growing practical systems experience while moving deeper into DevOps and platform work",
    icon: Calendar,
  },
  {
    label: "Base",
    value: "Philippines",
    detail: "Based in the Philippines",
    icon: MapPin,
  },
  {
    label: "Email",
    value: "johnghlendealdo@gmail.com",
    detail: "Preferred inbox for hiring or collaboration",
    href: "mailto:johnghlendealdo@gmail.com",
    icon: Mail,
  },
  {
    label: "Website",
    value: "portfolio.ghlensui.xyz",
    detail: "Primary public portfolio site",
    href: "https://portfolio.ghlensui.xyz",
    icon: FileText,
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    handle: "@Sureinity",
    note: "Repository home for infrastructure labs, deployment practice, and automation work.",
    href: "https://github.com/Sureinity",
    icon: FolderGit2,
  },
  {
    title: "LinkedIn",
    handle: "John Ghlen Dealdo",
    note: "Professional profile with current role direction and experience updates.",
    href: "https://www.linkedin.com/in/john-ghlen-dealdo-6a475539b",
    icon: Globe,
  },
  {
    title: "Email",
    handle: "johnghlendealdo@gmail.com",
    note: "Direct contact for recruiters, engineers, or potential collaborators.",
    href: "mailto:johnghlendealdo@gmail.com",
    icon: Inbox,
  },
  {
    title: "Website",
    handle: "portfolio.ghlensui.xyz",
    note: "Main portfolio domain for the current public version of the site.",
    href: "https://portfolio.ghlensui.xyz",
    icon: FileText,
  },
];

export const aboutParagraphs = [
  "I like poking around the **weird layers underneath apps** until I accidentally become emotionally attached to a **Linux server**.",
  "The deeper I go into **Linux**, **networking**, **containers**, **IaC**, and **deployment automation**, the more I realize: **complexity doesn’t disappear**—it just gets distributed across layers you slowly learn to see.",
  "I enjoy technical work that rewards **curiosity**, **patience**, and the ability to stare at **logs** until they eventually start making sense.",
  "I also care about **ownership**—not in a buzzword sense, but in the practical **DevOps** way: if I build or touch a system, I want to understand it **end-to-end**, be responsible for how it behaves in **production**, and be the person who can actually **debug it when it breaks at 2 AM**.",
  "I’m not trying to act like some **10x infrastructure wizard**. I’m just out here slowly collecting **practical skills**, **documenting what I learn**, and trying to become the kind of engineer who can confidently say: **“give me 20 minutes and I’ll probably figure it out.\"**",
];

export const projects: ProjectEntry[] = [
  {
    title: "Gated Proxmox Management via OPNsense",
    summary:
      "A hardened virtualized network design that moves hypervisor administration behind a firewall VM and VPN-only access path.",
    period: "Part-time infra project",
    status: "Strongest case study",
    detail:
      "The goal was to reduce direct management exposure while keeping rollback, baseline capture, and operator access clear enough for a risky network cutover.",
    highlights: [
      "Designed a two-bridge Proxmox layout with a public WAN bridge and isolated private management bridge.",
      "Placed OPNsense between public ingress and private administration paths.",
      "Sequenced baseline capture, rollback prep, VPN validation, cutover, and post-cutover handover.",
    ],
    timeline: [
      {
        title: "Approve topology",
        description:
          "Confirm bridge roles, address ownership, private subnet boundaries, and the VPN-first operator path.",
      },
      {
        title: "Capture baseline",
        description:
          "Record interfaces, routes, hostname behavior, access model, TLS state, and rollback requirements.",
      },
      {
        title: "Build network base",
        description:
          "Create public and private bridges, deploy OPNsense, enable private LAN services, and validate a test VM.",
      },
      {
        title: "Validate VPN entry",
        description:
          "Enable WireGuard, test external admin access, and keep management public until the private route works.",
      },
      {
        title: "Cut over management",
        description:
          "Move hypervisor administration to the private bridge and confirm the old public path is closed.",
      },
      {
        title: "Harden and hand over",
        description:
          "Document final access, certificate behavior, validation evidence, and recovery procedures.",
      },
    ],
    diagram: `flowchart LR
  internet[Public network] --> wan[Public bridge]
  wan --> fw[OPNsense VM]
  admin[Admin client] --> vpn[WireGuard]
  vpn --> fw
  fw --> lan[Private bridge]
  lan --> pve[Hypervisor management]
  lan --> guests[Private workloads]`,
    stack: ["Proxmox VE", "OPNsense", "WireGuard", "Linux networking", "Bash", "Cloud-init"],
    learned:
      "I learned that infrastructure hardening is mostly sequencing: prove recovery first, validate the new path second, and only then remove the old exposure.",
  },
  {
    title: "Proxmox Provisioning Control Plane",
    summary:
      "A containerized API and worker flow for requesting, validating, and provisioning virtual machines through a controlled interface.",
    period: "Part-time platform project",
    status: "Implemented",
    detail:
      "This project turns manual VM creation into an API-backed workflow with validation, job tracking, and integration hooks for an internal low-code interface.",
    highlights: [
      "Built a FastAPI service around Proxmox API operations and VM request validation.",
      "Used Docker Compose to run the API, database, and integration layer consistently.",
      "Separated request intake from provisioning work so failures can be tracked instead of hidden.",
    ],
    timeline: [
      {
        title: "Define request contract",
        description:
          "Model VM inputs, environment values, and validation rules before touching the hypervisor API.",
      },
      {
        title: "Containerize service",
        description:
          "Package the API and supporting services with Docker Compose for repeatable local and server runs.",
      },
      {
        title: "Add job handling",
        description:
          "Track provisioning status through database-backed jobs instead of relying on one-shot scripts.",
      },
      {
        title: "Integrate interface",
        description:
          "Connect the request workflow to a low-code front end while keeping provisioning logic in the API.",
      },
    ],
    diagram: `flowchart LR
  ui[Request UI] --> api[FastAPI service]
  api --> db[(Job database)]
  api --> worker[Provisioning worker]
  worker --> proxmox[Proxmox API]
  proxmox --> vm[Virtual machine]`,
    stack: ["FastAPI", "Python", "Docker Compose", "PostgreSQL", "Proxmox API"],
    learned:
      "I learned how platform work changes when the goal is not just to create infrastructure, but to make the request path auditable and repeatable.",
  },
  {
    title: "Proxmox Private VM Access with WireGuard",
    summary:
      "A public infrastructure lab that uses Ansible and Terraform to bootstrap private VM access behind WireGuard.",
    period: "Public GitHub project",
    status: "Active",
    detail:
      "This project separates host preparation from VM lifecycle management: Ansible handles the Proxmox host baseline while Terraform manages VM resources.",
    highlights: [
      "Used Ansible roles and playbooks for repeatable Proxmox host bootstrap.",
      "Used Terraform modules and environments for VM lifecycle boundaries.",
      "Added CI checks for Terraform formatting and Ansible syntax validation.",
    ],
    timeline: [
      {
        title: "Bootstrap host",
        description:
          "Prepare Proxmox dependencies and baseline configuration with Ansible.",
      },
      {
        title: "Define VM lifecycle",
        description:
          "Use Terraform modules and environment folders to describe private VM resources.",
      },
      {
        title: "Gate access",
        description:
          "Use WireGuard as the administrative entry point for private resources.",
      },
      {
        title: "Validate changes",
        description:
          "Run CI checks before infrastructure definitions are treated as usable.",
      },
    ],
    diagram: `flowchart LR
  gha[GitHub Actions] --> checks[Format and syntax checks]
  ansible[Ansible] --> host[Proxmox host]
  terraform[Terraform] --> vm[Private VMs]
  wg[WireGuard] --> vm`,
    stack: ["Terraform", "Ansible", "Proxmox VE", "WireGuard", "GitHub Actions", "Makefile"],
    repoUrl: "https://github.com/Sureinity/proxmox-private-vm-access-wireguard",
    learned:
      "I learned why IaC ownership boundaries matter: host state, VM state, and access paths should not be mixed into one unclear automation layer.",
  },
  {
    title: "Web Security Chaos Toolkit",
    summary:
      "A DevSecOps-oriented CLI toolkit for orchestrating web audits, scanners, and controlled failure experiments.",
    period: "Public GitHub project",
    status: "Active",
    detail:
      "This project focuses on operational security workflows: repeatable scans, structured outputs, local lab services, and adapter-based tooling.",
    highlights: [
      "Built a Python CLI with typed configuration and scanner orchestration.",
      "Used Docker Compose to run supporting security and chaos-testing services.",
      "Added tests, linting, typing, and pre-commit checks to keep the toolkit maintainable.",
    ],
    timeline: [
      {
        title: "Model audit workflows",
        description:
          "Define CLI commands, configuration, and output formats before adding scanners.",
      },
      {
        title: "Attach tool adapters",
        description:
          "Wrap security tools behind consistent interfaces for repeatable execution.",
      },
      {
        title: "Run local lab services",
        description:
          "Use Compose-managed services for scanner and chaos-testing workflows.",
      },
      {
        title: "Enforce quality gates",
        description:
          "Use tests, linting, typing, and pre-commit checks to catch toolchain drift.",
      },
    ],
    diagram: `flowchart LR
  cli[Python CLI] --> adapters[Tool adapters]
  adapters --> scanners[Security scanners]
  cli --> compose[Compose lab]
  compose --> target[Test targets]
  scanners --> reports[Structured reports]`,
    stack: ["Python", "Docker Compose", "ZAP", "Nuclei", "Nmap", "Trivy", "Semgrep", "pytest"],
    repoUrl: "https://github.com/Sureinity/websec-chaos-toolkit",
    learned:
      "I learned that security tooling becomes more useful when it produces consistent evidence instead of one-off terminal output.",
  },
];

export const experienceItems: TimelineEntry[] = [
  {
    title: "Linux SysAdmin / System Engineer",
    organization: "Helity",
    organizationLogoFallback: "not-allowed",
    location: "Europe/Berlin",
    period: "December 2025 - Present",
    mode: "Part-time",
    summary:
      "Supporting infrastructure and platform work across Proxmox-based systems, secure service deployment, and internal automation workflows.",
    bullets: [
      "Designed and documented Proxmox VE networking around OPNsense, private VM bridges, DHCP/NAT boundaries, and WireGuard-based administrative access.",
      "Built a FastAPI provisioning worker that integrates Budibase, PostgreSQL, Docker Compose, and the Proxmox API for queued VM clone requests.",
      "Prepared Coolify, Traefik, CrowdSec, internal TLS, WAF verification, and operational notes for a secure self-hosted application platform.",
      "Created validation, rollback, and infrastructure collection scripts to make system changes easier to verify and recover.",
    ],
    stack: ["Linux", "Proxmox VE", "OPNsense", "WireGuard", "Docker Compose", "FastAPI", "PostgreSQL", "Coolify", "Traefik", "CrowdSec", "Bash"],
    open: true,
  },
  {
    title: "Internship (DevOps)",
    organization: "Infosoft",
    organizationUrl: "https://infosoft.poolreno.com/",
    organizationLogoSrc: "/organizations/infosoft.png",
    organizationLogoAlt: "Infosoft logo",
    location: "Davao City, Philippines",
    period: "March 2026 - June 2026 (Expected)",
    mode: "Internship",
    summary:
      "Contributing to the team’s DevOps direction by improving development workflows, container practices, and security-focused automation.",
    bullets: [
      "Introduced DevOps practices and alternative workflow approaches, including infrastructure as code, configuration as code, CI/CD, and documentation frameworks.",
      "Trimmed and optimized the team’s Docker-based PHP/Laravel development environment template to make local setup lighter and easier to maintain.",
      "Developed the Web Security Chaos Toolkit, a Python-based DevSecOps CLI for repeatable web audits, scanner orchestration, Docker Compose lab services, and structured security evidence.",
    ],
    stack: ["Docker", "Laravel", "PHP", "CI/CD", "Documentation", "Python", "Docker Compose", "DevSecOps"],
  },
];

export const educationItems: TimelineEntry[] = [
  {
    title: "Bachelor of Science in Information Technology",
    organization: "University of Mindanao - Digos College",
    organizationUrl: "https://www.facebook.com/umdigoscollege/",
    organizationLogoSrc: "/organizations/um-digos-college.png",
    organizationLogoAlt: "University of Mindanao - Digos College logo",
    period: "August 2023 - July 2026 (Expected)",
    mode: "Undergraduate",
    summary:
      "Focused on Linux, web development, cybersecurity, and machine learning while building a stronger foundation for DevOps and platform engineering work.",
    bullets: [
      "Built fundamentals across programming, systems, web application development, and security-aware software practices.",
      "Used coursework and self-directed projects to connect Linux, infrastructure, automation, and practical deployment workflows.",
    ],
    stack: ["Linux", "Web Development", "Cybersecurity", "Machine Learning", "Information Technology"],
    open: true,
  },
];

export const articleEntries: ArticleEntry[] = [
  {
    title: "What I’m learning from building a self-hosted deployment lab",
    summary:
      "A future write-up about how DNS, reverse proxies, containers, and host-level services fit together in practice.",
    date: "Draft article",
    readingTime: "6 min",
    category: "Infrastructure notes",
    href: "https://example.com/blog/self-hosted-deployment-lab",
  },
  {
    title: "CI/CD checks that made my deployment workflow easier to trust",
    summary:
      "A placeholder article about the quality gates and automation steps that reduced manual release uncertainty.",
    date: "Planned article",
    readingTime: "5 min",
    category: "Delivery workflow",
    href: "https://example.com/blog/cicd-checks",
  },
  {
    title: "Why I keep returning to Linux and networking fundamentals",
    summary:
      "A draft idea on how lower-level system knowledge improves debugging, deployment decisions, and long-term confidence.",
    date: "Planned article",
    readingTime: "4 min",
    category: "Learning journal",
    href: "https://example.com/blog/linux-networking-fundamentals",
  },
];

export const stackCategories: StackCategory[] = [
  {
    title: "Infrastructure & Ops",
    icon: Layers3,
    items: ["Docker", "Reverse proxies", "Homelab services", "Systemd", "Monitoring basics"],
  },
  {
    title: "Linux & Networking",
    icon: TerminalSquare,
    items: ["Linux administration", "SSH", "TCP/IP fundamentals", "DNS", "Routing and firewall basics"],
  },
  {
    title: "Automation",
    icon: Workflow,
    items: ["Bash", "Python", "Provisioning scripts", "Task automation", "Repeatable setup habits"],
  },
  {
    title: "Cloud & Platform",
    icon: Cloud,
    items: ["Terraform basics", "Kubernetes fundamentals", "Cloud networking", "Observability", "Security-aware delivery"],
  },
];

export const stackLogoItems: StackLogoItem[] = [
  {
    name: "Ansible",
    logoSrc: "/stack/theme/ansible-light.png",
    contrastLogoSrc: "/stack/theme/ansible-dark.png",
  },
  { name: "Terraform", logoSrc: "/stack/theme/terraform.png" },
  { name: "Azure", logoSrc: "/stack/theme/azure.png" },
  {
    name: "Bash",
    logoSrc: "/stack/theme/bash-light.png",
    contrastLogoSrc: "/stack/theme/bash-dark.png",
  },
  { name: "Python", logoSrc: "/stack/theme/python.png" },
  { name: "Git", logoSrc: "/stack/theme/git.png" },
  {
    name: "GitHub",
    logoSrc: "/stack/theme/github-light.png",
    contrastLogoSrc: "/stack/theme/github-dark.png",
  },
  { name: "GitHub Actions", logoSrc: "/stack/theme/githubactions.png" },
  { name: "Docker | Docker Compose", logoSrc: "/stack/theme/docker-simpleicons.png", display: "docker" },
  { name: "Proxmox VE", logoSrc: "/stack/theme/proxmox.png" },
];

export const footerLinks = [
  { label: "GitHub", href: "https://github.com/Sureinity" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/john-ghlen-dealdo-6a475539b" },
  { label: "Website", href: "https://portfolio.ghlensui.xyz" },
];

export const paletteActions: PaletteAction[] = [
  {
    title: "Jump to About",
    description: "Read the summary and motivation behind the portfolio.",
    href: "#about",
    group: "Sections",
  },
  {
    title: "Jump to Activity",
    description: "See the contribution and learning activity panel.",
    href: "#activity",
    group: "Sections",
  },
  {
    title: "Jump to Projects",
    description: "Open the project list and deployment-focused work.",
    href: "#projects",
    group: "Sections",
  },
  {
    title: "Jump to Experience",
    description: "Open the experience and education timeline panels.",
    href: "#experience",
    group: "Sections",
  },
  // {
  //   title: "Jump to Articles",
  //   description: "Open the blog and writing section.",
  //   href: "#articles",
  //   group: "Sections",
  // },
  {
    title: "Jump to Stack",
    description: "Review the technology categories and tools.",
    href: "#stack",
    group: "Sections",
  },
  {
    title: "Open Resume",
    description: "Open the latest resume PDF in a new tab.",
    href: "/resume/john-ghlen-dealdo-resume.pdf",
    group: "Links",
    external: true,
  },
  {
    title: "Open GitHub",
    description: "Open the main GitHub profile for projects and labs.",
    href: "https://github.com/Sureinity",
    group: "Links",
    external: true,
  },
  {
    title: "Send Email",
    description: "Open the portfolio contact email.",
    href: "mailto:johnghlendealdo@gmail.com",
    group: "Links",
    external: true,
  },
  {
    title: "Open Website",
    description: "Open the public portfolio domain.",
    href: "https://portfolio.ghlensui.xyz",
    group: "Links",
    external: true,
  },
];

export const heroBadges = [
  { label: "Linux-first", icon: House },
  { label: "Networking-aware", icon: Waypoints },
  { label: "Infra as code", icon: Cable },
  { label: "Security-minded", icon: ShieldCheck },
  { label: "Observability learning", icon: Radar },
  { label: "CI/CD practice", icon: Workflow },
];
