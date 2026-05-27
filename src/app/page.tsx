import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";
import { DNAHelix, Flask, Cell, Plasmid, Protein, PetriDish, GeneCircuit } from "@/components/illustrations";
import FloatingBg from "@/components/illustrations/FloatingBg";

export default function Home() {
  return (
    <div>
      {/* ─── HERO: Full-bleed, dramatic, iGEM-wiki style ─── */}
      <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
        <FloatingBg />

        <div className="relative mx-auto max-w-3xl px-6">
          {/* Animated bio illustration cluster */}
          <div className="mb-8 flex items-end justify-center gap-3 sm:gap-5">
            <DNAHelix size={64} className="animate-fade-in-up stagger-1 opacity-60" />
            <Flask size={80} className="animate-fade-in-up stagger-2 opacity-70" />
            <Cell size={72} className="animate-fade-in-up stagger-3 opacity-60" />
            <Plasmid size={60} className="animate-fade-in-up stagger-4 opacity-50 hidden sm:block" />
          </div>

          {/* Big dramatic text — NOT corporate */}
          <h1 className="mb-6 text-center text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            wait, what even <em>is</em>
            <br />
            <span className="gradient-text">synthetic biology</span>?
          </h1>

          <p className="mx-auto mb-3 max-w-md text-center text-lg text-white/70 animate-fade-in-up stagger-2">
            glad you asked.
          </p>

          <p className="mx-auto mb-10 max-w-lg text-center text-sm leading-relaxed text-white/40 animate-fade-in-up stagger-3">
            we break it down into short, friendly modules.
            no textbook energy. no prereqs.
            just you and some cool science.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up stagger-4">
            <Link
              href="/learn"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm tracking-wide text-white transition-all hover:bg-accent-dark hover:gap-3 hover:shadow-lg hover:shadow-accent/20"
            >
              start learning
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm text-white/60 transition-all hover:border-white/40 hover:text-white"
            >
              3-min email updates
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS THIS: Storytelling section ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-accent">
                for the curious
              </p>
              <h2 className="mb-6 text-3xl tracking-tight text-foreground sm:text-4xl">
                synbio is like <span className="text-accent">coding</span>,
                <br />
                but for <span className="text-pop-green">living cells</span>.
              </h2>
              <p className="mx-auto max-w-md text-sm text-foreground/60 leading-relaxed">
                scientists design DNA instructions, put them into tiny organisms,
                and those organisms do new things — make medicine, sense pollution,
                even glow in the dark.
              </p>
            </div>
          </ScrollReveal>

          {/* Fun feature blocks — NOT a boring 3-column grid */}
          <div className="space-y-6">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-6 rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-charcoal">
                  <DNAHelix size={40} />
                </div>
                <div>
                  <h3 className="mb-1 text-base text-foreground">5-minute modules</h3>
                  <p className="text-sm text-foreground/55 leading-relaxed">
                    each topic is one coffee break. short paragraphs, zero filler,
                    real-world examples that actually make sense.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="flex items-center gap-6 rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <Flask size={40} />
                </div>
                <div>
                  <h3 className="mb-1 text-base text-foreground">no textbook vibes</h3>
                  <p className="text-sm text-foreground/55 leading-relaxed">
                    we explain things with analogies, not jargon. CRISPR is
                    find-and-replace for DNA. plasmids are USB drives for bacteria.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="flex items-center gap-6 rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-charcoal">
                  <GeneCircuit size={40} />
                </div>
                <div>
                  <h3 className="mb-1 text-base text-foreground">built by students, for everyone</h3>
                  <p className="text-sm text-foreground/55 leading-relaxed">
                    this started as an iGEM project. we wanted to make synbio
                    accessible — not gatekept behind university courses.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── BIG NUMBERS / FUN FACTS: iGEM-wiki style ─── */}
      <section className="section-dark py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-2xl text-white sm:text-3xl">
                why does this stuff matter?
              </h2>
              <p className="text-sm text-white/40">
                spoiler: it is already all around you
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            <ScrollReveal delay={0}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:bg-white/10 hover:-translate-y-1">
                <Protein size={48} className="mx-auto mb-3 opacity-70" />
                <p className="mb-1 text-3xl text-accent">$45B</p>
                <p className="text-xs text-white/50">
                  global synbio market by 2026
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:bg-white/10 hover:-translate-y-1">
                <PetriDish size={48} className="mx-auto mb-3 opacity-70" />
                <p className="mb-1 text-3xl text-pop-green">400M+</p>
                <p className="text-xs text-white/50">
                  people use engineered insulin daily
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:bg-white/10 hover:-translate-y-1">
                <Cell size={48} className="mx-auto mb-3 opacity-70" />
                <p className="mb-1 text-3xl text-pop-blue">6,000+</p>
                <p className="text-xs text-white/50">
                  iGEM teams worldwide since 2003
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL LEARN: Preview with fun illustrations ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm uppercase tracking-widest text-accent">
                the beginner track
              </p>
              <h2 className="mb-4 text-2xl text-foreground sm:text-3xl">
                10 modules. zero prerequisites.
              </h2>
              <p className="mx-auto max-w-md text-sm text-foreground/55">
                start with &ldquo;what even is synbio&rdquo; and end with
                &ldquo;how do we make sure this is safe.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Staggered module preview — alternating sides */}
          <div className="space-y-4">
            {[
              { n: "01", title: "Intro to Synthetic Biology", color: "bg-accent" },
              { n: "02", title: "How Does DNA Store Information?", color: "bg-pop-blue" },
              { n: "03", title: "What Are Proteins?", color: "bg-pop-green" },
              { n: "04", title: "What Is Gene Expression?", color: "bg-accent" },
              { n: "05", title: "What Are Bacteria?", color: "bg-pop-yellow" },
            ].map((mod, i) => (
              <ScrollReveal key={mod.n} direction={i % 2 === 0 ? "left" : "right"} delay={i * 60}>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/40 hover:-translate-y-0.5">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${mod.color} text-sm text-white`}>
                    {mod.n}
                  </span>
                  <span className="text-sm text-foreground">{mod.title}</span>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={300}>
              <Link
                href="/learn/beginner"
                className="group flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-accent/30 p-4 text-sm text-accent transition-all hover:border-accent hover:bg-accent-light/30"
              >
                + 5 more modules
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER: Fun, not corporate ─── */}
      <section className="section-accent py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <ScrollReveal>
            <Plasmid size={64} className="mx-auto mb-4 opacity-70" />
            <h2 className="mb-3 text-2xl text-white">
              too busy to read a whole module?
            </h2>
            <p className="mb-8 text-sm text-white/70">
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
