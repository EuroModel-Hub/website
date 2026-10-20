import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconRocket = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 14c-1.5 1-2 4-2 4s3-.5 4-2c.6-.9.5-2-.2-2.6-.7-.6-1.6-.5-2 .6Z" />
    <path d="M9 15c3-1 5-3 7-7 1-2 1-5 1-5s-3 0-5 1c-4 2-6 4-7 7" />
    <path d="M14.5 5.5 18.5 9.5" />
    <path d="m9 15-1.5 1.5" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconGauge = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 13a5 5 0 1 0-5-5" opacity="0" />
    <path d="M4.5 16a9 9 0 1 1 15 0" />
    <path d="m12 12 4-3" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const IconLayers = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 17 9 5 9-5" opacity="0.5" />
  </svg>
);

export const IconScale = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 4v16" />
    <path d="M7 8h10" />
    <path d="M7 8 4 14h6L7 8Z" />
    <path d="M17 8 14 14h6L17 8Z" />
    <path d="M9 20h6" />
  </svg>
);

export const IconUsers = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 6a3 3 0 0 1 0 6" />
    <path d="M17 19a5.5 5.5 0 0 0-3-4.9" />
  </svg>
);

export const IconBolt = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5 9-11" />
  </svg>
);

export const IconLock = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconServer = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="6" rx="1.5" />
    <rect x="4" y="14" width="16" height="6" rx="1.5" />
    <path d="M8 7h.01M8 17h.01" />
  </svg>
);

export const IconChart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 4v16h16" />
    <path d="m7 14 3-3 3 2 4-5" />
  </svg>
);

export const IconGlobe = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c3 3 3 15 0 18-3-3-3-15 0-18Z" />
  </svg>
);

export const IconTerminal = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m7 9 3 3-3 3" />
    <path d="M13 15h4" />
  </svg>
);

export const IconKey = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="4" />
    <path d="m11 11 8 8" />
    <path d="m16 16 2-2" />
    <path d="m19 13 2 2" />
  </svg>
);

export const IconSpark = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);
