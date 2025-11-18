export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.20),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Join the next wave of learning</h2>
        <p className="mt-3 text-slate-300">Start for free. Upgrade anytime to unlock mentor sessions and certificates.</p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
          <button className="px-5 py-3 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-cyan-300 to-blue-500 hover:from-cyan-200 hover:to-blue-400 transition-shadow shadow-[0_8px_30px_rgba(59,130,246,0.35)]">
            Get started free
          </button>
          <button className="px-5 py-3 rounded-xl font-semibold text-white/90 hover:text-white border border-white/15 bg-white/5">
            Talk to sales
          </button>
        </div>
        <p className="mt-4 text-xs text-slate-400">Free forever plan • Cancel anytime</p>
      </div>
    </section>
  );
}
