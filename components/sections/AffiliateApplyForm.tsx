"use client";

import { useState, type FormEvent } from "react";
import { MultiSelect } from "@/components/ui/MultiSelect";

const INDUSTRIES = ["Legal", "Financial", "Home Services", "Insurance"];
const COUNTRIES = ["United States", "Canada", "United Kingdom"];

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
  const [role, setRole] = useState<"Advertiser" | "Publisher" | "Both">("Publisher");
  const [services, setServices] = useState<string[]>([]);
  const [servicesOther, setServicesOther] = useState("");
  const [country, setCountry] = useState("");
  const [leadType, setLeadType] = useState<"Inbounds" | "Forms" | "Warm Transfers" | "Both">("Both");
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
          leadType,
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
    <section id="apply" className="scroll-mt-24 bg-white py-20">
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
                    Are you an advertiser or a publisher? <span className="text-red-500">*</span>
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {(
                      [
                        { value: "Advertiser", detail: "I want to buy leads, transfers, or calls" },
                        { value: "Publisher", detail: "I want to sell my traffic" },
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
                      placeholder="+1 (555) 555-5555"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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

                <div>
                  <span className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">Lead type</span>
                  <div className="grid grid-cols-2 gap-2 rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-2.5 sm:flex sm:flex-nowrap sm:items-center sm:justify-between">
                    {(["Inbounds", "Forms", "Warm Transfers", "Both"] as const).map((type) => (
                      <label key={type} className="flex items-center gap-1.5 whitespace-nowrap text-sm text-[var(--color-ink)]">
                        <input
                          type="radio"
                          name="leadType"
                          checked={leadType === type}
                          onChange={() => setLeadType(type)}
                          className="h-3.5 w-3.5 shrink-0 accent-[var(--color-brand)]"
                        />
                        {type}
                      </label>
                    ))}
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
