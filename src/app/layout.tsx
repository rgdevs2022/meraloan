import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://meraloan.in"),
  title: {
    default: "Mera Loan – Compare Best Loan Offers | Personal, Home & Business Loans",
    template: "%s | Mera Loan",
  },
  description:
    "Compare loan offers from 50+ banks & NBFCs. Check eligibility, get credit analysis, and apply for personal, home, or business loans instantly. Free service, no CIBIL impact.",
  keywords: [
    "personal loan", "home loan", "business loan", "loan comparison India",
    "CIBIL score", "loan eligibility", "best loan offers", "Mera Loan",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mera Loan",
    title: "Mera Loan – Compare Best Loan Offers from 50+ Banks",
    description: "India's smartest loan comparison platform.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#1B4FD8" />
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#F0F4FF", color: "#111827" }}>
        {children}
        <Toaster position="top-center" toastOptions={{ duration: 4000, style: { borderRadius: "12px", fontWeight: 500 } }} />
      </body>
    </html>
  );
}
