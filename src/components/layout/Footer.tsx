import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";


const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#credit-report", label: "Credit Report" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

const LOAN_TYPES = [
  "Personal Loan",
  "Home Loan",
  "Business Loan",
  "Loan Against Property",
  "Car Loan",
  "Education Loan",
  "Gold Loan",
  "Two-Wheeler Loan",
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-3xl font-black text-[#F59E0B]">Mera Loan</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India&apos;s trusted loan comparison platform. We help you find the best loan offers from 50+ banks and NBFCs — quickly, transparently, and for free.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "Facebook", href: "https://facebook.com", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Twitter", href: "https://twitter.com", d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                { label: "Instagram", href: "https://instagram.com", d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" },
                { label: "LinkedIn", href: "https://linkedin.com", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { label: "YouTube", href: "https://youtube.com", d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-1.95C18.88 4 12 4 12 4s-6.88 0-8.6.47a2.78 2.78 0 0 0-1.94 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.95C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
              ].map(({ label, href, d }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1B4FD8] flex items-center justify-center transition-colors duration-200"
                  aria-label={label}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base">Loan Types</h3>
            <ul className="space-y-2">
              {LOAN_TYPES.map((loan) => (
                <li key={loan}>
                  <span className="text-gray-400 text-sm">{loan}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+918796508140" className="text-gray-400 hover:text-white text-sm transition-colors">
                    +91 87965 08140
                  </a>
                  <p className="text-gray-600 text-xs mt-0.5">Mon–Sat, 9 AM – 7 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <a href="mailto:loanapplication@meraloan.co.in" className="text-gray-400 hover:text-white text-sm transition-colors">
                  loanapplication@meraloan.co.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  750, Udyog Vihar Phase 5, Sector 19, Gurugram, Haryana 122016
                </span>
              </li>
            </ul>

            {/* Legal */}
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
              <ul className="space-y-1.5">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-600 text-xs leading-relaxed mb-4">
            <strong className="text-gray-500">Disclaimer:</strong> Mera Loan is a loan comparison and financial advisory platform. We are not a bank or NBFC. Loan approval is at the sole discretion of the respective lending institution. Interest rates and eligibility are subject to change. Please read all terms carefully before applying.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Mera Loan. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-gray-400">
                <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                SSL Secured
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-gray-400">
                🔒 100% Privacy Protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
