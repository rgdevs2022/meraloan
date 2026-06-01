"use client";

import { motion } from "framer-motion";
import { Shield, Lock, EyeOff, Server, Star, BadgeCheck } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Lock,
    title: "SSL Secured",
    desc: "256-bit AES encryption protects every data transmission.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: EyeOff,
    title: "100% Privacy",
    desc: "Your data is never sold or shared without your consent.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Shield,
    title: "No Spam",
    desc: "We only contact you about your specific loan request.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Server,
    title: "Secure Data",
    desc: "Enterprise-grade servers with regular security audits.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: BadgeCheck,
    title: "Verified Partners",
    desc: "All lending partners are RBI-registered and fully compliant.",
    color: "bg-blue-100 text-[#1B4FD8]",
  },
  {
    icon: Star,
    title: "4.8★ Google Rating",
    desc: "Rated excellent by 2,400+ verified customers on Google.",
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#1B4FD8] font-semibold text-sm uppercase tracking-widest mb-2">
            Your Trust, Our Priority
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Why Millions Trust <span className="gradient-text">Mera Loan</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We take your financial data and privacy extremely seriously. Here's what protects you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:shadow-card transition-shadow duration-200"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google reviews strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 bg-[#F8FAFC] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={`h-4 w-4 ${s <= 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-200 text-yellow-200"}`} />
                ))}
                <span className="font-black text-gray-900 ml-1">4.8</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">2,400+ Google Reviews</p>
              <p className="text-gray-400 text-xs">Verified by Google Business</p>
            </div>
          </div>
          <div className="flex gap-4 text-center">
            {[
              { value: "98%", label: "Would Recommend" },
              { value: "24hr", label: "Avg Response Time" },
              { value: "10K+", label: "Happy Customers" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-black text-gray-900">{value}</div>
                <div className="text-gray-500 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
