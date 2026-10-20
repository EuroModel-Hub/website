import Link from "next/link";
import { EUStars } from "./eu-flag";

const nav = [
  { href: "#features", label: "Platform" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#europe", label: "EU & GDPR" },
  { href: "#frameworks", label: "Frameworks" },
  { href: "#plans", label: "Plans" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/70 bg-cloud/80 backdrop-blur-md">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5" aria-label="EuroModel Hub home">
          <Logo />
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink-800">
            EuroModel<span className="text-brand-500"> Hub</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link href="#plans" className="hidden text-sm font-medium text-ink-700 hover:text-ink-900 sm:inline">
            Sign in
          </Link>
          <Link href="#contact" className="btn-accent">
            Request access
          </Link>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ink-800 text-white shadow-soft">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 17V7l8-3 8 3v10l-8 3-8-3Z" stroke="#FFB200" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 4v16M4 7l8 3 8-3M4 17l8-3 8 3" stroke="#AEC0E6" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7" />
      </svg>
      <EUStars className="absolute -right-1 -top-1 h-3 w-3" />
    </span>
  );
}
