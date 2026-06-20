const details = [
  { icon: "👦", label: "Age Group", value: "8 – 14 Years" },
  { icon: "⏱️", label: "Duration", value: "4 Weeks" },
  { icon: "💻", label: "Mode", value: "Online (Live + Recorded)" },
  { icon: "💳", label: "Workshop Fee", value: "₹2,999" },
  { icon: "📅", label: "Start Date", value: "15 July 2026" },
  { icon: "🗓️", label: "Schedule", value: "Mon – Fri · 10 AM – 12 PM" },
];

export default function WorkshopDetails() {
  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Workshop Details
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            A structured, expert-led program designed for curious young minds ready to explore the world of AI and robotics.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map(({ icon, label, value }) => (
            <div
              key={label}
              className="group flex items-center gap-4 bg-slate-50 hover:bg-violet-50 border border-slate-100 hover:border-violet-200 rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:shadow-violet-100"
            >
              <div className="text-3xl w-14 h-14 bg-white border border-slate-100 group-hover:border-violet-200 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 transition-colors">
                {icon}
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                <p className="text-slate-800 font-bold text-base">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight banner */}
        <div className="mt-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 text-white text-center">
          <p className="text-lg font-semibold mb-1">Limited seats available — Early-bird pricing ends soon</p>
          <p className="text-violet-200 text-sm">Secure your child's spot before July 1, 2026 to lock in the ₹2,999 rate.</p>
        </div>
      </div>
    </section>
  );
}
