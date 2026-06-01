import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Mera Loan",
  description: "Learn how Mera Loan uses cookies and how you can control them.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/" className="text-[#E53935] text-sm mb-8 inline-block hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2026</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites
              remember your preferences, analyze traffic patterns, and provide personalized experiences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How We Use Cookies</h2>
            <p>Mera Loan uses the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to function properly. These cannot
                be disabled.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                (e.g., Google Analytics). This data is aggregated and anonymous.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to show relevant advertisements and track campaign
                effectiveness. These are set with your consent.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences for a better
                experience on return visits.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Third-Party Cookies</h2>
            <p>
              We may use cookies from trusted third-party services including Google Analytics, Google Ads,
              Facebook Pixel, and other marketing platforms. These services have their own privacy policies
              governing cookie use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>View cookies stored on your device</li>
              <li>Block all or certain cookies</li>
              <li>Delete cookies when you close your browser</li>
            </ul>
            <p className="mt-3">
              Note: Disabling certain cookies may affect the functionality of our website and your user
              experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any significant changes
              by posting the new policy on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Contact Us</h2>
            <p>
              For questions about our cookie practices, email us at{" "}
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
