import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";
import { DNAHelix, Flask, Cell, Plasmid, Protein, PetriDish, GeneCircuit } from "@/components/illustrations";
import FloatingBg from "@/components/illustrations/FloatingBg";
import AnimatedClipart from "@/components/illustrations/AnimatedClipart";

export default function Home() {
  return (
    <div>
      {/* ─── HERO: Extra fancy animated gradient ─── */}
      <section className="relative overflow-hidden animated-gradient-bg py-28 sm:py-40">
        <FloatingBg />
        <AnimatedClipart variant="dark" density="dense" />

        {/* Decorative glowing orbs */}
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-pop-blue/20 blur-[80px]" />
        <div className="absolute top-1/2 right-1/3 h-32 w-32 rounded-full bg-pop-green/15 blur-[60px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Animated bio illustration cluster */}
          <div className="mb-10 flex items-end justify-center gap-4 sm:gap-6">
            <DNAHelix size={56} className="animate-fade-in-up stagger-1 opacity-50" />
            <Flask size={72} className="animate-fade-in-up stagger-2 opacity-60" />
            <Cell size={88} className="animate-fade-in-up stagger-3 opacity-70 animate-bounce-subtle" />
            <Flask size={72} className="animate-fade-in-up stagger-4 opacity-60 hidden sm:block" />
            <Plasmid size={56} className="animate-fade-in-up stagger-5 opacity-50 hidden sm:block" />
          </div>

          {/* Big dramatic text */}
          <h1 className="mb-6 text-center text-5xl leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-in-up">
            wait, what even <em className="not-italic text-white/70">is</em>
            <br />
            <span className="gradient-text">synthetic biology</span>?
          </h1>

          <p className="mx-auto mb-4 max-w-lg text-center text-xl text-white/60 animate-fade-in-up stagger-2">
            glad you asked.
          </p>

          <p className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-white/35 animate-fade-in-up stagger-3">
            we break it down into short, friendly modules.
            no textbook energy. no prereqs.
            just you and some cool science.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up stagger-4">
            <Link
              href="/learn"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-pop-purple px-10 py-4 text-base font-medium tracking-wide text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 hover:gap-3 hover:scale-105"
            >
              start learning
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base text-white/60 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white hover:bg-white/5"
            >
              our iGEM project
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm text-white/40 transition-all hover:border-pop-green/30 hover:text-pop-green"
            >
              3-min email updates →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS THIS: Dark storytelling section ─── */}
      <section className="relative overflow-hidden section-dark py-24">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent font-medium">
                for the curious
              </p>
              <h2 className="mb-6 text-4xl tracking-tight text-white sm:text-5xl">
                synbio is like <span className="text-accent">coding</span>,
                <br />
                but for <span className="text-pop-green">living cells</span>.
              </h2>
              <p className="mx-auto max-w-lg text-base text-white/50 leading-relaxed">
                scientists design DNA instructions, put them into tiny organisms,
                and those organisms do new things — make medicine, sense pollution,
                even glow in the dark.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature cards on dark bg */}
          <div className="grid gap-6 sm:grid-cols-3">
            <ScrollReveal delay={0}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-accent/40 hover:-translate-y-2 hover:bg-white/10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-pop-purple shadow-lg shadow-accent/20">
                  <DNAHelix size={32} />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">5-minute modules</h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  each topic is one coffee break. short paragraphs, zero filler,
                  real-world examples that actually make sense.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-pop-blue/40 hover:-translate-y-2 hover:bg-white/10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pop-blue to-pop-green shadow-lg shadow-pop-blue/20">
                  <Flask size={32} />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">no textbook vibes</h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  we explain things with analogies, not jargon. CRISPR is
                  find-and-replace for DNA. plasmids are USB drives for bacteria.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-pop-green/40 hover:-translate-y-2 hover:bg-white/10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pop-green to-pop-yellow shadow-lg shadow-pop-green/20">
                  <GeneCircuit size={32} />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">built by students</h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  this started as an iGEM project. we wanted to make synbio
                  accessible — not gatekept behind university courses.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── OUR PROJECT: Mastitis detection teaser ─── */}
      <section className="relative overflow-hidden bg-charcoal py-24">
        <AnimatedClipart variant="dark" density="normal" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-pop-purple font-medium">
                our iGEM project
              </p>
              <h2 className="mb-4 text-3xl text-white sm:text-4xl">
                fighting mastitis in dairy cattle
              </h2>
              <p className="mx-auto max-w-lg text-base text-white/40">
                one-third of dairy cows get mastitis. it costs the industry
                €30 billion a year. we are building a better way to detect it.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-4">
            {[
              { value: "€30B", label: "annual industry losses", color: "text-accent" },
              { value: "1 in 3", label: "cows affected in lifetime", color: "text-pop-orange" },
              { value: "47–65%", label: "annual infection rate", color: "text-pop-yellow" },
              { value: "<15%", label: "costs from treatment alone", color: "text-pop-green" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1 hover:border-white/20">
                  <p className={`mb-2 text-3xl font-medium ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-10 text-center">
              <Link
                href="/project"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm text-white/60 transition-all hover:border-accent hover:text-white hover:bg-accent/10"
              >
                read the full project description →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── BIG NUMBERS: Dark section with animated clipart ─── */}
      <section className="relative overflow-hidden section-dark py-24">
        <AnimatedClipart variant="dark" density="sparse" />
        {/* Extra glowing orbs */}
        <div className="absolute top-1/4 left-1/3 h-48 w-48 rounded-full bg-pop-blue/10 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-pop-green/10 blur-[60px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-pop-blue font-medium">
                the bigger picture
              </p>
              <h2 className="mb-4 text-3xl text-white sm:text-4xl">
                why does this stuff matter?
              </h2>
              <p className="text-base text-white/35">
                spoiler: it is already all around you
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            <ScrollReveal delay={0}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-accent/40 hover:-translate-y-2 hover:bg-white/10">
                <Protein size={56} className="mx-auto mb-4 opacity-80" />
                <p className="mb-2 text-4xl font-medium text-accent">$45B</p>
                <p className="text-sm text-white/40">
                  global synbio market by 2026
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-pop-green/40 hover:-translate-y-2 hover:bg-white/10">
                <PetriDish size={56} className="mx-auto mb-4 opacity-80" />
                <p className="mb-2 text-4xl font-medium text-pop-green">400M+</p>
                <p className="text-sm text-white/40">
                  people use engineered insulin daily
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-pop-blue/40 hover:-translate-y-2 hover:bg-white/10">
                <Cell size={56} className="mx-auto mb-4 opacity-80" />
                <p className="mb-2 text-4xl font-medium text-pop-blue">6,000+</p>
                <p className="text-sm text-white/40">
                  iGEM teams worldwide since 2003
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL LEARN: Dark module grid ─── */}
      <section className="relative overflow-hidden bg-charcoal py-24">
        <AnimatedClipart variant="dark" density="normal" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent font-medium">
                the beginner track
              </p>
              <h2 className="mb-4 text-3xl text-white sm:text-4xl">
                10 modules. zero prerequisites.
              </h2>
              <p className="mx-auto max-w-lg text-base text-white/40">
                start with &ldquo;what even is synbio&rdquo; and end with
                &ldquo;how do we make sure this is safe.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { n: "01", title: "Intro to Synthetic Biology", color: "from-accent to-pop-purple", slug: "intro-to-synbio" },
              { n: "02", title: "How Does DNA Store Information?", color: "from-pop-blue to-pop-purple", slug: "how-does-dna-store-information" },
              { n: "03", title: "What Are Proteins?", color: "from-pop-green to-pop-blue", slug: "what-are-proteins" },
              { n: "04", title: "What Is Gene Expression?", color: "from-pop-yellow to-pop-orange", slug: "what-is-gene-expression" },
              { n: "05", title: "What Are Bacteria?", color: "from-pop-orange to-accent", slug: "what-are-bacteria" },
              { n: "06", title: "What Are Plasmids?", color: "from-pop-purple to-pop-blue", slug: "what-are-plasmids" },
              { n: "07", title: "How Do Scientists Modify Organisms?", color: "from-pop-green to-pop-yellow", slug: "how-do-scientists-modify-organisms" },
              { n: "08", title: "What Is CRISPR?", color: "from-accent to-pop-orange", slug: "what-is-crispr" },
              { n: "09", title: "Synthetic Biology in Everyday Life", color: "from-pop-blue to-pop-green", slug: "synbio-in-everyday-life" },
              { n: "10", title: "Ethics and Safety in Synthetic Biology", color: "from-pop-purple to-accent", slug: "ethics-and-safety" },
            ].map((mod, i) => (
              <ScrollReveal key={mod.n} delay={i * 40}>
                <Link
                  href={`/learn/beginner/${mod.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-accent/40 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-accent/5"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${mod.color} text-sm font-medium text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    {mod.n}
                  </span>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{mod.title}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="ml-auto shrink-0 text-white/20 transition-all group-hover:text-accent group-hover:translate-x-1"
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

      {/* ─── NEWSLETTER: Gradient section with clipart ─── */}
      <section className="relative overflow-hidden section-accent py-24">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <ScrollReveal>
            <Plasmid size={72} className="mx-auto mb-6 opacity-80 animate-bounce-subtle" />
            <h2 className="mb-4 text-3xl font-medium text-white">
              too busy to read a whole module?
            </h2>
            <p className="mb-10 text-base text-white/70 leading-relaxed">
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
