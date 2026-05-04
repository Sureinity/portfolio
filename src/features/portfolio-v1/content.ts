import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Cloud,
  FolderGit2,
  LaptopMinimalCheck,
  Mail,
  Network,
  Server,
  TerminalSquare,
  Workflow,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  interests: string[];
  currentFocus: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  iconTone: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  learned: string;
  githubUrl: string;
  demoUrl: string;
};

export type JourneyTopic = {
  title: string;
  stage: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  note: string;
  href: string;
  icon: LucideIcon;
};

export const profile: Profile = {
  name: "Your Name",
  role: "Aspiring DevOps / Platform Engineer",
  tagline:
    "I enjoy building reliable infrastructure, practical automation, and deployment workflows that feel steady, repeatable, and easy to improve over time.",
  interests: [
    "Linux systems, containers, and infrastructure labs",
    "Networking concepts that explain how services connect",
    "Infrastructure as code and clean automation habits",
    "CI/CD workflows that make releases easier to trust",
  ],
  currentFocus: [
    "Terraform fundamentals and reusable infrastructure patterns",
    "Kubernetes concepts that connect application delivery to platform operations",
    "Security-aware deployment practices and observability basics",
  ],
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  "Understanding how Linux, networking, and services behave under real conditions",
  "Turning repetitive server and deployment steps into cleaner automation",
  "Building lab environments where I can test, break, and learn safely",
  "Owning infrastructure decisions from setup to troubleshooting and iteration",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Infrastructure & Operations",
    description:
      "I like thinking about how services are deployed, configured, and maintained beyond the initial setup.",
    items: [
      "Docker",
      "Homelab environments",
      "Service configuration",
      "Reverse proxies",
      "Monitoring basics",
    ],
    icon: Server,
    iconTone:
      "bg-[linear-gradient(135deg,rgba(255,235,224,0.95),rgba(255,247,228,0.95))] text-[#9a4d2f] ring-1 ring-white/80",
  },
  {
    title: "Linux & Networking",
    description:
      "I enjoy learning the lower layers so systems feel understandable instead of mysterious.",
    items: [
      "Linux administration",
      "Shell workflows",
      "TCP/IP fundamentals",
      "DNS and routing",
      "Firewall concepts",
    ],
    icon: Network,
    iconTone:
      "bg-[linear-gradient(135deg,rgba(230,243,255,0.95),rgba(237,249,255,0.95))] text-[#235b86] ring-1 ring-white/80",
  },
  {
    title: "Automation & Scripting",
    description:
      "I prefer repeatable commands and scripts over manual steps whenever the pattern is clear enough to automate.",
    items: [
      "Bash",
      "Python",
      "Provisioning scripts",
      "Task automation",
      "Idempotent habits",
    ],
    icon: TerminalSquare,
    iconTone:
      "bg-[linear-gradient(135deg,rgba(236,250,246,0.95),rgba(241,252,249,0.95))] text-[#20735d] ring-1 ring-white/80",
  },
  {
    title: "CI/CD & DevOps Tools",
    description:
      "I’m building confidence with pipelines that test, package, and move applications in a predictable way.",
    items: [
      "GitHub Actions",
      "Git workflows",
      "Build pipelines",
      "Container registries",
      "Secrets handling basics",
    ],
    icon: Workflow,
    iconTone:
      "bg-[linear-gradient(135deg,rgba(255,239,229,0.95),rgba(255,233,244,0.95))] text-[#9b4766] ring-1 ring-white/80",
  },
  {
    title: "Cloud & Platform Concepts",
    description:
      "I’m actively learning the patterns that connect infrastructure decisions to platform reliability at a larger scale.",
    items: [
      "Terraform basics",
      "Kubernetes fundamentals",
      "Cloud networking",
      "Observability concepts",
      "Reliability-minded thinking",
    ],
    icon: Cloud,
    iconTone:
      "bg-[linear-gradient(135deg,rgba(233,242,255,0.95),rgba(240,247,255,0.95))] text-[#345f9b] ring-1 ring-white/80",
  },
];

