"use client";

interface DNAHelixProps {
  className?: string;
  size?: number;
}

export default function DNAHelix({ className = "", size = 120 }: DNAHelixProps) {
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
          @keyframes dna-spin {
            0% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0); }
          }
          .dna-strand-l { animation: dna-spin 3s ease-in-out infinite; }
          .dna-strand-r { animation: dna-spin 3s ease-in-out infinite 1.5s; }
          @keyframes rung-pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .dna-rung { animation: rung-pulse 2.5s ease-in-out infinite; }
        `}
      </style>

      {/* Left backbone */}
      <path
        className="dna-strand-l"
        d="M30 10 C30 30, 90 30, 90 50 C90 70, 30 70, 30 90 C30 100, 50 110, 60 110"
        stroke="var(--charcoal, #333)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right backbone */}
      <path
        className="dna-strand-r"
        d="M90 10 C90 30, 30 30, 30 50 C30 70, 90 70, 90 90 C90 100, 70 110, 60 110"
        stroke="var(--accent, #c4838e)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Rungs */}
      <line className="dna-rung" x1="38" y1="18" x2="82" y2="18" stroke="var(--charcoal, #333)" strokeWidth="1.5" opacity="0.4" />
      <line className="dna-rung" x1="55" y1="30" x2="65" y2="30" stroke="var(--accent, #c4838e)" strokeWidth="1.5" opacity="0.6" style={{ animationDelay: "0.3s" }} />
      <line className="dna-rung" x1="42" y1="42" x2="78" y2="42" stroke="var(--charcoal, #333)" strokeWidth="1.5" opacity="0.4" style={{ animationDelay: "0.6s" }} />
      <line className="dna-rung" x1="55" y1="50" x2="65" y2="50" stroke="var(--accent, #c4838e)" strokeWidth="1.5" opacity="0.6" style={{ animationDelay: "0.9s" }} />
      <line className="dna-rung" x1="38" y1="62" x2="82" y2="62" stroke="var(--charcoal, #333)" strokeWidth="1.5" opacity="0.4" style={{ animationDelay: "1.2s" }} />
      <line className="dna-rung" x1="55" y1="72" x2="65" y2="72" stroke="var(--accent, #c4838e)" strokeWidth="1.5" opacity="0.6" style={{ animationDelay: "1.5s" }} />
      <line className="dna-rung" x1="42" y1="84" x2="78" y2="84" stroke="var(--charcoal, #333)" strokeWidth="1.5" opacity="0.4" style={{ animationDelay: "1.8s" }} />
      <line className="dna-rung" x1="52" y1="95" x2="68" y2="95" stroke="var(--accent, #c4838e)" strokeWidth="1.5" opacity="0.6" style={{ animationDelay: "2.1s" }} />

      {/* Base pair dots */}
      <circle cx="38" cy="18" r="3" fill="var(--accent, #c4838e)" opacity="0.7" />
      <circle cx="82" cy="18" r="3" fill="var(--charcoal, #333)" opacity="0.7" />
      <circle cx="42" cy="42" r="3" fill="var(--accent, #c4838e)" opacity="0.7" />
      <circle cx="78" cy="42" r="3" fill="var(--charcoal, #333)" opacity="0.7" />
      <circle cx="38" cy="62" r="3" fill="var(--charcoal, #333)" opacity="0.7" />
      <circle cx="82" cy="62" r="3" fill="var(--accent, #c4838e)" opacity="0.7" />
      <circle cx="42" cy="84" r="3" fill="var(--charcoal, #333)" opacity="0.7" />
      <circle cx="78" cy="84" r="3" fill="var(--accent, #c4838e)" opacity="0.7" />
    </svg>
  );
}
