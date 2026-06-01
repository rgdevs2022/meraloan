"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { IndianRupee, Calculator, TrendingDown } from "lucide-react";

function fmt(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

function calcEMI(principal: number, rate: number, months: number) {
  const r = rate / 12 / 100;
  if (r === 0) return principal / months;
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

export default function EligibilityCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(36);
  const [rate, setRate] = useState(11);

  const emi = useCallback(
    () => Math.round(calcEMI(loanAmount, rate, tenure)),
    [loanAmount, tenure, rate]
  );

  const totalPayable = emi() * tenure;
  const totalInterest = totalPayable - loanAmount;

  return (
    <section className="py-20 bg-white" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#1B4FD8] font-semibold text-sm uppercase tracking-widest mb-2">
            EMI Calculator
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Calculate Your <span className="gradient-text">Loan EMI</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Instantly estimate your monthly EMI, total interest, and overall payment using our interactive calculator.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFC] rounded-3xl p-5 sm:p-8 space-y-8 border border-gray-100"
          >
            <SliderField
              label="Loan Amount"
              value={loanAmount}
              min={50000}
              max={5000000}
              step={50000}
              format={(v) => fmt(v)}
              onChange={setLoanAmount}
              icon={<IndianRupee className="h-4 w-4" />}
            />
            <SliderField
              label="Loan Tenure"
              value={tenure}
              min={6}
              max={84}
              step={6}
              format={(v) => `${v} months`}
              onChange={setTenure}
              icon={<Calculator className="h-4 w-4" />}
            />
            <SliderField
              label="Interest Rate"
              value={rate}
              min={8}
              max={24}
              step={0.5}
              format={(v) => `${v}% p.a.`}
              onChange={setRate}
              icon={<TrendingDown className="h-4 w-4" />}
            />
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* EMI highlight */}
            <div className="gradient-brand rounded-3xl p-6 sm:p-8 text-white text-center shadow-brand">
              <p className="text-white/70 text-sm mb-2 font-medium">Monthly EMI</p>
              <motion.div
                key={emi()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl sm:text-5xl font-black mb-2"
              >
                {fmt(emi())}
              </motion.div>
              <p className="text-white/60 text-xs">per month for {tenure} months</p>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <ResultCard label="Principal Amount" value={fmt(loanAmount)} muted />
              <ResultCard label="Total Interest" value={fmt(totalInterest)} accent />
              <ResultCard label="Total Payable" value={fmt(totalPayable)} />
              <ResultCard label="Effective Rate" value={`${rate}% p.a.`} muted />
            </div>

            {/* Donut chart (CSS only) */}
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 flex items-center gap-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E5E7EB" strokeWidth="3.5" />
                  <circle
                    cx="18" cy="18" r="15.9" fill="none"
                    stroke="#1B4FD8" strokeWidth="3.5"
                    strokeDasharray={`${(loanAmount / totalPayable) * 100} ${100 - (loanAmount / totalPayable) * 100}`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                  {Math.round((loanAmount / totalPayable) * 100)}%
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-[#1B4FD8]" />
                  <span className="text-gray-600">Principal: {Math.round((loanAmount / totalPayable) * 100)}%</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  <span className="text-gray-600">Interest: {Math.round((totalInterest / totalPayable) * 100)}%</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full gradient-accent text-white font-bold py-4 rounded-2xl shadow-brand hover:shadow-2xl hover:scale-[1.01] transition-all duration-200"
            >
              Check Eligibility for This Loan →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label, value, min, max, step, format, onChange, icon,
}: {
  label: string; value: number; min: number; max: number; step: number;
  format: (v: number) => string; onChange: (v: number) => void;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
          <span className="text-[#1B4FD8]">{icon}</span>
          {label}
        </div>
        <span className="text-[#1B4FD8] font-black text-base">{format(value)}</span>
      </div>
      <Slider
        min={min} max={max} step={step} value={[value]}
        onValueChange={(v) => onChange(v[0])}
        className="[&>span[role=slider]]:bg-[#1B4FD8] [&>span[role=slider]]:border-[#1B4FD8] [&_.bg-primary]:bg-[#1B4FD8]"
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

function ResultCard({ label, value, accent, muted }: { label: string; value: string; accent?: boolean; muted?: boolean }) {
  return (
    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-gray-100">
      <p className="text-gray-500 text-xs mb-1">{label}</p>
      <p className={`font-black text-lg ${accent ? "text-[#1B4FD8]" : muted ? "text-gray-700" : "text-gray-900"}`}>
        {value}
      </p>
    </div>
  );
}
