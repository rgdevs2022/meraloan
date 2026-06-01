"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye, Shield, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SAMPLE_REPORT = {
  name: "Rahul Sharma",
  score: 742,
  scoreLabel: "Good",
  scoreColor: "text-[#22C55E]",
  foir: 38,
  eligibilityScore: 78,
  accounts: [
    { bank: "HDFC Bank", type: "Credit Card", balance: 24500, status: "Active", emi: 0 },
    { bank: "ICICI Bank", type: "Personal Loan", balance: 185000, status: "Active", emi: 6800 },
    { bank: "Axis Bank", type: "Home Loan", balance: 2450000, status: "Active", emi: 24500 },
  ],
  recommendations: [
    { bank: "Kotak Mahindra", rate: "10.5%", amount: "₹12.5L", approval: "High" },
    { bank: "IDFC First", rate: "10.99%", amount: "₹10L", approval: "High" },
    { bank: "Bajaj Finserv", rate: "11.5%", amount: "₹8L", approval: "Medium" },
  ],
};

export default function CreditReport() {
  const [downloaded, setDownloaded] = useState(false);

  return (
    <section className="py-20 bg-[#0F172A]" id="credit-report">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#FF6B6B] font-semibold text-sm uppercase tracking-widest mb-2">
            Credit Intelligence
          </p>
          <h2 className="text-4xl font-black text-white mb-4">
            Your Complete <span className="text-[#FF6B6B]">Credit Report</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Get a detailed analysis of your credit health, liabilities, FOIR, and personalized bank recommendations.
          </p>
        </motion.div>

        {/* Report preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          {/* Header bar */}
          <div className="gradient-brand px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-white" />
              <div>
                <h3 className="text-white font-black text-lg">Credit Analysis Report</h3>
                <p className="text-white/70 text-xs">Mera Loan · Sample Preview</p>
              </div>
            </div>
            <Badge className="bg-white/20 text-white border-0 text-xs">SAMPLE</Badge>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {/* Credit Score */}
              <div className="text-center">
                <div className="relative w-28 h-28 mx-auto mb-3">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22C55E" strokeWidth="3"
                      strokeDasharray="74.2 25.8" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-gray-900">{SAMPLE_REPORT.score}</span>
                    <span className="text-xs text-[#22C55E] font-bold">{SAMPLE_REPORT.scoreLabel}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs font-medium">CREDIT SCORE</p>
              </div>

              {/* FOIR */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-4xl font-black text-blue-600 mb-2">{SAMPLE_REPORT.foir}%</div>
                <p className="text-gray-500 text-xs font-medium mb-2">FOIR (Fixed Obligation Ratio)</p>
                <Progress value={SAMPLE_REPORT.foir} className="h-2 w-full max-w-[140px] [&>div]:bg-blue-500" />
                <p className="text-xs text-green-600 mt-1 font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Healthy FOIR
                </p>
              </div>

              {/* Eligibility Score */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-4xl font-black text-[#E53935] mb-2">{SAMPLE_REPORT.eligibilityScore}/100</div>
                <p className="text-gray-500 text-xs font-medium mb-2">ELIGIBILITY SCORE</p>
                <Progress value={SAMPLE_REPORT.eligibilityScore} className="h-2 w-full max-w-[140px] [&>div]:bg-[#E53935]" />
                <p className="text-xs text-[#E53935] mt-1 font-medium flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> Strong Profile
                </p>
              </div>
            </div>

            {/* Existing Loans */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-orange-500" />
                Existing Liabilities
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left text-gray-500 font-medium py-2 pr-4">Bank</th>
                      <th className="text-left text-gray-500 font-medium py-2 pr-4">Type</th>
                      <th className="text-right text-gray-500 font-medium py-2 pr-4">Balance</th>
                      <th className="text-right text-gray-500 font-medium py-2">EMI/Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_REPORT.accounts.map((acc) => (
                      <tr key={acc.bank} className="border-b border-gray-50">
                        <td className="py-3 pr-4 font-medium text-gray-900">{acc.bank}</td>
                        <td className="py-3 pr-4 text-gray-500">{acc.type}</td>
                        <td className="py-3 pr-4 text-right font-medium">₹{acc.balance.toLocaleString("en-IN")}</td>
                        <td className="py-3 text-right text-gray-500">
                          {acc.emi ? `₹${acc.emi.toLocaleString("en-IN")}` : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bank Recommendations */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#22C55E]" />
                Recommended Banks
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SAMPLE_REPORT.recommendations.map((rec) => (
                  <div key={rec.bank} className="bg-[#F8FAFC] rounded-2xl p-4 border border-gray-100">
                    <p className="font-bold text-gray-900 text-sm">{rec.bank}</p>
                    <p className="text-[#E53935] font-black text-lg mt-1">{rec.rate}</p>
                    <p className="text-gray-500 text-xs">Up to {rec.amount}</p>
                    <Badge
                      className={`mt-2 text-xs ${
                        rec.approval === "High" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-orange-100 text-orange-700 hover:bg-orange-100"
                      }`}
                    >
                      {rec.approval} Approval
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Blur overlay for full report */}
            <div className="relative">
              <div className="blur-sm pointer-events-none opacity-40 space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 bg-gray-100 rounded-xl" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm">
                  <Eye className="h-4 w-4" />
                  Full report unlocks after eligibility check
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-gray-100 px-8 py-5 bg-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              This is a sample report. Get your personalized report for free.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setDownloaded(true);
                  setTimeout(() => setDownloaded(false), 3000);
                }}
                className="flex items-center gap-2 bg-[#0F172A] text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-[#1E293B] transition-colors"
              >
                <Download className="h-4 w-4" />
                {downloaded ? "Downloaded!" : "Download Sample PDF"}
              </button>
              <button
                onClick={() => document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 gradient-brand text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-brand"
              >
                Get My Report →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
