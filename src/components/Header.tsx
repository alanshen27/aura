import Link from "next/link";

const navLinks = [
  { href: "/learn", label: "Learn", primary: true },
  { href: "/explore", label: "Explore" },
  { href: "/project", label: "Our Project" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg tracking-tight text-foreground transition-colors hover:text-accent"
        >
          IDKAASynBio
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                link.primary
                  ? "bg-accent text-white hover:bg-accent-dark"
                  : "text-muted hover:bg-surface-alt hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
