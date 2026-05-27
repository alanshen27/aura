"use client";

interface ProteinProps {
  className?: string;
  size?: number;
}

export default function Protein({ className = "", size = 120 }: ProteinProps) {
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
          @keyframes protein-fold {
            0%, 100% { transform: scale(1); transform-origin: 60px 60px; }
            50% { transform: scale(1.02); transform-origin: 60px 60px; }
          }
          .protein-body { animation: protein-fold 4s ease-in-out infinite; }
          @keyframes helix-shimmer {
            0%, 100% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -40; }
          }
          .alpha-helix { animation: helix-shimmer 6s linear infinite; }
        `}
      </style>

      {/* Alpha helix region */}
      <path
        className="alpha-helix"
        d="M25 70 C30 55, 40 55, 40 65 C40 75, 50 75, 50 65 C50 55, 60 55, 60 65 C60 75, 70 75, 70 65 C70 55, 80 55, 80 65"
        stroke="var(--accent, #c4838e)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="8 4"
      />

      {/* Beta sheet regions */}
      <g className="protein-body">
        <path
          d="M30 35 L50 30 L55 45 L35 50 Z"
          fill="var(--charcoal, #333)"
          fillOpacity="0.12"
          stroke="var(--charcoal, #333)"
          strokeWidth="1"
        />
        <path
          d="M55 25 L75 22 L78 37 L58 40 Z"
          fill="var(--charcoal, #333)"
          fillOpacity="0.08"
          stroke="var(--charcoal, #333)"
          strokeWidth="1"
        />
        <path
          d="M78 30 L92 35 L88 50 L74 45 Z"
          fill="var(--accent, #c4838e)"
          fillOpacity="0.12"
          stroke="var(--accent, #c4838e)"
          strokeWidth="1"
        />
      </g>

      {/* Connecting loops */}
      <path
        d="M50 38 Q52 20, 60 30"
        stroke="var(--charcoal, #333)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M75 35 Q82 22, 85 38"
        stroke="var(--charcoal, #333)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Active site */}
      <circle
        cx="60"
        cy="65"
        r="8"
        stroke="var(--accent, #c4838e)"
        strokeWidth="1.5"
        strokeDasharray="3 2"
        fill="var(--accent, #c4838e)"
        fillOpacity="0.1"
      />
      <text x="60" y="68" textAnchor="middle" fontSize="6" fill="var(--accent-dark, #a66872)" opacity="0.6">active</text>

      {/* Amino acid chain entering */}
      <path
        d="M15 80 Q20 85, 25 70"
        stroke="var(--charcoal, #333)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Amino acid chain exiting */}
      <path
        d="M80 65 Q90 60, 95 75 Q100 85, 108 80"
        stroke="var(--charcoal, #333)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Amino acid beads */}
      <circle cx="15" cy="80" r="3" fill="var(--accent, #c4838e)" opacity="0.4" />
      <circle cx="108" cy="80" r="3" fill="var(--charcoal, #333)" opacity="0.4" />

      {/* Disulfide bond */}
      <line x1="42" y1="48" x2="72" y2="42" stroke="var(--accent, #c4838e)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
      <text x="57" y="42" textAnchor="middle" fontSize="5" fill="var(--accent, #c4838e)" opacity="0.4">S—S</text>
    </svg>
  );
}
