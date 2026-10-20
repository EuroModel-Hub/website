import Link from "next/link";
import { EUFlag } from "./eu-flag";

const cols = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Frameworks", href: "#frameworks" },
      { label: "Plans", href: "#plans" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "EU & GDPR", href: "#europe" },
      { label: "Data residency", href: "#europe" },
      { label: "Security", href: "#europe" },
      { label: "Compliance pack", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Request access", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Docs", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-100/70 bg-cloud">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ink-800 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 17V7l8-3 8 3v10l-8 3-8-3Z" stroke="#FFB200" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M12 4v16M4 7l8 3 8-3M4 17l8-3 8 3" stroke="#AEC0E6" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7" />
                </svg>
              </span>
              <span className="font-display text-base font-semibold tracking-tight text-ink-800">
                EuroModel<span className="text-brand-500"> Hub</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-700/80">
              The EU-hosted platform to deploy, serve, manage, and scale AI
              models. Trust AI. Together.
            </p>
            <EUFlag className="mt-5" />
          </div>

          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-700/60">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-700 transition-colors hover:text-ink-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-brand-100/70 pt-6 text-xs text-ink-700/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} EuroModel Hub. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-ink-900">Privacy</Link>
            <Link href="#" className="hover:text-ink-900">Terms</Link>
            <Link href="#" className="hover:text-ink-900">DPA</Link>
            <Link href="#" className="hover:text-ink-900">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
