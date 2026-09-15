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
  role: "DevOps / Infrastructure Engineer",
  tagline:
    "Builds practical infrastructure systems designed to be repeatable, recoverable, and easy to operate.",
  summary:
    "Linux administrator turning production Proxmox environments into codified, recoverable platforms using Terraform, Packer, and Ansible. Hands-on across networking, IaC, CI/CD, and secure service deployment.",
  status:
    "Linux system administrator and infrastructure engineer based in the Philippines.",
  quickFacts: [
    "Linux system administrator",
    "Philippines-based",
    "Automation-first mindset",
    "Infrastructure-focused growth",
  ],
};

export const overviewItems: OverviewItem[] = [
  {
    label: "Track",
    value: "DevOps / Infrastructure",
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
    value: "Linux system administrator",
    detail: "Growing practical systems experience while moving deeper into DevOps and Infrastructure work",
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
  "Most recent work revolves around **Proxmox infrastructure**, image pipelines, **infrastructure as code**, and repeatable deployment workflows, with a growing focus on **secure access**, network boundaries, and reliable operations.",
  "The problems that hold attention the most are the ones where the blast radius matters — hardening network boundaries, splitting infrastructure into recoverable states, and making complex systems simple enough to hand over. A good deployment should be boring, and a good rollback should already be written.",
  "Background is in **Linux system administration**, now growing deeper into platform engineering, codified infrastructure, and operational tooling. Currently part-time with a German infrastructure company while building toward full-time DevOps and infrastructure engineering work.",
  "Outside of work, time is usually spent tinkering with **side projects**, exploring new technologies, or training in **calisthenics**.",
];

export const projects: ProjectEntry[] = [
  {
    title: "Gated Proxmox Management via OPNsense",
    summary:
      "A hardened virtualized network design that moves hypervisor administration behind a two-node OPNsense HA pair and VPN-only access path.",
    period: "InfraOps project",
    status: "Implemented · Helity",
    detail:
      "The goal was to reduce direct management exposure while keeping OPNsense HA, firewall policy, rollback, baseline capture, and operator access clear enough for a risky network cutover.",
    highlights: [
      "Designed a two-bridge Proxmox layout with a WAN bridge and isolated private management bridge.",
      "Placed OPNsense between external ingress and private administration paths.",
      "Deployed a two-node OPNsense HA pair with CARP virtual IPs (VIPs) on both the LAN and WAN so gateway and firewall failover stays transparent to clients.",
      "Built a dedicated isolated sync bridge for XMLRPC configuration sync and pfsync state synchronization, kept off the data paths to reduce blast radius and keep HA control traffic in its own fault domain.",
      "Kept WireGuard as the private administrative access path through the HA design.",
      "Handled firewalling on the OPNsense pair with policy governing ingress and inter-zone paths.",
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
          "Create WAN and private bridges, deploy OPNsense, enable private LAN services, and validate a test VM.",
      },
      {
        title: "Stand up HA pair",
        description:
          "Deploy the second OPNsense node, add the isolated XMLRPC and pfsync sync bridge, and validate CARP failover across LAN and WAN VIPs.",
      },
      {
        title: "Validate VPN entry",
        description:
          "Enable WireGuard, test external admin access, and keep the original management path until the private route works.",
      },
      {
        title: "Cut over management",
        description:
          "Move hypervisor administration to the private bridge and confirm the old exposed path is closed.",
      },
      {
        title: "Harden and hand over",
        description:
          "Document final access, certificate behavior, validation evidence, and recovery procedures.",
      },
    ],
    diagram: `flowchart LR
  internet[Internet] --> wan[WAN bridge]
  wan --> fw[OPNsense VM]
  admin[Admin client] --> vpn[WireGuard]
  vpn --> fw
  fw --> lan[Private bridge]
  lan --> pve[Hypervisor management]
  lan --> guests[Private workloads]`,
    stack: ["Proxmox VE", "OPNsense", "CARP", "pfsync", "WireGuard", "Linux networking", "Bash", "Cloud-init"],
  },
  {
    title: "Zabbix Monitoring Service",
    summary:
      "A monolithic Zabbix monitoring service deployed as a single-node control point for metrics and alerting across a customer fleet.",
    period: "Customer deployment",
    status: "Implemented · Helity",
    detail:
      "Stood up the all-in-one Zabbix server and onboarded 8 client servers, rolling out Zabbix Agent 2 across them with Ansible for repeatable and consistent installation and configuration.",
    highlights: [
      "Deployed a monolithic Zabbix server with the server, database, and web frontend on one node as the monitoring control point.",
      "Rolled out Zabbix Agent 2 to 8 client servers using an Ansible playbook for repeatable, uniform installation and registration.",
      "Standardized host and agent configuration so monitoring coverage is consistent and easy to extend to new hosts.",
    ],
    timeline: [
      {
        title: "Stand up Zabbix",
        description:
          "Deploy the monolithic Zabbix server with the server, database, and web frontend on one node.",
      },
      {
        title: "Define agent rollout",
        description:
          "Create the Ansible path for repeatable Zabbix Agent 2 installation and configuration.",
      },
      {
        title: "Roll out Agent 2",
        description:
          "Use Ansible to install and configure Zabbix Agent 2 across the 8 client servers.",
      },
      {
        title: "Verify monitoring",
        description:
          "Onboard the hosts into Zabbix and confirm that the fleet reports into monitoring consistently.",
      },
    ],
    diagram: `flowchart LR
  ansible[Ansible playbook] --> agents[8 client servers with Agent 2]
  agents --> zabbix[Monolithic Zabbix server]`,
    stack: ["Zabbix", "Zabbix Agent 2", "Ansible", "Linux", "PostgreSQL"],
  },
  {
    title: "Proxmox Platform Infrastructure as Code",
    summary:
      "A production-style Proxmox platform repository that separates image creation, network control-plane contracts, workload lifecycle, and guest configuration into explicit boundaries.",
    period: "Platform IaC project",
    status: "Established · GitHub",
    detail:
      "This repository is designed as a secure multi-tier private cloud baseline on Proxmox, using Packer for immutable image construction, Terraform for layered infrastructure lifecycle, and Ansible for post-boot guest configuration.",
    highlights: [
      "Split Terraform into `network`, `image-factory`, and `workloads` states to control blast radius and review scope.",
      "Defined a four-zone platform model with Proxmox Linux bridges at L2 and OPNsense as the routing and policy control plane.",
      "Published a Terraform-to-Ansible handoff contract and validation-only GitHub Actions pipeline instead of mixing deployment logic into CI.",
    ],
    timeline: [
      {
        title: "Establish platform contracts",
        description:
          "Document architecture, scope, ADRs, naming, and lifecycle ownership before expanding implementation.",
      },
      {
        title: "Build image factory",
        description:
          "Use Packer to produce the reusable Debian-based image and template contract for downstream platform layers.",
      },
      {
        title: "Split infrastructure states",
        description:
          "Separate shared network fabric, template lifecycle, and workload provisioning into independent Terraform roots.",
      },
      {
        title: "Provision zoned workloads",
        description:
          "Model admin, edge, application, and data workloads against the OPNsense-backed four-zone network contract.",
      },
      {
        title: "Hand off to configuration",
        description:
          "Publish an Ansible-ready inventory output and keep CI focused on validation, formatting, and syntax safety.",
      },
    ],
    diagram: `flowchart LR
  packer[Packer image factory] --> template[Approved template]
  network[Terraform network state] --> fw[OPNsense control plane]
  template --> workloads[Terraform workloads state]
  fw --> zones[mgmt / edge / app / data zones]
  workloads --> inventory[Ansible inventory contract]
  inventory --> ansible[Ansible guest configuration]`,
    stack: ["Packer", "Terraform", "Ansible", "Proxmox VE", "OPNsense", "Cloud-init", "GitHub Actions"],
    repoUrl: "https://github.com/Sureinity/proxmox-platform-iac",
  },
  {
    title: "Web Security Chaos Toolkit",
    summary:
      "An internal DevSecOps-oriented CLI toolkit built during my Infosoft internship for repeatable web audits, scanner orchestration, and controlled failure experiments.",
    period: "Internal DevSecOps tool",
    status: "Implemented · Infosoft",
    detail:
      "This internship task focused on giving the team an internal security workflow tool: repeatable scans, structured outputs, local lab services, and adapter-based tooling.",
    highlights: [
      "Built a Python CLI for internal audit workflows with typed configuration and scanner orchestration.",
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
  },
  {
    title: "Proxmox Private VM Access with WireGuard",
    summary:
      "A GitHub infrastructure lab that uses Ansible and Terraform to bootstrap private VM access behind WireGuard.",
    period: "GitHub project",
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
  },
].filter((project) => project.title !== "Proxmox Private VM Access with WireGuard");

export const experienceItems: TimelineEntry[] = [
  {
    title: "Linux SysAdmin / System Engineer",
    organization: "Helity",
    organizationLogoSrc: "/organizations/helity.png",
    organizationLogoAlt: "Helity logo",
    location: "Germany, Europe",
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
    period: "March 2026 - June 2026",
    mode: "Internship",
    summary:
      "Contributing to the team’s DevOps direction by improving development workflows, container practices, and security-focused automation.",
    bullets: [
      "Introduced DevOps practices and alternative workflow approaches, including infrastructure as code, configuration as code, CI/CD, and documentation frameworks.",
      "Trimmed and optimized the team’s Docker-based PHP/Laravel development environment template to make local setup lighter and easier to maintain.",
      "Developed the Web Security Chaos Toolkit, a Python-based DevSecOps CLI for repeatable web audits, scanner orchestration, Docker Compose lab services, and structured security evidence.",
    ],
    stack: ["Docker", "Proxmox VE", "Terraform", "CI/CD", "Documentation", "Python", "Docker Compose", "DevSecOps"],
  },
];

export const educationItems: TimelineEntry[] = [
  {
    title: "Bachelor of Science in Information Technology",
    organization: "University of Mindanao - Digos College",
    organizationUrl: "https://www.facebook.com/umdigoscollege/",
    organizationLogoSrc: "/organizations/um-digos-college.png",
    organizationLogoAlt: "University of Mindanao - Digos College logo",
    period: "August 2023 - July 2026",
    mode: "Graduate",
    summary:
      "Graduated with a focus on Linux, web development, cybersecurity, and machine learning while building a stronger foundation for DevOps and platform engineering work.",
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
  { name: "Packer", logoSrc: "/stack/theme/packer.svg" },
  { name: "Azure", logoSrc: "/stack/theme/azure.png" },
  { name: "Linux", logoSrc: "/stack/theme/linux.png" },
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
