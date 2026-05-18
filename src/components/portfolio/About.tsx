import { SectionHeading } from "./SectionHeading";
import { Database, Code2, LineChart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Building end-to-end web apps from coursework, internship, and thesis — mostly with Laravel, PHP, and JavaScript.",
  },
  {
    icon: Database,
    title: "Database Management",
    text: "Designing schemas, writing SQL, and keeping data clean — comfortable with MySQL and PostgreSQL.",
  },
  {
    icon: LineChart,
    title: "Data Science & Programming",
    text: "Learning data analysis and ML basics with Python — Pandas, NumPy, and scikit-learn.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title={<>A little about <span className="font-display italic">me</span></>} />
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Rosidah — a fresh Informatics graduate based in Indonesia.
              Throughout my studies I worked on a mix of projects: course
              assignments, a team PPL project, an internship build, and my
              undergraduate thesis on a watch auction system.
            </p>
            <p>
              I'm now looking for my first role where I can keep learning
              while contributing — especially around software development,
              databases, and data.
            </p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-1 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{h.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{h.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
