export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-10 border-t border-border bg-background"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-600">
          <span className="font-900 text-foreground">Obiora Chukwumba</span>
          <span style={{ color: "var(--gold)" }}>, PhD</span>
        </p>
        <p className="text-center font-500">
          Media Scholar · Journalist · Film Policy Expert
        </p>
        <p className="font-500">© {year} · Abuja, Nigeria</p>
      </div>
    </footer>
  );
}
