import Link from "next/link";
import { IconArrowRight, IconShield, IconBolt, IconLock } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-800 text-white">
      {/* Background graphics */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand-500/30 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />

      <div className="container-px relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <span className="eyebrow-on-dark">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              EU-hosted · GDPR-compliant · Framework-agnostic
            </span>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Deploy AI models
              <br />
              <span className="text-accent">where your data stays yours.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/90">
              EuroModel Hub is the European platform to deploy, serve, manage,
              and scale AI models — with data residency baked into the
              infrastructure. No US hyperscaler lock-in, no legal gray zones.
              Push a model, get an endpoint, keep everything inside the EU.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn-accent">
                Deploy your first model
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#how-it-works" className="btn-outline-on-dark">
                See how it works
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7">
              <Stat value="< 5 min" label="From upload to live endpoint" />
              <Stat value="100% EU" label="Data residency, by default" />
              <Stat value="Pay per use" label="No reserved capacity to buy" />
            </dl>
          </div>

          {/* Visual: a stylized deployment console */}
          <div className="animate-fade-up [animation-delay:120ms]">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-white/10 bg-ink-900/40">
        <div className="container-px flex flex-wrap items-center gap-x-8 gap-y-3 py-4 text-xs font-medium text-brand-100/70">
          <span className="inline-flex items-center gap-2">
            <IconShield className="h-4 w-4 text-accent" /> GDPR Article 28 processor terms
          </span>
          <span className="inline-flex items-center gap-2">
            <IconLock className="h-4 w-4 text-accent" /> Data never leaves EU jurisdiction
          </span>
          <span className="inline-flex items-center gap-2">
            <IconBolt className="h-4 w-4 text-accent" /> GPU autoscaling, billed per second
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> ISO 27001-aligned controls
          </span>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-semibold text-white">{value}</dt>
      <dd className="mt-1 text-sm text-brand-100/70">{label}</dd>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Floating accent badge */}
      <div className="absolute -right-3 -top-3 z-10 animate-float-slow rounded-xl bg-white px-3 py-2 text-xs font-semibold text-ink-800 shadow-ring">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          endpoint live · eu-west-1
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl bg-ink-900/80 ring-1 ring-white/10 shadow-ring backdrop-blur">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs font-medium text-brand-100/60">deploy · mistral-eu-7b</span>
        </div>

        {/* code body */}
        <pre className="overflow-x-auto px-5 py-5 text-[12.5px] leading-relaxed text-brand-100/90">
{`$ euromodel deploy ./model
✔ Uploading weights (2.4 GB) …
✔ Selecting GPU profile · A10 (eu-west-1)
✔ Provisioning endpoint · https://api.euromodelhub.ai
  /v1/models/mistral-eu-7b
✔ Attaching autoscale policy (2 → 8 replicas)
✔ Enabling usage analytics & cost caps

endpoint:  https://api.euromodelhub.ai/v1
region:    eu-west-1 (Frankfurt)
latency:   42ms p50 · 88ms p99
status:    `}<span className="text-emerald-400">serving</span>
        </pre>

        {/* metrics row */}
        <div className="grid grid-cols-3 gap-px border-t border-white/10 bg-white/5">
          {[
            { k: "Requests / min", v: "1,284" },
            { k: "GPU util", v: "63%" },
            { k: "Cost today", v: "€4.10" },
          ].map((m) => (
            <div key={m.k} className="bg-ink-900/60 px-4 py-3">
              <div className="text-[10px] uppercase tracking-wider text-brand-100/50">{m.k}</div>
              <div className="mt-0.5 font-display text-sm font-semibold text-white">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
