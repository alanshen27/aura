import Link from "next/link";

const navLinks = [
  { href: "/learn", label: "Learn", primary: true },
  { href: "/explore", label: "Explore" },
  { href: "/project", label: "Our Project" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-charcoal">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm tracking-widest uppercase text-white/90 transition-colors hover:text-accent"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect width="11" height="11" rx="1" fill="white" fillOpacity="0.9" />
            <rect x="13" width="11" height="11" rx="1" fill="white" fillOpacity="0.6" />
            <rect y="13" width="11" height="11" rx="1" fill="white" fillOpacity="0.6" />
            <rect x="13" y="13" width="11" height="11" rx="1" fill="currentColor" className="text-accent" />
          </svg>
          IDKAASynBio
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-1.5 text-xs tracking-wide uppercase transition-colors ${
                link.primary
                  ? "bg-accent text-white hover:bg-accent-dark"
                  : "text-white/50 hover:bg-charcoal-light hover:text-white/80"
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
