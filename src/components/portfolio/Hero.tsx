import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24"
    >
      {/* organic blobs */}
      <div aria-hidden className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl animate-float" />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-secondary/25 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      {/* subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-card animate-fade-in">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Open for new opportunities · Indonesia
        </p>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight animate-fade-up">
          Hi, I'm{" "}
          <span className="font-display italic text-gradient">Rosidah</span>
          <br className="hidden sm:block" /> I build things for the web.
        </h1>

        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          A web developer who blends thoughtful design with reliable code —
          turning ideas into delightful, end-to-end digital products.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold shadow-card hover:border-primary hover:text-primary transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-5 text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a href="https://github.com/byochiram" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:rosidah.rahmati@example.com" className="hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
