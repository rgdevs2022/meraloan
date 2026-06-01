"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";

export default function UrgencyBanner() {
  const [closed, setClosed] = useState(false);

  return (
    <AnimatePresence>
      {!closed && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="gradient-brand"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 relative pr-10">
            <Zap className="h-4 w-4 text-yellow-300 flex-shrink-0 hidden sm:block" />
            <p className="text-white text-xs sm:text-sm font-medium text-center leading-snug">
              <span className="sm:hidden">🔥 Pre-approved offers waiting —{" "}
                <button
                  onClick={() => document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="underline font-bold hover:no-underline"
                >
                  Check Now →
                </button>
              </span>
              <span className="hidden sm:inline">
                🔥 <strong>Limited Time:</strong> Check your eligibility now and get priority access to pre-approved offers from HDFC, ICICI &amp; Axis Bank{" "}
                <button
                  onClick={() => document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="underline font-bold hover:no-underline"
                >
                  Check Now →
                </button>
              </span>
            </p>
            <button
              onClick={() => setClosed(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
