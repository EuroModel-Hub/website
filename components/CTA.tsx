"use client";

import Link from "next/link";
import { IconArrowRight, IconCheck } from "./icons";
import { EUFlag } from "./eu-flag";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-ink-800 px-8 py-14 text-white shadow-ring sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-eu-blue/40 blur-[120px]" aria-hidden="true" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <EUFlag className="mb-5" />
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Deploy your first model in the EU.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-brand-100/90">
                Tell us what you&apos;re building. We&apos;ll set up your
                workspace, sign a DPA, and have an endpoint live before your
                next sprint planning — all inside the EU.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#contact" className="btn-accent">
                  Request access
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#plans" className="btn-outline-on-dark">
                  Compare plans
                </Link>
              </div>
            </div>

            <form
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4">
                <Field label="Work email" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.eu"
                    className="w-full rounded-lg border-0 bg-ink-900/60 px-3.5 py-2.5 text-sm text-white placeholder:text-brand-100/40 ring-1 ring-inset ring-white/15 focus:ring-2 focus:ring-accent"
                  />
                </Field>
                <Field label="Company" htmlFor="company">
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Company name"
                    className="w-full rounded-lg border-0 bg-ink-900/60 px-3.5 py-2.5 text-sm text-white placeholder:text-brand-100/40 ring-1 ring-inset ring-white/15 focus:ring-2 focus:ring-accent"
                  />
                </Field>
                <Field label="What are you deploying?" htmlFor="usecase">
                  <select
                    id="usecase"
                    className="w-full rounded-lg border-0 bg-ink-900/60 px-3.5 py-2.5 text-sm text-white ring-1 ring-inset ring-white/15 focus:ring-2 focus:ring-accent"
                  >
                    <option className="text-ink-900">LLM / chat</option>
                    <option className="text-ink-900">Embeddings / RAG</option>
                    <option className="text-ink-900">Vision / multimodal</option>
                    <option className="text-ink-900">Custom model</option>
                  </select>
                </Field>
                <button type="submit" className="btn-accent w-full justify-center">
                  Request access
                  <IconArrowRight className="h-4 w-4" />
                </button>
                <p className="flex items-center justify-center gap-2 text-xs text-brand-100/60">
                  <IconCheck className="h-3.5 w-3.5 text-accent" />
                  We respond within one EU business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium text-brand-100/70">{label}</span>
      {children}
    </label>
  );
}
