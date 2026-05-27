import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-charcoal/10 bg-charcoal">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-white/70">idkaasynbio</p>
            <p className="text-xs text-white/30">
              synbio education, made by students.
            </p>
          </div>
          <div className="flex gap-4 text-xs text-white/40">
            <Link href="/learn" className="transition-colors hover:text-accent">learn</Link>
            <Link href="/newsletter" className="transition-colors hover:text-accent">newsletter</Link>
            <Link href="/explore" className="transition-colors hover:text-accent">explore</Link>
            <Link href="/project" className="transition-colors hover:text-accent">project</Link>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 text-center text-xs text-white/20">
          built with curiosity, caffeine, and a lot of late nights.
        </div>
      </div>
    </footer>
  );
}
