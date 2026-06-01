"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Loader2, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  firstName: z.string().min(2, "First name required").max(50),
  lastName: z.string().min(2, "Last name required").max(50),
  email: z.string().email("Enter a valid email"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile"),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Enter valid PAN (e.g. ABCDE1234F)"),
  gender: z.enum(["Male", "Female", "Other"]).refine((v) => !!v, "Select gender"),
  employmentType: z.enum(["Salaried", "Self-Employed", "Business", "Freelancer"]).refine((v) => !!v, "Select employment type"),
  salary: z.number().min(10000, "Minimum salary ₹10,000").max(100000000),
  desiredAmount: z.number().min(50000, "Minimum loan amount ₹50,000").max(100000000),
  city: z.string().min(2, "Enter your city").max(100),
  consent: z.boolean().refine((v) => v === true, { message: "You must agree to continue" }),
});

type FormData = z.infer<typeof schema>;

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const gender = watch("gender");
  const employment = watch("employmentType");
  const consent = watch("consent");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setServerError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      setSubmitted(true);
      reset();
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC]" id="lead-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-[#E53935] font-semibold text-sm uppercase tracking-widest mb-2">
              Check Eligibility
            </p>
            <h2 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
              Find Your Perfect<br />
              <span className="gradient-text">Loan in 60 Seconds</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Fill in your details and our AI will instantly match you with the best loan offers from 50+ lenders. Free, fast, and 100% secure.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "✅", text: "No impact on your CIBIL score" },
                { icon: "🔒", text: "Your data is 100% encrypted" },
                { icon: "⚡", text: "Get offers within 24 hours" },
                { icon: "🎯", text: "Personalized rates for your profile" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="h-5 w-5 text-[#22C55E]" />
                <span className="font-bold text-gray-900 text-sm">Security Guarantee</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Your information is protected with 256-bit SSL encryption. We never sell your data or spam you. Read our Privacy Policy.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-3xl p-10 shadow-card border border-gray-100 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-[#22C55E]" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    Application Received! 🎉
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Our loan specialist will call you within 24 hours with personalized offers.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#E53935] font-semibold text-sm hover:underline"
                  >
                    Submit another enquiry →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-3xl p-8 shadow-card border border-gray-100"
                  noValidate
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-[#E53935]" />
                    Loan Eligibility Form
                  </h3>

                  {/* Name Row */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Field label="First Name" error={errors.firstName?.message}>
                      <Input placeholder="Rahul" {...register("firstName")} className={inputCls(!!errors.firstName)} />
                    </Field>
                    <Field label="Last Name" error={errors.lastName?.message}>
                      <Input placeholder="Sharma" {...register("lastName")} className={inputCls(!!errors.lastName)} />
                    </Field>
                  </div>

                  {/* Email + Mobile */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Field label="Email Address" error={errors.email?.message}>
                      <Input type="email" placeholder="rahul@email.com" {...register("email")} className={inputCls(!!errors.email)} />
                    </Field>
                    <Field label="Mobile Number" error={errors.mobile?.message}>
                      <Input type="tel" placeholder="9876543210" maxLength={10} {...register("mobile")} className={inputCls(!!errors.mobile)} />
                    </Field>
                  </div>

                  {/* PAN + City */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Field label="PAN Number" error={errors.pan?.message}>
                      <Input
                        placeholder="ABCDE1234F"
                        maxLength={10}
                        {...register("pan")}
                        onChange={(e) => setValue("pan", e.target.value.toUpperCase())}
                        className={inputCls(!!errors.pan)}
                      />
                    </Field>
                    <Field label="City" error={errors.city?.message}>
                      <Input placeholder="Mumbai" {...register("city")} className={inputCls(!!errors.city)} />
                    </Field>
                  </div>

                  {/* Gender */}
                  <Field label="Gender" error={errors.gender?.message} className="mb-4">
                    <div className="flex gap-3">
                      {(["Male", "Female", "Other"] as const).map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setValue("gender", g, { shouldValidate: true })}
                          className={`flex-1 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-150 ${
                            gender === g
                              ? "border-[#E53935] bg-red-50 text-[#E53935]"
                              : "border-gray-200 text-gray-500 hover:border-gray-300"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {/* Employment Type */}
                  <Field label="Employment Type" error={errors.employmentType?.message} className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {(["Salaried", "Self-Employed", "Business", "Freelancer"] as const).map((e) => (
                        <button
                          key={e}
                          type="button"
                          onClick={() => setValue("employmentType", e, { shouldValidate: true })}
                          className={`py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-150 ${
                            employment === e
                              ? "border-[#E53935] bg-red-50 text-[#E53935]"
                              : "border-gray-200 text-gray-500 hover:border-gray-300"
                          }`}
                        >
                          {e}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {/* Salary + Desired Amount */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Field label="Monthly Salary (₹)" error={errors.salary?.message}>
                      <Input type="number" placeholder="50000" {...register("salary", { valueAsNumber: true })} className={inputCls(!!errors.salary)} />
                    </Field>
                    <Field label="Desired Loan Amount (₹)" error={errors.desiredAmount?.message}>
                      <Input type="number" placeholder="500000" {...register("desiredAmount", { valueAsNumber: true })} className={inputCls(!!errors.desiredAmount)} />
                    </Field>
                  </div>

                  {/* Consent */}
                  <div className="mb-6">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        checked={!!consent}
                        onCheckedChange={(checked) => setValue("consent", checked === true, { shouldValidate: true })}
                        className="mt-0.5"
                      />
                      <Label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                        I authorize Mera Loan and its lending partners to contact me via call, SMS, or WhatsApp regarding loan offers. I agree to the{" "}
                        <a href="/terms" className="text-[#E53935] hover:underline" target="_blank">Terms & Conditions</a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="text-[#E53935] hover:underline" target="_blank">Privacy Policy</a>.
                      </Label>
                    </div>
                    {errors.consent && (
                      <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>
                    )}
                  </div>

                  {serverError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                      {serverError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full gradient-brand border-0 text-white font-bold py-4 h-auto rounded-2xl text-base shadow-brand hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Check Eligibility Now →"
                    )}
                  </Button>

                  <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-[#22C55E]" />
                    256-bit SSL encrypted · No spam · No credit score impact
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function inputCls(hasError: boolean) {
  return `h-11 rounded-xl border-2 transition-colors focus-visible:ring-0 focus-visible:border-[#E53935] ${
    hasError ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#E53935]"
  }`;
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="text-sm font-semibold text-gray-700 mb-1.5 block">{label}</Label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
