"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Mehta",
    city: "Mumbai",
    loanType: "Personal Loan",
    amount: "₹8 Lakhs",
    review: "I was struggling to find a good personal loan rate. Mera Loan matched me with IDFC First at 10.5% — much better than what my bank offered. The whole process took less than 48 hours!",
    rating: 5,
    initials: "PM",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Suresh Reddy",
    city: "Hyderabad",
    loanType: "Business Loan",
    amount: "₹25 Lakhs",
    review: "As a self-employed professional, I always struggled with loan approvals. Mera Loan's credit analysis helped me understand my profile and I got approved by Bajaj Finserv within 3 days.",
    rating: 5,
    initials: "SR",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Ananya Joshi",
    city: "Pune",
    loanType: "Personal Loan",
    amount: "₹5 Lakhs",
    review: "The credit report feature is fantastic! I could see exactly why my previous loan applications were rejected and what I needed to improve. Highly recommend to everyone.",
    rating: 5,
    initials: "AJ",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Vikram Singh",
    city: "Delhi",
    loanType: "Home Loan",
    amount: "₹60 Lakhs",
    review: "Mera Loan helped me compare 8 different home loan offers in one place. Saved me at least ₹3 lakhs in interest over the loan tenure. The advisor was very patient and helpful.",
    rating: 5,
    initials: "VS",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Kavitha Nair",
    city: "Bangalore",
    loanType: "Personal Loan",
    amount: "₹3 Lakhs",
    review: "I needed urgent funds for medical expenses. Mera Loan connected me with a lender who approved my loan in just 24 hours. The team is responsive and genuinely helpful.",
    rating: 5,
    initials: "KN",
    color: "from-indigo-400 to-purple-500",
  },
  {
    name: "Rajesh Kumar",
    city: "Chennai",
    loanType: "Debt Consolidation",
    amount: "₹12 Lakhs",
    review: "Was managing 4 different EMIs and it was a nightmare. Mera Loan helped me consolidate everything into one loan with a lower overall EMI. Life is so much simpler now!",
    rating: 4,
    initials: "RK",
    color: "from-teal-400 to-blue-500",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const visible = [
    TESTIMONIALS[(current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length],
    TESTIMONIALS[current],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
  ];

  return (
    <section className="py-20 bg-[#F0F4FF]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#1B4FD8] font-semibold text-sm uppercase tracking-widest mb-2">
            Success Stories
          </p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            10,000+ Happy <span className="gradient-text">Customers</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real stories from real people who found their perfect loan through Mera Loan.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-gray-700 font-bold ml-1">4.8/5</span>
            <span className="text-gray-400 text-sm">(2,400+ reviews)</span>
          </div>
        </motion.div>

        {/* Card carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <AnimatePresence mode="popLayout">
              {visible.map((t, i) => (
                <motion.div
                  key={`${t.name}-${current}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{
                    opacity: i === 1 ? 1 : 0.65,
                    y: 0,
                    scale: i === 1 ? 1 : 0.95,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-white rounded-3xl p-6 shadow-card border border-gray-100 ${
                    i === 1 ? "shadow-brand ring-2 ring-[#1B4FD8]/20" : "hidden md:block"
                  }`}
                >
                  <Quote className="h-8 w-8 text-[#1B4FD8]/20 mb-4" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-base flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.city} · {t.loanType}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <Star key={idx} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-[#22C55E] font-bold text-xs mt-0.5">{t.amount}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-[#1B4FD8] text-gray-500 hover:text-[#1B4FD8] flex items-center justify-center transition-colors duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[#1B4FD8]" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-[#1B4FD8] text-gray-500 hover:text-[#1B4FD8] flex items-center justify-center transition-colors duration-200"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
