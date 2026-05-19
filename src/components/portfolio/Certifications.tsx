import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Alibaba Cloud Certified Associate",
    category: "Cloud Computing",
    issuer: "Alibaba Cloud",
    meta: "Valid until Nov 2026",
    link: "/certifications/alibaba-cloud-certified-associate.webp",
  },
  {
    title: "Next Generation ECS and OSS Technologies",
    category: "Apsara Conference 2021",
    issuer: "Alibaba Cloud",
    meta: "Valid until Nov 2026",
    link: "/certifications/apsara-conference-2021.webp",
  },
  {
    title: "Database Design",
    category: "Oracle Academy",
    issuer: "Oracle Academy",
    meta: "Course Certificate",
    link: "/certifications/oracle-database-design.webp",
  },
  {
    title: "Database Programming with SQL",
    category: "Oracle Academy",
    issuer: "Oracle Academy",
    meta: "Course Certificate",
    link: "/certifications/oracle-database-programming-sql.webp",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Certifications
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Learning{" "}
          <span className="font-display italic font-normal">highlights</span>
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {certifications.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.75rem] border border-border bg-card p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Award className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.category}
                  </p>

                  <h3 className="mt-2 font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.issuer} · {item.meta}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                    View Certificate
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}