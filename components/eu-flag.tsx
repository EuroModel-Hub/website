// EU flag-inspired stars cluster, used as a subtle brand mark.
export function EUStars({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <g fill="#FFCC00">
        {[
          [16, 4],
          [21, 7],
          [23, 13],
          [21, 19],
          [16, 22],
          [11, 19],
          [9, 13],
          [11, 7],
        ].map(([cx, cy], i) => (
          <Star key={i} cx={cx} cy={cy} r={2.1} />
        ))}
      </g>
    </svg>
  );
}

function Star({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  // 5-pointed star path centered at (cx, cy)
  const points = Array.from({ length: 5 }, (_, i) => {
    const angle = (Math.PI / 2) + (i * 2 * Math.PI) / 5;
    const ox = cx + r * Math.cos(angle);
    const oy = cy - r * Math.sin(angle);
    const innerAngle = angle + Math.PI / 5;
    const ix = cx + (r * 0.42) * Math.cos(innerAngle);
    const iy = cy - (r * 0.42) * Math.sin(innerAngle);
    return `${ox},${oy} ${ix},${iy}`;
  }).join(" ");
  return <polygon points={points} />;
}

// A small EU flag chip for the footer / trust strip.
export function EUFlag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-eu-blue px-3 py-1 text-xs font-semibold text-white ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 24" className="h-3.5 w-5" fill="none">
        <rect width="32" height="24" rx="2" fill="#003399" />
        <g fill="#FFCC00">
          {[
            [16, 5],
            [19.5, 6.8],
            [21, 10.5],
            [19.5, 14.2],
            [16, 16],
            [12.5, 14.2],
            [11, 10.5],
            [12.5, 6.8],
          ].map(([cx, cy], i) => (
            <Star key={i} cx={cx} cy={cy} r={1.5} />
          ))}
        </g>
      </svg>
      Made in Europe
    </span>
  );
}
