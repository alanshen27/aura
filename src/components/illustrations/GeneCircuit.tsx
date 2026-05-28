"use client";

interface GeneCircuitProps {
  className?: string;
  size?: number;
}

export default function GeneCircuit({ className = "", size = 120 }: GeneCircuitProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <style>
        {`
          @keyframes signal-flow {
            0% { stroke-dashoffset: 20; }
            100% { stroke-dashoffset: 0; }
          }
          .signal-line { animation: signal-flow 2s linear infinite; stroke-dasharray: 6 4; }
          @keyframes node-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .circuit-node { animation: node-pulse 2s ease-in-out infinite; }
        `}
      </style>

      {/* Promoter arrow */}
      <rect x="10" y="50" width="22" height="14" rx="2" stroke="var(--charcoal, #333)" strokeWidth="1.5" fill="var(--charcoal, #333)" fillOpacity="0.08" />
      <path d="M32 57 L38 57 L36 53 M38 57 L36 61" stroke="var(--charcoal, #333)" strokeWidth="1.5" strokeLinecap="round" />
      <text x="21" y="60" textAnchor="middle" fontSize="5.5" fill="var(--charcoal, #333)" opacity="0.6">Prom</text>

      {/* RBS */}
      <circle className="circuit-node" cx="50" cy="57" r="7" stroke="var(--accent, #c4838e)" strokeWidth="1.5" fill="var(--accent, #c4838e)" fillOpacity="0.15" style={{ transformOrigin: "50px 57px" }} />
      <text x="50" y="60" textAnchor="middle" fontSize="5" fill="var(--accent-dark, #a66872)">RBS</text>

      {/* Signal line: promoter to RBS */}
      <line className="signal-line" x1="38" y1="57" x2="43" y2="57" stroke="var(--charcoal, #333)" strokeWidth="1" />

      {/* Gene/CDS */}
      <rect x="62" y="47" width="28" height="20" rx="3" stroke="var(--accent, #c4838e)" strokeWidth="1.5" fill="var(--accent, #c4838e)" fillOpacity="0.12" />
      <text x="76" y="60" textAnchor="middle" fontSize="5.5" fill="var(--accent-dark, #a66872)">GFP</text>

      {/* Signal line: RBS to gene */}
      <line className="signal-line" x1="57" y1="57" x2="62" y2="57" stroke="var(--accent, #c4838e)" strokeWidth="1" />

      {/* Terminator */}
      <line x1="96" y1="47" x2="96" y2="67" stroke="var(--charcoal, #333)" strokeWidth="2" />
      <line x1="92" y1="47" x2="100" y2="47" stroke="var(--charcoal, #333)" strokeWidth="2" strokeLinecap="round" />

      {/* Signal line: gene to terminator */}
      <line className="signal-line" x1="90" y1="57" x2="94" y2="57" stroke="var(--charcoal, #333)" strokeWidth="1" />

      {/* Output: protein production arrow going down */}
      <path
        className="signal-line"
        d="M76 67 L76 85"
        stroke="var(--accent, #c4838e)"
        strokeWidth="1.5"
      />
      <path d="M73 82 L76 88 L79 82" stroke="var(--accent, #c4838e)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Protein output */}
      <circle className="circuit-node" cx="76" cy="97" r="9" stroke="var(--accent, #c4838e)" strokeWidth="1.5" fill="var(--accent, #c4838e)" fillOpacity="0.1" style={{ transformOrigin: "76px 97px", animationDelay: "1s" }} />
      <text x="76" y="100" textAnchor="middle" fontSize="5.5" fill="var(--accent-dark, #a66872)">GFP</text>

      {/* Repressor feedback loop */}
      <path
        className="signal-line"
        d="M76 106 Q76 115, 21 115 Q10 115, 10 100 L10 64"
        stroke="var(--charcoal, #333)"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      <path d="M8 68 L10 64 L12 68" stroke="var(--charcoal, #333)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Label */}
      <text x="60" y="28" textAnchor="middle" fontSize="7" fill="var(--charcoal, #333)" opacity="0.35" letterSpacing="1">GENE CIRCUIT</text>
      <line x1="20" y1="32" x2="100" y2="32" stroke="var(--charcoal, #333)" strokeWidth="0.5" opacity="0.1" />
    </svg>
  );
}
