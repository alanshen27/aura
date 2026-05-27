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
    <footer className="mt-auto border-t border-charcoal/10 bg-charcoal">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 grid gap-8 sm:grid-cols-4">
          <div>
            <p className="mb-2 text-sm text-white/70">idkaasynbio</p>
            <p className="text-xs text-white/30 leading-relaxed">
              synbio education, made by students.
              an iGEM project.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="mb-2 text-xs uppercase tracking-wider text-white/30">
                {group.title}
              </p>
              <div className="space-y-1">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-xs text-white/40 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 text-center text-xs text-white/20">
          built with curiosity, caffeine, and a lot of late nights.
        </div>
      </div>
    </footer>
  );
}
