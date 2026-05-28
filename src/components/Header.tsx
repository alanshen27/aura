"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-xs font-medium tracking-wide transition-all ${
          open
            ? "bg-white/10 text-white"
            : "text-white/60 hover:bg-white/5 hover:text-white/90"
        }`}
        aria-expanded={open}
      >
        {item.label}
        <svg
          width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`ml-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 min-w-[180px] rounded-xl border border-white/10 bg-charcoal/95 p-2 shadow-2xl backdrop-blur-md">
          {item.items.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3.5 py-2.5 text-xs font-medium text-white/60 transition-all hover:bg-accent/20 hover:text-white"
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
    <header className="sticky top-0 z-40 border-b border-white/5 bg-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-medium tracking-widest text-white/90 transition-colors hover:text-accent"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent to-pop-purple">
            <span className="text-xs font-bold text-white">id</span>
          </div>
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
                className="rounded-full px-3.5 py-2 text-xs font-medium tracking-wide text-white/60 transition-all hover:bg-white/5 hover:text-white/90"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
        <div className="border-t border-white/5 bg-charcoal/95 px-6 py-4 backdrop-blur-md md:hidden">
          {navItems.map((item, i) =>
            isDropdown(item) ? (
              <div key={i} className="mb-4">
                <p className="mb-2 text-xs uppercase tracking-wider text-white/30">{item.label}</p>
                {item.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block py-2 text-sm text-white/60 transition-colors hover:text-accent"
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
                className="block py-2 text-sm text-white/60 transition-colors hover:text-accent"
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
