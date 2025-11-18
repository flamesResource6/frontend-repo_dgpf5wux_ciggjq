const courses = [
  {
    title: "Foundations of AI",
    level: "Beginner",
    color: "from-blue-500/20 via-cyan-400/20 to-emerald-400/20",
  },
  {
    title: "Interactive Web 3D",
    level: "Intermediate",
    color: "from-purple-500/20 via-fuchsia-400/20 to-blue-400/20",
  },
  {
    title: "Climate Data Science",
    level: "Advanced",
    color: "from-emerald-500/20 via-teal-400/20 to-cyan-400/20",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Popular learning paths</h2>
            <p className="mt-3 text-slate-300">Curated by educators. Validated by industry.</p>
          </div>
          <button className="px-4 py-2 rounded-lg font-medium text-slate-900 bg-white hover:bg-slate-100">Explore all</button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.title} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${c.color} p-6`}> 
              <div className="text-xs text-slate-300">{c.level}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{c.title}</h3>
              <div className="mt-4 h-40 rounded-xl bg-black/20 border border-white/10 flex items-center justify-center text-slate-300 text-sm">
                Preview lesson
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
