"use client";

import { useEffect, useState, type ReactNode, type FormEvent } from "react";
import { X } from "lucide-react";
import { useDemoModal } from "@/lib/demo-modal-context";
import { MultiSelect } from "@/components/ui/MultiSelect";

const INDUSTRIES = ["Legal", "Financial Services", "Home Services", "Insurance"];
const SOLUTIONS = ["Premium Leads", "Premium Warm Transfers", "Inbound Calls"];
const ROLES = [
  "Broker",
  "Contractor",
  "Affiliate",
  "Publisher",
  "Aggregator",
  "Lead Provider",
  "Financial Institution",
  "Insurance Provider",
  "Law Firm",
  "Lawyer",
  "Advertising Agency",
];

const inputClass =
  "w-full rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)] focus:outline-none";

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

export function DemoModal() {
  const { isOpen, close, prefillIndustry } = useDemoModal();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState<string[]>([]);
  const [roleOther, setRoleOther] = useState("");
  const [industry, setIndustry] = useState<string[]>([]);
  const [industryOther, setIndustryOther] = useState("");
  const [solution, setSolution] = useState<string[]>([]);
  const [solutionOther, setSolutionOther] = useState("");
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [agreeSms, setAgreeSms] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot — real users never see or fill this
  const [openedAt, setOpenedAt] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIndustry(prefillIndustry ? [prefillIndustry] : []);
      setOpenedAt(Date.now());
    }
  }, [isOpen, prefillIndustry]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [close]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    if (!agreeMarketing || !agreeSms) {
      setErrorMessage("Please agree to both consent checkboxes to continue.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          company,
          role: [...role, ...(roleOther ? [roleOther] : [])],
          industry: [...industry, ...(industryOther ? [industryOther] : [])],
          solution: [...solution, ...(solutionOther ? [solutionOther] : [])],
          agreeMarketing,
          agreeSms,
          website,
          elapsedMs: Date.now() - openedAt,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetAndClose() {
    close();
    setTimeout(() => {
      setSubmitted(false);
      setErrorMessage("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setRole([]);
      setRoleOther("");
      setIndustry([]);
      setIndustryOther("");
      setSolution([]);
      setSolutionOther("");
      setAgreeMarketing(false);
      setAgreeSms(false);
      setWebsite("");
    }, 300);
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-8 sm:items-center"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-line)]"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <h3 className="font-heading text-2xl font-bold text-[var(--color-ink)]">Thanks — we&apos;ve got it.</h3>
            <p className="mt-3 text-[var(--color-ink-soft)]">
              A member of our team will reach out shortly to get you set up.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-8 rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-center font-heading text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
              Book a Demo Call
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" required>
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Last name" required>
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone number" required>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 555-5555"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Company name">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass}
                />
              </Field>

              <MultiSelect
                label="Which best describes you?"
                options={ROLES}
                value={role}
                onChange={setRole}
                otherValue={roleOther}
                onOtherChange={setRoleOther}
                placeholder="Select all that apply"
              />

              <MultiSelect
                label="Industry"
                options={INDUSTRIES}
                value={industry}
                onChange={setIndustry}
                otherValue={industryOther}
                onOtherChange={setIndustryOther}
                placeholder="Select industry"
              />

              <MultiSelect
                label="What solution are you interested in?"
                options={SOLUTIONS}
                value={solution}
                onChange={setSolution}
                otherValue={solutionOther}
                onOtherChange={setSolutionOther}
                placeholder="Select solution"
              />

              {/* Honeypot field — hidden from real users, bots often fill it in */}
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="demo-website">Website</label>
                <input
                  id="demo-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="space-y-3 text-xs text-[var(--color-ink-soft)]">
                <label className="flex items-start gap-2.5">
                  <input
                    required
                    type="checkbox"
                    checked={agreeMarketing}
                    onChange={(e) => setAgreeMarketing(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-[var(--color-line)]"
                  />
                  <span>
                    I agree to receive marketing communications and updates from Eilite.com. I understand that I
                    can unsubscribe at any time.
                  </span>
                </label>
                <label className="flex items-start gap-2.5">
                  <input
                    required
                    type="checkbox"
                    checked={agreeSms}
                    onChange={(e) => setAgreeSms(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-[var(--color-line)]"
                  />
                  <span>
                    By checking this box and submitting this form, you agree to receive promotional and
                    personalized marketing text messages and phone calls from Eilite.com at the number used
                    above. Msg and call frequency may vary. Msg and data rates may apply.
                  </span>
                </label>
              </div>

              {errorMessage && <p className="text-center text-sm text-red-600">{errorMessage}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[var(--color-brand)] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting…" : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
