export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Rosidah Rahmati. Crafted with care.</p>
        <p>Designed & built with React, TypeScript & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
