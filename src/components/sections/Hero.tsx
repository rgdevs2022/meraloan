"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ShieldCheck, Star, TrendingUp, Users, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST_STATS = [
  { icon: Users, value: "10,000+", label: "Customers Assisted" },
  { icon: IndianRupee, value: "₹100 Cr+", label: "Loans Facilitated" },
  { icon: ShieldCheck, value: "50+", label: "Lending Partners" },
  { icon: Star, value: "4.8/5", label: "Customer Satisfaction" },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen gradient-hero flex flex-col overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#1B4FD8]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-[#2563EB]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#F59E0B]/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* Left: Copy */}
          <div className="text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/25 border border-white/50 rounded-full px-4 py-2 mb-6"
            >
              <TrendingUp className="h-4 w-4 text-[#F59E0B]" />
              <span className="text-sm font-medium text-white/90">India&apos;s Smartest Loan Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
            >
              Get the{" "}
              <span className="text-[#F59E0B]">Best Loan</span>{" "}
              Offers in Minutes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-white leading-relaxed mb-8 max-w-xl"
            >
              Compare loan offers from leading banks and NBFCs, check your eligibility instantly, and get expert financial guidance — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("#lead-form")}
                className="gradient-accent border-0 text-white font-bold px-8 py-4 h-auto rounded-full text-base shadow-brand hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                Check Eligibility
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("#credit-report")}
                className="border-2 border-white text-white bg-white/20 hover:bg-white/35 font-semibold px-8 py-4 h-auto rounded-full text-base backdrop-blur-sm transition-all duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Sample Credit Report
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-3 text-white/90 text-sm"
            >
              <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
              <span>Free service · No hidden fees · 100% data privacy</span>
            </motion.div>
          </div>

          {/* Right: Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <DashboardIllustration />
          </motion.div>
        </div>
      </div>

      {/* Trust Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative bg-black/20 border-t border-white/20 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-white/25 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-black">{value}</div>
                  <div className="text-xs text-white/90 leading-tight">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main dashboard card */}
      <div className="rounded-3xl p-6 shadow-2xl bg-white border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-500 text-xs mb-1">CREDIT SCORE</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-gray-900">742</span>
              <span className="text-sm font-bold text-[#4ADE80] bg-green-500/25 border border-green-400/30 px-2 py-0.5 rounded-full">
                GOOD
              </span>
            </div>
          </div>
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="3" />
              <circle
                cx="18" cy="18" r="15.9" fill="none"
                stroke="#4ADE80" strokeWidth="3"
                strokeDasharray="74.2 25.8"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-gray-800 text-xs font-bold">
              74%
            </span>
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <MetricCard label="Loan Eligibility" value="₹12.5L" positive />
          <MetricCard label="Best EMI" value="₹12,400/mo" />
          <MetricCard label="Interest Rate" value="10.5% p.a." />
          <MetricCard label="FOIR Score" value="38%" positive />
        </div>

        {/* Bank Recommendations */}
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          <p className="text-gray-500 text-xs mb-2">TOP RECOMMENDED BANKS</p>
          <div className="flex gap-2 flex-wrap">
            {["HDFC", "ICICI", "Axis", "Kotak"].map((b) => (
              <span key={b} className="bg-[#1B4FD8] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2"
      >
        <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
          <ShieldCheck className="h-4 w-4 text-green-500" />
        </div>
        <div>
          <p className="text-xs font-bold text-gray-800">Eligible!</p>
          <p className="text-xs text-gray-500">Instant Approval</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2"
      >
        <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
          <TrendingUp className="h-4 w-4 text-[#1B4FD8]" />
        </div>
        <div>
          <p className="text-xs font-bold text-gray-800">₹100 Cr+</p>
          <p className="text-xs text-gray-500">Loans Processed</p>
        </div>
      </motion.div>
    </div>
  );
}

function MetricCard({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
      <p className="text-gray-500 text-xs mb-0.5">{label}</p>
      <p className={`text-sm font-bold ${positive ? "text-green-600" : "text-gray-900"}`}>{value}</p>
    </div>
  );
}
