import { SectionHeading } from "./SectionHeading";
import { Mail, Github, Linkedin } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", href: "mailto:rosidahrahmati1@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/byochiram" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="font-display italic">connect</span></>}
          description="Feel free to reach out — I'd love to hear about opportunities or just chat."
        />
        <a
          href="mailto:rosidahrahmati1@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
        >
          <Mail className="h-4 w-4" />
          rosidahrahmati1@gmail.com
        </a>
        <div className="mt-8 flex items-center justify-center gap-5 text-muted-foreground">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={c.label}
              className="hover:text-foreground transition-colors"
            >
              <c.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
