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
  promise: string;
  sections: Section[];
  keyTerms: KeyTerm[];
  quiz?: QuizQuestion[];
  comingSoon?: boolean;
}

export const modules: Module[] = [
  // ─── 1. Intro to SynBio ───
  {
    slug: "intro-to-synbio",
    title: "Intro to Synthetic Biology",
    track: "beginner",
    level: "Beginner",
    minutes: 8,
    description:
      "What is synthetic biology, and why does it matter? A gentle starting point.",
    promise: "By the end, you can explain what synthetic biology is and why people are excited about it.",
    sections: [
      {
        heading: "The big idea",
        body: `Imagine you could write instructions for a living cell the same way you write code for a computer.

That is the basic idea behind synthetic biology (synbio for short). Scientists design new biological parts — or redesign existing ones — so that living organisms can do things they would not do naturally.

Think of it like remixing a recipe. The ingredients already exist in nature. Synbio is about combining them in new ways to get a different result.

Synthetic biology sits at the intersection of biology, engineering, and computer science. If any of those interest you, synbio has a seat for you.`,
      },
      {
        heading: "The parts",
        body: `Synbio borrows language from engineering. Here are the building blocks:

DNA is the instruction manual. It tells cells what to make and when.

Genes are individual instructions inside the DNA. Each gene usually codes for one protein.

Proteins are the workers. They carry out the instructions — building, transporting, signaling, and more.

Plasmids are small, portable loops of DNA. Scientists use them to deliver new instructions into cells.

These four parts show up again and again in synbio. Each of the next modules will go deeper into one.`,
      },
      {
        heading: "How it works",
        body: `The basic workflow in synbio follows a cycle:

Design. Scientists use software to plan what they want a cell to do. They choose which genes and parts to use.

Build. They assemble the DNA — either by ordering it from a company or stitching it together in the lab.

Test. They put the DNA into a cell (often a bacterium) and check whether it does what they expected.

Learn. If it does not work perfectly, they go back and redesign. This cycle repeats.

This design-build-test-learn loop is the heartbeat of synbio. It is the same iterative process used in software engineering and product design.`,
      },
      {
        heading: "Example",
        body: `One of the earliest success stories of synbio is artemisinin.

Artemisinin is a life-saving malaria drug originally extracted from a plant called sweet wormwood. Growing the plant is slow and expensive. Millions of people who need the drug cannot afford it.

In 2003, researchers engineered yeast cells to produce artemisinin. They designed a genetic pathway inside yeast that mimics what the plant does — but faster, cheaper, and at scale.

Today, semi-synthetic artemisinin helps supply malaria treatment worldwide. It is one of the clearest examples of synbio saving lives.`,
      },
      {
        heading: "Common misunderstandings",
        body: `"Synbio is the same as genetic engineering."

Not quite. Genetic engineering usually means making a small tweak — like changing one gene. Synbio thinks bigger: designing entire systems from parts. Instead of editing one sentence in a book, synbio might write a whole new chapter.

"Synbio is only for scientists in labs."

The tools are becoming more accessible every year. Community labs, iGEM teams, and open-source biology organizations are bringing synbio to students, hobbyists, and entrepreneurs.

"Synbio is dangerous."

Any powerful technology needs careful oversight. Synbio includes built-in safety practices — like biosafety levels, kill switches, and ethical review. You will learn more about this in Module 10.`,
      },
      {
        heading: "What is next?",
        body: `In the next module, you will learn how DNA stores information — the foundation everything else is built on.

Each topic builds on the last, but every module is designed to stand on its own too. No rush. Go at your own pace.`,
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
      {
        term: "Design-build-test-learn",
        definition:
          "The iterative cycle used in synbio to create and refine biological systems.",
        analogy: "Like the engineering cycle: plan, prototype, test, improve.",
      },
      {
        term: "Artemisinin",
        definition:
          "A malaria drug that was engineered to be produced by yeast instead of plants.",
        analogy: "Like brewing medicine the way you brew beer.",
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
      {
        question: "What is the design-build-test-learn cycle?",
        options: [
          "A way to memorize biology terms",
          "The iterative process used to create biological systems",
          "A lab safety protocol",
          "A method for reading DNA sequences",
        ],
        correctIndex: 1,
      },
      {
        question: "How was artemisinin production improved using synbio?",
        options: [
          "By growing more sweet wormwood plants",
          "By engineering yeast to produce it",
          "By importing it from other countries",
          "By making a synthetic chemical version",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ─── 2. How Does DNA Store Information? ───
  {
    slug: "how-does-dna-store-information",
    title: "How Does DNA Store Information?",
    track: "beginner",
    level: "Beginner",
    minutes: 9,
    description:
      "DNA is the instruction manual for every living thing. Learn how four simple letters encode life.",
    promise: "By the end, you can explain how DNA stores and transmits genetic information.",
    sections: [
      {
        heading: "The big idea",
        body: `Every living thing — from bacteria to blue whales — carries a set of instructions written in the same language: DNA.

DNA stands for deoxyribonucleic acid. It is a long molecule found inside cells. Think of it as a recipe book that tells the cell what to build and when.

The remarkable thing is that this entire recipe book is written with just four chemical "letters": A (adenine), T (thymine), C (cytosine), and G (guanine).

The order of these letters spells out instructions. Change the order, and you change the instruction — just like rearranging letters in a word changes its meaning.`,
      },
      {
        heading: "The parts",
        body: `Nucleotide: a single unit of DNA. Each nucleotide contains one of the four bases (A, T, C, or G), a sugar, and a phosphate group.

Base pair: A always pairs with T, and C always pairs with G. These pairings hold the two strands of the double helix together.

Gene: a stretch of DNA that contains the instructions for making one protein (or sometimes a functional RNA).

Chromosome: a very long, organized piece of DNA. Humans have 23 pairs. Bacteria typically have one circular chromosome.

Genome: the entire collection of DNA in an organism. The human genome has about 3 billion base pairs.`,
      },
      {
        heading: "How it works",
        body: `DNA stores information through sequence. The order of A, T, C, and G along the strand encodes instructions.

When a cell needs to use an instruction, it copies a section of DNA into a messenger molecule called mRNA. This process is called transcription.

The mRNA travels to a ribosome, where it is read and translated into a protein. Every three letters (called a codon) correspond to one amino acid.

This flow — DNA to mRNA to protein — is called the central dogma of molecular biology. It is how information moves from storage to action.

When a cell divides, it copies its entire DNA so each daughter cell gets a complete set of instructions. This process is called replication.`,
      },
      {
        heading: "Example",
        body: `The Human Genome Project, completed in 2003, mapped all 3 billion base pairs of human DNA.

This was like reading an entire library written in a four-letter alphabet. It took 13 years and cost about 2.7 billion dollars.

Today, you can sequence your own genome for under $200 in about a day. That drop in cost and time is one of the driving forces behind modern synbio.

Knowing the genome lets scientists find which genes cause diseases, develop targeted treatments, and understand how organisms work at the deepest level.`,
      },
      {
        heading: "Common misunderstandings",
        body: `"DNA is only found in the nucleus."

In animal cells, most DNA is in the nucleus, but mitochondria have their own small DNA. Bacteria do not even have a nucleus — their DNA floats in the cytoplasm.

"All DNA codes for proteins."

Only about 1–2% of human DNA directly codes for proteins. The rest has regulatory, structural, or still-unknown functions. Scientists used to call it "junk DNA," but we now know much of it is important.

"A gene = a trait."

Most traits (like height, skin color, or disease risk) involve many genes plus environmental factors. Single-gene traits are the exception, not the rule.`,
      },
      {
        heading: "What is next?",
        body: `Now that you know how DNA stores information, the next module covers the workers that carry out those instructions: proteins.

Understanding both DNA and proteins is essential before diving into tools like plasmids and CRISPR.`,
      },
    ],
    keyTerms: [
      {
        term: "DNA",
        definition:
          "Deoxyribonucleic acid — the molecule that stores genetic instructions in all living things.",
        analogy: "Like a recipe book written in a four-letter alphabet.",
      },
      {
        term: "Nucleotide",
        definition: "The basic building block of DNA, consisting of a base, sugar, and phosphate.",
        analogy: "Like a single letter in a sentence.",
      },
      {
        term: "Base pair",
        definition: "A pair of complementary bases (A-T or C-G) that hold DNA strands together.",
        analogy: "Like two puzzle pieces that only fit each other.",
      },
      {
        term: "Gene",
        definition: "A section of DNA that codes for a protein or functional RNA.",
        analogy: "Like one recipe in a cookbook.",
      },
      {
        term: "Central dogma",
        definition: "The flow of information from DNA → mRNA → protein.",
        analogy: "Like blueprint → instructions → finished product.",
      },
      {
        term: "Codon",
        definition: "A three-letter sequence of DNA or mRNA that codes for one amino acid.",
        analogy: "Like a three-letter word in a coded message.",
      },
    ],
    quiz: [
      {
        question: "What are the four bases in DNA?",
        options: [
          "A, B, C, D",
          "A, T, C, G",
          "A, U, C, G",
          "G, H, I, J",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the central dogma of molecular biology?",
        options: [
          "Protein → RNA → DNA",
          "DNA → mRNA → protein",
          "mRNA → DNA → protein",
          "DNA → protein → mRNA",
        ],
        correctIndex: 1,
      },
      {
        question: "What percentage of human DNA directly codes for proteins?",
        options: [
          "About 50%",
          "About 25%",
          "About 1–2%",
          "About 90%",
        ],
        correctIndex: 2,
      },
    ],
  },

  // ─── 3. What Are Proteins? ───
  {
    slug: "what-are-proteins",
    title: "What Are Proteins?",
    track: "beginner",
    level: "Beginner",
    minutes: 8,
    description:
      "Proteins do almost everything in your cells. Here is what they are and why they matter.",
    promise: "By the end, you can explain what proteins are, how they get their shape, and why they matter in synbio.",
    sections: [
      {
        heading: "The big idea",
        body: `If a cell were a city, proteins would be the workers. They build structures, deliver messages, break down food, and defend against invaders.

Almost every process in your body depends on proteins. Your muscles move because of proteins. You digest food because of proteins. You fight off illness because of proteins.

They are not just one thing — they are thousands of different things, each shaped for a specific job.

In synbio, proteins are both the tools and the products. When scientists design a new biological system, they are usually deciding which proteins to make, when, and how much.`,
      },
      {
        heading: "The parts",
        body: `Amino acids are the building blocks. There are 20 different amino acids, and they link together like beads on a string.

The order of the amino acids is determined by the gene that codes for that protein. Change the gene, change the protein.

A polypeptide is the long chain of amino acids before it folds. Once it folds into a specific 3D shape, it becomes a functional protein.

Some proteins are made of a single chain. Others combine multiple chains. Hemoglobin, for example, is made of four chains working together.`,
      },
      {
        heading: "How it works",
        body: `The process starts with a gene in DNA.

The gene is transcribed into mRNA. The mRNA is translated by a ribosome into a chain of amino acids. This chain then folds into a 3D shape.

That shape determines function. A round shape might be good for carrying oxygen. A channel shape might let molecules pass through a membrane. A scissor shape might cut other proteins.

If the protein folds incorrectly, it usually cannot do its job. Some diseases — like Alzheimer's and sickle cell disease — are linked to misfolded or mutated proteins.

Scientists can predict protein shapes using AI tools like AlphaFold. This is a major breakthrough for designing new proteins.`,
      },
      {
        heading: "Example",
        body: `Insulin is a protein that regulates blood sugar. People with type 1 diabetes cannot make their own insulin.

Before synbio, insulin came from pig or cow pancreases — expensive and sometimes caused allergic reactions.

In 1978, scientists engineered bacteria to produce human insulin. They inserted the human insulin gene into E. coli, and the bacteria became tiny insulin factories.

Today, nearly all insulin is made this way. It is one of the oldest and most important applications of genetic engineering.`,
      },
      {
        heading: "Common misunderstandings",
        body: `"Proteins are just something in food."

Dietary protein is one use of the word, but in biology, proteins are molecular machines that do work inside cells. The protein you eat gets broken down into amino acids, which your cells then reassemble into new proteins.

"All proteins are enzymes."

Enzymes are proteins that speed up chemical reactions, but not all proteins are enzymes. Some are structural (like collagen), some are transporters (like hemoglobin), and some are signals (like insulin).

"Bigger proteins are more important."

Size does not equal importance. Some of the most critical proteins in your body are quite small. Insulin is only 51 amino acids long.`,
      },
      {
        heading: "What is next?",
        body: `Next, you will learn about gene expression — the process that decides when and how much of each protein gets made.

Understanding expression is key to controlling what cells do, which is the core challenge of synbio.`,
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
          "Like origami — the flat paper folds into a specific shape that gives it purpose.",
      },
      {
        term: "Enzyme",
        definition: "A protein that speeds up a chemical reaction without being consumed.",
        analogy: "Like a factory worker on an assembly line — helps things happen faster.",
      },
      {
        term: "AlphaFold",
        definition: "An AI system that predicts protein 3D structures from amino acid sequences.",
        analogy: "Like GPS for protein shape — it tells you the structure without having to build it.",
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
      {
        question: "How is insulin produced today?",
        options: [
          "Extracted from pig pancreases",
          "Made chemically in a lab",
          "Produced by engineered bacteria",
          "Grown in plant cells",
        ],
        correctIndex: 2,
      },
      {
        question: "What is an enzyme?",
        options: [
          "A type of DNA",
          "A protein that speeds up chemical reactions",
          "A sugar molecule",
          "A type of cell",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ─── 4. What Is Gene Expression? ───
  {
    slug: "what-is-gene-expression",
    title: "What Is Gene Expression?",
    track: "beginner",
    level: "Beginner",
    minutes: 9,
    description:
      "Gene expression decides when and how much of each protein gets made. It is the cell's control system.",
    promise: "By the end, you can explain how cells turn genes on and off to control what they do.",
    sections: [
      {
        heading: "The big idea",
        body: `Every cell in your body has the same DNA. A skin cell and a brain cell carry the exact same genes.

So why are they different? Because different genes are turned on in different cells. This is gene expression — the process of reading a gene and making its product (usually a protein).

Think of DNA as a huge playlist. Gene expression is which songs are actually playing right now. Not every song plays at the same time.

Controlling expression is the key to controlling what a cell does. In synbio, it is one of the most important things to get right.`,
      },
      {
        heading: "The parts",
        body: `Promoter: a stretch of DNA that signals "start reading here." It is like a play button for a gene. Strong promoters make lots of protein. Weak promoters make a little.

RNA polymerase: the enzyme that reads DNA and makes mRNA. It binds to the promoter and moves along the gene.

mRNA (messenger RNA): the temporary copy of a gene that travels to the ribosome to be translated.

Ribosome: the molecular machine that reads mRNA and assembles amino acids into a protein.

Terminator: a DNA sequence that signals "stop reading here." It tells RNA polymerase to let go.

Repressor: a protein that blocks a promoter, turning a gene off. Like putting your hand over the play button.

Activator: a protein that helps turn a gene on. Like pressing play more firmly.`,
      },
      {
        heading: "How it works",
        body: `Gene expression happens in two main steps.

Transcription: RNA polymerase binds to the promoter, reads the gene, and produces an mRNA copy. This happens in the nucleus (in eukaryotes) or the cytoplasm (in bacteria).

Translation: the ribosome reads the mRNA three letters at a time (codons) and links amino acids together to form a protein.

Cells regulate expression at many points:

Before transcription — by controlling whether RNA polymerase can access the promoter (repressors, activators, chromatin state).

During transcription — by pausing or speeding up RNA polymerase.

After transcription — by degrading mRNA faster or slower, or by blocking translation.

In synbio, scientists design artificial promoters, repressors, and activators to control when and how much protein a cell makes.`,
      },
      {
        heading: "Example",
        body: `The lac operon in E. coli is a classic example of gene regulation.

E. coli can eat lactose (a sugar found in milk), but it does not bother making the enzymes unless lactose is actually present.

When lactose is absent, a repressor protein sits on the promoter and blocks transcription. The genes are off.

When lactose appears, it binds to the repressor and pulls it off the promoter. RNA polymerase can now read the genes. The cell starts making the enzymes it needs to digest lactose.

This on/off switch is one of the first genetic circuits ever discovered. Synbio builds on this same logic.`,
      },
      {
        heading: "Common misunderstandings",
        body: `"All genes are always on."

Most genes are off most of the time. A cell only expresses the genes it needs for its current situation. Turning genes on and off is how cells adapt.

"More mRNA always means more protein."

Not necessarily. mRNA can be degraded before translation. Translation efficiency varies. And proteins can be degraded after they are made. There are many layers of control.

"Gene expression is permanent."

Most gene expression changes are temporary and reversible. When conditions change, the cell can turn different genes on or off. Permanent changes (like DNA mutations) are different from expression changes.`,
      },
      {
        heading: "What is next?",
        body: `Now you know how DNA stores information, what proteins do, and how gene expression controls the process.

Next, you will meet bacteria — the tiny organisms that are the workhorse of synbio labs everywhere.`,
      },
    ],
    keyTerms: [
      {
        term: "Gene expression",
        definition: "The process of reading a gene and making its product, usually a protein.",
        analogy: "Like playing a specific song from a huge playlist.",
      },
      {
        term: "Promoter",
        definition: "A DNA region that signals where transcription should begin.",
        analogy: "Like a play button for a gene.",
      },
      {
        term: "Transcription",
        definition: "Copying a gene from DNA into mRNA.",
        analogy: "Like photocopying a recipe from a cookbook.",
      },
      {
        term: "Translation",
        definition: "Reading mRNA and assembling amino acids into a protein at the ribosome.",
        analogy: "Like following the recipe to actually cook the dish.",
      },
      {
        term: "Repressor",
        definition: "A protein that blocks transcription by sitting on the promoter.",
        analogy: "Like putting your hand over the play button.",
      },
      {
        term: "Lac operon",
        definition: "A set of genes in E. coli that is turned on only when lactose is present.",
        analogy: "Like an automatic light that turns on when someone enters the room.",
      },
    ],
    quiz: [
      {
        question: "What is a promoter?",
        options: [
          "A protein that carries oxygen",
          "A DNA region that signals where to start reading a gene",
          "An enzyme that cuts DNA",
          "A type of amino acid",
        ],
        correctIndex: 1,
      },
      {
        question: "What happens when lactose is absent in the lac operon?",
        options: [
          "The genes are always on",
          "A repressor blocks the promoter and the genes are off",
          "The cell dies",
          "RNA polymerase works faster",
        ],
        correctIndex: 1,
      },
      {
        question: "What are the two main steps of gene expression?",
        options: [
          "Replication and mutation",
          "Transcription and translation",
          "Folding and cutting",
          "Copying and pasting",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ─── 5. What Are Bacteria? ───
  {
    slug: "what-are-bacteria",
    title: "What Are Bacteria?",
    track: "beginner",
    level: "Beginner",
    minutes: 8,
    description:
      "Bacteria are tiny single-celled organisms — and the most popular chassis in synbio.",
    promise: "By the end, you can explain what bacteria are and why they are the go-to organism in synbio labs.",
    sections: [
      {
        heading: "The big idea",
        body: `Bacteria are single-celled organisms. They are among the oldest, most abundant life forms on Earth.

They are everywhere: in soil, in water, in the air, on your skin, and inside your gut. Most are harmless. Many are helpful. Some are essential for life.

In synbio, bacteria are the workhorse. Scientists put new instructions into bacteria and let them carry out tasks — producing medicines, sensing pollutants, or manufacturing materials.

Why bacteria? They are small, fast, cheap, and easy to work with. A single E. coli cell can divide every 20 minutes, giving you billions of cells overnight.`,
      },
      {
        heading: "The parts",
        body: `Cell membrane: the outer boundary that controls what enters and leaves the cell.

Cell wall: a rigid layer outside the membrane that gives the bacterium its shape.

Cytoplasm: the jelly-like interior where chemical reactions happen.

Chromosome: a single, circular loop of DNA that carries most of the cell's genes.

Plasmid: a small, extra loop of DNA (covered in Module 6). Plasmids often carry bonus genes — like antibiotic resistance.

Ribosome: the molecular machine that builds proteins by reading mRNA.

Flagellum: a tail-like appendage some bacteria use to swim.`,
      },
      {
        heading: "How it works",
        body: `Bacteria live and multiply through a simple cycle.

They absorb nutrients from their environment. They use those nutrients to grow and copy their DNA. Then they split in two (binary fission). Each daughter cell is a clone.

Under good conditions, this can happen every 20–30 minutes for E. coli. That means one cell can become over a billion in about 10 hours.

In a synbio lab, scientists grow bacteria in liquid culture (shaking flasks) or on agar plates. They control the food, temperature, and conditions to keep the bacteria happy and productive.

When scientists want to insert new DNA, they use a process called transformation — tricking the bacteria into taking up a plasmid.`,
      },
      {
        heading: "Example",
        body: `E. coli (Escherichia coli) is the most commonly used bacterium in synbio.

It lives naturally in the human gut. The lab strains used in research have been domesticated over decades — they are safe and well-understood.

Thousands of iGEM teams have used E. coli for their projects. It has been engineered to produce biofuels, detect arsenic in water, manufacture vanilla flavor, and even count.

Other popular bacteria include Bacillus subtilis (a soil bacterium used in industry) and various Pseudomonas species (good at breaking down pollutants).`,
      },
      {
        heading: "Common misunderstandings",
        body: `"All bacteria are germs."

Only a tiny fraction of bacteria cause disease. Most are harmless, and many are essential — for digestion, soil health, and nutrient cycling.

"Bacteria are all the same."

There is enormous diversity among bacteria. They vary in shape (rods, spheres, spirals), metabolism, habitat, and genetics. Two bacterial species can be more different from each other than a human is from a mushroom.

"Lab bacteria are dangerous."

Lab strains like E. coli K-12 have been modified to be unable to survive outside the lab. They cannot colonize your gut or infect you. This is intentional biosafety.`,
      },
      {
        heading: "What is next?",
        body: `Now you know the organism. Next, you will learn about one of its most useful features — plasmids, the portable DNA that scientists use to reprogram cells.`,
      },
    ],
    keyTerms: [
      {
        term: "Bacteria",
        definition: "Single-celled organisms without a nucleus, found nearly everywhere on Earth.",
        analogy: "Like tiny factories that can be reprogrammed.",
      },
      {
        term: "E. coli",
        definition: "Escherichia coli — the most commonly used bacterium in synbio research.",
        analogy: "Like the Honda Civic of biology — reliable, well-studied, everywhere.",
      },
      {
        term: "Binary fission",
        definition: "The process by which a bacterium divides into two identical daughter cells.",
        analogy: "Like a cell photocopying itself.",
      },
      {
        term: "Transformation",
        definition: "The process of inserting new DNA (usually a plasmid) into a bacterial cell.",
        analogy: "Like installing a new app on a phone.",
      },
      {
        term: "Agar plate",
        definition: "A nutrient-filled petri dish used to grow bacterial colonies.",
        analogy: "Like a buffet for bacteria — they eat and multiply.",
      },
      {
        term: "Chassis",
        definition: "The host organism that carries an engineered genetic system.",
        analogy: "Like the car body that holds the engine — the organism holds the circuit.",
      },
    ],
    quiz: [
      {
        question: "Why are bacteria popular in synbio?",
        options: [
          "They are large and easy to see",
          "They grow fast, are cheap, and well-understood",
          "They can survive in space",
          "They have complex organ systems",
        ],
        correctIndex: 1,
      },
      {
        question: "How do bacteria reproduce?",
        options: [
          "Sexual reproduction",
          "Budding",
          "Binary fission",
          "Spore formation only",
        ],
        correctIndex: 2,
      },
      {
        question: "What is E. coli K-12?",
        options: [
          "A dangerous pathogen",
          "A safe, domesticated lab strain",
          "A type of yeast",
          "A plant cell line",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ─── 6. What Are Plasmids? ───
  {
    slug: "what-are-plasmids",
    title: "What Are Plasmids?",
    track: "beginner",
    level: "Beginner",
    minutes: 7,
    description:
      "Plasmids are tiny rings of DNA that scientists use to reprogram cells.",
    promise: "By the end, you can explain what plasmids are, their parts, and how scientists use them.",
    sections: [
      {
        heading: "The big idea",
        body: `Most of a bacterium's DNA is stored in one big circular chromosome. But bacteria can also carry extra, smaller loops of DNA called plasmids.

Plasmids are separate from the main DNA. They replicate on their own and can be passed between cells.

Think of them as USB drives for bacteria — small, portable, and carrying useful information.

In synbio, plasmids are one of the most important tools. Scientists insert new genes into a plasmid, then put that plasmid into a cell. The cell reads the new genes and follows the instructions.`,
      },
      {
        heading: "The parts",
        body: `A typical engineered plasmid has a few key components:

Origin of replication (ori): tells the cell to copy the plasmid when it divides. Without this, the plasmid would be lost.

Selectable marker: usually an antibiotic resistance gene. It lets scientists identify which cells successfully took up the plasmid. Only cells with the plasmid survive on antibiotic plates.

Multiple cloning site (MCS): a region with several restriction enzyme cut sites. Scientists cut the plasmid here and insert their gene of interest.

Gene of interest: the new instruction you want the cell to follow — making a fluorescent protein, producing a drug, sensing a molecule, etc.

Promoter and terminator: control when and where the gene is read (you learned about these in Module 4).`,
      },
      {
        heading: "How it works",
        body: `The process of getting a plasmid into a cell is called transformation.

First, scientists design the plasmid on a computer. They choose the parts they need from databases like the iGEM Registry of Standard Biological Parts.

Next, they order or assemble the DNA. Modern DNA synthesis companies can build custom plasmids in days.

Then they transform the bacteria — usually by heat shock (a quick temperature change that opens tiny pores in the cell membrane) or electroporation (a brief electric pulse).

The bacteria that take up the plasmid are selected using the antibiotic marker. Only the transformed cells grow.

Finally, the engineered bacteria express the new genes and do what they were designed to do.`,
      },
      {
        heading: "Example",
        body: `One of the most famous plasmids in synbio is pSB1C3, the standard submission vector used by iGEM teams around the world.

It has a chloramphenicol resistance marker and a well-characterized origin of replication. Thousands of genetic parts have been cloned into this plasmid and shared through the iGEM registry.

Another classic: pUC19, a tiny, high-copy plasmid used in labs since the 1980s. It replicates to hundreds of copies per cell, making it ideal for amplifying DNA.`,
      },
      {
        heading: "Common misunderstandings",
        body: `"Plasmids are artificial."

Plasmids exist naturally in bacteria. In the wild, they often carry genes for antibiotic resistance or toxin production. Scientists have adapted them for lab use, but the basic concept is natural.

"Every cell that gets transformed keeps the plasmid forever."

Without selection pressure (like an antibiotic), bacteria can lose their plasmids over time. This is why experiments often include antibiotics in the growth medium.

"One plasmid = one gene."

Plasmids can carry multiple genes. Complex synbio circuits sometimes put several genes on one plasmid, or split them across multiple compatible plasmids.`,
      },
      {
        heading: "What is next?",
        body: `You now know the main characters: DNA, proteins, gene expression, bacteria, and plasmids.

Next, you will learn about how scientists actually modify organisms — the techniques that put all these pieces together.`,
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
        analogy: "Like a tracking number that confirms a package was delivered.",
      },
      {
        term: "Origin of replication",
        definition: "A DNA sequence that tells the cell to copy the plasmid.",
        analogy: "Like a 'copy me' tag on a document.",
      },
      {
        term: "Multiple cloning site",
        definition: "A region on a plasmid with several cut sites for inserting new DNA.",
        analogy: "Like a socket where you plug in new components.",
      },
      {
        term: "iGEM Registry",
        definition: "A public database of standardized biological parts used in synbio.",
        analogy: "Like an app store, but for genetic parts.",
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
      {
        question: "What is the purpose of a selectable marker?",
        options: [
          "To help the plasmid replicate",
          "To make the cell glow",
          "To identify which cells received the plasmid",
          "To speed up protein production",
        ],
        correctIndex: 2,
      },
      {
        question: "How do scientists typically get plasmids into bacteria?",
        options: [
          "Injection with a needle",
          "Heat shock or electroporation",
          "Mixing them in food",
          "UV light exposure",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ─── 7. How Do Scientists Modify Organisms? ───
  {
    slug: "how-do-scientists-modify-organisms",
    title: "How Do Scientists Modify Organisms?",
    track: "beginner",
    level: "Beginner",
    minutes: 10,
    description:
      "From restriction enzymes to Gibson Assembly — the tools that let scientists rewrite biology.",
    promise: "By the end, you can describe the main techniques used to build and insert new DNA.",
    sections: [
      {
        heading: "The big idea",
        body: `Modifying an organism means changing its DNA so it does something new. But DNA is incredibly tiny — you cannot just reach in and rearrange it by hand.

Scientists have developed a toolkit of molecular techniques to cut, paste, copy, and insert DNA with precision.

These tools have evolved over decades. Early methods were like using scissors and glue. Modern methods are more like a word processor with find-and-replace.

Understanding these techniques is not just for lab scientists. If you want to follow synbio news, evaluate claims, or participate in projects, knowing the basics helps.`,
      },
      {
        heading: "The parts",
        body: `Restriction enzymes: molecular scissors that cut DNA at specific sequences. Discovered in the 1970s. Different enzymes recognize different sequences.

Ligase: molecular glue that joins DNA fragments together.

PCR (Polymerase Chain Reaction): a method to copy (amplify) a specific piece of DNA millions of times. Essential for getting enough DNA to work with.

Gel electrophoresis: a technique that separates DNA fragments by size. Scientists run DNA through a gel with an electric current — smaller fragments move faster.

DNA sequencing: reading the order of bases in a DNA molecule. Modern sequencing is fast and cheap.

Gibson Assembly: a method to join multiple DNA fragments in one step. Widely used in synbio for building complex constructs.

Golden Gate Assembly: another method that uses special restriction enzymes to join fragments in a specific order.`,
      },
      {
        heading: "How it works",
        body: `A typical cloning workflow looks like this:

Step 1: Design the DNA on a computer. Pick the gene, promoter, terminator, and other parts.

Step 2: Get the DNA. Either order it from a synthesis company or amplify it from an existing source using PCR.

Step 3: Cut and paste. Use restriction enzymes or assembly methods (Gibson, Golden Gate) to combine the parts into a plasmid.

Step 4: Transform. Put the plasmid into bacteria using heat shock or electroporation.

Step 5: Select. Grow the bacteria on plates with antibiotics. Only transformed cells survive.

Step 6: Verify. Pick colonies, extract the plasmid, and sequence it to confirm the DNA is correct.

Step 7: Test. Grow the engineered bacteria and measure whether they do what you designed.`,
      },
      {
        heading: "Example",
        body: `iGEM teams around the world use these exact techniques every year.

A typical iGEM project involves designing a genetic circuit on a computer, ordering parts from the iGEM registry, assembling them into a plasmid, transforming E. coli, and testing the system.

For instance, the GreatBay-SCIE team engineered bacteria to detect specific molecules in milk — using promoters that respond to target chemicals, reporter genes that produce a visible signal, and careful assembly of all the parts into a working circuit.

The tools are the same whether you are in a world-class university lab or a community bio space.`,
      },
      {
        heading: "Common misunderstandings",
        body: `"You need expensive equipment to do synbio."

Basic cloning can be done with a few hundred dollars of equipment. DNA synthesis is getting cheaper every year. Community labs make tools accessible.

"PCR copies entire genomes."

PCR is targeted — it copies only the specific fragment you design primers for. It does not copy everything.

"Assembly methods are interchangeable."

Different methods have trade-offs. Gibson Assembly is flexible but can have issues with certain sequences. Golden Gate is more structured but works well for defined assemblies. Scientists choose based on their specific needs.`,
      },
      {
        heading: "What is next?",
        body: `You now know the techniques. Next, you will learn about the most revolutionary tool in the toolkit — CRISPR, the gene-editing system that changed everything.`,
      },
    ],
    keyTerms: [
      {
        term: "Restriction enzyme",
        definition: "A protein that cuts DNA at a specific recognition sequence.",
        analogy: "Like molecular scissors with a specific cutting pattern.",
      },
      {
        term: "PCR",
        definition: "Polymerase Chain Reaction — a method to amplify specific DNA fragments.",
        analogy: "Like a photocopier for DNA.",
      },
      {
        term: "Gibson Assembly",
        definition: "A method to join multiple DNA fragments in a single reaction.",
        analogy: "Like snapping Lego pieces together — the ends are designed to fit.",
      },
      {
        term: "Gel electrophoresis",
        definition: "A technique that separates DNA fragments by size using an electric field.",
        analogy: "Like a race where smaller runners (fragments) are faster.",
      },
      {
        term: "Cloning",
        definition: "Inserting a gene into a plasmid and growing it in bacteria to make copies.",
        analogy: "Like putting a recipe into a cookbook and printing many copies.",
      },
    ],
    quiz: [
      {
        question: "What does PCR do?",
        options: [
          "Cuts DNA at specific sites",
          "Copies a specific DNA fragment many times",
          "Joins DNA fragments together",
          "Sequences DNA",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the purpose of gel electrophoresis?",
        options: [
          "To grow bacteria",
          "To separate DNA fragments by size",
          "To insert plasmids into cells",
          "To fold proteins",
        ],
        correctIndex: 1,
      },
      {
        question: "In a typical cloning workflow, what comes after assembly?",
        options: [
          "Sequencing",
          "Transformation",
          "PCR",
          "Gel electrophoresis",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ─── 8. What Is CRISPR? ───
  {
    slug: "what-is-crispr",
    title: "What Is CRISPR?",
    track: "beginner",
    level: "Beginner",
    minutes: 10,
    description:
      "The gene-editing tool that changed everything — how it works and why it matters.",
    promise: "By the end, you can explain how CRISPR works and why it is such a big deal.",
    sections: [
      {
        heading: "The big idea",
        body: `CRISPR is a gene-editing tool that lets scientists make precise changes to DNA in living organisms.

Before CRISPR, editing genes was like trying to fix a typo in a book by cutting out pages and taping in new ones. CRISPR is more like find-and-replace in a word processor.

The full name is CRISPR-Cas9. CRISPR stands for "Clustered Regularly Interspaced Short Palindromic Repeats" — a mouthful that describes a natural immune system in bacteria.

Scientists adapted this bacterial defense system into one of the most powerful tools in biology. It earned Jennifer Doudna and Emmanuelle Charpentier the Nobel Prize in Chemistry in 2020.`,
      },
      {
        heading: "The parts",
        body: `Guide RNA (gRNA): a short piece of RNA that matches the target DNA sequence. It tells the system exactly where to cut. Scientists design this to target any gene they want.

Cas9: the protein that acts as molecular scissors. It follows the guide RNA to the target and cuts both strands of the DNA.

PAM sequence: a short DNA sequence (usually NGG) that must be next to the target for Cas9 to bind. It is like a landing pad.

Repair machinery: after the cut, the cell's own repair systems fix the break. Scientists can use this to knock out a gene (by letting the repair introduce errors) or insert new DNA (by providing a template).`,
      },
      {
        heading: "How it works",
        body: `Step 1: Scientists design a guide RNA that matches their target gene. This is done on a computer using the organism's genome sequence.

Step 2: The guide RNA and Cas9 protein are delivered into the cell — either as DNA (on a plasmid), as RNA, or as a pre-formed complex.

Step 3: Inside the cell, the guide RNA leads Cas9 to the matching DNA sequence. Cas9 checks for the PAM sequence, then cuts both strands.

Step 4: The cell detects the break and tries to repair it.

If no template is provided, the cell uses error-prone repair (NHEJ), which often introduces small insertions or deletions that disable the gene. This is a gene knockout.

If a template with new DNA is provided, the cell can use it to insert the new sequence precisely. This is a gene knock-in.`,
      },
      {
        heading: "Example",
        body: `In 2023, the first CRISPR-based medicine was approved: Casgevy, a treatment for sickle cell disease.

Sickle cell disease is caused by a single mutation in the hemoglobin gene. The mutant protein causes red blood cells to become rigid and crescent-shaped, blocking blood vessels and causing pain.

Casgevy works by editing a patient's own stem cells to reactivate fetal hemoglobin — a form of hemoglobin that works normally. The edited cells are then infused back into the patient.

Early results show patients living pain-free for the first time. It is a landmark moment for gene therapy.`,
      },
      {
        heading: "Common misunderstandings",
        body: `"CRISPR can edit any gene perfectly."

CRISPR is powerful but not perfect. Off-target cuts (editing the wrong spot) are a real concern. Scientists are constantly improving accuracy with better guide RNAs and newer Cas proteins (like Cas12 and base editors).

"CRISPR is only for medicine."

It is also used in agriculture (disease-resistant crops), ecology (gene drives to control mosquitoes), biomanufacturing (engineering yeast for biofuels), and basic research.

"CRISPR is brand new."

The CRISPR system was discovered in bacteria in the 1980s. Its potential as a gene-editing tool was demonstrated in 2012. It has been refined rapidly since then, but the science has a 40-year history.`,
      },
      {
        heading: "What is next?",
        body: `You have now covered the core toolkit of synbio: DNA, proteins, gene expression, bacteria, plasmids, cloning techniques, and CRISPR.

Next, you will see how all of this shows up in everyday life — products and technologies you might already use without realizing they came from synbio.`,
      },
    ],
    keyTerms: [
      {
        term: "CRISPR",
        definition: "A gene-editing system adapted from a natural bacterial immune defense.",
        analogy: "Like find-and-replace for DNA.",
      },
      {
        term: "Cas9",
        definition: "The protein that acts as molecular scissors in the CRISPR system.",
        analogy: "Like a pair of precision scissors guided by GPS.",
      },
      {
        term: "Guide RNA",
        definition: "A short RNA molecule that directs Cas9 to the target DNA sequence.",
        analogy: "Like a search query that tells the system exactly what to find.",
      },
      {
        term: "Gene knockout",
        definition: "Disabling a gene by introducing errors during DNA repair.",
        analogy: "Like cutting a wire to turn off a specific function.",
      },
      {
        term: "Gene knock-in",
        definition: "Inserting new DNA at a specific location using a repair template.",
        analogy: "Like replacing a broken part with a new one.",
      },
      {
        term: "Off-target effect",
        definition: "An unintended edit at a location other than the target.",
        analogy: "Like a search-and-replace that accidentally changes the wrong word.",
      },
    ],
    quiz: [
      {
        question: "What does the guide RNA do in the CRISPR system?",
        options: [
          "Cuts the DNA",
          "Repairs the DNA after cutting",
          "Directs Cas9 to the target sequence",
          "Copies the DNA",
        ],
        correctIndex: 2,
      },
      {
        question: "What was the first CRISPR-based medicine approved for?",
        options: [
          "Cancer",
          "Sickle cell disease",
          "Diabetes",
          "Alzheimer's disease",
        ],
        correctIndex: 1,
      },
      {
        question: "What is a gene knockout?",
        options: [
          "Adding a new gene to a cell",
          "Disabling a gene by introducing errors",
          "Copying a gene many times",
          "Moving a gene to a different chromosome",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ─── 9. Synthetic Biology in Everyday Life ───
  {
    slug: "synbio-in-everyday-life",
    title: "Synthetic Biology in Everyday Life",
    track: "beginner",
    level: "Beginner",
    minutes: 9,
    description:
      "From laundry detergent to impossible burgers — synbio is already in your world.",
    promise: "By the end, you can name several everyday products that rely on synthetic biology.",
    sections: [
      {
        heading: "The big idea",
        body: `You might think synthetic biology is something that only happens in university labs. But synbio products are already part of your daily life.

The enzymes in your laundry detergent? Many are made by engineered microorganisms.

Plant-based meat that bleeds? The heme protein in the Impossible Burger is produced by engineered yeast.

Your favorite pair of jeans? Some are processed with enzymes from engineered organisms instead of harsh chemicals.

Synbio is quietly reshaping industries — medicine, food, materials, energy, and cosmetics. This module is your tour of what is already here.`,
      },
      {
        heading: "The parts",
        body: `The applications of synbio fall into several categories:

Medicine: engineered organisms produce drugs (insulin, vaccines, antibodies). Gene therapies fix genetic diseases.

Food and agriculture: engineered microbes produce flavors, fragrances, and food ingredients. Gene-edited crops resist pests and drought.

Materials: spider silk made by yeast. Biodegradable plastics from bacteria. Dyes without toxic chemicals.

Energy: biofuels from engineered algae or yeast. Microbial fuel cells that generate electricity from waste.

Environment: bacteria that eat plastic. Biosensors that detect pollution. Bioremediation of contaminated soil.

Consumer products: enzymes in detergents, cosmetics with bio-identical ingredients, fermented proteins.`,
      },
      {
        heading: "How it works",
        body: `The common thread is fermentation — growing engineered microorganisms in large tanks (bioreactors) and harvesting what they produce.

It is the same basic process as brewing beer, but instead of alcohol, the microbes produce medicines, materials, or food ingredients.

The scale can be enormous. Industrial bioreactors hold tens of thousands of liters. Companies like Ginkgo Bioworks, Amyris, and Zymergen (now part of Ginkgo) specialize in engineering microbes for industrial production.

The process follows the same design-build-test-learn cycle you learned in Module 1, but applied to real-world products rather than lab experiments.`,
      },
      {
        heading: "Example",
        body: `The Impossible Burger uses a protein called heme to give its plant-based patty the taste and "bleed" of real meat.

Heme is naturally found in animal muscle (it is what makes meat red). But extracting it from plants is expensive.

Impossible Foods engineered yeast to produce soy leghemoglobin — a plant heme protein — through fermentation. The yeast grows in tanks, producing heme at scale without raising a single cow.

This is synbio in action: taking a natural molecule, finding the gene that makes it, putting that gene into a microbe, and producing it sustainably.`,
      },
      {
        heading: "Common misunderstandings",
        body: `"Synbio products are 'unnatural' and unsafe."

Every synbio product goes through regulatory review before reaching consumers. The insulin diabetics use, the enzymes in your detergent, and the ingredients in plant-based meat all meet strict safety standards.

"Synbio will replace traditional farming."

It complements, not replaces. Synbio can reduce the environmental footprint of certain products, but it works alongside conventional agriculture and manufacturing.

"Only big companies do this."

Many synbio products started in academic labs or from iGEM projects. The barrier to entry is dropping every year.`,
      },
      {
        heading: "What is next?",
        body: `Now you have seen what synbio can do. But powerful technology needs responsible use.

The final module covers ethics and safety — the guardrails that keep synbio on a good path.`,
      },
    ],
    keyTerms: [
      {
        term: "Fermentation",
        definition: "Growing microorganisms in controlled conditions to produce desired products.",
        analogy: "Like brewing beer, but the microbes make medicine instead of alcohol.",
      },
      {
        term: "Bioreactor",
        definition: "A large tank used to grow engineered organisms at industrial scale.",
        analogy: "Like a brewery vat, but for synbio products.",
      },
      {
        term: "Heme",
        definition: "An iron-containing molecule that gives blood and meat their red color.",
        analogy: "The ingredient that makes the Impossible Burger taste like meat.",
      },
      {
        term: "Bioremediation",
        definition: "Using organisms to clean up pollutants in the environment.",
        analogy: "Like sending in a cleanup crew of tiny organisms.",
      },
      {
        term: "Bio-identical",
        definition: "A molecule produced by an organism that is chemically identical to one from another source.",
        analogy: "Like a perfect copy — same molecule, different factory.",
      },
    ],
    quiz: [
      {
        question: "What protein makes the Impossible Burger taste like meat?",
        options: [
          "Insulin",
          "Hemoglobin",
          "Soy leghemoglobin (heme)",
          "Collagen",
        ],
        correctIndex: 2,
      },
      {
        question: "What is a bioreactor?",
        options: [
          "A computer that designs DNA",
          "A tank for growing engineered organisms at scale",
          "A device that reads gene sequences",
          "A robot that assembles DNA",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of these is NOT a current application of synbio?",
        options: [
          "Producing insulin",
          "Making biodegradable plastics",
          "Teleportation",
          "Creating plant-based meat ingredients",
        ],
        correctIndex: 2,
      },
    ],
  },

  // ─── 10. Ethics and Safety in Synthetic Biology ───
  {
    slug: "ethics-and-safety",
    title: "Ethics and Safety in Synthetic Biology",
    track: "beginner",
    level: "Beginner",
    minutes: 10,
    description:
      "Why safety and ethics are built into synbio from day one — not an afterthought.",
    promise: "By the end, you can explain the key safety practices and ethical considerations in synbio.",
    sections: [
      {
        heading: "The big idea",
        body: `Every powerful technology raises important questions. Nuclear physics gave us both power plants and bombs. The internet gave us knowledge and misinformation.

Synthetic biology is no different. The same tools that create life-saving medicines could, in theory, be misused. This is why ethics and safety are built into synbio from the very beginning — not added as an afterthought.

The synbio community has a strong culture of responsibility. From biosafety levels in labs to international agreements on dual-use research, safeguards exist at every level.

Understanding these safeguards is important for everyone — not just scientists. As synbio becomes more accessible, public understanding of its risks and governance matters more than ever.`,
      },
      {
        heading: "The parts",
        body: `Biosafety levels (BSL): labs are rated BSL-1 through BSL-4. Most synbio work happens at BSL-1 (basic) or BSL-2 (moderate risk). BSL-3 and BSL-4 handle dangerous pathogens and require special containment.

Biocontainment: strategies to prevent engineered organisms from surviving outside the lab. These include kill switches (genes that cause cell death if the organism escapes), auxotrophies (making organisms dependent on nutrients not found in nature), and genetic safeguards.

Dual-use research: research that could be used for both beneficial and harmful purposes. Oversight committees review such research before it can proceed.

Institutional Biosafety Committees (IBCs): groups at universities and companies that review and approve genetic engineering experiments.

The Asilomar Conference (1975): a landmark meeting where scientists voluntarily paused recombinant DNA research to establish safety guidelines. This self-regulation set the tone for bioethics.

iGEM safety practices: every iGEM team must complete safety forms, document their organisms, and follow biosafety rules. Safety is a core part of the competition.`,
      },
      {
        heading: "How it works",
        body: `Safety in synbio operates at multiple levels:

Lab level: researchers follow biosafety protocols, wear protective equipment, and work in appropriate containment. They use non-pathogenic lab strains.

Design level: engineers build biocontainment into their organisms. Kill switches, genetic firewalls, and dependency on synthetic amino acids all prevent uncontrolled spread.

Institutional level: IBCs review proposed experiments. Funding agencies require biosafety plans.

National level: governments regulate genetically modified organisms through agencies like the EPA, FDA, and USDA (in the US) or equivalent bodies worldwide.

International level: the Biological Weapons Convention, the Cartagena Protocol on Biosafety, and other agreements provide global frameworks.

Community level: organizations like iGEM promote a culture of responsible innovation. Open science and transparency help the public stay informed.`,
      },
      {
        heading: "Example",
        body: `In 2017, a DARPA-funded project proposed using gene drives — genetic systems that spread through wild populations — to eliminate malaria-carrying mosquitoes.

Gene drives use CRISPR to ensure a genetic modification is inherited by nearly all offspring, allowing it to spread through a species.

The potential benefit is enormous: malaria kills over 600,000 people per year.

But the risks are significant: releasing a gene drive into the wild is essentially irreversible. It could have unintended ecological consequences.

This sparked intense ethical debate. Scientists, ethicists, and policymakers are working together to develop governance frameworks before any gene drive is released in the wild. This is responsible innovation in action.`,
      },
      {
        heading: "Common misunderstandings",
        body: `"Scientists are reckless with genetic engineering."

The synbio community has one of the strongest self-governance cultures in science. The Asilomar precedent — scientists voluntarily stopping their own research to establish safety rules — is almost unique in the history of science.

"Safety regulations slow down innovation."

Safety practices actually accelerate trust and adoption. When the public trusts that products are safe, regulatory approval and market acceptance come faster.

"Biosafety only matters for professionals."

As DIY bio and community labs grow, biosafety education for non-professionals becomes increasingly important. Everyone working with biology should understand and practice basic safety.`,
      },
      {
        heading: "What is next?",
        body: `Congratulations — you have completed the Beginner track!

You now have a foundation in DNA, proteins, gene expression, bacteria, plasmids, modification techniques, CRISPR, real-world applications, and ethics.

From here, you can explore the Intermediate track (coming soon), dive deeper into specific topics, or follow the newsletter for bite-sized synbio updates.

The most important thing: keep asking questions. That curiosity is what drives science forward.`,
      },
    ],
    keyTerms: [
      {
        term: "Biosafety level",
        definition: "A rating (BSL-1 through BSL-4) that indicates the containment level of a lab.",
        analogy: "Like security clearance levels — higher numbers mean stricter safety.",
      },
      {
        term: "Kill switch",
        definition: "A genetic circuit that causes an engineered organism to self-destruct under certain conditions.",
        analogy: "Like a self-destruct button that activates if the organism escapes.",
      },
      {
        term: "Dual-use research",
        definition: "Research that could be used for both beneficial and harmful purposes.",
        analogy: "Like a knife — useful in the kitchen, dangerous in the wrong hands.",
      },
      {
        term: "Gene drive",
        definition: "A genetic system that ensures a modification is inherited by nearly all offspring.",
        analogy: "Like a chain letter that always gets forwarded — the gene spreads through the population.",
      },
      {
        term: "Biocontainment",
        definition: "Strategies to prevent engineered organisms from surviving outside controlled conditions.",
        analogy: "Like putting a fence around a garden so plants cannot spread into the wild.",
      },
      {
        term: "Asilomar Conference",
        definition: "A 1975 meeting where scientists voluntarily established safety guidelines for genetic engineering.",
        analogy: "Like the constitutional convention of bioethics.",
      },
    ],
    quiz: [
      {
        question: "What is a kill switch in synbio?",
        options: [
          "A button that turns off lab equipment",
          "A genetic circuit that causes cell death if the organism escapes",
          "A safety protocol for handling chemicals",
          "A gene that makes organisms grow faster",
        ],
        correctIndex: 1,
      },
      {
        question: "What was significant about the Asilomar Conference?",
        options: [
          "It banned all genetic engineering",
          "Scientists voluntarily paused research to establish safety guidelines",
          "It created CRISPR",
          "It funded the Human Genome Project",
        ],
        correctIndex: 1,
      },
      {
        question: "Why are gene drives controversial?",
        options: [
          "They are too expensive",
          "They only work in bacteria",
          "They spread through wild populations and are essentially irreversible",
          "They require BSL-4 containment",
        ],
        correctIndex: 2,
      },
    ],
  },
];

export function getModulesByTrack(track: string): Module[] {
  return modules.filter((m) => m.track === track);
}

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
