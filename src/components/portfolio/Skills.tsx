import { SectionHeading } from "./SectionHeading";
import { Code2, Layout, Database, LineChart, Wrench } from "lucide-react";

const groups = [
  { icon: Code2, title: "Languages", skills: ["Python", "SQL", "JavaScript", "PHP", "Java"] },
  { icon: Layout, title: "Web & Frameworks", skills: ["Laravel", "React", "Tailwind CSS", "Blade", "HTML", "CSS"] },
  { icon: Database, title: "Database", skills: ["MySQL", "PostgreSQL"] },
  { icon: LineChart, title: "Data & ML", skills: ["Pandas", "NumPy", "scikit-learn"] },
  { icon: Wrench, title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title={<>What I've been <span className="font-display italic">learning</span></>}
          description="Tools and topics I picked up across coursework, internship, and personal practice."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
