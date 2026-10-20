const frameworks = [
  {
    name: "PyTorch",
    blurb: "TorchServe & vLLM-backed runtimes. Bring .pt or safetensors.",
    glyph: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M16 4c-3 4-7 7-7 13a7 7 0 0 0 14 0c0-3-2-5-4-7-1 2-3 3-3 5 0 1 1 2 2 2" stroke="#EE4C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    blurb: "SavedModel & TF-Serving. TFLite for edge deployments.",
    glyph: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M20 4v5h-3v3h3v11c0 3 2 5 5 5h2v-3h-2c-1 0-2-1-2-2V12h4V9h-4V4h-2Z" fill="#FF6F00" />
      </svg>
    ),
  },
  {
    name: "ONNX",
    blurb: "ONNX Runtime with hardware exec providers. Cross-framework.",
    glyph: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M16 3 4 10v12l12 7 12-7V10L16 3Z" stroke="#00A4EF" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 3v26M4 10l12 7 12-7" stroke="#00A4EF" strokeWidth="1.4" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "JAX",
    blurb: "JAX/Flax models with XLA compilation on EU GPUs.",
    glyph: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M6 26 16 6l10 20M11 20h10" stroke="#7B2D8E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Custom container",
    blurb: "Bring your own Docker image. We run it, scale it, observe it.",
    glyph: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M16 4 5 10v12l11 6 11-6V10L16 4Z" stroke="#2496ED" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M5 10l11 6 11-6M16 16v12" stroke="#2496ED" strokeWidth="1.4" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Hugging Face",
    blurb: "Pull directly from the Hub. transformers-compatible API.",
    glyph: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
        <circle cx="11" cy="13" r="2.2" fill="#FFD21E" />
        <circle cx="21" cy="13" r="2.2" fill="#FFD21E" />
        <path d="M9 20c2 2 4 3 7 3s5-1 7-3" stroke="#FF9D00" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 4c-7 0-12 5-12 12s5 12 12 12 12-5 12-12S23 4 16 4Z" stroke="#FF9D00" strokeWidth="1.4" opacity="0.5" />
      </svg>
    ),
  },
];

export function Frameworks() {
  return (
    <section id="frameworks" className="py-24 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Frameworks</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Bring the stack your team already trusts.
            </h2>
            <p className="mt-4 text-lg text-ink-700/80">
              We don&apos;t make you rewrite your model to fit our runtime. If it
              runs in a container, it runs on EuroModel Hub — with the same
              observability and autoscaling as our first-class runtimes.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((f) => (
            <div
              key={f.name}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-brand-100/70 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-ring"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-cloud ring-1 ring-brand-100">
                {f.glyph}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink-900">{f.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-700/80">{f.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
