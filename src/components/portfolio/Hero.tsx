import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24"
    >
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Available for internships & junior roles
        </p>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight animate-fade-up">
          Hi, I'm <span className="text-gradient">Alex Pratama</span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Informatics Undergraduate · Junior Web Developer
        </p>
        <p
          className="mt-4 text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Building real-world solutions through code.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-5 text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}