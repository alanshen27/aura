"use client";

interface AnimatedClipartProps {
  variant?: "dark" | "light";
  density?: "sparse" | "normal" | "dense";
  className?: string;
}

export default function AnimatedClipart({
  variant = "dark",
  density = "normal",
  className = "",
}: AnimatedClipartProps) {
  const strokeColor = variant === "dark" ? "white" : "var(--charcoal)";
  const accentColor = "var(--accent)";
  const greenColor = "var(--pop-green)";
  const blueColor = "var(--pop-blue)";
  const purpleColor = "var(--pop-purple)";
  const opacity = variant === "dark" ? "0.08" : "0.06";
  const accentOpacity = variant === "dark" ? "0.15" : "0.1";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <style>
        {`
          @keyframes drift-1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -30px) rotate(5deg); }
            50% { transform: translate(-10px, -50px) rotate(-3deg); }
            75% { transform: translate(30px, -20px) rotate(2deg); }
          }
          @keyframes drift-2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(-25px, -20px) rotate(-4deg); }
            66% { transform: translate(15px, -35px) rotate(6deg); }
          }
          @keyframes drift-3 {
            0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
            50% { transform: translate(10px, -15px) rotate(180deg) scale(1.1); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.05; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.2); }
          }
          @keyframes wave {
            0%, 100% { d: path("M0,50 Q25,30 50,50 T100,50"); }
            50% { d: path("M0,50 Q25,70 50,50 T100,50"); }
          }
        `}
      </style>

      {/* Floating DNA double helix — top left */}
      <svg
        className="absolute -left-4 top-[10%]"
        style={{ animation: "drift-1 18s ease-in-out infinite", opacity }}
        width="160" height="280" viewBox="0 0 160 280" fill="none"
      >
        <path d="M30 10 C50 50, 130 50, 130 80 C130 110, 50 110, 30 140 C30 170, 130 170, 130 200 C130 230, 50 230, 30 260" stroke={strokeColor} strokeWidth="2" />
        <path d="M130 10 C110 50, 30 50, 30 80 C30 110, 110 110, 130 140 C130 170, 30 170, 30 200 C30 230, 110 230, 130 260" stroke={accentColor} strokeWidth="2" opacity="0.6" />
        {[30, 55, 80, 110, 140, 170, 200, 230].map((y, i) => (
          <line key={i} x1="45" y1={y} x2="115" y2={y} stroke={strokeColor} strokeWidth="1" opacity="0.15" />
        ))}
      </svg>

      {/* Spinning plasmid ring — top right */}
      <svg
        className="absolute -right-8 top-[5%]"
        style={{ animation: "spin-slow 40s linear infinite", opacity: accentOpacity }}
        width="200" height="200" viewBox="0 0 200 200" fill="none"
      >
        <circle cx="100" cy="100" r="80" stroke={strokeColor} strokeWidth="2" strokeDasharray="12 6" />
        <circle cx="100" cy="100" r="60" stroke={accentColor} strokeWidth="1.5" strokeDasharray="8 8" opacity="0.5" />
        <path d="M100 20 A80 80 0 0 1 175 70" stroke={greenColor} strokeWidth="4" strokeLinecap="round" />
        <path d="M100 180 A80 80 0 0 1 25 130" stroke={blueColor} strokeWidth="4" strokeLinecap="round" />
        <circle cx="100" cy="20" r="4" fill={greenColor} />
        <circle cx="100" cy="180" r="4" fill={blueColor} />
      </svg>

      {/* Floating bacterium — center left */}
      <svg
        className="absolute left-[8%] top-[45%]"
        style={{ animation: "drift-2 22s ease-in-out infinite", opacity: accentOpacity }}
        width="100" height="60" viewBox="0 0 100 60" fill="none"
      >
        <ellipse cx="50" cy="30" rx="35" ry="18" stroke={strokeColor} strokeWidth="2" />
        <ellipse cx="50" cy="30" rx="25" ry="10" stroke={accentColor} strokeWidth="1" opacity="0.4" />
        {/* Flagella */}
        <path d="M85 30 C95 25, 90 35, 100 30" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <path d="M85 28 C92 20, 88 38, 98 25" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.5" />
        {/* Pili */}
        <line x1="20" y1="20" x2="8" y2="15" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
        <line x1="22" y1="38" x2="10" y2="42" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
      </svg>

      {/* Pulsing molecules — scattered */}
      <svg
        className="absolute right-[15%] top-[55%]"
        style={{ animation: "pulse-glow 4s ease-in-out infinite", opacity: accentOpacity }}
        width="80" height="80" viewBox="0 0 80 80" fill="none"
      >
        <circle cx="40" cy="40" r="15" fill={accentColor} opacity="0.3" />
        <circle cx="40" cy="40" r="8" fill={accentColor} opacity="0.5" />
        <circle cx="40" cy="40" r="3" fill={accentColor} />
        <line x1="40" y1="25" x2="40" y2="10" stroke={accentColor} strokeWidth="1.5" />
        <line x1="55" y1="40" x2="70" y2="40" stroke={greenColor} strokeWidth="1.5" />
        <line x1="40" y1="55" x2="40" y2="70" stroke={blueColor} strokeWidth="1.5" />
        <line x1="25" y1="40" x2="10" y2="40" stroke={purpleColor} strokeWidth="1.5" />
        <circle cx="40" cy="10" r="3" fill={accentColor} />
        <circle cx="70" cy="40" r="3" fill={greenColor} />
        <circle cx="40" cy="70" r="3" fill={blueColor} />
        <circle cx="10" cy="40" r="3" fill={purpleColor} />
      </svg>

      {density !== "sparse" && (
        <>
          {/* Lab flask — bottom left */}
          <svg
            className="absolute left-[20%] bottom-[10%]"
            style={{ animation: "drift-3 25s ease-in-out infinite", opacity }}
            width="80" height="100" viewBox="0 0 80 100" fill="none"
          >
            <path d="M30 10 L30 40 L10 80 C8 85, 12 90, 18 90 L62 90 C68 90, 72 85, 70 80 L50 40 L50 10" stroke={strokeColor} strokeWidth="2" />
            <line x1="28" y1="10" x2="52" y2="10" stroke={strokeColor} strokeWidth="2" />
            <ellipse cx="40" cy="70" rx="20" ry="8" fill={greenColor} opacity="0.2" />
            {/* Bubbles */}
            <circle cx="35" cy="60" r="3" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
            <circle cx="45" cy="55" r="2" stroke={strokeColor} strokeWidth="1" opacity="0.3" />
            <circle cx="38" cy="50" r="1.5" stroke={strokeColor} strokeWidth="1" opacity="0.2" />
          </svg>

          {/* Gene circuit arrows — bottom right */}
          <svg
            className="absolute right-[5%] bottom-[20%]"
            style={{ animation: "drift-1 28s ease-in-out infinite 3s", opacity }}
            width="140" height="80" viewBox="0 0 140 80" fill="none"
          >
            <rect x="5" y="25" width="30" height="30" rx="4" stroke={greenColor} strokeWidth="2" />
            <text x="20" y="44" textAnchor="middle" fill={greenColor} fontSize="8" fontFamily="monospace">P</text>
            <line x1="35" y1="40" x2="50" y2="40" stroke={strokeColor} strokeWidth="1.5" markerEnd="url(#arr)" />
            <rect x="50" y="25" width="30" height="30" rx="4" stroke={blueColor} strokeWidth="2" />
            <text x="65" y="44" textAnchor="middle" fill={blueColor} fontSize="8" fontFamily="monospace">R</text>
            <line x1="80" y1="40" x2="95" y2="40" stroke={strokeColor} strokeWidth="1.5" />
            <rect x="95" y="25" width="30" height="30" rx="4" stroke={accentColor} strokeWidth="2" />
            <text x="110" y="44" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace">G</text>
            <defs>
              <marker id="arr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                <path d="M0 0 L6 2 L0 4" fill={strokeColor} />
              </marker>
            </defs>
          </svg>
        </>
      )}

      {density === "dense" && (
        <>
          {/* Extra: microscope */}
          <svg
            className="absolute right-[30%] top-[15%]"
            style={{ animation: "drift-2 20s ease-in-out infinite 2s", opacity }}
            width="70" height="90" viewBox="0 0 70 90" fill="none"
          >
            <rect x="25" y="5" width="20" height="45" rx="3" stroke={strokeColor} strokeWidth="2" />
            <circle cx="35" cy="60" r="12" stroke={strokeColor} strokeWidth="2" />
            <line x1="35" y1="72" x2="35" y2="85" stroke={strokeColor} strokeWidth="2" />
            <line x1="20" y1="85" x2="50" y2="85" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <circle cx="35" cy="60" r="6" stroke={accentColor} strokeWidth="1" opacity="0.5" />
          </svg>

          {/* Extra: protein structure */}
          <svg
            className="absolute left-[40%] bottom-[5%]"
            style={{ animation: "drift-3 30s ease-in-out infinite 4s", opacity: accentOpacity }}
            width="90" height="70" viewBox="0 0 90 70" fill="none"
          >
            <path d="M10 35 Q25 10, 45 35 Q65 60, 80 35" stroke={purpleColor} strokeWidth="2.5" fill="none" />
            <path d="M15 35 Q30 55, 50 35 Q70 15, 85 35" stroke={blueColor} strokeWidth="2" fill="none" opacity="0.5" />
            <circle cx="10" cy="35" r="4" fill={purpleColor} opacity="0.4" />
            <circle cx="45" cy="35" r="4" fill={accentColor} opacity="0.4" />
            <circle cx="80" cy="35" r="4" fill={greenColor} opacity="0.4" />
          </svg>
        </>
      )}
    </div>
  );
}
