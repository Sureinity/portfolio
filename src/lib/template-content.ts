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
  highlights: string[];
  stack: string[];
  repoUrl: string;
  demoUrl: string;
  learned: string;
};

export type TimelineEntry = {
  title: string;
  organization: string;
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

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Activity", href: "#activity" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#articles" },
  { label: "Stack", href: "#stack" },
];

export const heroProfile: HeroProfile = {
  name: "John Ghlen Dealdo",
  initials: "JGD",
  role: "Junior DevOps / Platform Engineer",
  tagline:
    "Building reliable infrastructure, automation, and deployment workflows one practical system at a time.",
  summary:
    "I’m drawn to the parts of software delivery that sit below the interface: Linux, networking, infrastructure as code, CI/CD, and the steady operational habits that make systems easier to run and easier to trust.",
  status:
    "Part-time Linux system administrator based in the Philippines, building toward junior DevOps and platform engineering work.",
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
    value: "Junior DevOps / Platform",
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
    handle: "linkedin.com/in/john-ghlen-dealdo-6a475539b",
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
  "I enjoy technical work that rewards curiosity and careful problem solving. The more I learn about the layers underneath an application, the more interested I become in the path from code to running service.",
  "Linux, networking, infrastructure as code, container workflows, and deployment automation all appeal to me for the same reason: they turn abstract systems into something I can observe, improve, and maintain responsibly.",
  "My goal is not to sound more experienced than I am. I want to keep building practical depth, document what I learn, and become the kind of engineer who can own infrastructure with clarity from setup through troubleshooting.",
];

const activitySeed = [0, 1, 0, 2, 1, 3, 0, 1, 2, 0, 4, 1, 0, 2];

export const activityWeeks = Array.from({ length: 28 }, (_, weekIndex) =>
  Array.from({ length: 7 }, (_, dayIndex) => {
    const seed = activitySeed[(weekIndex + dayIndex) % activitySeed.length];

    if ((weekIndex + 2 * dayIndex) % 17 === 0) {
      return 4;
    }

    if ((weekIndex + dayIndex) % 9 === 0) {
      return Math.min(seed + 1, 3);
    }

    return seed;
  }),
);

export const activityMonthLabels = [
  "Nov",
  "",
  "",
  "",
  "Dec",
  "",
  "",
  "",
  "Jan",
  "",
  "",
  "",
  "Feb",
  "",
  "",
  "",
  "Mar",
  "",
  "",
  "",
  "Apr",
  "",
  "",
  "",
  "May",
  "",
  "",
  "",
];

export const projects: ProjectEntry[] = [
  {
    title: "Self-hosted deployment lab",
    summary:
      "A personal environment for testing service exposure, reverse proxies, DNS, and deployment flow in a setup that can be rebuilt from scratch.",
    period: "Ongoing lab",
    status: "Active",
    highlights: [
      "Containerized multiple services and documented how they move from local build to reachable application.",
      "Practiced mapping DNS, ports, reverse proxy rules, and host-level service management together.",
      "Used the lab as a safe place to test changes, failure cases, and recovery steps.",
    ],
    stack: ["Docker", "Linux", "Nginx", "DNS", "SSH"],
    repoUrl: "https://github.com/yourusername/self-hosted-deployment-lab",
    demoUrl: "https://example.com/self-hosted-deployment-lab",
    learned:
      "I learned that deployment confidence grows when networking, service ownership, and rollback thinking are documented alongside the code.",
  },
  {
    title: "Dockerized Django deployment pipeline",
    summary:
      "A repeatable workflow for packaging a Django app, checking build quality, and preparing a more reliable deployment path between local and server environments.",
    period: "Project template",
    status: "Ready to expand",
    highlights: [
      "Structured the app to build cleanly inside containers with environment-specific configuration.",
      "Added a pipeline path for linting, tests, and image build steps before release.",
      "Used the project to understand what makes a deployment easier to trust over time.",
    ],
    stack: ["Django", "Docker", "GitHub Actions", "PostgreSQL"],
    repoUrl: "https://github.com/yourusername/dockerized-django-pipeline",
    demoUrl: "https://example.com/dockerized-django-pipeline",
    learned:
      "I learned why repeatable builds, explicit configuration, and simple health checks matter before an app feels production-minded.",
  },
  {
    title: "Proxmox and OPNsense infrastructure lab",
    summary:
      "A homelab environment for exploring virtual machines, segmented networks, firewall decisions, and how infrastructure layout affects day-two operations.",
    period: "Homelab track",
    status: "Iterating",
    highlights: [
      "Experimented with virtualized services and isolated network segments.",
      "Practiced basic firewall and routing concepts in a more realistic environment.",
      "Used failures in the lab to understand how network assumptions break deployments.",
    ],
    stack: ["Proxmox", "OPNsense", "VLANs", "Linux", "Networking"],
    repoUrl: "https://github.com/yourusername/proxmox-opnsense-lab",
    demoUrl: "https://example.com/proxmox-opnsense-lab",
    learned:
      "I learned that infrastructure clarity matters early. Good network boundaries make troubleshooting faster long before the application layer changes.",
  },
  {
    title: "GitHub Actions CI/CD workflow",
    summary:
      "A reusable CI/CD workflow for validating changes, building artifacts, and creating a cleaner path from commit to deployable output.",
    period: "Reusable template",
    status: "Reference setup",
    highlights: [
      "Split checks into clear pipeline stages so failures are easier to trace.",
      "Used the workflow as a baseline for future app deployment projects.",
      "Built around the idea that automation should reduce repeated manual work, not hide it.",
    ],
    stack: ["GitHub Actions", "Docker", "YAML", "CI/CD"],
    repoUrl: "https://github.com/yourusername/github-actions-cicd-workflow",
    demoUrl: "https://example.com/github-actions-cicd-workflow",
    learned:
      "I learned that even small pipelines improve confidence when they make quality checks visible and consistent.",
  },
  {
    title: "Linux server automation scripts",
    summary:
      "A collection of scripts for server bootstrapping, package setup, user management, and other repeatable administration steps.",
    period: "Script library",
    status: "Growing",
    highlights: [
      "Captured common setup tasks in scripts instead of repeating them manually.",
      "Used the library to practice idempotent habits and cleaner shell workflows.",
      "Kept the scripts readable so they double as documentation for future rebuilds.",
    ],
    stack: ["Bash", "Linux", "Systemd", "Automation"],
    repoUrl: "https://github.com/yourusername/linux-server-automation-scripts",
    demoUrl: "https://example.com/linux-server-automation-scripts",
    learned:
      "I learned that small automation wins add up quickly when you need to rebuild, validate, or hand off a system later.",
  },
];

