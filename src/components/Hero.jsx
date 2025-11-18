import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live, interactive learning
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white">
            Learn faster with an immersive, futuristic classroom
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-xl">
            NeoLearn blends AI mentors, 3D exploration, and hands-on projects to transform how you master new skills.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="px-5 py-3 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-cyan-300 to-blue-500 hover:from-cyan-200 hover:to-blue-400 transition-shadow shadow-[0_8px_30px_rgba(59,130,246,0.35)]">
              Start free
            </button>
            <button className="px-5 py-3 rounded-xl font-semibold text-white/90 hover:text-white border border-white/15 bg-white/5">
              View courses
            </button>
            <div className="ml-2 text-xs text-slate-400">
              No credit card • 200+ lessons
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
