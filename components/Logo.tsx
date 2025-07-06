interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 32, height = 32 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sample logo design - replace with your actual logo */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="currentColor"
        className="text-blue-600 dark:text-blue-400"
      />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        className="fill-white text-2xl font-bold"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        EA
      </text>
    </svg>
  );
}
