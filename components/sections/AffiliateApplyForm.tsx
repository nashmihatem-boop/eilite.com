"use client";

import { useState, type FormEvent } from "react";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { SOLUTIONS, COUNTRIES } from "@/lib/form-options";

const INDUSTRIES = ["Legal", "Financial", "Home Services", "Insurance", "Healthcare"];

const inputClass =
  "w-full rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)] focus:outline-none";

export function AffiliateApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<"Advertiser" | "Affiliate" | "Both">("Affiliate");
  const [services, setServices] = useState<string[]>([]);
  const [servicesOther, setServicesOther] = useState("");
  const [country, setCountry] = useState("");
  const [solution, setSolution] = useState<string[]>([]);
  const [solutionOther, setSolutionOther] = useState("");
  const [hasEin, setHasEin] = useState<"Yes" | "No" | "">("");
  const [website, setWebsite] = useState(""); // honeypot — real users never see or fill this
  const [mountedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/affiliate-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          role,
          services: [...services, ...(servicesOther ? [servicesOther] : [])],
          country,
          solution: [...solution, ...(solutionOther ? [solutionOther] : [])],
          hasEin,
          website,
          elapsedMs: Date.now() - mountedAt,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="apply" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface-alt)] p-8 sm:p-12">
          {submitted ? (
            <div className="py-6 text-center">
              <h3 className="font-heading text-2xl font-bold text-[var(--color-ink)]">
                Thanks — your application is in.
              </h3>
              <p className="mt-3 text-[var(--color-ink-soft)]">
                Our affiliate team will review your traffic and reach out shortly.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-center font-heading text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
                Apply Now — Start Earning
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-center text-sm text-[var(--color-ink-soft)]">
                Tell us what you send and we&apos;ll match you with the right buyers across every industry we
                serve.
              </p>

              <form onSubmit={handleSubmit} className="relative mt-8 space-y-5">
                {/* Honeypot field — hidden from real users, bots often fill it in */}
                <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="affiliate-website">Website</label>
                  <input
                    id="affiliate-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div>
                  <span className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">
                    Are you an advertiser or an affiliate? <span className="text-red-500">*</span>
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {(
                      [
                        { value: "Advertiser", detail: "I want to buy leads, transfers, or calls" },
                        { value: "Affiliate", detail: "I want to sell my traffic" },
                        { value: "Both", detail: "I want to buy and sell" },
                      ] as const
                    ).map((option) => {
                      const isActive = role === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setRole(option.value)}
                          className={`rounded-lg border p-3 text-left transition-colors ${
                            isActive
                              ? "border-[var(--color-brand)] bg-[var(--color-surface-tint)]"
                              : "border-[var(--color-line)] bg-white hover:border-[var(--color-brand)]/40"
                          }`}
                        >
                          <div className="text-sm font-bold text-[var(--color-ink)]">{option.value}</div>
                          <div className="mt-0.5 text-xs text-[var(--color-ink-soft)]">{option.detail}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">
                      First name <span className="text-red-500">*</span>
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">
                      Last name <span className="text-red-500">*</span>
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={inputClass}
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">
                      Email <span className="text-red-500">*</span>
                    </span>
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">
                      Phone number <span className="text-red-500">*</span>
                    </span>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +1 555 555 5555"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={30}
                      className={inputClass}
                    />
                  </label>
                </div>

                <MultiSelect
                  label="Select services"
                  options={INDUSTRIES}
                  value={services}
                  onChange={setServices}
                  otherValue={servicesOther}
                  onOtherChange={setServicesOther}
                  placeholder="Select industries you have traffic for"
                />

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">Country</span>
                  <select value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass}>
                    <option value="">Select...</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                <MultiSelect
                  label="What solution are you interested in?"
                  options={SOLUTIONS}
                  value={solution}
                  onChange={setSolution}
                  otherValue={solutionOther}
                  onOtherChange={setSolutionOther}
                  placeholder="Select solution"
                />

                <div>
                  <span className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">
                    Do you have an EIN for your company?
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {(["Yes", "No"] as const).map((option) => {
                      const isActive = hasEin === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setHasEin(option)}
                          className={`rounded-lg border p-3 text-center text-sm font-bold text-[var(--color-ink)] transition-colors ${
                            isActive
                              ? "border-[var(--color-brand)] bg-[var(--color-surface-tint)]"
                              : "border-[var(--color-line)] bg-white hover:border-[var(--color-brand)]/40"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {errorMessage && <p className="text-center text-sm text-red-600">{errorMessage}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-[var(--color-brand)] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting…" : "Apply Now — Start Earning"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
