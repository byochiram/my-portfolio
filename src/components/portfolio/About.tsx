import {
  Award,
  Clock3,
  FileText,
  GraduationCap,
  MapPin,
} from "lucide-react";

const facts = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Informatics, Diponegoro University",
    meta: "2022 — 2026",
  },
  {
    icon: Award,
    label: "GPA",
    value: "3.85 / 4.00",
  },
  {
    icon: Clock3,
    label: "Study Period",
    value: "3 years 6 months",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Batam, Indonesia",
  },
];

function AboutCta({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="/cv/rosidah-rahmati-cv.pdf"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
      >
        <FileText className="h-4 w-4" />
        View CV
      </a>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center py-10 md:py-12"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-12">
          {/* Photo */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-[260px] md:max-w-[310px]">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-primary/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-card">
                <img
                  src="/images/rosidah.png"
                  alt="Rosidah Rahmati"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
                />
              </div>

              {/* Desktop CTA: tampil di bawah foto */}
              <AboutCta className="mt-6 hidden justify-center md:flex" />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              About
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Beyond the{" "}
              <span className="font-display italic font-normal">headline</span>
            </h2>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Rosidah Rahmati
            </h3>

            <div className="mt-4 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground md:text-[17px]">
              <p>
                I graduated with a Bachelor’s degree in Informatics from
                Diponegoro University, completing my study in 3 years and 6
                months with a GPA of 3.85/4.00.
              </p>

              <p>
                Most of my hands-on experience comes from building web-based
                systems through academic projects, internship work, and thesis
                development. Those experiences shaped my understanding of
                application flow, database structure, and practical software
                development.
              </p>

              <p>
                I’m open to entry-level opportunities across the IT field,
                especially in software development, cloud technology, and data.
              </p>
            </div>

            {/* Compact facts */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {facts.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-4 py-3 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>

                      <p className="text-sm font-semibold leading-snug text-foreground">
                        {item.value}
                      </p>

                      {item.meta && (
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {item.meta}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile CTA: tetap di bawah konten */}
            <AboutCta className="mt-6 md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}