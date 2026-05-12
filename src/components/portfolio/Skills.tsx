import { SectionHeading } from "./SectionHeading";
import { Layout, Server, Database, Wrench } from "lucide-react";

const groups = [
  { icon: Layout, title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "Tailwind"] },
  { icon: Server, title: "Backend", skills: ["PHP", "Node.js", "Express", "REST APIs"] },
  { icon: Database, title: "Database", skills: ["MySQL", "SQL"] },
  { icon: Wrench, title: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" title="My technical toolkit" description="The tools and technologies I use to bring ideas to life." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="group rounded-2xl border border-border bg-gradient-card p-6 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li key={s} className="rounded-md bg-background/40 border border-border px-2.5 py-1 text-xs text-muted-foreground">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}