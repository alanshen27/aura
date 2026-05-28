# Lab Notebook

## Overview

This notebook documents our daily lab activities, experiments, and observations throughout the project.

---

## Timeline

### Week 1 — Project Planning (Jan 13–17)

- Conducted literature review on mastitis detection methods — surveyed 23 papers
- Identified potential biosensor approaches: SCC-based, PCR, colorimetric
- Set up project management tools (Notion, Slack, GitHub)
- Met with Dr. Nguyen to discuss project scope and feasibility
- Created initial Gantt chart with milestones

### Week 2 — Design Phase (Jan 20–24)

- Reviewed existing BioBrick parts for biomarker detection (iGEM Registry)
- Compared promoter strengths: J23100 vs J23119 series
- Consulted with advisors on construct feasibility
- Finalized initial biosensor design: lacZ reporter + SCC-responsive promoter
- Ordered primers and reagents from IDT

### Week 3 — Cloning & Assembly (Jan 27–31)

- Received primer shipment (12 oligos)
- PCR amplification of target sequences — gel electrophoresis confirmed expected bands at 1.2kb and 0.8kb
- Gibson Assembly of two-part construct
- Transformation into DH5α competent cells
- Plated on LB+Amp — incubated overnight at 37°C

### Week 4 — Verification (Feb 3–7)

- Colony PCR of 8 transformants — 5/8 showed expected band pattern
- Miniprep of positive colonies (used Monarch kit)
- Sent for Sanger sequencing (Azenta)
- Sequencing results: 3/5 colonies confirmed correct insert
- Selected colony #3 as working stock, made glycerol stocks

### Week 5 — Characterization (Feb 10–14)

- Grew overnight cultures of confirmed construct
- Measured growth curves (OD600) over 12 hours in plate reader
- Induced expression with varying IPTG concentrations (0, 0.1, 0.5, 1.0 mM)
- Ran ONPG assay for beta-galactosidase activity
- Results: dose-dependent response observed — promising!

### Week 6 — Sensitivity Testing (Feb 17–21)

- Prepared simulated milk samples with known SCC levels
- Tested biosensor response at 100K, 200K, 500K, 1M cells/mL
- Positive signal detectable at 200K cells/mL threshold
- False positive rate: 2/30 negative controls (6.7%)
- Meeting with Marcus — discussed detection threshold requirements from farmer interviews

### Week 7 — Optimization (Feb 24–28)

- Added RBS variants (B0034, B0032) to tune expression levels
- Compared reporter intensity with different RBS combinations
- B0034 gave strongest and most consistent signal
- Stability testing: construct stable after 50+ generations (no plasmid loss detected)
- Updated wiki with engineering cycle documentation

### Week 8 — Human Practices Integration (Mar 3–7)

- Incorporated feedback from veterinarian Dr. Huang: need faster readout time
- Redesigned assay protocol to reduce incubation from 4h to 2h
- Added chromogenic substrate (X-gal) for visual color change detection
- Color visible to naked eye within 90 minutes — farmers don't need equipment!
- Presented preliminary results at school science symposium

---

## Protocols

Our experimental protocols are documented in the [Engineering](/project/engineering) section.

Key protocols used:
- Gibson Assembly (NEB HiFi, 50°C, 60 min)
- Competent cell transformation (heat shock, 42°C, 45 sec)
- Colony PCR (Taq, 30 cycles)
- ONPG beta-galactosidase assay
- Plate reader growth curves (OD600, 37°C, shaking)

---

> This notebook is updated regularly throughout the project season. Raw data and gel images are stored in our team Google Drive.
