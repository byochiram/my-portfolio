export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center mb-14">
      <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}