"use client";

interface CellProps {
  className?: string;
  size?: number;
}

export default function Cell({ className = "", size = 120 }: CellProps) {
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
          @keyframes cell-breathe {
            0%, 100% { transform: scale(1); transform-origin: 60px 60px; }
            50% { transform: scale(1.03); transform-origin: 60px 60px; }
          }
          .cell-membrane { animation: cell-breathe 4s ease-in-out infinite; }
          @keyframes organelle-float {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(2px, -1px); }
            66% { transform: translate(-1px, 2px); }
          }
          .organelle { animation: organelle-float 5s ease-in-out infinite; }
          @keyframes ribosome-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          .ribosome { animation: ribosome-bounce 1.5s ease-in-out infinite; }
        `}
      </style>

      {/* Cell membrane */}
      <ellipse
        className="cell-membrane"
        cx="60"
        cy="60"
        rx="48"
        ry="42"
        stroke="var(--charcoal, #333)"
        strokeWidth="2.5"
        fill="var(--accent-light, #f2dfe2)"
        fillOpacity="0.3"
      />

      {/* Cell wall (outer) */}
      <ellipse
        className="cell-membrane"
        cx="60"
        cy="60"
        rx="52"
        ry="46"
        stroke="var(--charcoal, #333)"
        strokeWidth="1"
        strokeDasharray="4 2"
        fill="none"
        opacity="0.3"
      />

      {/* Nucleus */}
      <circle
        className="organelle"
        cx="55"
        cy="55"
        r="16"
        stroke="var(--charcoal, #333)"
        strokeWidth="1.5"
        fill="var(--accent, #c4838e)"
        fillOpacity="0.15"
      />
      {/* Nucleolus */}
      <circle
        className="organelle"
        cx="52"
        cy="52"
        r="5"
        fill="var(--accent, #c4838e)"
        fillOpacity="0.3"
      />

      {/* Chromosomal DNA squiggle inside nucleus */}
      <path
        className="organelle"
        d="M48 60 Q52 56, 56 60 Q60 64, 62 58"
        stroke="var(--charcoal, #333)"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />

      {/* Ribosomes */}
      <circle className="ribosome" cx="80" cy="45" r="2.5" fill="var(--charcoal, #333)" opacity="0.5" />
      <circle className="ribosome" cx="76" cy="52" r="2" fill="var(--charcoal, #333)" opacity="0.4" style={{ animationDelay: "0.3s" }} />
      <circle className="ribosome" cx="85" cy="55" r="2.5" fill="var(--charcoal, #333)" opacity="0.5" style={{ animationDelay: "0.6s" }} />
      <circle className="ribosome" cx="40" cy="75" r="2" fill="var(--charcoal, #333)" opacity="0.4" style={{ animationDelay: "0.9s" }} />
      <circle className="ribosome" cx="70" cy="78" r="2.5" fill="var(--charcoal, #333)" opacity="0.5" style={{ animationDelay: "1.2s" }} />

      {/* Endoplasmic reticulum */}
      <path
        className="organelle"
        d="M72 60 C76 58, 80 62, 84 60 C88 58, 90 64, 92 62"
        stroke="var(--accent, #c4838e)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        style={{ animationDelay: "1s" }}
      />
      <path
        className="organelle"
        d="M72 66 C76 64, 80 68, 84 66 C88 64, 90 70, 92 68"
        stroke="var(--accent, #c4838e)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Mitochondria */}
      <ellipse
        className="organelle"
        cx="38"
        cy="42"
        rx="8"
        ry="5"
        stroke="var(--charcoal, #333)"
        strokeWidth="1.5"
        fill="var(--charcoal, #333)"
        fillOpacity="0.08"
        style={{ animationDelay: "2s" }}
      />
      <path
        className="organelle"
        d="M32 42 Q35 39, 38 42 Q41 45, 44 42"
        stroke="var(--charcoal, #333)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
        style={{ animationDelay: "2s" }}
      />

      {/* Flagellum */}
      <path
        d="M108 60 Q114 55, 118 60 Q114 65, 108 60"
        stroke="var(--charcoal, #333)"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
