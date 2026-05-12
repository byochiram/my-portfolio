import { SectionHeading } from "./SectionHeading";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Library Management System",
    description:
      "A web app to manage books, members and borrowing flows with role-based authentication and full CRUD.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com",
    demo: "",
  },
  {
    title: "Task Management App",
    description:
      "A lightweight to-do app with drag & drop, filters and persistent state using local storage — no backend required.",
    tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Company Profile Website",
    description:
      "A fully responsive marketing site for a local business, built mobile-first with smooth scroll animations.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Data Analysis Project",
    description:
      "Exploratory analysis of public datasets with cleaning, statistics and clear interactive visualizations.",
    tech: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com",
    demo: "",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of academic and personal projects that taught me how to ship."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label={`${p.title} GitHub`}>
                    <Github className="h-5 w-5" />
                  </a>
                  {p.demo ? (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label={`${p.title} live demo`}>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  ) : null}
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}