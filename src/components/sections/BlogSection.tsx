"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

const POSTS = [
  {
    category: "Credit Score",
    categoryColor: "text-purple-600 bg-purple-50",
    title: "How to Improve Your CIBIL Score from 650 to 750 in 6 Months",
    excerpt: "Your credit score directly impacts your loan eligibility and interest rates. Here's a proven step-by-step plan to significantly boost your score.",
    readTime: "5 min read",
    date: "May 20, 2026",
    image: "/increase_your_cibil_score_from_600_to_750_f6a59e6e2f.jpg",
  },
  {
    category: "Personal Loans",
    categoryColor: "text-[#1B4FD8] bg-blue-50",
    title: "Personal Loan vs Credit Card: Which is Better for Emergency Funds?",
    excerpt: "When you need money urgently, both options seem tempting. We break down the cost, speed, and risk of each to help you decide wisely.",
    readTime: "4 min read",
    date: "May 15, 2026",
    image: "/Personnal-loan-vs-credit-card.png",
  },
  {
    category: "Debt Management",
    categoryColor: "text-blue-600 bg-blue-50",
    title: "Debt Consolidation: How to Reduce 4 EMIs into 1 Lower Payment",
    excerpt: "Managing multiple loan EMIs can be stressful and expensive. Debt consolidation is a powerful strategy that can save you thousands every month.",
    readTime: "6 min read",
    date: "May 10, 2026",
    image: "/debtconsolidation.webp",
  },
  {
    category: "Financial Planning",
    categoryColor: "text-green-600 bg-green-50",
    title: "The 50/30/20 Budget Rule: A Simple Framework for Loan Repayment",
    excerpt: "One of the most effective personal finance rules to ensure you never miss an EMI and still have money for savings and lifestyle.",
    readTime: "4 min read",
    date: "May 5, 2026",
    image: "/503020rule.jpg",
  },
  {
    category: "Credit Score",
    categoryColor: "text-purple-600 bg-purple-50",
    title: "Why Your Loan Application Was Rejected: 8 Common Reasons",
    excerpt: "Loan rejections are frustrating, but understanding the reasons empowers you to fix them. Here are the 8 most common causes and their solutions.",
    readTime: "7 min read",
    date: "April 28, 2026",
    image: "/Personal-Loan-Rejection-Reasons.webp",
  },
  {
    category: "Personal Loans",
    categoryColor: "text-[#1B4FD8] bg-blue-50",
    title: "Top 10 Banks Offering Lowest Personal Loan Interest Rates in 2026",
    excerpt: "Interest rates can vary by 3–5% across lenders. A small difference can save lakhs over the loan tenure. Here's the updated comparison for 2026.",
    readTime: "5 min read",
    date: "April 22, 2026",
    image: "/personal_loans_(2).png",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-[#F0F4FF]" id="blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-[#1B4FD8] font-semibold text-sm uppercase tracking-widest mb-2">
              Financial Insights
            </p>
            <h2 className="text-4xl font-black text-gray-900">
              Learn & <span className="gradient-text">Grow</span>
            </h2>
          </div>
          <a href="#" className="text-[#1B4FD8] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 hover:shadow-md transition-shadow duration-300 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="h-44 relative overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-black/50 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">{post.date}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-[#1B4FD8] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center text-[#1B4FD8] text-sm font-semibold group-hover:gap-2 gap-1 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
