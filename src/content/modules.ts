export interface KeyTerm {
  term: string;
  definition: string;
  analogy?: string;
}

export interface Section {
  heading: string;
  body: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Module {
  slug: string;
  title: string;
  track: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  minutes: number;
  description: string;
  sections: Section[];
  keyTerms: KeyTerm[];
  quiz?: QuizQuestion[];
  comingSoon?: boolean;
}

export const modules: Module[] = [
  {
    slug: "intro-to-synbio",
    title: "Intro to Synthetic Biology",
    track: "beginner",
    level: "Beginner",
    minutes: 8,
    description:
      "What is synthetic biology, and why does it matter? A gentle starting point.",
    sections: [
      {
        heading: "What even is synthetic biology?",
        body: `Imagine you could write instructions for a living cell the same way you write code for a computer.

That is the basic idea behind synthetic biology (synbio for short). Scientists design new biological parts — or redesign existing ones — so that living organisms can do things they would not do naturally.

Think of it like remixing a recipe. The ingredients already exist in nature. Synbio is about combining them in new ways to get a different result.`,
      },
      {
        heading: "Why should you care?",
        body: `Synthetic biology is already shaping the world around you, even if you have never heard the term before.

It helps create medicines that are cheaper to produce. It makes materials that break down naturally instead of sitting in a landfill for centuries. It could even help grow food in places where farming is difficult.

The field sits at the intersection of biology, engineering, and computer science. If any of those interest you, synbio has a seat for you.`,
      },
      {
        heading: "A quick history (very quick)",
        body: `The term "synthetic biology" started gaining traction in the early 2000s. But the foundations go back further.

In the 1970s, scientists figured out how to cut and paste DNA. In the 1990s, the Human Genome Project mapped all of human DNA. By the 2000s, researchers began building biological circuits from scratch.

Today, synbio is one of the fastest-growing fields in science. And it is only getting more accessible.`,
      },
      {
        heading: "How is it different from genetic engineering?",
        body: `Genetic engineering usually means making small tweaks to an organism — like changing a single gene.

Synthetic biology thinks bigger. It is about designing entire systems. Instead of editing one sentence in a book, synbio might write a whole new chapter.

Both use similar tools, but the mindset is different. Synbio borrows ideas from engineering — things like standardized parts, modularity, and predictable behavior.`,
      },
      {
        heading: "What will you learn next?",
        body: `In the upcoming modules, you will build a foundation step by step.

You will learn about DNA, proteins, and plasmids — the basic toolkit of synbio. Each topic builds on the last, but every module is designed to stand on its own too.

No rush. Go at your own pace.`,
      },
    ],
    keyTerms: [
      {
        term: "Synthetic biology",
        definition:
          "A field that designs and builds new biological parts, devices, and systems.",
        analogy: "Like programming, but for living cells.",
      },
      {
        term: "Genetic engineering",
        definition:
          "Directly manipulating an organism's genes using technology.",
        analogy: "Like editing a sentence in a book.",
      },
      {
        term: "Biological circuit",
        definition:
          "A set of biological parts designed to perform a logical function inside a cell.",
        analogy: "Like an electronic circuit, but made of DNA and proteins.",
      },
    ],
    quiz: [
      {
        question: "What is the best analogy for synthetic biology?",
        options: [
          "Editing a single word in a book",
          "Writing a new chapter using existing language rules",
          "Reading a book without changing anything",
          "Translating a book to another language",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    slug: "what-are-proteins",
    title: "What Are Proteins?",
    track: "beginner",
    level: "Beginner",
    minutes: 7,
    description:
      "Proteins do almost everything in your cells. Here is what they are and why they matter.",
    sections: [
      {
        heading: "Proteins are the workers of the cell",
        body: `If a cell were a city, proteins would be the workers. They build structures, deliver messages, break down food, and defend against invaders.

Almost every process in your body depends on proteins. Your muscles move because of proteins. You digest food because of proteins. You fight off illness because of proteins.

They are not just one thing — they are thousands of different things, each shaped for a specific job.`,
      },
      {
        heading: "What are proteins made of?",
        body: `Proteins are made of smaller building blocks called amino acids. There are 20 different amino acids, and they link together like beads on a string.

The order of the beads determines what the protein looks like and what it does. Change the order, and you get a completely different protein.

Your DNA holds the instructions for which amino acids go in which order. This is how your genes code for proteins.`,
      },
      {
        heading: "Shape is everything",
        body: `Once a chain of amino acids is built, it folds up into a specific 3D shape. That shape is what gives the protein its function.

A protein that carries oxygen in your blood (hemoglobin) has a completely different shape from one that breaks down sugar (amylase).

If a protein folds incorrectly, it usually cannot do its job. Some diseases are caused by misfolded proteins.`,
      },
      {
        heading: "Why proteins matter in synbio",
        body: `In synthetic biology, proteins are both the tools and the products.

Scientists design cells that produce specific proteins — for example, insulin for diabetes treatment, or enzymes that break down plastic.

Understanding proteins means understanding the main output of biological engineering. When you design a genetic circuit, you are really designing which proteins get made, when, and how much.`,
      },
    ],
    keyTerms: [
      {
        term: "Protein",
        definition:
          "A large molecule made of amino acids that performs a specific function in a cell.",
        analogy: "Like a specialized tool in a workshop.",
      },
      {
        term: "Amino acid",
        definition: "A small molecule that serves as a building block for proteins.",
        analogy: "Like a single bead on a necklace.",
      },
      {
        term: "Protein folding",
        definition:
          "The process by which a chain of amino acids takes on its 3D shape.",
        analogy:
          "Like origami — the flat paper (chain) folds into a specific shape that gives it purpose.",
      },
    ],
    quiz: [
      {
        question: "What determines a protein's function?",
        options: [
          "Its color",
          "Its 3D shape",
          "How big it is",
          "Where it is in the cell",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    slug: "what-are-plasmids",
    title: "What Are Plasmids?",
    track: "beginner",
    level: "Beginner",
    minutes: 6,
    description:
      "Plasmids are tiny rings of DNA that scientists use to reprogram cells.",
    sections: [
      {
        heading: "DNA, but make it portable",
        body: `Most of a cell's DNA is stored in one big bundle (in bacteria, it is a single circular chromosome). But cells can also carry extra, smaller loops of DNA called plasmids.

Plasmids are separate from the main DNA. They replicate on their own and can be passed between cells. Think of them as USB drives for bacteria — small, portable, and carrying useful information.`,
      },
      {
        heading: "Why do plasmids exist in nature?",
        body: `In the wild, plasmids often carry genes that help bacteria survive. For example, a plasmid might carry a gene for antibiotic resistance.

When conditions get tough, bacteria that have the right plasmid survive while others do not. Bacteria can even share plasmids with each other, spreading useful genes through a population.

This natural sharing is part of what makes plasmids so useful for scientists.`,
      },
      {
        heading: "Plasmids as a synbio tool",
        body: `In synthetic biology, plasmids are one of the most common tools. Scientists insert new genes into a plasmid, then put that plasmid into a cell.

The cell reads the new genes and follows the instructions — making a new protein, glowing green, sensing a chemical, or whatever the scientist designed.

This process is called transformation. The plasmid acts as a delivery vehicle for the new instructions.`,
      },
      {
        heading: "Parts of a plasmid",
        body: `A typical engineered plasmid has a few key parts.

An origin of replication tells the cell to copy the plasmid. A selectable marker (often an antibiotic resistance gene) lets scientists identify which cells took up the plasmid. And the gene of interest is the new instruction you want the cell to follow.

These parts can be mixed and matched. That modularity is a core principle of synbio.`,
      },
      {
        heading: "What is next?",
        body: `Now you know three foundational pieces: what synbio is, what proteins do, and how plasmids work.

These concepts come together when you start designing genetic circuits — which is what upcoming modules will cover.

Each new concept builds on what you already know. Take a break if you need one, and come back when you are ready.`,
      },
    ],
    keyTerms: [
      {
        term: "Plasmid",
        definition:
          "A small, circular piece of DNA that replicates independently in a cell.",
        analogy: "Like a USB drive that carries extra instructions.",
      },
      {
        term: "Transformation",
        definition:
          "The process of inserting a plasmid into a cell so the cell follows new instructions.",
        analogy: "Like installing a new app on a phone.",
      },
      {
        term: "Selectable marker",
        definition:
          "A gene on a plasmid that lets scientists identify which cells received the plasmid.",
        analogy:
          "Like a tracking number that confirms a package was delivered.",
      },
    ],
    quiz: [
      {
        question: "What is the best analogy for a plasmid?",
        options: [
          "A hard drive that stores all cell data",
          "A USB drive with portable instructions",
          "A printer that copies proteins",
          "A battery that powers the cell",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    slug: "dna-basics",
    title: "DNA Basics",
    track: "beginner",
    level: "Beginner",
    minutes: 7,
    description: "The molecule that stores the instructions for life.",
    comingSoon: true,
    sections: [],
    keyTerms: [],
  },
  {
    slug: "gene-expression",
    title: "Gene Expression",
    track: "beginner",
    level: "Beginner",
    minutes: 8,
    description: "How cells read DNA and turn it into proteins.",
    comingSoon: true,
    sections: [],
    keyTerms: [],
  },
  {
    slug: "genetic-circuits",
    title: "Genetic Circuits",
    track: "beginner",
    level: "Beginner",
    minutes: 9,
    description: "Building logic gates inside living cells.",
    comingSoon: true,
    sections: [],
    keyTerms: [],
  },
  {
    slug: "crispr-intro",
    title: "Intro to CRISPR",
    track: "beginner",
    level: "Beginner",
    minutes: 8,
    description: "The gene-editing tool that changed everything.",
    comingSoon: true,
    sections: [],
    keyTerms: [],
  },
  {
    slug: "biobricks",
    title: "BioBricks and Standards",
    track: "beginner",
    level: "Beginner",
    minutes: 6,
    description: "Standardized parts that make synbio modular.",
    comingSoon: true,
    sections: [],
    keyTerms: [],
  },
  {
    slug: "biosafety",
    title: "Biosafety and Ethics",
    track: "beginner",
    level: "Beginner",
    minutes: 7,
    description: "Why safety and ethics are built into synbio from day one.",
    comingSoon: true,
    sections: [],
    keyTerms: [],
  },
  {
    slug: "real-world-synbio",
    title: "Real-World Applications",
    track: "beginner",
    level: "Beginner",
    minutes: 9,
    description: "How synbio is already changing medicine, food, and materials.",
    comingSoon: true,
    sections: [],
    keyTerms: [],
  },
];

export function getModulesByTrack(track: string): Module[] {
  return modules.filter((m) => m.track === track);
}

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
