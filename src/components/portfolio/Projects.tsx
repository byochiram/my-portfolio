import { SectionHeading } from "./SectionHeading";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Linear-style SaaS Landing",
    description:
      "A modern landing page for a SaaS product with smooth scroll animations, responsive layout, and a clean component system.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Analytics Dashboard UI",
    description:
      "A polished dashboard with charts, filters and a dark/light theme — built with reusable, accessible React components.",
    tech: ["React", "TypeScript", "Tailwind", "Recharts"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "E-commerce Storefront",
    description:
      "A mobile-first storefront with cart, product detail pages, and seamless checkout flow — optimized for performance.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Personal Blog Platform",
    description:
      "A minimal MDX-powered blog with reading time, syntax highlighting, and a smooth, content-first reading experience.",
    tech: ["Next.js", "MDX", "Tailwind", "Vercel"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A handful of projects I've built — focused on UI craft, performance, and developer experience."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
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
                  <li key={t} className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
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