import { SectionHeading } from "./SectionHeading";
import { Mail, Github, Linkedin } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "rosidahrahmati1@gmail.com", href: "mailto:rosidahrahmati1@gmail.com" },
  { icon: Github, label: "GitHub", value: "@byochiram", href: "https://github.com/byochiram" },
  { icon: Linkedin, label: "LinkedIn", value: "Rosidah Rahmati", href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* decorative blobs */}
      <div aria-hidden className="absolute -top-10 right-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div aria-hidden className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="font-display italic text-gradient">connect</span></>}
          description="Feel free to reach out — I'd love to hear about opportunities or just chat."
        />
        <div className="grid sm:grid-cols-3 gap-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative flex flex-col items-center gap-3 rounded-3xl border border-border bg-card/60 backdrop-blur px-5 py-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-foreground/80 transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary group-hover:scale-110">
                <c.icon className="h-5 w-5" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {c.label}
              </span>
              <span className="text-sm font-medium break-all">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
