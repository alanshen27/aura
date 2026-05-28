import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedClipart from "@/components/illustrations/AnimatedClipart";

export default function Home() {
  return (
    <div>
      {/* ─── HERO: Playful Geometric ─── */}
      <section className="relative overflow-hidden bg-background py-24 sm:py-32">
        <AnimatedClipart variant="light" density="dense" />

        {/* Large decorative shapes */}
        <div className="absolute top-10 right-[10%] h-48 w-48 rounded-full border-2 border-foreground/10 bg-tertiary/20 animate-float" aria-hidden="true" />
        <div className="absolute bottom-16 left-[5%] h-32 w-32 rounded-2xl border-2 border-foreground/10 bg-secondary/15 rotate-12 animate-pulse-grow" aria-hidden="true" />
        <div className="absolute top-1/3 left-[60%] h-20 w-20 rounded-full border-2 border-foreground/10 bg-quaternary/20 animate-float stagger-3" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-tertiary/30 px-4 py-1.5 shadow-hard-sm animate-pop-in">
                <span className="h-2 w-2 rounded-full bg-quaternary animate-pulse-grow" />
                <span className="text-xs font-bold uppercase tracking-wide">iGEM 2025</span>
              </div>

              <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl animate-bounce-in">
                wait, what even{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">is</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 bg-tertiary/50 -rotate-1" aria-hidden="true" />
                </span>
                <br />
                <span className="text-accent">synthetic</span>{" "}
                <span className="text-secondary">biology</span>?
              </h1>

              <p className="mb-8 max-w-md text-lg text-muted-foreground leading-relaxed animate-bounce-in stagger-2">
                we break it down into short, friendly modules.
                no textbook energy. no prereqs.
                just you and some cool science.
              </p>

              <div className="flex flex-wrap items-center gap-4 animate-bounce-in stagger-3">
                <Link href="/learn" className="btn-candy">
                  start learning
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
                <Link href="/project" className="btn-secondary">
                  our iGEM project
                </Link>
              </div>
            </div>

            {/* Right: Decorative sticker cards */}
            <div className="relative hidden lg:block">
              <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl border-2 border-dashed border-foreground/20" aria-hidden="true" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="card-sticker p-5 animate-pop-in stagger-1">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-foreground bg-accent/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <p className="text-sm font-bold">5-min modules</p>
                  <p className="text-xs text-muted-foreground">bite-sized science</p>
                </div>

                <div className="card-sticker p-5 translate-y-6 animate-pop-in stagger-2">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-foreground bg-secondary/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
                    </svg>
                  </div>
                  <p className="text-sm font-bold">no jargon</p>
                  <p className="text-xs text-muted-foreground">real analogies</p>
                </div>

                <div className="card-sticker p-5 animate-pop-in stagger-3">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-foreground bg-tertiary/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tertiary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
                    </svg>
                  </div>
                  <p className="text-sm font-bold">by students</p>
                  <p className="text-xs text-muted-foreground">for students</p>
                </div>

                <div className="card-sticker p-5 translate-y-6 animate-pop-in stagger-4">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-foreground bg-quaternary/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--quaternary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <p className="text-sm font-bold">10 modules</p>
                  <p className="text-xs text-muted-foreground">zero prereqs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS THIS: Explainer section ─── */}
      <section className="relative overflow-hidden border-t-2 border-dashed border-border py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full border-2 border-foreground bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-accent shadow-hard-sm">
                for the curious
              </span>
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                synbio is like{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent">coding</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/20 -rotate-1" aria-hidden="true" />
                </span>,
                <br />
                but for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-quaternary">living cells</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 bg-quaternary/20 rotate-1" aria-hidden="true" />
                </span>.
              </h2>
              <p className="mx-auto max-w-lg text-base text-muted-foreground leading-relaxed">
                scientists design DNA instructions, put them into tiny organisms,
                and those organisms do new things — make medicine, sense pollution,
                even glow in the dark.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "5-minute modules", desc: "each topic is one coffee break. short paragraphs, zero filler, real-world examples.", color: "accent", icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5" },
              { title: "no textbook vibes", desc: "we explain with analogies. CRISPR is find-and-replace for DNA. plasmids are USB drives for bacteria.", color: "secondary", icon: "M4 19.5A2.5 2.5 0 016.5 17H20 M4 19.5V4.5A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z" },
              { title: "built by students", desc: "this started as an iGEM project. we wanted to make synbio accessible — not gatekept.", color: "tertiary", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-sticker p-8 h-full">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-foreground bg-${card.color}/10 shadow-hard-sm`}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={`var(--${card.color})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={card.icon} />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROJECT: Stats section ─── */}
      <section className="relative overflow-hidden border-t-2 border-foreground bg-accent py-24">
        <AnimatedClipart variant="dark" density="normal" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full border-2 border-white/30 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                our iGEM project
              </span>
              <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
                fighting mastitis in dairy cattle
              </h2>
              <p className="mx-auto max-w-lg text-base text-white/70">
                one-third of dairy cows get mastitis. it costs the industry
                €30 billion a year. we are building a better way to detect it.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { value: "€30B", label: "annual industry losses", shadow: "shadow-hard-tertiary" },
              { value: "1 in 3", label: "cows affected in lifetime", shadow: "shadow-hard-secondary" },
              { value: "47–65%", label: "annual infection rate", shadow: "shadow-hard-quaternary" },
              { value: "<15%", label: "costs from treatment alone", shadow: "shadow-hard-accent" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`rounded-2xl border-2 border-white/30 bg-white p-6 text-center ${stat.shadow} transition-all hover:-translate-y-1 hover:rotate-1`}>
                  <p className="mb-1 text-3xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-10 text-center">
              <Link
                href="/project"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-white hover:text-accent hover:shadow-hard-lg hover:-translate-y-1"
              >
                read the full project description →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── BIG NUMBERS: Why it matters ─── */}
      <section className="relative overflow-hidden py-24">
        <AnimatedClipart variant="light" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full border-2 border-foreground bg-quaternary/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-quaternary shadow-hard-sm">
                the bigger picture
              </span>
              <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
                why does this stuff matter?
              </h2>
              <p className="text-base text-muted-foreground">
                spoiler: it is already all around you
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { value: "$45B", label: "global synbio market by 2026", color: "accent" },
              { value: "400M+", label: "people use engineered insulin daily", color: "quaternary" },
              { value: "6,000+", label: "iGEM teams worldwide since 2003", color: "secondary" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-sticker p-8 text-center">
                  <p className={`mb-2 text-4xl font-extrabold text-${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULES: Grid ─── */}
      <section className="relative overflow-hidden border-t-2 border-dashed border-border py-24">
        <AnimatedClipart variant="light" density="normal" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-4 inline-block rounded-full border-2 border-foreground bg-secondary/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-secondary shadow-hard-sm">
                the beginner track
              </span>
              <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
                10 modules. zero prerequisites.
              </h2>
              <p className="mx-auto max-w-lg text-base text-muted-foreground">
                start with &ldquo;what even is synbio&rdquo; and end with
                &ldquo;how do we make sure this is safe.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { n: "01", title: "Intro to Synthetic Biology", color: "accent", slug: "intro-to-synbio" },
              { n: "02", title: "How Does DNA Store Information?", color: "secondary", slug: "how-does-dna-store-information" },
              { n: "03", title: "What Are Proteins?", color: "tertiary", slug: "what-are-proteins" },
              { n: "04", title: "What Is Gene Expression?", color: "quaternary", slug: "what-is-gene-expression" },
              { n: "05", title: "What Are Bacteria?", color: "accent", slug: "what-are-bacteria" },
              { n: "06", title: "What Are Plasmids?", color: "secondary", slug: "what-are-plasmids" },
              { n: "07", title: "How Do Scientists Modify Organisms?", color: "tertiary", slug: "how-do-scientists-modify-organisms" },
              { n: "08", title: "What Is CRISPR?", color: "quaternary", slug: "what-is-crispr" },
              { n: "09", title: "Synthetic Biology in Everyday Life", color: "accent", slug: "synbio-in-everyday-life" },
              { n: "10", title: "Ethics and Safety in Synthetic Biology", color: "secondary", slug: "ethics-and-safety" },
            ].map((mod, i) => (
              <ScrollReveal key={mod.n} delay={i * 40}>
                <Link
                  href={`/learn/beginner/${mod.slug}`}
                  className={`group flex items-center gap-4 rounded-2xl border-2 border-foreground bg-card p-5 shadow-hard-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard hover:bg-${mod.color}/5`}
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-foreground bg-${mod.color}/20 text-sm font-extrabold text-foreground shadow-hard-sm transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                    {mod.n}
                  </span>
                  <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{mod.title}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="ml-auto shrink-0 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER: CTA section ─── */}
      <section className="relative overflow-hidden border-t-2 border-foreground bg-tertiary py-24">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <ScrollReveal>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-foreground bg-white shadow-hard animate-float">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h2 className="mb-4 text-3xl font-extrabold text-foreground">
              too busy to read a whole module?
            </h2>
            <p className="mb-10 text-base text-foreground/70 leading-relaxed">
              we get it. subscribe and get one synbio idea explained in 3 minutes,
              straight to your inbox. no spam, pinky promise.
            </p>
          </ScrollReveal>
          <Newsletter source="home" compact />
        </div>
      </section>
    </div>
  );
}
