"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF6B6B]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <Clock className="h-4 w-4 text-[#FF6B6B]" />
            <span className="text-sm font-medium">Takes less than 60 seconds</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            Ready to Find the{" "}
            <span className="text-[#FF6B6B]">Best Loan Offer?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Join 10,000+ Indians who found their perfect loan through Mera Loan. Check your eligibility in less than 60 seconds — free, secure, and no CIBIL impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" })}
              className="gradient-brand text-white font-bold px-10 py-4 rounded-full shadow-brand hover:shadow-2xl hover:scale-105 transition-all duration-200 text-base flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg,#FF6B6B,#E53935)" }}
            >
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-10 py-4 rounded-full hover:bg-[#22C55E] hover:scale-105 transition-all duration-200 text-base flex items-center justify-center gap-2"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/50 text-sm">
            <span className="flex items-center gap-1.5">✅ Free Service</span>
            <span className="flex items-center gap-1.5">🔒 100% Secure</span>
            <span className="flex items-center gap-1.5">⚡ Instant Analysis</span>
            <span className="flex items-center gap-1.5">🎯 No CIBIL Impact</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
