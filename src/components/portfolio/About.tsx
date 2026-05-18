import { SectionHeading } from "./SectionHeading";
import { Palette, Code2, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-stack mindset",
    text: "Comfortable across the stack — from polished UI in React & Blade to Laravel APIs and MySQL schemas.",
  },
  {
    icon: Palette,
    title: "Design-aware",
    text: "I care about typography, spacing, and motion. Interfaces should feel intentional, not assembled.",
  },
  {
    icon: Sparkles,
    title: "Ship & iterate",
    text: "I enjoy taking projects from idea to production — pragmatic decisions, real users, real feedback.",
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
              I'm Rosidah — a web developer based in Indonesia who loves
              building products end-to-end. My recent work focused on a
              real-world watch auction system, where I touched everything
              from auth and bidding logic to payment and shipping
              integrations.
            </p>
            <p>
              I'm happiest when I can blend craftsmanship with pragmatism:
              clean code that ships, interfaces that feel right, and
              features that actually solve a problem.
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
