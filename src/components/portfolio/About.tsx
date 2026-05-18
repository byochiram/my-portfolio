import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Code2, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Front-End Focused",
    text: "Specialized in React, Next.js, and TypeScript — building responsive interfaces with pixel-perfect detail.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    text: "Constantly exploring new tools, patterns, and best practices to write cleaner and more scalable code.",
  },
  {
    icon: Lightbulb,
    title: "Design-minded",
    text: "I care about UX, typography, motion, and the small details that make a product feel premium.",
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
              I'm Naufal — a Front-End Developer who enjoys turning complex
              ideas into simple, polished interfaces. I care deeply about
              clean code, smooth interactions, and experiences that feel
              effortless on every screen.
            </p>
            <p>
              I work with modern tools like React, Next.js, TypeScript and
              Tailwind CSS — collaborating closely with designers and
              backend teams to ship products that look great and perform
              even better.
            </p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-1 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
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