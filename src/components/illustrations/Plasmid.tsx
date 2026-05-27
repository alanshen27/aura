"use client";

interface PlasmidProps {
  className?: string;
  size?: number;
}

export default function Plasmid({ className = "", size = 120 }: PlasmidProps) {
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
          @keyframes plasmid-rotate {
            0% { transform: rotate(0deg); transform-origin: 60px 60px; }
            100% { transform: rotate(360deg); transform-origin: 60px 60px; }
          }
          .plasmid-ring { animation: plasmid-rotate 20s linear infinite; }
          @keyframes gene-glow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .gene-segment { animation: gene-glow 2s ease-in-out infinite; }
        `}
      </style>

      {/* Outer ring */}
      <circle
        className="plasmid-ring"
        cx="60"
        cy="60"
        r="42"
        stroke="var(--charcoal, #333)"
        strokeWidth="3"
        strokeDasharray="6 3"
        fill="none"
      />

      {/* Inner ring */}
      <circle
        cx="60"
        cy="60"
        r="34"
        stroke="var(--charcoal, #333)"
        strokeWidth="1"
        opacity="0.2"
        fill="none"
      />

      {/* Gene segments on the ring */}
      <path
        className="gene-segment"
        d="M60 18 A42 42 0 0 1 95 38"
        stroke="var(--accent, #c4838e)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        className="gene-segment"
        d="M95 82 A42 42 0 0 1 60 102"
        stroke="var(--accent, #c4838e)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        style={{ animationDelay: "0.7s" }}
      />
      <path
        className="gene-segment"
        d="M25 38 A42 42 0 0 1 38 22"
        stroke="var(--accent, #c4838e)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        style={{ animationDelay: "1.4s" }}
      />

      {/* Origin of replication marker */}
      <circle cx="60" cy="18" r="4" fill="var(--charcoal, #333)" />
      <text x="60" y="12" textAnchor="middle" fontSize="7" fill="var(--charcoal, #333)" opacity="0.6">ori</text>

      {/* Resistance gene label */}
      <text x="97" y="62" textAnchor="start" fontSize="7" fill="var(--accent, #c4838e)" opacity="0.7">amp</text>

      {/* Arrow showing direction */}
      <path
        d="M40 100 L35 95 M40 100 L35 105"
        stroke="var(--charcoal, #333)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Center label */}
      <text x="60" y="58" textAnchor="middle" fontSize="8" fill="var(--charcoal, #333)" opacity="0.4">pSB1C3</text>
      <text x="60" y="68" textAnchor="middle" fontSize="6" fill="var(--muted, #7a7672)" opacity="0.4">2070 bp</text>
    </svg>
  );
}
