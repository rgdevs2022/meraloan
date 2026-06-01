"use client";

import { motion } from "framer-motion";
import { FileText, BarChart2, Star, GitCompare, Send, Banknote } from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    step: "01",
    title: "Fill Details",
    desc: "Share your basic info, employment details, and desired loan amount in under 2 minutes.",
    color: "bg-blue-100 text-[#1B4FD8]",
    border: "border-[#1B4FD8]",
  },
  {
    icon: BarChart2,
    step: "02",
    title: "Get Credit Analysis",
    desc: "Our AI instantly analyses your credit profile, FOIR, and financial health.",
    color: "bg-orange-100 text-orange-600",
    border: "border-orange-500",
  },
  {
    icon: Star,
    step: "03",
    title: "Receive Recommendations",
    desc: "Get a personalized shortlist of the best loan products matching your profile.",
    color: "bg-yellow-100 text-yellow-600",
    border: "border-yellow-500",
  },
  {
    icon: GitCompare,
    step: "04",
    title: "Compare Offers",
    desc: "Compare interest rates, tenures, processing fees, and EMIs side by side.",
    color: "bg-blue-100 text-blue-600",
    border: "border-blue-500",
  },
  {
    icon: Send,
    step: "05",
    title: "Apply Instantly",
    desc: "Apply to your chosen lender digitally — no branch visit, no paperwork.",
    color: "bg-purple-100 text-purple-600",
    border: "border-purple-500",
  },
  {
    icon: Banknote,
    step: "06",
    title: "Get Disbursal",
    desc: "Funds are transferred directly to your bank account within 24–48 hours.",
    color: "bg-green-100 text-green-600",
    border: "border-green-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#1B4FD8] font-semibold text-sm uppercase tracking-widest mb-2">
            Simple Process
          </p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            How Mera Loan Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From eligibility check to loan disbursal — our 6-step process is fast, transparent, and completely digital.
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className={`bg-white rounded-3xl p-7 shadow-card border-l-4 ${step.border} border border-gray-100 hover:shadow-md transition-shadow duration-300`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-2xl ${step.color.replace("text-", "text-")} flex items-center justify-center ${step.color.split(" ")[0]}`}>
                      <step.icon className={`h-6 w-6 ${step.color.split(" ")[1]}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-gray-300 tracking-widest">STEP {step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>

              {/* Connector arrow for non-last items in row */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-10 w-8">
                  <div className="text-gray-300 text-lg">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" })}
            className="gradient-accent text-white font-bold px-10 py-4 rounded-full shadow-brand hover:shadow-2xl hover:scale-105 transition-all duration-200 text-base"
          >
            Start Now — It&apos;s Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
