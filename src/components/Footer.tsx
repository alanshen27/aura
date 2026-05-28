import Link from "next/link";

const footerLinks = [
  {
    title: "project",
    links: [
      { href: "/project", label: "description" },
      { href: "/project/engineering", label: "engineering" },
      { href: "/project/safety", label: "safety" },
    ],
  },
  {
    title: "learn",
    links: [
      { href: "/learn", label: "learn hub" },
      { href: "/learn/beginner", label: "beginner track" },
      { href: "/newsletter", label: "newsletter" },
    ],
  },
  {
    title: "team",
    links: [
      { href: "/team", label: "members" },
      { href: "/attributions", label: "attributions" },
      { href: "/notebook", label: "notebook" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-foreground bg-card">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 grid gap-8 sm:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-foreground bg-accent shadow-hard-sm">
                <span className="text-xs font-extrabold text-white">id</span>
              </div>
              <span className="text-sm font-bold text-foreground">idkaasynbio</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              synbio education, made by students.
              an iGEM project.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                {group.title}
              </p>
              <div className="space-y-2">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-muted-foreground transition-all hover:text-accent hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-dashed border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            built with curiosity, caffeine, and a lot of late nights ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
