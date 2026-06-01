import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mera Loan",
  description: "Terms and conditions for using Mera Loan's loan advisory services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/" className="text-[#E53935] text-sm mb-8 inline-block hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2026</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Mera Loan&apos;s website and services, you agree to be bound by these Terms &amp;
              Conditions. If you do not agree to these terms, please do not use our services. Mera Loan is a product
              of Reddington Global Consultancy Pvt Ltd.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Services Description</h2>
            <p>
              Mera Loan is a loan advisory and lead generation platform. We help connect borrowers with partner banks
              and NBFCs for personal loans, home loans, business loans, and other financial products. We are not a
              direct lender; we facilitate connections between borrowers and lenders.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Eligibility</h2>
            <p>
              To use our services, you must be at least 21 years of age, a resident of India, and have a valid PAN
              card. Loan eligibility and approval is subject to the lender&apos;s policies, credit assessment, and
              applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Accuracy of Information</h2>
            <p>
              You agree to provide accurate, complete, and up-to-date information when using our platform. Providing
              false or misleading information may result in the rejection of your loan application and may have legal
              consequences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Disclaimer of Warranties</h2>
            <p>
              Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee loan approval,
              specific interest rates, or loan amounts. Loan terms are determined solely by the lending institution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Limitation of Liability</h2>
            <p>
              Mera Loan / Reddington Global Consultancy Pvt Ltd shall not be liable for any indirect, incidental,
              special, or consequential damages arising from the use or inability to use our services, or from any
              loan decisions made by partner lenders.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Intellectual Property</h2>
            <p>
              All content on this website including text, graphics, logos, and software is the property of
              Reddington Global Consultancy Pvt Ltd and is protected by applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes
              shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9. Contact</h2>
            <p>
              For any questions regarding these Terms, contact us at{" "}
              <a href="mailto:loanapplication@meraloan.co.in" className="text-[#E53935] hover:underline">
                loanapplication@meraloan.co.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
