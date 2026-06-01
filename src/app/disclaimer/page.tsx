import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | Mera Loan",
  description: "Important disclaimers about Mera Loan's loan advisory services.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/" className="text-[#E53935] text-sm mb-8 inline-block hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Disclaimer</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2026</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">General Disclaimer</h2>
            <p>
              Mera Loan, a product of Reddington Global Consultancy Pvt Ltd, is a loan advisory and matching
              platform. The information provided on this website is for general informational purposes only and
              does not constitute financial, legal, or investment advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">No Guarantee of Loan Approval</h2>
            <p>
              Using our services does not guarantee loan approval, specific interest rates, loan amounts, or terms.
              All loan approvals, rates, and conditions are determined solely by the respective lending institution
              based on their internal assessment and credit policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Indicative Information</h2>
            <p>
              All EMI calculations, interest rates, and eligibility estimates provided on this platform are
              indicative only. Actual rates and eligibility may vary based on the lender&apos;s assessment of your
              credit profile and other factors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for convenience only.
              We do not endorse or take responsibility for the content, privacy practices, or accuracy of any
              third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Regulatory Compliance</h2>
            <p>
              Mera Loan / Reddington Global Consultancy Pvt Ltd operates as a loan service provider/DSA (Direct
              Selling Agent). We comply with applicable RBI guidelines and data protection laws. We are not a bank,
              NBFC, or financial institution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Contact</h2>
            <p>
              For queries, contact us at{" "}
              <a href="mailto:loanapplication@merloan.co.in" className="text-[#E53935] hover:underline">
                loanapplication@merloan.co.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
