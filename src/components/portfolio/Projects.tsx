import { SectionHeading } from "./SectionHeading";
import { Github, ExternalLink, Info, MonitorPlay } from "lucide-react";
import { ProjectPreviewCarousel } from "./ProjectPreviewCarousel";

type Status = "live" | "not-deployed";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: Status;
  reason?: string;
  highlights?: string[];
  year: string;
  role?: string;
  previews?: string[];
};

const projects: Project[] = [
  {
    title: "Tempus Auctions",
    description:
      "Undergraduate thesis — a web-based watch auction system covering bidding, winner selection, invoicing, Duitku payment, and RajaOngkir shipping.",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Resend", "Duitku"],
    github: "https://github.com/byochiram/watch-auction-system",
    demo: "https://auctions.tempuscollective.com",
    status: "live",
    year: "2025",
    role: "Thesis · Full-stack Developer",
    highlights: [
      "Real-time highest bid + countdown",
      "Auto auction closing via Laravel Scheduler",
      "Admin dashboard for products, lots, bids, and shipments",
    ],
    previews: [],
  },
  {
    title: "SIGMA — PPL Project",
    description:
      "Team project for the Software Engineering (PPL) course in semester 5. Built collaboratively with classmates as a coursework deliverable.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    github: "https://github.com/byochiram",
    status: "not-deployed",
    reason: "Coursework project — runs locally, not deployed",
    year: "2024",
    role: "PPL Team Project · Semester 5",
    highlights: [
      "Built in a team following SDLC stages",
      "Role-based access and CRUD modules",
      "Documented requirements, design, and testing",
    ],
    previews: [],
  },
  {
    title: "Internship Project (PKL)",
    description:
      "Web application built during my internship to support internal operations. Hosted on a local/internal environment so a public demo isn't available.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    github: "https://github.com/byochiram",
    status: "not-deployed",
    reason: "Internship project — internal use only",
    year: "2024",
    role: "Internship · Developer",
    highlights: [
      "Contributed to feature development end-to-end",
      "Worked with real stakeholder feedback",
      "Practiced Git-based team workflow",
    ],
    previews: [],
  },
];

const statusMeta: Record<
  Status,
  { label: string; className: string; icon: typeof ExternalLink }
> = {
  live: {
    label: "Live Demo",
    className: "bg-secondary/15 text-secondary border-secondary/30",
    icon: ExternalLink,
  },
  "not-deployed": {
    label: "Not Deployed · Preview Only",
    className: "bg-foreground/5 text-foreground/70 border-foreground/15",
    icon: MonitorPlay,
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title={<>Things I built during <span className="font-display italic">college</span></>}
          description="A mix of coursework, an internship, and my undergraduate thesis. Most aren't deployed publicly, so here are previews of how they look."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const meta = statusMeta[p.status];
            const StatusIcon = meta.icon;
            return (
              <article
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <ProjectPreviewCarousel
                  images={p.previews ?? []}
                  title={p.title}
                />

                <div className="flex items-center justify-between gap-3 text-xs">
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-medium ${meta.className}`}
                  >
                    <StatusIcon className="h-3.5 w-3.5" />
                    {meta.label}
                  </span>
                  <span className="mt-5 text-muted-foreground">{p.year}</span>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                {p.role ? (
                  <p className="mt-1 text-xs text-muted-foreground">{p.role}</p>
                ) : null}

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                {p.highlights ? (
                  <ul className="mt-4 space-y-1.5">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {p.reason ? (
                  <p className="mt-4 inline-flex items-start gap-2 rounded-xl bg-muted px-3 py-2 text-xs text-muted-foreground">
                    <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                    {p.reason}
                  </p>
                ) : null}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 pt-5 border-t border-border">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold hover:border-primary hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  ) : null}
                  {p.status === "live" && p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
                    >
                      Visit live
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Want a walkthrough of any project?{" "}
          <a href="#contact" className="text-primary font-medium hover:underline">
            Reach out
          </a>
          .
        </p>
      </div>
    </section>
  );
}
