import { SectionHeading } from "./SectionHeading";
import { Github, ExternalLink, Lock, FileText, Info } from "lucide-react";

type Status = "live" | "source" | "private";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: Status;
  reason?: string; // why no live demo
  highlights?: string[];
  year: string;
  role?: string;
};

const projects: Project[] = [
  {
    title: "Tempus Auctions",
    description:
      "A web-based watch auction system built for PT. Tempus Collective Indonesia — covering bidding, winner selection, invoicing, Duitku payment integration, and RajaOngkir shipping.",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Resend", "Duitku"],
    github: "https://github.com/byochiram/watch-auction-system",
    demo: "https://auctions.tempuscollective.com",
    status: "live",
    year: "2025",
    role: "Full-stack Developer · Undergraduate Thesis",
    highlights: [
      "Real-time highest bid + countdown",
      "Auto auction closing via Laravel Scheduler",
      "Admin dashboard for products, lots, bids & shipments",
    ],
  },
  {
    title: "Campus Internship Portal",
    description:
      "Internal portal for managing student internships — application flow, supervisor matching, and progress reports. Runs only inside the campus network so a public demo isn't available.",
    tech: ["Laravel", "Livewire", "Tailwind CSS", "MySQL"],
    github: "https://github.com/byochiram",
    status: "private",
    reason: "Deployed on a private campus server",
    year: "2024",
    role: "Backend Developer",
    highlights: [
      "Role-based access for students, lecturers & admins",
      "PDF report generation",
      "Email notifications for status updates",
    ],
  },
  {
    title: "POS & Inventory App",
    description:
      "A point-of-sale and inventory tool for a small retail business. Built as a local desktop-style web app — not deployed publicly to keep client data private.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/byochiram",
    status: "source",
    reason: "Client project — source available, demo on request",
    year: "2024",
    role: "Solo Developer",
    highlights: [
      "Daily/weekly/monthly sales reports",
      "Stock alerts & barcode lookup",
      "Multi-cashier accounts",
    ],
  },
  {
    title: "Personal Blog Engine",
    description:
      "A minimal Markdown-powered blog used as a sandbox for trying new patterns. Currently running locally while content is being prepared for launch.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/byochiram",
    status: "source",
    reason: "Work in progress — not yet deployed",
    year: "2025",
    role: "Solo",
    highlights: [
      "MDX with syntax highlighting",
      "Reading time + tag system",
      "Light/dark theme",
    ],
  },
];

const statusMeta: Record<
  Status,
  { label: string; className: string; icon: typeof Lock }
> = {
  live: {
    label: "Live Demo",
    className: "bg-secondary/15 text-secondary border-secondary/30",
    icon: ExternalLink,
  },
  source: {
    label: "Source Available",
    className: "bg-primary/10 text-primary border-primary/25",
    icon: FileText,
  },
  private: {
    label: "Private Deployment",
    className: "bg-foreground/5 text-foreground/70 border-foreground/15",
    icon: Lock,
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title={<>Selected <span className="font-display italic">work</span></>}
          description="A mix of client, academic, and personal projects. Some live on the web, others live behind closed doors — each one taught me something."
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

                {/* header: status + year */}
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-medium ${meta.className}`}
                  >
                    <StatusIcon className="h-3.5 w-3.5" />
                    {meta.label}
                  </span>
                  <span className="text-muted-foreground">{p.year}</span>
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
                      Source
                    </a>
                  ) : null}
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
                    >
                      Visit live
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-xs font-semibold text-foreground/80 hover:bg-foreground/10 transition-colors"
                    >
                      Request a walkthrough
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Want a deeper look at a project that isn't deployed?{" "}
          <a href="#contact" className="text-primary font-medium hover:underline">
            Ask for a private demo
          </a>
          .
        </p>
      </div>
    </section>
  );
}
