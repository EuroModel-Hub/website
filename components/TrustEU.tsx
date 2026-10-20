import Link from "next/link";
import { IconShield, IconLock, IconGlobe, IconScale, IconCheck, IconArrowRight } from "./icons";
import { EUFlag } from "./eu-flag";

const pillars = [
  {
    icon: IconGlobe,
    title: "Data stays in the EU",
    body: "Model weights, prompts, responses, and logs are processed and stored in Frankfurt and Dublin. No transatlantic replication, no US-region fallback.",
  },
  {
    icon: IconShield,
    title: "GDPR by construction",
    body: "We act as a processor under Article 28 with signed DPAs, documented sub-processors, and a lawful-basis framework you can hand to your DPO.",
  },
  {
    icon: IconLock,
    title: "No third-country exposure",
    body: "No US parent, no US staff with production access, no Cloud Act or Patriot Act surface. Your data isn't subject to foreign government requests.",
  },
  {
    icon: IconScale,
    title: "Audit-ready by default",
    body: "Immutable audit logs for every deploy, key, and API call. Export to your SIEM. SOC 2 and ISO 27001-aligned controls, with EU-based assessors.",
  },
];

const checklist = [
  "Signed DPA on day one",
  "EU-based sub-processors only",
  "Right-to-audit clauses",
  "Data deletion on termination",
  "Encryption at rest & in transit (EU KMS)",
  "No training on your data — ever",
];

export function TrustEU() {
  return (
    <section id="europe" className="relative overflow-hidden bg-ink-800 py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-eu-blue/40 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-[120px]" aria-hidden="true" />

      <div className="container-px relative">
        <div className="max-w-2xl">
          <EUFlag className="mb-5" />
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            The wedge: your AI runs under EU law.
          </h2>
          <p className="mt-4 text-lg text-brand-100/90">
            US hyperscalers treat EU data residency as a region toggle. We treat
            it as the architecture. For any team shipping AI to EU customers —
            finance, health, public sector — that difference is the difference
            between a launch and a legal review.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/80">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="font-display text-xl font-semibold">
              What your DPO gets on day one
            </h3>
            <p className="mt-2 text-sm text-brand-100/80">
              Everything a privacy team asks for, available before you sign —
              not after a six-month security review.
            </p>
            <Link href="#contact" className="btn-on-dark mt-6">
              Request the compliance pack
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {checklist.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-brand-100/90">
                <IconCheck className="mt-0.5 h-4 w-4 flex-none text-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
