import { IconTerminal, IconGauge, IconBolt } from "./icons";

const steps = [
  {
    n: "01",
    icon: IconTerminal,
    title: "Deploy",
    body: "Connect a repo or upload weights, pick a GPU profile, and we generate the serving container, the HTTPS endpoint, and an API key. Your model is live before the standup ends.",
    detail: "$ euromodel deploy ./model --gpu A10 --region eu-west-1",
  },
  {
    n: "02",
    icon: IconGauge,
    title: "Manage",
    body: "Watch latency, throughput, errors, and spend on per-model dashboards. Roll out new versions with blue/green, roll back in one click, and set budget caps so a runaway loop can't drain your quarter.",
    detail: "version v1.4.2 → v1.5.0 · traffic 10% → 100%",
  },
  {
    n: "03",
    icon: IconBolt,
    title: "Scale",
    body: "Autoscaling handles traffic spikes and goes to zero when idle. You pay for GPU seconds used, not for capacity you guessed at. Add regions, add replicas, add teams — without re-architecting.",
    detail: "replicas 2 → 14 → 0 · billed per second",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-cloud py-24 sm:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Deploy → Manage → Scale.
          </h2>
          <p className="mt-4 text-lg text-ink-700/80">
            Three steps, end to end. The boring parts of running inference in
            production are the parts we took off your plate.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Step key={s.n} step={s} last={i === steps.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Step({
  step: { n, icon: Icon, title, body, detail },
}: {
  step: (typeof steps)[number];
  last: boolean;
}) {
  return (
    <li className="relative flex flex-col rounded-2xl bg-white p-7 ring-1 ring-brand-100/70 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-semibold text-brand-300">{n}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-accent">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-700/80">{body}</p>
      <div className="mt-5 rounded-lg bg-ink-900 px-3.5 py-2.5 font-mono text-xs text-brand-100/80 ring-1 ring-white/5">
        {detail}
      </div>
    </li>
  );
}
