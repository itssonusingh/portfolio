import { profile } from "@/data/profile";

const links = [
  { href: "#simulations", label: "Simulations" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-base/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-ink">
          {profile.name}
        </a>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resumeFile}
          download
          className="rounded-sm border border-accent/60 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-base"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
