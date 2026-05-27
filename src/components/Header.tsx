"use client";

import Link from "next/link";
import { useState } from "react";

interface NavDropdown {
  label: string;
  items: { href: string; label: string }[];
}

interface NavLink {
  href: string;
  label: string;
}

type NavItem = NavLink | NavDropdown;

function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item;
}

const navItems: NavItem[] = [
  {
    label: "project",
    items: [
      { href: "/project", label: "description" },
      { href: "/project/engineering", label: "engineering" },
      { href: "/project/safety", label: "safety" },
    ],
  },
  {
    label: "learn",
    items: [
      { href: "/learn", label: "learn hub" },
      { href: "/learn/beginner", label: "beginner track" },
      { href: "/newsletter", label: "newsletter" },
    ],
  },
  {
    label: "human practices",
    items: [
      { href: "/human-practices", label: "overview" },
      { href: "/education", label: "education" },
    ],
  },
  {
    label: "team",
    items: [
      { href: "/team", label: "members" },
      { href: "/attributions", label: "attributions" },
    ],
  },
  { href: "/notebook", label: "notebook" },
];

function DropdownItem({ item }: { item: NavDropdown }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs tracking-wide text-white/50 transition-all hover:bg-charcoal-light hover:text-white/80"
        aria-expanded={open}
      >
        {item.label}
        <svg
          width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[160px] rounded-xl border border-white/10 bg-charcoal p-1.5 shadow-xl">
          {item.items.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className="block rounded-lg px-3 py-2 text-xs text-white/60 transition-all hover:bg-white/10 hover:text-white"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-charcoal">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm tracking-widest text-white/90 transition-colors hover:text-accent"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect width="11" height="11" rx="2" fill="white" fillOpacity="0.9" />
            <rect x="13" width="11" height="11" rx="2" fill="white" fillOpacity="0.6" />
            <rect y="13" width="11" height="11" rx="2" fill="white" fillOpacity="0.6" />
            <rect x="13" y="13" width="11" height="11" rx="2" fill="currentColor" className="text-accent" />
          </svg>
          idkaasynbio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item, i) =>
            isDropdown(item) ? (
              <DropdownItem key={i} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-xs tracking-wide text-white/50 transition-all hover:bg-charcoal-light hover:text-white/80"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-charcoal-light hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-charcoal px-6 py-4 md:hidden">
          {navItems.map((item, i) =>
            isDropdown(item) ? (
              <div key={i} className="mb-3">
                <p className="mb-1.5 text-xs uppercase tracking-wider text-white/30">{item.label}</p>
                {item.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block py-1.5 text-sm text-white/60 transition-colors hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1.5 text-sm text-white/60 transition-colors hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
