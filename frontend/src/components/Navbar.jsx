import { useState } from "react";

export default function Navbar({ onEnroll }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              K
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              kid<span className="text-violet-600">rove</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600 font-medium">
            <a href="#details" className="hover:text-violet-600 transition-colors">Details</a>
            <a href="#outcomes" className="hover:text-violet-600 transition-colors">Outcomes</a>
            <a href="#faq" className="hover:text-violet-600 transition-colors">FAQ</a>
            <button
              onClick={onEnroll}
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-full font-semibold transition-all duration-200 hover:shadow-md hover:shadow-violet-200 active:scale-95"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-1 flex flex-col gap-2 text-sm font-medium text-slate-700">
            <a href="#details" className="py-2 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>Details</a>
            <a href="#outcomes" className="py-2 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>Outcomes</a>
            <a href="#faq" className="py-2 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>FAQ</a>
            <button
              onClick={() => { setMenuOpen(false); onEnroll(); }}
              className="mt-2 bg-violet-600 text-white py-2.5 rounded-full font-semibold text-center"
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
