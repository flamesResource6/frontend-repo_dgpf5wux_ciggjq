import { Sparkles, Brain, Globe2, Layers3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Mentors",
    desc: "Personalized feedback, instant guidance, and progress tracking powered by adaptive AI.",
  },
  {
    icon: Globe2,
    title: "3D Exploration",
    desc: "Dive into interactive scenes that make complex concepts intuitive and memorable.",
  },
  {
    icon: Layers3,
    title: "Project-first",
    desc: "Build real-world projects with step-by-step paths and collaborative reviews.",
  },
  {
    icon: Brain,
    title: "Cognitive learning",
    desc: "Spaced repetition, retrieval practice, and smart quizzes keep knowledge sticky.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.06),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Designed for breakthroughs</h2>
          <p className="mt-3 text-slate-300">Everything you need to go from curious to career-ready — faster and more fun.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:border-white/20 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/80 to-cyan-400/80 flex items-center justify-center shadow-md shadow-blue-500/20">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
