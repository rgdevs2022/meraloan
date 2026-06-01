"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is a credit score and why does it matter for loans?",
    a: "A credit score (typically from CIBIL, Experian, or CRIF) is a 3-digit number between 300–900 that represents your creditworthiness. Most banks require a score of 700+ for unsecured loans like personal loans. A higher score means lower interest rates and faster approvals. Mera Loan provides a free credit analysis to help you understand and improve your score.",
  },
  {
    q: "How does Mera Loan work?",
    a: "Mera Loan is a loan comparison and lead generation platform. You fill in your basic details, and our AI analyses your profile to match you with the best loan offers from 50+ banks and NBFCs. Our loan specialists then guide you through the entire application process — completely free of charge.",
  },
  {
    q: "Will checking my loan eligibility affect my CIBIL score?",
    a: "No. Checking your eligibility on Mera Loan is a 'soft inquiry' and does not impact your CIBIL or credit score in any way. Only when a lender formally processes your application does a 'hard inquiry' occur, which may have a minor, temporary effect on your score.",
  },
  {
    q: "How quickly can I get a loan through Mera Loan?",
    a: "Most of our lending partners offer instant in-principle approvals within minutes. Full loan disbursal typically happens within 24–72 hours for personal loans and 7–15 days for home loans and business loans, depending on document verification and lender processing times.",
  },
  {
    q: "What documents are required to apply for a loan?",
    a: "Typically: PAN card, Aadhaar card, last 3 months' salary slips (for salaried), ITR for last 2 years (for self-employed), last 6 months' bank statement, and a passport-size photo. Exact requirements vary by lender and loan type. Our team will guide you with a specific checklist.",
  },
  {
    q: "Can self-employed individuals or business owners apply?",
    a: "Absolutely! We have strong partnerships with lenders who specialize in self-employed, freelancer, and business loan products. You'll need to provide your ITR, GST registration, business vintage documents, and bank statements. Our specialists will identify the best-fit lenders for your profile.",
  },
  {
    q: "Is my personal data safe with Mera Loan?",
    a: "Yes, 100%. We use 256-bit SSL encryption to protect all data. We never sell your information to unauthorized third parties. Your data is only shared with lenders you specifically authorize. Read our Privacy Policy for complete details.",
  },
  {
    q: "What if I have a low credit score? Can I still apply?",
    a: "Yes. Some of our NBFC partners offer loans to individuals with scores as low as 600. Additionally, our credit improvement advisory service can guide you on specific steps to improve your score within 3–6 months, unlocking better loan rates in the future.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#1B4FD8] font-semibold text-sm uppercase tracking-widest mb-2">
            Got Questions?
          </p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-500">
            Everything you need to know about loans, credit scores, and how Mera Loan works.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-100 rounded-2xl px-6 shadow-card data-[state=open]:border-[#1B4FD8]/30 data-[state=open]:shadow-brand transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#1B4FD8] py-5 text-sm leading-snug [&>svg]:text-[#1B4FD8]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-4">Still have questions? Our experts are here to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+918796508140"
              className="inline-flex items-center justify-center gap-2 bg-[#1B4FD8] text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#1E40AF] transition-colors"
            >
              📞 Call Us: +91 87965 08140
            </a>
            <a
              href="https://wa.me/918796508140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#22C55E] transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
