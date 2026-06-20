export default function Footer({ onEnroll }) {
  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* CTA band */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 py-14 text-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Ready to launch your child's future?
        </h2>
        <p className="text-violet-200 mb-8 text-lg max-w-xl mx-auto">
          Seats fill fast. Join 200+ parents who have already enrolled their kids this summer.
        </p>
        <button
          onClick={onEnroll}
          className="bg-white text-violet-700 font-bold px-10 py-4 rounded-full text-lg hover:bg-violet-50 transition-colors shadow-xl hover:shadow-2xl active:scale-95"
        >
          Enroll Now — ₹2,999
        </button>
      </div>

      {/* Footer links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                K
              </div>
              <span className="text-white text-lg font-bold tracking-tight">
                kid<span className="text-violet-400">rove</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Kidrove organises workshops, camps, and courses that make learning irresistible for children aged 5–16.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div>
              <p className="text-white font-semibold mb-3">Workshop</p>
              <ul className="flex flex-col gap-2">
                <li><a href="#details" className="hover:text-white transition-colors">Details</a></li>
                <li><a href="#outcomes" className="hover:text-white transition-colors">Outcomes</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Contact</p>
              <ul className="flex flex-col gap-2">
                <li>hello@kidrove.com</li>
                <li>+91 98765 43210</li>
                <li>Mon–Sat, 9 AM – 6 PM IST</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© 2026 Kidrove. All rights reserved.</p>
          <p>Made with ❤️ for curious kids everywhere</p>
        </div>
      </div>
    </footer>
  );
}
