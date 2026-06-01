"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    // Show after 30 seconds OR on mouse leave (exit intent)
    const timer = setTimeout(() => setShow(true), 30000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed) setShow(true);
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-[61] px-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden">
              {/* Accent top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 gradient-brand" />

              <button
                onClick={dismiss}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Wait! Don&apos;t Leave Empty-Handed
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Get a <strong className="text-[#E53935]">free credit score analysis</strong> and personalized loan recommendations in just 60 seconds.
                </p>

                <ul className="text-left space-y-2 mb-7">
                  {[
                    "✅ Check loan eligibility instantly",
                    "📊 Get your credit score analysed",
                    "🏦 Compare offers from 50+ lenders",
                    "💰 Save up to ₹2L in interest",
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-700 font-medium">{item}</li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    dismiss();
                    document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full gradient-brand text-white font-bold py-4 rounded-2xl shadow-brand hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 text-base border-0"
                >
                  Check My Eligibility — Free
                  <ArrowRight className="h-5 w-5" />
                </button>

                <button
                  onClick={dismiss}
                  className="mt-3 text-gray-400 text-xs hover:text-gray-600 transition-colors"
                >
                  No thanks, I don&apos;t want free loan advice
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
