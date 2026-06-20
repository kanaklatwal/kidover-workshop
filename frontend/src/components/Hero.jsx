export default function Hero({ onEnroll }) {
  return (
    <section className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-900">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #a78bfa 1px, transparent 1px), linear-gradient(to bottom, #a78bfa 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Floating emoji decorations */}
      <div className="absolute top-28 right-12 text-4xl animate-bounce hidden lg:block" style={{ animationDuration: "3s" }}>🤖</div>
      <div className="absolute bottom-32 right-24 text-3xl animate-bounce hidden lg:block" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>💡</div>
      <div className="absolute top-1/2 left-10 text-2xl animate-bounce hidden lg:block" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>🚀</div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-violet-200 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Enrollments Open · Starts 15 July 2026
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            AI & Robotics{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">
              Summer Workshop
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            Give your child the skills of tomorrow — today. A hands-on, project-driven 4-week program where kids aged 8–14 build real robots, train AI models, and think like engineers.
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: "👦", label: "Age Group", value: "8–14 Years" },
              { icon: "📅", label: "Duration", value: "4 Weeks" },
              { icon: "💻", label: "Mode", value: "Online" },
              { icon: "💰", label: "Fee", value: "₹2,999" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{label}</p>
                  <p className="text-white font-bold text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onEnroll}
              className="group bg-violet-500 hover:bg-violet-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 active:scale-95 flex items-center justify-center gap-2"
            >
              Enroll Now — ₹2,999
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a
              href="#details"
              className="border border-white/25 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 text-center hover:bg-white/5"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 10 720 40C480 70 240 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
