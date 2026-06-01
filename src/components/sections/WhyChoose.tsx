"use client";

import { motion, type Variants } from "framer-motion";
import { Brain, Target, Layers, UserCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "Smart Credit Analysis",
    desc: "AI-powered credit report insights that reveal exactly where you stand and how to improve your score for better loan terms.",
    color: "from-purple-500 to-indigo-600",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Target,
    title: "Best Loan Matching",
    desc: "Get personalized loan recommendations from 50+ lenders, matched to your profile, credit score, and financial goals.",
    color: "from-[#1B4FD8] to-[#2563EB]",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-[#1B4FD8]",
  },
  {
    icon: Layers,
    title: "Debt Consolidation",
    desc: "Reduce multiple EMI burdens by consolidating all your existing loans into one affordable, manageable monthly payment.",
    color: "from-blue-500 to-cyan-600",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Expert Financial Guidance",
    desc: "Dedicated loan specialists provide personalized advice to help you choose the right product and navigate the entire process.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function WhyChoose() {
  return (
    <section className="py-20 bg-[#F0F4FF]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#1B4FD8] font-semibold text-sm uppercase tracking-widest mb-2">
            Why Mera Loan
          </p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Everything You Need to Get the{" "}
            <span className="gradient-text">Perfect Loan</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We&apos;ve built India&apos;s most comprehensive loan platform so you never have to visit a bank again.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-7 shadow-card border border-gray-100 hover:shadow-brand transition-shadow duration-300 group"
            >
              <div
                className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <f.icon className={`h-7 w-7 ${f.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              <div className={`mt-5 h-1 w-12 rounded-full bg-gradient-to-r ${f.color} group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
