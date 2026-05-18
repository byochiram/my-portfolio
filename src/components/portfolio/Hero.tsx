import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-secondary/15 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground shadow-card animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Available for new opportunities
        </p>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight animate-fade-up">
          Hi, I'm <span className="text-gradient">Naufal Zufar</span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Front-End Developer crafting clean, modern web experiences.
        </p>
        <p
          className="mt-4 text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          I design and build delightful interfaces with React, TypeScript, and Tailwind — focused on performance, accessibility, and detail.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-20px_oklch(0.55_0.22_277/0.5)]"
          >
            View Projects
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
          style={{ animationDelay: "0.6s" }}
        >
          <a href="https://github.com/naufalzufar" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/naufalzufar" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:naufal.zufar@example.com" className="hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}