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
        <p className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card/80 backdrop-blur px-4 py-1.5 text-[11px] sm:text-sm font-medium text-muted-foreground shadow-card animate-fade-in">
          <Sparkles className="h-4 w-4 text-primary shrink-0" />
          Informatics Fresh Graduate · Open to Work · Indonesia
        </p>

        <h1 className="mt-8 text-[clamp(2.5rem,10vw,4.75rem)] font-bold tracking-tight animate-fade-up">
          <span className="block sm:inline">Hi, I'm </span>
          <span className="inline-flex items-center whitespace-nowrap">
            <span className="font-display italic text-gradient">Rosidah</span>
            <span className="inline-block animate-wave origin-[70%_70%] ml-2 text-[0.85em]">
              👋
            </span>
          </span>
        </h1>

        <p
          className="mt-4 text-xl md:text-2xl font-semibold text-foreground animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Software, Cloud & Data Enthusiast
        </p>

        <p
          className="mt-5 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          I enjoy building practical software projects, learning cloud technologies, and exploring how data can support better digital solutions.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5"
          >
            See my projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/cv/CV_Rosidah Rahmati.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold shadow-card hover:border-primary hover:text-primary transition-colors"
          >
            View My CV
          </a>
        </div>

        <div
          className="mt-10 mb-12 md:mb-16 flex items-center justify-center gap-5 text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a href="https://github.com/byochiram" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="h-7 w-7" />
          </a>
          <a href="https://www.linkedin.com/in/rosidah-rahmati" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-7 w-7" />
          </a>
          <a href="mailto:rosidahrahmati1@gmail.com" className="hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