export const experienceItems: TimelineEntry[] = [
  {
    title: "Independent infrastructure lab builder",
    organization: "Self-directed practice",
    period: "Current",
    mode: "Hands-on learning",
    summary:
      "Building personal lab environments to understand deployments, Linux administration, service exposure, and how infrastructure decisions affect reliability.",
    bullets: [
      "Practice deploying and managing services in environments I can break and rebuild safely.",
      "Document the setup path, common failure points, and recovery steps for each lab iteration.",
      "Use each project to connect Linux, networking, containers, and CI/CD into one coherent flow.",
    ],
    stack: ["Linux", "Docker", "Nginx", "DNS", "Virtualization"],
    open: true,
  },
  {
    title: "Application delivery practice",
    organization: "Portfolio projects",
    period: "Recent work",
    mode: "Project-based",
    summary:
      "Focused on making application deployment workflows clearer, more repeatable, and easier to validate before release.",
    bullets: [
      "Package apps in containers and structure configuration for cleaner environment changes.",
      "Set up CI/CD steps that surface failures early and reduce manual release work.",
      "Treat deployment quality as part of the project rather than something added at the end.",
    ],
    stack: ["GitHub Actions", "Docker", "Django", "Bash"],
  },
  {
    title: "Automation and scripting practice",
    organization: "Personal toolset",
    period: "Ongoing",
    mode: "Incremental improvement",
    summary:
      "Collecting scripts and repeatable workflows for server setup, maintenance, and operational housekeeping.",
    bullets: [
      "Automate repeated administration steps instead of relying on memory or ad hoc notes.",
      "Use scripts as both tooling and documentation for how a machine should be prepared.",
      "Improve confidence by making rebuilds and verification steps easier to repeat.",
    ],
    stack: ["Bash", "Python", "SSH", "System administration"],
  },
];

export const educationItems: TimelineEntry[] = [
  {
    title: "Formal education entry",
    organization: "Add your school or program",
    period: "Add years attended",
    mode: "Degree or diploma",
    summary:
      "Replace this with your actual education background, concentration, and relevant coursework or capstone details.",
    bullets: [
      "Mention any systems, networking, or software engineering coursework that supports your current goals.",
      "Note projects, labs, or group work that shaped your interest in infrastructure or automation.",
    ],
    stack: ["Operating systems", "Networking", "Programming"],
    open: true,
  },
  {
    title: "Self-directed study path",
    organization: "Courses, labs, and documentation",
    period: "Ongoing",
    mode: "Independent learning",
    summary:
      "Acknowledge that practical lab work, documentation, and repeated experimentation are part of your education too.",
    bullets: [
      "Study Terraform, Kubernetes, observability, and security-aware deployment practices through projects.",
      "Keep notes on what works, what breaks, and what needs deeper understanding.",
    ],
    stack: ["Terraform", "Kubernetes", "Cloud", "Observability"],
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
  {
    title: "Jump to Articles",
    description: "Open the blog and writing section.",
    href: "#articles",
    group: "Sections",
  },
  {
    title: "Jump to Stack",
    description: "Review the technology categories and tools.",
    href: "#stack",
    group: "Sections",
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
