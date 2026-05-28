interface SquiggleProps {
  color?: string;
  className?: string;
}

export default function Squiggle({ color = "var(--accent)", className = "" }: SquiggleProps) {
  return (
    <svg
      viewBox="0 0 400 20"
      fill="none"
      className={`w-full h-5 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10 T250 10 T300 10 T350 10 T400 10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="200"
        style={{ animation: "squiggle-draw 2s ease-out forwards" }}
      />
    </svg>
  );
}