export const projects: Project[] = [
  {
    title: "Self-hosted deployment lab",
    description:
      "A personal lab environment for testing containers, reverse proxies, DNS, and service exposure in a setup I can safely change and rebuild.",
    techStack: ["Docker", "Linux", "Nginx", "DNS"],
    learned:
      "I learned how much clarity comes from documenting the path between hostname, network, container, and running service before troubleshooting starts.",
    githubUrl: "https://github.com/yourusername/self-hosted-deployment-lab",
    demoUrl: "https://example.com/self-hosted-deployment-lab",
  },
  {
    title: "Dockerized Django deployment pipeline",
    description:
      "A deployment workflow for packaging a Django app, running checks, and keeping releases more consistent across local and server environments.",
    techStack: ["Django", "Docker", "GitHub Actions", "PostgreSQL"],
    learned:
      "I learned why predictable builds, environment separation, and health checks matter before a deployment can be considered reliable.",
    githubUrl: "https://github.com/yourusername/dockerized-django-pipeline",
    demoUrl: "https://example.com/dockerized-django-pipeline",
  },
  {
    title: "Proxmox and OPNsense infrastructure lab",
    description:
      "A homelab setup for exploring virtual machines, segmented networks, firewall rules, and practical infrastructure troubleshooting.",
    techStack: ["Proxmox", "OPNsense", "VLANs", "Linux"],
    learned:
      "I learned how network design decisions affect access, isolation, and service reliability long before application code becomes the problem.",
    githubUrl: "https://github.com/yourusername/proxmox-opnsense-lab",
    demoUrl: "https://example.com/proxmox-opnsense-lab",
  },
  {
    title: "GitHub Actions CI/CD workflow",
    description:
      "A reusable pipeline template for linting, testing, building, and preparing a containerized application for deployment.",
    techStack: ["GitHub Actions", "Docker", "YAML", "CI/CD"],
    learned:
      "I learned how useful it is to split deployments into visible steps so failures are easier to trace and fixes are easier to repeat.",
    githubUrl: "https://github.com/yourusername/github-actions-cicd-workflow",
    demoUrl: "https://example.com/github-actions-cicd-workflow",
  },
  {
    title: "Linux server automation scripts",
    description:
      "A collection of scripts for common server setup tasks such as package installation, user management, service setup, and repeatable configuration.",
    techStack: ["Bash", "Linux", "SSH", "Automation"],
    learned:
      "I learned that even small automation scripts reduce manual drift and make it easier to rebuild an environment with confidence.",
    githubUrl: "https://github.com/yourusername/linux-server-automation-scripts",
    demoUrl: "https://example.com/linux-server-automation-scripts",
  },
];

export const journeyTopics: JourneyTopic[] = [
  {
    title: "Terraform",
    stage: "Building now",
    description:
      "Practicing variables, modules, and state basics so infrastructure becomes easier to reason about and repeat safely.",
  },
  {
    title: "Kubernetes",
    stage: "Active learning",
    description:
      "Working through the core ideas behind pods, services, deployments, and how orchestration changes delivery and operations.",
  },
  {
    title: "Cloud infrastructure",
    stage: "Expanding",
    description:
      "Connecting what I learn in local labs to cloud networking, compute, storage, and identity concepts used in real environments.",
  },
  {
    title: "System observability",
    stage: "Growing",
    description:
      "Learning how logs, metrics, health checks, and alerts help teams understand system behavior before incidents grow larger.",
  },
  {
    title: "Security-aware deployment practices",
    stage: "Ongoing",
    description:
      "Building habits around secret handling, least privilege, controlled rollouts, and safer defaults throughout deployment workflows.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "hello@your-email.dev",
    note: "Use your preferred email address for job inquiries, collaboration, or networking.",
    href: "mailto:hello@your-email.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    note: "Point this to the profile where you keep your labs, automation scripts, and deployment projects.",
    href: "https://github.com/yourusername",
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    note: "Swap this with your public LinkedIn profile once you are ready to share it.",
    href: "https://www.linkedin.com/in/yourname",
    icon: BriefcaseBusiness,
  },
  {
    label: "Resume",
    value: "Resume link placeholder",
    note: "Replace this with a hosted PDF or portfolio download when you have a version you want to send out.",
    href: "https://example.com/your-resume.pdf",
    icon: LaptopMinimalCheck,
  },
];
