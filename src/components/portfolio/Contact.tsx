import { SectionHeading } from "./SectionHeading";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "naufal.zufar@example.com", href: "mailto:naufal.zufar@example.com" },
  { icon: Github, label: "GitHub", value: "github.com/naufalzufar", href: "https://github.com/naufalzufar" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/naufalzufar", href: "https://linkedin.com/in/naufalzufar" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Contact" title="Let's build something together" description="Open to front-end roles, freelance projects, and friendly conversations." />
        <div className="grid sm:grid-cols-3 gap-4">
          {channels.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <c.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{c.label}</p>
              <p className="mt-1 font-medium break-all">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}