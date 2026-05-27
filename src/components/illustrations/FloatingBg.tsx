"use client";

interface FloatingBgProps {
  className?: string;
}

export default function FloatingBg({ className = "" }: FloatingBgProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, -15px) rotate(2deg); }
            50% { transform: translate(-5px, -25px) rotate(-1deg); }
            75% { transform: translate(15px, -10px) rotate(1deg); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(-12px, -18px) rotate(-2deg); }
            66% { transform: translate(8px, -8px) rotate(3deg); }
          }
        `}
      </style>

      {/* DNA-like helix fragments floating */}
      <svg
        className="absolute -left-8 top-1/4 opacity-[0.04]"
        style={{ animation: "float-slow 20s ease-in-out infinite" }}
        width="200" height="200" viewBox="0 0 200 200" fill="none"
      >
        <path d="M40 20 C60 60, 160 60, 160 100 C160 140, 60 140, 40 180" stroke="var(--charcoal)" strokeWidth="3" />
        <path d="M160 20 C140 60, 40 60, 40 100 C40 140, 140 140, 160 180" stroke="var(--accent)" strokeWidth="3" />
        <line x1="60" y1="38" x2="140" y2="38" stroke="var(--charcoal)" strokeWidth="1.5" opacity="0.3" />
        <line x1="80" y1="60" x2="120" y2="60" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
        <line x1="60" y1="100" x2="140" y2="100" stroke="var(--charcoal)" strokeWidth="1.5" opacity="0.3" />
        <line x1="80" y1="140" x2="120" y2="140" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
      </svg>

      {/* Plasmid ring */}
      <svg
        className="absolute -right-12 top-1/3 opacity-[0.03]"
        style={{ animation: "float-medium 25s ease-in-out infinite" }}
        width="180" height="180" viewBox="0 0 180 180" fill="none"
      >
        <circle cx="90" cy="90" r="70" stroke="var(--charcoal)" strokeWidth="3" strokeDasharray="8 4" />
        <path d="M90 20 A70 70 0 0 1 150 60" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />
        <path d="M20 90 A70 70 0 0 0 60 150" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />
      </svg>

      {/* Grid dots */}
      <svg
        className="absolute bottom-1/4 left-1/4 opacity-[0.03]"
        style={{ animation: "float-slow 30s ease-in-out infinite 5s" }}
        width="120" height="120" viewBox="0 0 120 120" fill="none"
      >
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={10 + col * 20}
              cy={10 + row * 20}
              r="2"
              fill={(row + col) % 3 === 0 ? "var(--accent)" : "var(--charcoal)"}
            />
          ))
        )}
      </svg>
    </div>
  );
}
