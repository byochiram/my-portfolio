import { SectionHeading } from "./SectionHeading";
import {
  ExternalLink,
  Github,
  LockKeyhole,
  MonitorPlay,
  type LucideIcon,
} from "lucide-react";
import { ProjectPreviewCarousel } from "./ProjectPreviewCarousel";

type ProjectStatus = "live" | "internal";

type Project = {
  title: string;
  subtitle: string;
  organization: string;
  description: string;
  role: string;
  status: ProjectStatus;
  tech: string[];
  highlights: string[];
  previews: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Tempus Auctions",
    subtitle: "Thesis Project",
    organization: "PT. Tempus Collective Indonesia",
    description:
      "A web-based auction platform built as an undergraduate thesis project to extend Tempus Collective’s fixed-price sales model into an online bidding system.",
    role: "Full Stack Developer",
    status: "live",
    tech: ["Laravel", "PHP", "Blade", "Tailwind CSS", "JavaScript", "MySQL"],
    highlights: [
      "Built an end-to-end auction flow from catalog browsing to winner transaction",
      "Delivered workflows across 4 roles: Guest, Bidder, Admin, and Superadmin",
      "Engineered anti-sniping logic, bid validation, email verification, checkout, shipping cost calculation, and winner transactions",
      "Validated 17 use cases through 161 black-box test scenarios",
    ],
    previews: [
      "/projects/tempus/preview-1.webp",
      "/projects/tempus/preview-2.webp",
      "/projects/tempus/preview-3.webp",
      "/projects/tempus/preview-4.webp",
      "/projects/tempus/preview-5.webp",
      "/projects/tempus/preview-6.webp",
      "/projects/tempus/preview-7.webp",
      "/projects/tempus/preview-8.webp",
      "/projects/tempus/preview-9.webp",
    ],
    github: "https://github.com/byochiram/watch-auction-system",
    demo: "https://auctions.tempuscollective.com/",
  },
  {
    title: "SiGMA",
    subtitle: "Course Project",
    organization: "Group Project",
    description:
      "An academic capstone project simulating a university semester study plan registration system, focused on academic advisor approval workflows.",
    role: "Academic Advisor Role Developer",
    status: "live",
    tech: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Bootstrap", "MySQL"],
    highlights: [
      "Built the Academic Advisor module for reviewing student study plan submissions",
      "Delivered 4 core workflows: IRS approval, revision permission, cancellation permission, and student recap",
      "Implemented filtering, status tracking, bulk approval, validation rules, and PDF printing",
      "Validated 8 functional workflows and won 1st place in the Software Project course Capstone",
    ],
    previews: [
      "/projects/sigma/preview-1.webp",
      "/projects/sigma/preview-2.webp",
      "/projects/sigma/preview-3.webp",
      "/projects/sigma/preview-4.webp",
      "/projects/sigma/preview-5.webp",
      "/projects/sigma/preview-6.webp",
      "/projects/sigma/preview-7.webp",
      "/projects/sigma/preview-8.webp",
      "/projects/sigma/preview-9.webp",
      "/projects/sigma/preview-10.webp",
      "/projects/sigma/preview-11.webp",
    ],
    github: "https://github.com/byochiram/SigmaPPL",
    demo: "https://sigmappl-production.up.railway.app/",
  },
  {
    title: "SIPP",
    subtitle: "Internship Project",
    organization: "BPSDMD Jawa Tengah",
    description:
      "An internal admin-side training registration system for Civil Servants (ASN) across Central Java, developed during internship at BPSDMD Jawa Tengah.",
    role: "Intern Developer",
    status: "internal",
    tech: ["Laravel", "PHP", "Blade", "MySQL", "Bootstrap"],
    highlights: [
      "Rebuilt a legacy native PHP workflow into a structured admin-side system",
      "Delivered 28 use cases across training management, participant validation, certificates, dashboard analytics, and user management",
      "Integrated MANTRA API to automate ASN identity validation and reduce manual participant data entry",
      "Designed 3 core database tables and executed 144 black-box test scenarios before handover",
    ],
    previews: [
      "/projects/sipp/preview-1.webp",
      "/projects/sipp/preview-2.webp",
      "/projects/sipp/preview-3.webp",
      "/projects/sipp/preview-4.webp",
    ],
  },
];

const statusMeta: Record<
  ProjectStatus,
  { label: string; className: string; icon: LucideIcon }
> = {
  live: {
    label: "Live Project",
    className: "border-secondary/30 bg-secondary/15 text-secondary",
    icon: MonitorPlay,
  },
  internal: {
    label: "Internal Project",
    className: "border-foreground/15 bg-foreground/5 text-foreground/70",
    icon: LockKeyhole,
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Selected <span className="font-display italic">projects</span>
            </>
          }
          description="A collection of web-based systems built through thesis, coursework, and internship experience. Each project preview shows selected screens only."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const meta = statusMeta[project.status];
            const StatusIcon = meta.icon;

            return (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <ProjectPreviewCarousel
                  images={project.previews}
                  title={project.title}
                />

                <div className="mt-5 flex items-start justify-between gap-3 text-xs">
                  <span
                    className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 font-medium ${meta.className}`}
                  >
                    <StatusIcon className="h-3.5 w-3.5 shrink-0" />
                    {meta.label}
                  </span>

                  <span className="min-w-0 text-right leading-snug text-muted-foreground">
                    {project.subtitle}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-primary">
                    {project.organization}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.role}
                  </p>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {(project.github || project.demo) && (
                  <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-opacity hover:opacity-90"
                      >
                        Visit Live
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}