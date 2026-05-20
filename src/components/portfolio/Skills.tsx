const skills = [
  "Laravel",
  "PHP",
  "MySQL",
  "JavaScript",
  "REST APIs",
  "Blade",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Postman",
  "Figma",
  "Oracle Cloud",
  "Nginx",
  "Python",
  "Pandas",
  "Scikit-learn",
  "Streamlit",
  "SQL",
  "Database Design",
  "API Integration",
  "Data Preprocessing",
  "Data Visualization",
  "TypeScript",
  "React",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/80">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Things I’ve{" "}
          <span className="font-display italic font-normal">worked with</span>
        </h2>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}