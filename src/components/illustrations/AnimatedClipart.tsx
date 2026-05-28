"use client";

interface AnimatedClipartProps {
  variant?: "light" | "dark";
  density?: "sparse" | "normal" | "dense";
}

const SHAPES = [
  // Circles
  { type: "circle", color: "var(--accent)", size: 40, x: "8%", y: "15%", delay: "0s", animation: "float" },
  { type: "circle", color: "var(--secondary)", size: 24, x: "85%", y: "20%", delay: "1s", animation: "float" },
  { type: "circle", color: "var(--tertiary)", size: 32, x: "70%", y: "70%", delay: "2s", animation: "pulse-grow" },
  // Triangles
  { type: "triangle", color: "var(--quaternary)", size: 28, x: "15%", y: "75%", delay: "0.5s", animation: "spin-slow" },
  { type: "triangle", color: "var(--accent)", size: 20, x: "90%", y: "50%", delay: "1.5s", animation: "float" },
  // Squares
  { type: "square", color: "var(--secondary)", size: 22, x: "45%", y: "10%", delay: "0.8s", animation: "spin-slow" },
  { type: "square", color: "var(--tertiary)", size: 18, x: "30%", y: "85%", delay: "2.5s", animation: "float" },
  // Plus signs
  { type: "plus", color: "var(--quaternary)", size: 24, x: "60%", y: "15%", delay: "1.2s", animation: "pulse-grow" },
  { type: "plus", color: "var(--accent)", size: 20, x: "20%", y: "45%", delay: "0.3s", animation: "spin-slow" },
  // DNA / Bio shapes
  { type: "circle", color: "var(--secondary)", size: 16, x: "75%", y: "40%", delay: "1.8s", animation: "float" },
  { type: "triangle", color: "var(--tertiary)", size: 24, x: "50%", y: "80%", delay: "0.7s", animation: "spin-slow" },
  { type: "square", color: "var(--accent)", size: 14, x: "5%", y: "55%", delay: "2.2s", animation: "float" },
];

function Shape({ type, color, size }: { type: string; color: string; size: number }) {
  switch (type) {
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill={color} opacity="0.6" />
        </svg>
      );
    case "triangle":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
          <polygon points="20,4 36,36 4,36" fill={color} opacity="0.6" />
        </svg>
      );
    case "square":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
          <rect x="6" y="6" width="28" height="28" rx="4" fill={color} opacity="0.6" />
        </svg>
      );
    case "plus":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
          <rect x="16" y="6" width="8" height="28" rx="3" fill={color} opacity="0.6" />
          <rect x="6" y="16" width="28" height="8" rx="3" fill={color} opacity="0.6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AnimatedClipart({ variant = "light", density = "normal" }: AnimatedClipartProps) {
  const count = density === "sparse" ? 5 : density === "dense" ? 12 : 8;
  const shapes = SHAPES.slice(0, count);
  const opacity = variant === "dark" ? "opacity-30" : "opacity-20";

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${opacity}`} aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute animate-${shape.animation}`}
          style={{
            left: shape.x,
            top: shape.y,
            animationDelay: shape.delay,
            animationDuration: shape.animation === "spin-slow" ? "20s" : shape.animation === "pulse-grow" ? "3s" : "4s",
          }}
        >
          <Shape type={shape.type} color={shape.color} size={shape.size} />
        </div>
      ))}
    </div>
  );
}
