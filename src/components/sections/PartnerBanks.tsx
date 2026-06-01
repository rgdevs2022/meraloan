"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  { name: "ICICI Bank", abbr: "ICICI", color: "#F26522", bg: "#fff4ee" },
  { name: "HDFC Bank", abbr: "HDFC", color: "#004C8F", bg: "#eef4ff" },
  { name: "Axis Bank", abbr: "AXIS", color: "#97144D", bg: "#ffeef5" },
  { name: "Kotak Bank", abbr: "KMB", color: "#ED1C24", bg: "#fff0f0" },
  { name: "IDFC First", abbr: "IDFC", color: "#00A859", bg: "#eefff5" },
  { name: "Bajaj Finserv", abbr: "BAJAJ", color: "#006DB6", bg: "#eef5ff" },
  { name: "Tata Capital", abbr: "TATA", color: "#003399", bg: "#eef0ff" },
  { name: "InCred", abbr: "INC", color: "#FF5E00", bg: "#fff3ee" },
  { name: "Piramal", abbr: "PFC", color: "#1E3A8A", bg: "#eef1ff" },
  { name: "IndusInd", abbr: "IIB", color: "#1A56DB", bg: "#eef3ff" },
  { name: "PaySense", abbr: "PAY", color: "#6C2BD9", bg: "#f3eeff" },
  { name: "Muthoot", abbr: "MFI", color: "#C41230", bg: "#fff0f2" },
];

function PartnerLogo({ name, abbr, color, bg }: { name: string; abbr: string; color: string; bg: string }) {
  return (
    <div className="flex-shrink-0 mx-4 group">
      <div
        className="h-16 px-5 bg-white rounded-2xl border border-gray-100 flex items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default min-w-[148px]"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
        title={name}
      >
        {/* Brand icon tile */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-[11px] tracking-wide flex-shrink-0 leading-none"
          style={{ backgroundColor: bg, color }}
        >
          {abbr}
        </div>
        {/* Bank name */}
        <div className="flex flex-col">
          <span className="text-gray-800 font-bold text-sm leading-tight whitespace-nowrap">{name}</span>
          <span className="text-gray-400 text-[10px] leading-tight">Partner Bank</span>
        </div>
      </div>
    </div>
  );
}

export default function PartnerBanks() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.5; // px per frame
    const halfWidth = track.scrollWidth / 2;

    function animate() {
      if (!paused) {
        posRef.current += SPEED;
        if (posRef.current >= halfWidth) posRef.current = 0;
        if (track) track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [paused]);

  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-16 bg-white overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#E53935] font-semibold text-sm uppercase tracking-widest mb-2">
            Trusted Partners
          </p>
          <h2 className="text-3xl font-black text-gray-900">
            50+ Leading Banks & NBFCs
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            We partner with India&apos;s top lending institutions to get you the best loan deals.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div ref={trackRef} className="flex items-center will-change-transform py-4">
          {doubled.map((p, i) => (
            <PartnerLogo key={`${p.name}-${i}`} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
