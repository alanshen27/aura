"use client";

interface PetriDishProps {
  className?: string;
  size?: number;
}

export default function PetriDish({ className = "", size = 120 }: PetriDishProps) {
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
          @keyframes colony-grow {
            0% { r: 0; opacity: 0; }
            50% { opacity: 0.7; }
            100% { opacity: 0.5; }
          }
          .colony { animation: colony-grow 3s ease-out forwards; }
          @keyframes dish-glow {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.25; }
          }
          .dish-agar { animation: dish-glow 5s ease-in-out infinite; }
        `}
      </style>

      {/* Dish rim */}
      <ellipse
        cx="60"
        cy="60"
        rx="50"
        ry="40"
        stroke="var(--charcoal, #333)"
        strokeWidth="2"
        fill="none"
      />

      {/* Agar surface */}
      <ellipse
        className="dish-agar"
        cx="60"
        cy="60"
        rx="46"
        ry="36"
        fill="var(--accent-light, #f2dfe2)"
        stroke="var(--border, #ccc7c0)"
        strokeWidth="0.5"
      />

      {/* Lid edge (3D effect) */}
      <path
        d="M10 55 Q10 48, 20 43"
        stroke="var(--charcoal, #333)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M100 43 Q110 48, 110 55"
        stroke="var(--charcoal, #333)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
      />

      {/* Bacterial colonies */}
      <circle className="colony" cx="40" cy="50" r="6" fill="var(--accent, #c4838e)" style={{ animationDelay: "0.2s" }} />
      <circle className="colony" cx="72" cy="55" r="8" fill="var(--accent, #c4838e)" style={{ animationDelay: "0.5s" }} />
      <circle className="colony" cx="55" cy="68" r="5" fill="var(--accent, #c4838e)" style={{ animationDelay: "0.8s" }} />
      <circle className="colony" cx="80" cy="65" r="4" fill="var(--charcoal, #333)" opacity="0.3" style={{ animationDelay: "1.1s" }} />
      <circle className="colony" cx="35" cy="62" r="3" fill="var(--accent, #c4838e)" style={{ animationDelay: "1.4s" }} />
      <circle className="colony" cx="65" cy="48" r="4" fill="var(--charcoal, #333)" opacity="0.25" style={{ animationDelay: "1.7s" }} />
      <circle className="colony" cx="50" cy="55" r="3.5" fill="var(--accent, #c4838e)" style={{ animationDelay: "2s" }} />
      <circle className="colony" cx="88" cy="57" r="3" fill="var(--accent, #c4838e)" style={{ animationDelay: "2.3s" }} />

      {/* Streaking lines hint */}
      <path
        d="M25 48 Q40 45, 55 50 Q70 55, 85 48"
        stroke="var(--charcoal, #333)"
        strokeWidth="0.5"
        fill="none"
        opacity="0.1"
      />

      {/* Glass reflection */}
      <ellipse cx="45" cy="45" rx="12" ry="4" fill="white" opacity="0.15" transform="rotate(-15 45 45)" />
    </svg>
  );
}
