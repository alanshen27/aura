export interface NewsletterIssue {
  number: number;
  title: string;
  summary: string;
  keyIdeas: string[];
  glossary: { term: string; definition: string }[];
  tryThis: string;
  linkedModules: { title: string; slug: string }[];
}

export const newsletterIssues: NewsletterIssue[] = [
  {
    number: 1,
    title: "3-minute SynBio: What is synthetic biology?",
    summary:
      "Synthetic biology is about designing living organisms to do new things — like programming, but for cells.",
    keyIdeas: [
      "Synbio combines biology, engineering, and computer science to redesign living systems.",
      "Scientists follow a design-build-test-learn cycle, similar to software development.",
      "One early success: engineering yeast to produce a malaria drug that saves millions of lives.",
    ],
    glossary: [
      {
        term: "Synthetic biology",
        definition: "Designing and building new biological parts, devices, and systems.",
      },
      {
        term: "Genetic circuit",
        definition: "A set of biological parts designed to perform a logical function inside a cell.",
      },
    ],
    tryThis:
      "Can you name one product you use daily that might involve engineered microorganisms? (Hint: check your laundry detergent.)",
    linkedModules: [
      { title: "Intro to Synthetic Biology", slug: "intro-to-synbio" },
    ],
  },
  {
    number: 2,
    title: "3-minute SynBio: DNA stores instructions",
    summary:
      "Every living thing carries a recipe book written in just four letters: A, T, C, and G.",
    keyIdeas: [
      "DNA is a long molecule made of four chemical bases — the order of these bases spells out instructions.",
      "The flow from DNA → mRNA → protein is called the central dogma of molecular biology.",
      "The human genome has about 3 billion base pairs, but only 1–2% directly codes for proteins.",
    ],
    glossary: [
      {
        term: "Nucleotide",
        definition: "The basic building block of DNA — a base, a sugar, and a phosphate.",
      },
      {
        term: "Central dogma",
        definition: "The information flow: DNA → mRNA → protein.",
      },
      {
        term: "Codon",
        definition: "A three-letter DNA/mRNA sequence coding for one amino acid.",
      },
    ],
    tryThis:
      "If DNA is a recipe book and genes are individual recipes, what would a chromosome be? (Think library shelf.)",
    linkedModules: [
      { title: "How Does DNA Store Information?", slug: "how-does-dna-store-information" },
    ],
  },
  {
    number: 3,
    title: "3-minute SynBio: Proteins do the work",
    summary:
      "Proteins are the molecular machines that carry out nearly every process in your body.",
    keyIdeas: [
      "Proteins are chains of amino acids that fold into specific 3D shapes — shape determines function.",
      "Enzymes are proteins that speed up chemical reactions without being consumed.",
      "In synbio, proteins are both the tools and the products — from insulin to spider silk.",
    ],
    glossary: [
      {
        term: "Amino acid",
        definition: "One of 20 small molecules that link together to form proteins.",
      },
      {
        term: "Protein folding",
        definition: "The process by which an amino acid chain takes its functional 3D shape.",
      },
    ],
    tryThis:
      "Insulin is a protein with only 51 amino acids. Does that make it less important than a protein with 1,000? Why or why not?",
    linkedModules: [
      { title: "What Are Proteins?", slug: "what-are-proteins" },
    ],
  },
  {
    number: 4,
    title: "3-minute SynBio: Gene expression — reading DNA",
    summary:
      "Every cell has the same DNA, but different genes are turned on in different cells. That is gene expression.",
    keyIdeas: [
      "Promoters are like play buttons — they tell the cell where to start reading a gene.",
      "Repressors block transcription, activators promote it. Cells use these to respond to their environment.",
      "The lac operon in E. coli is a classic example: genes for digesting lactose turn on only when lactose is present.",
    ],
    glossary: [
      {
        term: "Promoter",
        definition: "A DNA region that signals where transcription should begin.",
      },
      {
        term: "Repressor",
        definition: "A protein that blocks a promoter, turning a gene off.",
      },
    ],
    tryThis:
      "Your skin cells and brain cells have the same DNA. What is different about them?",
    linkedModules: [
      { title: "What Is Gene Expression?", slug: "what-is-gene-expression" },
    ],
  },
  {
    number: 5,
    title: "3-minute SynBio: Bacteria basics",
    summary:
      "Bacteria are tiny, fast-growing, single-celled organisms — and the workhorses of synbio labs.",
    keyIdeas: [
      "E. coli can divide every 20 minutes — one cell becomes a billion in about 10 hours.",
      "Lab strains of E. coli are safe and domesticated — they cannot survive outside the lab.",
      "Scientists insert new instructions into bacteria using plasmids and a process called transformation.",
    ],
    glossary: [
      {
        term: "Binary fission",
        definition: "How bacteria reproduce — the cell copies its DNA and splits in two.",
      },
      {
        term: "Chassis",
        definition: "The host organism that carries an engineered genetic system.",
      },
    ],
    tryThis:
      "If one E. coli divides every 20 minutes, how many cells would you have after 3 hours? (Start with 1.)",
    linkedModules: [
      { title: "What Are Bacteria?", slug: "what-are-bacteria" },
    ],
  },
  {
    number: 6,
    title: "3-minute SynBio: Plasmids — bonus DNA rings",
    summary:
      "Plasmids are small, portable loops of DNA. Scientists use them to deliver new instructions into cells.",
    keyIdeas: [
      "Plasmids replicate independently inside bacteria — they are like USB drives carrying extra instructions.",
      "Key parts: origin of replication (copy me), selectable marker (track me), gene of interest (do this).",
      "The iGEM Registry has thousands of standardized parts that can be inserted into plasmids.",
    ],
    glossary: [
      {
        term: "Plasmid",
        definition: "A small, circular piece of DNA that replicates independently in a cell.",
      },
      {
        term: "Selectable marker",
        definition: "A gene that lets scientists identify which cells received the plasmid.",
      },
      {
        term: "iGEM Registry",
        definition: "A public database of standardized biological parts used in synbio.",
      },
    ],
    tryThis:
      "If you were designing a plasmid, what gene would you put on it? What would you want the cell to do?",
    linkedModules: [
      { title: "What Are Plasmids?", slug: "what-are-plasmids" },
    ],
  },
];
