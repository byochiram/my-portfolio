export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Rosidah Rahmati · Fresh Graduate, Informatics.</p>
        <p>Open to opportunities · Available immediately.</p>
      </div>
    </footer>
  );
}
