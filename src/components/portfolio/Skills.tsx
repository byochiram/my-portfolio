import { SectionHeading } from "./SectionHeading";
import { Layout, Server, Database, Wrench } from "lucide-react";

const groups = [
  { icon: Layout, title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Blade"] },
  { icon: Server, title: "Backend", skills: ["Laravel", "PHP", "Node.js", "REST APIs", "Livewire"] },
  { icon: Database, title: "Database & Services", skills: ["MySQL", "Resend", "Duitku", "RajaOngkir"] },
  { icon: Wrench, title: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title={<>My <span className="font-display italic">toolkit</span></>}
          description="The technologies I reach for when shipping real projects."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li key={s} className="rounded-md bg-muted border border-border px-2.5 py-1 text-xs text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
