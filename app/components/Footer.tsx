"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-divider">
      <div className="container-content">
        <div className="flex justify-center md:justify-end">
          <p className="font-mono text-xs text-fg-muted">
            © {year} Seo Kyuwon · Last updated 2026-04-30
          </p>
        </div>
      </div>
    </footer>
  );
}
