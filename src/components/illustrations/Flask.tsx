"use client";

interface FlaskProps {
  className?: string;
  size?: number;
}

export default function Flask({ className = "", size = 120 }: FlaskProps) {
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
          @keyframes bubble-rise {
            0% { transform: translateY(0); opacity: 0.6; }
            100% { transform: translateY(-20px); opacity: 0; }
          }
          .bubble { animation: bubble-rise 2.5s ease-out infinite; }
          @keyframes liquid-wave {
            0%, 100% { d: path("M28 78 Q40 74, 52 78 Q64 82, 76 78 Q88 74, 92 78"); }
            50% { d: path("M28 78 Q40 82, 52 78 Q64 74, 76 78 Q88 82, 92 78"); }
          }
          @keyframes liquid-shimmer {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.35; }
          }
          .liquid-shimmer { animation: liquid-shimmer 3s ease-in-out infinite; }
        `}
      </style>

      {/* Flask body - Erlenmeyer shape */}
      <path
        d="M48 15 L48 50 L24 95 Q22 100, 28 102 L92 102 Q98 100, 96 95 L72 50 L72 15"
        stroke="var(--charcoal, #333)"
        strokeWidth="2"
        fill="none"
      />

      {/* Flask neck */}
      <line x1="48" y1="15" x2="72" y2="15" stroke="var(--charcoal, #333)" strokeWidth="2" />
      <line x1="46" y1="12" x2="74" y2="12" stroke="var(--charcoal, #333)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Liquid fill */}
      <path
        d="M32 82 L28 95 Q22 100, 28 102 L92 102 Q98 100, 96 95 L88 82 Z"
        fill="var(--accent, #c4838e)"
        fillOpacity="0.25"
      />

      {/* Liquid surface wave */}
      <path
        d="M32 82 Q45 78, 60 82 Q75 86, 88 82"
        stroke="var(--accent, #c4838e)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />

      {/* Liquid shimmer */}
      <path
        className="liquid-shimmer"
        d="M40 90 Q50 88, 60 90 Q70 92, 80 90"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />

      {/* Bubbles */}
      <circle className="bubble" cx="50" cy="85" r="2" fill="var(--accent, #c4838e)" opacity="0.4" />
      <circle className="bubble" cx="65" cy="88" r="1.5" fill="var(--accent, #c4838e)" opacity="0.3" style={{ animationDelay: "0.8s" }} />
      <circle className="bubble" cx="55" cy="90" r="2.5" fill="var(--accent, #c4838e)" opacity="0.3" style={{ animationDelay: "1.6s" }} />
      <circle className="bubble" cx="72" cy="82" r="1.5" fill="var(--accent, #c4838e)" opacity="0.4" style={{ animationDelay: "2s" }} />

      {/* Measurement lines */}
      <line x1="30" y1="95" x2="35" y2="95" stroke="var(--charcoal, #333)" strokeWidth="0.5" opacity="0.3" />
      <line x1="33" y1="90" x2="37" y2="90" stroke="var(--charcoal, #333)" strokeWidth="0.5" opacity="0.3" />
      <line x1="36" y1="85" x2="40" y2="85" stroke="var(--charcoal, #333)" strokeWidth="0.5" opacity="0.3" />

      {/* Glass reflection */}
      <line x1="40" y1="30" x2="42" y2="55" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}
