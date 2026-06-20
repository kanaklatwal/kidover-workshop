import { useState } from "react";

const faqs = [
  {
    q: "Does my child need any prior coding experience?",
    a: "Not at all! This workshop is designed for complete beginners. We start from the very basics and build up steadily. Children who already know some coding will also find plenty to challenge them as the program deepens over the four weeks.",
  },
  {
    q: "What equipment will my child need?",
    a: "A laptop or desktop computer with a stable internet connection is all that's required. We use browser-based tools for coding (no software installation needed), and any physical robotics kits will be shipped to your address before the start date.",
  },
  {
    q: "Are the sessions live or pre-recorded?",
    a: "Sessions are live and interactive, held Monday–Friday from 10 AM to 12 PM IST. Every session is also recorded and made available for 30 days, so your child can revisit concepts or catch up if they miss a day.",
  },
  {
    q: "Will my child receive a certificate?",
    a: "Yes! Every participant who completes the workshop and presents their capstone project receives a Kidrove Certificate of Achievement in AI & Robotics, which can be added to school portfolios and college applications.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a full refund if you cancel before July 10, 2026 (5 days before the start date). After that, we offer a 50% refund up until the first class. No refunds are issued after the workshop begins, but you can transfer your seat to another eligible child.",
  },
  {
    q: "How many children are in each batch?",
    a: "Each batch is capped at 20 students to ensure every child gets personalised attention and can actively participate in discussions and Q&A sessions with the instructor.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 text-base pr-2">{q}</span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            isOpen ? "bg-violet-600 text-white rotate-45" : "bg-slate-100 text-slate-400"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <div className="h-px bg-slate-100 mb-4" />
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Common Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Can't find the answer you're looking for? Reach out to us via the registration form.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
