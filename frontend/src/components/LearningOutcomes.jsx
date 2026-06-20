const outcomes = [
  {
    icon: "🧠",
    title: "Understand AI Fundamentals",
    desc: "Grasp how machine learning works — from datasets to decision-making — through interactive demos and simple coding exercises.",
  },
  {
    icon: "🤖",
    title: "Build & Program Real Robots",
    desc: "Assemble and code physical robotic models, learning how sensors, motors, and logic work together to solve real-world problems.",
  },
  {
    icon: "🐍",
    title: "Learn Python Basics",
    desc: "Write their first Python programs: variables, loops, functions — the essential building blocks used by every AI engineer today.",
  },
  {
    icon: "🎯",
    title: "Complete a Capstone Project",
    desc: "Design and present an original AI-powered robot project to parents and peers on the final day — a portfolio-worthy achievement.",
  },
  {
    icon: "🧩",
    title: "Develop Computational Thinking",
    desc: "Break problems into steps, spot patterns, and think algorithmically — skills that transfer to every school subject and beyond.",
  },
  {
    icon: "🤝",
    title: "Collaborate & Communicate Ideas",
    desc: "Work in small teams, pitch ideas, give feedback, and build the collaboration habits that distinguish great engineers from good ones.",
  },
];

export default function LearningOutcomes() {
  return (
    <section id="outcomes" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Learning Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            What Your Child Will Learn
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            By the end of 4 weeks, your child will walk away with real skills, a completed project, and a huge confidence boost.
          </p>
        </div>

        {/* Outcomes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-100 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-violet-500 bg-violet-50 px-2 py-0.5 rounded-md">
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-slate-900 font-bold text-base mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructor note */}
        <div className="mt-12 bg-white border border-slate-100 rounded-3xl p-8 flex flex-col sm:flex-row items-start gap-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-2xl flex-shrink-0">
            👩‍💻
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-600 mb-1">Expert Instructors</p>
            <h3 className="text-slate-900 font-bold text-lg mb-2">Taught by working engineers & educators</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every session is led by STEM educators with real industry experience in AI and robotics. Our instructors are trained to make complex concepts fun, accessible, and memorable for every learning style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
