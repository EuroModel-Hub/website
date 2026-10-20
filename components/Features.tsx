import {
  IconRocket,
  IconGauge,
  IconLayers,
  IconBolt,
  IconUsers,
  IconShield,
} from "./icons";

const features = [
  {
    icon: IconRocket,
    title: "Deploy in minutes, not sprints",
    body: "Push a model from your repo or notebook and get a versioned HTTPS endpoint. No Kubernetes YAML, no inference server boilerplate — we generate the serving container and the autoscaler for you.",
    points: ["One-command deploys from CLI or web", "Blue/green rollouts & instant rollback", "Git-connected model registry"],
  },
  {
    icon: IconGauge,
    title: "Analytics that actually explain cost",
    body: "Per-model dashboards for latency, throughput, error rate, GPU utilization, and spend. See which model is burning budget and why — broken down by team, project, and environment.",
    points: ["p50/p95/p99 latency & tokens/sec", "Cost per 1k requests, per model", "Budget caps & anomaly alerts"],
  },
  {
    icon: IconLayers,
    title: "Framework-agnostic by design",
    body: "PyTorch, TensorFlow, ONNX, or a custom container you built yourself. We don't lock you into a runtime — bring the stack your team already trusts.",
    points: ["PyTorch · TensorFlow · ONNX · JAX", "Custom Docker images supported", "Hugging Face-compatible API"],
  },
  {
    icon: IconBolt,
    title: "Autoscaling, billed per second",
    body: "Scale to zero when traffic stops, scale to dozens of replicas when it spikes. You pay for GPU seconds actually used — not for capacity you reserved in hope.",
    points: ["Scale-to-zero with warm pools", "Concurrency & queue-based autoscaling", "No reserved-instance commitment"],
  },
  {
    icon: IconUsers,
    title: "Teams, not just API keys",
    body: "Workspaces, roles, and scoped tokens. Share a model with product, give finance a read-only cost view, and keep prod access to the platform team.",
    points: ["SSO/SAML & SCIM provisioning", "Role-based access per workspace", "Audit log for every deploy & call"],
  },
  {
    icon: IconShield,
    title: "EU residency is the default, not an add-on",
    body: "Your model weights, prompts, and logs live in EU data centers under EU law. No US data flows, no Patriot Act exposure, no surprise sub-processor in a third country.",
    points: ["Frankfurt & Dublin regions", "GDPR Article 28 processor terms", "DPA, SCCs & sub-processor list"],
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">The platform</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Everything you need to run models in production.
            <span className="text-brand-500"> Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-700/80">
            We built EuroModel Hub for teams shipping real AI workloads — not
            demos. Each capability is here because it removes a concrete piece
            of operational pain.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
  points,
}: {
  icon: typeof IconRocket;
  title: string;
  body: string;
  points: string[];
}) {
  return (
    <article className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-ring">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-ink-800 group-hover:text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-700/80">{body}</p>
      <ul className="mt-4 space-y-2 border-t border-brand-50 pt-4">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent" />
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
}
