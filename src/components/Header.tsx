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
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] border-2 ${
          open
            ? "border-foreground bg-tertiary text-foreground shadow-hard-sm"
            : "border-transparent text-foreground/70 hover:border-foreground hover:bg-tertiary hover:text-foreground hover:shadow-hard-sm"
        }`}
        aria-expanded={open}
      >
        {item.label}
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`ml-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[100] mt-2 min-w-[200px] rounded-2xl border-2 border-foreground bg-card p-2 shadow-hard">
          {item.items.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/70 transition-all hover:bg-accent/10 hover:text-accent hover:translate-x-1"
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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-foreground bg-accent shadow-hard-sm transition-all group-hover:shadow-hard group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">
            <span className="text-xs font-extrabold text-white font-heading">id</span>
          </div>
          <span className="text-sm font-bold tracking-wide text-foreground font-heading">
            idkaasynbio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) =>
            isDropdown(item) ? (
              <DropdownItem key={i} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border-2 border-transparent px-4 py-2 text-sm font-medium text-foreground/70 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-foreground hover:bg-quaternary hover:text-foreground hover:shadow-hard-sm"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground text-foreground transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-tertiary hover:shadow-hard-sm md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
        <div className="border-t-2 border-foreground bg-background px-6 py-4 md:hidden">
          {navItems.map((item, i) =>
            isDropdown(item) ? (
              <div key={i} className="mb-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                {item.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block rounded-lg py-2 pl-3 text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
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
                className="block py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
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
