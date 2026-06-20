import { useEffect } from "react";
import { useEnquiryForm } from "../hooks/useEnquiryForm";

function InputField({ label, id, type = "text", name, value, onChange, error, placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-400/50 ${
          error
            ? "border-red-400 bg-red-50 focus:border-red-400"
            : "border-slate-200 bg-slate-50 focus:border-violet-400 focus:bg-white"
        }`}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

export default function RegistrationForm({ open, onClose }) {
  const { values, errors, status, serverMessage, handleChange, handleSubmit, reset } =
    useEnquiryForm();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-6 pt-6 pb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-violet-200 text-xs font-bold uppercase tracking-widest mb-1">Register Now</p>
              <h2 className="text-white text-xl font-extrabold">AI & Robotics Summer Workshop</h2>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex gap-3">
            {["4 Weeks", "Online", "₹2,999"].map((tag) => (
              <span key={tag} className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 -mt-4 bg-white rounded-t-3xl">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">You're registered!</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{serverMessage}</p>
              <button
                onClick={handleClose}
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-4 mb-6">
                <InputField
                  label="Full Name"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="e.g. Ananya Sharma"
                  autoComplete="name"
                />
                <InputField
                  label="Email Address"
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="e.g. parent@email.com"
                  autoComplete="email"
                />
                <InputField
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                />
              </div>

              {/* Server error */}
              {status === "error" && serverMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                  {serverMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white font-bold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-base active:scale-[0.98]"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
              <p className="text-center text-xs text-slate-400 mt-3">
                We'll contact you within 24 hours. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
