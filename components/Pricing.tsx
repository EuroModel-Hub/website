import Link from "next/link";
import { IconCheck, IconArrowRight } from "./icons";

const plans = [
  {
    name: "Starter",
    tagline: "For a team shipping its first model to EU customers.",
    price: "Pay per use",
    priceNote: "from €0.08 / GPU-minute · billed by the second",
    cta: "Start building",
    ctaHref: "#contact",
    highlight: false,
    features: [
      "Up to 3 deployed models",
      "Shared GPU pool (A10)",
      "Scale to zero",
      "Usage & cost analytics",
      "Community support",
    ],
  },
  {
    name: "Team",
    tagline: "For product teams running AI in production.",
    price: "From €1,200 / mo",
    priceNote: "plus metered GPU usage · annual commit",
    cta: "Request access",
    ctaHref: "#contact",
    highlight: true,
    features: [
      "Unlimited models & endpoints",
      "Dedicated GPU profiles (A10, A100)",
      "SSO/SAML, roles & audit log",
      "Blue/green deploys & rollback",
      "Budget caps & anomaly alerts",
      "Priority EU-based support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For regulated industries & public sector.",
    price: "Contact us",
    priceNote: "custom · DPA, SCCs, region pinning",
    cta: "Talk to us",
    ctaHref: "#contact",
    highlight: false,
    features: [
      "Single-tenant & on-prem options",
      "Region pinning (Frankfurt/Dublin)",
      "Custom DPA & right-to-audit",
      "Dedicated support engineer",
      "99.9% SLA",
    ],
  },
];

export function Pricing() {
  return (
    <section id="plans" className="relative bg-cloud py-24 sm:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">Plans</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Pricing that scales with usage, not seats.
          </h2>
          <p className="mt-4 text-lg text-ink-700/80">
            Start metered, move to a committed plan when you know your traffic.
            Every plan runs on the same EU infrastructure — the difference is
            capacity, support, and the compliance paperwork we hand you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-700/70">
          All plans include EU data residency, GDPR Article 28 terms, and
          encryption at rest and in transit. No US data flows.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const dark = plan.highlight;
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 shadow-soft ring-1 ${
        dark
          ? "bg-ink-800 text-white ring-ink-700 shadow-ring"
          : "bg-white text-ink-900 ring-brand-100/70"
      }`}
    >
      {dark && (
        <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink-900">
          Most popular
        </span>
      )}
      <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
      <p className={`mt-1.5 text-sm ${dark ? "text-brand-100/80" : "text-ink-700/80"}`}>
        {plan.tagline}
      </p>

      <div className="mt-6">
        <div className="font-display text-3xl font-semibold tracking-tight">{plan.price}</div>
        <div className={`mt-1 text-xs ${dark ? "text-brand-100/60" : "text-ink-700/60"}`}>
          {plan.priceNote}
        </div>
      </div>

      <Link
        href={plan.ctaHref}
        className={`mt-6 ${dark ? "btn-accent" : "btn-primary"}`}
      >
        {plan.cta}
        <IconArrowRight className="h-4 w-4" />
      </Link>

      <ul className={`mt-7 space-y-3 border-t pt-6 ${dark ? "border-white/10" : "border-brand-50"}`}>
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <IconCheck className={`mt-0.5 h-4 w-4 flex-none ${dark ? "text-accent" : "text-brand-500"}`} />
            <span className={dark ? "text-brand-100/90" : "text-ink-700"}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
