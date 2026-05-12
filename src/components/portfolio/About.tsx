import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Code2, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Informatics Student",
    text: "Currently pursuing a Bachelor's in Informatics with a focus on software engineering and web technologies.",
  },
  {
    icon: Code2,
    title: "Web Developer",
    text: "I love turning ideas into accessible, performant web experiences using modern frontend and backend tools.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    text: "Driven by curiosity — I learn quickly, ask the right questions, and ship working solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A little about me" />
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm an Informatics undergraduate passionate about building
              software that solves real problems. My journey started with
              curiosity about how websites work — and quickly turned into a
              love for crafting clean, user-friendly interfaces backed by
              solid logic.
            </p>
            <p>
              I'm now sharpening my skills as a Junior Web Developer:
              writing maintainable code, learning from open source, and
              shipping projects that go beyond the classroom.
            </p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-1 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-2xl border border-border bg-gradient-card p-6 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{h.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {h.text}
                    </p>
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