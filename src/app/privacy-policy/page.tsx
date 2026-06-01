import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Mera Loan",
  description: "Read how Mera Loan collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/" className="text-[#E53935] text-sm mb-8 inline-block hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Information We Collect</h2>
            <p>
              Mera Loan (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a product of Reddington Global Consultancy Pvt Ltd, collects personal
              information you provide when using our loan advisory services. This includes your name, email address,
              mobile number, PAN number, employment details, income information, and loan requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Match you with suitable loan products from our partner lenders</li>
              <li>Provide personalized loan recommendations</li>
              <li>Contact you regarding your loan application</li>
              <li>Send you updates and promotional communications (with your consent)</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Information Sharing</h2>
            <p>
              We share your information with our partner banks and financial institutions solely for the purpose of
              processing your loan application. We do not sell your personal data to third parties. We may share
              information with service providers who assist in operating our platform, subject to confidentiality
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures including SSL/TLS encryption, secure database storage,
              and access controls to protect your personal information from unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site
              traffic, and personalize content. You can control cookie settings through your browser. See our{" "}
              <Link href="/cookie-policy" className="text-[#E53935] hover:underline">
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Contact Us</h2>
            <p>
              For privacy-related queries, contact our Data Protection Officer at:{" "}
              <a href="mailto:loanapplication@meraloan.co.in" className="text-[#E53935] hover:underline">
                loanapplication@meraloan.co.in
              </a>
            </p>
            <p className="mt-2">
              Reddington Global Consultancy Pvt Ltd<br />
              New Delhi, India
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
